// Feature: landing-page, Property 3: Email validation correctness
import { describe, it, expect } from "vitest";
import fc from "fast-check";
import { validateEmail } from "../components/EmailForm";

/**
 * Arbitraries for generating valid and invalid email parts.
 */
const localPartChar = fc.mapToConstant(
  { num: 26, build: (v) => String.fromCharCode(97 + v) }, // a-z
  { num: 26, build: (v) => String.fromCharCode(65 + v) }, // A-Z
  { num: 10, build: (v) => String.fromCharCode(48 + v) }, // 0-9
  { num: 4, build: (v) => ['.', '_', '-', '+'][v] }
);

const domainLabelChar = fc.mapToConstant(
  { num: 26, build: (v) => String.fromCharCode(97 + v) },
  { num: 10, build: (v) => String.fromCharCode(48 + v) }
);

const validLocalPart = fc
  .array(localPartChar, { minLength: 1, maxLength: 20 })
  .map((chars) => chars.join(""));

const domainLabel = fc
  .array(domainLabelChar, { minLength: 1, maxLength: 10 })
  .map((chars) => chars.join(""));

const validDomain = fc
  .tuple(domainLabel, domainLabel)
  .map(([sub, tld]) => `${sub}.${tld}`);

const validEmail = fc
  .tuple(validLocalPart, validDomain)
  .map(([local, domain]) => `${local}@${domain}`);

describe("Property 3: Email validation correctness", () => {
  it("accepts all well-formed emails (local@domain.tld)", () => {
    fc.assert(
      fc.property(validEmail, (email) => {
        const result = validateEmail(email);
        expect(result).toBeNull();
      }),
      { numRuns: 200 }
    );
  });

  it("rejects empty and whitespace-only strings", () => {
    const whitespace = fc.nat({ max: 10 }).map((n) => " ".repeat(n));
    fc.assert(
      fc.property(whitespace, (input) => {
        const result = validateEmail(input);
        expect(result).toBe("Please enter an email address.");
      }),
      { numRuns: 100 }
    );
  });

  it("rejects strings with no @ symbol", () => {
    const noAt = fc
      .string({ minLength: 1, maxLength: 30 })
      .filter((s) => !s.includes("@") && s.trim() !== "");
    fc.assert(
      fc.property(noAt, (input) => {
        const result = validateEmail(input);
        expect(result).not.toBeNull();
      }),
      { numRuns: 200 }
    );
  });

  it("rejects strings with empty local part (starts with @)", () => {
    fc.assert(
      fc.property(validDomain, (domain) => {
        const result = validateEmail(`@${domain}`);
        expect(result).toBe("Please enter a valid email address.");
      }),
      { numRuns: 100 }
    );
  });

  it("rejects strings where domain has no dot", () => {
    const noDotDomain = domainLabel; // single label, no dot
    fc.assert(
      fc.property(validLocalPart, noDotDomain, (local, domain) => {
        const result = validateEmail(`${local}@${domain}`);
        expect(result).toBe("Please enter a valid email address.");
      }),
      { numRuns: 200 }
    );
  });

  it("rejects strings where domain ends with a dot", () => {
    fc.assert(
      fc.property(validLocalPart, validDomain, (local, domain) => {
        const result = validateEmail(`${local}@${domain}.`);
        expect(result).toBe("Please enter a valid email address.");
      }),
      { numRuns: 100 }
    );
  });

  it("null and undefined are rejected", () => {
    expect(validateEmail(null)).toBe("Please enter an email address.");
    expect(validateEmail(undefined)).toBe("Please enter an email address.");
    expect(validateEmail("")).toBe("Please enter an email address.");
  });
});
