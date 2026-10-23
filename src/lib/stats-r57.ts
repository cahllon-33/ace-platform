/**
 * R57 "My Stats" + Ranks math. Pure functions over real per-match rows; nothing is estimated.
 * A value is null when no match in scope recorded it, and every block carries the number of matches it is based on.
 */
export type WeaponClass = "sniper" | "pistol" | "knife" | "zeus" | "other";
const SNIPERS = new Set(["awp", "ssg08", "scar20", "g3sg1"]);
const PISTOLS = new Set(["glock", "usp_silencer", "usp_silencer_off", "hkp2000", "p2000", "p250", "fiveseven", "tec9", "cz75a", "deagle", "revolver", "elite"]);
export function weaponClass(raw: string): WeaponClass {
  const w = raw.toLowerCase().replace(/^weapon_/, "");
  if (SNIPERS.has(w)) return "sniper";
  if (PISTOLS.has(w)) return "pistol";
  if (w === "taser") return "zeus";
  if (w.startsWith("knife") || w === "bayonet") return "knife";
  return "other";
}

export type R57Line = {
  matchId: string; at: number; map: string | null; won: boolean | null; tournament: boolean;
  k: number | null; d: number | null; a: number | null; dmg: number | null; rounds: number | null; roundsWon: number | null; hs: number | null;
  clW: number | null; clP: number | null; enW: number | null; enA: number | null; util: number | null;
  m2: number | null; m3: number | null; m4: number | null; m5: number | null; mvps: number | null;
  score: string | null; rpDelta: number | null;
  /** R58: AceBridge 0.3.0 per-round aggregate for this match, when the server ran the plugin bound to it. */
  bx?: import("@/lib/acebridge-rounds").BridgeStat | null;
};
/** Prefer the verified match report; fill gaps from AceBridge round stats (never estimated). */
export function withBridge(l: R57Line): R57Line {
  const b = l.bx; if (!b || !b.rounds) return l;
  return { ...l,
    dmg: l.dmg ?? b.damage, rounds: l.rounds ?? b.rounds, k: l.k ?? b.kills, d: l.d ?? b.deaths,
    enW: l.enW ?? b.firstKills, enA: l.enA ?? b.firstKills + b.firstDeaths,
    clW: l.clW ?? b.clutchWins, clP: l.clP ?? b.clutchAttempts,
    util: l.util ?? b.heDamage + b.molotovDamage,
    m2: l.m2 ?? b.k2, m3: l.m3 ?? b.k3, m4: l.m4 ?? b.k4, m5: l.m5 ?? b.k5 };
}
const bxs = (lines: R57Line[]) => lines.filter((l) => l.bx && l.bx.rounds > 0).map((l) => l.bx!);
/** Sum of an AceBridge-only field; notTracked while no match in scope has plugin data. */
function btotal(lines: R57Line[], f: (b: NonNullable<R57Line["bx"]>) => number, scale = 1) {
  const b = bxs(lines);
  return b.length ? { value: +(b.reduce((s, x) => s + f(x), 0) * scale).toFixed(1), matches: b.length } : { value: null, matches: 0, notTracked: true as const };
}
function bratio(lines: R57Line[], fa: (b: NonNullable<R57Line["bx"]>) => number, fb: (b: NonNullable<R57Line["bx"]>) => number, scale = 1, dp = 2) {
  const b = bxs(lines);
  if (!b.length) return { value: null, matches: 0, notTracked: true as const };
  const a = b.reduce((s, x) => s + fa(x), 0), d = b.reduce((s, x) => s + fb(x), 0);
  return { value: d > 0 ? +((a / d) * scale).toFixed(dp) : null, matches: b.length };
}

type Stat = { value: number | null; matches: number };
/** Sum over the matches that recorded the field. */
export function total(lines: R57Line[], f: (l: R57Line) => number | null): Stat {
  let t = 0, n = 0;
  for (const l of lines) { const v = f(l); if (v != null) { t += v; n++; } }
  return { value: n ? t : null, matches: n };
}
/** Ratio pairing numerator and denominator per match (a match missing either side is skipped). */
export function ratio(lines: R57Line[], fa: (l: R57Line) => number | null, fb: (l: R57Line) => number | null, scale = 1, dp = 2): Stat {
  let a = 0, b = 0, n = 0;
  for (const l of lines) { const x = fa(l), y = fb(l); if (x != null && y != null) { a += x; b += y; n++; } }
  return { value: n && b > 0 ? +((a / b) * scale).toFixed(dp) : null, matches: n };
}

