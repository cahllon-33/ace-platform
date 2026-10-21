/**
 * Prestige levels for 2,000–3,000 RP (R41-D). Cosmetic only: earned purely by RP, never sold and
 * never affecting matchmaking or rating. Plus and Premium show an animated prestige badge set;
 * Free players keep their normal tier badge plus a text milestone.
 * Names are original A.C.E. names (not taken from any other platform) and are not rank names.
 */
export type PrestigeSet = "plus" | "premium";
export type PrestigeLevel = { level: 1 | 2 | 3 | 4 | 5; name: string; minRp: number };

export const PRESTIGE_LEVELS: readonly PrestigeLevel[] = [
  { level: 1, name: "Gilded", minRp: 2000 },
  { level: 2, name: "Radiant", minRp: 2200 },
  { level: 3, name: "Exalted", minRp: 2400 },
  { level: 4, name: "Mythic", minRp: 2600 },
  { level: 5, name: "Eternal", minRp: 2800 },
] as const;

export const PRESTIGE_MIN_RP = PRESTIGE_LEVELS[0].minRp;

export function prestigeForRp(rp: number): PrestigeLevel | null {
  let hit: PrestigeLevel | null = null;
  for (const p of PRESTIGE_LEVELS) if (rp >= p.minRp) hit = p;
  return hit;
}

/** Which badge set a plan shows. FREE gets no set (text milestone only). */
export function prestigeSetFor(plan: string | null | undefined): PrestigeSet | null {
  if (plan === "PREMIUM") return "premium";
  if (plan === "PLUS") return "plus";
  return null;
}

/** The prestige layer to render on a RankOrb, or null. */
export function prestigeBadge(rp: number, plan: string | null | undefined): { level: number; set: PrestigeSet; name: string } | null {
  const p = prestigeForRp(rp);
  const set = prestigeSetFor(plan);
  return p && set ? { level: p.level, set, name: p.name } : null;
}
