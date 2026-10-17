import { SiteLink as Link } from "@/components/ui/SiteLink";
import type { Dictionary } from "@/content/types";
import { href, type Locale } from "@/lib/i18n";
import { mailto } from "@/lib/site-config";

export function Hero({ d, locale }: { d: Dictionary; locale: Locale }) {
  return (
    <section className="shell hero platform-hero">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="tiny-mark" aria-hidden="true" />
          {d.hero.context}
        </p>
        <h1>
          {d.hero.title}
          <br /> <span className="hero-accent">{d.hero.accent}</span>
        </h1>
        <p className="hero-description">{d.hero.description}</p>
        <div className="actions">
          <Link className="button" href={href(locale, "product")}>
            {d.hero.cta}
            <span aria-hidden="true">→</span>
          </Link>
          <a className="text-link" href={mailto("pilot", true, locale)}>
            {d.hero.secondary}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
        <p className="hero-note">{d.hero.note}</p>
      </div>
      <div className="orbit-map" aria-label={`${d.hero.centre}: ${d.hero.orbit.join(", ")}`}>
        <div className="orbit-ring orbit-ring-one" aria-hidden="true" />
        <div className="orbit-ring orbit-ring-two" aria-hidden="true" />
        <div className="orbit-centre">
          <span>LaSpeak</span>
          <strong>{d.hero.centre}</strong>
        </div>
        {d.hero.orbit.map((item, index) => (
          <span className={`orbit-item orbit-item-${index + 1}`} key={item}>
            <i aria-hidden="true">0{index + 1}</i>
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
