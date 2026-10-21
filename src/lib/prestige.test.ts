import { describe, expect, it } from "vitest";
import { PRESTIGE_LEVELS, prestigeBadge, prestigeForRp, prestigeSetFor } from "./prestige";
import { RANK_TIERS } from "./ranks";

describe("prestige levels", () => {
  it("five levels between 2,000 and 3,000 RP", () => {
    expect(PRESTIGE_LEVELS.map((p) => p.minRp)).toEqual([2000, 2200, 2400, 2600, 2800]);
    expect(prestigeForRp(1999)).toBeNull();
    expect(prestigeForRp(2000)?.level).toBe(1);
    expect(prestigeForRp(2799)?.level).toBe(4);
    expect(prestigeForRp(3000)?.level).toBe(5);
  });
  it("names are new and never reuse a rank name", () => {
    const ranks = new Set(RANK_TIERS.map((t) => t.name.toLowerCase()));
    for (const p of PRESTIGE_LEVELS) expect(ranks.has(p.name.toLowerCase())).toBe(false);
  });
  it("Free shows no badge set; Plus/Premium get their own set (cosmetic, RP-earned)", () => {
    expect(prestigeSetFor("FREE")).toBeNull();
    expect(prestigeBadge(2500, "FREE")).toBeNull();
    expect(prestigeBadge(2500, "PLUS")).toMatchObject({ level: 3, set: "plus" });
    expect(prestigeBadge(2500, "PREMIUM")).toMatchObject({ level: 3, set: "premium" });
    expect(prestigeBadge(1900, "PREMIUM")).toBeNull();
  });
});
