import { describe, expect, it } from "vitest";
import { CONTACT_EMAIL, DEFAULT_CONTACT_EMAIL, withContact } from "@/lib/contact";
import { textFor } from "@/lib/i18n/text";
import { DICTIONARIES } from "@/lib/i18n";

describe("contact email config", () => {
  it("defaults to the official address", () => {
    expect(DEFAULT_CONTACT_EMAIL).toBe("ace.platform.official@gmail.com");
    expect(CONTACT_EMAIL).toBe(process.env.ACE_CONTACT_EMAIL?.trim() || DEFAULT_CONTACT_EMAIL);
  });
  it("swaps an override into nested text and leaves the default untouched", () => {
    const bag = { a: `Mail ${DEFAULT_CONTACT_EMAIL}`, b: [{ c: DEFAULT_CONTACT_EMAIL }], n: 3 };
    expect(withContact(bag, "x@y.z")).toEqual({ a: "Mail x@y.z", b: [{ c: "x@y.z" }], n: 3 });
    expect(withContact(bag, DEFAULT_CONTACT_EMAIL)).toBe(bag);
  });
  it("no locale text still carries the old support address", () => {
    for (const id of ["en", "he", "ja", "ar"]) {
      expect(JSON.stringify(textFor(id))).not.toContain("support@ace-platform.gg");
      expect(JSON.stringify(DICTIONARIES[id])).not.toContain("support@ace-platform.gg");
    }
    expect(JSON.stringify(textFor("en").pricing.billing)).not.toMatch(/once it exists|does not exist|when billing exists/i);
  });
});
