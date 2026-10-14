import { getText } from "@/server/locale";

export async function CommunityRail() {
  const text = await getText();
  const copy = text.features.communityRail;

  return (
    <aside className="ace-glass-laser ace-community-rail pointer-events-auto hidden w-64 p-4 xl:block">
      <p className="text-[0.62rem] uppercase tracking-[0.2em] text-[#FFD700]/70">
        {copy.kicker}
      </p>
      <h2 className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#FFD700]">
        {copy.newsTitle}
      </h2>
      <ul className="mt-3 space-y-2 text-sm text-white/80">
        {copy.newsItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h2 className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-[#FFD700]">
        {copy.prizesTitle}
      </h2>
      <p className="mt-3 text-sm text-white/80">{copy.prizesBody}</p>
    </aside>
  );
}
