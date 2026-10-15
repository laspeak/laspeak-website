"use client";
import Image from "next/image";
import { SiteLink as Link } from "@/components/ui/SiteLink";
import { useEffect, useRef, useState } from "react";
import { href, type Locale, type PageKey } from "@/lib/i18n";
import { mailto } from "@/lib/site-config";
import type { Dictionary } from "@/content/types";

export function Header({
  locale,
  page,
  d,
}: {
  locale: Locale;
  page: PageKey;
  d: Dictionary["nav"];
}) {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const outside = (e: PointerEvent) => {
      if (header.current && !header.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", outside);
    };
  }, [open]);
  return (
    <>
      <a className="skip-link" href="#main">
        {d.skip}
      </a>
      <header className="site-header" ref={header}>
        <div className="shell header-inner">
          <Link
            href={href(locale)}
            aria-label={`LaSpeak · ${d.home}`}
            className="brand"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/images/wordmark.webp"
              alt="LaSpeak"
              width={160}
              height={34}
              unoptimized
              priority
            />
          </Link>
          <nav
            className="desktop-nav"
            aria-label={
              locale === "fr" ? "Navigation principale" : "Main navigation"
            }
          >
            <Link href={`${href(locale)}#how-it-works`}>{d.how}</Link>
            <Link
              href={href(locale, "providers")}
              aria-current={page === "providers" ? "page" : undefined}
            >
              {d.providers}
            </Link>
            <Link
              href={href(locale, "product")}
              aria-current={page === "product" ? "page" : undefined}
            >
              {d.product}
            </Link>
            <Link
              href={href(locale, "about")}
              aria-current={page === "about" ? "page" : undefined}
            >
              {d.about}
            </Link>
          </nav>
          <div className="header-actions">
            <nav
              className="locale-switch"
              aria-label={locale === "fr" ? "Langue" : "Language"}
            >
              <Link
                href={href("en", page)}
                hrefLang="en"
                lang="en"
                aria-current={locale === "en" ? "page" : undefined}
              >
                EN
              </Link>
              <span aria-hidden="true">/</span>
              <Link
                href={href("fr", page)}
                hrefLang="fr"
                lang="fr"
                aria-current={locale === "fr" ? "page" : undefined}
              >
                FR
              </Link>
            </nav>
            <a
              href={mailto("conversation", true, locale)}
              className="button button-small header-cta"
            >
              {d.talk}
              <span aria-hidden="true">↗</span>
            </a>
            <button
              className="menu-toggle"
              ref={toggle}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen(!open)}
            >
              {open ? d.close : d.menu}
              <span aria-hidden="true">{open ? "−" : "+"}</span>
            </button>
          </div>
        </div>
        <nav
          className={`mobile-nav ${open ? "is-open" : ""}`}
          id="mobile-navigation"
          aria-label={
            locale === "fr" ? "Navigation mobile" : "Mobile navigation"
          }
          inert={!open}
        >
          <Link
            href={`${href(locale)}#how-it-works`}
            onClick={() => setOpen(false)}
          >
            {d.how}
          </Link>
          {(["providers", "product", "about", "insights"] as const).map(
            (k) => (
              <Link
                key={k}
                href={href(locale, k)}
                onClick={() => setOpen(false)}
              >
                {d[k]}
              </Link>
            ),
          )}
          <a
            href={mailto("conversation", true, locale)}
            onClick={() => setOpen(false)}
          >
            {d.talk}
            <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>
    </>
  );
}
