import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";
const source = process.argv[2];
if (!source)
  throw new Error("Usage: npm run images -- /path/to/original-assets");
await mkdir("public/images", { recursive: true });
const photos = [
  ["7.png", "lesson"],
  ["metodist.png", "teacher"],
  ["8.png", "conversation"],
];
for (const [file, name] of photos) {
  for (const width of [192, 256, 384, 640, 828, 1080, 1440, 1920]) {
    await sharp(path.join(source, file))
      .rotate()
      .resize({ width })
      .webp({ quality: 84 })
      .toFile(`public/images/${name}-${width}.webp`);
  }
}
await sharp(path.join(source, "La-Speak-Logo.png"))
  .trim()
  .resize({ width: 480 })
  .webp({ quality: 95 })
  .toFile("public/images/wordmark.webp");
const mark = await sharp(path.join(source, "La-Speak-Logo.png"))
  .extract({ left: 0, top: 0, width: 530, height: 594 })
  .png()
  .toBuffer();
await sharp(mark)
  .trim()
  .resize(112, 112, { fit: "contain", background: "#c4b1f9" })
  .extend({ top: 8, bottom: 8, left: 8, right: 8, background: "#c4b1f9" })
  .flatten({ background: "#c4b1f9" })
  .png()
  .toFile("public/icon.png");
console.log("Responsive photography and supplied wordmark optimised.");
