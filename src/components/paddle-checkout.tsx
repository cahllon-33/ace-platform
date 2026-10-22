"use client";

import { useEffect, useState } from "react";
import { useUi } from "@/components/use-ui";
import { interpolate } from "@/lib/interpolate";
import { checkoutActionFor, paddleLocale } from "@/lib/paddle-client";

type Cfg =
  | { enabled: true; env: "sandbox" | "production"; clientToken: string; prices: { plus: string; premium: string }; me: Me }
  | { enabled: false; me: Me };
type Me = { id: string; tier: string; email: string | null; hasSub?: boolean; subStatus?: string | null } | null;
type PaddleEv = { name?: string; type?: string; code?: string; detail?: string; error?: { detail?: string; code?: string }; data?: unknown };
type PaddleJs = {
  Environment: { set: (e: string) => void };
  Initialize: (o: { token: string; eventCallback?: (ev: PaddleEv) => void }) => void;
  Checkout: { open: (o: unknown) => void };
};
declare global { interface Window { Paddle?: PaddleJs } }

export type { Cfg as PaddlePublicConfig };
let cfgPromise: Promise<Cfg> | null = null;
export const loadCfg = () => (cfgPromise ??= fetch("/api/paddle/config", { cache: "no-store" }).then((r) => r.json() as Promise<Cfg>).catch(() => ({ enabled: false, me: null }) as Cfg));

/** One Paddle.Initialize per page; every button listens through this bus (Paddle reports checkout errors only as events). */
const listeners = new Set<(ev: PaddleEv) => void>();
let jsPromise: Promise<PaddleJs> | null = null;
export function loadPaddle(cfg: Extract<Cfg, { enabled: true }>): Promise<PaddleJs> {
  return (jsPromise ??= new Promise<PaddleJs>((resolve, reject) => {
    const ready = () => {
      const P = window.Paddle;
      if (!P) { jsPromise = null; return reject(new Error("paddle.js did not load")); }
      try {
        if (cfg.env === "sandbox") P.Environment.set("sandbox");
        P.Initialize({ token: cfg.clientToken, eventCallback: (ev) => listeners.forEach((l) => l(ev)) });
      } catch (e) { jsPromise = null; return reject(e instanceof Error ? e : new Error("paddle init")); }
      resolve(P);
    };
    if (window.Paddle) return ready();
    const s = document.createElement("script");
    s.src = "https://cdn.paddle.com/paddle/v2/paddle.js";
    s.async = true;
    s.onload = ready;
    s.onerror = () => { jsPromise = null; reject(new Error("paddle.js blocked or offline")); };
    document.head.appendChild(s);
  }));
}

const evReason = (ev: PaddleEv) => String(ev.error?.detail ?? ev.detail ?? ev.error?.code ?? ev.code ?? (typeof ev.data === "object" && ev.data && "error" in ev.data ? JSON.stringify((ev.data as { error: unknown }).error) : "")).slice(0, 200);

/** Open a Paddle overlay and resolve once it is visible, or reject with Paddle's own reason (no silent dead clicks). */
export async function openPaddleCheckout(cfg: Extract<Cfg, { enabled: true }>, options: Record<string, unknown>, onCompleted: () => void): Promise<void> {
  const P = await loadPaddle(cfg);
  await new Promise<void>((resolve, reject) => {
    let settled = false;
    const done = (fn: () => void) => { if (!settled) { settled = true; clearTimeout(timer); fn(); } };
    const listener = (ev: PaddleEv) => {
      const name = ev.name ?? ev.type ?? "";
      if (name === "checkout.loaded") done(resolve);
      else if (name === "checkout.error" || ev.type === "checkout.error") done(() => reject(new Error(evReason(ev) || "checkout.error")));
      else if (name === "checkout.completed") { onCompleted(); listeners.delete(listener); }
      else if (name === "checkout.closed") { done(resolve); listeners.delete(listener); }
    };
    listeners.add(listener);
    const timer = setTimeout(() => done(() => reject(new Error("checkout did not load (timeout)"))), 15000);
    try {
      P.Checkout.open({ ...options, settings: { displayMode: "overlay", theme: "dark", locale: paddleLocale(document.documentElement.lang), allowLogout: false } });
    } catch (e) {
      done(() => reject(e instanceof Error ? e : new Error("checkout.open failed")));
    }
  });
}

