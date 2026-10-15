"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";
import { AceLogo } from "@/components/ace-logo";
import { LanguageMenu } from "@/components/language-menu";
import { useI18n } from "@/components/locale-provider";
import { useText } from "@/components/text-provider";
import { siteNav } from "@/lib/site";
import type { MessageKey } from "@/lib/i18n";

const NAV_KEYS: Partial<Record<(typeof siteNav)[number]["href"], MessageKey>> = {
  "/": "navHome",
  "/play": "navPlay",
  "/tournaments": "navTournaments",
  "/ranks": "navRanks",
  "/leaderboard": "navLeaderboard",
  "/teams": "navTeams",
  "/shop": "navShop",
  "/pricing": "navPricing",
  "/rules": "navRules",
};

export function SiteHeader({ auth }: { auth: ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { t } = useI18n();
  const copy = useText().home.shell;

  return (
    <header className="sticky top-0 z-[90] border-b border-white/10 bg-[#070708]/92 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[90rem] items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="min-w-0 rounded-sm no-underline"
          onClick={() => setOpen(false)}
        >
          <AceLogo compact />
          <p className="sr-only">{t("brandSubline")}</p>
        </Link>

        <nav aria-label={copy.primaryNav} className="hidden min-w-0 items-center xl:flex">
          {siteNav.map((item, index) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            const labelKey = NAV_KEYS[item.href];
            return (
              <span key={item.href} className="flex items-center">
                {index > 0 ? (
                  <span className="ace-nav-dot" aria-hidden="true" />
                ) : null}
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`px-1.5 py-2 text-[0.7rem] font-semibold tracking-[0.04em] ${
                    active ? "text-[#FFD76A]" : "text-[#F5F3EC] hover:text-[#FFD76A]"
                  }`}
                >
                  {labelKey ? t(labelKey) : item.label}
                </Link>
              </span>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageMenu />
          <div className="hidden md:flex">{auth}</div>
        </div>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-[#D4AF37]/40 text-[#F5F3EC] xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? t("closeMenu") : t("openMenu")}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? t("closeMenu") : t("openMenu")}</span>
          <span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-[#D4AF37]/25 bg-[#08090D] px-4 py-4 xl:hidden"
        >
          <nav aria-label={copy.mobileNav} className="flex flex-col gap-1">
            {siteNav.map((item) => {
              const labelKey = NAV_KEYS[item.href];
              return (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-sm tracking-[0.08em] text-[#F5F3EC]"
                onClick={() => setOpen(false)}
              >
                {labelKey ? t(labelKey) : item.label}
              </Link>
              );
            })}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <LanguageMenu />
            {auth}
          </div>
        </div>
      ) : null}
    </header>
  );
}
