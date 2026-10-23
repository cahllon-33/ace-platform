import { getPrisma } from "@/server/db";
import { applyVerifiedMatchResult } from "@/server/match-results";
import type { IngestStore } from "@/server/dathost-ingest";

/** Prisma implementation of the ingest storage port. */
export function prismaIngestStore(): IngestStore {
  const prisma = getPrisma();
  return {
    findByExternalId: (externalId) => prisma.match.findUnique({ where: { externalId }, select: { id: true, state: true, ratingApplied: true, isTest: true, countsForRp: true } }),
    usersBySteamId: async (steamIds) => {
      const rows = steamIds.length ? await prisma.user.findMany({ where: { steamId: { in: steamIds } }, select: { id: true, steamId: true } }) : [];
      return new Map(rows.flatMap((r) => (r.steamId ? [[r.steamId, r.id] as const] : [])));
    },
    createMatch: (s, users) =>
      prisma.match.create({
        data: {
          externalId: s.externalId, gameServerId: s.gameServerId, round: 0, slot: 0, state: "IN_PROGRESS", mapName: s.map,
          scoreA: s.scoreA, scoreB: s.scoreB, teamAId: "team1", teamBId: "team2", source: "dathost", endedAt: new Date(),
          players: {
            create: s.lines.filter((l) => users.has(l.steamId)).map((l) => ({
              userId: users.get(l.steamId)!, teamId: l.team, kills: l.kills, deaths: l.deaths, assists: l.assists, damage: l.damage,
              roundsPlayed: l.roundsPlayed, headshotKills: l.headshotKills, mvps: l.mvps, multi2k: l.multi2k, multi3k: l.multi3k,
              multi4k: l.multi4k, multi5k: l.multi5k, entryWins: l.entryWins, entryAttempts: l.entryAttempts, utilityDamage: l.utilityDamage,
              clutchesWon: l.clutchesWon, clutchesPlayed: l.clutchesPlayed,
            })),
          },
        },
        select: { id: true },
      }),
    recordLines: async (id, s, users) => {
      await prisma.match.update({ where: { id }, data: { scoreA: s.scoreA, scoreB: s.scoreB, mapName: s.map ?? undefined, endedAt: new Date() } });
      for (const l of s.lines) {
        const userId = users.get(l.steamId);
        if (!userId) continue;
        const stats = {
          teamId: l.team, kills: l.kills, deaths: l.deaths, assists: l.assists, damage: l.damage, roundsPlayed: l.roundsPlayed,
          headshotKills: l.headshotKills, mvps: l.mvps, multi2k: l.multi2k, multi3k: l.multi3k, multi4k: l.multi4k, multi5k: l.multi5k,
          entryWins: l.entryWins, entryAttempts: l.entryAttempts, utilityDamage: l.utilityDamage, clutchesWon: l.clutchesWon, clutchesPlayed: l.clutchesPlayed,
        };
        await prisma.matchPlayer.upsert({ where: { matchId_userId: { matchId: id, userId } }, create: { matchId: id, userId, ...stats }, update: stats });
      }
    },
    completeWithoutRating: async (id) => {
      await prisma.match.update({ where: { id }, data: { state: "COMPLETED", endedAt: new Date() } });
    },
    applyRating: async (id, winner, opts) => {
      await applyVerifiedMatchResult({ matchId: id, winnerTeamId: winner, source: "dathost", vsBots: opts?.vsBots });
    },
  };
}
