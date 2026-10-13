import { SiteLink as Link } from "@/components/ui/SiteLink";
import type { Dictionary } from "@/content/types";
import { href, type Locale } from "@/lib/i18n";
import { LinkedInLink } from "./Footer";
export function FounderSection({
  d,
  locale,
}: {
  d: Dictionary["founder"];
  locale: Locale;
}) {
  return (
    <section className="shell section founder-section">
      <div>
        <p className="eyebrow">{d.label}</p>
        <h2>{d.title}</h2>
      </div>
      <div className="founder-copy">
        {d.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <div className="founder-signature">
          <span className="founder-monogram" aria-hidden="true">
            dg.
          </span>
          <div>
            <strong>Denis Gasenchenko</strong>
            <span>{d.role}</span>
          </div>
        </div>
        <div className="founder-links">
          <LinkedInLink locale={locale} />
          <Link href={href(locale, "about")} className="text-link">
            {d.more}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
