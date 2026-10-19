import { describe, expect, it } from "vitest";
import { rankLevelFromRp, rankProgress } from "@/lib/rank-progress";
import { RP_RULES } from "@/lib/rp-rules";

describe("rank progress from the published table (R38-F)", () => {
  it("new accounts start at tier 3 with 1,200 RP, Division III", () => {
    const p = rankProgress(RP_RULES.startingRating);
    expect(RP_RULES.startingRating).toBe(1200);
    expect(p.tier.level).toBe(3);
    expect(p.division).toBe("III");
    expect(p.next).toMatchObject({ division: "II" });
    expect(p.rpToNext).toBe(p.next!.floor - 1200);
  });
  it("division I rolls into the next tier's Division III", () => {
    const p = rankProgress(1290); // tier 3 band 1200–1300
    expect(p.division).toBe("I");
    expect(p.next).toMatchObject({ division: "III", floor: 1300 });
    expect(p.next!.tier.level).toBe(4);
    expect(p.rpToNext).toBe(10);
  });
  it("top of the ladder has no next step", () => {
    const p = rankProgress(3000);
    expect(p.tier.level).toBe(10);
    expect(p.division).toBe("I");
    expect(p.next).toBeNull();
    expect(p.percent).toBe(100);
  });
  it("one source: displayed level comes from RP, not a stored rankLevel", () => {
    expect(rankLevelFromRp(2150)).toBe(10);
    expect(rankLevelFromRp(1300)).toBe(4);
    expect(rankLevelFromRp(50)).toBe(1);
  });
});
