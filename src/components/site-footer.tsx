"use client";

import Link from "next/link";
import { ConnectedCount } from "@/components/connected-count";
import { CookieSettings } from "@/components/cookie-settings";
import { LobbyRibbon } from "@/components/lobby-ribbon";
import { useI18n } from "@/components/locale-provider";
import { socialNetworks } from "@/lib/site";
import type { MessageKey } from "@/lib/i18n";

const platform: { href: string; key: MessageKey }[] = [
  { href: "/", key: "navHome" },
  { href: "/play", key: "navPlay" },
  { href: "/tournaments", key: "navTournaments" },
  { href: "/leaderboard", key: "navLeaderboard" },
  { href: "/teams", key: "navTeams" },
  { href: "/ranks", key: "navRanks" },
];

const community: { href: string; key: MessageKey }[] = [
  { href: "/shop", key: "navShop" },
  { href: "/pricing", key: "navPricing" },
  { href: "/features", key: "navFeatures" },
  { href: "/support", key: "support" },
  { href: "/contact", key: "contact" },
];

const legal = [
  { href: "/rules", key: "rules" as const },
  { href: "/privacy", key: "privacy" as const },
  { href: "/terms", key: "terms" as const },
  { href: "/cookie-policy", key: "cookiePolicy" as const },
];

export function SiteFooter() {
  const { t } = useI18n();

  return (
    <footer className="relative z-10 mt-auto bg-[#020203]">
      <div className="ace-news-bar">
        <p className="ace-news-copy">{t("seasonBar")}</p>
        <LobbyRibbon />
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
            {platform.map((item) => (
              <Link key={item.href} href={item.href}>
                {t(item.key)}
              </Link>
            ))}
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
        <div className="mx-auto flex max-w-[76rem] flex-col gap-3 px-4 py-4 text-xs leading-5 text-[#A9ABB3] sm:px-6">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <p>{t("copyrightLine")}</p>
            <p>
              <ConnectedCount />
            </p>
          </div>
          <p className="max-w-4xl">{t("copyrightClaim")}</p>
        </div>
      </div>
      <div className="border-t border-[#FFD700]/40 px-4 py-6 sm:px-6">
        <section className="ace-indemnity" aria-label={t("platformNoticeTitle")}>
          <h2>{t("platformNoticeTitle")}</h2>
          <p>{t("platformNoticeBody")}</p>
        </section>
      </div>
    </footer>
  );
}
