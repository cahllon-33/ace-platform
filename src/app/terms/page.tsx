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

const SECTION_ORDER = [
  "operator",
  "eligibility",
  "notActive",
  "subscriptions",
  "antiCheat",
  "liability",
  "copyright",
  "contact",
] as const;

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
      {SECTION_ORDER.map((key) => {
        const section = terms.sections[key];
        return (
          <LegalSection key={key} title={section.title}>
            {section.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </LegalSection>
        );
      })}
    </LegalDocument>
  );
}
