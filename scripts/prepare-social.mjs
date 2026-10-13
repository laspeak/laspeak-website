import sharp from "sharp";
const fontfile = "scripts/fonts/Onest.ttf";
for (const locale of ["en", "fr"]) {
  const title =
    locale === "en"
      ? "Learning evidence that\nsurvives the lesson."
      : "Garder le fil.\nD’un cours à l’autre.";
  const label =
    locale === "en"
      ? "Teacher-reviewed evidence across language lessons"
      : "Des traces pédagogiques, examinées par les enseignants";
  const status =
    locale === "en"
      ? "Early-stage research &amp; development"
      : "Un projet en recherche et développement";
  const text = async (value, size, color, width) =>
    sharp({
      text: {
        text: `<span foreground="${color}">${value}</span>`,
        font: `Onest ${size}`,
        fontfile,
        width,
        rgba: true,
        spacing: 8,
        dpi: 72,
      },
    })
      .png()
      .toBuffer();
  await sharp({
    create: { width: 1200, height: 630, channels: 4, background: "#f7f6f2" },
  })
    .composite([
      {
        input: await sharp("public/images/wordmark.webp")
          .resize({ width: 220 })
          .png()
          .toBuffer(),
        left: 70,
        top: 58,
      },
      { input: await text(label, 22, "#67645f", 1040), left: 70, top: 156 },
      { input: await text(title, 72, "#171717", 1050), left: 66, top: 230 },
      {
        input: {
          create: {
            width: 1060,
            height: 3,
            channels: 4,
            background: "#c4b1f9",
          },
        },
        left: 70,
        top: 494,
      },
      { input: await text(status, 20, "#67645f", 1000), left: 70, top: 536 },
    ])
    .png()
    .toFile(`public/images/og-${locale}.png`);
}
console.log("Bilingual 1200×630 social images generated with Onest.");
