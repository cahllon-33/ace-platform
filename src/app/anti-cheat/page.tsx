import type { Metadata } from "next";
import Link from "next/link";
import { ComingSoon } from "@/components/coming-soon";
import { SHIELD_PHASES, SHIELD_PILLARS } from "@/features/anti-cheat/status";
import type { ShieldStatus } from "@/features/anti-cheat/types";
import type { Ui } from "@/lib/i18n/ui";
import { getUi } from "@/server/locale";

export async function generateMetadata(): Promise<Metadata> {
  const ui = await getUi();
  return { title: `${ui.antiCheat.kicker} · ${ui.antiCheat.title}`, description: ui.antiCheat.lede };
}

function statusLabel(ui: Ui, status: ShieldStatus) {
  if (status === "designed") return ui.status.designed;
  if (status === "in-development") return ui.status.inDevelopment;
  if (status === "live") return ui.status.available;
  return ui.status.comingSoon;
}

const ICONS: Record<string, string> = {
  client: "M4 5h16v11H4zM8 20h8M12 16v4",
  server: "M4 4h16v6H4zM4 14h16v6H4zM8 7h.01M8 17h.01",
  match: "M5 19 19 5M8 5H5v3M16 19h3v-3",
  behaviour: "M3 12h4l3-7 4 14 3-7h4",
  identity: "M12 3 4.5 7v5c0 4.5 3.2 7.8 7.5 9 4.3-1.2 7.5-4.5 7.5-9V7L12 3Z",
};

export default async function AntiCheatPage() {
  const ui = await getUi();
  const copy = ui.antiCheat;
  return (
    <main className="ace-shield-page mx-auto w-full max-w-[76rem] px-4 py-14 sm:px-6">
      <header className="ace-shield-hero">
        <svg className="ace-shield-mark" viewBox="0 0 24 24" aria-hidden="true">
          <path d={ICONS.identity} />
        </svg>
        <p className="text-xs tracking-[0.28em] text-[#FFD700] uppercase">{copy.kicker}</p>
        <h1 className="mt-2 text-4xl font-semibold sm:text-5xl">{copy.title}</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-[#C9CAD0]">{copy.lede}</p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="text-xs uppercase tracking-[0.18em] text-[#A9ABB3]">{copy.statusLabel}</span>
          <ComingSoon label={ui.status.inDevelopment} size="md" />
        </div>
      </header>

      <section className="mt-14" aria-labelledby="shield-pillars">
        <h2 id="shield-pillars" className="ace-shield-h2">{copy.pillarsTitle}</h2>
        <ul className="ace-shield-grid">
          {SHIELD_PILLARS.map((pillar) => (
            <li key={pillar.id} className="ace-shield-card">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d={ICONS[pillar.id]} />
              </svg>
              <h3>{copy.pillars[pillar.id].title}</h3>
              <p>{copy.pillars[pillar.id].body}</p>
              <ComingSoon label={statusLabel(ui, pillar.status)} />
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14" aria-labelledby="shield-roadmap">
        <h2 id="shield-roadmap" className="ace-shield-h2">{copy.roadmapTitle}</h2>
        <ol className="ace-shield-roadmap">
          {SHIELD_PHASES.map((phase) => (
            <li key={phase.id} className={`is-${phase.status}`}>
              <span className="ace-shield-node" aria-hidden="true" />
              <div>
                <h3>{copy.phases[phase.id].title}</h3>
                <p>{copy.phases[phase.id].body}</p>
              </div>
              <ComingSoon label={statusLabel(ui, phase.status)} />
            </li>
          ))}
        </ol>
      </section>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <section className="ace-shield-panel" aria-labelledby="shield-privacy">
          <h2 id="shield-privacy" className="ace-shield-h2">{copy.privacyTitle}</h2>
          <ul className="ace-shield-list">
            {copy.privacy.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </section>
        <section className="ace-shield-panel" aria-labelledby="shield-faq">
          <h2 id="shield-faq" className="ace-shield-h2">{copy.faqTitle}</h2>
          <dl className="ace-shield-faq">
            {copy.faq.map((item) => (
              <div key={item.q}>
                <dt>{item.q}</dt>
                <dd>{item.a}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm">
            <Link href="/rules#s14" className="text-[#FFD700] underline underline-offset-4">
              {ui.nav.rules} · 14
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}
