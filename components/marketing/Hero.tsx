import Image from "next/image";
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
      <figure className="hero-story">
        <div className="hero-story-photo">
          <Image
            src="/images/lesson.webp"
            alt={d.hero.story.alt}
            width={1440}
            height={960}
            priority
            sizes="(max-width: 959px) calc(100vw - 40px), 42vw"
          />
        </div>
        <ol className="story-beats">
          {d.hero.story.beats.map((beat, index) => (
            <li className={`story-beat story-beat-${index + 1}`} key={beat.time}>
              <span className="story-time">{beat.time}</span>
              <strong>{beat.title}</strong>
              <span className="story-text">{beat.text}</span>
            </li>
          ))}
        </ol>
        <figcaption>
          <span className="status-dot" aria-hidden="true" />
          {d.hero.story.caption}
        </figcaption>
      </figure>
    </section>
  );
}
