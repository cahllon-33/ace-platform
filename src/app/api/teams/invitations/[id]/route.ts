import { NextResponse } from "next/server";
import { badRequest, readJsonObject } from "@/server/http";
import { readSessionUser } from "@/server/session";
import { teamErrorMessage } from "@/server/team-error";
import { respondToInvite } from "@/server/teams";

export async function POST(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const user = await readSessionUser();
  if (!user) {
    return NextResponse.json({ error: await teamErrorMessage(null, "signInRequired") }, { status: 401 });
  }

  const { id } = await context.params;
  const body = await readJsonObject(request);
  if (!body || typeof body.accept !== "boolean") return badRequest();

  try {
    const invitation = await respondToInvite(user.id, id, body.accept);
    return NextResponse.json({ invitation });
  } catch (error) {
    return NextResponse.json({ error: await teamErrorMessage(error, "updateInviteFailed") }, { status: 400 });
  }
}
