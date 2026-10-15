import { describe, expect, it } from "vitest";
import { canUsePremiumRankArt, effectiveRankArt, parseRankArt, storedRankArtChoice } from "@/server/rank-art";

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
  it("defaults a PREMIUM plan with no explicit choice to Premium art", () => {
    expect(effectiveRankArt({ subscriptionTier: "PREMIUM", rankArt: null })).toBe("premium");
  });
  it("never gives Premium art to non-Premium plans, even by default", () => {
    expect(effectiveRankArt({ subscriptionTier: "FREE", rankArt: null })).toBe("standard");
    expect(effectiveRankArt({ subscriptionTier: "PLUS", rankArt: null })).toBe("standard");
  });
  it("switches on automatically when a no-choice account becomes PREMIUM", () => {
    const row = { subscriptionTier: "FREE" as const, rankArt: null };
    expect(effectiveRankArt(row)).toBe("standard");
    expect(effectiveRankArt({ ...row, subscriptionTier: "PREMIUM" })).toBe("premium");
  });
  it("stores an explicit choice only for PREMIUM plans", () => {
    expect(storedRankArtChoice("PREMIUM", "standard")).toBe("STANDARD");
    expect(storedRankArtChoice("PREMIUM", "premium")).toBe("PREMIUM");
    expect(storedRankArtChoice("FREE", "standard")).toBeNull();
    expect(storedRankArtChoice("PLUS", "standard")).toBeNull();
  });
  it("parses only known values", () => {
    expect(parseRankArt("premium")).toBe("premium");
    expect(parseRankArt("standard")).toBe("standard");
    expect(parseRankArt("PREMIUM")).toBeNull();
    expect(parseRankArt(1)).toBeNull();
  });
});
