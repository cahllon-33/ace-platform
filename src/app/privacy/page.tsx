import type { Metadata } from "next";
import { LegalDocument, LegalSection } from "@/components/legal-document";
import { getLocaleId, getText } from "@/server/locale";

export async function generateMetadata(): Promise<Metadata> {
  const text = await getText();
  return {
    title: text.legalDocs.privacy.meta.title,
    description: text.legalDocs.privacy.meta.description,
  };
}

export default async function PrivacyPage() {
  const [text, localeId] = await Promise.all([getText(), getLocaleId()]);
  const privacy = text.legalDocs.privacy;
  return (
    <LegalDocument
      kicker={privacy.kicker}
      title={privacy.title}
      lede={privacy.lede}
      notice={localeId !== "en" ? text.legalDocs.translationNotice : undefined}
    >
      <LegalSection n={1} title={privacy.strictNecessity.title}>
        <p>{privacy.strictNecessity.intro}</p>
        <p>{privacy.strictNecessity.storedIntro}</p>
        <ul className="list-disc space-y-2 ps-5">
          {privacy.strictNecessity.stored.map((item, index) => (
            <li key={index}>
              <strong className="text-[#F5F3EC]">{item.label}</strong>{" "}
              {item.body}
            </li>
          ))}
        </ul>
        <p>
          {privacy.strictNecessity.notCollected.before}{" "}
          <strong className="text-[#F5F3EC]">{privacy.strictNecessity.notCollected.strong}</strong>
          {privacy.strictNecessity.notCollected.after}
        </p>
      </LegalSection>
      <LegalSection n={2} title={privacy.neverCollect.title}>
        <ul className="list-disc space-y-2 ps-5">
          {privacy.neverCollect.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </LegalSection>
      <LegalSection n={3} title={privacy.steamBoundary.title}>
        <p>
          {privacy.steamBoundary.callback.before}{" "}
          <code className="text-[#FFD700]">/api/auth/steam/callback</code>
          {privacy.steamBoundary.callback.after}
        </p>
        <p>{privacy.steamBoundary.footerLinks}</p>
      </LegalSection>
      <LegalSection n={4} title={text.legalDocs.r14.retentionTitle}>
        <p>{text.legalDocs.r14.retention}</p>
      </LegalSection>
      <LegalSection n={5} title={text.legalDocs.r14.ageTitle}>
        <p>{text.legalDocs.r14.age}</p>
      </LegalSection>
      <LegalSection n={6} title={privacy.rights.title}>
        <p>
          {privacy.rights.before}{" "}
          <a className="text-[#FFD700]" href="mailto:support@ace-platform.gg">
            support@ace-platform.gg
          </a>
          {privacy.rights.after}
        </p>
      </LegalSection>
      <LegalSection n={7} title={privacy.cookies.title}>
        <p>
          {privacy.cookies.before}{" "}
          <a className="text-[#FFD700]" href="/cookie-policy">
            {privacy.cookies.link}
          </a>{" "}
          {privacy.cookies.after}
        </p>
      </LegalSection>
      <LegalSection n={8} title={privacy.controller.title}>
        <p>{privacy.controller.body}</p>
      </LegalSection>
    </LegalDocument>
  );
}
