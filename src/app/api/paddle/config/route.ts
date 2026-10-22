import { NextResponse } from "next/server";
import { readPaddleConfig } from "@/server/paddle";
import { readSessionUser } from "@/server/session";

/** Public checkout config for Paddle.js (client token + price ids are public by design) and the signed-in Steam user. */
export async function GET() {
  const cfg = readPaddleConfig();
  let user: Awaited<ReturnType<typeof readSessionUser>> = null;
  try { user = await readSessionUser(); } catch { user = null; }
  const me = user && user.steamId ? { id: user.id, tier: user.subscriptionTier, email: user.email ?? null } : null;
  return NextResponse.json(
    cfg ? { enabled: true, env: cfg.env, clientToken: cfg.clientToken, prices: cfg.prices, me } : { enabled: false, me },
    { headers: { "Cache-Control": "no-store" } },
  );
}
