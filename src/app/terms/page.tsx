import type { Metadata } from "next";
import { LegalDocument, LegalSection } from "@/components/legal-document";
import { getLocaleId, getText } from "@/server/locale";

export async function generateMetadata(): Promise<Metadata> {
  const text = await getText();
  return {
    title: text.legalDocs.terms.meta.title,
    description: text.legalDocs.terms.meta.description,
  };
}

type Terms = Awaited<ReturnType<typeof getText>>["legalDocs"];

function sectionList(docs: Terms): { key: string; title: string; paragraphs: readonly string[] }[] {
  const s = docs.terms.sections;
  const r = docs.r14;
  const one = (key: string, title: string, body: string) => ({ key, title, paragraphs: [body] });
  return [
    { key: "operator", ...s.operator },
    one("definitions", r.definitionsTitle, r.definitions),
    { key: "eligibility", ...s.eligibility },
    { key: "notActive", ...s.notActive },
    { key: "subscriptions", ...s.subscriptions },
    { key: "antiCheat", ...s.antiCheat },
    one("suspension", r.suspensionTitle, r.suspension),
    one("disputes", r.disputesTitle, r.disputes),
    { key: "liability", ...s.liability },
    { key: "copyright", ...s.copyright },
    one("changes", r.changesTitle, r.changes),
    one("language", r.languageTitle, r.language),
    { key: "contact", ...s.contact },
  ];
}

export default async function TermsPage() {
  const [text, localeId] = await Promise.all([getText(), getLocaleId()]);
  const terms = text.legalDocs.terms;
  return (
    <LegalDocument
      kicker={terms.kicker}
      title={terms.title}
      lede={terms.lede}
      notice={localeId !== "en" ? text.legalDocs.translationNotice : undefined}
    >
      {sectionList(text.legalDocs).map((section, index) => {
        return (
          <LegalSection key={section.key} n={index + 1} title={section.title}>
            {section.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </LegalSection>
        );
      })}
    </LegalDocument>
  );
}
