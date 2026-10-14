import { readdirSync } from "node:fs";
import { pathToFileURL } from "node:url";
import path from "node:path";

const dir = path.resolve("src/lib/i18n");
const { EN } = await import(pathToFileURL(path.join(dir, "en.ts")).href);
const keys = Object.keys(EN);
const report = {};
for (const file of readdirSync(dir)) {
  if (!file.endsWith(".ts") || file === "en.ts") continue;
  const mod = await import(pathToFileURL(path.join(dir, file)).href);
  const bag = Object.values(mod)[0];
  const same = keys.filter((k) => bag[k] === EN[k] && /[a-z]{3,}/.test(EN[k]) && EN[k].split(" ").length > 1);
  const missing = keys.filter((k) => !(k in bag));
  report[file] = { same: same.length, missing: missing.length, sameKeys: same };
}
const mode = process.argv[2];
if (mode === "keys") {
  const all = {};
  for (const [file, r] of Object.entries(report)) for (const k of r.sameKeys) (all[k] ??= []).push(file.replace(".ts", ""));
  console.log(JSON.stringify(Object.fromEntries(Object.entries(all).map(([k, v]) => [k, v.length])), null, 0));
} else {
  for (const [file, r] of Object.entries(report)) console.log(file, "same:", r.same, "missing:", r.missing);
}
