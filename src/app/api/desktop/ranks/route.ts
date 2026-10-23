import { connection } from "next/server";
import { readSessionUser } from "@/server/session";
import { ranks } from "@/server/desktop-r57";

/** R57 public ranked ladder (rank tier + RP). Signed-in callers also get their own row ("Your ranking"). */
export async function GET(request: Request) {
  await connection();
  const json = (data: unknown, status = 200) => Response.json(data, { status, headers: { "cache-control": "no-store" } });
  if (request.headers.get("x-ace-desktop") !== "1") return json({ error: "desktop-only" }, 400);
  const u = new URL(request.url);
  const q = (k: string) => (u.searchParams.get(k) ?? "").slice(0, 64) || undefined;
  try {
    const me = await readSessionUser().catch(() => null);
    return json(await ranks({ season: q("season"), country: q("country"), region: q("region") }, me?.id ?? null));
  } catch { return json({ error: "unavailable" }, 503); }
}
