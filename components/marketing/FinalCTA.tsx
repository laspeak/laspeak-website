import type { Dictionary } from "@/content/types";
import { mailto, siteConfig } from "@/lib/site-config";
export function FinalCTA({ d }: { d: Dictionary["final"] }) {
  return (
    <section className="final-cta shell" id="contact">
      <h2>{d.title}</h2>
      <div className="final-bottom">
        <p>{d.text}</p>
        <div>
          <a href={mailto()} className="button">
            {d.cta}
            <span aria-hidden="true">↗</span>
          </a>
          <div className="contact-emails">
            <a href={mailto("conversation", false)}>{siteConfig.HELLO_EMAIL}</a>
            <a href={mailto()}>{siteConfig.FOUNDER_EMAIL}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
