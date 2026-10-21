import type { Metadata } from "next";
import { headers } from "next/headers";
import { connection } from "next/server";
import { LivePlayers, UpcomingList } from "@/components/live-block";
import { loadLive, requestHost } from "@/server/live";
import { getUi } from "@/server/locale";
import "../info41.css";

export const instant = false;
export async function generateMetadata(): Promise<Metadata> {
  const lv = (await getUi()).r41b.lv;
  return { title: lv.title, description: lv.lede };
}

export default async function LivePage() {
  await connection();
  const [ui, live, h] = await Promise.all([getUi(), loadLive(), headers()]);
  const lv = ui.r41b.lv;
  return (
    <main className="in41 in41-wide">
      <header className="pg41-hero">
        <h1 className="pg41-h1">{lv.title}</h1>
        <p className="in41-lede">{lv.lede}</p>
      </header>
      <LivePlayers feeds={live.feeds} host={requestHost(h)} copy={lv} />
      <UpcomingList items={live.upcoming} copy={lv} />
    </main>
  );
}
