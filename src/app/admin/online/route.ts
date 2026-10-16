import { connection } from "next/server";
import { loadAdminOnline } from "@/server/admin-users";

/** Admin-only list of online users. Closed gate answers 404 so the route is not discoverable publicly. */
export async function GET() {
  await connection();
  const snapshot = await loadAdminOnline();
  const headers = { "Cache-Control": "private, no-store", "X-Robots-Tag": "noindex" };
  if (!snapshot) return Response.json({ error: "not_found" }, { status: 404, headers });
  return Response.json(snapshot, { headers });
}
