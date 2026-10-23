import { connection } from "next/server";
import { signedRules } from "@/server/ac-rules";

/** R60 public, signed detection-rule feed for A.C.E desktop (no secrets inside; integrity via Ed25519). */
export async function GET() {
  await connection();
  const r = await signedRules().catch(() => null);
  if (!r) return Response.json({ error: "unsigned" }, { status: 503, headers: { "cache-control": "no-store" } });
  return Response.json(r, { headers: { "cache-control": "public, max-age=300" } });
}
