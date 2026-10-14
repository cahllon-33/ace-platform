import { readdirSync, statSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { join, resolve } from "node:path";

const dir = resolve("src/lib/i18n/text/en");
function leaves(value) {
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value.flatMap(leaves);
  if (value && typeof value === "object") return Object.values(value).flatMap(leaves);
  return [];
}
let total = 0;
let chars = 0;
for (const name of readdirSync(dir)) {
  if (name === "index.ts") continue;
  const file = join(dir, name);
  if (statSync(file).isDirectory()) continue;
  const mod = await import(pathToFileURL(file).href);
  const area = Object.values(mod)[0];
  const list = leaves(area);
  const size = list.reduce((sum, s) => sum + s.length, 0);
  total += list.length;
  chars += size;
  console.log(`${name.padEnd(16)} strings=${String(list.length).padStart(4)} chars=${size}`);
}
console.log(`TOTAL strings=${total} chars=${chars}`);
