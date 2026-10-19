"use client";

import Link from "next/link";
import { CookieSettings } from "@/components/cookie-settings";
import { useI18n } from "@/components/locale-provider";
import { useUi } from "@/components/use-ui";
import { useText } from "@/components/text-provider";
import { socialNetworks, type SocialKey } from "@/lib/site";

type NavKey = "home" | "play" | "ranks" | "leaderboard" | "teams" | "pricing" | "tournaments" | "rules" | "maps" | "prizes" | "antiCheat" | "features" | "shop";

const platform: { href: string; key: NavKey }[] = [
  { href: "/play", key: "play" },
  { href: "/ranks", key: "ranks" },
  { href: "/leaderboard", key: "leaderboard" },
  { href: "/teams", key: "teams" },
  { href: "/pricing", key: "pricing" },
];

const competition: { href: string; key: NavKey }[] = [
  { href: "/tournaments", key: "tournaments" },
  { href: "/rules", key: "rules" },
  { href: "/maps", key: "maps" },
  { href: "/prizes", key: "prizes" },
  { href: "/anti-cheat", key: "antiCheat" },
];

const SOCIAL_ICONS: Record<SocialKey, string> = {
  x: "M17.8 3h3.1l-6.8 7.7L22 21h-6.3l-4.9-6.4L5.2 21H2.1l7.3-8.3L1.8 3h6.4l4.4 5.8L17.8 3Zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5Z",
  twitch: "M4 2 2.5 5.8V20h5v2.5h2.8L12.8 20h3.8l5-5V2H4Zm15.7 12.1-3 3h-4.8l-2.6 2.6v-2.6H5.4V3.9h14.3v10.2ZM16.6 7v5.3h-1.9V7h1.9Zm-5 0v5.3H9.7V7h1.9Z",
  youtube: "M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8ZM9.7 15V9l5.9 3-5.9 3Z",
  instagram: "M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4ZM17.3 5.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM12 2c-2.7 0-3 0-4.1.1C4.4 2.3 2.3 4.4 2.1 7.9 2 9 2 9.3 2 12s0 3 .1 4.1c.2 3.5 2.3 5.6 5.8 5.8 1.1.1 1.4.1 4.1.1s3 0 4.1-.1c3.5-.2 5.6-2.3 5.8-5.8.1-1.1.1-1.4.1-4.1s0-3-.1-4.1c-.2-3.5-2.3-5.6-5.8-5.8C15 2 14.7 2 12 2Zm0 1.8c2.7 0 3 0 4 .1 2.6.1 3.9 1.4 4 4 .1 1 .1 1.3.1 4s0 3-.1 4c-.1 2.6-1.4 3.9-4 4-1 .1-1.3.1-4 .1s-3 0-4-.1c-2.6-.1-3.9-1.4-4-4-.1-1-.1-1.3-.1-4s0-3 .1-4c.1-2.6 1.4-3.9 4-4 1-.1 1.3-.1 4-.1Z",
  discord: "M20.3 4.4A19.7 19.7 0 0 0 15.4 3l-.6 1.3a18.3 18.3 0 0 0-5.5 0L8.6 3a19.6 19.6 0 0 0-4.9 1.5C.6 9.1-.3 13.6.1 18.1A19.8 19.8 0 0 0 6.1 21l1.3-2.1c-.7-.3-1.4-.6-2-1l.5-.4a14 14 0 0 0 12.2 0l.5.4c-.6.4-1.3.7-2 1l1.3 2.1a19.7 19.7 0 0 0 6-2.9c.5-5.2-.8-9.7-3.6-13.7ZM8 15.4c-1.2 0-2.2-1.1-2.2-2.4S6.8 10.6 8 10.6s2.2 1.1 2.2 2.4-1 2.4-2.2 2.4Zm8 0c-1.2 0-2.2-1.1-2.2-2.4s1-2.4 2.2-2.4 2.2 1.1 2.2 2.4-1 2.4-2.2 2.4Z",
};

export function SiteFooter() {
  const premiumTermsLabel = useText().pricing.premiumExtras.terms.footerLink;
  const { t } = useI18n();
  const ui = useUi();

  return (
    <footer className="ace-footer relative z-10 mt-auto">
      <div className="ace-footer-inner">
        <div className="ace-footer-brand">
          <Link href="/" className="ace-footer-logo" aria-label="A.C.E.">
            A.C.E.
          </Link>
          <p className="ace-footer-tagline">{ui.footer.tagline}</p>
          {socialNetworks.length > 0 ? (
            <ul className="ace-footer-social" aria-label={ui.footer.follow}>
              {socialNetworks.map((item) => (
                <li key={item.key}>
                  <a href={item.href} rel="noopener noreferrer" target="_blank" aria-label={item.label}>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d={SOCIAL_ICONS[item.key]} fill="currentColor" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="ace-footer-cols">
          <nav aria-label={ui.footer.platform}>
            <p>{ui.footer.platform}</p>
            {platform.map((item) => (
              <Link key={item.href} href={item.href}>
                {ui.nav[item.key]}
              </Link>
            ))}
          </nav>
          <nav aria-label={ui.footer.competition}>
            <p>{ui.footer.competition}</p>
            {competition.map((item) => (
              <Link key={item.href} href={item.href}>
                {ui.nav[item.key]}
              </Link>
            ))}
          </nav>
          <nav aria-label={ui.footer.company}>
            <p>{ui.footer.company}</p>
            <Link href="/features">{ui.nav.features}</Link>
            <Link href="/shop">{ui.nav.shop}</Link>
            <Link href="/support">{t("support")}</Link>
            <Link href="/contact">{t("contact")}</Link>
          </nav>
          <nav aria-label={ui.footer.legal}>
            <p>{ui.footer.legal}</p>
            <Link href="/privacy">{t("privacy")}</Link>
            <Link href="/terms">{t("terms")}</Link>
            <Link href="/premium-terms">{premiumTermsLabel}</Link>
            <Link href="/cookie-policy">{t("cookiePolicy")}</Link>
            <CookieSettings />
          </nav>
        </div>
      </div>
      <details className="ace-footer-notice">
        <summary>{t("platformNoticeTitle")}</summary>
        <div className="ace-footer-notice-body">
          <p>{t("lede")}</p>
          <p>{t("platformNoticeBody")}</p>
          <p>{t("copyrightClaim")}</p>
          <p>{t("copyrightLine")}</p>
        </div>
      </details>
      <div className="ace-footer-legal">
        <p>{ui.footer.legalLine}</p>
        <p>{ui.footer.rights}</p>
      </div>
    </footer>
  );
}
