import { NextResponse } from "next/server";
import { optionalString, publicErrorMessage, readJsonObject } from "@/server/http";
import { timingSafeEqualString } from "@/server/eligibility";
import { getCs2ServerSecret } from "@/server/env";
import { applyVerifiedMatchResult } from "@/server/match-results";

export async function POST(request: Request) {
  let expected: string;
  try {
    expected = getCs2ServerSecret();
  } catch {
    return NextResponse.json({ error: "Server secret is not configured." }, { status: 503 });
  }

  const header = request.headers.get("authorization");
  const token = header?.startsWith("Bearer ") ? header.slice(7).trim() : "";
  if (!token || !timingSafeEqualString(token, expected)) {
    return NextResponse.json({ error: "Unauthorized game server." }, { status: 401 });
  }

  const body = await readJsonObject(request);
  const matchId = optionalString(body?.matchId, 64);
  const winnerTeamId = optionalString(body?.winnerTeamId, 64);
  if (!matchId || !winnerTeamId) {
    return NextResponse.json({ error: "matchId and winnerTeamId are required." }, { status: 400 });
  }

  try {
    const match = await applyVerifiedMatchResult({
      matchId,
      winnerTeamId,
      source: "cs2-server",
    });
    return NextResponse.json({ match });
  } catch (error) {
    const message = publicErrorMessage(error, "Could not apply result.");
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
