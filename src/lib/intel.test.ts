import { describe, expect, it } from "vitest";
import { performance, streaks, perMap, ratingBand, roleProfile, percentile, regionOf, type Line } from "./intel";
const L = (o: Partial<Line>): Line => ({ matchId: "m", at: 0, map: "de_mirage", won: true, k: 20, d: 10, a: 5, dmg: 2000, rounds: 20, hs: 10, clW: 1, clP: 2, enW: 2, enA: 4, util: 100, m2: 1, m3: 0, m4: 0, m5: 0, mvps: 2, ...o });
describe("intel", () => {
  it("performance", () => { const p = performance([L({}), L({ won: false })]); expect(p.kd).toBe(2); expect(p.adr).toBe(100); expect(p.hsPct).toBe(50); expect(p.winRate).toBe(50); });
  it("nulls stay null", () => { expect(performance([L({ k: null, d: null })]).kd).toBeNull(); });
  it("streaks", () => { const s = streaks([L({ at: 1 }), L({ at: 2 }), L({ at: 3, won: false })]); expect(s.longestWin).toBe(2); expect(s.current).toEqual({ won: false, length: 1 }); expect(s.form).toEqual([false, true, true]); });
  it("maps", () => { expect(perMap([L({}), L({ map: "de_nuke" }), L({})])[0]).toMatchObject({ map: "de_mirage", matches: 2 }); });
  it("band", () => { const b = ratingBand([{ rp: 100, at: "a" }, { rp: 200, at: "b" }], 2); expect(b[1]).toMatchObject({ mean: 150, lo: 100, hi: 200 }); });
  it("role", () => { const r = roleProfile([L({})])!; expect(r.primary).toBeTruthy(); expect(roleProfile([L({ rounds: null })])).toBeNull(); });
  it("percentile+region", () => { expect(percentile(5, [1, 2, 9, 10])).toBe(50); expect(percentile(1, [])).toBeNull(); expect(regionOf("il")).toBe("ME"); expect(regionOf(null)).toBeNull(); });
});
