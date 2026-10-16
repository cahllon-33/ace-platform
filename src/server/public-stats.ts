import { getPrisma } from "@/server/db";
import { readPresence } from "@/server/presence";

/**
 * Public live counters. REAL aggregates only: no inflation, no seeding.
 * Below the threshold the public site shows an honest "early access" state instead of the numbers.
 */
export type PublicStats = {
  /** Signed-in Steam accounts active in the presence window. null when hidden or unavailable. */
  online: number | null;
  /** Accounts with a linked Steam ID. Only grows. null when hidden or unavailable. */
  registered: number | null;
  earlyAccess: boolean;
  unavailable: boolean;
  updatedAt: string;
};

export const DEFAULT_PUBLIC_COUNT_MIN = 25;

export function publicCountMin(env: Record<string, string | undefined> = process.env) {
  const n = Number.parseInt(env.ACE_PUBLIC_COUNT_MIN ?? "", 10);
  return Number.isFinite(n) && n >= 0 && n <= 1_000_000 ? n : DEFAULT_PUBLIC_COUNT_MIN;
}

export function shapePublicStats(
  raw: { online: number; registered: number; unavailable: boolean },
  threshold: number,
  now = new Date(),
): PublicStats {
  const updatedAt = now.toISOString();
  if (raw.unavailable) return { online: null, registered: null, earlyAccess: false, unavailable: true, updatedAt };
  if (raw.registered < threshold) return { online: null, registered: null, earlyAccess: true, unavailable: false, updatedAt };
  return { online: Math.max(0, raw.online), registered: Math.max(0, raw.registered), earlyAccess: false, unavailable: false, updatedAt };
}

const CACHE_MS = 30_000;
let cache: { at: number; value: PublicStats } | null = null;

export async function readPublicStats(): Promise<PublicStats> {
  const now = Date.now();
  if (cache && now - cache.at < CACHE_MS) return cache.value;
  let raw = { online: 0, registered: 0, unavailable: true };
  try {
    const [registered, presence] = await Promise.all([
      getPrisma().user.count({ where: { steamId: { not: null } } }),
      readPresence(),
    ]);
    raw = { online: presence.unavailable ? 0 : presence.count, registered, unavailable: false };
  } catch {
    raw = { online: 0, registered: 0, unavailable: true };
  }
  const value = shapePublicStats(raw, publicCountMin());
  cache = { at: now, value };
  return value;
}
