"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { AceLogo } from "@/components/ace-logo";
import { LanguageMenu } from "@/components/language-menu";
import { useI18n } from "@/components/locale-provider";
import { useText } from "@/components/text-provider";
import { useUi } from "@/components/use-ui";
import { moreNav, siteNav } from "@/lib/site";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader({ auth }: { auth: ReactNode }) {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const { t } = useI18n();
  const copy = useText().home.shell;
  const ui = useUi();
  const moreActive = moreNav.some((item) => isActive(pathname, item.href));

  useEffect(() => {
    if (!moreOpen) return;
    function onDown(event: PointerEvent) {
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) setMoreOpen(false);
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setMoreOpen(false);
    }
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [moreOpen]);

  return (
    <header className="sticky top-0 z-[90] border-b border-white/10 bg-[#070708]/92 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[90rem] items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="min-w-0 shrink-0 rounded-sm no-underline" onClick={() => setOpen(false)}>
          <AceLogo compact />
          <p className="sr-only">{t("brandSubline")}</p>
        </Link>

        <nav aria-label={copy.primaryNav} className="ace-topnav hidden min-w-0 items-center lg:flex">
          {siteNav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={active ? "is-on" : undefined}>
                {ui.nav[item.key]}
              </Link>
            );
          })}
          <div className="ace-more" ref={moreRef}>
            <button
              type="button"
              aria-expanded={moreOpen}
              aria-haspopup="true"
              className={moreActive ? "is-on" : undefined}
              onClick={() => setMoreOpen((value) => !value)}
            >
              {ui.nav.more}
              <svg viewBox="0 0 12 12" aria-hidden="true">
                <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </button>
            {moreOpen ? (
              <div className="ace-more-menu">
                {moreNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive(pathname, item.href) ? "page" : undefined}
                    onClick={() => setMoreOpen(false)}
                  >
                    {ui.nav[item.key]}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/pricing" className="ace-gold-cta hidden sm:inline-flex">
            {ui.nav.getPremium}
          </Link>
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

      {open ? (
        <div id="mobile-nav" className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-[#D4AF37]/25 bg-[#08090D] px-4 py-4 lg:hidden">
          <nav aria-label={copy.mobileNav} className="ace-mobile-nav">
            <p>{ui.nav.compete}</p>
            {siteNav.map((item) => (
              <Link key={item.href} href={item.href} aria-current={isActive(pathname, item.href) ? "page" : undefined} onClick={() => setOpen(false)}>
                {ui.nav[item.key]}
              </Link>
            ))}
            <p>{ui.nav.explore}</p>
            {moreNav.map((item) => (
              <Link key={item.href} href={item.href} aria-current={isActive(pathname, item.href) ? "page" : undefined} onClick={() => setOpen(false)}>
                {ui.nav[item.key]}
              </Link>
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
