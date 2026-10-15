// Generates the ten A.C.E. rank emblems as layered SVG (public/ranks/emblems).
// Run: node scripts/generate-rank-emblems.mjs
import { writeFileSync } from "node:fs";

const TIERS = [
  { file: "01-recruit", hi: "#d9dee4", mid: "#7b838c", lo: "#262a2f", glow: "#9aa3ad", face: "#16191c" }, // gunmetal
  { file: "02-operative", hi: "#ffd6ae", mid: "#e0843c", lo: "#5e2a08", glow: "#ff9a50", face: "#1f1006" }, // copper
  { file: "03-vanguard", hi: "#cfa47c", mid: "#6b4226", lo: "#22120a", glow: "#8a5a36", face: "#120a05" }, // brown
  { file: "04-specialist", hi: "#ffe7a6", mid: "#c89632", lo: "#4d3208", glow: "#e0aa3c", face: "#1c1406" }, // amber
  { file: "05-veteran", hi: "#ffffff", mid: "#b9c6d2", lo: "#3d4752", glow: "#d6e4f0", face: "#12161b" }, // platinum
  { file: "06-elite", hi: "#e6fbff", mid: "#49c6ea", lo: "#0b3a52", glow: "#5fd8ff", face: "#06141c" }, // diamond
  { file: "07-master", hi: "#efdcff", mid: "#9a5ff0", lo: "#2b0f55", glow: "#b07cff", face: "#120822" }, // amethyst
  { file: "08-grandmaster", hi: "#ffd0d6", mid: "#e0304a", lo: "#4a0712", glow: "#ff4a64", face: "#1c0408" }, // crimson
  { file: "09-sovereign", hi: "#c9ffe6", mid: "#1fbf7f", lo: "#053a24", glow: "#36e39a", face: "#04160e" }, // emerald
  { file: "10-legend", hi: "#fffbe0", mid: "#ffd34d", lo: "#7a4e00", glow: "#ffe27a", face: "#1e1400" }, // legend gold
];

const hex = (r, cx = 256, cy = 256) =>
  Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 2;
    return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
  }).join(" ");

