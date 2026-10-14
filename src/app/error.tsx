"use client";

import { useEffect } from "react";
import { useText } from "@/components/text-provider";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const copy = useText().home.error;

  useEffect(() => {
    console.error("A.C.E. public page error", error.digest ?? error.message);
  }, [error]);

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-4 py-24 sm:px-6">
      <p className="text-sm font-semibold tracking-[0.2em] text-ace-danger">{copy.kicker}</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">{copy.title}</h1>
      <p className="mt-4 max-w-lg text-ace-muted leading-7">{copy.body}</p>
      <div className="mt-8">
        <button
          type="button"
          onClick={() => reset()}
          aria-label={copy.retryAria}
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-ace-gold px-5 text-sm font-semibold text-ace-void"
        >
          {copy.retry}
        </button>
      </div>
    </main>
  );
}
