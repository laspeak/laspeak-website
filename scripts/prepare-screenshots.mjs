import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";
const source = process.argv[2];
if (!source)
  throw new Error("Usage: node scripts/prepare-screenshots.mjs /path/to/business-plan-screenshots");
await mkdir("public/images/product", { recursive: true });
const screens = [
  ["06-live-lesson-workspace.png", "live-lesson"],
  ["04-longitudinal-learner-record.png", "learner-record"],
  ["05-cohort-operations.png", "cohorts"],
  ["02-learner-portfolio.png", "learners"],
  // Phone frame only, without the prototype caption beside it.
  ["08-mobile-flashcards.png", "mobile-practice", { left: 1580, top: 50, width: 890, height: 1750 }],
];
for (const [file, name, crop] of screens) {
  for (const width of [192, 256, 384, 640, 828, 1080, 1440, 1920]) {
    let image = sharp(path.join(source, file));
    if (crop) image = image.extract(crop);
    await image
      .resize({ width })
      .webp({ quality: 86 })
      .toFile(`public/images/product/${name}-${width}.webp`);
  }
}
console.log("Product screenshots optimised.");
