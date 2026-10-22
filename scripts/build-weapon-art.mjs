// Builds optimized WebP variants of the original A.C.E weapon art.
// Source: a folder of 16:9 JPGs (default ../weapons-ace). Output: public/images/weapons/<slug>-{640,1280,2560}.webp
import sharp from "sharp";
import { readdirSync, mkdirSync } from "node:fs";
import path from "node:path";

const src = process.argv[2] ?? path.resolve("../weapons-ace");
const out = path.resolve("public/images/weapons");
mkdirSync(out, { recursive: true });
for (const file of readdirSync(src).filter((f) => f.endsWith(".jpg"))) {
  const slug = file.replace(/\.jpg$/, "");
  for (const width of [640, 1280, 2560]) {
    await sharp(path.join(src, file))
      .resize({ width, kernel: sharp.kernel.lanczos3 })
      .sharpen(width > 1280 ? { sigma: 0.6 } : undefined)
      .webp({ quality: width > 1280 ? 80 : 82, effort: 6 })
      .toFile(path.join(out, `${slug}-${width}.webp`));
  }
  console.log("built", slug);
}
