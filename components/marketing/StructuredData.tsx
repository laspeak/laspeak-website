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
    },
    {
      "@type": "Person",
      "@id": `${siteConfig.SITE_URL}/#denis`,
      name: "Denis Gasenchenko",
      jobTitle: locale === "fr" ? "Fondateur de LaSpeak" : "Founder of LaSpeak",
      url: absolute(href(locale, "about")),
      ...(siteConfig.LINKEDIN_URL ? { sameAs: [siteConfig.LINKEDIN_URL] } : {}),
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
