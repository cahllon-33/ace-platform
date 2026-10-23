import type { Metadata } from "next";
import { getLocaleId } from "@/server/locale";
import { desktopStrings, DESKTOP_DOWNLOAD_URL, DESKTOP_VERSION } from "@/lib/desktop-i18n";
import { interpolate } from "@/lib/interpolate";

export async function generateMetadata(): Promise<Metadata> {
  const t = desktopStrings(await getLocaleId());
  return { title: t.title, description: t.lede };
}

export default async function DownloadPage() {
  const t = desktopStrings(await getLocaleId());
  return (
    <main className="ace-desk-page" style={{ maxWidth: 880, margin: "0 auto", padding: "48px 20px" }}>
      <section style={{ border: "1px solid rgba(201,162,74,0.25)", borderRadius: 14, padding: 28, background: "linear-gradient(160deg, rgba(201,162,74,0.08), rgba(0,0,0,0.35))" }}>
        <h1 style={{ color: "#C9A24A", fontSize: 32, fontWeight: 800, marginBottom: 10 }}>{t.title}</h1>
        <p style={{ opacity: 0.85, fontSize: 17, marginBottom: 22 }}>{t.lede}</p>
        <a href={DESKTOP_DOWNLOAD_URL} download style={{ display: "inline-block", background: "#C9A24A", color: "#111", fontWeight: 700, padding: "12px 22px", borderRadius: 10 }}>{t.download}</a>
        <p style={{ marginTop: 12, opacity: 0.7, fontSize: 14 }}>{interpolate(t.version, { version: DESKTOP_VERSION })} · {t.requirements}</p>
        <p style={{ marginTop: 8, opacity: 0.7, fontSize: 14 }}>{t.smartscreen}</p>
      </section>
      <section style={{ marginTop: 28, padding: "0 4px" }}>
        <h2 style={{ color: "#C9A24A", fontSize: 22, fontWeight: 700, marginBottom: 8 }}>{t.acTitle}</h2>
        <p style={{ opacity: 0.85, marginBottom: 8 }}>{t.acBody}</p>
        <p style={{ opacity: 0.7, fontSize: 14 }}>{t.acPrivacy}</p>
      </section>
    </main>
  );
}
