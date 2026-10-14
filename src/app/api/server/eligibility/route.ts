import { NextResponse } from "next/server";
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

  const body = (await request.json()) as {
    steamId?: string;
    steamIds?: string[];
    mode?: "ranked" | "managed";
  };

  const steamIds = body.steamIds ?? (body.steamId ? [body.steamId] : []);
  if (steamIds.length === 0) {
    return NextResponse.json({ error: "steamId is required." }, { status: 400 });
  }

  const mode = body.mode === "ranked" ? "ranked" : "managed";
  const results = await Promise.all(steamIds.map((steamId) => evaluateEligibility(steamId, mode)));
  return NextResponse.json({ results });
}
