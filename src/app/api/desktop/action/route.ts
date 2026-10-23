import { connection } from "next/server";
import { readSessionUser } from "@/server/session";
import { desktopAction } from "@/server/desktop-v2";
import { setPrivacy } from "@/server/desktop-r53";

/** R52 desktop v2 mutations: { op, ...args }. The custom header blocks cross-site form posts (CSRF). */
export async function POST(request: Request) {
  await connection();
  const json = (data: unknown, status = 200) => Response.json(data, { status, headers: { "cache-control": "no-store" } });
  if (request.headers.get("x-ace-desktop") !== "1") return json({ error: "desktop-only" }, 400);
  const me = await readSessionUser();
  if (!me) return json({ error: "sign-in" }, 401);
  let body: Record<string, unknown>;
  try { body = (await request.json()) as Record<string, unknown>; } catch { return json({ error: "bad-json" }, 400); }
  if (typeof body?.op !== "string") return json({ error: "bad-op" }, 400);
  try {
    const r = body.op === "privacy.set" ? await setPrivacy(me.id, body) : await desktopAction(me.id, body.op, body);
    return json(r, r.ok ? 200 : 400);
  } catch {
    return json({ ok: false, error: "unavailable" }, 503);
  }
}
