import { connection } from "next/server";
import { readIsSteamOwner } from "@/server/admin-gate";
import { commandAction, commandSection, OwnerOnly } from "@/server/desktop-command";

/** R53 owner-only Command API for the A.C.E desktop app. Non-owners always get 403. */
const json = (data: unknown, status = 200) => Response.json(data, { status, headers: { "cache-control": "no-store" } });
const fail = (e: unknown) => (e instanceof OwnerOnly ? json({ error: "forbidden" }, 403) : json({ error: "unavailable" }, 503));

export async function GET(request: Request) {
  await connection();
  if (request.headers.get("x-ace-desktop") !== "1") return json({ error: "desktop-only" }, 400);
  if (!(await readIsSteamOwner())) return json({ error: "forbidden" }, 403);
  const u = new URL(request.url);
  try {
    const r = await commandSection(u.searchParams.get("section") ?? "", u.searchParams);
    return r === undefined ? json({ error: "unknown-section" }, 400) : r === null ? json({ error: "not-found" }, 404) : json(r);
  } catch (e) { return fail(e); }
}

export async function POST(request: Request) {
  await connection();
  if (request.headers.get("x-ace-desktop") !== "1") return json({ error: "desktop-only" }, 400);
  if (!(await readIsSteamOwner())) return json({ error: "forbidden" }, 403);
  let b: Record<string, unknown>;
  try { b = (await request.json()) as Record<string, unknown>; } catch { return json({ error: "bad-json" }, 400); }
  if (typeof b?.op !== "string") return json({ error: "bad-op" }, 400);
  try { const r = await commandAction(b.op, b); return json(r, r.ok ? 200 : 400); } catch (e) { return fail(e); }
}
