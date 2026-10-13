# LaSpeak QA inventory

## Build and delivery

- Production `next build`, strict TypeScript and ESLint.
- Static export for the attached preview; Vercel uses the normal Next.js build.
- Runtime dependency audit.
- Source handoff includes lockfile, configuration, documentation and optimised images.

## Routes and SEO

- All 16 localised content routes return success with one H1 and correct HTML language.
- All internal anchors and links resolve, including equivalent EN/FR article routes.
- Unique page titles and descriptions; canonical, en/fr/x-default hreflang, OpenGraph and Twitter cards.
- WebSite/Person schema and secondary-page BreadcrumbList parse as JSON.
- Sitemap includes all routes; robots blocks staging, allows configured production.
- Root redirects to /en; unknown paths return 404.

## User controls

- Mobile menu opens/closes, Escape returns focus, outside click closes.
- Language switch navigates to the equivalent URL.
- Header/hero/how-it-works anchors lead to the correct section.
- Contact links use the configured address and correct encoded subject.
- Evidence timeline selects all three lessons; source references reveal original context.
- Accept, edit/save/cancel, reject, defer and reset each produce visible local-only results.
- Source context closes without changing the selected lesson.
- Theme toggles light/dark/light with readable evidence and photography.
- Skip link, navigation, review actions and edit field have visible keyboard focus.

## Visual coverage

- Homepages at 375, 430, 768, 1024, 1440, 1728 pixels.
- Every secondary page and article at desktop and 375 pixels.
- Inspect hero, story, journey, evidence viewer, provider section, research CTA and footer.
- Inspect mobile menu, editing, source context, selected review state and dark homepage.
- No horizontal overflow; no squashed or tiny interface labels.
- Responsive image srcsets request mobile-sized WebP variants.

## Off-happy-path checks

- Empty edit cannot save; cancelled edit leaves interpretation unchanged.
- Unknown translated slug returns 404 rather than incorrectly serving the other language.
- Reduced motion disables transitions; 200% text zoom remains usable.
- Site content works with JavaScript disabled; the synthetic viewer retains an initial readable state.

## Editorial integrity

- Every product visual is visibly labelled illustrative/synthetic.
- Stock subjects never appear as customers, founder or research participants.
- No fake testimonials, partnerships, customer counts, results or validated-accuracy claims.
- R&D stage, uncertainty and teacher control remain explicit.
- No lorem ipsum, invented academic references or corporate registration claims.
- Missing domain/mailbox/LinkedIn are documented, not silently guessed.
