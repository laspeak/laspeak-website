import { SiteLink as Link } from "@/components/ui/SiteLink";
import type { Dictionary } from "@/content/types";
import { href, type Locale } from "@/lib/i18n";
import { mailto } from "@/lib/site-config";
export function ResearchCTA({
  d,
  locale,
}: {
  d: Dictionary["research"];
  locale: Locale;
}) {
  return (
    <section className="research-cta">
      <div className="shell research-grid">
        <div>
          <p className="eyebrow">{d.label}</p>
          <h2>{d.title}</h2>
        </div>
        <div className="research-copy">
          {d.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <a href={mailto("research")} className="button">
            {d.cta}
            <span aria-hidden="true">↗</span>
          </a>
          <p className="cta-note">{d.note}</p>
          <a href={mailto("pilot")} className="text-link">
            {d.pilot}
            <span aria-hidden="true">↗</span>
          </a>
          <Link href={href(locale, "research")} className="research-details">
            {locale === "fr"
              ? "Notre démarche de recherche"
              : "Our research approach"}{" "}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
