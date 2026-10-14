import { NextResponse } from "next/server";
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
  const body = (await request.json()) as { name?: string };
  try {
    const tournament = await createTournament(user.id, body.name ?? "");
    return NextResponse.json({ tournament });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Could not create tournament.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
