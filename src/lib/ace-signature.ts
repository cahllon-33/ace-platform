import { createHmac, timingSafeEqual } from "node:crypto";

/**
 * Shared-secret checks for server-to-server calls (pure, no env reads here).
 * - DatHost match webhook: DatHost echoes our `authorization_header` as the Authorization header;
 *   a `?token=` query value is accepted as a fallback. Constant-time compare.
 * - AceBridge plugin: `X-Ace-Signature: sha256=<hex HMAC-SHA256(secret, "<timestamp>.<raw body>")>`
 *   with `X-Ace-Timestamp` (unix seconds) inside a ±5 minute window to stop replays.
 */
export function safeEqual(a: string, b: string): boolean {
  const x = Buffer.from(a);
  const y = Buffer.from(b);
  return x.length === y.length && timingSafeEqual(x, y);
}

export function webhookAuthorized(secret: string | undefined, authorization: string | null, queryToken: string | null): boolean {
  const s = secret?.trim();
  if (!s || s.length < 16) return false; // unconfigured or too weak: refuse everything
  const header = authorization?.replace(/^Bearer\s+/i, "").trim() ?? "";
  return (header !== "" && safeEqual(header, s)) || (queryToken !== null && queryToken !== "" && safeEqual(queryToken, s));
}

export function signPluginBody(secret: string, timestamp: string, body: string): string {
  return `sha256=${createHmac("sha256", secret).update(`${timestamp}.${body}`).digest("hex")}`;
}

export const PLUGIN_SKEW_SECONDS = 300;

export function verifyPluginSignature(args: { secret: string | undefined; timestamp: string | null; signature: string | null; body: string; nowSeconds?: number }):
  | { ok: true }
  | { ok: false; reason: "unconfigured" | "missing" | "stale" | "bad-signature" } {
  const secret = args.secret?.trim();
  if (!secret || secret.length < 16) return { ok: false, reason: "unconfigured" };
  if (!args.timestamp || !args.signature) return { ok: false, reason: "missing" };
  const ts = Number(args.timestamp);
  const now = args.nowSeconds ?? Math.floor(Date.now() / 1000);
  if (!Number.isFinite(ts) || Math.abs(now - ts) > PLUGIN_SKEW_SECONDS) return { ok: false, reason: "stale" };
  return safeEqual(args.signature.trim().toLowerCase(), signPluginBody(secret, args.timestamp, args.body)) ? { ok: true } : { ok: false, reason: "bad-signature" };
}
