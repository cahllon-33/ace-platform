"use client";

import Link from "next/link";
import { ConnectedCount } from "@/components/connected-count";
import { CookieSettings } from "@/components/cookie-settings";
import { useI18n } from "@/components/locale-provider";
import { useUi } from "@/components/use-ui";
import { moreNav, siteNav, socialNetworks } from "@/lib/site";
import type { MessageKey } from "@/lib/i18n";

const community: { href: string; key: MessageKey }[] = [
  { href: "/support", key: "support" },
  { href: "/contact", key: "contact" },
];

const legal = [
  { href: "/privacy", key: "privacy" as const },
  { href: "/terms", key: "terms" as const },
  { href: "/cookie-policy", key: "cookiePolicy" as const },
];

export function SiteFooter() {
  const { t } = useI18n();
  const ui = useUi();

  return (
    <footer className="relative z-10 mt-auto bg-[#020203]">
      <div className="ace-news-bar">
        <p className="ace-news-copy">{t("seasonBar")}</p>
      </div>
      <div className="ace-foot">
        <div className="ace-foot-brand">
          <p>{t("brand")}</p>
          <p>{t("headline")}</p>
          <p>{t("slogan")}</p>
        </div>
        <div className="ace-foot-cols">
          <nav aria-label={t("footerPlatform")}>
            <p>{t("footerPlatform")}</p>
            {siteNav.map((item) => (
              <Link key={item.href} href={item.href}>
                {ui.nav[item.key]}
              </Link>
            ))}
          </nav>
          <nav aria-label={ui.nav.explore}>
            <p>{ui.nav.explore}</p>
            {moreNav.map((item) => (
              <Link key={item.href} href={item.href}>
                {ui.nav[item.key]}
              </Link>
            ))}
            <Link href="/pricing">{ui.nav.pricing}</Link>
          </nav>
          <nav aria-label={t("footerCommunity")}>
            <p>{t("footerCommunity")}</p>
            {community.map((item) => (
              <Link key={item.href} href={item.href}>
                {t(item.key)}
              </Link>
            ))}
            {socialNetworks.map((item) => (
              <a key={item.label} href={item.href} rel="noopener noreferrer" target="_blank">
                {item.label}
              </a>
            ))}
          </nav>
          <nav aria-label={t("footerLegal")}>
            <p>{t("footerLegal")}</p>
            {legal.map((item) => (
              <Link key={item.key} href={item.href}>
                {t(item.key)}
              </Link>
            ))}
            <CookieSettings />
          </nav>
        </div>
      </div>
      <div className="border-t border-[#D4AF37]/20 bg-[#08090D]">
        <div className="mx-auto max-w-[76rem] px-4 py-3 sm:px-6">
          <p className="text-center text-[0.7rem] tracking-[0.06em] text-[#FFD700] sm:text-start">
            {t("corporateStrip")}
          </p>
        </div>
      </div>
      <div className="border-t border-[#D4AF37]/20">
        <div className="mx-auto flex max-w-[76rem] flex-col gap-2 px-4 py-4 text-xs leading-5 text-[#A9ABB3] sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="max-w-4xl">{ui.footer.legalLine}</p>
          <p>
            <ConnectedCount />
          </p>
        </div>
      </div>
    </footer>
  );
}
