import type { MetadataRoute } from "next";
import { href, locales, paths, type PageKey } from "@/lib/i18n";
import { absolute } from "@/lib/seo";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    (Object.keys(paths[locale]) as PageKey[]).map((key) => ({
      url: absolute(href(locale, key)),
      alternates: {
        languages: {
          en: absolute(href("en", key)),
          fr: absolute(href("fr", key)),
          "x-default": absolute(href("en", key)),
        },
      },
    })),
  );
}
