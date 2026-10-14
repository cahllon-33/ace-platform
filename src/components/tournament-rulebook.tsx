import { interpolate } from "@/lib/i18n";
import { getText } from "@/server/locale";

const STAGE_STYLES = [
  {
    article:
      "rounded-lg border border-[#FFD700]/40 bg-[#0B0B0C] p-4 shadow-[0_0_15px_rgba(255,215,0,0.2)]",
    label: "block font-mono text-[10px] text-[#FFD700]/70",
    title: "mt-1 text-base font-bold text-white",
    status: "mt-2 block text-[10px] font-bold text-[#FFD700]",
  },
  {
    article: "rounded-lg border border-white/10 bg-[#0B0B0C] p-4",
    label: "block font-mono text-[10px] text-gray-500",
    title: "mt-1 text-base font-bold text-white/80",
    status: "mt-2 block text-[10px] font-bold text-[#FFD700]/60",
  },
  {
    article: "rounded-lg border border-white/10 bg-[#0B0B0C] p-4",
    label: "block font-mono text-[10px] text-gray-500",
    title: "mt-1 text-base font-bold text-white/80",
    status: "mt-2 block text-[10px] font-bold text-gray-500",
  },
  {
    article: "rounded-lg border border-white/10 bg-[#0B0B0C] p-4",
    label: "block font-mono text-[10px] text-gray-500",
    title: "mt-1 text-base font-bold text-white/80",
    status: "mt-2 block text-[10px] font-bold text-[#FFD700]/80",
  },
] as const;

function twoDigits(index: number) {
  return String(index + 1).padStart(2, "0");
}

export async function TournamentRulebook() {
  const text = await getText();
  const { roadmap, code } = text.rules.tournament;

  return (
    <section className="mt-14 w-full max-w-6xl mx-auto rounded-xl border border-[#FFD700]/30 bg-[#040406] p-6 backdrop-blur-2xl">
      <div className="mb-6">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFD700]">
          {roadmap.kicker}
        </span>
        <h2 className="mt-1 text-2xl font-black uppercase tracking-wide text-white">
          {roadmap.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {roadmap.stages.map((stage, index) => {
          const style = STAGE_STYLES[index] ?? STAGE_STYLES[1];
          const n = twoDigits(index);
          return (
            <article key={n} className={style.article}>
              <span className={style.label}>{interpolate(roadmap.stageLabel, { n })}</span>
              <h3 className={style.title}>{stage.title}</h3>
              <span className={style.status}>● {stage.status}</span>
              <p className="mt-2 text-[11px] leading-relaxed text-gray-400">{stage.body}</p>
            </article>
          );
        })}
      </div>

      <div className="mt-8 border-t border-white/10 pt-6">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFD700]">
          {code.kicker}
        </span>
        <h2 className="mt-1 text-2xl font-black uppercase tracking-wide text-white">
          {code.title}
        </h2>
        <p className="mt-3 max-w-3xl text-[12px] leading-relaxed text-gray-400">{code.lede}</p>
        <ol className="mt-6 grid list-none gap-4 p-0">
          {code.articles.map((article, index) => {
            const id = twoDigits(index);
            return (
              <li key={id} className="rounded-lg border border-white/10 bg-[#0B0B0C] p-4">
                <span className="font-mono text-[10px] text-[#FFD700]/70">
                  {interpolate(code.articleLabel, { id })}
                </span>
                <h3 className="mt-1 text-base font-bold text-white">{article.title}</h3>
                <p className="mt-2 text-[12px] leading-relaxed text-gray-400">{article.body}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
