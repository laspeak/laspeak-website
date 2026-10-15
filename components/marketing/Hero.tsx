import type { Dictionary } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { mailto } from "@/lib/site-config";

export function Hero({ d, locale }: { d: Dictionary; locale: Locale }) {
  const v = d.viewer;
  return (
    <section className="shell hero">
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
          <a
            className="button"
            href={mailto("conversation", true, locale)}
          >
            {d.hero.cta}
            <span aria-hidden="true">↗</span>
          </a>
          <a className="text-link" href="#how-it-works">
            {d.hero.secondary}
            <span aria-hidden="true">↓</span>
          </a>
        </div>
        <p className="hero-note">{d.hero.note}</p>
      </div>
      <figure
        className="hero-evidence"
        aria-label={`${v.illustrative}. ${v.synthetic}.`}
      >
        <div className="evidence-heading">
          <span>{v.illustrative}</span>
          <span>{v.synthetic}</span>
        </div>
        <div className="evidence-thread">
          <div className="thread-start">
            <span className="source-tag">{v.lesson} 03</span>
            <span className="thread-time">09:14</span>
          </div>
          <div className="fragment prompt-fragment">
            <p className="fragment-label">{v.prompt}</p>
            <blockquote lang="fr">
              « Qu’est-ce que vous avez fait ce week-end ? »
            </blockquote>
          </div>
          <div className="fragment attempt-fragment">
            <div className="fragment-label">
              <span>{v.attempt}</span>
              <span aria-hidden="true">↳</span>
            </div>
            <blockquote lang="fr">
              « Je suis allé à Lyon avec mes amis. »
            </blockquote>
            <span className="fragment-source">
              {v.source} · {v.lesson} 03 · 09:26
            </span>
          </div>
          <div className="thread-gap">
            <span>
              {locale === "fr"
                ? "Trois séances plus tard"
                : "Three lessons later"}
            </span>
            <span aria-hidden="true">↓</span>
          </div>
          <div className="thread-start">
            <span className="source-tag">{v.lesson} 06</span>
            <span className="thread-time">18:42</span>
          </div>
          <div className="fragment reuse-fragment">
            <div className="fragment-label">
              <span>{v.reuse}</span>
              <span className="connection-symbol" aria-hidden="true">
                ↗
              </span>
            </div>
            <blockquote lang="fr">
              « Le mois dernier, <mark>je suis allé</mark> à Marseille… »
            </blockquote>
            <span className="fragment-source">
              {v.source} · {v.lesson} 06 · 18:42
            </span>
          </div>
        </div>
        <figcaption>
          <span className="status-dot" aria-hidden="true" />
          {locale === "fr"
            ? "Un lien à examiner. Pas une conclusion."
            : "A connection to review. Not a conclusion."}
        </figcaption>
      </figure>
    </section>
  );
}
