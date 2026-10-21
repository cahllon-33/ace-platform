import { describe, expect, it } from "vitest";
import { PRESTIGE_LEVELS, prestigeBadge, prestigeForRp, prestigeSetFor } from "./prestige";
import { RANK_TIERS } from "./ranks";
import { winsToReach } from "./rating";
import { RP_RULES } from "./rp-rules";
import { existsSync } from "node:fs";
import { join } from "node:path";

describe("prestige levels", () => {
  it("five levels inside 2,000–3,000 RP; Paragon (2,950) is final, cap stays 3,000", () => {
    expect(PRESTIGE_LEVELS.map((p) => p.minRp)).toEqual([2150, 2350, 2550, 2750, 2950]);
    expect(prestigeForRp(2149)).toBeNull();
    expect(prestigeForRp(2150)?.level).toBe(1);
    expect(prestigeForRp(2949)?.level).toBe(4);
    expect(prestigeForRp(3000)?.level).toBe(5);
    expect(PRESTIGE_LEVELS[4].minRp).toBeLessThan(RP_RULES.ceiling);
    expect(RP_RULES.ceiling).toBe(3000);
  });
  it("wins needed (v5, even odds): 14 from Legend to the first badge and 14 per badge after", () => {
    const steps = [RANK_TIERS[9].minRating, ...PRESTIGE_LEVELS.map((p) => p.minRp)];
    expect(steps[0]).toBe(1950);
    expect(steps.slice(1).map((to, i) => winsToReach(steps[i], to).total)).toEqual([14, 14, 14, 14, 14]);
  });
  it("names are new and never reuse a rank name", () => {
    const ranks = new Set(RANK_TIERS.map((t) => t.name.toLowerCase()));
    for (const p of PRESTIGE_LEVELS) expect(ranks.has(p.name.toLowerCase())).toBe(false);
  });
  it("Free shows no badge set; Plus/Premium get their own set (cosmetic, RP-earned)", () => {
    expect(prestigeSetFor("FREE")).toBeNull();
    expect(prestigeBadge(2500, "FREE")).toBeNull();
    expect(prestigeBadge(2500, "PLUS")).toMatchObject({ level: 2, set: "plus" });
    expect(prestigeBadge(2500, "PREMIUM")).toMatchObject({ level: 2, set: "premium" });
    expect(prestigeBadge(2149, "PREMIUM")).toBeNull();
  });
  it("every level has its own transparent emblem art in both sizes", () => {
    expect(new Set(PRESTIGE_LEVELS.map((p) => p.slug)).size).toBe(5);
    for (const p of PRESTIGE_LEVELS) for (const px of [192, 512]) expect(existsSync(join(process.cwd(), "public/prestige", `${p.slug}-${px}.webp`))).toBe(true);
  });
});

describe("admin override labels include prestige", () => {
  it("describeRp names the prestige badge at 2,150+", async () => {
    const { describeRp } = await import("./rank-override");
    expect(describeRp(2149)).not.toMatch(/Ascendant/);
    expect(describeRp(2150)).toMatch(/A\.C\.E\. Ascendant · 2150 RP$/);
    expect(describeRp(2950)).toMatch(/A\.C\.E\. Paragon/);
  });
});
