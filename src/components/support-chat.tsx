"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/components/locale-provider";
import { useUi } from "@/components/use-ui";
import Link from "next/link";
import { CHAT_MAX_CHARS, type ChatMessage } from "@/lib/ai-support-policy";

type Shown = ChatMessage & { route?: string | null; offerTicket?: boolean };
import { toast } from "@/lib/toast-store";

const KEY = "ace:chat-session";

function sessionKey(): string {
  try {
    let k = localStorage.getItem(KEY);
    if (!k) {
      k = crypto.randomUUID();
      localStorage.setItem(KEY, k);
    }
    return k;
  } catch {
    return "";
  }
}

/** Floating support chat for public pages. Talks only to /api/ai-support; never sees any key. */
export function SupportChat() {
  const pathname = usePathname() ?? "/";
  const ui = useUi();
  const c = ui.r38.chat;
  const k = ui.r39.chat;
  const { locale } = useI18n();
  const [open, setOpen] = useState(false);
  const [available, setAvailable] = useState<boolean | null>(null);
  const [messages, setMessages] = useState<Shown[]>([]);
  const [draft, setDraft] = useState("");
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const [escalated, setEscalated] = useState(false);
  const logRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!open || available !== null) return;
    let alive = true;
    fetch("/api/ai-support", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : { available: false }))
      .then((d: { available?: boolean }) => alive && setAvailable(Boolean(d.available)))
      .catch(() => alive && setAvailable(false));
    return () => {
      alive = false;
    };
  }, [open, available]);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight });
  }, [messages, busy]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open, available]);

  if (pathname.startsWith("/admin")) return null;

  const post = async (payload: Record<string, unknown>) => {
    const res = await fetch("/api/ai-support", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, locale: locale.id, sessionKey: sessionKey() }),
    });
    if (res.status === 429) throw new Error("rate");
    if (res.status === 503) {
      setAvailable(false);
      throw new Error("unavailable");
    }
    if (!res.ok) throw new Error("failed");
    return res.json();
  };

  const send = async (preset?: string) => {
    const text = (preset ?? draft).trim();
    if (!text || busy) return;
    if (text.length > CHAT_MAX_CHARS) {
      setNotice(c.tooLong.replace("{max}", String(CHAT_MAX_CHARS)));
      return;
    }
    const next: Shown[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setDraft("");
    setNotice(null);
    setBusy(true);
    try {
      const history: ChatMessage[] = next.map(({ role, content }) => ({ role, content }));
      const data = (await post({ messages: history })) as { reply: string; route?: string | null; offerTicket?: boolean };
      setMessages([...next, { role: "assistant", content: data.reply, route: data.route ?? null, offerTicket: data.offerTicket }]);
    } catch (e) {
      setNotice(e instanceof Error && e.message === "rate" ? c.rateLimited : c.error);
    } finally {
      setBusy(false);
    }
  };

  const escalate = async () => {
    if (busy || escalated || !messages.some((m) => m.role === "user")) return;
    setBusy(true);
    try {
      await post({ messages: messages.map(({ role, content }) => ({ role, content })), escalate: true });
      setEscalated(true);
      toast(c.escalated, "success");
    } catch (e) {
      setNotice(e instanceof Error && e.message === "rate" ? c.rateLimited : c.error);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="ace-chat">
      {open ? (
        <section className="ace-chat-panel" role="dialog" aria-modal="false" aria-labelledby="ace-chat-title"
          onKeyDown={(e) => { if (e.key === "Escape") setOpen(false); }}>
          <header className="ace-chat-head">
            <h2 id="ace-chat-title">{c.title}</h2>
            <button type="button" className="ace-chat-x" onClick={() => setOpen(false)} aria-label={c.close}>×</button>
          </header>
          {available === false ? (
            <p className="ace-chat-unavailable" role="status">{c.unavailable}</p>
          ) : (
            <>
              <div className="ace-chat-log" ref={logRef} aria-live="polite">
                <p className="ace-chat-msg is-assistant">{c.greeting}</p>
                {messages.length === 0 && available ? (
                  <div className="ace-chat-suggest">
                    {[k.s1, k.s2, k.s3].map((s) => (
                      <button key={s} type="button" onClick={() => void send(s)} disabled={busy}>{s}</button>
                    ))}
                  </div>
                ) : null}
                {messages.map((m, i) => (
                  <div key={i} className={`ace-chat-msg is-${m.role}`}>
                    <p dir="auto">{m.content}</p>
                    {m.route ? (
                      <Link href={m.route} className="ace-chat-src">{k.sources}: <bdi dir="ltr">{m.route}</bdi></Link>
                    ) : null}
                    {m.offerTicket && !escalated ? (
                      <button type="button" className="ace-chat-escalate is-inline" onClick={() => void escalate()} disabled={busy}>{c.escalate}</button>
                    ) : null}
                  </div>
                ))}
                {busy ? <p className="ace-chat-msg is-assistant is-typing">{c.thinking}</p> : null}
              </div>
              {notice ? <p className="ace-chat-notice" role="alert">{notice}</p> : null}
              <form className="ace-chat-form" onSubmit={(e) => { e.preventDefault(); void send(); }}>
                <textarea
                  ref={inputRef}
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); void send(); } }}
                  placeholder={c.placeholder}
                  aria-label={c.placeholder}
                  maxLength={CHAT_MAX_CHARS + 50}
                  rows={2}
                  dir="auto"
                  disabled={available === null}
                />
                <button type="submit" className="ace-chat-send" disabled={busy || !draft.trim() || available !== true}>{c.send}</button>
              </form>
              <div className="ace-chat-foot">
                <button type="button" className="ace-chat-escalate" onClick={() => void escalate()}
                  disabled={busy || escalated || !messages.some((m) => m.role === "user")}>
                  {escalated ? c.escalated : c.escalate}
                </button>
                <p>{k.kbNote} {c.disclaimer}</p>
              </div>
            </>
          )}
        </section>
      ) : null}
      <button type="button" className="ace-chat-fab" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-label={open ? c.close : c.open}>
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 5h16v11H9l-5 4z" />
        </svg>
      </button>
    </div>
  );
}
