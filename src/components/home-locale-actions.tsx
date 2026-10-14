"use client";

import Link from "next/link";
import { ConnectedCount } from "@/components/connected-count";
import { useI18n } from "@/components/locale-provider";
import { SteamSignInButton } from "@/components/steam-sign-in-button";
import { useText } from "@/components/text-provider";

export function LocaleLoading({ className }: { className?: string }) {
  const { t } = useI18n();
  return (
    <p className={className ?? "text-sm tracking-[0.2em] text-[#FFD700]"}>{t("loadingAce")}</p>
  );
}

export function HomeLocaleActions({ live }: { live: boolean }) {
  const { t } = useI18n();

  return (
    <>
      {live ? (
        <Link href="/play" className="ace-play-now">
          {t("playNow")}
        </Link>
      ) : (
        <SteamSignInButton variant="steam" />
      )}
      <Link href="#how-it-works" className="ace-how-btn">
        {t("howItWorks")}
      </Link>
    </>
  );
}

const HOW_HIGHLIGHTS = [
  "Steam OpenID",
  "Steam password",
  "5v5",
  "Command Deck",
  "FIND MATCH",
  "Ranked",
];

function HowStepCopy({ text }: { text: string }) {
  const pattern = new RegExp(`(${HOW_HIGHLIGHTS.map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "g");
  const parts = text.split(pattern);

  return (
    <p className="ace-how-copy">
      {parts.map((part, index) =>
        HOW_HIGHLIGHTS.includes(part) ? (
          <strong key={`${part}-${index}`}>{part}</strong>
        ) : (
          <span key={`${part}-${index}`}>{part}</span>
        ),
      )}
    </p>
  );
}

function HowConnector() {
  return (
    <div className="ace-how-connector" aria-hidden="true">
      <span className="ace-how-connector-line" />
      <span className="ace-how-chevron">›</span>
    </div>
  );
}

export function HowItWorksLocale() {
  const { t } = useI18n();
  const status = useText().home.howStatus;
  const steps = [t("step1"), t("step2"), t("step3"), t("step4")];

  return (
    <section id="how-it-works" className="ace-how-stage mx-auto max-w-[76rem] px-4 pb-20 pt-16 sm:px-6">
      <h2 className="text-2xl font-semibold text-white sm:text-3xl">{t("howItWorksTitle")}</h2>
      <ol className="ace-how-track">
        {steps.map((text, index) => (
          <li key={index} className="ace-how-item">
            {index > 0 ? <HowConnector /> : null}
            <article className="ace-how-card backdrop-blur-md">
              <p className="ace-how-chip">{t("stepLabel", { n: index + 1 })}</p>
              <HowStepCopy text={text} />
            </article>
          </li>
        ))}
      </ol>
      <div className="ace-how-status" role="status">
        <span className="ace-how-status-dot" aria-hidden="true" />
        <p className="ace-how-status-label">{status.label}</p>
        <p className="ace-how-status-note">{status.note}</p>
      </div>
    </section>
  );
}

export function PlayersOnlineNow() {
  return <ConnectedCount />;
}
