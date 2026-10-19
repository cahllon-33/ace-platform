import { getPrisma } from "@/server/db";
import { readSessionUser } from "@/server/session";
import { buildSystemPrompt, type ChatMessage } from "@/lib/ai-support-policy";
import { SITE_LOCALES } from "@/lib/languages";
import { kbAnswer } from "@/lib/site-kb-corpus";

/** The model is optional: without a key the chat answers from the site knowledge base. */
export function aiModelConfigured(): boolean {
  return Boolean(process.env.OPENAI_API_KEY?.trim());
}

function localeName(id: string): string {
  return SITE_LOCALES.find((l) => l.id === id)?.english ?? "English";
}

/** Calls the model server-side. The key never leaves the server. */
export async function askSupportModel(history: ChatMessage[], locale: string, context?: string): Promise<string> {
  const key = process.env.OPENAI_API_KEY?.trim();
  if (!key) throw new Error("unavailable");
  const base = (process.env.OPENAI_BASE_URL?.trim() || "https://api.openai.com/v1").replace(/\/$/, "");
  const res = await fetch(`${base}/chat/completions`, {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL?.trim() || "gpt-4o-mini",
      temperature: 0.3,
      max_tokens: 350,
      messages: [{ role: "system", content: buildSystemPrompt(localeName(locale), context) }, ...history],
    }),
    signal: AbortSignal.timeout(20_000),
  });
  if (!res.ok) throw new Error(`upstream_${res.status}`);
  const data = (await res.json()) as { choices?: { message?: { content?: string } }[] };
  const reply = data.choices?.[0]?.message?.content?.trim();
  if (!reply) throw new Error("empty");
  return reply.slice(0, 2000);
}

export async function saveSupportTicket(history: ChatMessage[], locale: string, sessionKey: string) {
  let user: { id: string; steamId: string | null } | null = null;
  try {
    user = await readSessionUser();
  } catch {
    user = null;
  }
  const subject = history.find((m) => m.role === "user")?.content.slice(0, 140) ?? "";
  const ticket = await getPrisma().supportTicket.create({
    data: {
      locale: locale.slice(0, 12),
      sessionKey: sessionKey.slice(0, 64),
      userId: user?.id ?? null,
      steamId: user?.steamId ?? null,
      subject,
      transcript: history,
    },
    select: { id: true },
  });
  return ticket.id;
}

export type SupportReply = { reply: string; route: string | null; offerTicket: boolean; mode: "kb" | "llm" };

/**
 * Answer from the site's own content. With OPENAI_API_KEY the model writes the reply from the retrieved
 * passages (RAG); without it, or if the model fails, the best matching published passage is the reply.
 */
export async function answerSupport(history: ChatMessage[], locale: string, noMatch: string): Promise<SupportReply> {
  const question = [...history].reverse().find((m) => m.role === "user")?.content ?? "";
  const kb = kbAnswer(question, locale);
  if (aiModelConfigured()) {
    const context = kb.hits
      .slice(0, 4)
      .map((h) => `- (${h.doc.route}) ${h.doc.answer}`)
      .join("\n");
    try {
      const reply = await askSupportModel(history, locale, context || "(no matching site content)");
      return { reply, route: kb.found ? kb.route : null, offerTicket: !kb.found, mode: "llm" };
    } catch {
      /* fall through to the knowledge base */
    }
  }
  if (kb.found) return { reply: kb.answer, route: kb.route, offerTicket: false, mode: "kb" };
  return { reply: noMatch, route: null, offerTicket: true, mode: "kb" };
}
