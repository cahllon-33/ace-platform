import { describe, expect, it } from "vitest";
import { explainRpChange } from "@/lib/rp-explain";
import { playerMatchDelta } from "@/lib/rating";
import { achievements, activityStreak } from "@/lib/achievements";
import { canDm, canViewProfile, visibleOnline, asVisibility, asDmPolicy } from "@/lib/privacy";
import { RP_RULES } from "@/lib/rp-rules";

describe("explainRpChange", () => {
  it("reproduces the engine delta and names the factors", () => {
    const r = playerMatchDelta({ rating: 1500, opponentAverage: 1500, outcome: "win", matchesPlayed: 20 });
    const e = explainRpChange({ rpBefore: 1500, rpAfter: 1500 + r.delta, opponentAverage: 1500, outcome: "win", matchesPlayed: 20 });
    expect(e.consistent).toBe(true);
    expect(e.winChance).toBe(50);
    expect(e.delta).toBe(r.delta);
    expect(e.factors.map((f) => f.key)).toEqual(["outcome", "odds"]);
  });
  it("flags placement and a mismatch (override)", () => {
    const e = explainRpChange({ rpBefore: 1200, rpAfter: 1100, opponentAverage: 1200, outcome: "win", matchesPlayed: 2 });
    expect(e.placement).toBe(true);
    expect(e.factors.some((f) => f.key === "placement")).toBe(true);
    expect(e.consistent).toBe(false);
    expect(e.change).toBe("down");
  });
  it("applies the high-tier multiplier on losses", () => {
    const r = playerMatchDelta({ rating: 2900, opponentAverage: 2900, outcome: "loss", matchesPlayed: 50 });
    const e = explainRpChange({ rpBefore: 2900, rpAfter: 2900 + r.delta, opponentAverage: 2900, outcome: "loss", matchesPlayed: 50, version: RP_RULES.version });
    expect(e.consistent).toBe(true);
    expect(e.factors.find((f) => f.key === "tier")?.value).toBe(RP_RULES.tierKMultiplier[10]);
  });
});

describe("achievements", () => {
  const res = (s: string) => s.split("").map((c, i) => ({ win: c === "W", at: new Date(Date.UTC(2026, 0, 1 + i)).toISOString() }));
  it("derives first win, placement and streaks from real results", () => {
    const a = achievements({ results: res("LWWWLWWWWWL"), aces: 0, mvps: 0, peakRp: 1200, contractsClaimed: 1, clutches: 0 });
    const by = Object.fromEntries(a.map((x) => [x.id, x]));
    expect(by["first-win"].unlocked).toBe(true);
    expect(by["first-win"].at).toBe(res("LW")[1].at);
    expect(by["placed"].unlocked).toBe(true);
    expect(by["streak-5"].unlocked).toBe(true);
    expect(by["ace"].unlocked).toBe(false);
    expect(by["contract"].unlocked).toBe(true);
    expect(by["wins-25"].progress).toBe(8);
  });
  it("empty history unlocks nothing", () => {
    expect(achievements({ results: [], aces: 0, mvps: 0, peakRp: 0, contractsClaimed: 0, clutches: 0 }).every((x) => !x.unlocked)).toBe(true);
  });
});

describe("activityStreak", () => {
  it("counts consecutive days ending today or yesterday", () => {
    const now = new Date("2026-10-23T12:00:00Z");
    const d = (x: string) => new Date(x).toISOString();
    expect(activityStreak([d("2026-10-21T10:00Z"), d("2026-10-22T10:00Z"), d("2026-10-22T11:00Z")], now)).toMatchObject({ current: 2, best: 2, playedToday: false, week: 3 });
    expect(activityStreak([d("2026-10-18T10:00Z")], now).current).toBe(0);
  });
});

describe("privacy", () => {
  it("enforces visibility and DMs", () => {
    expect(canViewProfile("private", { self: false, friends: true })).toBe(false);
    expect(canViewProfile("private", { self: true, friends: false })).toBe(true);
    expect(canViewProfile("friends", { self: false, friends: true })).toBe(true);
    expect(canViewProfile("friends", { self: false, friends: false })).toBe(false);
    expect(canDm("friends", { friends: false })).toBe(false);
    expect(canDm("everyone", { friends: false })).toBe(true);
    expect(visibleOnline(true, false)).toBe(false);
    expect(asVisibility("x")).toBe("public");
    expect(asDmPolicy("everyone")).toBe("everyone");
  });
});
