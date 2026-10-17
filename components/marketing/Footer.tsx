import Image from "next/image";
import { SiteLink as Link } from "@/components/ui/SiteLink";
import { getDictionary } from "@/content";
import { href, type Locale, type PageKey } from "@/lib/i18n";
import { emailHref, siteConfig } from "@/lib/site-config";
import { ThemeToggle } from "./ThemeToggle";

export function LinkedInLink({
  locale,
  compact = false,
  profile = "founder",
}: {
  locale: Locale;
  compact?: boolean;
  profile?: "brand" | "founder";
}) {
  const d = getDictionary(locale);
  const url =
    profile === "brand"
      ? siteConfig.BRAND_LINKEDIN_URL
      : siteConfig.FOUNDER_LINKEDIN_URL;
  const label =
    profile === "brand"
      ? locale === "fr"
        ? "LaSpeak sur LinkedIn"
        : "LaSpeak on LinkedIn"
      : d.founder.linkedin;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={compact ? "" : "text-link"}
      aria-label={compact ? label : undefined}
    >
      {profile === "brand" ? (
        <Image
          src="/icons/linkedin-brand.svg"
          alt=""
          width={38}
          height={40}
          className="linkedin-brand-icon"
          unoptimized
        />
      ) : null}
      {compact ? "LinkedIn" : label}
      <span aria-hidden="true"> ↗</span>
    </a>
  );
}

export function Footer({ locale, page }: { locale: Locale; page: PageKey }) {
  const d = getDictionary(locale);
  const emailDirectory = [
    [d.footer.emailLabels.general, siteConfig.HELLO_EMAIL],
    [d.footer.emailLabels.founder, siteConfig.FOUNDER_EMAIL],
    [d.footer.emailLabels.support, siteConfig.SUPPORT_EMAIL],
    [d.footer.emailLabels.privacy, siteConfig.PRIVACY_EMAIL],
  ] as const;
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
            <Link href={href(locale, "product")}>{d.nav.product}</Link>
            <Link href={href(locale, "providers")}>{d.nav.providers}</Link>
            <Link href={href(locale, "pricing")}>{d.nav.pricing}</Link>
            <Link href={href(locale, "trust")}>{d.nav.trust}</Link>
            <Link href={href(locale, "insights")}>{d.nav.insights}</Link>
            <Link href={href(locale, "privacy")}>{d.nav.privacy}</Link>
            <Link href={href(locale, "legal")}>{d.nav.legal}</Link>
            <Link href={href(locale, "cookies")}>{d.nav.cookies}</Link>
            <Link href={href(locale, "terms")}>{d.nav.terms}</Link>
            <LinkedInLink locale={locale} compact profile="brand" />
          </nav>
        </div>
        <nav
          className="footer-email-directory"
          aria-label={locale === "fr" ? "Adresses email" : "Email addresses"}
        >
          {emailDirectory.map(([label, email]) => (
            <a href={emailHref(email)} key={email}>
              <span>{label}</span>
              {email}
            </a>
          ))}
        </nav>
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
