"use client";
import { useState } from "react";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/lib/i18n";

export function EvidenceViewer({
  d,
  locale,
}: {
  d: Dictionary["viewer"];
  locale: Locale;
}) {
  const fr = locale === "fr";
  const [selected, setSelected] = useState(1);
  const interpretations = fr
    ? [
        "Cette correction pourrait éclairer la reprise observée à la séance 04. Le contexte reste à vérifier.",
        "Cette reprise pourrait être liée à la correction de la séance 02. Le contexte reste à vérifier.",
        "Ce réemploi pourrait être lié à la correction de la séance 02. L’autonomie et le contexte restent à vérifier.",
      ]
    : [
        "This correction may help explain the repair observed in Lesson 04. The context still needs checking.",
        "This repair may relate to the correction in Lesson 02. The context still needs checking.",
        "This reuse may relate to the correction in Lesson 02. Independence and context still need checking.",
      ];
  const initial = interpretations[selected];
  const [source, setSource] = useState<number | null>(null);
  const [status, setStatus] = useState<number | null>(null);
  const [editing, setEditing] = useState(false);
  const [interpretation, setInterpretation] = useState(initial);
  const [draft, setDraft] = useState(initial);
  const moments = [
    {
      lesson: "02",
      time: "12:08",
      event: "Correction",
      speaker: fr ? "Enseignant" : "Teacher",
      quote: "On dit : je suis allé à Lyon.",
      summary: fr
        ? "Consigne → essai → correction"
        : "Prompt → attempt → correction",
      before: "Apprenant : « J’ai allé à Lyon. »",
      after: "Apprenant : « Je suis allé à Lyon. »",
    },
    {
      lesson: "04",
      time: "18:42",
      event: d.attempt,
      speaker: d.learner,
      quote: "Le week-end dernier, j’ai… je suis allé à Lyon.",
      summary: fr ? "Reprise" : "Repair",
      before:
        "Enseignant : « Et le week-end dernier, qu’est-ce que vous avez fait ? »",
      after: "Enseignant : « Avec qui ? »",
    },
    {
      lesson: "07",
      time: "08:16",
      event: d.reuse,
      speaker: d.learner,
      quote: "Le mois dernier, je suis allé à Marseille pour le travail.",
      summary: d.reuse,
      before: "Enseignant : « Racontez-moi un déplacement professionnel. »",
      after: "Apprenant : « J’ai rencontré mes collègues sur place. »",
    },
  ];
  const active = moments[selected];
  const related = selected === 0 ? 1 : 0;
  const relatedLabel =
    selected === 0
      ? fr
        ? "Reprise lors de la séance 04"
        : "Repair in Lesson 04"
      : d.correction;
  function review(index: number) {
    if (index === 1) {
      setDraft(interpretation);
      setEditing(true);
    } else {
      setStatus(index);
      setEditing(false);
    }
  }
  return (
    <section className="viewer-section" id="evidence-viewer">
      <div className="shell">
        <div className="viewer-intro">
          <div>
            <p className="eyebrow">{d.label}</p>
            <h2>{d.title}</h2>
          </div>
          <p>{d.description}</p>
        </div>
        <div className="evidence-viewer">
          <div className="viewer-toolbar">
            <span className="viewer-brand">
              LaSpeak <span>/</span> {d.timeline}
            </span>
            <span className="synthetic-label">
              <span aria-hidden="true" />
              {d.synthetic}
            </span>
          </div>
          <div className="viewer-body">
            <aside className="viewer-timeline" aria-label={d.timeline}>
              <p className="ui-label">{d.timeline}</p>
              <div className="timeline-items">
                {moments.map((moment, i) => (
                  <button
                    key={moment.lesson}
                    className={`timeline-item ${selected === i ? "selected" : ""}`}
                    onClick={() => {
                      setSelected(i);
                      setSource(null);
                      setInterpretation(interpretations[i]);
                      setStatus(null);
                      setEditing(false);
                    }}
                    aria-pressed={selected === i}
                  >
                    <span className="timeline-node" aria-hidden="true" />
                    <span>
                      <strong>
                        {d.lesson} {moment.lesson}
                      </strong>
                      <span>{moment.summary}</span>
                      <span className="timeline-source">
                        {d.source} · {moment.time}{" "}
                        <span aria-hidden="true">↗</span>
                      </span>
                    </span>
                  </button>
                ))}
              </div>
              <p className="timeline-note">
                {fr
                  ? "Chaque moment reste relié à sa séance d’origine."
                  : "Every moment stays connected to the lesson it came from."}
              </p>
            </aside>
            <div className="viewer-detail">
              <div className="excerpt-heading">
                <h3>{d.original}</h3>
                <button
                  className="source-link"
                  onClick={() =>
                    setSource(source === selected ? null : selected)
                  }
                  aria-expanded={source === selected}
                >
                  {d.lesson} {active.lesson} · {active.time}
                  <span aria-hidden="true">↗</span>
                  <span className="sr-only"> · {d.viewSource}</span>
                </button>
              </div>
              <blockquote className="original-quote" lang="fr">
                « {active.quote} »
              </blockquote>
              <dl className="excerpt-meta">
                <div>
                  <dt>{d.speaker}</dt>
                  <dd>{active.speaker}</dd>
                </div>
                <div>
                  <dt>{d.timestamp}</dt>
                  <dd>{active.time}</dd>
                </div>
                <div>
                  <dt>{d.event}</dt>
                  <dd>{active.event}</dd>
                </div>
              </dl>
              {source !== null && (
                <div className="source-context">
                  <div>
                    <strong>
                      {d.source} · {d.lesson} {moments[source].lesson}
                    </strong>
                    <button
                      onClick={() => setSource(null)}
                      aria-label={d.closeSource}
                    >
                      ×
                    </button>
                  </div>
                  <p lang="fr">{moments[source].before}</p>
                  <p lang="fr">
                    {moments[source].speaker} : « {moments[source].quote} »
                  </p>
                  <p lang="fr">{moments[source].after}</p>
                  <small>
                    {d.synthetic} ·{" "}
                    {fr
                      ? "Extrait textuel, sans enregistrement réel."
                      : "Text excerpt, no real recording."}
                  </small>
                </div>
              )}
              <div className="relationship">
                <div>
                  <p className="ui-label">{d.relationship}</p>
                  <button
                    className="source-link"
                    onClick={() =>
                      setSource(source === related ? null : related)
                    }
                    aria-expanded={source === related}
                  >
                    {relatedLabel}
                    <span aria-hidden="true">↗</span>
                  </button>
                </div>
                <span className="possible-label">{d.possible}</span>
              </div>
              <p className="interpretation">{interpretation}</p>
              <div className="teacher-review">
                <p className="ui-label">{d.review}</p>
                <div className="review-actions">
                  {d.actions.map((action, i) => (
                    <button
                      key={action}
                      onClick={() => review(i)}
                      className={
                        status === i ? "chosen" : i === 0 ? "accept" : ""
                      }
                      aria-pressed={status === i}
                    >
                      {i === 0 && <span aria-hidden="true">✓ </span>}
                      {action}
                    </button>
                  ))}
                </div>
                {editing && (
                  <form
                    className="edit-form"
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (draft.trim()) {
                        setInterpretation(draft.trim());
                        setEditing(false);
                        setStatus(1);
                      }
                    }}
                  >
                    <label htmlFor="interpretation">{d.editLabel}</label>
                    <textarea
                      id="interpretation"
                      value={draft}
                      onChange={(e) => setDraft(e.target.value)}
                      rows={3}
                      required
                      maxLength={500}
                      autoFocus
                    />
                    <div className="actions">
                      <button type="submit" className="button button-small">
                        {d.save}
                      </button>
                      <button
                        type="button"
                        className="text-link"
                        onClick={() => setEditing(false)}
                      >
                        {d.cancel}
                      </button>
                    </div>
                  </form>
                )}
                <div className="review-status" role="status" aria-live="polite">
                  {status !== null
                    ? d.statuses[status]
                    : fr
                      ? "En attente de l’examen de l’enseignant."
                      : "Awaiting teacher review."}
                </div>
                {status !== null && (
                  <button
                    className="reset-example"
                    onClick={() => {
                      setStatus(null);
                      setInterpretation(initial);
                      setEditing(false);
                    }}
                  >
                    {d.reset}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <p className="viewer-disclaimer">{d.note}</p>
      </div>
    </section>
  );
}
