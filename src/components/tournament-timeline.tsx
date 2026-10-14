import { interpolate } from "@/lib/i18n";
import { getText } from "@/server/locale";

const STAGES = [
  {
    id: "01",
    key: "registrations",
    locked: false,
  },
  {
    id: "02",
    key: "calibration",
    locked: true,
  },
  {
    id: "03",
    key: "quarterFinals",
    locked: true,
  },
  {
    id: "04",
    key: "finals",
    locked: true,
  },
] as const;

export async function TournamentTimeline() {
  const copy = (await getText()).teams.tournaments.timeline;
  return (
    <nav className="ace-tourney-line" aria-label={copy.ariaLabel}>
      <p className="ace-widget-kicker">{copy.kicker}</p>
      <h2 className="ace-widget-title">{copy.title}</h2>
      <ol className="ace-tourney-steps relative mt-4 grid list-none gap-3 p-0 md:grid-cols-4">
        {STAGES.map((stage) => (
          <li
            key={stage.id}
            className={`ace-tourney-step border bg-[#020203] p-3 ${
              stage.locked
                ? "ace-tourney-locked border-[#FFD700]/25"
                : "ace-tourney-active border-[#FFD700]"
            }`}
          >
            <span className="block text-[0.58rem] tracking-[0.16em] text-[#D4AF37]">
              {interpolate(copy.stageLabel, { id: stage.id })}
            </span>
            <span className="mt-1 block text-sm font-semibold text-[#F5F3EC]">{copy.stages[stage.key].title}</span>
            <span className="mt-2 block text-[0.62rem] tracking-[0.14em] text-[#FFD700]">
              [{copy.stages[stage.key].state}]
            </span>
          </li>
        ))}
      </ol>
      <p className="ace-widget-disclaimer">{copy.disclaimer}</p>
    </nav>
  );
}
