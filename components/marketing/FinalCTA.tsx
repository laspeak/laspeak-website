import type { Dictionary } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { mailto, siteConfig } from "@/lib/site-config";
const CONTACT_EMAILS = [
  ...new Set([siteConfig.HELLO_EMAIL, siteConfig.FOUNDER_EMAIL]),
];
export function FinalCTA({
  d,
  locale,
}: {
  d: Dictionary["final"];
  locale: Locale;
}) {
  return (
    <section className="final-cta shell" id="contact">
      <h2>{d.title}</h2>
      <div className="final-bottom">
        <p>{d.text}</p>
        <div>
          <a
            href={mailto("pilot", true, locale)}
            className="button"
          >
            {d.cta}
            <span aria-hidden="true">↗</span>
          </a>
          <div className="contact-emails">
            {CONTACT_EMAILS.map((email) => (
              <a
                key={email}
                href={
                  email === siteConfig.HELLO_EMAIL &&
                  siteConfig.HELLO_EMAIL !== siteConfig.FOUNDER_EMAIL
                    ? mailto("pilot", false, locale)
                    : mailto("pilot", true, locale)
                }
              >
                {email}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
