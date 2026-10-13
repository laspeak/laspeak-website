import type { Dictionary } from "@/content/types";
export function EvidenceJourney({ d }: { d: Dictionary }) {
  return (
    <section className="section shell journey-section" id="how-it-works">
      <div className="section-intro">
        <p className="eyebrow">{d.journey.label}</p>
        <div>
          <h2>{d.journey.title}</h2>
          <p>{d.journey.description}</p>
        </div>
      </div>
      <div className="journey-header">
        <span>{d.viewer.illustrative}</span>
        <span>{d.viewer.synthetic}</span>
      </div>
      <ol className="journey-list">
        {d.journey.steps.map(([title, example], i) => (
          <li key={title}>
            <span className="journey-number">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3>{title}</h3>
              <p lang={i < 5 ? "fr" : undefined}>{example}</p>
            </div>
            <span className="journey-arrow" aria-hidden="true">
              {i === 5 ? "↵" : "↓"}
            </span>
          </li>
        ))}
      </ol>
      <div className="distinction">
        <h3>{d.journey.distinction}</h3>
        <div>
          <p>{d.journey.observation}</p>
          <p>{d.journey.interpretation}</p>
        </div>
      </div>
    </section>
  );
}
