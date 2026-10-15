"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUi } from "@/components/use-ui";

const TABS = [
  { href: "/ranks", key: "tiers", match: (path: string) => path === "/ranks" },
  { href: "/ranks/guide", key: "codex", match: (path: string) => path.startsWith("/ranks/guide") },
] as const;

/** One Ranks section: the ladder and the Codex share this tab bar. */
export function RanksTabs() {
  const pathname = usePathname() ?? "";
  const ui = useUi();
  return (
    <nav className="ace-ranks-tabs" aria-label={ui.ranksTabs.label}>
      {TABS.map((tab) => {
        const active = tab.match(pathname);
        return (
          <Link key={tab.href} href={tab.href} aria-current={active ? "page" : undefined} className={active ? "is-on" : undefined}>
            {ui.ranksTabs[tab.key]}
          </Link>
        );
      })}
    </nav>
  );
}
