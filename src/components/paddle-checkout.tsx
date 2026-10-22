"use client";

import { useEffect, useState } from "react";
import { useUi } from "@/components/use-ui";
import { interpolate } from "@/lib/interpolate";

type Cfg =
  | { enabled: true; env: "sandbox" | "production"; clientToken: string; prices: { plus: string; premium: string }; me: Me }
  | { enabled: false; me: Me };
type Me = { id: string; tier: string; email: string | null } | null;
type PaddleJs = {
  Environment: { set: (e: string) => void };
  Initialize: (o: { token: string; eventCallback?: (ev: { name?: string }) => void }) => void;
  Checkout: { open: (o: unknown) => void };
};
declare global { interface Window { Paddle?: PaddleJs } }

export type { Cfg as PaddlePublicConfig };
let cfgPromise: Promise<Cfg> | null = null;
export const loadCfg = () => (cfgPromise ??= fetch("/api/paddle/config", { cache: "no-store" }).then((r) => r.json() as Promise<Cfg>).catch(() => ({ enabled: false, me: null }) as Cfg));

let jsPromise: Promise<PaddleJs> | null = null;
export function loadPaddle(cfg: Extract<Cfg, { enabled: true }>, onDone: () => void): Promise<PaddleJs> {
  return (jsPromise ??= new Promise<PaddleJs>((resolve, reject) => {
    const ready = () => {
      const P = window.Paddle;
      if (!P) return reject(new Error("paddle"));
      if (cfg.env === "sandbox") P.Environment.set("sandbox");
      P.Initialize({ token: cfg.clientToken, eventCallback: (ev) => { if (ev?.name === "checkout.completed") onDone(); } });
      resolve(P);
    };
    if (window.Paddle) return ready();
    const s = document.createElement("script");
    s.src = "https://cdn.paddle.com/paddle/v2/paddle.js";
    s.async = true;
    s.onload = ready;
    s.onerror = () => { jsPromise = null; reject(new Error("paddle-load")); };
    document.head.appendChild(s);
  }));
}

/**
 * R49 Paddle overlay checkout for A.C.E PLUS ($4/mo) / PREMIUM ($7/mo). Steam-signed-in users only; the A.C.E user id
 * travels as customData so the verified webhook can attach the subscription. Without Paddle keys: "coming soon".
 * Success here is never final: the plan changes only when the signed webhook arrives.
 */
export function PaddleCheckoutButton({ plan, planName, className = "pc41-btn" }: { plan: "plus" | "premium"; planName: string; className?: string }) {
  const t = useUi().r49;
  const [cfg, setCfg] = useState<Cfg | null>(null);
  const [state, setState] = useState<"idle" | "opening" | "error" | "done">("idle");
  useEffect(() => { let on = true; void loadCfg().then((c) => { if (on) setCfg(c); }); return () => { on = false; }; }, []);
  if (!cfg) return <button type="button" className={className} disabled aria-busy="true">…</button>;
  if (!cfg.enabled) return <button type="button" className={className} disabled aria-disabled="true" data-checkout="soon">{t.soon}</button>;
  if (!cfg.me) return <a className={className} href="/api/auth/steam" data-checkout="signin">{t.signIn}</a>;
  const current = cfg.me.tier === plan.toUpperCase();
  if (current) return <span className={`${className} is-current`} data-checkout="current">{t.current}</span>;
  const enabled = cfg;
  const open = async () => {
    setState("opening");
    try {
      const P = await loadPaddle(enabled, () => setState("done"));
      P.Checkout.open({
        items: [{ priceId: plan === "premium" ? enabled.prices.premium : enabled.prices.plus, quantity: 1 }],
        customData: { userId: enabled.me!.id },
        ...(enabled.me!.email ? { customer: { email: enabled.me!.email } } : {}),
        settings: { displayMode: "overlay", theme: "dark", locale: document.documentElement.lang || "en", allowLogout: false },
      });
      setState("idle");
    } catch {
      setState("error");
    }
  };
  return (
    <>
      <button type="button" className={className} onClick={() => void open()} disabled={state === "opening"} data-checkout="ready">
        {state === "opening" ? t.opening : interpolate(t.subscribe, { plan: planName })}
      </button>
      {state === "error" ? <p className="pc49-note is-err" role="alert">{t.failed}</p> : null}
      {state === "done" ? <p className="pc49-note" role="status">{t.processing}</p> : null}
    </>
  );
}

/** Legal line shown under paid checkout buttons (and in the shop). */
export function CheckoutLegal() {
  const t = useUi().r49;
  return (
    <p className="pc49-legal">
      {t.agree} <a href="/terms">{t.terms}</a> · <a href="/refunds">{t.refunds}</a> · <a href="/privacy">{t.privacy}</a>
    </p>
  );
}

/**
 * R49 one-time purchase (cosmetic or tournament entry). The server creates the Paddle transaction at the stored price;
 * the item/registration is granted only by the verified webhook, so "done" here only says "waiting for confirmation".
 */
export function PaddleBuyButton({ kind, refId, teamId, label, className = "pc49-buy", disabled }: { kind: "COSMETIC" | "TOURNAMENT_ENTRY"; refId: string; teamId?: string; label: string; className?: string; disabled?: boolean }) {
  const t = useUi().r49;
  const [cfg, setCfg] = useState<Cfg | null>(null);
  const [state, setState] = useState<"idle" | "opening" | "error" | "done">("idle");
  const [err, setErr] = useState("");
  useEffect(() => { let on = true; void loadCfg().then((c) => { if (on) setCfg(c); }); return () => { on = false; }; }, []);
  if (!cfg) return <button type="button" className={className} disabled aria-busy="true">…</button>;
  if (!cfg.enabled) return <button type="button" className={className} disabled data-checkout="soon">{t.soon}</button>;
  if (!cfg.me) return <a className={className} href="/api/auth/steam" data-checkout="signin">{t.signInBuy}</a>;
  const enabled = cfg;
  const buy = async () => {
    setState("opening"); setErr("");
    try {
      const r = await fetch("/api/paddle/order", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ kind, refId, teamId }) });
      const j = (await r.json().catch(() => ({}))) as { ok?: boolean; transactionId?: string; error?: string };
      if (!j.ok || !j.transactionId) { setErr(j.error ?? ""); setState("error"); return; }
      const P = await loadPaddle(enabled, () => setState("done"));
      P.Checkout.open({ transactionId: j.transactionId, settings: { displayMode: "overlay", theme: "dark", locale: document.documentElement.lang || "en", allowLogout: false } });
      setState("idle");
    } catch { setState("error"); }
  };
  return (
    <>
      <button type="button" className={className} onClick={() => void buy()} disabled={disabled || state === "opening"} data-checkout="ready">{state === "opening" ? t.opening : label}</button>
      {state === "error" ? <p className="pc49-note is-err" role="alert">{t.failed}{err ? ` (${err})` : ""}</p> : null}
      {state === "done" ? <p className="pc49-note" role="status">{t.pendingConfirm}</p> : null}
    </>
  );
}
