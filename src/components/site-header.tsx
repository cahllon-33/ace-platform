"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { AceLogo } from "@/components/ace-logo";
import { LanguageMenu } from "@/components/language-menu";
import { SoundToggle } from "@/components/sound-toggle";
import { useI18n } from "@/components/locale-provider";
import { useText } from "@/components/text-provider";
import { useUi } from "@/components/use-ui";
import { moreNav, siteNav } from "@/lib/site";
import "./site-header.css";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

/** Destinations shown inline on desktop. Everything (including these) is also in the drawer and footer. */
const PRIMARY = siteNav.filter((item) => item.href !== "/");

/**
 * R40 header: one slim row (logo · primary links · utilities) with a full-height drawer that lists every
 * destination, grouped. No overflow "More" dropdown: the drawer is the site map, opened by the menu button.
 */
export function SiteHeader({ auth }: { auth: ReactNode }) {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useI18n();
  const copy = useText().home.shell;
  const ui = useUi();
  const drawerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const groups = [
    { label: ui.nav.compete, items: [...siteNav, { href: "/pricing", key: "pricing" } as const] },
    { label: ui.nav.explore, items: moreNav },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    drawerRef.current?.querySelector<HTMLElement>("a,button")?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`hx sticky top-0 z-[90]${scrolled ? " is-scrolled" : ""}`}>
      <div className="hx-row">
        <Link href="/" className="hx-logo" onClick={close}>
          <AceLogo compact />
          <span className="sr-only">{t("brandSubline")}</span>
        </Link>

        <nav aria-label={copy.primaryNav} className="hx-links">
          {PRIMARY.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={active ? "is-on" : undefined}>
                {ui.nav[item.key]}
              </Link>
            );
          })}
        </nav>

        <div className="hx-tools">
          <SoundToggle />
          <LanguageMenu />
          <div className="hx-auth">{auth}</div>
          <Link href="/pricing" className="hx-cta">
            {ui.nav.getPremium}
          </Link>
          <button
            ref={buttonRef}
            type="button"
            className="hx-burger"
            aria-expanded={open}
            aria-controls="site-drawer"
            aria-label={open ? t("closeMenu") : t("openMenu")}
            onClick={() => setOpen((value) => !value)}
          >
            <span aria-hidden="true" className={`hx-burger-lines${open ? " is-open" : ""}`}>
              <i />
              <i />
              <i />
            </span>
          </button>
        </div>
      </div>

      <div className={`hx-scrim${open ? " is-open" : ""}`} aria-hidden="true" onClick={close} />
      <div
        id="site-drawer"
        ref={drawerRef}
        className={`hx-drawer${open ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label={copy.mobileNav}
        inert={!open}
      >
        <div className="hx-drawer-head">
          <AceLogo compact />
          <button type="button" className="hx-close" aria-label={t("closeMenu")} onClick={close}>
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <nav aria-label={copy.mobileNav} className="hx-drawer-nav">
          {groups.map((group) => (
            <section key={group.label}>
              <p className="hx-drawer-label">{group.label}</p>
              <ul>
                {group.items.map((item) => {
                  const active = isActive(pathname, item.href);
                  return (
                    <li key={item.href}>
                      <Link href={item.href} aria-current={active ? "page" : undefined} className={active ? "is-on" : undefined} onClick={close}>
                        <span>{ui.nav[item.key]}</span>
                        <span aria-hidden="true" className="hx-arrow">→</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </nav>
        <div className="hx-drawer-foot">
          <div className="hx-drawer-auth">{auth}</div>
          <Link href="/pricing" className="hx-cta hx-cta-block" onClick={close}>
            {ui.nav.getPremium}
          </Link>
        </div>
      </div>
    </header>
  );
}
