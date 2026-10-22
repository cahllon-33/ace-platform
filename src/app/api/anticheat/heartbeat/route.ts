import { connection } from "next/server";
import { acceptHeartbeat } from "@/server/anticheat";

/** R51 signed heartbeat: headers x-ace-ts (unix seconds) and x-ace-sig = HMAC-SHA256(key, `${ts}.${rawBody}`). */
export async function POST(request: Request) {
  await connection();
  const raw = await request.text();
  if (raw.length > 64_000) return Response.json({ error: "too-large" }, { status: 413 });
  const r = await acceptHeartbeat(raw, Number(request.headers.get("x-ace-ts")), request.headers.get("x-ace-sig") ?? "").catch(() => ({ ok: false as const, error: "unavailable", status: 503 }));
  return r.ok ? Response.json(r) : Response.json({ error: r.error }, { status: r.status });
}
