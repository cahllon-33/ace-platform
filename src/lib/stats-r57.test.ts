import { describe, expect, it } from "vitest";
import { mapsBlock, performanceBlock, progressBlock, seasonStandings, statsPublicFrom, totalsBlock, trends, weaponClass, type R57Line } from "@/lib/stats-r57";

const L = (o: Partial<R57Line>): R57Line => ({ matchId: Math.random().toString(), at: 0, map: "de_mirage", won: true, tournament: false, k: null, d: null, a: null, dmg: null, rounds: null, roundsWon: null, hs: null, clW: null, clP: null, enW: null, enA: null, util: null, m2: null, m3: null, m4: null, m5: null, mvps: null, score: null, rpDelta: null, ...o });

describe("R57 stats", () => {
  it("classifies weapons", () => {
    expect(weaponClass("awp")).toBe("sniper"); expect(weaponClass("weapon_deagle")).toBe("pistol");
    expect(weaponClass("knife_karambit")).toBe("knife"); expect(weaponClass("taser")).toBe("zeus"); expect(weaponClass("ak47")).toBe("other");
  });
  it("never fabricates: unrecorded stats are null with 0 matches", () => {
    const p = performanceBlock([L({ won: true }), L({ won: false })]);
    expect(p.winRate).toEqual({ value: 50, matches: 2 });
    expect(p.adr).toEqual({ value: null, matches: 0 });
    expect(p.flashSuccess.notTracked).toBe(true);
  });
  it("pairs ratios per match", () => {
    const p = performanceBlock([L({ k: 20, d: 10, dmg: 2000, rounds: 20 }), L({ k: 5, d: null })]);
    expect(p.kd).toEqual({ value: 2, matches: 1 }); expect(p.adr.value).toBe(100);
  });
  it("trend only when both periods recorded", () => {
    const t = trends(performanceBlock([L({ k: 10, d: 5 })]), performanceBlock([L({ won: null })]));
    expect(t.kd).toBeNull();
  });
  it("totals: first deaths, rounds won, streaks, weapons", () => {
    const t = totalsBlock([L({ at: 1, won: true, enW: 2, enA: 5, rounds: 24, roundsWon: 13 }), L({ at: 2, won: true }), L({ at: 3, won: false })], [{ cls: "sniper", kills: 3 }], 1);
    expect(t.firstDeaths.value).toBe(3); expect(t.roundWinRate.value).toBe(54.2);
    expect(t.streaks).toEqual({ bestWin: 2, currentWin: 0, matches: 3 }); expect(t.weapons.sniper).toBe(3); expect(t.weapons.pistol).toBe(0);
    expect(totalsBlock([], [], 0).weapons.sniper).toBeNull();
  });
  it("maps, progress, seasons, setting", () => {
    expect(mapsBlock([L({}), L({ won: false })]).rows[0]).toMatchObject({ map: "de_mirage", matches: 2, winRate: 50 });
    expect(progressBlock([{ rp: 1220, at: "a", delta: 20 }, { rp: 1200, at: "b", delta: -20 }])).toMatchObject({ highest: 1220, lowest: 1200, diff: 0, wins: 1, losses: 1 });
    const d = new Date(1), e = new Date(2);
    expect(seasonStandings([{ userId: "a", ratingAfter: 1300, at: d }, { userId: "a", ratingAfter: 1250, at: e }, { userId: "b", ratingAfter: 1280, at: d }])).toEqual([{ userId: "b", rp: 1280, matches: 1 }, { userId: "a", rp: 1250, matches: 2 }]);
    expect(statsPublicFrom(undefined)).toBe(false); expect(statsPublicFrom("1")).toBe(true);
  });
});

describe("R58 AceBridge round stats feed My Stats", async () => {
  const { aggregateRounds } = await import("@/lib/acebridge-rounds");
  const { withBridge } = await import("@/lib/stats-r57");
  it("turns flash/HE/clutch-split stats real once a match has plugin data, report values still win", () => {
    const [bx] = aggregateRounds([{ round: 1, players: [{ steamId: "76561198000000001", team: "t", dmg: 90, flashes: 2, flashesHit: 1, enemiesFlashed: 2, flashMs: 3000, he: 1, heDmg: 25, kills: 2, clutchVs: 1, clutchWon: true }] }]);
    const line = withBridge(L({ dmg: 1500, rounds: null, bx }));
    expect(line.dmg).toBe(1500); expect(line.rounds).toBe(1); expect(line.m2).toBe(1);
    const p = performanceBlock([line, L({})]);
    expect(p.flashSuccess).toEqual({ value: 50, matches: 1 });
    expect(p.flashesPerRound).toEqual({ value: 2, matches: 1 });
    const t = totalsBlock([line], [], 0);
    expect(t.utility.heDamage).toEqual({ value: 25, matches: 1 });
    expect(t.utility.flashSeconds).toEqual({ value: 3, matches: 1 });
    expect(t.clutches.v1.won).toEqual({ value: 1, matches: 1 });
    expect(totalsBlock([L({})], [], 0).utility.flashesThrown).toMatchObject({ value: null, notTracked: true });
  });
});
