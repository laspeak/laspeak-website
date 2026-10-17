# LaSpeak QA inventory

## Build and delivery

- Production `next build`, strict TypeScript and ESLint.
- Static generation of all 26 EN/FR content routes.
- Source handoff includes lockfile, configuration, documentation and optimised images.

## Routes and SEO

- Every localised content route returns success with one H1 and the correct HTML language.
- Internal links resolve, including equivalent EN/FR pricing, trust, article and legal routes.
- Unique titles and descriptions; canonical, en/fr/x-default hreflang, OpenGraph and Twitter cards.
- WebSite/Product/Person schema and secondary-page BreadcrumbList parse as JSON.
- Sitemap includes all routes; robots blocks staging and allows configured production.
- Root redirects to `/en/`; unknown paths return 404.

## User controls

- Mobile menu opens/closes, Escape returns focus and outside click closes it.
- Language switch navigates to the equivalent URL.
- Hero and internal CTAs lead to Platform or open the correctly addressed pilot email.
- Theme toggles light/dark/light without storing a cookie.
- Skip link and navigation have visible keyboard focus.

## Visual coverage

- Homepages at 375, 960, 1024 and desktop widths.
- Pricing, Trust & research and editorial-page templates at desktop and 375 pixels.
- Inspect hero, role routes, learning cycle, product layers, technology foundation, pricing, trust, founder and footer.
- Inspect mobile menu, long French labels and both colour themes.
- No horizontal overflow or interface-like product mockups.
- Responsive image srcsets request mobile-sized WebP variants.

## Editorial integrity

- Owner, teacher and student perspectives are present in both languages.
- Operating platform, learning intelligence and native practice are present in both languages.
- Existing foundation, productisation and research programme are kept distinct.
- No fake testimonials, partnerships, customer counts, achieved research targets or savings claims.
- Optional recording, human oversight and the absence of automated scoring/CEFR certification remain explicit.
- Stock subjects never appear as customers, employees or study participants.
- No browser windows, dashboards, phones or other visuals that imply a finished interface.
