import { describe, expect, it } from "vitest";
import { canUsePremiumRankArt, effectiveRankArt, parseRankArt } from "@/server/rank-art";

describe("Premium rank art gate", () => {
  it("allows only the PREMIUM plan", () => {
    expect(canUsePremiumRankArt("FREE")).toBe(false);
    expect(canUsePremiumRankArt("PLUS")).toBe(false);
    expect(canUsePremiumRankArt("PREMIUM")).toBe(true);
  });
  it("ignores a stored PREMIUM choice without the PREMIUM plan", () => {
    expect(effectiveRankArt({ subscriptionTier: "FREE", rankArt: "PREMIUM" })).toBe("standard");
    expect(effectiveRankArt({ subscriptionTier: "PLUS", rankArt: "PREMIUM" })).toBe("standard");
    expect(effectiveRankArt({ subscriptionTier: "PREMIUM", rankArt: "PREMIUM" })).toBe("premium");
    expect(effectiveRankArt({ subscriptionTier: "PREMIUM", rankArt: "STANDARD" })).toBe("standard");
  });
  it("parses only known values", () => {
    expect(parseRankArt("premium")).toBe("premium");
    expect(parseRankArt("standard")).toBe("standard");
    expect(parseRankArt("PREMIUM")).toBeNull();
    expect(parseRankArt(1)).toBeNull();
  });
});
