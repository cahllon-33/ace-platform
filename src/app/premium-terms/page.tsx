import { CONTACT_EMAIL } from "@/lib/legal-r49";
import type { Metadata } from "next";
import Link from "next/link";
import { LegalDocument, LegalSection } from "@/components/legal-document";
import { PremiumProfileCardPreview } from "@/components/premium-profile-card";
import { PremiumRankCodex } from "@/components/premium-rank-codex";
import { interpolate } from "@/lib/i18n";
import { FREE_PRICE, PLUS_PRICE, PREMIUM_PRICE } from "@/lib/pricing";
import { getLocaleId, getText } from "@/server/locale";

export async function generateMetadata(): Promise<Metadata> {
  const terms = (await getText()).pricing.premiumExtras.terms;
  return { title: terms.metaTitle, description: terms.metaDescription };
}

// TODO(owner decision pending): RP / ELITE Points for paid plans is undecided by the owner.
// Do not implement any Rating Points boost; paid plans must never change rating or matchmaking.

export default async function PremiumTermsPage() {
  const [text, localeId] = await Promise.all([getText(), getLocaleId()]);
  const t = text.pricing.premiumExtras.terms;
  return (
    <LegalDocument kicker={t.kicker} title={t.title} lede={t.intro} notice={localeId !== "en" ? text.legalDocs.translationNotice : undefined}>
      <LegalSection title={t.pricesTitle}>
        <p>{interpolate(t.prices, { free: FREE_PRICE, plus: PLUS_PRICE, premium: PREMIUM_PRICE })}</p>
      </LegalSection>
      <LegalSection title={t.plusTitle}>
        <ul className="list-disc space-y-1 pl-5">
          <li>{t.plus1}</li>
          <li>{text.pricing.plansR11.termsPlusStats}</li>
          {CONTACT_EMAIL ? <li>{interpolate(t.plus2, { email: CONTACT_EMAIL })}</li> : null}
        </ul>
      </LegalSection>
      <LegalSection title={t.premiumTitle}>
        <ul className="list-disc space-y-1 pl-5">
          {[t.prem1, t.prem2, t.prem3, t.prem4, t.prem5, t.prem6, t.prem7].map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </LegalSection>
      <LegalSection title={text.pricing.plansR11.codexTitle}>
        <p>{text.pricing.plansR11.codexBody}</p>
        <PremiumProfileCardPreview text={text} />
        <PremiumRankCodex text={text} headingId="terms-rank-codex" />
        <p className="mt-3">
          <Link className="ace-codex-entry" href="/ranks#premium">
            {text.pricing.plansR11.codexLink}
          </Link>
        </p>
      </LegalSection>
      <LegalSection title={t.neverTitle}>
        <p className="font-semibold text-[#F5F3EC]">{t.never}</p>
      </LegalSection>
      <LegalSection title={t.soonTitle}>
        <p>{t.soon}</p>
      </LegalSection>
      <LegalSection title={t.languageTitle}>
        <p>{t.language}</p>
        {CONTACT_EMAIL ? <p className="mt-3">{interpolate(t.contact, { email: CONTACT_EMAIL })}</p> : null}
      </LegalSection>
    </LegalDocument>
  );
}
