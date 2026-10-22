import { NextResponse } from "next/server";
import { portalUrl, readPaddleConfig } from "@/server/paddle";
import { readSessionUser } from "@/server/session";

/** Signed-in user → Paddle customer portal (authenticated session URL). GET so it can be a plain link. */
export async function GET(request: Request) {
  const back = new URL("/dashboard?portal=unavailable", request.url);
  const cfg = readPaddleConfig();
  const user = await readSessionUser().catch(() => null);
  if (!cfg || !user?.paddleCustomerId) return NextResponse.redirect(back, 303);
  const url = await portalUrl(cfg, user.paddleCustomerId, user.paddleSubscriptionId);
  return NextResponse.redirect(url ? new URL(url) : back, 303);
}
