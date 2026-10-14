"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { href: "/ranks", label: "Tiers & divisions", match: (path: string) => path === "/ranks" },
  { href: "/ranks/guide", label: "Calibration Codex", match: (path: string) => path.startsWith("/ranks/guide") },
] as const;

/** One Ranks section: the ladder and the Codex share this tab bar. */
export function RanksTabs() {
  const pathname = usePathname() ?? "";
  return (
    <nav className="ace-ranks-tabs" aria-label="Ranks section">
      {TABS.map((tab) => {
        const active = tab.match(pathname);
        return (
          <Link key={tab.href} href={tab.href} aria-current={active ? "page" : undefined} className={active ? "is-on" : undefined}>
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
