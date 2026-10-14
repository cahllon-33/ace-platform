import { NextResponse } from "next/server";
import { readSessionUser } from "@/server/session";
import { teamErrorMessage } from "@/server/team-error";
import { inviteToTeam, resolveInviteeUserId } from "@/server/teams";

export async function POST(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const user = await readSessionUser();
  if (!user) {
    return NextResponse.json({ error: await teamErrorMessage(null, "signInRequired") }, { status: 401 });
  }

  const { id } = await context.params;
  const body = (await request.json()) as { userId?: string; steamId?: string };
  const token = body.steamId ?? body.userId;
  if (!token) {
    return NextResponse.json({ error: await teamErrorMessage(null, "idRequired") }, { status: 400 });
  }

  try {
    const inviteeId = await resolveInviteeUserId(token);
    const invitation = await inviteToTeam(user.id, id, inviteeId);
    return NextResponse.json({ invitation });
  } catch (error) {
    return NextResponse.json({ error: await teamErrorMessage(error, "inviteFailed") }, { status: 400 });
  }
}
