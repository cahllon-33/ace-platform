import { describe, expect, it } from "vitest";
import { RANK_TIERS, rankArtAsset, rankIllustratedAsset } from "@/lib/ranks";

describe("Premium illustrated rank art mapping", () => {
  it("gives each of the 10 tiers its own illustrated emblem", () => {
    const srcs = RANK_TIERS.map((tier) => rankIllustratedAsset(tier.level).stillSrc);
    expect(srcs).toHaveLength(10);
    expect(new Set(srcs).size).toBe(10);
    expect(srcs[0]).toBe("/ranks/01-recruit.png");
    expect(srcs[9]).toBe("/ranks/10-legend.png");
  });
  it("uses the player's own tier, not a fixed ACE ELITE image", () => {
    for (const tier of RANK_TIERS) {
      expect(rankArtAsset(tier.level, "premium").stillSrc).toBe(rankIllustratedAsset(tier.level).stillSrc);
      if (tier.level < 10) expect(rankArtAsset(tier.level, "premium").stillSrc).not.toBe("/ranks/10-legend.png");
    }
  });
});
