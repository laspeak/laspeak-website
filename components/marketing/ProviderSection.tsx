import Image from "next/image";
import { SiteLink as Link } from "@/components/ui/SiteLink";
import type { Dictionary } from "@/content/types";
import { href, type Locale } from "@/lib/i18n";
export function ProviderSection({
  d,
  locale,
}: {
  d: Dictionary["providers"];
  locale: Locale;
}) {
  return (
    <section className="shell section provider-section">
      <div className="provider-main">
        <p className="eyebrow">{d.label}</p>
        <h2>{d.title}</h2>
        <p className="provider-description">{d.description}</p>
        <Image
          src="/images/teacher.webp"
          alt={d.alt}
          width={1440}
          height={960}
          sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1200px) 45vw, 570px"
          className="provider-photo"
        />
      </div>
      <div className="provider-usecases">
        {d.items.map(([title, text], i) => (
          <div key={title} className="usecase">
            <span>{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </div>
        ))}
        <p className="complement">{d.complement}</p>
        <Link href={href(locale, "providers")} className="text-link">
          {d.cta}
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
