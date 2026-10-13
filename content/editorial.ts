import { pages as enPages, articles as enArticles } from "./en/pages";
import { pages as frPages, articles as frArticles } from "./fr/pages";
import type { Locale } from "@/lib/i18n";
export const editorialPages = { en: enPages, fr: frPages };
export const getArticles = (locale: Locale) =>
  locale === "en" ? enArticles : frArticles;
