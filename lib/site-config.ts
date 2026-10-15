/**
 * Public production configuration. Environment variables may override these
 * values for another deployment; never put credentials here.
 */
const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN || "laspeak.eu";
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || `https://${DOMAIN}`
).replace(/\/$/, "");
export const siteConfig = {
  NAME: "LaSpeak",
  DOMAIN,
  SITE_URL,
  HELLO_EMAIL: process.env.NEXT_PUBLIC_HELLO_EMAIL || `hello@${DOMAIN}`,
  FOUNDER_EMAIL: process.env.NEXT_PUBLIC_FOUNDER_EMAIL || `denis@${DOMAIN}`,
  SUPPORT_EMAIL: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || `support@${DOMAIN}`,
  PRIVACY_EMAIL: process.env.NEXT_PUBLIC_PRIVACY_EMAIL || `privacy@${DOMAIN}`,
  BRAND_LINKEDIN_URL:
    process.env.NEXT_PUBLIC_BRAND_LINKEDIN_URL ||
    "https://www.linkedin.com/company/laspeak/",
  FOUNDER_LINKEDIN_URL:
    process.env.NEXT_PUBLIC_FOUNDER_LINKEDIN_URL ||
    "https://www.linkedin.com/in/denis-gasenchenko-en/",
  INDEXABLE:
    !SITE_URL.includes(".example") &&
    process.env.NEXT_PUBLIC_PREVIEW !== "true" &&
    process.env.VERCEL_ENV !== "preview",
} as const;

export function emailHref(address: string, subject?: string) {
  return `mailto:${address}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
}

export function mailto(
  kind: "conversation" | "product" | "implementation" = "conversation",
  founder = true,
  locale: "en" | "fr" = "en",
) {
  const subjects = {
    en: {
      conversation: "LaSpeak — product conversation",
      product: "LaSpeak — product workflow",
      implementation: "LaSpeak — implementation",
    },
    fr: {
      conversation: "LaSpeak — échange produit",
      product: "LaSpeak — fonctionnement du produit",
      implementation: "LaSpeak — mise en œuvre",
    },
  };
  return emailHref(
    founder ? siteConfig.FOUNDER_EMAIL : siteConfig.HELLO_EMAIL,
    subjects[locale][kind],
  );
}
