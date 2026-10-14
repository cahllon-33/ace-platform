import { NextResponse } from "next/server";
import { badRequest, optionalString, readJsonObject } from "@/server/http";
import { readSessionUser } from "@/server/session";
import { teamErrorMessage } from "@/server/team-error";
import { createTeam, registerFivePlayerClan } from "@/server/teams";
import { getPrisma } from "@/server/db";

export async function GET() {
  const user = await readSessionUser();
  if (!user) {
    return NextResponse.json({ error: await teamErrorMessage(null, "signInRequired") }, { status: 401 });
  }

  const memberships = await getPrisma().teamMember.findMany({
    where: { userId: user.id },
    include: {
      team: {
        include: {
          members: { include: { user: { select: { displayName: true } } } },
          invitations: { where: { status: "PENDING" } },
        },
      },
    },
  });

  return NextResponse.json({
    teams: memberships.map((membership) => ({
      id: membership.team.id,
      name: membership.team.name,
      role: membership.role,
      members: membership.team.members.map((member) => ({
        userId: member.userId,
        displayName: member.user.displayName,
        role: member.role,
      })),
    })),
  });
}

export async function POST(request: Request) {
  const user = await readSessionUser();
  if (!user) {
    return NextResponse.json({ error: await teamErrorMessage(null, "signInRequired") }, { status: 401 });
  }

  const body = await readJsonObject(request);
  if (!body) return badRequest();
  const name = optionalString(body.name, 64) ?? "";
  try {
    if (Array.isArray(body.seats)) {
      const seats = body.seats
        .slice(0, 10)
        .map((seat) => optionalString(seat, 64))
        .filter((seat): seat is string => Boolean(seat));
      const team = await registerFivePlayerClan(user.id, name, seats);
      return NextResponse.json({
        team,
        charged: false,
        emailSent: false,
        boardSeat: false,
      });
    }
    const team = await createTeam(user.id, name);
    return NextResponse.json({ team });
  } catch (error) {
    return NextResponse.json({ error: await teamErrorMessage(error, "createFailed") }, { status: 400 });
  }
}
