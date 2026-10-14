import { interpolate } from "@/lib/i18n";
import { getText } from "@/server/locale";

export type WeaponSlug = "ak47" | "awp" | "m4a4" | "deagle" | "mp9" | "m4a1s" | "usps" | "famas";

/** Original A.C.E. studio render. Not a Valve model, skin, or inventory item. */
export async function SampleWeapon({
  slug,
  name,
  size = "row",
}: {
  slug: WeaponSlug;
  name: string;
  size?: "row" | "podium";
}) {
  const text = await getText();
  const src = `/images/weapons/${slug}.jpg`;
  return (
    <span className={`ace-gun3d is-${size}`}>
      <span className="ace-gun3d-case">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="ace-gun3d-img"
          src={src}
          alt={interpolate(text.leaderboard.weapon.alt, { name })}
          loading="lazy"
        />
      </span>
    </span>
  );
}
