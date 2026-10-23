import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { connection } from "next/server";
import { interpolate } from "@/lib/i18n";
import { ComingSoonPlate } from "@/components/coming-soon-plate";
import { readBroadcastConfig } from "@/lib/broadcast";
import type { Ui } from "@/lib/i18n/ui";
import { MAP_POOL } from "@/lib/map-pool";
import { getUi } from "@/server/locale";

export async function generateMetadata(): Promise<Metadata> {
  const ui = await getUi();
  return { title: ui.maps.title, description: ui.maps.lede };
}

export default async function MapsPage() {
  const ui = await getUi();
  const copy = ui.maps;
  return (
    <main className="mx-auto w-full max-w-[76rem] px-4 py-14 sm:px-6">
      <p className="text-xs tracking-[0.28em] text-[#C9A24A] uppercase">{copy.kicker}</p>
      <h1 className="mt-2 text-4xl font-semibold">{copy.title}</h1>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-[#A9ABB3]">{copy.lede}</p>
      <Link href="/rules#s6" className="mt-3 inline-block text-sm text-[#C9A24A] underline underline-offset-4">
        {copy.rulebook}
      </Link>

      <section className="mt-10" aria-labelledby="ace-broadcast-screen">
        <h2 id="ace-broadcast-screen" className="text-xl font-semibold text-white">
          {copy.screen}
        </h2>
        <Suspense fallback={<OffAir ui={ui} next={null} />}>
          <BroadcastScreen ui={ui} />
        </Suspense>
      </section>

      <section className="mt-14" aria-labelledby="ace-map-pool">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <h2 id="ace-map-pool" className="text-xl font-semibold text-white">
            {copy.pool}
          </h2>
          <p className="text-xs tracking-[0.18em] text-[#A9ABB3] uppercase">
            {interpolate(copy.poolMeta, { count: MAP_POOL.length })}
          </p>
        </div>
        <ul className="ace-map-pool">
          {MAP_POOL.map((map, index) => (
            <li key={map.slug} className="ace-map-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={map.src} alt={map.name} loading={index < 3 ? "eager" : "lazy"} />
              <div className="ace-map-card-body">
                <p className="ace-map-card-index">{interpolate(copy.mapLabel, { n: String(index + 1).padStart(2, "0") })}</p>
                <h3>{map.name}</h3>
                <p className="ace-map-card-setting">{copy.settings[map.slug]}</p>
                <p className="ace-map-card-note">{copy.notes[map.slug]}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

async function BroadcastScreen({ ui }: { ui: Ui }) {
  await connection();
  const config = readBroadcastConfig();
  if (config.state === "off-air") {
    return <OffAir ui={ui} next={config.next} />;
  }
  const provider = config.provider === "twitch" ? "Twitch" : "YouTube";
  return (
    <div>
      <div className="ace-live-screen">
        <iframe
          src={config.embedUrl}
          title={`A.C.E · ${provider}`}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          sandbox="allow-scripts allow-same-origin allow-popups allow-presentation"
        />
      </div>
      <p className="ace-live-caption">
        {interpolate(ui.maps.embeddedFrom, { provider })}
        {config.next ? ` ${ui.maps.nextLabel}: ${config.next}.` : ""}
      </p>
    </div>
  );
}

function OffAir({ ui, next }: { ui: Ui; next: string | null }) {
  return (
    <div className="ace-live-screen is-off" role="status">
      <div className="ace-off-air">
        <p className="sr-only">
          {ui.maps.offAir}. {ui.maps.noBroadcast}
        </p>
        <ComingSoonPlate label={ui.soon.label} size="lg" />
        {next ? (
          <p className="ace-off-air-next">
            {ui.maps.nextLabel}: {next}
          </p>
        ) : (
          <p className="ace-off-air-next">
            {ui.maps.nextLabel}: {ui.maps.notScheduled}
          </p>
        )}
      </div>
    </div>
  );
}
