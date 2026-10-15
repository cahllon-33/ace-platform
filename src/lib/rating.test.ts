import { describe, expect, it } from "vitest";
import {
  applyTeamMatchRatings,
  expectedScore,
  nextRating,
  placementCap,
  playerMatchDelta,
  RATING_CONFIG,
  winsToReach,
} from "@/lib/rating";
import { rankFromRating } from "@/lib/ranks";
import { RP_RULES } from "@/lib/rp-rules";

const settled = { matchesPlayed: RP_RULES.placementMatches };

describe("A.C.E Rating Points rules", () => {
  it("starts every new account at 1,200 RP in tier 3", () => {
    expect(RATING_CONFIG.startingRating).toBe(1200);
    expect(rankFromRating(RP_RULES.startingRating).level).toBe(RP_RULES.startingTier);
    expect(rankFromRating(1200).level).toBe(3);
  });

  it("gives 0.5 expected score to equal ratings", () => {
    expect(expectedScore(1500, 1500)).toBe(0.5);
  });

  it("moves +15 / -15 at even odds", () => {
    expect(nextRating(1300, 1300, 1)).toBe(1315);
    expect(nextRating(1300, 1300, 0)).toBe(1285);
  });

  it("adjusts by opponent strength inside the per-match limits", () => {
    expect(nextRating(1300, 1500, 1) - 1300).toBe(20);
    expect(nextRating(1300, 1500, 0) - 1300).toBe(-8);
    expect(nextRating(1300, 1100, 1) - 1300).toBe(8);
    expect(nextRating(1300, 1100, 0) - 1300).toBe(-23);
    expect(nextRating(1300, 2200, 1) - 1300).toBe(20);
    expect(nextRating(1300, 2200, 0) - 1300).toBe(-8);
    expect(nextRating(1300, 400, 1) - 1300).toBe(8);
    expect(nextRating(1300, 400, 0) - 1300).toBe(-23);
  });

  it("reduces win gains in tiers 7-9 (x0.8) and tier 10 (x0.7), never losses", () => {
    expect(nextRating(1650, 1650, 1) - 1650).toBe(12);
    expect(nextRating(1850, 1850, 1) - 1850).toBe(12);
    expect(nextRating(2000, 2000, 1) - 2000).toBe(11);
    expect(nextRating(2000, 2000, 0) - 2000).toBe(-15);
  });

  it("draws change nothing", () => {
    expect(nextRating(1450, 1300, 0.5)).toBe(1450);
  });

  it("abandon costs 50 and never gets the MVP bonus", () => {
    const r = playerMatchDelta({ rating: 1300, opponentAverage: 1300, outcome: "win", ...settled, abandoned: true, mvp: true, killsRecorded: true });
    expect(r.delta).toBe(-50);
    expect(r.mvpApplied).toBe(false);
  });

  it("MVP bonus applies only when kills are recorded and never exceeds the limits", () => {
    const base = { rating: 1300, opponentAverage: 1300, ...settled, mvp: true };
    expect(playerMatchDelta({ ...base, outcome: "win" }).delta).toBe(15);
    expect(playerMatchDelta({ ...base, outcome: "win", killsRecorded: true }).delta).toBe(17);
    expect(playerMatchDelta({ ...base, outcome: "loss", killsRecorded: true }).delta).toBe(-13);
    expect(playerMatchDelta({ ...base, opponentAverage: 2300, outcome: "win", killsRecorded: true }).delta).toBe(22);
    expect(playerMatchDelta({ ...base, opponentAverage: 2300, outcome: "loss", killsRecorded: true }).delta).toBe(-8);
  });

  it("caps placement at tier 5 for the first 10 matches", () => {
    expect(placementCap()).toBe(1499);
    expect(rankFromRating(placementCap()).level).toBe(5);
    const r = playerMatchDelta({ rating: 1490, opponentAverage: 1490, outcome: "win", matchesPlayed: 9 });
    expect(r.ratingAfter).toBe(1499);
    expect(r.placementCapped).toBe(true);
    expect(playerMatchDelta({ rating: 1490, opponentAverage: 1490, outcome: "win", matchesPlayed: 10 }).ratingAfter).toBe(1505);
  });

  it("holds the floor and ceiling", () => {
    expect(nextRating(105, 105, 0)).toBe(RP_RULES.floor);
    expect(playerMatchDelta({ rating: 120, opponentAverage: 120, outcome: "loss", ...settled, abandoned: true }).ratingAfter).toBe(100);
    expect(nextRating(2995, 2995, 1)).toBe(RP_RULES.ceiling);
  });

  it("takes 56 straight even-odds wins from 1,200 to 1,950", () => {
    const path = winsToReach(1200, 1950);
    expect(path.total).toBe(56);
    expect(path.byMultiplier).toEqual([
      { gain: 15, wins: 27 },
      { gain: 12, wins: 29 },
    ]);
  });

  it("applies team averages; paid plan is not an input", () => {
    const result = applyTeamMatchRatings({ winnerRatings: [1200, 1200], loserRatings: [1200, 1200] });
    expect(result.winnerDeltas).toEqual([15, 15]);
    expect(result.loserDeltas).toEqual([-15, -15]);
  });

  it("assigns Rank 10 only at the Legend threshold", () => {
    expect(rankFromRating(1949).level).toBe(9);
    expect(rankFromRating(1950).level).toBe(10);
  });
});

