import { describe, expect, it } from "vitest";
import { combatStats, killsFromEvents, matchHeadshots, type StatLine } from "./combat-stats";

const line = (o: Partial<StatLine>): StatLine => ({ matchId: "m", kills: null, deaths: null, assists: null, damage: null, roundsPlayed: null, headshotKills: null, mvps: null, multi5k: null, clutchesWon: null, clutchesPlayed: null, entryWins: null, entryAttempts: null, utilityDamage: null, ...o });

describe("combat stats", () => {
  it("counts kills and headshots from plugin events, excluding suicides", () => {
    const ev = [{ matchId: "m", attacker: "1", victim: "2", headshot: true }, { matchId: "m", attacker: "1", victim: "3", headshot: false }, { matchId: "m", attacker: "1", victim: "1", headshot: false }, { matchId: "m", attacker: "2", victim: "1", headshot: true }];
    expect(killsFromEvents(ev, "1")).toEqual({ kills: 2, headshotKills: 1 });
  });
  it("refuses a headshot count when any kill lacks the flag", () => {
    expect(killsFromEvents([{ matchId: "m", attacker: "1", victim: "2", headshot: null }], "1").headshotKills).toBeNull();
  });
  it("prefers the server report, falls back to events, otherwise null", () => {
    expect(matchHeadshots({ kills: 20, headshotKills: 9 }, null, "1")).toEqual({ kills: 20, hs: 9, source: "report" });
    expect(matchHeadshots({ kills: null, headshotKills: null }, [{ matchId: "m", attacker: "1", victim: "2", headshot: true }], "1")).toEqual({ kills: 1, hs: 1, source: "events" });
    expect(matchHeadshots({ kills: 5, headshotKills: null }, null, "1")).toEqual({ kills: 5, hs: null, source: null });
  });
  it("aggregates only matches that recorded each stat", () => {
    const lines = [line({ matchId: "a", kills: 20, deaths: 10, damage: 2400, roundsPlayed: 24, headshotKills: 10 }), line({ matchId: "b", kills: 10, deaths: 10 })];
    const hs = new Map([["a", { kills: 20, hs: 10 }], ["b", { kills: 10, hs: null }]]);
    const c = combatStats(lines, hs);
    expect(c.hsPct).toEqual({ value: 50, matches: 1 });
    expect(c.kd).toEqual({ value: 1.5, matches: 2 });
    expect(c.adr).toEqual({ value: 100, matches: 1 });
    expect(c.clutchPct).toEqual({ value: null, matches: 0 });
    expect(c.assists).toEqual({ value: null, matches: 0 });
  });
});
