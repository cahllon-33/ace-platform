import { NextResponse } from "next/server";
import { getPlatformStatus } from "@/server/platform-status";

/** R63 public live platform status (no secrets; cached 30 s server-side). */
export async function GET() {
  const data = await getPlatformStatus();
  return NextResponse.json(data, { headers: { "Cache-Control": "public, max-age=15, s-maxage=30, stale-while-revalidate=30" } });
}
