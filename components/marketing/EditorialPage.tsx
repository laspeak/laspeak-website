import Image from "next/image";
import { SiteLink as Link } from "@/components/ui/SiteLink";
import { getDictionary } from "@/content";
import { editorialPages, getArticles } from "@/content/editorial";
import { href, type Locale, type PageKey } from "@/lib/i18n";
import { mailto } from "@/lib/site-config";
import { ProductCTA } from "./ProductCTA";
import { LinkedInLink } from "./Footer";
import { FinalCTA } from "./FinalCTA";
import type { EditorialPage as EditorialContent } from "@/content/types";

export function Breadcrumbs({
  locale,
  page,
  title,
}: {
  locale: Locale;
  page: PageKey;
  title: string;
}) {
  const d = getDictionary(locale);
  const article = page === "between-lessons" || page === "transcripts";
  return (
    <nav
      className="breadcrumbs"
      aria-label={locale === "fr" ? "Fil d’Ariane" : "Breadcrumb"}
    >
      <Link href={href(locale)}>{d.nav.home}</Link>
      <span aria-hidden="true">/</span>
      {article && (
        <>
          <Link href={href(locale, "insights")}>{d.nav.insights}</Link>
          <span aria-hidden="true">/</span>
        </>
      )}
      <span aria-current="page">{title}</span>
    </nav>
  );
}
function ReadingBody({
  content,
  locale,
  children,
}: {
  content: EditorialContent;
  locale: Locale;
  children?: React.ReactNode;
}) {
  return (
    <div className="editorial-body">
      <aside className="editorial-sidebar">
        <p>{locale === "fr" ? "Dans cette page" : "On this page"}</p>
        <ol>
          {content.sections.map((s, i) => (
            <li key={s.title}>
              <a href={`#section-${i + 1}`}>{s.title}</a>
            </li>
          ))}
        </ol>
      </aside>
      <div className="prose">
        {content.sections.map((s, i) => (
          <section
            className="prose-section"
            id={`section-${i + 1}`}
            key={s.title}
          >
            <h2>{s.title}</h2>
            {s.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            {s.details ? (
              <dl className="legal-details">
                {s.details.map((detail) => (
                  <div key={`${detail.label}-${detail.value}`}>
                    <dt>{detail.label}</dt>
                    <dd>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          {...(detail.href.startsWith("http")
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                        >
                          {detail.value}
                          {detail.href.startsWith("http") ? (
                            <span aria-hidden="true"> ↗</span>
                          ) : null}
                        </a>
                      ) : (
                        detail.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : null}
            {s.list && (
              <ul>
                {s.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
        {children}
      </div>
    </div>
  );
}
export function EditorialPage({
  locale,
  page,
}: {
  locale: Locale;
  page:
    | "providers"
    | "product"
    | "about"
    | "privacy"
    | "legal"
    | "cookies"
    | "terms";
}) {
  const d = getDictionary(locale);
  const content = editorialPages[locale][page];
  const label = page === "providers" ? d.nav.providers : d.nav[page];
  const isPolicyPage = ["privacy", "legal", "cookies", "terms"].includes(
    page,
  );
  return (
    <>
      <div className="shell">
        <Breadcrumbs locale={locale} page={page} title={label} />
        <header className="editorial-hero">
          <p className="eyebrow">{content.label}</p>
          <h1>{content.title}</h1>
          <p className="intro">{content.intro}</p>
          {content.updated ? (
            <p className="legal-updated">{content.updated}</p>
          ) : null}
          {!isPolicyPage ? (
            <div className="actions">
              <a
                href={mailto(
                  page === "product" ? "product" : "conversation",
                  true,
                  locale,
                )}
                className="button"
              >
                {page === "product" ? d.product.cta : d.nav.talk}
                <span aria-hidden="true">↗</span>
              </a>
              {page === "about" ? <LinkedInLink locale={locale} /> : null}
              {page === "product" ? (
                <span className="ui-label">{d.product.note}</span>
              ) : null}
            </div>
          ) : null}
        </header>
        {page === "providers" && (
          <Image
            src="/images/teacher.webp"
            alt={d.providers.alt}
            className="editorial-image"
            width={1440}
            height={960}
            sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1500px) calc(100vw - 112px), 1320px"
          />
        )}
        {page === "product" && (
          <Image
            src="/images/conversation.webp"
            alt={
              locale === "fr"
                ? "Une adulte échange à distance depuis son espace de travail."
                : "An adult in conversation at her laptop in a calm workspace."
            }
            className="editorial-image"
            width={1440}
            height={960}
            sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1500px) calc(100vw - 112px), 1320px"
          />
        )}
        <ReadingBody content={content} locale={locale}>
          {page === "about" && (
            <div className="founder-signature">
              <Image
                src="/images/founder.webp"
                alt="Denis Gasenchenko"
                width={800}
                height={800}
                className="founder-photo"
                unoptimized
              />
              <div>
                <strong>Denis Gasenchenko</strong>
                <span>{d.founder.role}</span>
              </div>
            </div>
          )}
          {page === "product" && (
            <div className="editorial-aside">
              <a
                className="text-link"
                href={mailto("implementation", true, locale)}
              >
                {d.product.implementation}
                <span aria-hidden="true">↗</span>
              </a>
              <p>
                {locale === "fr"
                  ? "Le périmètre, les responsabilités et les règles de traitement des données sont convenus avant toute mise en œuvre."
                  : "Scope, responsibilities and data-handling rules are agreed before any implementation begins."}
              </p>
            </div>
          )}
          {!isPolicyPage ? (
            <div className="related-article">
              <p>
                {locale === "fr" ? "Pour poursuivre" : "Continue exploring"}
              </p>
              <Link
                href={href(
                  locale,
                  page === "product" ? "providers" : "product",
                )}
              >
                {page === "product" ? d.nav.providers : d.nav.product}
                <span aria-hidden="true"> →</span>
              </Link>
            </div>
          ) : null}
        </ReadingBody>
      </div>
      {isPolicyPage ? null : page === "providers" || page === "about" ? (
        <ProductCTA d={d.product} locale={locale} />
      ) : (
        <FinalCTA d={d.final} locale={locale} />
      )}
    </>
  );
}
export function InsightsPage({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  return (
    <div className="shell">
      <Breadcrumbs locale={locale} page="insights" title={d.nav.insights} />
      <div className="insights-intro">
        <header className="editorial-hero">
          <p className="eyebrow">{d.nav.insights}</p>
          <h1>
            {locale === "fr"
              ? "Prendre le temps\nd’y regarder de près."
              : "A closer look at\nwhat stays."}
          </h1>
          <p className="intro">
            {locale === "fr"
              ? "Des réflexions sur les traces pédagogiques, le contexte et les questions qu’un outil ne peut pas trancher seul."
              : "Notes on teaching, context and the questions software cannot settle on its own."}
          </p>
        </header>
        <Image
          src="/images/conversation.webp"
          alt={
            locale === "fr"
              ? "Une adulte devant son ordinateur, en conversation à distance."
              : "An adult at her laptop during a remote conversation."
          }
          width={828}
          height={552}
          sizes="(max-width: 767px) calc(100vw - 40px), 40vw"
          className="insights-photo"
        />
      </div>
      <div className="article-list">
        {getArticles(locale).map((article, i) => (
          <Link
            key={article.key}
            href={href(locale, article.key)}
            className="article-list-item"
          >
            <span className="article-index" aria-hidden="true">
              0{i + 1}
            </span>
            <div>
              <p className="article-label">{article.label}</p>
              <h2>{article.title}</h2>
              <span className="read-time">{article.readTime}</span>
            </div>
            <p className="article-summary">{article.description}</p>
            <span className="article-arrow" aria-hidden="true">
              ↗
            </span>
          </Link>
        ))}
      </div>
      <FinalCTA d={d.final} locale={locale} />
    </div>
  );
}
export function ArticlePage({
  locale,
  page,
}: {
  locale: Locale;
  page: "between-lessons" | "transcripts";
}) {
  const d = getDictionary(locale);
  const article = getArticles(locale).find((a) => a.key === page)!;
  const other = getArticles(locale).find((a) => a.key !== page)!;
  return (
    <>
      <article className="shell">
        <Breadcrumbs locale={locale} page={page} title={article.label} />
        <header className="editorial-hero">
          <p className="eyebrow">{article.label}</p>
          <h1>{article.title}</h1>
          <p className="intro">{article.intro}</p>
          <div className="article-meta">
            <span>LaSpeak</span>
            <span>{article.readTime}</span>
            <span>
              {locale === "fr"
                ? "Note de réflexion · exemples fictifs"
                : "Reflection · fictional examples"}
            </span>
          </div>
        </header>
        <ReadingBody content={article} locale={locale}>
          <blockquote className="article-pullquote">
            {article.takeaway}
          </blockquote>
          <div className="related-article">
            <p>{locale === "fr" ? "À lire également" : "Read next"}</p>
            <Link href={href(locale, other.key)}>
              {other.title}
              <span aria-hidden="true"> ↗</span>
            </Link>
          </div>
        </ReadingBody>
      </article>
      <ProductCTA d={d.product} locale={locale} />
    </>
  );
}
