/**
 * LAUNCH CONFIGURATION: replace these values in this file or use the matching
 * environment variables in Vercel. Never put credentials here.
 * A reserved .example domain deliberately prevents mail being sent to a stranger.
 * Indexing is enabled automatically only when a real SITE_URL is configured.
 */
const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN || "your-domain.example";
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || `https://${DOMAIN}`
).replace(/\/$/, "");
export const siteConfig = {
  NAME: "LaSpeak",
  DOMAIN,
  SITE_URL,
  HELLO_EMAIL: process.env.NEXT_PUBLIC_HELLO_EMAIL || `hello@${DOMAIN}`,
  FOUNDER_EMAIL: process.env.NEXT_PUBLIC_FOUNDER_EMAIL || `denis@${DOMAIN}`,
  LINKEDIN_URL: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
  INDEXABLE:
    !SITE_URL.includes(".example") &&
    process.env.NEXT_PUBLIC_PREVIEW !== "true" &&
    process.env.VERCEL_ENV !== "preview",
} as const;

export function mailto(
  kind: "conversation" | "research" | "pilot" = "conversation",
  founder = true,
) {
  const subjects = {
    conversation: "LaSpeak — research conversation",
    research: "LaSpeak — FLE workflow research",
    pilot: "LaSpeak — research pilot",
  };
  return `mailto:${founder ? siteConfig.FOUNDER_EMAIL : siteConfig.HELLO_EMAIL}?subject=${encodeURIComponent(subjects[kind])}`;
}
