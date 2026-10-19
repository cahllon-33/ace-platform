import { connection } from "next/server";
import { loadAdminSignIns } from "@/server/admin-users";

/** Admin-only sign-ins feed. Closed gate answers 404 so the route is not discoverable publicly. */
export async function GET() {
  await connection();
  const snapshot = await loadAdminSignIns();
  const headers = { "Cache-Control": "private, no-store", "X-Robots-Tag": "noindex" };
  if (!snapshot) return Response.json({ error: "not_found" }, { status: 404, headers });
  return Response.json(snapshot, { headers });
}
