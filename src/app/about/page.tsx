import type { Metadata } from "next";
import Link from "next/link";
import { getUi } from "@/server/locale";
import "../info41.css";

export async function generateMetadata(): Promise<Metadata> {
  const a = (await getUi()).r41.ab;
  return { title: a.title, description: a.lede, openGraph: { title: a.title, description: a.lede } };
}

export default async function AboutPage() {
  const ui = await getUi();
  const a = ui.r41.ab;
  return (
    <main className="in41">
      <header className="pg41-hero">
        <h1 className="pg41-h1">{a.title}</h1>
        <p className="in41-lede">{a.lede}</p>
      </header>
      <div className="in41-card"><ul className="in41-points"><li>{a.b1}</li><li>{a.b2}</li><li>{a.b3}</li></ul></div>
      <p><Link href="/ranks" className="in41-link">{ui.r40.nf.ranks} →</Link></p>
    </main>
  );
}
