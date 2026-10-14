import { NextResponse } from "next/server";
import { badRequest, readJsonObject } from "@/server/http";
import { evaluateEligibility, timingSafeEqualString } from "@/server/eligibility";
import { getCs2ServerSecret } from "@/server/env";

function readBearer(request: Request): string | null {
  const header = request.headers.get("authorization");
  if (!header?.startsWith("Bearer ")) {
    return null;
  }
  return header.slice("Bearer ".length).trim();
}

export async function POST(request: Request) {
  let expected: string;
  try {
    expected = getCs2ServerSecret();
  } catch {
    return NextResponse.json(
      { decision: "DENY", reason: "Server shared secret is not configured." },
      { status: 503 },
    );
  }

  const provided = readBearer(request);
  if (!provided || !timingSafeEqualString(provided, expected)) {
    return NextResponse.json({ decision: "DENY", reason: "Unauthorized game server." }, { status: 401 });
  }

  const body = await readJsonObject(request);
  if (!body) return badRequest();
  const rawIds: unknown[] = Array.isArray(body.steamIds) ? body.steamIds : body.steamId !== undefined ? [body.steamId] : [];
  // SteamID64 values only, at most one 5v5 lobby (10 players) per call.
  if (rawIds.length === 0 || rawIds.length > 10 || !rawIds.every((id) => typeof id === "string" && /^\d{17}$/.test(id))) {
    return NextResponse.json({ error: "steamId must be 1–10 SteamID64 values." }, { status: 400 });
  }
  const steamIds = rawIds as string[];

  const mode = body.mode === "ranked" ? "ranked" : "managed";
  const results = await Promise.all(steamIds.map((steamId) => evaluateEligibility(steamId, mode)));
  return NextResponse.json({ results });
}
