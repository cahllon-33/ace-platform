import { NextResponse } from "next/server";
import { parseBadgeColor } from "@/lib/badge-color";
import { getPrisma } from "@/server/db";
import { badRequest, readJsonObject } from "@/server/http";
import { readSessionUser } from "@/server/session";

/** Saves the player's standard emblem color (#rrggbb) or resets it (color: null). Every plan; cosmetic only. */
export async function POST(request: Request) {
  const user = await readSessionUser();
  if (!user) return NextResponse.json({ error: "Sign in required." }, { status: 401 });
  const body = await readJsonObject(request);
  if (!body || !("color" in body)) return badRequest();
  const color = body.color === null ? null : parseBadgeColor(body.color);
  if (body.color !== null && !color) return badRequest();
  try {
    await getPrisma().user.update({ where: { id: user.id }, data: { badgeColor: color } });
    return NextResponse.json({ color });
  } catch {
    return NextResponse.json({ error: "Could not save badge color." }, { status: 500 });
  }
}