function emblem(t, level) {
  const id = `e${level}`;
  const wings = level >= 4;
  const crown = level >= 7;
  const legend = level === 10;
  const pips = Array.from({ length: level }, (_, i) => {
    const total = level;
    const x = 256 + (i - (total - 1) / 2) * 17;
    return `<rect x="${(x - 5).toFixed(1)}" y="420" width="10" height="10" rx="2" transform="rotate(45 ${x.toFixed(1)} 425)" fill="url(#${id}-metal)" stroke="${t.lo}" stroke-width="1.5"/>`;
  }).join("");
  const wingPath = (side) => {
    const s = side;
    const p = (x, y) => `${256 + s * x},${y}`;
    const tiers = Math.min(3, Math.floor((level - 1) / 3));
    let d = "";
    for (let k = 0; k < tiers; k++) {
      const o = k * 26;
      d += `<polygon points="${p(176 + o * 0.2, 170 + o)} ${p(238 - o * 0.6, 132 + o * 1.4)} ${p(214 - o * 0.6, 214 + o)} ${p(186, 236 + o * 0.6)}" fill="url(#${id}-metal)" stroke="${t.lo}" stroke-width="3" stroke-linejoin="round" opacity="${1 - k * 0.18}"/>`;
    }
    return d;
  };
  const crownPts = crown
    ? `<polygon points="196,92 218,40 236,78 256,22 276,78 294,40 316,92 256,74" fill="url(#${id}-metal)" stroke="${t.lo}" stroke-width="3" stroke-linejoin="round"/>
       <circle cx="256" cy="38" r="7" fill="${t.hi}"/>`
    : "";
  const sparkles = legend
    ? [
        [120, 120, 0],
        [400, 150, 0.9],
        [380, 380, 1.7],
        [140, 370, 2.4],
        [256, 470, 1.2],
      ]
        .map(
          ([x, y, d]) =>
            `<path class="spark" style="animation-delay:${d}s" d="M${x} ${y - 16}L${x + 4} ${y - 4}L${x + 16} ${y}L${x + 4} ${y + 4}L${x} ${y + 16}L${x - 4} ${y + 4}L${x - 16} ${y}L${x - 4} ${y - 4}Z" fill="#fffbe6"/>`,
        )
        .join("")
    : "";
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1024" height="1024" role="img" aria-label="A.C.E. rank ${level} emblem">
<defs>
  <linearGradient id="${id}-metal" x1="0" y1="0" x2="0.35" y2="1">
    <stop offset="0" stop-color="${t.hi}"/><stop offset="0.38" stop-color="${t.mid}"/><stop offset="0.62" stop-color="${t.lo}"/><stop offset="0.82" stop-color="${t.mid}"/><stop offset="1" stop-color="${t.hi}"/>
  </linearGradient>
  <linearGradient id="${id}-bevel" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="${t.hi}"/><stop offset="0.5" stop-color="${t.mid}"/><stop offset="1" stop-color="${t.lo}"/>
  </linearGradient>
  <linearGradient id="${id}-bevel-dark" x1="0" y1="1" x2="0" y2="0">
    <stop offset="0" stop-color="${t.hi}" stop-opacity="0.9"/><stop offset="0.5" stop-color="${t.lo}"/><stop offset="1" stop-color="#000"/>
  </linearGradient>
  <radialGradient id="${id}-face" cx="0.5" cy="0.38" r="0.7">
    <stop offset="0" stop-color="${t.mid}" stop-opacity="0.55"/><stop offset="0.45" stop-color="${t.face}"/><stop offset="1" stop-color="#000"/>
  </radialGradient>
  <radialGradient id="${id}-glow" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="${t.glow}" stop-opacity="${legend ? 0.75 : 0.45}"/><stop offset="1" stop-color="${t.glow}" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="${id}-sheen" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset="0.5" stop-color="#fff" stop-opacity="${legend ? 0.85 : 0.55}"/><stop offset="1" stop-color="#fff" stop-opacity="0"/>
  </linearGradient>
  <filter id="${id}-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="10" stdDeviation="10" flood-color="#000" flood-opacity="0.75"/></filter>
  <clipPath id="${id}-clip"><polygon points="${hex(176)}"/></clipPath>
</defs>
<style>
  .sheen{animation:sheen 6s ease-in-out infinite;transform:translateX(-420px) skewX(-18deg)}
  @keyframes sheen{0%,55%{transform:translateX(-420px) skewX(-18deg)}85%,100%{transform:translateX(520px) skewX(-18deg)}}
  .spark{transform-box:fill-box;transform-origin:center;animation:spark 2.6s ease-in-out infinite;opacity:0}
  @keyframes spark{0%,100%{opacity:0;transform:scale(.3)}45%{opacity:1;transform:scale(1)}}
  @media (prefers-reduced-motion: reduce){.sheen,.spark{animation:none}.sheen{opacity:0}.spark{opacity:.8}}
</style>
<circle cx="256" cy="256" r="250" fill="url(#${id}-glow)"/>
<g filter="url(#${id}-shadow)">
  ${wings ? wingPath(-1) + wingPath(1) : ""}
  ${crownPts}
  <polygon points="${hex(212)}" fill="url(#${id}-bevel)" stroke="${t.lo}" stroke-width="4" stroke-linejoin="round"/>
  <polygon points="${hex(196)}" fill="url(#${id}-bevel-dark)"/>
  <polygon points="${hex(180)}" fill="url(#${id}-metal)"/>
  <polygon points="${hex(170)}" fill="url(#${id}-face)" stroke="${t.lo}" stroke-width="3"/>
  <polygon points="${hex(150)}" fill="none" stroke="${t.mid}" stroke-opacity="0.35" stroke-width="2"/>
  <!-- A mark: outer chevron with bevel faces -->
  <polygon points="256,104 362,368 316,368 256,212 196,368 150,368" fill="url(#${id}-metal)" stroke="${t.lo}" stroke-width="4" stroke-linejoin="round"/>
  <polygon points="256,104 256,212 196,368 150,368" fill="${t.hi}" opacity="0.28"/>
  <polygon points="256,104 362,368 316,368 256,212" fill="#000" opacity="0.22"/>
  <polygon points="214,300 298,300 286,330 226,330" fill="url(#${id}-bevel)" stroke="${t.lo}" stroke-width="3" stroke-linejoin="round"/>
  <polygon points="256,150 270,186 256,178 242,186" fill="${t.hi}" opacity="0.9"/>
  ${pips}
</g>
<g clip-path="url(#${id}-clip)"><rect class="sheen" x="0" y="0" width="140" height="512" fill="url(#${id}-sheen)"/></g>
${sparkles}
</svg>
`;
}

TIERS.forEach((t, i) => {
  writeFileSync(new URL(`../public/ranks/emblems/${t.file}.svg`, import.meta.url), emblem(t, i + 1));
});
console.log("wrote", TIERS.length, "emblems");
