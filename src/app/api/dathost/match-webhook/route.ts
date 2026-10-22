import { NextResponse } from "next/server";
import { webhookAuthorized } from "@/lib/ace-signature";
import { ingestDathostMatch } from "@/server/dathost-ingest";
import { prismaIngestStore } from "@/server/dathost-store";
import type { Cs2Match } from "@/server/dathost";
import { mirrorLiveScore } from "@/server/queue-engine";
import { cleanupMatchDiscord } from "@/server/discord-match";
import { getPrisma } from "@/server/db";

/** DatHost CS2 match_end webhook. Auth: Authorization header (set via authorization_header) or ?token=. Idempotent. */
export async function POST(request: Request) {
  const url = new URL(request.url);
  if (!webhookAuthorized(process.env.DATHOST_WEBHOOK_SECRET, request.headers.get("authorization"), url.searchParams.get("token"))) {
    return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }
  let body: Cs2Match;
  try {
    body = (await request.json()) as Cs2Match;
  } catch {
    return NextResponse.json({ ok: false, error: "bad-json" }, { status: 400 });
  }
  if (!body || typeof body.id !== "string" || !body.id) return NextResponse.json({ ok: false, error: "bad-payload" }, { status: 400 });
  // Round-end deliveries: mirror the live score onto the queue lobby (no RP change).
  await mirrorLiveScore(body).catch(() => undefined);
  // R50: match over (finished or cancelled) -> delete the Team A / Team B voice channels.
  if (body.finished || body.cancel_reason) {
    const lobby = await getPrisma().queueLobby.findUnique({ where: { dathostMatchId: body.id }, select: { id: true } }).catch(() => null);
    if (lobby) await cleanupMatchDiscord(lobby.id).catch(() => undefined);
  }
  try {
    const result = await ingestDathostMatch(body, prismaIngestStore(), { serverId: process.env.DATHOST_SERVER_ID?.trim() || undefined });
    // 200 for duplicates too, so DatHost stops retrying.
    return NextResponse.json({ ok: true, ...result });
  } catch {
    return NextResponse.json({ ok: false, error: "ingest-failed" }, { status: 500 });
  }
}
