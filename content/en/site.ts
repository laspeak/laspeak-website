import type { Dictionary } from "../types";
export const en: Dictionary = {
  nav: {
    how: "How it works",
    providers: "For providers",
    research: "Research",
    about: "About",
    talk: "Talk to us",
    menu: "Menu",
    close: "Close",
    skip: "Skip to content",
    home: "Home",
    insights: "Insights",
    privacy: "Privacy",
    contact: "Contact",
  },
  hero: {
    context: "Teacher-reviewed evidence across language lessons",
    title: "Learning evidence that",
    accent: "survives the lesson.",
    description:
      "LaSpeak connects prompts, learner attempts, corrections, repairs and later independent use across lessons, while preserving the original context and keeping teachers in control.",
    cta: "Talk to the founder",
    secondary: "See how it works",
    note: "In development. Built around teachers, not instead of them.",
  },
  story: {
    label: "The lesson is only the beginning",
    title: "A lesson produces more than a recording.",
    text: "A prompt. A hesitation. A correction that clicks. A phrase used again, three lessons later. Useful context can disappear into recordings, notes and isolated reports. LaSpeak is designed to help keep the thread.",
    alt: "An adult learner wearing headphones speaks with a teacher on a laptop.",
    caption:
      "The human exchange comes first. The evidence should stay connected to it.",
  },
  problem: {
    label: "The gap between lessons",
    title: "Lesson reports tell you what happened.",
    muted: "Not necessarily what the learner can use.",
    lines: [
      ["Attendance", "shows presence."],
      ["Curriculum", "shows coverage."],
      ["A transcript", "shows what was said."],
    ],
    question:
      "But was that language prompted, corrected, repaired, or later used independently?",
  },
  journey: {
    label: "How it works",
    title: "Follow the language.\nKeep the context.",
    description:
      "An illustrative sequence, not a score. LaSpeak is designed to connect moments that a teacher may want to review together.",
    steps: [
      [
        "Teacher model / prompt",
        "« Qu’est-ce que vous avez fait ce week-end ? »",
      ],
      ["Learner attempt", "« J’ai allé à Lyon. »"],
      ["Correction", "« On dit : je suis allé à Lyon. »"],
      ["Repair", "« Oui, je suis allé à Lyon. »"],
      [
        "Later independent reuse",
        "« Le mois dernier, je suis allé à Marseille. »",
      ],
      ["Teacher review", "Is this a useful connection? The teacher decides."],
    ],
    distinction: "Observation ≠ interpretation.",
    observation:
      "Observation: the learner said « je suis allé » in two different lessons.",
    interpretation:
      "Interpretation: the later use may relate to an earlier correction. That is a possibility to review, not proof of mastery.",
  },
  viewer: {
    label: "A closer look",
    title: "An interpretation is only useful if you can check it.",
    description:
      "Return to the excerpt. See the surrounding exchange. Accept the connection, adjust it, or leave it open.",
    synthetic: "Synthetic example",
    illustrative: "Illustrative interface",
    lesson: "Lesson",
    prompt: "Teacher prompt",
    attempt: "Learner attempt",
    reuse: "Possible independent reuse",
    possible: "Possible match",
    source: "Source",
    original: "Original excerpt",
    speaker: "Speaker",
    learner: "Learner",
    timestamp: "Timestamp",
    event: "Event",
    relationship: "Possible relationship",
    correction: "Correction in Lesson 02",
    review: "Teacher review",
    actions: ["Accept", "Edit", "Reject", "Defer"],
    timeline: "Across lessons",
    note: "Explore this example. Review choices stay in this page only; nothing is saved or assessed.",
    reset: "Reset example",
    editLabel: "Your interpretation",
    save: "Save in this example",
    cancel: "Cancel",
    statuses: [
      "Connection accepted in this example.",
      "Interpretation edited in this example.",
      "Connection rejected in this example.",
      "Review deferred in this example.",
    ],
    viewSource: "View source",
    closeSource: "Close source",
  },
  why: {
    label: "Why LaSpeak",
    title: "More context.\nNot more certainty.",
    items: [
      [
        "Across lessons",
        "Not another single-lesson summary. Follow a possible connection over time.",
      ],
      [
        "Source-linked",
        "Every proposed interpretation points back to its original context.",
      ],
      [
        "Teacher-controlled",
        "AI proposes; teachers decide. Accept, edit, reject or defer.",
      ],
      [
        "Uncertainty-aware",
        "Missing evidence is not automatically treated as failure.",
      ],
    ],
    is: "A layer, not a replacement.",
    isText:
      "LaSpeak is an evidence-review layer for human-led language education.",
    isnt: "Not an",
    exclusions: [
      "AI tutor",
      "LMS",
      "automatic grading system",
      "teacher-ranking system",
      "CEFR certification system",
    ],
  },
  providers: {
    label: "For language providers",
    title: "The next teacher shouldn’t have to start from zero.",
    description:
      "Initially designed around adult and professional FLE providers in France, and the people who keep teaching connected.",
    items: [
      [
        "Teacher handovers",
        "Preserve useful context when responsibility moves between teachers.",
      ],
      [
        "Progress conversations",
        "Find concrete examples instead of relying only on general impressions.",
      ],
      ["What to revisit", "Surface evidence that may deserve another look."],
      [
        "Find examples quickly",
        "Return to the relevant moment, not an entire recording.",
      ],
    ],
    complement:
      "Designed to complement existing teaching and course-management systems, not replace them.",
    cta: "For language providers",
    alt: "A teacher explains a point during a remote lesson, with notes and a laptop nearby.",
  },
  research: {
    label: "Research, before promises",
    title: "Help us determine whether this should exist.",
    paragraphs: [
      "We are currently speaking with adult FLE providers and teachers in France to understand whether cross-lesson evidence is a real, recurring problem.",
      "We are not looking to sell organisations software that has not yet proved useful.",
    ],
    cta: "Share your workflow",
    note: "20-minute research conversation. No sales pitch.",
    pilot: "Discuss a research pilot",
  },
  founder: {
    label: "The person behind LaSpeak",
    title: "Built from operating experience in language education.",
    paragraphs: [
      "Denis Gasenchenko is a digital-product and B2B operator with more than eight years of experience across FinTech, payroll, business software and online language education.",
      "His work operating live-language teaching workflows led to the problem LaSpeak is designed to investigate: the difference between delivering a lesson and preserving useful evidence of what happened across lessons.",
    ],
    role: "Founder, LaSpeak",
    linkedin: "Connect on LinkedIn",
    linkedinPending: "LinkedIn profile will be added at launch",
    more: "More about the project",
  },
  final: {
    title: "Does this problem exist in your organisation?",
    text: "I would rather find out now than spend two years building something teachers do not need.",
    cta: "Talk to Denis",
  },
  footer: {
    statement: "Keep the thread.",
    development: "LaSpeak is an early-stage product in development.",
    theme: "Change colour theme",
  },
};
