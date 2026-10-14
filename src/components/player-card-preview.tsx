import { interpolate } from "@/lib/i18n";
import { getText } from "@/server/locale";

export async function PlayerCardPreview() {
  const copy = (await getText()).leaderboard.playerCard;
  return (
    <section className="ace-glass-laser relative overflow-hidden p-6 sm:p-8">
      <p className="text-[0.65rem] uppercase tracking-[0.22em] text-ace-gold">
        {copy.kicker}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          {copy.title}
        </h2>
        <span className="rounded-full border border-ace-gold px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-ace-gold-bright shadow-[0_0_16px_rgba(255,214,107,0.35)]">
          {copy.badge}
        </span>
      </div>
      <p className="mt-2 max-w-2xl text-sm text-ace-muted">{copy.note}</p>

      <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.9fr)]">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-white/50">{copy.currentRank}</p>
          <p className="ace-gold-shimmer mt-2 text-2xl font-semibold uppercase tracking-[0.08em] sm:text-3xl">
            {copy.rankValue}
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.18em] text-white/50">
            {copy.competitiveRating}
          </p>
          <p className="mt-2 text-xl text-white">
            4,892{" "}
            <span className="font-semibold text-ace-success">(+24)</span>
          </p>
        </div>
        <div className="border-t border-white/10 pt-6 lg:border-s lg:border-t-0 lg:ps-8 lg:pt-0">
          <p className="text-xs uppercase tracking-[0.18em] text-white/50">{copy.seasonRank}</p>
          <p className="mt-2 text-2xl font-medium tracking-tight text-white">
            #12{" "}
            <span className="text-lg font-normal text-white/80">
              {interpolate(copy.seasonTop, { percent: "0.8%" })}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
