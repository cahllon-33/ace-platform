import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const roots = ["src/app", "src/components"];
const files = [];
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (p.endsWith(".tsx")) files.push(p);
  }
}
roots.forEach(walk);

const jsxText = />\s*([A-Za-z][^<>{}]*[A-Za-z.!?])\s*</g;
const attr = /\b(aria-label|title|alt|placeholder|label)=\"([^\"]*[A-Za-z]{3,}[^\"]*)\"/g;
let total = 0;
for (const file of files) {
  const src = readFileSync(file, "utf8");
  const hits = [];
  for (const m of src.matchAll(jsxText)) {
    const s = m[1].trim();
    if (/^[A-Z0-9 .·:+\-]{1,6}$/.test(s)) continue;
    if (/=>|&&|\(|\)|;|^[a-z]+[A-Z]\w*$/.test(s)) continue;
    hits.push(`text: ${s.slice(0, 90)}`);
  }
  for (const m of src.matchAll(attr)) hits.push(`${m[1]}: ${m[2].slice(0, 90)}`);
  if (hits.length) {
    total += hits.length;
    console.log(`\n## ${file}`);
    hits.forEach((h) => console.log("  " + h));
  }
}
console.log(`\nTOTAL ${total}`);
