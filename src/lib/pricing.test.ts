import { describe, expect, it } from "vitest";
import { FREE_PRICE, PLUS_PRICE, PREMIUM_PRICE, playCtaHref } from "@/lib/pricing";

describe("pricing", () => {
  it("keeps exact prices", () => {
    expect([FREE_PRICE, PLUS_PRICE, PREMIUM_PRICE]).toEqual(["$0", "$4", "$7"]);
  });
  it("sends paying members to play and everyone else to membership", () => {
    expect(playCtaHref("PREMIUM")).toBe("/play");
    expect(playCtaHref("PLUS")).toBe("/play");
    expect(playCtaHref("FREE")).toBe("/pricing");
    expect(playCtaHref(null)).toBe("/pricing");
    expect(playCtaHref("premium")).toBe("/pricing");
  });
});
