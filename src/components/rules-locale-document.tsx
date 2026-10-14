import { LegalSection } from "@/components/legal-document";
import { interpolate } from "@/lib/i18n";
import { getText } from "@/server/locale";

export async function RulesLocaleDocument() {
  const text = await getText();
  const doc = text.rules.document;

  return (
    <article className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-[#FFD700]/35 bg-[#020203] shadow-[0_0_80px_rgba(255,215,0,0.12)]">
      <header className="border-b border-[#FFD700]/25 bg-[#121318] px-6 py-10 sm:px-10">
        <p className="font-mono text-xs tracking-[0.2em] text-[#FFD700]">{doc.header.kicker}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#FFD700]">
          {doc.header.title}
        </h1>
        <p className="mt-4 text-sm leading-7 text-[#A9ABB3]">{doc.header.lede}</p>
        <p className="mt-5 border-l-2 border-[#FFD700] bg-[#FFD700]/8 px-4 py-3 text-sm leading-6 text-[#F5F3EC]">
          {doc.header.notice}
        </p>
      </header>

      <div className="space-y-12 px-6 py-10 text-sm leading-7 text-[#A9ABB3] sm:px-10">
        {doc.articles.map((article, index) => {
          const code = String(index + 1).padStart(2, "0");
          return (
            <LegalSection
              key={code}
              code={interpolate(doc.articleLabel, { code })}
              title={article.title}
            >
              {article.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </LegalSection>
          );
        })}
      </div>
    </article>
  );
}
