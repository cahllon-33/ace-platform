import { NextResponse } from "next/server";
import { badRequest, optionalString, publicErrorMessage, readJsonObject } from "@/server/http";
import { getPrisma } from "@/server/db";
import { readSessionUser } from "@/server/session";
import { createTournament } from "@/server/tournaments";

export async function GET() {
  const tournaments = await getPrisma().tournament.findMany({
    orderBy: { createdAt: "desc" },
    include: { _count: { select: { entries: true, matches: true } } },
    take: 50,
  });
  return NextResponse.json({ tournaments });
}

export async function POST(request: Request) {
  const user = await readSessionUser();
  if (!user) {
    return NextResponse.json({ error: "Sign in required." }, { status: 401 });
  }
  const body = await readJsonObject(request);
  if (!body) return badRequest();
  try {
    const tournament = await createTournament(user.id, optionalString(body.name, 80) ?? "");
    return NextResponse.json({ tournament });
  } catch (error) {
    const message = publicErrorMessage(error, "Could not create tournament.");
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
