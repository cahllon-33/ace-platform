import { NextResponse } from "next/server";
import { verifyPaddleSignature, type PaddleEventIn } from "@/lib/paddle";
import { applyPaddleEvent, readPaddleConfig } from "@/server/paddle";

/** R49 Paddle webhook: verifies Paddle-Signature against PADDLE_WEBHOOK_SECRET, then applies the event once. */
export async function POST(request: Request) {
  const cfg = readPaddleConfig();
  if (!cfg) return NextResponse.json({ ok: false, error: "not-configured" }, { status: 503 });
  const raw = await request.text();
  if (raw.length > 512_000) return NextResponse.json({ ok: false, error: "too-large" }, { status: 413 });
  if (!verifyPaddleSignature(raw, request.headers.get("paddle-signature"), cfg.webhookSecret)) {
    return NextResponse.json({ ok: false, error: "bad-signature" }, { status: 401 });
  }
  let e: PaddleEventIn;
  try { e = JSON.parse(raw) as PaddleEventIn; } catch { return NextResponse.json({ ok: false, error: "bad-json" }, { status: 400 }); }
  if (!e?.event_id || !e.event_type || !e.data) return NextResponse.json({ ok: false, error: "bad-event" }, { status: 400 });
  try {
    const outcome = await applyPaddleEvent(e, cfg);
    return NextResponse.json({ ok: true, outcome });
  } catch {
    // 500 makes Paddle retry later; nothing was recorded for this event id.
    return NextResponse.json({ ok: false, error: "apply-failed" }, { status: 500 });
  }
}
