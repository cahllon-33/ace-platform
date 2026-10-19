import { describe, expect, it } from "vitest";
import { cleanReason, csvCell, describeRp, divisionFloorRp, planOverride, planReset, resolveOverrideRp, toCsv } from "@/lib/rank-override";
import { rankProgress } from "@/lib/rank-progress";
import { RANK_TIERS } from "@/lib/ranks";

describe("rank override", () => {
  it("division floors land exactly in that tier and division", () => {
    for (const t of RANK_TIERS) for (const d of ["III", "II", "I"] as const) {
      const p = rankProgress(divisionFloorRp(t.level, d));
      expect([p.tier.level, p.division]).toEqual([t.level, d]);
    }
  });
  it("exact RP is validated against floor/ceiling and integers", () => {
    expect(resolveOverrideRp({ kind: "rp", rp: 1777 })).toBe(1777);
    expect(() => resolveOverrideRp({ kind: "rp", rp: 1.5 })).toThrow();
    expect(() => resolveOverrideRp({ kind: "rp", rp: 999999 })).toThrow();
    expect(() => resolveOverrideRp({ kind: "rp", rp: -50 })).toThrow();
    expect(() => resolveOverrideRp({ kind: "division", level: 11, division: "I" })).toThrow();
  });
  it("first override keeps the calculated RP as base; later overrides keep the original base", () => {
    const first = planOverride({ competitiveRating: 1200, rankOverrideBaseRp: null }, { kind: "rp", rp: 2500 });
    expect(first.baseRp).toBe(1200);
    expect(first.rankLevel).toBe(rankProgress(2500).tier.level);
    const second = planOverride({ competitiveRating: 2500, rankOverrideBaseRp: 1200 }, { kind: "division", level: 1, division: "III" });
    expect(second.baseRp).toBe(1200);
  });
  it("reset restores the calculated RP, and is a no-op without an override", () => {
    expect(planReset({ competitiveRating: 2500, rankOverrideBaseRp: 1200 })).toEqual({ rp: 1200, rankLevel: rankProgress(1200).tier.level });
    expect(planReset({ competitiveRating: 1200, rankOverrideBaseRp: null })).toBeNull();
  });
  it("starting value is still tier 3 / 1,200", () => {
    expect(rankProgress(1200).tier.level).toBe(3);
    expect(describeRp(1200)).toMatch(/1200 RP$/);
  });
  it("reasons are trimmed and capped", () => {
    expect(cleanReason("  a \n b ")).toBe("a b");
    expect(cleanReason("x".repeat(500))).toHaveLength(300);
    expect(cleanReason(42)).toBe("");
  });
  it("CSV escapes quotes/commas and neutralises formulas", () => {
    expect(csvCell('a,"b"')).toBe('"a,""b"""');
    expect(csvCell("=HYPERLINK()")).toBe("'=HYPERLINK()");
    expect(toCsv([{ a: 1, b: "x" }], ["a", "b"])).toBe("a,b\r\n1,x");
  });
});
