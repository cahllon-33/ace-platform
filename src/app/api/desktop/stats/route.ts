import { connection } from "next/server";
import { readSessionUser } from "@/server/session";
import { readIsSteamOwner } from "@/server/admin-gate";
import { myStats, setStatsPublic, statsPublic } from "@/server/desktop-r57";

/**
 * R57 "My Stats". PRIVATE by default: a signed-in player reads only their own stats (the session user).
 * Another player's stats (?id=) are served only when the owner turned on SiteSetting "stats.public" (or to the owner).
 * GET ?setting=1 / POST {statsPublic:boolean}: owner-only toggle.
 */
const json = (data: unknown, status = 200) => Response.json(data, { status, headers: { "cache-control": "no-store" } });

export async function GET(request: Request) {
  await connection();
  if (request.headers.get("x-ace-desktop") !== "1") return json({ error: "desktop-only" }, 400);
  const u = new URL(request.url);
  const q = (k: string) => (u.searchParams.get(k) ?? "").slice(0, 64) || undefined;
  try {
    if (u.searchParams.get("setting") === "1") {
      if (!(await readIsSteamOwner())) return json({ error: "forbidden" }, 403);
      return json({ statsPublic: await statsPublic() });
    }
    const me = await readSessionUser();
    if (!me) return json({ error: "sign-in" }, 401);
    const id = q("id");
    if (id && id !== me.id && !(await statsPublic()) && !(await readIsSteamOwner())) return json({ error: "private" }, 403);
    const r = await myStats(id ?? me.id, { range: q("range"), map: q("map"), type: q("type") });
    return r ? json(r) : json({ error: "not-found" }, 404);
  } catch { return json({ error: "unavailable" }, 503); }
}

export async function POST(request: Request) {
  await connection();
  if (request.headers.get("x-ace-desktop") !== "1") return json({ error: "desktop-only" }, 400);
  if (!(await readIsSteamOwner())) return json({ error: "forbidden" }, 403);
  let b: Record<string, unknown>;
  try { b = (await request.json()) as Record<string, unknown>; } catch { return json({ error: "bad-json" }, 400); }
  if (typeof b?.statsPublic !== "boolean") return json({ error: "bad-input" }, 400);
  try { return json(await setStatsPublic(b.statsPublic)); } catch { return json({ error: "unavailable" }, 503); }
}
