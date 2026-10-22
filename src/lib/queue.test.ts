import { describe, expect, it } from "vitest";
import { ACTIVE_DUTY, applyBan, autoBanMap, balanceTeams, captainOf, readyOutcome, remainingMaps, vetoTurn, type Ban } from "@/lib/queue";

const seats = [2400, 2100, 1900, 1800, 1500, 1450, 1300, 1200, 1100, 900].map((rp, i) => ({ userId: `u${i}`, rp }));

describe("balanceTeams", () => {
  it("splits 10 into 5v5 with a small RP gap", () => {
    const { team1, team2, gap } = balanceTeams(seats);
    expect(team1).toHaveLength(5);
    expect(team2).toHaveLength(5);
    expect(new Set([...team1, ...team2].map((s) => s.userId)).size).toBe(10);
    expect(gap).toBeLessThanOrEqual(100);
  });
  it("never does worse than the plain snake", () => {
    const flat = seats.map((s) => ({ ...s, rp: 1000 }));
    expect(balanceTeams(flat).gap).toBe(0);
  });
  it("picks the highest RP as captain", () => {
    expect(captainOf([{ userId: "a", rp: 10 }, { userId: "b", rp: 30 }])).toBe("b");
  });
});

describe("veto", () => {
  it("alternates and stops at one map", () => {
    let bans: Ban[] = [];
    const sides: string[] = [];
    while (vetoTurn(ACTIVE_DUTY, bans)) {
      const side = vetoTurn(ACTIVE_DUTY, bans)!;
      sides.push(side);
      const r = applyBan(ACTIVE_DUTY, bans, side, remainingMaps(ACTIVE_DUTY, bans)[0]);
      if (!r.ok) throw new Error(r.error);
      bans = r.bans;
    }
    expect(sides).toEqual(["team1", "team2", "team1", "team2", "team1", "team2"]);
    expect(remainingMaps(ACTIVE_DUTY, bans)).toEqual(["de_train"]);
  });
  it("rejects out-of-turn and unknown maps", () => {
    expect(applyBan(ACTIVE_DUTY, [], "team2", "de_nuke")).toEqual({ ok: false, error: "not-your-turn" });
    expect(applyBan(ACTIVE_DUTY, [], "team1", "de_cache")).toEqual({ ok: false, error: "not-in-pool" });
  });
  it("auto-bans the last remaining map", () => {
    expect(autoBanMap(ACTIVE_DUTY, [])).toBe("de_train");
  });
});

describe("readyOutcome", () => {
  const p = (userId: string, accepted = false, declined = false) => ({ userId, accepted, declined });
  it("waits, goes, and cancels", () => {
    expect(readyOutcome([p("a", true), p("b")], false).kind).toBe("wait");
    expect(readyOutcome([p("a", true), p("b", true)], false).kind).toBe("go");
    expect(readyOutcome([p("a", true), p("b")], true)).toEqual({ kind: "cancel", removed: ["b"], requeue: ["a"] });
    expect(readyOutcome([p("a", true), p("b", false, true)], false)).toEqual({ kind: "cancel", removed: ["b"], requeue: ["a"] });
  });
});
