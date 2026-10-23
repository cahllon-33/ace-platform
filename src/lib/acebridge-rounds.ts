/**
 * R58: AceBridge 0.3.0 "round_stats" events -> one per-match, per-player stat row.
 * Pure and idempotent: rounds are de-duplicated by round number (the latest event for a round wins), so a resent
 * or replayed round never double-counts.
 */
import { weaponClass } from "@/lib/stats-r57";

type RP = {
  steamId?: unknown; team?: unknown; dmg?: unknown; heDmg?: unknown; molDmg?: unknown; flashes?: unknown; flashesHit?: unknown; enemiesFlashed?: unknown;
  flashMs?: unknown; teamFlashed?: unknown; he?: unknown; molotovs?: unknown; smokes?: unknown; kills?: unknown; deaths?: unknown; weapons?: unknown;
  firstKill?: unknown; firstDeath?: unknown; clutchVs?: unknown; clutchWon?: unknown;
};
export type RoundEvent = { round?: unknown; winner?: unknown; players?: unknown };
export type BridgeStat = {
  steamId: string; rounds: number; damage: number; heDamage: number; molotovDamage: number;
  flashesThrown: number; flashesHit: number; enemiesFlashed: number; flashMs: number; teamFlashed: number;
  heThrown: number; molotovsThrown: number; smokesThrown: number; kills: number; deaths: number;
  firstKills: number; firstDeaths: number; clutchAttempts: number; clutchWins: number; c1v1A: number; c1v1W: number; c1v2A: number; c1v2W: number;
  k2: number; k3: number; k4: number; k5: number; wSniper: number; wPistol: number; wKnife: number; wZeus: number; wOther: number;
};
const n = (v: unknown, max = 100_000) => (typeof v === "number" && Number.isFinite(v) && v >= 0 ? Math.min(Math.floor(v), max) : 0);
const blank = (steamId: string): BridgeStat => ({ steamId, rounds: 0, damage: 0, heDamage: 0, molotovDamage: 0, flashesThrown: 0, flashesHit: 0, enemiesFlashed: 0, flashMs: 0, teamFlashed: 0,
  heThrown: 0, molotovsThrown: 0, smokesThrown: 0, kills: 0, deaths: 0, firstKills: 0, firstDeaths: 0, clutchAttempts: 0, clutchWins: 0, c1v1A: 0, c1v1W: 0, c1v2A: 0, c1v2W: 0,
  k2: 0, k3: 0, k4: 0, k5: 0, wSniper: 0, wPistol: 0, wKnife: 0, wZeus: 0, wOther: 0 });
const W = { sniper: "wSniper", pistol: "wPistol", knife: "wKnife", zeus: "wZeus", other: "wOther" } as const;

export function aggregateRounds(events: RoundEvent[]): BridgeStat[] {
  const byRound = new Map<number, RoundEvent>();
  for (const e of events) { const r = n(e.round, 1000); if (r > 0) byRound.set(r, e); }
  const out = new Map<string, BridgeStat>();
  for (const e of byRound.values()) {
    if (!Array.isArray(e.players)) continue;
    for (const p of e.players as RP[]) {
      if (typeof p.steamId !== "string" || !/^\d{5,20}$/.test(p.steamId) || (p.team !== "ct" && p.team !== "t")) continue;
      const s = out.get(p.steamId) ?? blank(p.steamId); out.set(p.steamId, s);
      s.rounds++;
      s.damage += n(p.dmg, 5000); s.heDamage += n(p.heDmg, 5000); s.molotovDamage += n(p.molDmg, 5000);
      s.flashesThrown += n(p.flashes, 10); s.flashesHit += Math.min(n(p.flashesHit, 10), n(p.flashes, 10)); s.enemiesFlashed += n(p.enemiesFlashed, 20);
      s.flashMs += n(p.flashMs, 200_000); s.teamFlashed += n(p.teamFlashed, 20);
      s.heThrown += n(p.he, 10); s.molotovsThrown += n(p.molotovs, 10); s.smokesThrown += n(p.smokes, 10);
      const k = n(p.kills, 10); s.kills += k; s.deaths += n(p.deaths, 1);
      if (k === 2) s.k2++; else if (k === 3) s.k3++; else if (k === 4) s.k4++; else if (k >= 5) s.k5++;
      if (p.firstKill === true) s.firstKills++;
      if (p.firstDeath === true) s.firstDeaths++;
      const vs = n(p.clutchVs, 5);
      if (vs > 0) {
        const won = p.clutchWon === true;
        s.clutchAttempts++; if (won) s.clutchWins++;
        if (vs === 1) { s.c1v1A++; if (won) s.c1v1W++; }
        if (vs === 2) { s.c1v2A++; if (won) s.c1v2W++; }
      }
      if (p.weapons && typeof p.weapons === "object") for (const [w, c] of Object.entries(p.weapons as Record<string, unknown>)) s[W[weaponClass(w)]] += n(c, 10);
    }
  }
  return [...out.values()];
}
