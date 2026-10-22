/** R52 parties: pure helpers shared by the queue engine, APIs and tests. */
import type { Seat } from "@/lib/queue";

export const PARTY_MAX = 5;
export const PARTY_TAGS = ["serious", "casual", "verified", "mic", "premium"] as const;
export type PartyTag = (typeof PARTY_TAGS)[number];
export const cleanTags = (v: unknown): PartyTag[] =>
  Array.isArray(v) ? [...new Set(v.filter((t): t is PartyTag => (PARTY_TAGS as readonly string[]).includes(t as string)))] : [];

export type QEntry = Seat & { partyId: string | null; joinedAt: number };
export type Group = { key: string; seats: Seat[]; joinedAt: number };

/** Queue entries grouped by party (solo players are a group of one), oldest first. */
export function groupEntries(entries: QEntry[]): Group[] {
  const map = new Map<string, Group>();
  for (const e of entries) {
    const key = e.partyId ? `p:${e.partyId}` : `u:${e.userId}`;
    const g = map.get(key) ?? { key, seats: [], joinedAt: e.joinedAt };
    g.seats.push({ userId: e.userId, rp: e.rp }); g.joinedAt = Math.min(g.joinedAt, e.joinedAt);
    map.set(key, g);
  }
  return [...map.values()].filter((g) => g.seats.length <= PARTY_MAX).sort((a, b) => a.joinedAt - b.joinedAt);
}

const total = (gs: Group[]) => gs.reduce((a, g) => a + g.seats.length, 0);
const rpSum = (gs: Group[]) => gs.reduce((a, g) => a + g.seats.reduce((x, s) => x + s.rp, 0), 0);

/** Best 5/5 split that keeps every group on one team (smallest RP gap), or null when impossible. */
export function splitGroups(groups: Group[], teamSize = 5): { team1: Seat[]; team2: Seat[]; gap: number } | null {
  let best: { a: Group[]; b: Group[]; gap: number } | null = null;
  const n = groups.length;
  if (n > 12) return null;
  for (let mask = 0; mask < 1 << n; mask++) {
    if (!(mask & 1)) continue; // group 0 always on team1 (halves the search)
    const a = groups.filter((_, i) => mask & (1 << i)), b = groups.filter((_, i) => !(mask & (1 << i)));
    if (total(a) !== teamSize || total(b) !== teamSize) continue;
    const gap = Math.abs(rpSum(a) - rpSum(b));
    if (!best || gap < best.gap) best = { a, b, gap };
  }
  return best && { team1: best.a.flatMap((g) => g.seats), team2: best.b.flatMap((g) => g.seats), gap: best.gap };
}

/** Oldest-first choice of whole groups totalling 10 players that can be split 5/5. Considers the 20 oldest groups. */
export function pickMatch(groups: Group[], size = 10): Group[] | null {
  const pool = groups.slice(0, 20);
  const chosen: Group[] = [];
  const dfs = (i: number, n: number): boolean => {
    if (n === size) return !!splitGroups(chosen, size / 2);
    for (let j = i; j < pool.length; j++) {
      if (n + pool[j].seats.length > size) continue;
      chosen.push(pool[j]);
      if (dfs(j + 1, n + pool[j].seats.length)) return true;
      chosen.pop();
    }
    return false;
  };
  return dfs(0, 0) ? [...chosen] : null;
}

/** Average rank level of a party (rounded), or null when empty. */
export const avgLevel = (levels: number[]) => (levels.length ? Math.round(levels.reduce((a, b) => a + b, 0) / levels.length) : null);
