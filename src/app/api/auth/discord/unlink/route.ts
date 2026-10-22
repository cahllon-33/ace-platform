import { NextResponse } from "next/server";
import { getPrisma } from "@/server/db";
import { postLoginOrigin } from "@/server/post-login";
import { readSessionUser } from "@/server/session";

/** R50: removes the Discord link from the signed-in account (form POST from the dashboard). */
export async function POST(request: Request) {
  const origin = postLoginOrigin(request);
  const sameOrigin = request.headers.get("origin");
  if (sameOrigin && sameOrigin !== new URL(origin).origin) return NextResponse.json({ ok: false }, { status: 403 });
  const user = await readSessionUser().catch(() => null);
  if (!user) return NextResponse.redirect(new URL("/", origin), 303);
  await getPrisma().user.update({ where: { id: user.id }, data: { discordId: null, discordUsername: "", discordLinkedAt: null } });
  return NextResponse.redirect(new URL("/dashboard?discord=unlinked#discord", origin), 303);
}
