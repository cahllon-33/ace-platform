import { getText } from "@/server/locale";

const cardIds = ["faceScan", "hardwareId"] as const;

export async function IdentityPreview() {
  const text = await getText();
  const copy = text.features.identityPreview;

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {cardIds.map((id) => {
        const card = copy.cards[id];
        return (
          <article
            key={id}
            className="ace-card-hover rounded-2xl border border-ace-line bg-[#1a1c22] p-5"
          >
            <p className="text-[0.65rem] uppercase tracking-[0.18em] text-ace-gold">
              {copy.badge}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-white">{card.title}</h3>
            <p className="mt-2 text-sm leading-6 text-ace-muted">{card.copy}</p>
          </article>
        );
      })}
    </div>
  );
}
