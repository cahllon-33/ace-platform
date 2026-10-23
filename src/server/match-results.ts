import { applyTeamMatchRatings } from "@/lib/rating";
import { rankFromRating } from "@/lib/ranks";
import { RATING_CONFIG } from "@/lib/rating";
import { getPrisma } from "@/server/db";

export async function applyVerifiedMatchResult(args: {
  matchId: string;
  winnerTeamId: string;
  source: string;
  /** R73: test match vs bots. Registered players sit on one side; the bots are a virtual opponent of equal average RP (bots get nothing). */
  vsBots?: boolean;
}) {
  const prisma = getPrisma();
  return prisma.$transaction(async (tx) => {
    const match = await tx.match.findUnique({
      where: { id: args.matchId },
      include: { players: { include: { user: true } } },
    });
    if (!match) {
      throw new Error("Match not found.");
    }
    if (match.state === "COMPLETED" && match.ratingApplied) {
      throw new Error("This match result was already applied.");
    }
    if (match.state === "DISPUTED") {
      throw new Error("Disputed matches cannot change rating until resolved.");
    }
    if (args.winnerTeamId !== match.teamAId && args.winnerTeamId !== match.teamBId) {
      throw new Error("Winner is not a participant in this match.");
    }

    const winners = match.players.filter((player) => player.teamId === args.winnerTeamId);
    const losers = match.players.filter((player) => player.teamId && player.teamId !== args.winnerTeamId);

    const virtual = (side: typeof winners) => {
      const avg = Math.round(side.reduce((a, p) => a + p.user.competitiveRating, 0) / Math.max(1, side.length));
      return Array.from({ length: 5 }, () => ({ rating: avg, matchesPlayed: 100 }));
    };
    const deltas =
      args.vsBots && match.isTest && (winners.length === 0) !== (losers.length === 0)
        ? (() => {
            const w = winners.map((p) => ({ rating: p.user.competitiveRating, matchesPlayed: p.user.wins + p.user.losses }));
            const l = losers.map((p) => ({ rating: p.user.competitiveRating, matchesPlayed: p.user.wins + p.user.losses }));
            const d = applyTeamMatchRatings({ winners: w.length ? w : virtual(losers), losers: l.length ? l : virtual(winners), killsRecorded: false });
            return { winnerDeltas: winners.length ? d.winnerDeltas : [], loserDeltas: losers.length ? d.loserDeltas : [] };
          })()
        : winners.length && losers.length
        ? applyTeamMatchRatings({
            // matchesPlayed drives placement; kills are not server-recorded yet, so no MVP bonus (RP_RULES.mvpLive).
            winners: winners.map((player) => ({
              rating: player.user.competitiveRating,
              matchesPlayed: player.user.wins + player.user.losses,
            })),
            losers: losers.map((player) => ({
              rating: player.user.competitiveRating,
              matchesPlayed: player.user.wins + player.user.losses,
            })),
            killsRecorded: false,
          })
        : { winnerDeltas: winners.map(() => 0), loserDeltas: losers.map(() => 0) };

    for (const [index, player] of winners.entries()) {
      const ratingBefore = player.user.competitiveRating;
      const ratingAfter = ratingBefore + (deltas.winnerDeltas[index] ?? 0);
      const rankAfter = rankFromRating(ratingAfter).level;
      await tx.user.update({
        where: { id: player.userId },
        data: {
          competitiveRating: ratingAfter,
          rankLevel: rankAfter,
          wins: { increment: 1 },
        },
      });
      await tx.ratingHistory.create({
        data: {
          userId: player.userId,
          matchId: match.id,
          ratingBefore,
          ratingAfter,
          rankBefore: player.user.rankLevel,
          rankAfter,
          algorithmVersion: RATING_CONFIG.version,
          reason: "verified-win",
        },
      });
    }

    for (const [index, player] of losers.entries()) {
      const ratingBefore = player.user.competitiveRating;
      const ratingAfter = ratingBefore + (deltas.loserDeltas[index] ?? 0);
      const rankAfter = rankFromRating(ratingAfter).level;
      await tx.user.update({
        where: { id: player.userId },
        data: {
          competitiveRating: ratingAfter,
          rankLevel: rankAfter,
          losses: { increment: 1 },
        },
      });
      await tx.ratingHistory.create({
        data: {
          userId: player.userId,
          matchId: match.id,
          ratingBefore,
          ratingAfter,
          rankBefore: player.user.rankLevel,
          rankAfter,
          algorithmVersion: RATING_CONFIG.version,
          reason: "verified-loss",
        },
      });
    }

    return tx.match.update({
      where: { id: match.id },
      data: {
        state: "COMPLETED",
        winnerTeamId: args.winnerTeamId,
        source: match.isTest ? "dathost-test" : args.source,
        ratingApplied: winners.length > 0 || (!!args.vsBots && match.isTest && losers.length > 0),
        endedAt: new Date(),
      },
    });
  });
}
