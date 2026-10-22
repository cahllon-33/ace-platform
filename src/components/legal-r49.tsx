import { LegalDisclaimer } from "@/components/legal-document";
import { getLocaleId, getUi } from "@/server/locale";
import { LEGAL_R49_EFFECTIVE, type LegalDoc } from "@/lib/legal-r49";
import "./legal-document.css";

/** R49 legal page: English binding text; non-English visitors see a translated note that the English text applies. */
export async function LegalR49({ doc }: { doc: LegalDoc }) {
  const [ui, locale] = await Promise.all([getUi(), getLocaleId()]);
  return (
    <main className="lg41" lang="en" dir="ltr">
      <header className="lg41-hero">
        <div className="lg41-glow" aria-hidden="true" />
        {locale !== "en" ? <p role="note" className="lg41-notice" lang={locale} dir={locale === "he" || locale === "ar" || locale === "arz" ? "rtl" : "ltr"}>{ui.r49.legalEnglish}</p> : null}
        <p className="lg41-kicker">{doc.kicker}</p>
        <h1 className="lg41-title">{doc.title}</h1>
        <p className="lg41-lede">{doc.lede}</p>
        <p className="mt-4 font-mono text-[0.7rem] tracking-[0.12em] text-[#C9CAD0] uppercase">Effective: {LEGAL_R49_EFFECTIVE} · Contact: [CONTACT EMAIL]</p>
        <LegalDisclaimer />
        <nav className="lg49-nav" aria-label="Legal"><a href="/terms">Terms</a> · <a href="/privacy">Privacy</a> · <a href="/refunds">Refunds</a> · <a href="/cookies">Cookies</a> · <a href="/premium-terms">Premium badge terms</a></nav>
      </header>
      <article className="lg41-body">
        {doc.sections.map((s, i) => (
          <section key={s.title} className="lg41-sec lg49-sec" aria-labelledby={`lg49-${i}`}>
            <h2 id={`lg49-${i}`} className="lg41-sec-title"><span className="lg49-n">{String(i + 1).padStart(2, "0")}</span> {s.title}</h2>
            {s.body.map((p, j) => <p key={j}>{p}</p>)}
          </section>
        ))}
      </article>
    </main>
  );
}
