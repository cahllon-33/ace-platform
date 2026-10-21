import type { Metadata } from "next";
import { getUi } from "@/server/locale";
import "../info41.css";

export async function generateMetadata(): Promise<Metadata> {
  const s = (await getUi()).r41.se;
  return { title: s.title, description: s.lede };
}

/** Display-only scaffolding: no season exists yet, so nothing is invented. */
export default async function SeasonsPage() {
  const s = (await getUi()).r41.se;
  return (
    <main className="in41">
      <header className="pg41-hero">
        <h1 className="pg41-h1">{s.title}</h1>
        <p className="in41-lede">{s.lede}</p>
      </header>
      <p className="in41-card in41-muted" role="status">{s.none}</p>
    </main>
  );
}
