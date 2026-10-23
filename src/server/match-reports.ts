/**
 * R60 in-app post-match reports (desktop). The server checks both players were in the lobby; the reporter never
 * learns anything about the target beyond what the lobby already showed. Rate-limited; never auto-punishes.
 * Cheating reports open (or annotate) an AnticheatReview for the owner queue; griefing goes to /admin/reports.
 */
import { Prisma } from "@prisma/client";
import { getPrisma } from "@/server/db";
import { checkReport, cleanDetails, isReportCategory } from "@/lib/match-reports";

export async function submitMatchReport(reporterId: string, body: Record<string, unknown>, now = new Date()) {
  const lobbyId = typeof body.lobbyId === "string" ? body.lobbyId.slice(0, 40) : "";
  const targetUserId = typeof body.targetUserId === "string" ? body.targetUserId.slice(0, 64) : "";
  const category = body.category;
  if (!lobbyId || !targetUserId || !isReportCategory(category)) return { ok: false as const, error: "invalid" };
  const db = getPrisma();
  const lobby = await db.queueLobby.findUnique({ where: { id: lobbyId }, select: { state: true, endedAt: true, dathostMatchId: true, players: { select: { userId: true } } } });
  if (!lobby) return { ok: false as const, error: "not_in_match" };
  const ids = new Set(lobby.players.map((p) => p.userId));
  const [today, thisMatch, dup, target] = await Promise.all([
    db.playerReport.count({ where: { reporterId, source: "desktop", createdAt: { gte: new Date(now.getTime() - 86400_000) } } }),
    db.playerReport.count({ where: { reporterId, lobbyId } }),
    db.playerReport.count({ where: { reporterId, lobbyId, targetUserId } }),
    db.user.findUnique({ where: { id: targetUserId }, select: { steamId: true } }),
  ]);
  const verdict = checkReport({
    reporterInLobby: ids.has(reporterId), targetInLobby: ids.has(targetUserId) && !!target?.steamId, self: reporterId === targetUserId,
    lobbyEndedAt: lobby.endedAt, lobbyStarted: ["LIVE", "DONE"].includes(lobby.state),
    reportsToday: today, reportsThisMatch: thisMatch, alreadyReportedTarget: dup > 0, now,
  });
  // Rate-limit and duplicate answers look like success so limits cannot be probed.
  if (!verdict.ok) return verdict.error === "rate_limited" || verdict.error === "duplicate" ? { ok: true as const } : verdict;
  const steamId = target!.steamId!;
  await db.playerReport.create({ data: { reporterId, targetSteamId: steamId, targetUserId, lobbyId, category, source: "desktop", reason: category === "cheating" ? "cheating" : "abuse", details: cleanDetails(body.details) } });
  if (category === "cheating" && lobby.dathostMatchId) {
    const matchKey = lobby.dathostMatchId;
    const reporters = await db.playerReport.findMany({ where: { lobbyId, targetUserId, category: "cheating" }, select: { reporterId: true }, distinct: ["reporterId"] });
    const reason = { key: "player_reports", value: reporters.length, points: 0, text: `${reporters.length} player report(s) for cheating in this match` };
    const existing = await db.anticheatReview.findUnique({ where: { matchKey_steamId: { matchKey, steamId } } });
    if (!existing) {
      await db.anticheatReview.create({ data: { matchKey, steamId, userId: targetUserId, score: 0, level: "low", indicators: {}, reasons: [reason] as unknown as Prisma.InputJsonValue, source: "reports" } });
    } else if (existing.status === "open") {
      const rs = (Array.isArray(existing.reasons) ? (existing.reasons as { key: string }[]) : []).filter((r) => r.key !== "player_reports");
      await db.anticheatReview.update({ where: { id: existing.id }, data: { reasons: [...rs, reason] as unknown as Prisma.InputJsonValue } });
    }
  }
  return { ok: true as const };
}
