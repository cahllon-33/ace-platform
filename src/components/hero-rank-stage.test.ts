import { describe, expect, it } from "vitest";
import { heroRankModel } from "@/components/hero-rank-stage";

describe("heroRankModel", () => {
  it("normal tier: real division, next step, no record when no matches", () => {
    const m = heroRankModel({ rp: 1200, plan: "FREE", wins: 0, losses: 0 });
    expect(m.badge).toBeNull();
    expect(m.record).toBeNull();
    expect(m.prog.next).not.toBeNull();
    expect(m.prog.percent).toBeGreaterThanOrEqual(0);
  });
  it("prestige Premium player gets the gold set; Free only a milestone", () => {
    expect(heroRankModel({ rp: 2950, plan: "PREMIUM", wins: 3, losses: 1 }).badge?.set).toBe("premium");
    expect(heroRankModel({ rp: 2550, plan: "PLUS", wins: 0, losses: 0 }).badge?.set).toBe("plus");
    const f = heroRankModel({ rp: 2400, plan: "FREE", wins: 0, losses: 0 });
    expect(f.badge).toBeNull();
    expect(f.milestone?.name).toBeTruthy();
  });
  it("record and win rate come only from stored wins/losses", () => {
    expect(heroRankModel({ rp: 900, plan: "FREE", wins: 7, losses: 3 }).record).toEqual({ played: 10, wins: 7, losses: 3, winRate: 70 });
  });
});
