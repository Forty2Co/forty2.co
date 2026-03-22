import { render, fireEvent } from "@solidjs/testing-library";
import { describe, it, expect } from "vitest";
import EmailForm from "../components/EmailForm";

describe("EmailForm unit tests", () => {
  it("shows error when submitting empty form", async () => {
    const { container } = render(() => <EmailForm />);
    const button = container.querySelector("button[type='submit']");
    await fireEvent.click(button);
    const error = container.querySelector("#email-error");
    expect(error).not.toBeNull();
    expect(error.textContent).toBe("Please enter an email address.");
  });

  it("shows error when submitting invalid email", async () => {
    const { container } = render(() => <EmailForm />);
    const input = container.querySelector("input[type='email']");
    const button = container.querySelector("button[type='submit']");
    await fireEvent.input(input, { target: { value: "notanemail" } });
    await fireEvent.click(button);
    const error = container.querySelector("#email-error");
    expect(error).not.toBeNull();
    expect(error.textContent).toBe("Please enter a valid email address.");
  });

  it("shows confirmation when submitting valid email", async () => {
    const { container } = render(() => <EmailForm />);
    const input = container.querySelector("input[type='email']");
    const button = container.querySelector("button[type='submit']");
    await fireEvent.input(input, { target: { value: "test@example.com" } });
    await fireEvent.click(button);
    const confirmation = container.querySelector("[role='status']");
    expect(confirmation).not.toBeNull();
    expect(confirmation.textContent).toContain("Thanks");
  });

  it("email input has an associated label", () => {
    const { container } = render(() => <EmailForm />);
    const input = container.querySelector("input[type='email']");
    expect(input).not.toBeNull();
    const id = input.getAttribute("id");
    const label = container.querySelector(`label[for='${id}']`);
    const hasAriaLabel = input.hasAttribute("aria-label");
    expect(label || hasAriaLabel).toBeTruthy();
  });
});
