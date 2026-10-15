"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";
import { AceLogo } from "@/components/ace-logo";
import { LanguageMenu } from "@/components/language-menu";
import { useI18n } from "@/components/locale-provider";
import { useText } from "@/components/text-provider";
import { useUi } from "@/components/use-ui";
import { moreNav, siteNav } from "@/lib/site";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

/**
 * Two-tier header (R22). Top row: logo + utilities. Second row (desktop): every destination visible,
 * grouped Compete / Explore, gold active underline. No overflow menu. Mobile: hamburger with all links.
 */
export function SiteHeader({ auth }: { auth: ReactNode }) {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);
  const { t } = useI18n();
  const copy = useText().home.shell;
  const ui = useUi();

  const groups = [
    { label: ui.nav.compete, items: siteNav },
    { label: ui.nav.explore, items: moreNav },
  ];

  return (
    <header className="ace-header sticky top-0 z-[90]">
      <div className="ace-header-top mx-auto flex h-16 max-w-[90rem] items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="min-w-0 shrink-0 rounded-sm no-underline" onClick={() => setOpen(false)}>
          <AceLogo compact />
          <p className="sr-only">{t("brandSubline")}</p>
        </Link>

        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-flex">
            <Link href="/pricing" className="ace-gold-cta">
              {ui.nav.getPremium}
            </Link>
          </span>
          <LanguageMenu />
          <div className="hidden md:flex">{auth}</div>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-[#D4AF37]/40 text-[#F5F3EC] lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t("closeMenu") : t("openMenu")}
            onClick={() => setOpen((value) => !value)}
          >
            <span aria-hidden="true">{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      <nav aria-label={copy.primaryNav} className="ace-navbar hidden lg:block">
        <div className="ace-navbar-inner mx-auto max-w-[90rem] px-4 sm:px-6">
          {groups.map((group, gi) => (
            <div key={group.label} className="ace-navgroup" role="group" aria-label={group.label}>
              {gi > 0 ? <span className="ace-navsep" aria-hidden="true" /> : null}
              <span className="ace-navlabel" aria-hidden="true">{group.label}</span>
              {group.items.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={active ? "is-on" : undefined}>
                    {ui.nav[item.key]}
                  </Link>
                );
              })}
            </div>
          ))}
        </div>
      </nav>

      {open ? (
        <div id="mobile-nav" className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-[#D4AF37]/25 bg-[#08090D] px-4 py-4 lg:hidden">
          <nav aria-label={copy.mobileNav} className="ace-mobile-nav">
            {groups.map((group) => (
              <div key={group.label} className="contents">
                <p>{group.label}</p>
                {group.items.map((item) => (
                  <Link key={item.href} href={item.href} aria-current={isActive(pathname, item.href) ? "page" : undefined} onClick={() => setOpen(false)}>
                    {ui.nav[item.key]}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <Link href="/pricing" className="ace-gold-cta justify-center" onClick={() => setOpen(false)}>
              {ui.nav.getPremium}
            </Link>
            {auth}
          </div>
        </div>
      ) : null}
    </header>
  );
}
