"use client";

import Link from "next/link";
import { useI18n } from "@/components/locale-provider";
import { PlanCards } from "@/components/plan-cards";
import { useText } from "@/components/text-provider";
export function LobbyMembership() {
  const { t } = useI18n();
  const copy = useText().home.membership;

  return (
    <section className="mx-auto max-w-[90rem] px-4 py-4 sm:px-6" aria-labelledby="membership">
      <h2
        id="membership"
        className="text-center text-xs font-semibold tracking-[0.28em] text-[#FFD76A]"
      >
        {t("membership")}
      </h2>
      <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-[#A9ABB3]">{t("membershipLede")}</p>
      <PlanCards headingLevel={3} />
      <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-6 text-[#A9ABB3]">
        {t("membershipDisclosure", { online: t("playersOnline", { count: 0 }) })}
      </p>
      <div className="mt-5 flex justify-center">
        <Link
          href="/pricing"
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#D4AF37]/45 bg-[#0B0B0C] px-6 text-xs font-semibold uppercase tracking-[0.16em] text-[#FFD700] hover:border-[#FFD700]"
        >
          {copy.compareLink}
        </Link>
      </div>
    </section>
  );
}
