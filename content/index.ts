import { en } from "./en/site";
import { fr } from "./fr/site";
import type { Locale } from "@/lib/i18n";
export const dictionaries = { en, fr };
export const getDictionary = (locale: Locale) => dictionaries[locale];
