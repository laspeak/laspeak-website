export type StatusTone = "foundation" | "productisation" | "research";

export interface Dictionary {
  nav: {
    how: string; providers: string; product: string; pricing: string; trust: string;
    about: string; talk: string; menu: string; close: string; skip: string;
    home: string; insights: string; privacy: string; legal: string; cookies: string;
    terms: string; contact: string;
  };
  hero: {
    context: string; title: string; accent: string; description: string;
    cta: string; secondary: string; note: string; orbit: string[]; centre: string;
  };
  problem: {
    label: string; title: string; description: string;
    items: { role: string; title: string; text: string }[];
  };
  roles: {
    label: string; title: string; description: string;
    items: { key: string; role: string; title: string; text: string; route: string[] }[];
  };
  cycle: { label: string; title: string; description: string; steps: string[]; caption: string };
  layers: {
    label: string; title: string; description: string;
    items: { number: string; title: string; purpose: string; features: string[]; status: string; tone: StatusTone }[];
  };
  foundation: {
    label: string; title: string; description: string;
    columns: { title: string; status: string; tone: StatusTone; text: string; items: string[] }[];
  };
  why: { label: string; title: string; items: [string, string][] };
  pricing: {
    label: string; title: string; description: string;
    tiers: { name: string; price: string; unit: string; featured?: boolean; allowances: string[] }[];
    footnote: string; cta: string; details: string;
  };
  pilot: { label: string; title: string; price: string; description: string; items: string[]; cta: string; note: string };
  trust: { label: string; title: string; description: string; items: [string, string][]; cta: string };
  product: { label: string; title: string; paragraphs: string[]; cta: string; note: string; implementation: string };
  providers: { label: string; title: string; description: string; items: [string, string][]; complement: string; cta: string; alt: string };
  founder: { label: string; title: string; paragraphs: string[]; role: string; linkedin: string; more: string };
  final: { title: string; text: string; cta: string };
  footer: {
    statement: string; development: string; theme: string;
    emailLabels: { general: string; founder: string; support: string; privacy: string };
  };
}

export interface SectionDetail { label: string; value: string; href?: string }
export interface Section { title: string; paragraphs: string[]; list?: string[]; details?: SectionDetail[] }
export interface EditorialPage { title: string; description: string; label: string; intro: string; sections: Section[]; updated?: string }
export interface Article extends EditorialPage { key: "between-lessons" | "transcripts"; readTime: string; takeaway: string }
