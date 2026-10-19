import { headers } from "next/headers";
import { connection } from "next/server";
import { createRateLimiter, sanitizeHistory } from "@/lib/ai-support-policy";
import { aiSupportAvailable, askSupportModel, saveSupportTicket } from "@/server/ai-support";

const allow = createRateLimiter();
const allowTicket = createRateLimiter(2, 6);
const NO_STORE = { "Cache-Control": "no-store" };

/** Whether the chat is configured. Never reveals the key. */
export async function GET() {
  await connection();
  return Response.json({ available: aiSupportAvailable() }, { headers: NO_STORE });
}

export async function POST(request: Request) {
  await connection();
  if (!aiSupportAvailable()) return Response.json({ error: "unavailable" }, { status: 503, headers: NO_STORE });
  const len = Number(request.headers.get("content-length") ?? 0);
  if (len > 32_000) return Response.json({ error: "too_long" }, { status: 413, headers: NO_STORE });

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return Response.json({ error: "bad_request" }, { status: 400, headers: NO_STORE });
  }
  const history = sanitizeHistory(body.messages);
  if (!history) return Response.json({ error: "bad_request" }, { status: 400, headers: NO_STORE });
  const locale = typeof body.locale === "string" ? body.locale : "en";
  const sessionKey = typeof body.sessionKey === "string" ? body.sessionKey.replace(/[^\w-]/g, "").slice(0, 64) : "";

  const h = await headers();
  const ip = (h.get("x-forwarded-for")?.split(",")[0] ?? h.get("x-real-ip") ?? "local").trim();
  const escalate = body.escalate === true;
  const limiter = escalate ? allowTicket : allow;
  if (!limiter(`ip:${ip}`) || (sessionKey && !limiter(`s:${sessionKey}`))) {
    return Response.json({ error: "rate_limited" }, { status: 429, headers: NO_STORE });
  }

  try {
    if (escalate) {
      const ticketId = await saveSupportTicket(history, locale, sessionKey);
      return Response.json({ ticketId }, { headers: NO_STORE });
    }
    const reply = await askSupportModel(history, locale);
    return Response.json({ reply }, { headers: NO_STORE });
  } catch {
    return Response.json({ error: "failed" }, { status: 502, headers: NO_STORE });
  }
}
