import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { verifyPluginSignature } from "@/lib/ace-signature";
import { getPrisma } from "@/server/db";
import { refreshBridgeStats } from "@/server/acebridge-stats";
import { analyzeMatch, storeKillTelemetry, storeViewSamples } from "@/server/ac-analytics";

const TYPES = new Set(["round_end", "player_death", "round_mvp", "match_end", "map_start", "heartbeat", "round_start", "round_stats", "player_hurt", "player_blind", "grenade_thrown", "kill_telemetry", "view_samples"]);

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
    const serverId = typeof evt.serverId === "string" ? evt.serverId.slice(0, 80) : "unknown";
    if (type === "kill_telemetry") {
      // R59: per-kill integrity telemetry goes to its own table only (eventId unique there too).
      const mk = typeof evt.matchId === "string" && evt.matchId ? evt.matchId.slice(0, 80) : "unbound";
      const ok = await storeKillTelemetry(eventId, serverId, mk, (evt.data ?? {}) as Record<string, unknown>);
      return NextResponse.json({ ok: true, stored: ok });
    }
    if (type === "view_samples") {
      // R60: periodic view samples (bandwidth-limited by the plugin) go to their own table only.
      const mk = typeof evt.matchId === "string" && evt.matchId ? evt.matchId.slice(0, 80) : "unbound";
      const n = await storeViewSamples(eventId, serverId, mk, (evt.data ?? {}) as Record<string, unknown>);
      return NextResponse.json({ ok: true, stored: n });
    }
    await getPrisma().cs2PluginEvent.create({
      data: {
        eventId, type,
        serverId: typeof evt.serverId === "string" ? evt.serverId.slice(0, 80) : "unknown",
        matchId: typeof evt.matchId === "string" ? evt.matchId.slice(0, 80) : null,
        payload: (evt.data ?? {}) as Prisma.InputJsonValue,
      },
    });
    const matchId = typeof evt.matchId === "string" ? evt.matchId.slice(0, 80) : null;
    if (type === "round_stats" && matchId) await refreshBridgeStats(matchId).catch(() => null); // stats are derived; the event itself is already stored
    if (type === "match_end" && matchId) await analyzeMatch(matchId).catch(() => null); // R59: review queue only, never a ban
    return NextResponse.json({ ok: true, stored: true });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2002") return NextResponse.json({ ok: true, stored: false, duplicate: true });
    return NextResponse.json({ ok: false, error: "store-failed" }, { status: 500 });
  }
}
