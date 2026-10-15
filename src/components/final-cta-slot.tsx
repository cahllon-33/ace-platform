import { Suspense } from "react";
import { connection } from "next/server";
import { FinalCta } from "@/components/final-cta";
import { playCtaHref } from "@/lib/pricing";
import { readSessionUser } from "@/server/session";

async function FinalCtaDynamic() {
  await connection();
  let tier: string | null = null;
  try {
    tier = (await readSessionUser())?.subscriptionTier ?? null;
  } catch {
    tier = null;
  }
  return <FinalCta playHref={playCtaHref(tier)} />;
}

export function FinalCtaSlot() {
  return (
    <Suspense fallback={<FinalCta playHref="/pricing" />}>
      <FinalCtaDynamic />
    </Suspense>
  );
}
