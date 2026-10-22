import { describe, expect, it } from "vitest";
import { RANK_TIERS, rankLabelParts, rankLevelKicker, rankNamesMatch, rankTemplate } from "@/lib/ranks";

const tier = (n: number) => RANK_TIERS.find((t) => t.level === n)!;

describe("rank labels never duplicate (R38-E)", () => {
  it("detects matching standard/Premium names", () => {
    expect(rankNamesMatch(tier(7))).toBe(true); // MASTER / Master
    expect(rankNamesMatch(tier(8))).toBe(true); // GRANDMASTER / Grandmaster
    expect(rankNamesMatch(tier(1))).toBe(false); // IRON / Recruit
  });
  it("returns distinct label parts", () => {
    expect(rankLabelParts(tier(7))).toEqual(["MASTER"]);
    expect(rankLabelParts(tier(1))).toEqual(["IRON", "Recruit"]);
  });
  it("drops the crystal slot in combined templates when names match", () => {
    const alt = "A.C.E Custom 3D Crystalline Level {level} {crystal} {name} emblem profile badge";
    expect(rankTemplate(alt, tier(7))).toBe("A.C.E Custom 3D Crystalline Level 7 Master emblem profile badge");
    expect(rankTemplate("Rank {level} · {name} · {crystal}", tier(8))).toBe("Rank 8 · Grandmaster");
    expect(rankTemplate("Rank {level} · {name} · {crystal}", tier(1))).toBe("Rank 1 · Recruit · IRON");
  });
  it("kicker drops a duplicate crystal label", () => {
    expect(rankLevelKicker("LEVEL {level} · {crystal}", tier(7))).toBe("LEVEL 7");
    expect(rankLevelKicker("LEVEL {level} · {crystal}", tier(2))).toBe("LEVEL 2 · BRONZE");
  });
  it("no tier renders a doubled word in any combined label", () => {
    for (const t of RANK_TIERS) {
      const text = rankTemplate("{crystal} {name}", t).toLowerCase().split(/\s+/);
      expect(new Set(text).size, t.name).toBe(text.length);
    }
  });
});
