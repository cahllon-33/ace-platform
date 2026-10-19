import type { Metadata } from "next";
import Link from "next/link";
import { AntiCheatTelemetry } from "@/components/anti-cheat-telemetry";
import { ComingSoonShield } from "@/components/coming-soon-shield";
import { ServerHubTicker } from "@/components/server-hub-ticker";
import { LegalDisclaimer } from "@/components/legal-document";
import { interpolate } from "@/lib/i18n";
import { RANK_TIERS } from "@/lib/ranks";
import { RATING_CONFIG } from "@/lib/rating";
import { getText } from "@/server/locale";

export async function generateMetadata(): Promise<Metadata> {
  const text = await getText();
  return {
    title: text.features.page.meta.title,
    description: text.features.page.meta.description,
  };
}

export default async function FeaturesPage() {
  const text = await getText();
  const copy = text.features.page;

  return (
    <main className="px-4 py-14 sm:px-6">
      <article className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-[#FFD76A]/35 bg-[#020203] shadow-[0_0_80px_rgba(212, 175, 55,0.12)]">
        <header className="border-b border-[#FFD76A]/25 bg-[#121318] px-6 py-10 sm:px-10">
          <p className="font-mono text-xs tracking-[0.2em] text-[#FFD76A]">
            {copy.header.kicker}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#FFD76A]">
            {copy.header.title}
          </h1>
          <p className="mt-4 text-sm leading-7 text-[#A9ABB3]">{copy.header.lede}</p>
          <LegalDisclaimer />
        </header>

        <section className="border-b border-[#FFD76A]/15 px-6 py-10 sm:px-10">
          <p className="font-mono text-[0.65rem] tracking-[0.2em] text-[#FFD76A]">SPEC-01</p>
          <h2 className="mt-2 text-2xl font-semibold text-[#F5F3EC]">{copy.kernel.title}</h2>
          {copy.kernel.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-sm leading-7 text-[#A9ABB3]">
              {paragraph}
            </p>
          ))}
          <dl className="mt-6 grid gap-4 md:grid-cols-3">
            {copy.kernel.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-[#FFD76A]/25 bg-[#121212] p-4"
              >
                <dt className="text-xs tracking-[0.14em] text-[#FFD76A]">{stat.label}</dt>
                <dd className="mt-2 text-sm text-[#F5F3EC]">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="border-b border-[#FFD76A]/15 px-6 py-10 sm:px-10">
          <p className="font-mono text-[0.65rem] tracking-[0.2em] text-[#FFD76A]">SPEC-02</p>
          <h2 className="mt-2 text-2xl font-semibold text-[#F5F3EC]">{copy.faceScan.title}</h2>
          {copy.faceScan.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-sm leading-7 text-[#A9ABB3]">
              {paragraph}
            </p>
          ))}
        </section>

        <section className="px-6 py-10 sm:px-10">
          <p className="font-mono text-[0.65rem] tracking-[0.2em] text-[#FFD76A]">SPEC-03</p>
          <h2 className="mt-2 text-2xl font-semibold text-[#F5F3EC]">
            {copy.calibration.title}
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#A9ABB3]">
            {interpolate(copy.calibration.intro, {
              version: RATING_CONFIG.version,
              kFactor: RATING_CONFIG.kFactor,
              scale: RATING_CONFIG.scale,
              startingRating: RATING_CONFIG.startingRating,
            })}
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[40rem] border-collapse text-start text-sm">
              <thead>
                <tr className="border-b border-[#FFD76A]/25 text-xs tracking-[0.12em] text-[#FFD76A]">
                  <th className="py-3 pe-3 font-medium">{copy.calibration.table.level}</th>
                  <th className="py-3 pe-3 font-medium">{copy.calibration.table.engineName}</th>
                  <th className="py-3 pe-3 font-medium">{copy.calibration.table.crystalAlias}</th>
                  <th className="py-3 font-medium">{copy.calibration.table.minRating}</th>
                </tr>
              </thead>
              <tbody>
                {RANK_TIERS.map((tier) => (
                  <tr key={tier.level} className="border-b border-[#FFD76A]/10">
                    <td className="py-3 pe-3 text-[#FFD76A]">{tier.level}</td>
                    <td className="py-3 pe-3 text-[#F5F3EC]">{tier.name}</td>
                    <td className="py-3 pe-3 text-[#F5F3EC]">{tier.crystalName}</td>
                    <td className="py-3 text-[#F5F3EC]">{tier.minRating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm leading-7 text-[#A9ABB3]">
            {copy.calibration.divisions.before}
            <Link href="/ranks" className="text-[#FFD76A]">/ranks</Link>
            {copy.calibration.divisions.middle}
            <Link href="/rules" className="text-[#FFD76A]">/rules</Link>
            {copy.calibration.divisions.after}
          </p>
        </section>
      </article>
      <div className="mx-auto mt-8 grid max-w-5xl gap-4">
        <ServerHubTicker />
        <div className="grid gap-4 lg:grid-cols-2">
          <ComingSoonShield />
          <AntiCheatTelemetry />
        </div>
      </div>
    </main>
  );
}
