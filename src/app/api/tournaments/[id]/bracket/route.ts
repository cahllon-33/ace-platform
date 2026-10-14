import { NextResponse } from "next/server";
import { publicErrorMessage } from "@/server/http";
import { getPrisma } from "@/server/db";
import { readSessionUser } from "@/server/session";
import { generateBracket } from "@/server/tournaments";

export async function GET(
  _request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;
  const matches = await getPrisma().match.findMany({
    where: { tournamentId: id },
    orderBy: [{ round: "asc" }, { slot: "asc" }],
  });
  return NextResponse.json({ matches });
}

export async function POST(
  _request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const user = await readSessionUser();
  if (!user) {
    return NextResponse.json({ error: "Sign in required." }, { status: 401 });
  }
  const { id } = await context.params;
  try {
    const plan = await generateBracket(user.id, id);
    return NextResponse.json({ plan });
  } catch (error) {
    const message = publicErrorMessage(error, "Bracket generation failed.");
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
