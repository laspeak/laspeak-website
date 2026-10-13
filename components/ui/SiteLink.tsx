import type { AnchorHTMLAttributes } from "react";

/**
 * Standard document navigation is intentional for this small static publication.
 * It works without JavaScript and in both Vercel and portable nested previews.
 */
export function SiteLink(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a {...props} />;
}
