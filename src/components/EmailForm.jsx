import { createSignal } from "solid-js";

function validateEmail(email) {
  if (!email || email.trim() === "") return "Please enter an email address.";
  const atIndex = email.indexOf("@");
  if (atIndex < 1) return "Please enter a valid email address.";
  const domain = email.slice(atIndex + 1);
  if (!domain || domain.indexOf(".") < 1 || domain.endsWith("."))
    return "Please enter a valid email address.";
  return null;
}

export default function EmailForm() {
  const [email, setEmail] = createSignal("");
  const [error, setError] = createSignal(null);
  const [submitted, setSubmitted] = createSignal(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateEmail(email());
    if (validationError) {
      setError(validationError);
      setSubmitted(false);
      return;
    }
    setError(null);
    setSubmitted(true);
  };

  return (
    <div class="mt-6">
      {submitted() ? (
        <p class="text-success text-base" role="status">
          Thanks! We'll keep you posted.
        </p>
      ) : (
        <form novalidate onSubmit={handleSubmit} class="flex flex-col items-center gap-3">
          <div class="flex flex-col sm:flex-row gap-2 w-full max-w-md">
            <label for="email-input" class="sr-only">Email address</label>
            <input
              id="email-input"
              type="email"
              placeholder="you@example.com"
              value={email()}
              onInput={(e) => setEmail(e.target.value)}
              class="input input-bordered rounded-lg flex-1 focus:ring-2 focus:ring-primary focus:outline-none"
              aria-describedby={error() ? "email-error" : undefined}
              aria-invalid={error() ? "true" : undefined}
            />
            <button type="submit" class="btn btn-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-base-100">
              Notify me
            </button>
          </div>
          {error() && (
            <span id="email-error" class="text-error text-sm" role="alert">
              {error()}
            </span>
          )}
        </form>
      )}
    </div>
  );
}

export { validateEmail };
