"use client";

import { useEffect, useState } from "react";
import { SOCIALS, SOCIAL_LABEL, SOCIAL_PATHS, type Social } from "@/lib/socials";
import { useUi } from "@/components/use-ui";
import { interpolate } from "@/lib/interpolate";
import "./social-links.css";

let cache: Promise<Partial<Record<Social, string>>> | null = null;
const load = () => (cache ??= fetch("/api/socials").then((r) => r.json()).catch(() => ({})));

/** R49 social row (footer + home Community). Renders nothing until at least one URL is configured. */
export function SocialLinks({ variant = "footer" }: { variant?: "footer" | "community" }) {
  const t = useUi().r49;
  const [links, setLinks] = useState<Partial<Record<Social, string>>>({});
  useEffect(() => { let on = true; void load().then((l) => { if (on) setLinks(l); }); return () => { on = false; }; }, []);
  const set = SOCIALS.filter((n) => links[n]);
  if (!set.length) return null;
  const row = (
    <ul className={`sl49 is-${variant}`} aria-label={t.communityTitle}>
      {set.map((n) => (
        <li key={n}>
          <a href={links[n]} target="_blank" rel="noopener noreferrer" aria-label={interpolate(t.followOn, { network: SOCIAL_LABEL[n] })} title={SOCIAL_LABEL[n]} data-social={n}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d={SOCIAL_PATHS[n]} fill="currentColor" /></svg>
            {variant === "community" ? <span>{SOCIAL_LABEL[n]}</span> : null}
          </a>
        </li>
      ))}
    </ul>
  );
  if (variant === "footer") return row;
  return (
    <section className="sl49-community" aria-labelledby="sl49-t">
      <p className="sl49-kicker">A.C.E</p>
      <h2 id="sl49-t" className="sl49-title">{t.communityTitle}</h2>
      <p className="sl49-lede">{t.communityLede}</p>
      {row}
    </section>
  );
}
