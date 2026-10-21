/** Pure aggregation of recorded match stat lines. Null fields mean "not recorded" and never count as zero. */
export type StatLine = {
  won: boolean;
  mapName: string | null;
  playedAt: Date;
  kills: number | null; deaths: number | null; assists: number | null; damage: number | null;
  roundsPlayed: number | null; headshotKills: number | null; clutchesWon: number | null; clutchesPlayed: number | null;
  entryWins: number | null; entryAttempts: number | null; utilityDamage: number | null;
  multi2k: number | null; multi3k: number | null; multi4k: number | null; multi5k: number | null;
  weapons: { weapon: string; kills: number; headshotKills: number; damage: number }[];
};

const sum = (lines: StatLine[], key: keyof StatLine) => {
  let total = 0; let seen = false;
  for (const l of lines) { const v = l[key]; if (typeof v === "number") { total += v; seen = true; } }
  return seen ? total : null;
};
const ratio = (a: number | null, b: number | null, scale = 1) => (a === null || b === null || b === 0 ? null : (a / b) * scale);

export function aggregateStats(lines: StatLine[]) {
  const kills = sum(lines, "kills"), deaths = sum(lines, "deaths"), rounds = sum(lines, "roundsPlayed");
  const maps = new Map<string, { played: number; won: number }>();
  for (const l of lines) {
    if (!l.mapName) continue;
    const m = maps.get(l.mapName) ?? { played: 0, won: 0 };
    m.played += 1; if (l.won) m.won += 1; maps.set(l.mapName, m);
  }
  const weapons = new Map<string, { kills: number; headshotKills: number; damage: number }>();
  for (const l of lines) for (const w of l.weapons) {
    const c = weapons.get(w.weapon) ?? { kills: 0, headshotKills: 0, damage: 0 };
    c.kills += w.kills; c.headshotKills += w.headshotKills; c.damage += w.damage; weapons.set(w.weapon, c);
  }
  return {
    matches: lines.length,
    winRate: lines.length ? (lines.filter((l) => l.won).length / lines.length) * 100 : null,
    adr: ratio(sum(lines, "damage"), rounds),
    kr: ratio(kills, rounds),
    hs: ratio(sum(lines, "headshotKills"), kills, 100),
    clutch: ratio(sum(lines, "clutchesWon"), sum(lines, "clutchesPlayed"), 100),
    entry: ratio(sum(lines, "entryWins"), sum(lines, "entryAttempts"), 100),
    utility: ratio(sum(lines, "utilityDamage"), rounds),
    kills, deaths,
    multi: { k2: sum(lines, "multi2k"), k3: sum(lines, "multi3k"), k4: sum(lines, "multi4k"), k5: sum(lines, "multi5k") },
    maps: [...maps].map(([name, v]) => ({ name, ...v })).sort((a, b) => b.played - a.played),
    weapons: [...weapons].map(([name, v]) => ({ name, ...v })).sort((a, b) => b.kills - a.kills).slice(0, 10),
  };
}

/** Match counts per UTC day for the last `weeks` weeks, oldest first, Monday-aligned columns. */
export function activityGrid(dates: Date[], now: Date, weeks = 26) {
  const day = 86_400_000;
  const today = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  const dow = (new Date(today).getUTCDay() + 6) % 7;
  const start = today - dow * day - (weeks - 1) * 7 * day;
  const counts = new Array<number>(weeks * 7).fill(0);
  for (const d of dates) {
    const i = Math.floor((d.getTime() - start) / day);
    if (i >= 0 && i < counts.length && start + i * day <= today) counts[i]! += 1;
  }
  return { start: new Date(start), counts, future: Array.from({ length: weeks * 7 }, (_, i) => start + i * day > today) };
}
