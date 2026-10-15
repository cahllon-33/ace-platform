import { interpolate } from "@/lib/i18n";
import { getText } from "@/server/locale";

export type WeaponSlug = "ak47" | "awp" | "m4a4" | "deagle" | "mp9" | "m4a1s" | "usps" | "famas";

/** Original A.C.E. weapon art (16:9, dark charcoal backdrop). Not a Valve model, skin, or inventory item. */
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
  const base = `/images/weapons/${slug}`;
  return (
    <span className={`ace-gun3d is-${size}`}>
      <span className="ace-gun3d-case">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="ace-gun3d-img"
          src={`${base}-640.webp`}
          srcSet={`${base}-640.webp 640w, ${base}-1280.webp 1280w, ${base}-2560.webp 2560w`}
          sizes={size === "podium" ? "240px" : "120px"}
          width={640}
          height={360}
          decoding="async"
          alt={interpolate(text.leaderboard.weapon.alt, { name })}
          loading="lazy"
        />
      </span>
    </span>
  );
}