describe("rulebook rating chapter matches RP_RULES", () => {
  it("states the configured numbers", async () => {
    const { RULEBOOK } = await import("@/lib/rulebook");
    const chapter = RULEBOOK.find((s) => s.title === "Rating Points");
    expect(chapter).toBeDefined();
    const text = chapter!.clauses.map((c) => c.text).join(" ");
    const fmt = (n: number) => n.toLocaleString("en-US");
    for (const needle of [
      `${fmt(RP_RULES.startingRating)} RP in tier ${RP_RULES.startingTier}`,
      `+${RP_RULES.kFactor / 2} RP`,
      `between ${RP_RULES.loss.min} and ${RP_RULES.loss.max} RP`,
      `${RP_RULES.tierWinMultiplier[7]} in tiers 7–9`,
      `${RP_RULES.tierWinMultiplier[10]} in tier 10`,
      `first ${RP_RULES.placementMatches} matches`,
      `above tier ${RP_RULES.placementMaxTier}`,
      `loses ${RP_RULES.abandonPenalty} RP`,
      `${RP_RULES.mvpBonus} RP more`,
      `between ${fmt(RP_RULES.floor)} and ${fmt(RP_RULES.ceiling)} RP`,
    ]) expect(text).toContain(needle);
  });
});

describe("absolute per-match gain cap (MVP included)", () => {
  const base = { rating: 1300, matchesPlayed: 10, killsRecorded: true } as const;
  it("non-MVP winners never exceed win.max (20); only the MVP can reach 22", () => {
    for (const opp of [1300, 1500, 1800, 2400, 3000]) {
      const plain = playerMatchDelta({ ...base, opponentAverage: opp, outcome: "win" }).delta;
      const mvp = playerMatchDelta({ ...base, opponentAverage: opp, outcome: "win", mvp: true }).delta;
      expect(plain).toBeLessThanOrEqual(RP_RULES.win.max);
      expect(plain).toBeLessThan(RP_RULES.maxGainWithMvp);
      expect(mvp).toBeLessThanOrEqual(RP_RULES.maxGainWithMvp);
    }
    expect(playerMatchDelta({ ...base, opponentAverage: 2400, outcome: "win", mvp: true }).delta).toBe(22);
    expect(RP_RULES.win.max).toBe(20);
    expect(RP_RULES.maxGainWithMvp).toBe(22);
  });
  it("losses stay within -8..-23 (abandon -50 is separate)", () => {
    expect(playerMatchDelta({ ...base, opponentAverage: 300, outcome: "loss" }).delta).toBe(-23);
    expect(playerMatchDelta({ ...base, opponentAverage: 3000, outcome: "loss" }).delta).toBe(-8);
  });
});

