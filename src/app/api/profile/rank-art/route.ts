import { NextResponse } from "next/server";
import { badRequest, readJsonObject } from "@/server/http";
import { PremiumRankArtRequired, parseRankArt, setRankArt } from "@/server/rank-art";
import { readSessionUser } from "@/server/session";

/** Sets the profile rank art. Premium art is refused (403) unless the stored plan is PREMIUM. */
export async function POST(request: Request) {
  const user = await readSessionUser();
  if (!user) return NextResponse.json({ error: "Sign in required." }, { status: 401 });
  const body = await readJsonObject(request);
  const art = body ? parseRankArt(body.art) : null;
  if (!art) return badRequest();
  try {
    return NextResponse.json({ art: await setRankArt(user.id, art) });
  } catch (error) {
    if (error instanceof PremiumRankArtRequired) {
      return NextResponse.json({ error: error.message }, { status: 403 });
    }
    return NextResponse.json({ error: "Could not save rank art." }, { status: 500 });
  }
}