/**
 * R49 Paddle overlay checkout for A.C.E PLUS ($4/mo) / PREMIUM ($7/mo). Steam-signed-in users only; the A.C.E user id
 * travels as customData so the verified webhook can attach the subscription. Without Paddle keys: "coming soon".
 * R49e: a user with a live Paddle subscription gets "Switch to …" (server-side subscription update), a user whose plan
 * was granted manually can still subscribe (owner sandbox test), and Paddle errors are shown instead of swallowed.
 */
export function PaddleCheckoutButton({ plan, planName, className = "pc41-btn" }: { plan: "plus" | "premium"; planName: string; className?: string }) {
  const t = useUi().r49;
  const [cfg, setCfg] = useState<Cfg | null>(null);
  const [state, setState] = useState<"idle" | "opening" | "error" | "done" | "changed">("idle");
  const [reason, setReason] = useState("");
  useEffect(() => { let on = true; void loadCfg().then((c) => { if (on) setCfg(c); }); return () => { on = false; }; }, []);
  if (!cfg) return <button type="button" className={className} disabled aria-busy="true">…</button>;
  if (!cfg.enabled) return <button type="button" className={className} disabled aria-disabled="true" data-checkout="soon">{t.soon}</button>;
  if (!cfg.me) return <a className={`${className} is-ready`} href="/api/auth/steam" data-checkout="signin">{t.signIn}</a>;
  const action = checkoutActionFor(cfg.me, plan);
  if (action === "current") return <span className={`${className} is-current`} data-checkout="current">{t.current}</span>;
  const enabled = cfg;
  const me = cfg.me;
  const fail = (e: unknown) => { setReason(e instanceof Error ? e.message : ""); setState("error"); };
  const open = async () => {
    setState("opening"); setReason("");
    try {
      await openPaddleCheckout(enabled, {
        items: [{ priceId: plan === "premium" ? enabled.prices.premium : enabled.prices.plus, quantity: 1 }],
        customData: { userId: me.id },
        ...(me.email ? { customer: { email: me.email } } : {}),
      }, () => setState("done"));
      setState((s) => (s === "opening" ? "idle" : s));
    } catch (e) { fail(e); }
  };
  const change = async () => {
    setState("opening"); setReason("");
    try {
      const r = await fetch("/api/paddle/change-plan", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ plan }) });
      const j = (await r.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!j.ok) { setReason(j.error ?? ""); setState("error"); return; }
      setState("changed");
    } catch (e) { fail(e); }
  };
  const isChange = action === "change";
  return (
    <>
      <button type="button" className={`${className} is-ready`} onClick={() => void (isChange ? change() : open())} disabled={state === "opening"} data-checkout={isChange ? "change" : "ready"}>
        {state === "opening" ? (isChange ? t.changing : t.opening) : interpolate(isChange ? t.changePlan : t.subscribe, { plan: planName })}
      </button>
      {action === "subscribe-manual" && !me.hasSub ? <p className="pc49-note">{t.manualNote}</p> : null}
      {state === "error" ? <p className="pc49-note is-err" role="alert">{isChange ? t.changeFailed : reason ? interpolate(t.checkoutError, { reason }) : t.failed}</p> : null}
      {state === "done" ? <p className="pc49-note" role="status">{t.processing}</p> : null}
      {state === "changed" ? <p className="pc49-note" role="status">{t.changed}</p> : null}
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
      await openPaddleCheckout(enabled, { transactionId: j.transactionId }, () => setState("done"));
      setState((st) => (st === "opening" ? "idle" : st));
    } catch (e) { setErr(e instanceof Error ? e.message : ""); setState("error"); }
  };
  return (
    <>
      <button type="button" className={`${className} is-ready`} onClick={() => void buy()} disabled={disabled || state === "opening"} data-checkout="ready">{state === "opening" ? t.opening : label}</button>
      {state === "error" ? <p className="pc49-note is-err" role="alert">{t.failed}{err ? ` (${err})` : ""}</p> : null}
      {state === "done" ? <p className="pc49-note" role="status">{t.pendingConfirm}</p> : null}
    </>
  );
}
