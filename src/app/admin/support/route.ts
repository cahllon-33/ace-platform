import { connection } from "next/server";
import { loadAdminSupport, setSupportTicketStatus } from "@/server/admin-support";

const HEADERS = { "Cache-Control": "private, no-store", "X-Robots-Tag": "noindex" };

/** Admin-only support tickets. Closed gate answers 404 so the route is not discoverable publicly. */
export async function GET() {
  await connection();
  const snapshot = await loadAdminSupport();
  if (!snapshot) return Response.json({ error: "not_found" }, { status: 404, headers: HEADERS });
  return Response.json(snapshot, { headers: HEADERS });
}

export async function POST(request: Request) {
  await connection();
  let body: { id?: unknown; status?: unknown };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "bad_request" }, { status: 400, headers: HEADERS });
  }
  const id = typeof body.id === "string" ? body.id.slice(0, 64) : "";
  const status = body.status === "closed" ? "closed" : body.status === "open" ? "open" : null;
  if (!id || !status) return Response.json({ error: "bad_request" }, { status: 400, headers: HEADERS });
  const ok = await setSupportTicketStatus(id, status);
  if (!ok) return Response.json({ error: "not_found" }, { status: 404, headers: HEADERS });
  return Response.json({ ok: true }, { headers: HEADERS });
}
