import { NextResponse } from "next/server";
import { getPrisma } from "@/server/db";
import { readSessionUser } from "@/server/session";

/** R49b: the signed-in player hides or shows their own Steam inventory showcase. */
export async function POST(request: Request) {
  const user = await readSessionUser().catch(() => null);
  if (!user) return NextResponse.json({ ok: false, error: "sign-in" }, { status: 401 });
  const body = (await request.json().catch(() => null)) as { hidden?: unknown } | null;
  if (typeof body?.hidden !== "boolean") return NextResponse.json({ ok: false, error: "bad-request" }, { status: 400 });
  await getPrisma().user.update({ where: { id: user.id }, data: { inventoryHidden: body.hidden } });
  return NextResponse.json({ ok: true, hidden: body.hidden });
}
