const LOOPS_BASE_URL = "https://app.loops.so/api/newsletter-form/";
const TIMEOUT_MS = 10_000;

/**
 * Returns the configured Loops.so form ID, or null if not set.
 * @returns {string|null}
 */
export function getFormId() {
  const id = import.meta.env.VITE_LOOPS_FORM_ID;
  return id || null;
}

/**
 * Submits an email address to the Loops.so Forms endpoint.
 *
 * @param {string} email - The email address to subscribe.
 * @returns {Promise<{success: boolean, error: string|null}>}
 */
export async function submitEmail(email) {
  const formId = getFormId();
  if (!formId) {
    return { success: true, error: null };
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(`${LOOPS_BASE_URL}${formId}`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `email=${encodeURIComponent(email)}`,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (response.status === 429) {
      return { success: false, error: "Too many requests. Please try again later." };
    }

    const data = await response.json();
    if (data.success) {
      return { success: true, error: null };
    }
    return { success: false, error: "Something went wrong. Please try again." };
  } catch {
    clearTimeout(timeoutId);
    return { success: false, error: "Something went wrong. Please try again." };
  }
}
