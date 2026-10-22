import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { verifyPluginSignature } from "@/lib/ace-signature";
import { getPrisma } from "@/server/db";

const TYPES = new Set(["round_end", "player_death", "round_mvp", "match_end", "map_start", "heartbeat"]);

/** AceBridge (CounterStrikeSharp) events. HMAC-SHA256 over "<timestamp>.<raw body>"; eventId makes it idempotent. */
export async function POST(request: Request) {
  const raw = await request.text();
  if (raw.length > 64_000) return NextResponse.json({ ok: false, error: "too-large" }, { status: 413 });
  const check = verifyPluginSignature({
    secret: process.env.ACE_PLUGIN_SECRET,
    timestamp: request.headers.get("x-ace-timestamp"),
    signature: request.headers.get("x-ace-signature"),
    body: raw,
  });
  if (!check.ok) return NextResponse.json({ ok: false, error: check.reason }, { status: 401 });
  let evt: { eventId?: unknown; serverId?: unknown; type?: unknown; matchId?: unknown; data?: unknown };
  try {
    evt = JSON.parse(raw);
  } catch {
    return NextResponse.json({ ok: false, error: "bad-json" }, { status: 400 });
  }
  const eventId = typeof evt.eventId === "string" ? evt.eventId.slice(0, 80) : "";
  const type = typeof evt.type === "string" ? evt.type : "";
  if (!eventId || !TYPES.has(type)) return NextResponse.json({ ok: false, error: "bad-event" }, { status: 400 });
  try {
    await getPrisma().cs2PluginEvent.create({
      data: {
        eventId, type,
        serverId: typeof evt.serverId === "string" ? evt.serverId.slice(0, 80) : "unknown",
        matchId: typeof evt.matchId === "string" ? evt.matchId.slice(0, 80) : null,
        payload: (evt.data ?? {}) as Prisma.InputJsonValue,
      },
    });
    return NextResponse.json({ ok: true, stored: true });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2002") return NextResponse.json({ ok: true, stored: false, duplicate: true });
    return NextResponse.json({ ok: false, error: "store-failed" }, { status: 500 });
  }
}
