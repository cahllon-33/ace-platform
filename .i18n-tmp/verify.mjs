// Usage: node --no-warnings .i18n-tmp/verify.mjs <folder> [area ...]
// Compares src/lib/i18n/text/<folder>/<area>.ts against the English source.
import { existsSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { join, resolve } from "node:path";

const AREAS = ["rules", "legalDocs", "codex", "consent", "ranks", "leaderboard", "pricing", "features", "home", "play", "teams", "account", "desk"];
const [folder, ...picked] = process.argv.slice(2);
if (!folder) {
  console.error("usage: verify.mjs <folder> [area ...]");
  process.exit(2);
}
const areas = picked.length ? picked : AREAS;
const base = resolve("src/lib/i18n/text");
const placeholders = (s) => [...s.matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort().join(",");

let errors = 0;
let same = 0;
let total = 0;
const sameList = [];

function compare(en, tr, path) {
  if (typeof en === "string") {
    if (typeof tr !== "string") return fail(`${path}: expected string`);
    total += 1;
    if (!tr.trim()) fail(`${path}: empty`);
    if (placeholders(en) !== placeholders(tr)) fail(`${path}: placeholders {${placeholders(en)}} vs {${placeholders(tr)}}`);
    if (tr === en && /[a-z]{3,}\s+[a-z]{3,}/i.test(en)) {
      same += 1;
      sameList.push(`${path} = ${JSON.stringify(en).slice(0, 80)}`);
    }
    return;
  }
  if (Array.isArray(en)) {
    if (!Array.isArray(tr)) return fail(`${path}: expected array`);
    if (tr.length !== en.length) fail(`${path}: array length ${tr.length}, English has ${en.length}`);
    en.forEach((item, i) => compare(item, tr[i], `${path}[${i}]`));
    return;
  }
  if (!tr || typeof tr !== "object") return fail(`${path}: expected object`);
  for (const key of Object.keys(en)) {
    if (!(key in tr)) fail(`${path}.${key}: missing`);
    else compare(en[key], tr[key], `${path}.${key}`);
  }
  for (const key of Object.keys(tr)) if (!(key in en)) fail(`${path}.${key}: extra key`);
}

function fail(message) {
  errors += 1;
  console.log("ERROR " + message);
}

for (const area of areas) {
  const enMod = await import(pathToFileURL(join(base, "en", `${area}.ts`)).href);
  const file = join(base, folder, `${area}.ts`);
  if (!existsSync(file)) {
    fail(`${folder}/${area}.ts does not exist`);
    continue;
  }
  const trMod = await import(pathToFileURL(file).href);
  if (!(area in trMod)) {
    fail(`${folder}/${area}.ts must export const ${area}`);
    continue;
  }
  compare(enMod[area], trMod[area], area);
}

if (sameList.length) {
  console.log(`\nIdentical to English (${same}) - fine only for brand/product/weapon/map/rank names:`);
  sameList.forEach((line) => console.log("  " + line));
}
console.log(`\n${folder}: ${total} strings checked, ${errors} errors, ${same} identical to English`);
process.exit(errors ? 1 : 0);
