import { connection } from "next/server";
import { listWhatsNew } from "@/server/whats-new";

/** R62 public player-facing changelog (used by the header unread badge and the desktop app). */
export async function GET() {
  await connection();
  try {
    return Response.json({ rows: await listWhatsNew(50) }, { headers: { "cache-control": "no-store" } });
  } catch {
    return Response.json({ rows: [], error: "unavailable" }, { status: 503 });
  }
}
