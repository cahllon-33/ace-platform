import { buildSingleEliminationBracket } from "@/lib/bracket";
import { getPrisma } from "@/server/db";

export async function createTournament(createdById: string, name: string) {
  const trimmed = name.trim();
  if (trimmed.length < 3) {
    throw new Error("Tournament names must be at least 3 characters.");
  }
  return getPrisma().tournament.create({
    data: { name: trimmed, createdById, status: "REGISTRATION" },
  });
}

export async function registerTeam(userId: string, tournamentId: string, teamId: string) {
  const prisma = getPrisma();
  const tournament = await prisma.tournament.findUnique({ where: { id: tournamentId } });
  if (!tournament || tournament.status !== "REGISTRATION") {
    throw new Error("Registration is closed.");
  }

  const captain = await prisma.teamMember.findFirst({
    where: { teamId, userId, role: "CAPTAIN" },
  });
  if (!captain) {
    throw new Error("Only a team captain may register that roster.");
  }

  const rosterCount = await prisma.teamMember.count({ where: { teamId } });
  if (rosterCount < 1) {
    throw new Error("The roster is empty.");
  }

  const existingCount = await prisma.tournamentEntry.count({ where: { tournamentId } });
  if (existingCount >= 100) {
    throw new Error("This event is capped at 100 teams.");
  }

  return prisma.tournamentEntry.create({
    data: { tournamentId, teamId },
  });
}

export async function generateBracket(userId: string, tournamentId: string) {
  const prisma = getPrisma();
  const tournament = await prisma.tournament.findUnique({
    where: { id: tournamentId },
    include: { entries: { orderBy: { registeredAt: "asc" } } },
  });
  if (!tournament) {
    throw new Error("Tournament not found.");
  }
  if (tournament.createdById !== userId) {
    throw new Error("Only the organizer may lock registration and generate the tree.");
  }
  if (tournament.status !== "REGISTRATION") {
    throw new Error("The bracket has already been generated.");
  }

  const teamIds = tournament.entries.map((entry) => entry.teamId);
  const plan = buildSingleEliminationBracket(teamIds);

  await prisma.$transaction(async (tx) => {
    for (const [index, entry] of tournament.entries.entries()) {
      await tx.tournamentEntry.update({
        where: { id: entry.id },
        data: { seed: index + 1 },
      });
    }

    await tx.match.deleteMany({ where: { tournamentId } });

    for (const match of plan.matches) {
      await tx.match.create({
        data: {
          tournamentId,
          round: match.round,
          slot: match.slot,
          state: match.state,
          teamAId: match.teamAId,
          teamBId: match.teamBId,
          winnerTeamId: match.winnerTeamId,
          source: match.state === "BYE" ? "bye" : "unverified",
        },
      });
    }

    await tx.tournament.update({
      where: { id: tournamentId },
      data: { status: "LOCKED", lockedAt: new Date() },
    });
  });

  return plan;
}
