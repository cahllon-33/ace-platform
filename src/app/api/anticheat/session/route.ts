import { connection } from "next/server";
import { readSessionUser } from "@/server/session";
import { issueAnticheatSession } from "@/server/anticheat";
import { readJsonObject } from "@/server/http";

/** R51: issues a per-login anti-cheat session + HMAC key to the signed-in desktop client. The custom header blocks cross-site form posts. */
export async function POST(request: Request) {
  await connection();
  if (request.headers.get("x-ace-desktop") !== "1") return Response.json({ error: "desktop-only" }, { status: 400 });
  const user = await readSessionUser().catch(() => null);
  if (!user) return Response.json({ error: "sign-in" }, { status: 401 });
  const body = (await readJsonObject(request)) ?? {};
  const v = typeof body.clientVersion === "string" ? body.clientVersion : "0.0.0";
  const m = typeof body.machineHash === "string" ? body.machineHash : "";
  const hw = typeof body.hwHash === "string" ? body.hwHash : "";
  const asar = typeof body.asarHash === "string" ? body.asarHash : "";
  return Response.json(await issueAnticheatSession(user.id, v, m, { hwHash: hw, asarHash: asar }), { headers: { "cache-control": "no-store" } });
}
