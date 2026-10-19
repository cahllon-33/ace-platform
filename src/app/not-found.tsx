import Link from "next/link";
import { getText, getUi } from "@/server/locale";
import "./status-page.css";

export default async function NotFound() {
  const [copy, ui] = [(await getText()).home.notFound, await getUi()];
  const nf = ui.r40.nf;
  return (
    <main className="sp40">
      <div className="sp40-glow" aria-hidden="true" />
      <p className="sp40-big" aria-hidden="true">404</p>
      <p className="sp40-code">{nf.code}</p>
      <h1 className="sp40-title">{nf.title}</h1>
      <p className="sp40-body">{nf.body}</p>
      <div className="sp40-actions">
        <Link href="/" className="sp40-primary" aria-label={copy.homeAria}>{nf.home}</Link>
        <Link href="/ranks" className="sp40-ghost">{nf.ranks}</Link>
      </div>
    </main>
  );
}
