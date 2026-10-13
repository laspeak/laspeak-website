export interface Dictionary {
  nav: {
    how: string;
    providers: string;
    research: string;
    about: string;
    talk: string;
    menu: string;
    close: string;
    skip: string;
    home: string;
    insights: string;
    privacy: string;
    contact: string;
  };
  hero: {
    context: string;
    title: string;
    accent: string;
    description: string;
    cta: string;
    secondary: string;
    note: string;
  };
  story: {
    label: string;
    title: string;
    text: string;
    alt: string;
    caption: string;
  };
  problem: {
    label: string;
    title: string;
    muted: string;
    lines: [string, string][];
    question: string;
  };
  journey: {
    label: string;
    title: string;
    description: string;
    steps: [string, string][];
    distinction: string;
    observation: string;
    interpretation: string;
  };
  viewer: {
    label: string;
    title: string;
    description: string;
    synthetic: string;
    illustrative: string;
    lesson: string;
    prompt: string;
    attempt: string;
    reuse: string;
    possible: string;
    source: string;
    original: string;
    speaker: string;
    learner: string;
    timestamp: string;
    event: string;
    relationship: string;
    correction: string;
    review: string;
    actions: [string, string, string, string];
    timeline: string;
    note: string;
    reset: string;
    editLabel: string;
    save: string;
    cancel: string;
    statuses: [string, string, string, string];
    viewSource: string;
    closeSource: string;
  };
  why: {
    label: string;
    title: string;
    items: [string, string][];
    is: string;
    isText: string;
    isnt: string;
    exclusions: string[];
  };
  providers: {
    label: string;
    title: string;
    description: string;
    items: [string, string][];
    complement: string;
    cta: string;
    alt: string;
  };
  research: {
    label: string;
    title: string;
    paragraphs: string[];
    cta: string;
    note: string;
    pilot: string;
  };
  founder: {
    label: string;
    title: string;
    paragraphs: string[];
    role: string;
    linkedin: string;
    linkedinPending: string;
    more: string;
  };
  final: { title: string; text: string; cta: string };
  footer: { statement: string; development: string; theme: string };
}
export interface Section {
  title: string;
  paragraphs: string[];
  list?: string[];
}
export interface EditorialPage {
  title: string;
  description: string;
  label: string;
  intro: string;
  sections: Section[];
}
export interface Article extends EditorialPage {
  key: "between-lessons" | "transcripts";
  readTime: string;
  takeaway: string;
}
