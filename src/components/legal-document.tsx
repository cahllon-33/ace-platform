import type { ReactNode } from "react";
import { interpolate } from "@/lib/i18n";
import { getText } from "@/server/locale";

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
    <main className="px-4 py-14 sm:px-6">
      <article className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-[#FFD76A]/35 bg-[#020203] shadow-[0_0_80px_rgba(212, 175, 55,0.12)]">
        <header className="border-b border-[#FFD76A]/25 bg-[#121318] px-6 py-10 sm:px-10">
          {notice ? (
            <p role="note" className="mb-5 rounded-xl border border-[#FFD76A]/30 px-4 py-3 text-xs leading-5 text-[#A9ABB3]">
              {notice}
            </p>
          ) : null}
          <p className="font-mono text-xs tracking-[0.2em] text-[#FFD76A]">{kicker}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#FFD76A]">{title}</h1>
          <p className="mt-4 text-sm leading-7 text-[#A9ABB3]">{lede}</p>
          <LegalMeta />
          <LegalDisclaimer />
        </header>
        <div className="space-y-8 px-6 py-8 text-sm leading-7 text-[#A9ABB3] sm:px-10">{children}</div>
      </article>
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
  return (
    <section>
      {code ? (
        <p className="font-mono text-[0.65rem] tracking-[0.2em] text-[#FFD76A]">{code}</p>
      ) : null}
      <h2 className="mt-2 text-xl font-semibold text-[#F5F3EC]">{n ? `${n}. ${title.replace(/^\d+\.\s*/, "")}` : title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}
