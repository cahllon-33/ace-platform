import { NextResponse } from "next/server";
import { verifyPluginSignature } from "@/lib/ace-signature";
import { gateDecision } from "@/server/anticheat";

/**
 * R59 AceBridge 0.4.0 match gating. POST {steamId} signed like /api/cs2/events.
 * Answers { allow, required, reason }. allow is true whenever ACE_REQUIRE_ANTICHEAT (or the owner override) is off.
 */
export async function POST(request: Request) {
  const raw = await request.text();
  if (raw.length > 4_000) return NextResponse.json({ ok: false, error: "too-large" }, { status: 413 });
  const check = verifyPluginSignature({ secret: process.env.ACE_PLUGIN_SECRET, timestamp: request.headers.get("x-ace-timestamp"), signature: request.headers.get("x-ace-signature"), body: raw });
  if (!check.ok) return NextResponse.json({ ok: false, error: check.reason }, { status: 401 });
  let steamId = "";
  try { const j = JSON.parse(raw) as { steamId?: unknown }; steamId = typeof j.steamId === "string" ? j.steamId : ""; } catch { /* handled below */ }
  if (!/^\d{5,20}$/.test(steamId)) return NextResponse.json({ ok: false, error: "bad-steamid" }, { status: 400 });
  const d = await gateDecision(steamId).catch(() => null);
  // Site error: let the plugin's GateFailOpen decide (non-2xx).
  if (!d) return NextResponse.json({ ok: false, error: "unavailable" }, { status: 503 });
  return NextResponse.json({ ok: true, ...d }, { headers: { "cache-control": "no-store" } });
}
