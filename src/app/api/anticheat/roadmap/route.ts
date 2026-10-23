import { connection, NextResponse } from "next/server";
import { readShieldRoadmap } from "@/server/shield-status";

/** R72: public, computed Shield roadmap (no user data). */
export async function GET() {
  await connection();
  return NextResponse.json(await readShieldRoadmap(), { headers: { "cache-control": "public, max-age=60" } });
}
