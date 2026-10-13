import Image from "next/image";
import { SiteLink as Link } from "@/components/ui/SiteLink";
import { getDictionary } from "@/content";
import { href, type Locale, type PageKey } from "@/lib/i18n";
import { mailto, siteConfig } from "@/lib/site-config";
import { ThemeToggle } from "./ThemeToggle";

export function LinkedInLink({
  locale,
  compact = false,
}: {
  locale: Locale;
  compact?: boolean;
}) {
  const d = getDictionary(locale);
  return siteConfig.LINKEDIN_URL ? (
    <a
      href={siteConfig.LINKEDIN_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={compact ? "" : "text-link"}
    >
      {compact ? "LinkedIn" : d.founder.linkedin}
      <span aria-hidden="true"> ↗</span>
    </a>
  ) : (
    <span
      className={compact ? "unavailable-link" : "text-link unavailable-link"}
      aria-disabled="true"
      title={d.founder.linkedinPending}
    >
      {compact ? "LinkedIn" : d.founder.linkedin}
      <span className="sr-only"> · {d.founder.linkedinPending}</span>
    </span>
  );
}

export function Footer({ locale, page }: { locale: Locale; page: PageKey }) {
  const d = getDictionary(locale);
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-top">
          <div>
            <Link
              href={href(locale)}
              className="brand"
              aria-label={`LaSpeak · ${d.nav.home}`}
            >
              <Image
                src="/images/wordmark.webp"
                alt="LaSpeak"
                width={160}
                height={34}
                unoptimized
              />
            </Link>
            <p className="footer-motto">{d.footer.statement}</p>
          </div>
          <nav
            aria-label={locale === "fr" ? "Pied de page" : "Footer"}
            className="footer-links"
          >
            <Link href={href(locale, "insights")}>{d.nav.insights}</Link>
            <Link href={href(locale, "privacy")}>{d.nav.privacy}</Link>
            <a href={mailto("conversation", false)}>{d.nav.contact}</a>
            <LinkedInLink locale={locale} compact />
          </nav>
        </div>
        <div className="footer-bottom">
          <p>{d.footer.development}</p>
          <div className="footer-languages">
            <Link href={href("en", page)} lang="en" hrefLang="en">
              English
            </Link>
            <Link href={href("fr", page)} lang="fr" hrefLang="fr">
              Français
            </Link>
            <ThemeToggle label={d.footer.theme} />
          </div>
        </div>
      </div>
    </footer>
  );
}
