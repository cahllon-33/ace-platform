import { NextResponse } from "next/server";
import { optionalString, publicErrorMessage, readJsonObject } from "@/server/http";
import { readSessionUser } from "@/server/session";
import { registerTeam } from "@/server/tournaments";

export async function POST(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const user = await readSessionUser();
  if (!user) {
    return NextResponse.json({ error: "Sign in required." }, { status: 401 });
  }
  const { id } = await context.params;
  const body = await readJsonObject(request);
  const teamId = optionalString(body?.teamId, 64);
  if (!teamId) {
    return NextResponse.json({ error: "teamId is required." }, { status: 400 });
  }
  try {
    const entry = await registerTeam(user.id, id, teamId);
    return NextResponse.json({ entry });
  } catch (error) {
    const message = publicErrorMessage(error, "Registration failed.");
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
