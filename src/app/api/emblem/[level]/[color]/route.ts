import { readFile } from "node:fs/promises";
import path from "node:path";
import { parseBadgeColor, recolorEmblemSvg } from "@/lib/badge-color";

const FILES = ["01-recruit", "02-operative", "03-vanguard", "04-specialist", "05-veteran", "06-elite", "07-master", "08-grandmaster", "09-sovereign", "10-legend"];

/** Standard vector emblem in a player-chosen color. Public, deterministic, cacheable. */
export async function GET(_request: Request, context: { params: Promise<{ level: string; color: string }> }) {
  const { level, color } = await context.params;
  const lvl = Number(level);
  const hex = parseBadgeColor(color);
  if (!Number.isInteger(lvl) || lvl < 1 || lvl > 10 || !hex) return new Response("Not found", { status: 404 });
  const svg = await readFile(path.join(process.cwd(), "public", "ranks", "emblems", `${FILES[lvl - 1]}.svg`), "utf8");
  return new Response(recolorEmblemSvg(svg, lvl, hex), {
    headers: {
      "content-type": "image/svg+xml; charset=utf-8",
      "cache-control": "public, max-age=31536000, immutable",
      "x-content-type-options": "nosniff",
    },
  });
}
