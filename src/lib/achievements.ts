import { PRESTIGE_LEVELS } from "@/lib/prestige";

/** R53 achievements, derived only from stored rows (never granted by hand). */
export type AchSource = {
  /** Verified results oldest first. */
  results: { win: boolean; at: string }[];
  /** Per-match 5k counts (null = not recorded). */
  aces: number;
  mvps: number;
  peakRp: number;
  contractsClaimed: number;
  clutches: number;
};
export type Achievement = { id: string; unlocked: boolean; at: string | null; progress: number; target: number };

function longestWin(results: AchSource["results"]) {
  let best = 0, run = 0, bestAt: string | null = null;
  for (const r of results) { run = r.win ? run + 1 : 0; if (run > best) { best = run; bestAt = r.at; } }
  return { best, at: bestAt };
}

export function achievements(s: AchSource): Achievement[] {
  const wins = s.results.filter((r) => r.win);
  const streak = longestWin(s.results);
  const nth = (n: number) => (wins.length >= n ? wins[n - 1].at : null);
  const a = (id: string, progress: number, target: number, at: string | null = null): Achievement => ({ id, unlocked: progress >= target, at: progress >= target ? at : null, progress: Math.min(progress, target), target });
  const out = [
    a("first-match", s.results.length, 1, s.results[0]?.at ?? null),
    a("first-win", wins.length, 1, nth(1)),
    a("placed", s.results.length, 10, s.results[9]?.at ?? null),
    a("wins-25", wins.length, 25, nth(25)),
    a("wins-100", wins.length, 100, nth(100)),
    a("streak-3", streak.best, 3, streak.at),
    a("streak-5", streak.best, 5, streak.at),
    a("ace", s.aces, 1),
    a("mvp-10", s.mvps, 10),
    a("clutch-10", s.clutches, 10),
    a("contract", s.contractsClaimed, 1),
    a("contract-5", s.contractsClaimed, 5),
  ];
  for (const p of PRESTIGE_LEVELS) out.push(a("prestige-" + p.slug, s.peakRp >= p.minRp ? 1 : 0, 1));
  return out;
}

/** Current and best day streak (consecutive UTC days with at least one verified match) and matches this ISO week. */
export function activityStreak(dates: string[], now = new Date()) {
  const day = (d: Date) => Math.floor(d.getTime() / 86_400_000);
  const days = new Set(dates.map((d) => day(new Date(d))));
  const today = day(now);
  let cur = 0;
  for (let d = days.has(today) ? today : today - 1; days.has(d); d--) cur++;
  let best = 0, run = 0;
  for (const d of [...days].sort((x, y) => x - y)) { run = days.has(d - 1) ? run + 1 : 1; best = Math.max(best, run); }
  const dow = (now.getUTCDay() + 6) % 7;
  const weekStart = today - dow;
  const week = dates.filter((d) => day(new Date(d)) >= weekStart).length;
  return { current: cur, best, week, playedToday: days.has(today) };
}
