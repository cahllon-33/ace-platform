import { NextResponse } from "next/server";
import { readSocials } from "@/server/socials";

export async function GET() {
  return NextResponse.json(await readSocials(), { headers: { "Cache-Control": "public, max-age=60, s-maxage=60" } });
}
