import type { Metadata } from "next";
import Link from "next/link";
import { connection } from "next/server";
import { listWhatsNew } from "@/server/whats-new";
import { MarkSeen } from "@/components/whats-new-badge";
import "./whats-new.css";

export const metadata: Metadata = { title: "What's New · A.C.E", description: "New A.C.E features and shop items." };

export default async function WhatsNewPage() {
  await connection();
  const rows = await listWhatsNew(50).catch(() => null);
  return (
    <main className="wn62 mx-auto w-full max-w-[52rem] px-4 py-14 sm:px-6" lang="en">
      <p className="wn62-kicker">A.C.E</p>
      <h1 className="wn62-title">What&apos;s New</h1>
      <p className="wn62-lede">New features and new shop items, as they ship.</p>
      {rows === null ? <p className="wn62-empty">Updates are unavailable right now. Try again shortly.</p>
        : rows.length === 0 ? <p className="wn62-empty">No updates yet.</p> : (
        <ol className="wn62-list">
          {rows.map((r) => (
            <li key={r.id} className="wn62-item">
              <div className="wn62-meta"><span className={`wn62-tag${r.kind === "SHOP" ? " is-shop" : ""}`}>{r.kind === "SHOP" ? "Shop" : "Feature"}</span><time dateTime={r.at}>{new Date(r.at).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</time></div>
              <h2>{r.title}</h2>
              {r.body ? <p>{r.body}</p> : null}
              {r.href ? <Link href={r.href} className="wn62-open">Open →</Link> : null}
            </li>
          ))}
        </ol>
      )}
      <MarkSeen latest={rows?.[0]?.at ?? null} />
    </main>
  );
}
