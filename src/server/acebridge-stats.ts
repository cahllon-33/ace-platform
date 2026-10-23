import { getPrisma } from "@/server/db";
import { aggregateRounds, type RoundEvent } from "@/lib/acebridge-rounds";

/** Recompute one match's per-player AceBridge stats from all its round_stats events (idempotent). */
export async function refreshBridgeStats(matchKey: string) {
  const db = getPrisma();
  const ev = await db.cs2PluginEvent.findMany({ where: { matchId: matchKey, type: "round_stats" }, orderBy: { receivedAt: "asc" }, select: { payload: true }, take: 200 });
  const rows = aggregateRounds(ev.map((e) => (e.payload ?? {}) as RoundEvent));
  await db.$transaction(rows.map(({ steamId, ...v }) => db.cs2PlayerMatchStat.upsert({ where: { matchKey_steamId: { matchKey, steamId } }, create: { matchKey, steamId, ...v }, update: v })));
  return rows.length;
}
