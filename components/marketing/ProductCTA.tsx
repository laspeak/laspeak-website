import { SiteLink as Link } from "@/components/ui/SiteLink";
import type { Dictionary } from "@/content/types";
import { href, type Locale } from "@/lib/i18n";
import { mailto } from "@/lib/site-config";
export function ProductCTA({
  d,
  locale,
}: {
  d: Dictionary["product"];
  locale: Locale;
}) {
  return (
    <section className="product-cta">
      <div className="shell product-grid">
        <div>
          <p className="eyebrow">{d.label}</p>
          <h2>{d.title}</h2>
        </div>
        <div className="product-copy">
          {d.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <a href={mailto("product", true, locale)} className="button">
            {d.cta}
            <span aria-hidden="true">↗</span>
          </a>
          <p className="cta-note">{d.note}</p>
          <a href={mailto("implementation", true, locale)} className="text-link">
            {d.implementation}
            <span aria-hidden="true">↗</span>
          </a>
          <Link href={href(locale, "product")} className="product-details">
            {locale === "fr"
              ? "Découvrir le produit"
              : "Explore the product"}{" "}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
