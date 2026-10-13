import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
export const dynamic = "force-static";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        ...(siteConfig.INDEXABLE ? { allow: "/" } : { disallow: "/" }),
      },
    ],
    sitemap: `${siteConfig.SITE_URL}/sitemap.xml`,
  };
}
