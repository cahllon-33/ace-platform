import type { ReactNode } from "react";
import { interpolate } from "@/lib/i18n";
import { getText } from "@/server/locale";
import "./legal-document.css";

/** Effective date shared by the Terms, Privacy Policy, Cookie Policy and Premium terms. */
export const LEGAL_EFFECTIVE = "15 October 2026";

async function LegalMeta() {
  const r14 = (await getText()).legalDocs.r14;
  return (
    <p className="mt-4 font-mono text-[0.7rem] tracking-[0.12em] text-[#C9CAD0] uppercase">
      {interpolate(r14.effective, { date: LEGAL_EFFECTIVE })} · {r14.contact}
    </p>
  );
}

export async function LegalDisclaimer() {
  const text = await getText();
  return (
    <p className="mt-5 border-l-2 border-[#FFD76A] bg-[#FFD76A]/8 px-4 py-3 text-sm leading-6 text-[#F5F3EC]">
      {text.consent.valveDisclaimer}
    </p>
  );
}

export function LegalDocument({
  kicker,
  title,
  lede,
  notice,
  children,
}: {
  kicker: string;
  title: string;
  lede: string;
  notice?: string;
  children: ReactNode;
}) {
  return (
    <main className="lg41">
      <header className="lg41-hero">
        <div className="lg41-glow" aria-hidden="true" />
        {notice ? <p role="note" className="lg41-notice">{notice}</p> : null}
        <p className="lg41-kicker">{kicker}</p>
        <h1 className="lg41-title">{title}</h1>
        <p className="lg41-lede">{lede}</p>
        <LegalMeta />
        <LegalDisclaimer />
      </header>
      <article className="lg41-body">{children}</article>
    </main>
  );
}

export function LegalSection({
  code,
  n,
  title,
  children,
}: {
  code?: string;
  /** Section number; any number already in the title is replaced. */
  n?: number;
  title: string;
  children: ReactNode;
}) {
  const clean = title.replace(/^\d+\.\s*/, "");
  return (
    <section className="lg41-sec">
      <p className="lg41-num" aria-hidden="true">{code ?? (n ? String(n).padStart(2, "0") : "§")}</p>
      <div className="lg41-sec-body">
        <h2>{n ? `${n}. ${clean}` : title}</h2>
        <div className="lg41-copy">{children}</div>
      </div>
    </section>
  );
}
