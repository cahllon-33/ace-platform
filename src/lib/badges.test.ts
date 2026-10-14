import { describe, expect, it } from "vitest";
import { goldBadges, playerBadges, specialBadges } from "@/lib/badges";
import { hasEliteSeal } from "@/lib/pricing";

const base = { rankLevel: 4, wins: 3, losses: 2, steamLinked: true };

describe("badges", () => {
  it("gives every player gold badges from stored data", () => {
    const ids = goldBadges({ ...base, subscriptionTier: "FREE" }).map((b) => b.id);
    expect(ids).toEqual(["rank", "steam", "placements", "first-win"]);
  });

  it("marks placement complete after ten stored matches", () => {
    const ids = goldBadges({ ...base, wins: 0, losses: 10, steamLinked: false, subscriptionTier: "FREE" }).map((b) => b.id);
    expect(ids).toEqual(["rank", "placed"]);
  });

  it("clamps an out-of-range rank level", () => {
    expect(goldBadges({ ...base, rankLevel: 99, subscriptionTier: null })[0].label).toContain("R10");
    expect(goldBadges({ ...base, rankLevel: -3, subscriptionTier: null })[0].label).toContain("R1");
  });

  it("reserves special badges for PREMIUM only", () => {
    expect(specialBadges({ subscriptionTier: "FREE" })).toEqual([]);
    expect(specialBadges({ subscriptionTier: "PLUS" })).toEqual([]);
    expect(specialBadges({ subscriptionTier: "premium" })).toEqual([]);
    expect(specialBadges({ subscriptionTier: undefined })).toEqual([]);
    expect(specialBadges({ subscriptionTier: "PREMIUM" }).every((b) => b.kind === "special")).toBe(true);
    expect(playerBadges({ ...base, subscriptionTier: "PLUS" }).some((b) => b.kind === "special")).toBe(false);
  });

  it("keeps the elite seal Premium-only", () => {
    expect(hasEliteSeal("PREMIUM")).toBe(true);
    expect(hasEliteSeal("PLUS")).toBe(false);
    expect(hasEliteSeal("FREE")).toBe(false);
  });
});
