import { describe, expect, it } from "vitest";
import { activityGrid, aggregateStats, type StatLine } from "./player-stats";

const line = (o: Partial<StatLine>): StatLine => ({ won: false, mapName: null, playedAt: new Date(), kills: null, deaths: null, assists: null, damage: null, roundsPlayed: null, headshotKills: null, clutchesWon: null, clutchesPlayed: null, entryWins: null, entryAttempts: null, utilityDamage: null, multi2k: null, multi3k: null, multi4k: null, multi5k: null, weapons: [], ...o });

describe("aggregateStats", () => {
  it("is all-null with no data instead of zeros", () => {
    const s = aggregateStats([]);
    expect(s.winRate).toBeNull(); expect(s.adr).toBeNull(); expect(s.kills).toBeNull();
  });
  it("computes ratios from recorded lines only", () => {
    const s = aggregateStats([line({ won: true, mapName: "Mirage", kills: 20, deaths: 10, damage: 2400, roundsPlayed: 24, headshotKills: 10 }), line({ mapName: "Mirage" })]);
    expect(s.winRate).toBe(50); expect(s.adr).toBe(100); expect(s.hs).toBe(50);
    expect(s.maps).toEqual([{ name: "Mirage", played: 2, won: 1 }]);
    expect(s.clutch).toBeNull();
  });
});

describe("activityGrid", () => {
  it("buckets dates by day", () => {
    const now = new Date("2026-10-21T12:00:00Z");
    const g = activityGrid([now, now], now, 2);
    expect(g.counts.reduce((a, b) => a + b, 0)).toBe(2);
    expect(g.counts).toHaveLength(14);
  });
});
