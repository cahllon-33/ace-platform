import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { connection } from "next/server";
import { readBroadcastConfig } from "@/lib/broadcast";
import { MAP_POOL } from "@/lib/map-pool";

export const metadata: Metadata = {
  title: "Maps & Broadcast",
  description: "The A.C.E. competitive map pool and the tournament broadcast screen.",
};

export default function MapsPage() {
  return (
    <main className="mx-auto w-full max-w-[76rem] px-4 py-14 sm:px-6">
      <p className="text-xs tracking-[0.28em] text-[#FFD700]">COMPETITIVE MAP POOL</p>
      <h1 className="mt-2 text-4xl font-semibold">Maps &amp; Broadcast</h1>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-[#A9ABB3]">
        Seven maps make up the A.C.E. competitive pool. Teams ban and pick from this list during the map
        veto described in the{" "}
        <Link href="/rules#s6" className="text-[#FFD700] underline underline-offset-4">
          rulebook
        </Link>
        . Tournament broadcasts appear on the screen below when one is scheduled.
      </p>

      <section className="mt-10" aria-labelledby="ace-broadcast-screen">
        <h2 id="ace-broadcast-screen" className="text-xl font-semibold text-white">
          Broadcast screen
        </h2>
        <Suspense fallback={<OffAir next={null} />}>
          <BroadcastScreen />
        </Suspense>
      </section>

      <section className="mt-14" aria-labelledby="ace-map-pool">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <h2 id="ace-map-pool" className="text-xl font-semibold text-white">
            Active map pool
          </h2>
          <p className="text-xs tracking-[0.18em] text-[#A9ABB3]">{MAP_POOL.length} MAPS · BO1 / BO3 VETO</p>
        </div>
        <ul className="ace-map-pool">
          {MAP_POOL.map((map, index) => (
            <li key={map.slug} className="ace-map-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={map.src} alt={`${map.name} map plate`} loading={index < 3 ? "eager" : "lazy"} />
              <div className="ace-map-card-body">
                <p className="ace-map-card-index">MAP {String(index + 1).padStart(2, "0")}</p>
                <h3>{map.name}</h3>
                <p className="ace-map-card-setting">{map.setting}</p>
                <p className="ace-map-card-note">{map.note}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

async function BroadcastScreen() {
  await connection();
  const config = readBroadcastConfig();
  if (config.state === "off-air") {
    return <OffAir next={config.next} />;
  }
  return (
    <div>
      <div className="ace-live-screen">
      <iframe
        src={config.embedUrl}
        title={`A.C.E. tournament broadcast (${config.provider === "twitch" ? "Twitch" : "YouTube"})`}
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        sandbox="allow-scripts allow-same-origin allow-popups allow-presentation"
      />
      </div>
      <p className="ace-live-caption">
        Embedded from {config.provider === "twitch" ? "Twitch" : "YouTube"}. Whether the stream is live is
        shown by the player itself.
        {config.next ? ` Next scheduled: ${config.next}.` : ""}
      </p>
    </div>
  );
}

function OffAir({ next }: { next: string | null }) {
  return (
    <div className="ace-live-screen is-off" role="status">
      <div className="ace-off-air">
        <span className="ace-off-air-dot" aria-hidden="true" />
        <p className="ace-off-air-title">OFF AIR</p>
        <p className="ace-off-air-body">No broadcast is on right now.</p>
        <p className="ace-off-air-next">
          Next broadcast: {next ?? "not scheduled yet. It will be announced here."}
        </p>
      </div>
    </div>
  );
}
