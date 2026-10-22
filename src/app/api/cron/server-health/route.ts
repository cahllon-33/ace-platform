import { NextResponse } from "next/server";
import { safeEqual } from "@/lib/ace-signature";
import { healthTick } from "@/server/server-health";
import { tick } from "@/server/queue-engine";

/** Vercel Cron (daily, see vercel.json). Auth: Authorization: Bearer $CRON_SECRET. Also advances queue timers. */
export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET?.trim() ?? "";
  const got = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "") ?? "";
  if (secret.length < 16 || !safeEqual(got, secret)) return NextResponse.json({ ok: false }, { status: 401 });
  await tick().catch(() => undefined);
  const server = await healthTick(new Date(), true).catch(() => null);
  return NextResponse.json({ ok: true, online: server?.online ?? null });
}
