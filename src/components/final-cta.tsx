"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUi } from "@/components/use-ui";

/** Closing call to action shown above the footer. `playHref` is decided on the server. */
export function FinalCta({ playHref }: { playHref: "/play" | "/pricing" }) {
  const ui = useUi();
  const pathname = usePathname() ?? "/";
  if (pathname.startsWith("/admin")) return null;
  return (
    <section className="ace-final-cta" aria-labelledby="ace-final-cta-title">
      <div className="ace-final-cta-inner">
        <p className="ace-final-cta-kicker">{ui.cta.kicker}</p>
        <h2 id="ace-final-cta-title">{ui.cta.title}</h2>
        <p className="ace-final-cta-body">{ui.cta.body}</p>
        <div className="ace-final-cta-actions">
          <Link href={playHref} className="ace-gold-cta is-lg">
            {ui.cta.play}
          </Link>
          <Link href="/ranks" className="ace-ghost-cta is-lg">
            {ui.cta.ranks}
          </Link>
        </div>
      </div>
    </section>
  );
}
