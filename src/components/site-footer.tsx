"use client";

import Link from "next/link";
import { CookieSettings } from "@/components/cookie-settings";
import { useI18n } from "@/components/locale-provider";
import { useUi } from "@/components/use-ui";
import { useText } from "@/components/text-provider";
import { SocialLinks } from "@/components/social-links";

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



export function SiteFooter() {
  const premiumTermsLabel = useText().pricing.premiumExtras.terms.footerLink;
  const { t } = useI18n();
  const ui = useUi();

  return (
    <footer className="ace-footer relative z-10 mt-auto">
      <div className="ace-footer-inner">
        <div className="ace-footer-brand">
          <Link href="/" className="ace-footer-logo" aria-label="A.C.E">
            A.C.E
          </Link>
          <p className="ace-footer-tagline">{ui.footer.tagline}</p>
          <SocialLinks />
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
            <Link href="/seasons">{ui.r41.se.title}</Link>
            <Link href="/badges">{ui.r41c.pr.open}</Link>
          </nav>
          <nav aria-label={ui.footer.company}>
            <p>{ui.footer.company}</p>
            <Link href="/about">{ui.r41.ab.title}</Link>
            <Link href="/features">{ui.nav.features}</Link>
            <Link href="/shop">{ui.nav.shop}</Link>
            <Link href="/support">{t("support")}</Link>
            <Link href="/contact">{t("contact")}</Link>
            <Link href="/status">{ui.r41.ss.title}</Link>
            <Link href="/report">{ui.r41.rp.open}</Link>
          </nav>
          <nav aria-label={ui.footer.legal}>
            <p>{ui.footer.legal}</p>
            <Link href="/privacy">{t("privacy")}</Link>
            <Link href="/terms">{t("terms")}</Link>
            <Link href="/premium-terms">{premiumTermsLabel}</Link>
            <Link href="/refunds">{ui.r49.refunds}</Link>
            <Link href="/cookies">{t("cookiePolicy")}</Link>
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
