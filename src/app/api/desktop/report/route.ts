import { connection } from "next/server";
import { readSessionUser } from "@/server/session";
import { submitMatchReport } from "@/server/match-reports";

/** R60 post-match player report from the desktop app: { lobbyId, targetUserId, category: cheating|griefing, details? }. */
export async function POST(request: Request) {
  await connection();
  const json = (data: unknown, status = 200) => Response.json(data, { status, headers: { "cache-control": "no-store" } });
  if (request.headers.get("x-ace-desktop") !== "1") return json({ error: "desktop-only" }, 400);
  const me = await readSessionUser();
  if (!me) return json({ error: "sign-in" }, 401);
  let body: Record<string, unknown>;
  try { body = (await request.json()) as Record<string, unknown>; } catch { return json({ error: "bad-json" }, 400); }
  try {
    const r = await submitMatchReport(me.id, body ?? {});
    return json(r, r.ok ? 200 : 400);
  } catch {
    return json({ ok: false, error: "unavailable" }, 503);
  }
}
