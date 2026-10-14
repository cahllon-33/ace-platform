import type { Metadata } from "next";
import { LegalDocument, LegalSection } from "@/components/legal-document";
import { getLocaleId, getText } from "@/server/locale";

export async function generateMetadata(): Promise<Metadata> {
  const text = await getText();
  return {
    title: text.legalDocs.cookiePolicy.meta.title,
    description: text.legalDocs.cookiePolicy.meta.description,
  };
}

export default async function CookiePolicyPage() {
  const [text, localeId] = await Promise.all([getText(), getLocaleId()]);
  const policy = text.legalDocs.cookiePolicy;
  return (
    <LegalDocument
      kicker={policy.kicker}
      title={policy.title}
      lede={policy.lede}
      notice={localeId !== "en" ? text.legalDocs.translationNotice : undefined}
    >
      <LegalSection title={policy.audit.title}>
        <p>{policy.audit.body}</p>
      </LegalSection>
      <LegalSection title={policy.essential.title}>
        <ul className="list-disc space-y-2 ps-5">
          <li>
            <strong className="text-[#F5F3EC]">{policy.essential.session.label}</strong>{" "}
            {policy.essential.session.body}
          </li>
          <li>{policy.essential.necessity}</li>
        </ul>
      </LegalSection>
      <LegalSection title={policy.analytics.title}>
        <p>
          {policy.analytics.before}{" "}
          <code className="text-[#FFD700]">ace-cookie-consent-v1</code>{" "}
          {policy.analytics.after}
        </p>
      </LegalSection>
      <LegalSection title={policy.marketing.title}>
        <p>{policy.marketing.body}</p>
      </LegalSection>
      <LegalSection title={policy.change.title}>
        <p>{policy.change.body}</p>
      </LegalSection>
    </LegalDocument>
  );
}
