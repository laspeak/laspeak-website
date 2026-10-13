import { notFound } from "next/navigation";
import { getDictionary } from "@/content";
import { paths, locales, isLocale, pageKey, type PageKey } from "@/lib/i18n";
import { metadataFor } from "@/lib/seo";
import { Header } from "@/components/marketing/Header";
import { Footer } from "@/components/marketing/Footer";
import { HomePage } from "@/components/marketing/HomePage";
import {
  ArticlePage,
  EditorialPage,
  InsightsPage,
} from "@/components/marketing/EditorialPage";
import { StructuredData } from "@/components/marketing/StructuredData";

type Params = Promise<{ locale: string; slug?: string[] }>;
export const dynamicParams = false;
export function generateStaticParams() {
  return locales.flatMap((locale) =>
    (Object.keys(paths[locale]) as PageKey[]).map((key) => ({
      locale,
      slug: paths[locale][key] ? paths[locale][key].split("/") : [],
    })),
  );
}
async function resolve(params: Params) {
  const { locale, slug = [] } = await params;
  if (!isLocale(locale)) notFound();
  const page = pageKey(locale, slug);
  if (!page) notFound();
  return { locale, page };
}
export async function generateMetadata({ params }: { params: Params }) {
  const { locale, page } = await resolve(params);
  return metadataFor(locale, page);
}
export default async function Page({ params }: { params: Params }) {
  const { locale, page } = await resolve(params);
  const d = getDictionary(locale);
  const metadata = metadataFor(locale, page);
  return (
    <>
      <Header locale={locale} page={page} d={d.nav} />
      <main id="main" tabIndex={-1}>
        {page === "home" ? (
          <HomePage locale={locale} />
        ) : page === "insights" ? (
          <InsightsPage locale={locale} />
        ) : page === "between-lessons" || page === "transcripts" ? (
          <ArticlePage locale={locale} page={page} />
        ) : (
          <EditorialPage locale={locale} page={page} />
        )}
      </main>
      <Footer locale={locale} page={page} />
      <StructuredData
        locale={locale}
        page={page}
        title={String(metadata.title).replace(" | LaSpeak", "")}
      />
    </>
  );
}
