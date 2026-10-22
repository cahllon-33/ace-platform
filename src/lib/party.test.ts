import { describe, expect, it } from "vitest";
import { cleanTags, groupEntries, pickMatch, splitGroups, avgLevel } from "./party";

const e = (userId: string, rp: number, partyId: string | null, t: number) => ({ userId, rp, partyId, joinedAt: t });

describe("party queue", () => {
  it("keeps a party of 5 together", () => {
    const entries = [...[1, 2, 3, 4, 5].map((i) => e("p" + i, 1500, "A", 1)), ...[1, 2, 3, 4, 5].map((i) => e("s" + i, 1400, null, 2 + i))];
    const picked = pickMatch(groupEntries(entries))!;
    const split = splitGroups(picked)!;
    const t1 = split.team1.map((s) => s.userId);
    expect(t1.filter((u) => u.startsWith("p")).length === 5 || t1.filter((u) => u.startsWith("p")).length === 0).toBe(true);
  });
  it("skips groups that cannot form 5/5", () => {
    const entries = [...[1, 2, 3, 4].map((i) => e("a" + i, 1000, "A", 1)), ...[1, 2, 3, 4].map((i) => e("b" + i, 1000, "B", 2)), ...[1, 2, 3, 4].map((i) => e("c" + i, 1000, "C", 3))];
    expect(pickMatch(groupEntries(entries))).toBeNull();
    const more = [...entries, e("x", 1000, null, 4), e("y", 1000, null, 5)];
    const p = pickMatch(groupEntries(more))!;
    expect(p.reduce((a, g) => a + g.seats.length, 0)).toBe(10);
  });
  it("balances solos", () => {
    const s = splitGroups(groupEntries([2000, 1900, 1800, 1700, 1600, 1500, 1400, 1300, 1200, 1100].map((rp, i) => e("u" + i, rp, null, i))))!;
    expect(s.gap).toBeLessThanOrEqual(100);
  });
  it("tags + avg level", () => {
    expect(cleanTags(["serious", "bogus", "serious"])).toEqual(["serious"]);
    expect(avgLevel([4, 5, 6])).toBe(5);
    expect(avgLevel([])).toBeNull();
  });
});
