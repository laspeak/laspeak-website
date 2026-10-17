import { SiteLink as Link } from "@/components/ui/SiteLink";
import { getDictionary } from "@/content";
import type { Locale } from "@/lib/i18n";
import { href } from "@/lib/i18n";
import { mailto } from "@/lib/site-config";
import { Hero } from "./Hero";
import { FounderSection } from "./FounderSection";
import { FinalCTA } from "./FinalCTA";

export function HomePage({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  return (
    <>
      <Hero d={d} locale={locale} />

      <section className="fragmentation-section" id="how-it-works">
        <div className="shell section">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">{d.problem.label}</p>
              <h2>{d.problem.title}</h2>
            </div>
            <p>{d.problem.description}</p>
          </div>
          <div className="friction-grid">
            {d.problem.items.map((item, index) => (
              <article key={item.role}>
                <div className="card-kicker"><span>0{index + 1}</span>{item.role}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell section role-section">
        <div className="section-heading">
          <p className="eyebrow">{d.roles.label}</p>
          <h2>{d.roles.title}</h2>
          <p>{d.roles.description}</p>
        </div>
        <div className="role-routes">
          {d.roles.items.map((item, index) => (
            <article className={`role-route route-${item.key}`} key={item.key}>
              <header>
                <span>0{index + 1}</span>
                <p>{item.role}</p>
              </header>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <ol aria-label={`${item.role} workflow`}>
                {item.route.map((step) => <li key={step}>{step}</li>)}
              </ol>
            </article>
          ))}
        </div>
      </section>

      <section className="cycle-section">
        <div className="shell section">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">{d.cycle.label}</p>
              <h2>{d.cycle.title}</h2>
            </div>
            <p>{d.cycle.description}</p>
          </div>
          <ol className="cycle-track">
            {d.cycle.steps.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </li>
            ))}
          </ol>
          <p className="cycle-caption">{d.cycle.caption}</p>
        </div>
      </section>

      <section className="shell section layer-section">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">{d.layers.label}</p>
            <h2>{d.layers.title}</h2>
          </div>
          <p>{d.layers.description}</p>
        </div>
        <div className="layer-stack">
          {d.layers.items.map((layer) => (
            <article className={`layer-row status-${layer.tone}`} key={layer.number}>
              <span className="layer-number">{layer.number}</span>
              <div>
                <h3>{layer.title}</h3>
                <p>{layer.purpose}</p>
              </div>
              <ul>{layer.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
              <span className="status-pill">{layer.status}</span>
            </article>
          ))}
        </div>
        <Link className="text-link section-link" href={href(locale, "product")}>
          {d.product.cta}<span aria-hidden="true">→</span>
        </Link>
      </section>

      <section className="foundation-section">
        <div className="shell section">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">{d.foundation.label}</p>
              <h2>{d.foundation.title}</h2>
            </div>
            <p>{d.foundation.description}</p>
          </div>
          <div className="foundation-grid">
            {d.foundation.columns.map((column) => (
              <article className={`foundation-card status-${column.tone}`} key={column.title}>
                <span className="status-pill">{column.status}</span>
                <h3>{column.title}</h3>
                <p>{column.text}</p>
                <ul>{column.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell section why-platform-section">
        <div>
          <p className="eyebrow">{d.why.label}</p>
          <h2>{d.why.title}</h2>
        </div>
        <div className="why-platform-list">
          {d.why.items.map(([title, text], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pricing-section">
        <div className="shell section">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">{d.pricing.label}</p>
              <h2>{d.pricing.title}</h2>
            </div>
            <p>{d.pricing.description}</p>
          </div>
          <div className="pricing-grid">
            {d.pricing.tiers.map((tier) => (
              <article className={tier.featured ? "price-card featured" : "price-card"} key={tier.name}>
                <p className="price-name">{tier.name}</p>
                <p className="price"><strong>{tier.price}</strong><span>{tier.unit}</span></p>
                <ul>{tier.allowances.map((allowance) => <li key={allowance}>{allowance}</li>)}</ul>
              </article>
            ))}
          </div>
          <div className="pricing-footer">
            <p>{d.pricing.footnote}</p>
            <Link className="button" href={href(locale, "pricing")}>{d.pricing.cta}<span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="shell section trust-section">
        <div className="trust-intro">
          <p className="eyebrow">{d.trust.label}</p>
          <h2>{d.trust.title}</h2>
          <p>{d.trust.description}</p>
          <Link className="text-link" href={href(locale, "trust")}>{d.trust.cta}<span aria-hidden="true">→</span></Link>
        </div>
        <div className="trust-grid">
          {d.trust.items.map(([title, text], index) => (
            <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>

      <FounderSection d={d.founder} locale={locale} />
      <section className="pilot-band">
        <div className="shell pilot-band-inner">
          <div><p className="eyebrow">{d.pilot.label}</p><h2>{d.pilot.title}</h2></div>
          <div className="pilot-price"><strong>{d.pilot.price}</strong><p>{d.pilot.description}</p></div>
          <div><a className="button" href={mailto("pilot", true, locale)}>{d.pilot.cta}<span aria-hidden="true">↗</span></a><p className="cta-note">{d.pilot.note}</p></div>
        </div>
      </section>
      <FinalCTA d={d.final} locale={locale} />
    </>
  );
}
