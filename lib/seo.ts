import type { Metadata } from "next";
import { href, type Locale, type PageKey } from "./i18n";
import { siteConfig } from "./site-config";
import { editorialPages, getArticles } from "@/content/editorial";

const homeMeta = {
  en: {
    title: "LaSpeak — One school. Every lesson connected.",
    description:
      "The learning and operating platform connecting schedules, live teaching, materials, homework, messages and student progress for independent language schools.",
  },
  fr: {
    title: "LaSpeak — Une école. Tous les cours reliés.",
    description:
      "La plateforme pédagogique et opérationnelle qui relie planning, cours en direct, supports, devoirs, messages et progression pour les écoles de langues indépendantes.",
  },
};
const insightsMeta = {
  en: {
    title: "Insights on teaching, context and learning evidence",
    description:
      "Thoughtful notes on what gets lost between language lessons, the limits of transcripts and the role of teacher judgement in LaSpeak.",
  },
  fr: {
    title: "Ressources : traces et continuité pédagogique en FLE",
    description:
      "Réflexions sur les traces issues des cours de langue, la continuité pédagogique et les limites des transcriptions. Des pistes à examiner avec les enseignants.",
  },
};
export const absolute = (path: string) => `${siteConfig.SITE_URL}${path}`;
export function metadataFor(locale: Locale, key: PageKey): Metadata {
  let content: { title: string; description: string };
  if (key === "home") content = homeMeta[locale];
  else if (key === "insights") content = insightsMeta[locale];
  else if (key === "between-lessons" || key === "transcripts")
    content = getArticles(locale).find((a) => a.key === key)!;
  else content = editorialPages[locale][key];
  const title =
    key === "home"
      ? content.title
      : `${content.title.replace(/\n/g, " ")} | LaSpeak`;
  const url = absolute(href(locale, key));
  return {
    title,
    description: content.description,
    metadataBase: new URL(siteConfig.SITE_URL),
    icons: { icon: "/icon.png", apple: "/icon.png" },
    alternates: {
      canonical: url,
      languages: {
        en: absolute(href("en", key)),
        fr: absolute(href("fr", key)),
        "x-default": absolute(href("en", key)),
      },
    },
    robots: { index: siteConfig.INDEXABLE, follow: true },
    openGraph: {
      type:
        key === "between-lessons" || key === "transcripts"
          ? "article"
          : "website",
      title,
      description: content.description,
      url,
      siteName: "LaSpeak",
      locale: locale === "fr" ? "fr_FR" : "en_GB",
      alternateLocale: locale === "fr" ? ["en_GB"] : ["fr_FR"],
      images: [
        {
          url: `/images/og-${locale}.png`,
          width: 1200,
          height: 630,
          alt:
            locale === "fr"
              ? "LaSpeak : une école, tous les cours reliés."
              : "LaSpeak: one school, every lesson connected.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: content.description,
      images: [`/images/og-${locale}.png`],
    },
  };
}
