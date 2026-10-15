export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];
export type PageKey =
  | "home"
  | "providers"
  | "product"
  | "about"
  | "insights"
  | "privacy"
  | "legal"
  | "cookies"
  | "terms"
  | "between-lessons"
  | "transcripts";
export const paths: Record<Locale, Record<PageKey, string>> = {
  en: {
    home: "",
    providers: "for-language-providers",
    product: "product",
    about: "about",
    insights: "insights",
    privacy: "privacy",
    legal: "legal-notice",
    cookies: "cookies",
    terms: "terms-of-use",
    "between-lessons": "insights/what-gets-lost-between-language-lessons",
    transcripts: "insights/transcripts-and-learning-evidence",
  },
  fr: {
    home: "",
    providers: "pour-les-organismes-fle",
    product: "produit",
    about: "a-propos",
    insights: "ressources",
    privacy: "confidentialite",
    legal: "mentions-legales",
    cookies: "cookies",
    terms: "conditions-utilisation",
    "between-lessons": "ressources/que-perd-on-entre-deux-cours-de-langue",
    transcripts: "ressources/transcription-et-traces-pedagogiques",
  },
};
export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
export function href(locale: Locale, page: PageKey = "home") {
  return `/${locale}/${paths[locale][page] ? `${paths[locale][page]}/` : ""}`;
}
export function pageKey(locale: Locale, slug: string[]): PageKey | undefined {
  return (Object.keys(paths[locale]) as PageKey[]).find(
    (k) => paths[locale][k] === slug.join("/"),
  );
}
