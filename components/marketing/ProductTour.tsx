import Image from "next/image";
import type { Dictionary } from "@/content/types";

export function ProductTour({
  d,
  heading = true,
}: {
  d: Dictionary["tour"];
  heading?: boolean;
}) {
  return (
    <section className={heading ? "tour-section" : "tour-section tour-embedded"}>
      <div className={heading ? "shell section" : undefined}>
        {heading ? (
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">{d.label}</p>
              <h2>{d.title}</h2>
            </div>
            <p>{d.description}</p>
          </div>
        ) : null}
        <div className="tour-grid">
          {d.items.map((item, index) => (
            <figure className={`tour-item tour-${item.key} tour-${item.device}`} key={item.key}>
              <div className="tour-frame">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={item.device === "phone" ? 890 : 1440}
                  height={item.device === "phone" ? 1750 : 900}
                  sizes={
                    item.device === "phone"
                      ? "(max-width: 767px) 70vw, 320px"
                      : index === 0
                        ? "(max-width: 1500px) calc(100vw - 112px), 1320px"
                        : "(max-width: 959px) calc(100vw - 40px), 50vw"
                  }
                />
              </div>
              <figcaption>
                <span className="tour-role">{item.role}</span>
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="tour-note">{d.note}</p>
      </div>
    </section>
  );
}
