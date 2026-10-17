import { absolute } from "@/lib/seo";
import { href, type Locale, type PageKey } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";
import { getDictionary } from "@/content";
export function StructuredData({
  locale,
  page,
  title,
}: {
  locale: Locale;
  page: PageKey;
  title: string;
}) {
  const d = getDictionary(locale);
  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebSite",
      "@id": `${siteConfig.SITE_URL}/#website`,
      name: "LaSpeak",
      url: siteConfig.SITE_URL,
      inLanguage: ["en", "fr"],
      creator: { "@id": `${siteConfig.SITE_URL}/#denis` },
      about: { "@id": `${siteConfig.SITE_URL}/#brand` },
    },
    {
      "@type": "Brand",
      "@id": `${siteConfig.SITE_URL}/#brand`,
      name: "LaSpeak",
      url: siteConfig.SITE_URL,
      logo: absolute("/icon.png"),
      sameAs: [siteConfig.BRAND_LINKEDIN_URL],
    },
    {
      "@type": "Product",
      "@id": `${siteConfig.SITE_URL}/#platform`,
      name: "LaSpeak",
      category: "Language school management and learning platform",
      description:
        locale === "fr"
          ? "Plateforme pédagogique et opérationnelle pour les écoles de langues indépendantes."
          : "Learning and operating platform for independent language schools.",
      brand: { "@id": `${siteConfig.SITE_URL}/#brand` },
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          locale === "fr"
            ? "Écoles de langues indépendantes"
            : "Independent language schools",
      },
    },
    {
      "@type": "Person",
      "@id": `${siteConfig.SITE_URL}/#denis`,
      name: "Denis Gasenchenko",
      jobTitle: locale === "fr" ? "Fondateur de LaSpeak" : "Founder of LaSpeak",
      url: absolute(href(locale, "about")),
      image: absolute("/images/founder.webp"),
      sameAs: [siteConfig.FOUNDER_LINKEDIN_URL],
    },
  ];
  if (page !== "home") {
    const isArticle = page === "between-lessons" || page === "transcripts";
    const items = [{ name: d.nav.home, item: absolute(href(locale)) }];
    if (isArticle)
      items.push({
        name: d.nav.insights,
        item: absolute(href(locale, "insights")),
      });
    items.push({ name: title, item: absolute(href(locale, page)) });
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        ...item,
      })),
    });
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        }).replace(/</g, "\\u003c"),
      }}
    />
  );
}
