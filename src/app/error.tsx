"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useText } from "@/components/text-provider";
import { useUi } from "@/components/use-ui";
import "./status-page.css";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const copy = useText().home.error;
  const e = useUi().r40.err;
  const nf = useUi().r40.nf;

  useEffect(() => {
    console.error("A.C.E public page error", error.digest ?? error.message);
  }, [error]);

  return (
    <main className="sp40 sp40-err">
      <div className="sp40-glow" aria-hidden="true" />
      <p className="sp40-big" aria-hidden="true">500</p>
      <p className="sp40-code">{e.code}</p>
      <h1 className="sp40-title">{e.title}</h1>
      <p className="sp40-body">{e.body}</p>
      <div className="sp40-actions">
        <button type="button" onClick={() => reset()} aria-label={copy.retryAria} className="sp40-primary">{e.retry}</button>
        <Link href="/" className="sp40-ghost">{nf.home}</Link>
      </div>
    </main>
  );
}
