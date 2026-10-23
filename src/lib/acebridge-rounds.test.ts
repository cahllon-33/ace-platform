import { describe, expect, it } from "vitest";
import { aggregateRounds } from "./acebridge-rounds";

const P = (o: Record<string, unknown>) => ({ steamId: "76561198000000001", team: "ct", dmg: 0, kills: 0, deaths: 0, ...o });
describe("aggregateRounds", () => {
  it("sums rounds, utility, entry, multi-kills, weapon classes and clutch splits", () => {
    const rows = aggregateRounds([
      { round: 1, players: [P({ dmg: 120, heDmg: 40, flashes: 2, flashesHit: 1, enemiesFlashed: 3, flashMs: 4200, he: 1, kills: 2, weapons: { awp: 1, glock: 1 }, firstKill: true, clutchVs: 1, clutchWon: true })] },
      { round: 2, players: [P({ dmg: 50, molDmg: 30, molotovs: 1, kills: 3, weapons: { ak47: 2, knife: 1 }, firstDeath: true, deaths: 1, clutchVs: 2, clutchWon: false })] },
    ]);
    expect(rows).toHaveLength(1);
    const r = rows[0];
    expect([r.rounds, r.damage, r.heDamage, r.molotovDamage]).toEqual([2, 170, 40, 30]);
    expect([r.flashesThrown, r.flashesHit, r.enemiesFlashed, r.flashMs, r.heThrown, r.molotovsThrown]).toEqual([2, 1, 3, 4200, 1, 1]);
    expect([r.k2, r.k3, r.firstKills, r.firstDeaths]).toEqual([1, 1, 1, 1]);
    expect([r.wSniper, r.wPistol, r.wKnife, r.wOther]).toEqual([1, 1, 1, 2]);
    expect([r.clutchAttempts, r.clutchWins, r.c1v1A, r.c1v1W, r.c1v2A, r.c1v2W]).toEqual([2, 1, 1, 1, 1, 0]);
  });
  it("de-duplicates a resent round and ignores spectators and bad ids", () => {
    const e = { round: 1, players: [P({ dmg: 100 }), { steamId: "x", team: "ct", dmg: 999 }, P({ steamId: "76561198000000002", team: "spec", dmg: 5 })] };
    const rows = aggregateRounds([e, e]);
    expect(rows).toHaveLength(1);
    expect(rows[0].damage).toBe(100);
    expect(rows[0].rounds).toBe(1);
  });
});
