import { interpolate } from "@/lib/i18n";
import { getText } from "@/server/locale";

const drops = [
  { weapon: "M4A1-S", finish: "Carbon Halo", multiplier: "1.15" },
  { weapon: "Butterfly Knife", finish: "Apex Veil", multiplier: "1.40" },
  { weapon: "AWP", finish: "Solar Crown", multiplier: "1.25" },
];

export async function LootArchitecture() {
  const text = await getText();
  const copy = text.features.loot;

  return (
    <section className="ace-glass-laser px-5 py-10 sm:px-8">
      <p className="text-xs uppercase tracking-[0.22em] text-[#FFD700]">{copy.kicker}</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">{copy.title}</h2>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-ace-muted">{copy.lede}</p>
      <ul className="mt-8 grid gap-4 md:grid-cols-3">
        {drops.map((drop) => (
          <li key={drop.finish} className="ace-loot-card ace-card-hover rounded-2xl p-5">
            <p className="text-[0.65rem] uppercase tracking-[0.18em] text-[#FFD700]/70">
              {copy.mockDrop}
            </p>
            <h3 className="mt-2 text-xl font-semibold text-white">
              {drop.weapon}{" "}
              <span className="text-[#FFD700]">| {drop.finish}</span>
            </h3>
            <div className="ace-skin-plate mt-4 h-28 rounded-xl" aria-hidden="true" />
            <dl className="mt-4 space-y-2 text-sm">
              <div>
                <dt className="text-white/45">{copy.multiplierLabel}</dt>
                <dd className="text-white">
                  {interpolate(copy.multiplierValue, { multiplier: drop.multiplier })}
                </dd>
              </div>
              <div>
                <dt className="text-white/45">{copy.ladderLabel}</dt>
                <dd className="text-white">{copy.ladderValue}</dd>
              </div>
            </dl>
            <p className="mt-4 rounded-full border border-[#FFD700]/35 px-3 py-1 text-center text-[0.65rem] uppercase tracking-[0.16em] text-[#FFD700]">
              {copy.checkout}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
