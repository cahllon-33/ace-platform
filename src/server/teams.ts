import { getPrisma } from "@/server/db";
import { TeamError } from "@/server/team-error";

const ROSTER_LIMIT = 5;

export async function createTeam(captainUserId: string, name: string) {
  const trimmed = name.trim();
  if (trimmed.length < 2 || trimmed.length > 32) {
    throw new TeamError("nameLength");
  }

  const prisma = getPrisma();
  return prisma.$transaction(async (tx) => {
    const existingCaptain = await tx.teamMember.findFirst({
      where: { userId: captainUserId, role: "CAPTAIN" },
    });
    if (existingCaptain) {
      throw new TeamError("alreadyCaptain");
    }

    const clanTag = trimmed.replace(/\s+/g, "").slice(0, 5).toUpperCase() || "ACE";
    const existingName = await tx.team.findUnique({ where: { name: trimmed } });
    if (existingName) {
      throw new TeamError("nameTaken");
    }
    const team = await tx.team.create({
      data: {
        name: trimmed,
        clanTag,
        tag: clanTag,
        captainId: captainUserId,
      },
    });
    await tx.teamMember.create({
      data: { teamId: team.id, userId: captainUserId, role: "CAPTAIN" },
    });
    return team;
  });
}

export async function resolveInviteeUserId(token: string) {
  const trimmed = token.trim();
  if (!trimmed) {
    throw new TeamError("idRequired");
  }

  const prisma = getPrisma();
  const bySteam = await prisma.user.findUnique({ where: { steamId: trimmed } });
  if (bySteam) return bySteam.id;

  const byId = await prisma.user.findUnique({ where: { id: trimmed } });
  if (byId) return byId.id;

  throw new TeamError("noAccountForToken");
}

export async function registerFivePlayerClan(captainUserId: string, name: string, seatTokens: string[]) {
  if (seatTokens.length !== 4) {
    throw new TeamError("clanNeedsFour");
  }
  const trimmedSeats = seatTokens.map((token) => token.trim());
  if (trimmedSeats.some((token) => token.length < 2)) {
    throw new TeamError("seatNeedsId");
  }
  if (new Set(trimmedSeats).size !== 4) {
    throw new TeamError("seatsDistinct");
  }

  const inviteeIds: string[] = [];
  for (const token of trimmedSeats) {
    const inviteeId = await resolveInviteeUserId(token);
    if (inviteeId === captainUserId) {
      throw new TeamError("captainHoldsSeat");
    }
    inviteeIds.push(inviteeId);
  }
  if (new Set(inviteeIds).size !== 4) {
    throw new TeamError("fewerThanFour");
  }

  const trimmed = name.trim();
  if (trimmed.length < 2 || trimmed.length > 32) {
    throw new TeamError("nameLength");
  }

  const prisma = getPrisma();
  return prisma.$transaction(async (tx) => {
    const existingCaptain = await tx.teamMember.findFirst({
      where: { userId: captainUserId, role: "CAPTAIN" },
    });
    if (existingCaptain) {
      throw new TeamError("alreadyCaptain");
    }
    const clanTag = trimmed.replace(/\s+/g, "").slice(0, 5).toUpperCase() || "ACE";
    const existingName = await tx.team.findUnique({ where: { name: trimmed } });
    if (existingName) {
      throw new TeamError("nameTaken");
    }
    const team = await tx.team.create({
      data: { name: trimmed, clanTag, tag: clanTag, captainId: captainUserId },
    });
    await tx.teamMember.create({
      data: { teamId: team.id, userId: captainUserId, role: "CAPTAIN" },
    });
    for (const inviteeId of inviteeIds) {
      await tx.teamInvitation.create({
        data: { teamId: team.id, inviterId: captainUserId, inviteeId },
      });
    }
    return team;
  });
}

export async function inviteToTeam(captainUserId: string, teamId: string, inviteeUserId: string) {
  if (captainUserId === inviteeUserId) {
    throw new TeamError("selfInvite");
  }

  const prisma = getPrisma();
  return prisma.$transaction(async (tx) => {
    const captain = await tx.teamMember.findFirst({
      where: { teamId, userId: captainUserId, role: "CAPTAIN" },
    });
    if (!captain) {
      throw new TeamError("captainOnly");
    }

    const rosterCount = await tx.teamMember.count({ where: { teamId } });
    const pendingCount = await tx.teamInvitation.count({
      where: { teamId, status: "PENDING" },
    });
    if (rosterCount + pendingCount >= ROSTER_LIMIT) {
      throw new TeamError("rosterLimit");
    }

    const alreadyMember = await tx.teamMember.findUnique({
      where: { teamId_userId: { teamId, userId: inviteeUserId } },
    });
    if (alreadyMember) {
      throw new TeamError("alreadyOnRoster");
    }

    const invitee = await tx.user.findUnique({ where: { id: inviteeUserId } });
    if (!invitee) {
      throw new TeamError("noAccountForId");
    }

    return tx.teamInvitation.create({
      data: {
        teamId,
        inviterId: captainUserId,
        inviteeId: inviteeUserId,
      },
    });
  });
}

export async function respondToInvite(
  userId: string,
  invitationId: string,
  accept: boolean,
) {
  const prisma = getPrisma();
  return prisma.$transaction(async (tx) => {
    const invite = await tx.teamInvitation.findUnique({ where: { id: invitationId } });
    if (!invite || invite.inviteeId !== userId) {
      throw new TeamError("inviteNotFound");
    }
    if (invite.status !== "PENDING") {
      throw new TeamError("inviteNotPending");
    }

    if (!accept) {
      return tx.teamInvitation.update({
        where: { id: invitationId },
        data: { status: "DECLINED", respondedAt: new Date() },
      });
    }

    const rosterCount = await tx.teamMember.count({ where: { teamId: invite.teamId } });
    if (rosterCount >= ROSTER_LIMIT) {
      throw new TeamError("rosterFull");
    }

    await tx.teamMember.create({
      data: { teamId: invite.teamId, userId, role: "PLAYER" },
    });

    return tx.teamInvitation.update({
      where: { id: invitationId },
      data: { status: "ACCEPTED", respondedAt: new Date() },
    });
  });
}
