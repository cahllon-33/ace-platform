import { applyTeamMatchRatings } from "@/lib/rating";
import { rankFromRating } from "@/lib/ranks";
import { RATING_CONFIG } from "@/lib/rating";
import { getPrisma } from "@/server/db";

export async function applyVerifiedMatchResult(args: {
  matchId: string;
  winnerTeamId: string;
  source: string;
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

    const deltas =
      winners.length && losers.length
        ? applyTeamMatchRatings({
            winnerRatings: winners.map((player) => player.user.competitiveRating),
            loserRatings: losers.map((player) => player.user.competitiveRating),
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
        source: args.source,
        ratingApplied: winners.length > 0,
        endedAt: new Date(),
      },
    });
  });
}