export function performanceBlock(lines: R57Line[]) {
  const decided = lines.filter((l) => l.won != null), wins = decided.filter((l) => l.won).length;
  return {
    winRate: { value: decided.length ? +((wins / decided.length) * 100).toFixed(1) : null, matches: decided.length },
    adr: ratio(lines, (l) => l.dmg, (l) => l.rounds, 1, 1),
    kr: ratio(lines, (l) => l.k, (l) => l.rounds),
    kd: ratio(lines, (l) => l.k, (l) => l.d),
    hsPct: ratio(lines, (l) => l.hs, (l) => l.k, 100, 1),
    entrySuccess: ratio(lines, (l) => l.enW, (l) => l.enA, 100, 1),
    clutchSuccess: ratio(lines, (l) => l.clW, (l) => l.clP, 100, 1),
    utilDmgPerRound: ratio(lines, (l) => l.util, (l) => l.rounds, 1, 1),
    flashSuccess: bratio(lines, (b) => b.flashesHit, (b) => b.flashesThrown, 100, 1) as Stat & { notTracked?: true },
    flashesPerRound: bratio(lines, (b) => b.flashesThrown, (b) => b.rounds) as Stat & { notTracked?: true },
  };
}
export type Perf = ReturnType<typeof performanceBlock>;

/** Trend = current minus previous period, only when both periods recorded the stat. */
export function trends(cur: Perf, prev: Perf | null) {
  const out: Record<string, number | null> = {};
  for (const k of Object.keys(cur) as (keyof Perf)[]) {
    const a = cur[k].value, b = prev?.[k].value ?? null;
    out[k] = a != null && b != null ? +(a - b).toFixed(2) : null;
  }
  return out;
}

export function streaksOf(lines: R57Line[]) {
  const seq = [...lines].filter((l) => l.won != null).sort((a, b) => a.at - b.at).map((l) => l.won as boolean);
  let best = 0, cur = 0;
  for (const w of seq) { cur = w ? cur + 1 : 0; best = Math.max(best, cur); }
  return { bestWin: seq.length ? best : null, currentWin: seq.length ? cur : null, matches: seq.length };
}

