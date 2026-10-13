import Image from "next/image";
import { getDictionary } from "@/content";
import type { Locale } from "@/lib/i18n";
import { Hero } from "./Hero";
import { EvidenceJourney } from "./EvidenceJourney";
import { EvidenceViewer } from "./EvidenceViewer";
import { ProviderSection } from "./ProviderSection";
import { ResearchCTA } from "./ResearchCTA";
import { FounderSection } from "./FounderSection";
import { FinalCTA } from "./FinalCTA";

export function HomePage({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  return (
    <>
      <Hero d={d} locale={locale} />
      <section className="shell story-section">
        <div className="story-photo">
          <Image
            src="/images/lesson.webp"
            alt={d.story.alt}
            width={1440}
            height={960}
            sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1200px) 58vw, 720px"
          />
          <span className="photo-corner" aria-hidden="true">
            ↙
          </span>
        </div>
        <div className="story-copy">
          <p className="eyebrow">{d.story.label}</p>
          <h2>{d.story.title}</h2>
          <p>{d.story.text}</p>
          <p className="story-caption">{d.story.caption}</p>
        </div>
      </section>
      <section className="shell section problem-section">
        <div>
          <p className="eyebrow">{d.problem.label}</p>
          <h2>
            {d.problem.title}
            <br />
            <span>{d.problem.muted}</span>
          </h2>
        </div>
        <div className="problem-lines">
          {d.problem.lines.map(([name, text], i) => (
            <p key={name}>
              <span className="line-number">0{i + 1}</span>
              <span>
                <strong>{name}</strong> {text}
              </span>
            </p>
          ))}
          <p className="problem-question">{d.problem.question}</p>
        </div>
      </section>
      <EvidenceJourney d={d} />
      <EvidenceViewer d={d.viewer} locale={locale} />
      <section className="shell section why-section">
        <div>
          <p className="eyebrow">{d.why.label}</p>
          <h2>{d.why.title}</h2>
        </div>
        <div className="why-lines">
          {d.why.items.map(([title, text], i) => (
            <div key={title}>
              <span className="why-number">0{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="definition-section">
        <div className="shell definition-grid">
          <div>
            <h2>{d.why.is}</h2>
            <p>{d.why.isText}</p>
          </div>
          <div className="not-list">
            <p>
              {locale === "fr"
                ? "Ce que LaSpeak n’est pas"
                : "What LaSpeak is not"}
            </p>
            <ul>
              {d.why.exclusions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <ProviderSection d={d.providers} locale={locale} />
      <ResearchCTA d={d.research} locale={locale} />
      <FounderSection d={d.founder} locale={locale} />
      <FinalCTA d={d.final} />
    </>
  );
}
