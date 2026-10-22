/** R52 "Intel" analytics: pure math over real per-match rows (unit-tested). Nothing is estimated when inputs are missing. */
export type Line = {
  matchId: string; at: number; map: string | null; won: boolean | null;
  k: number | null; d: number | null; a: number | null; dmg: number | null; rounds: number | null; hs: number | null;
  clW: number | null; clP: number | null; enW: number | null; enA: number | null; util: number | null;
  m2: number | null; m3: number | null; m4: number | null; m5: number | null; mvps: number | null;
};
const sum = (xs: (number | null)[]) => { let t = 0, n = 0; for (const x of xs) if (x != null) { t += x; n++; } return n ? t : null; };
const div = (a: number | null, b: number | null, scale = 1, dp = 2) => (a == null || !b ? null : +((a / b) * scale).toFixed(dp));

export function performance(lines: Line[]) {
  const S = (f: (l: Line) => number | null) => sum(lines.map(f));
  const kills = S((l) => l.k), deaths = S((l) => l.d), assists = S((l) => l.a), dmg = S((l) => l.dmg), rounds = S((l) => l.rounds), hs = S((l) => l.hs);
  const decided = lines.filter((l) => l.won != null), wins = decided.filter((l) => l.won).length;
  return {
    matches: lines.length, wins, losses: decided.length - wins, winRate: decided.length ? Math.round((wins / decided.length) * 100) : null,
    kills, deaths, assists, rounds, damage: dmg,
    kd: div(kills, deaths), kr: div(kills, rounds), adr: div(dmg, rounds, 1, 0), hsPct: div(hs, kills, 100, 0),
    utilPerRound: div(S((l) => l.util), rounds, 1, 1),
    entry: { won: S((l) => l.enW), attempts: S((l) => l.enA), rate: div(S((l) => l.enW), S((l) => l.enA), 100, 0) },
    clutch: { won: S((l) => l.clW), played: S((l) => l.clP), rate: div(S((l) => l.clW), S((l) => l.clP), 100, 0) },
    multi: { k2: S((l) => l.m2), k3: S((l) => l.m3), k4: S((l) => l.m4), k5: S((l) => l.m5) }, mvps: S((l) => l.mvps),
  };
}

/** Longest win / loss streaks and the current form (latest first, max 10). */
export function streaks(lines: Line[]) {
  const seq = [...lines].filter((l) => l.won != null).sort((a, b) => a.at - b.at).map((l) => l.won as boolean);
  let bw = 0, bl = 0, cw = 0, cl = 0;
  for (const w of seq) { if (w) { cw++; cl = 0; } else { cl++; cw = 0; } bw = Math.max(bw, cw); bl = Math.max(bl, cl); }
  const form = seq.slice(-10).reverse();
  const current = !seq.length ? null : { won: seq[seq.length - 1], length: seq[seq.length - 1] ? cw : cl };
  return { longestWin: bw, longestLoss: bl, current, form };
}

/** Per-map split: matches, win %, K/D, ADR. */
export function perMap(lines: Line[]) {
  const by = new Map<string, Line[]>();
  for (const l of lines) if (l.map) by.set(l.map, [...(by.get(l.map) ?? []), l]);
  return [...by.entries()].map(([map, ls]) => { const p = performance(ls); return { map, matches: ls.length, winRate: p.winRate, kd: p.kd, adr: p.adr }; }).sort((a, b) => b.matches - a.matches);
}

/** Rating trend with a rolling mean ± 1 standard deviation band (window w). */
export function ratingBand(points: { rp: number; at: string }[], w = 5) {
  return points.map((p, i) => {
    const win = points.slice(Math.max(0, i - w + 1), i + 1).map((x) => x.rp);
    const mean = win.reduce((a, b) => a + b, 0) / win.length;
    const sd = Math.sqrt(win.reduce((a, b) => a + (b - mean) ** 2, 0) / win.length);
    return { at: p.at, rp: p.rp, mean: Math.round(mean), lo: Math.round(mean - sd), hi: Math.round(mean + sd) };
  });
}

/**
 * Role profile from recorded habits: share (0-100) per archetype, normalised. Null when the server never recorded those columns.
 * entry = opening duel attempts per round, support = utility damage per round, clutch = clutch rounds played per round, fragger = kills per round.
 */
export function roleProfile(lines: Line[]) {
  const p = performance(lines);
  if (!p.rounds) return null;
  const raw = {
    entry: p.entry.attempts != null ? p.entry.attempts / p.rounds / 0.2 : null,
    support: p.utilPerRound != null ? p.utilPerRound / 10 : null,
    clutch: p.clutch.played != null ? p.clutch.played / p.rounds / 0.08 : null,
    fragger: p.kr != null ? p.kr / 0.8 : null,
  };
  const known = Object.values(raw).filter((v): v is number => v != null);
  if (known.length < 2) return null;
  const tot = known.reduce((a, b) => a + b, 0) || 1;
  const out = Object.fromEntries(Object.entries(raw).map(([k, v]) => [k, v == null ? null : Math.round((v / tot) * 100)])) as Record<keyof typeof raw, number | null>;
  const primary = (Object.entries(out).filter(([, v]) => v != null) as [string, number][]).sort((a, b) => b[1] - a[1])[0][0];
  return { shares: out, primary };
}

/** Share of values strictly below mine (0-100), or null for an empty population. */
export const percentile = (mine: number, population: number[]) =>
  population.length ? Math.round((population.filter((x) => x < mine).length / population.length) * 100) : null;

/** Matches per UTC day (YYYY-MM-DD -> count). */
export function activity(lines: Line[]) {
  const m: Record<string, number> = {};
  for (const l of lines) { const d = new Date(l.at).toISOString().slice(0, 10); m[d] = (m[d] ?? 0) + 1; }
  return m;
}

const REGION: Record<string, string> = {};
for (const c of "AL AD AT BY BE BA BG HR CY CZ DK EE FI FR DE GR HU IS IE IT LV LI LT LU MT MD MC ME NL MK NO PL PT RO RU SM RS SK SI ES SE CH UA GB VA XK".split(" ")) REGION[c] = "EU";
for (const c of "US CA MX".split(" ")) REGION[c] = "NA";
for (const c of "AR BO BR CL CO EC GY PY PE SR UY VE".split(" ")) REGION[c] = "SA";
for (const c of "IL TR SA AE QA KW BH OM JO LB SY IQ IR YE EG PS".split(" ")) REGION[c] = "ME";
for (const c of "CN JP KR TW HK MO MN IN PK BD LK NP SG MY TH VN PH ID KH LA MM KZ UZ".split(" ")) REGION[c] = "AS";
for (const c of "AU NZ".split(" ")) REGION[c] = "OC";
export const regionOf = (country: string | null | undefined) => (country ? REGION[country.toUpperCase()] ?? "AF" : null);
export const REGIONS = ["EU", "NA", "SA", "ME", "AS", "OC", "AF"] as const;
