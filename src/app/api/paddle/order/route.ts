import { NextResponse } from "next/server";
import { createOrder, OrderError, type OrderKind } from "@/server/commerce";
import { readPaddleConfig } from "@/server/paddle";
import { readSessionUser } from "@/server/session";

/** R49: creates a server-priced Paddle transaction for a cosmetic or a tournament entry. Steam-signed-in users only. */
export async function POST(request: Request) {
  const cfg = readPaddleConfig();
  if (!cfg) return NextResponse.json({ ok: false, error: "coming-soon" }, { status: 503 });
  const user = await readSessionUser().catch(() => null);
  if (!user?.steamId) return NextResponse.json({ ok: false, error: "sign-in" }, { status: 401 });
  const body = (await request.json().catch(() => null)) as { kind?: string; refId?: string; teamId?: string } | null;
  const kind = body?.kind === "COSMETIC" || body?.kind === "TOURNAMENT_ENTRY" ? (body.kind as OrderKind) : null;
  const refId = typeof body?.refId === "string" && body.refId.length <= 64 ? body.refId : null;
  const teamId = typeof body?.teamId === "string" && body.teamId.length <= 64 ? body.teamId : null;
  if (!kind || !refId) return NextResponse.json({ ok: false, error: "bad-request" }, { status: 400 });
  try {
    const transactionId = await createOrder(cfg, user.id, kind, refId, teamId);
    return NextResponse.json({ ok: true, transactionId });
  } catch (e) {
    return NextResponse.json({ ok: false, error: e instanceof OrderError ? e.message : "order-failed" }, { status: 400 });
  }
}