export function totalsBlock(lines: R57Line[], weapons: { cls: WeaponClass; kills: number }[], weaponMatches: number) {
  const decided = lines.filter((l) => l.won != null), wins = decided.filter((l) => l.won).length;
  const roundsWon = total(lines, (l) => (l.rounds != null && l.roundsWon != null ? l.roundsWon : null));
  const roundsP = total(lines, (l) => (l.rounds != null && l.roundsWon != null ? l.rounds : null));
  const enW = total(lines, (l) => l.enW), enA = total(lines, (l) => l.enA);
  const firstDeaths = total(lines, (l) => (l.enA != null && l.enW != null ? l.enA - l.enW : null));
  const cls = (c: WeaponClass) => (weaponMatches ? weapons.filter((w) => w.cls === c).reduce((s, w) => s + w.kills, 0) : null);
  const clW = total(lines, (l) => l.clW), clP = total(lines, (l) => l.clP);
  return {
    matches: lines.length, wins: { value: wins, matches: decided.length }, losses: { value: decided.length - wins, matches: decided.length },
    rounds: total(lines, (l) => l.rounds), roundsWon,
    roundWinRate: { value: roundsP.value ? +(((roundsWon.value ?? 0) / roundsP.value) * 100).toFixed(1) : null, matches: roundsWon.matches },
    streaks: streaksOf(lines),
    damage: total(lines, (l) => l.dmg), kills: total(lines, (l) => l.k), deaths: total(lines, (l) => l.d), assists: total(lines, (l) => l.a),
    headshots: total(lines, (l) => (l.k != null ? l.hs : null)), mvps: total(lines, (l) => l.mvps),
    firstKills: enW, firstDeaths, entryAttempts: enA,
    multi: { k5: total(lines, (l) => l.m5), k4: total(lines, (l) => l.m4), k3: total(lines, (l) => l.m3), k2: total(lines, (l) => l.m2) },
    weapons: { sniper: cls("sniper"), pistol: cls("pistol"), knife: cls("knife"), zeus: cls("zeus"), other: cls("other"), matches: weaponMatches },
    utility: { damage: total(lines, (l) => l.util), flashesThrown: btotal(lines, (b) => b.flashesThrown), enemiesFlashed: btotal(lines, (b) => b.enemiesFlashed),
      flashSeconds: btotal(lines, (b) => b.flashMs, 0.001), teamFlashed: btotal(lines, (b) => b.teamFlashed), heThrown: btotal(lines, (b) => b.heThrown),
      heDamage: btotal(lines, (b) => b.heDamage), molotovsThrown: btotal(lines, (b) => b.molotovsThrown), molotovDamage: btotal(lines, (b) => b.molotovDamage), smokesThrown: btotal(lines, (b) => b.smokesThrown) },
    clutches: { won: clW, played: clP, lost: { value: clW.value != null && clP.value != null ? clP.value - clW.value : null, matches: clP.matches },
      winPct: ratio(lines, (l) => l.clW, (l) => l.clP, 100, 1), v1: { won: btotal(lines, (b) => b.c1v1W), lost: btotal(lines, (b) => b.c1v1A - b.c1v1W) }, v2: { won: btotal(lines, (b) => b.c1v2W), lost: btotal(lines, (b) => b.c1v2A - b.c1v2W) } },
  };
}

export function mapsBlock(lines: R57Line[]) {
  const by = new Map<string, R57Line[]>();
  for (const l of lines) if (l.map) by.set(l.map, [...(by.get(l.map) ?? []), l]);
  const rows = [...by.entries()].map(([map, ls]) => {
    const p = performanceBlock(ls);
    const dec = ls.filter((l) => l.won != null);
    return { map, matches: ls.length, wins: dec.filter((l) => l.won).length, losses: dec.filter((l) => !l.won).length, winRate: p.winRate.value, kd: p.kd.value, adr: p.adr.value };
  }).sort((a, b) => b.matches - a.matches);
  const rated = rows.filter((r) => r.winRate != null && r.matches >= 2);
  return {
    rows,
    highlights: {
      mostPlayed: rows[0]?.map ?? null,
      best: rated.length ? [...rated].sort((a, b) => b.winRate! - a.winRate!)[0].map : null,
      worst: rated.length > 1 ? [...rated].sort((a, b) => a.winRate! - b.winRate!)[0].map : null,
    },
  };
}

export function progressBlock(points: { rp: number; at: string; delta: number }[]) {
  const rps = points.map((p) => p.rp);
  const first = points[0];
  return {
    points: points.map((p) => ({ rp: p.rp, at: p.at })), matches: points.length,
    highest: rps.length ? Math.max(...rps) : null, lowest: rps.length ? Math.min(...rps) : null,
    diff: first ? points.reduce((s, p) => s + p.delta, 0) : null,
    wins: points.filter((p) => p.delta > 0).length, losses: points.filter((p) => p.delta < 0).length,
  };
}

/** Season ladder: players with rated matches inside the window, ranked by their last RP in it. */
export function seasonStandings(rows: { userId: string; ratingAfter: number; at: Date }[]) {
  const last = new Map<string, { rp: number; at: number; n: number }>();
  for (const r of rows) { const x = last.get(r.userId); if (!x || r.at.getTime() >= x.at) last.set(r.userId, { rp: r.ratingAfter, at: r.at.getTime(), n: (x?.n ?? 0) + 1 }); else x.n++; }
  return [...last.entries()].map(([userId, v]) => ({ userId, rp: v.rp, matches: v.n })).sort((a, b) => b.rp - a.rp);
}

/** SiteSetting key: "1" = owner made every player's stats public. Default (missing) = private. */
export const STATS_PUBLIC_KEY = "stats.public";
export const statsPublicFrom = (v: string | null | undefined) => v === "1";
