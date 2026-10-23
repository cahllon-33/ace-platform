/**
 * Verified combat stats for the A.C.E Dossier. Every number comes from a verified match server report
 * (MatchPlayer, written from the DatHost/AceBridge match_end report) or, for kills/headshots only, from the
 * AceBridge `player_death` events (which carry the engine's headshot flag). Nothing is estimated:
 * a stat with no recorded data is `null`, and each aggregate says how many matches it is based on.
 */
export type StatLine = {
  matchId: string;
  kills: number | null; deaths: number | null; assists: number | null; damage: number | null; roundsPlayed: number | null;
  headshotKills: number | null; mvps: number | null; multi5k: number | null;
  clutchesWon: number | null; clutchesPlayed: number | null; entryWins: number | null; entryAttempts: number | null; utilityDamage: number | null;
};
export type KillEvent = { matchId: string | null; attacker: string | null; victim: string | null; headshot: boolean | null };
export type Ratio = { value: number | null; matches: number };
export type Count = { value: number | null; matches: number };
export type HsSource = "report" | "events" | null;

/** Kills and headshot kills for one player in one match, from plugin kill events. Suicides are excluded. */
export function killsFromEvents(events: KillEvent[], steamId: string) {
  let kills = 0, hs = 0, flagged = 0;
  for (const e of events) {
    if (!e.attacker || e.attacker !== steamId || e.victim === steamId) continue;
    kills++;
    if (e.headshot != null) { flagged++; if (e.headshot) hs++; }
  }
  return { kills, headshotKills: flagged === kills ? hs : null };
}

/** Per-match headshot figure: the server report first, else plugin kill events. */
export function matchHeadshots(line: Pick<StatLine, "kills" | "headshotKills">, events: KillEvent[] | null, steamId: string | null) {
  if (line.kills != null && line.headshotKills != null) return { kills: line.kills, hs: line.headshotKills, source: "report" as HsSource };
  if (events && events.length && steamId) {
    const k = killsFromEvents(events, steamId);
    if (k.headshotKills != null && k.kills > 0) return { kills: k.kills, hs: k.headshotKills, source: "events" as HsSource };
  }
  return { kills: line.kills, hs: null, source: null as HsSource };
}

export const pct = (num: number, den: number) => (den > 0 ? Math.round((num / den) * 1000) / 10 : null);

/** Aggregates over the matches that actually recorded each stat. */
export function combatStats(lines: StatLine[], hsByMatch: Map<string, { kills: number | null; hs: number | null }>) {
  const count = (k: keyof StatLine): Count => {
    const rec = lines.filter((l) => l[k] != null);
    return { value: rec.length ? rec.reduce((s, l) => s + (l[k] as number), 0) : null, matches: rec.length };
  };
  const ratio = (fn: (l: StatLine) => [number | null, number | null], scale = 1): Ratio => {
    let a = 0, b = 0, n = 0;
    for (const l of lines) { const [x, y] = fn(l); if (x == null || y == null) continue; a += x; b += y; n++; }
    return { value: b > 0 ? Math.round((a / b) * scale * 100) / 100 : null, matches: n };
  };
  let hs = 0, hk = 0, hn = 0;
  for (const l of lines) { const h = hsByMatch.get(l.matchId); if (!h || h.hs == null || h.kills == null) continue; hs += h.hs; hk += h.kills; hn++; }
  return {
    matches: lines.length,
    kills: count("kills"), deaths: count("deaths"), assists: count("assists"), damage: count("damage"),
    headshotKills: { value: hn ? hs : null, matches: hn } as Count,
    hsPct: { value: hn ? pct(hs, hk) : null, matches: hn } as Ratio,
    kd: ratio((l) => [l.kills, l.deaths]),
    adr: ratio((l) => [l.damage, l.roundsPlayed]),
    kpr: ratio((l) => [l.kills, l.roundsPlayed]),
    mvps: count("mvps"), aces: count("multi5k"),
    clutchPct: ratio((l) => [l.clutchesWon, l.clutchesPlayed], 100),
    entryPct: ratio((l) => [l.entryWins, l.entryAttempts], 100),
    utilityDamage: count("utilityDamage"),
  };
}
