import type { Cs2Match, Cs2MatchPlayerStats } from "@/server/dathost";

/** One player's stat line as stored in MatchPlayer (null = DatHost did not report it). */
export type IngestLine = {
  steamId: string; team: "team1" | "team2";
  kills: number | null; deaths: number | null; assists: number | null; damage: number | null; roundsPlayed: number | null;
  headshotKills: number | null; mvps: number | null; multi2k: number | null; multi3k: number | null; multi4k: number | null; multi5k: number | null;
  entryWins: number | null; entryAttempts: number | null; utilityDamage: number | null; clutchesWon: number | null; clutchesPlayed: number | null;
};

export type MatchSummary = {
  externalId: string; gameServerId: string; map: string | null; scoreA: number; scoreB: number; rounds: number;
  winner: "team1" | "team2" | null; lines: IngestLine[];
};

const n = (v: unknown) => (typeof v === "number" && Number.isFinite(v) ? Math.round(v) : null);

/** Pure: DatHost match payload -> what A.C.E. stores. Spectators are dropped; ties have no winner. */
export function summarizeDathostMatch(m: Cs2Match): MatchSummary {
  const scoreA = n(m.team1?.stats?.score) ?? 0;
  const scoreB = n(m.team2?.stats?.score) ?? 0;
  const rounds = n(m.rounds_played) ?? scoreA + scoreB;
  const lines = (m.players ?? [])
    .filter((p): p is typeof p & { team: "team1" | "team2" } => p.team === "team1" || p.team === "team2")
    .filter((p) => /^\d{17}$/.test(p.steam_id_64))
    .map((p) => {
      const s: Cs2MatchPlayerStats = p.stats ?? {};
      return {
        steamId: p.steam_id_64, team: p.team,
        kills: n(s.kills), deaths: n(s.deaths), assists: n(s.assists), damage: n(s.damage_dealt), roundsPlayed: rounds || null,
        headshotKills: n(s.kills_with_headshot), mvps: n(s.mvps),
        multi2k: n(s["2ks"]), multi3k: n(s["3ks"]), multi4k: n(s["4ks"]), multi5k: n(s["5ks"]),
        entryWins: n(s.entry_successes), entryAttempts: n(s.entry_attempts), utilityDamage: n(s.utility_damage),
        clutchesWon: n(s["1vX_wins"]), clutchesPlayed: n(s["1vX_attempts"]),
      };
    });
  return {
    externalId: m.id, gameServerId: m.game_server_id, map: m.settings?.map ?? null, scoreA, scoreB, rounds,
    winner: scoreA === scoreB ? null : scoreA > scoreB ? "team1" : "team2", lines,
  };
}

/** Storage port so the idempotency logic is testable without a database. */
export type IngestStore = {
  findByExternalId(externalId: string): Promise<{ id: string; state: string; ratingApplied: boolean } | null>;
  usersBySteamId(steamIds: string[]): Promise<Map<string, string>>;
  /** Creates the match + player lines. Must throw a { code: "P2002" } error if externalId already exists. */
  createMatch(summary: MatchSummary, userIds: Map<string, string>): Promise<{ id: string }>;
  completeWithoutRating(matchId: string): Promise<void>;
  applyRating(matchId: string, winnerTeamId: "team1" | "team2"): Promise<void>;
};

export type IngestResult =
  | { status: "applied"; matchId: string; players: number }
  | { status: "stored"; matchId: string; reason: "tie" | "one-sided" }
  | { status: "duplicate"; matchId: string | null }
  | { status: "ignored"; reason: "not-finished" | "canceled" | "wrong-server" };

/**
 * Idempotent: the DatHost match id is a unique key, so a re-delivered (or concurrent) webhook can never
 * create a second match or apply RP twice. RP is applied through the existing engine (applyVerifiedMatchResult).
 */
export async function ingestDathostMatch(m: Cs2Match, store: IngestStore, opts: { serverId?: string } = {}): Promise<IngestResult> {
  if (m.cancel_reason) return { status: "ignored", reason: "canceled" };
  if (!m.finished) return { status: "ignored", reason: "not-finished" };
  if (opts.serverId && m.game_server_id !== opts.serverId) return { status: "ignored", reason: "wrong-server" };
  const existing = await store.findByExternalId(m.id);
  if (existing && (existing.state === "COMPLETED" || existing.ratingApplied)) return { status: "duplicate", matchId: existing.id };
  const summary = summarizeDathostMatch(m);
  let matchId = existing?.id ?? null;
  const users = await store.usersBySteamId(summary.lines.map((l) => l.steamId));
  if (!matchId) {
    try {
      matchId = (await store.createMatch(summary, users)).id;
    } catch (e) {
      if ((e as { code?: string })?.code === "P2002") return { status: "duplicate", matchId: null };
      throw e;
    }
  }
  const known = summary.lines.filter((l) => users.has(l.steamId));
  const sides = new Set(known.map((l) => l.team));
  if (!summary.winner || sides.size < 2) {
    await store.completeWithoutRating(matchId);
    return { status: "stored", matchId, reason: summary.winner ? "one-sided" : "tie" };
  }
  try {
    await store.applyRating(matchId, summary.winner);
  } catch (e) {
    if (/already applied/i.test(String((e as Error)?.message))) return { status: "duplicate", matchId };
    throw e;
  }
  return { status: "applied", matchId, players: known.length };
}
