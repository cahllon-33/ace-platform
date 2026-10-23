import { connection } from "next/server";
import { readSessionUser } from "@/server/session";
import * as q from "@/server/queue-engine";

/**
 * R56 in-app matchmaking for the A.C.E desktop app: the same ranked 5v5 queue engine the site's Play page uses
 * (server actions in queue-actions.ts), exposed as JSON so the app never has to open the website.
 * GET  -> advances timers (tick) and returns the caller's QueueView.
 * POST { op: "join" | "leave" | "accept" | "decline" | "ban", map? } -> runs the action, returns { ok, error?, view }.
 * Auth is the site's ace_session cookie; the x-ace-desktop header blocks cross-site form posts (CSRF).
 */
export const maxDuration = 60;
const json = (data: unknown, status = 200) => Response.json(data, { status, headers: { "cache-control": "no-store" } });

async function viewFor(userId: string | null) {
  await q.tick().catch(() => undefined);
  return q.readQueueView(userId);
}

export async function GET(request: Request) {
  await connection();
  if (request.headers.get("x-ace-desktop") !== "1") return json({ error: "desktop-only" }, 400);
  try {
    const me = await readSessionUser().catch(() => null);
    return json({ ok: true, signedIn: !!me, view: await viewFor(me?.id ?? null) });
  } catch {
    return json({ ok: false, error: "unavailable", view: null }, 503);
  }
}

export async function POST(request: Request) {
  await connection();
  if (request.headers.get("x-ace-desktop") !== "1") return json({ error: "desktop-only" }, 400);
  const me = await readSessionUser().catch(() => null);
  if (!me) return json({ ok: false, error: "sign-in", view: null }, 401);
  let body: Record<string, unknown>;
  try { body = (await request.json()) as Record<string, unknown>; } catch { return json({ ok: false, error: "bad-json", view: null }, 400); }
  const op = typeof body?.op === "string" ? body.op : "";
  try {
    let r: { ok: boolean; error?: string };
    if (op === "join") r = await q.joinQueue(me.id);
    else if (op === "leave") r = await q.leaveQueue(me.id);
    else if (op === "accept" || op === "decline") r = await q.answerReady(me.id, op === "accept");
    else if (op === "ban") r = await q.banMap(me.id, String(body.map ?? "").slice(0, 32));
    else return json({ ok: false, error: "bad-op", view: null }, 400);
    const view = await viewFor(me.id);
    return json(r.ok ? { ok: true, view } : { ok: false, error: r.error ?? "failed", view }, r.ok ? 200 : 400);
  } catch {
    return json({ ok: false, error: "unavailable", view: null }, 503);
  }
}
