import { connection } from "next/server";
import { readPublicStats } from "@/server/public-stats";

/** Aggregate counts only (no identities). Cached 30s in memory and at the CDN, so it is cheap to poll. */
export async function GET() {
  await connection();
  const stats = await readPublicStats();
  return Response.json(stats, {
    headers: { "Cache-Control": "public, max-age=15, s-maxage=30, stale-while-revalidate=60" },
  });
}
