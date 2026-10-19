import { headers } from "next/headers";
import { connection } from "next/server";
import { createRateLimiter, sanitizeHistory } from "@/lib/ai-support-policy";
import { aiModelConfigured, answerSupport, saveSupportTicket } from "@/server/ai-support";
import { uiFor } from "@/lib/i18n/ui";

const allow = createRateLimiter();
const allowTicket = createRateLimiter(2, 6);
const NO_STORE = { "Cache-Control": "no-store" };

/** The chat always works (site knowledge base); `mode` says whether a model writes the replies. Never reveals the key. */
export async function GET() {
  await connection();
  return Response.json({ available: true, mode: aiModelConfigured() ? "llm" : "kb" }, { headers: NO_STORE });
}

export async function POST(request: Request) {
  await connection();
  const len = Number(request.headers.get("content-length") ?? 0);
  if (len > 32_000) return Response.json({ error: "too_long" }, { status: 413, headers: NO_STORE });

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return Response.json({ error: "bad_request" }, { status: 400, headers: NO_STORE });
  }
  const escalate = body.escalate === true;
  // Escalation saves the whole conversation, which normally ends with the assistant's reply.
  const history = sanitizeHistory(body.messages, { allowAssistantLast: escalate });
  if (!history) return Response.json({ error: "bad_request" }, { status: 400, headers: NO_STORE });
  const locale = typeof body.locale === "string" ? body.locale : "en";
  const sessionKey = typeof body.sessionKey === "string" ? body.sessionKey.replace(/[^\w-]/g, "").slice(0, 64) : "";

  const h = await headers();
  const ip = (h.get("x-forwarded-for")?.split(",")[0] ?? h.get("x-real-ip") ?? "local").trim();
  const limiter = escalate ? allowTicket : allow;
  if (!limiter(`ip:${ip}`) || (sessionKey && !limiter(`s:${sessionKey}`))) {
    return Response.json({ error: "rate_limited" }, { status: 429, headers: NO_STORE });
  }

  try {
    if (escalate) {
      const ticketId = await saveSupportTicket(history, locale, sessionKey);
      return Response.json({ ticketId }, { headers: NO_STORE });
    }
    const result = await answerSupport(history, locale, uiFor(locale).r39.chat.noMatch);
    return Response.json(result, { headers: NO_STORE });
  } catch {
    return Response.json({ error: "failed" }, { status: 502, headers: NO_STORE });
  }
}
