# LaSpeak public website

A complete bilingual public site for LaSpeak: the learning and operating platform for independent language schools. Built with Next.js 16 App Router, TypeScript, Tailwind CSS v4, `next/image` and self-hosted Onest via `next/font/google`.

## Start locally

```bash
npm ci
npm run dev
```

Use Node 20.9 or newer. The package lock records the tested dependency versions. There is no database, CMS, account system, external API or required service.

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

`npm run build` is the normal Vercel production build. All 26 localised content routes are statically generated. `npm run build:preview` produces a portable static export in `out/`, then adapts only that export to the private preview host’s nested URL: relative asset paths, explicit HTML document links and an English entry page. The production Next.js output and route map are unchanged. Do not set `STATIC_EXPORT` on Vercel unless intentionally deploying the static export.

## Production domain and contacts

The single source of truth is `lib/site-config.ts`. Set its defaults directly or set the corresponding environment variables:

| Configuration      | Vercel environment variable | Expected value                            |
| ------------------ | --------------------------- | ----------------------------------------- |
| `DOMAIN`           | `NEXT_PUBLIC_DOMAIN`        | `laspeak.eu`                              |
| `SITE_URL`         | `NEXT_PUBLIC_SITE_URL`      | `https://laspeak.eu`                      |
| `HELLO_EMAIL`      | `NEXT_PUBLIC_HELLO_EMAIL`   | `hello@laspeak.eu`                        |
| `FOUNDER_EMAIL`    | `NEXT_PUBLIC_FOUNDER_EMAIL` | `denis@laspeak.eu`                        |
| `SUPPORT_EMAIL`    | `NEXT_PUBLIC_SUPPORT_EMAIL` | `support@laspeak.eu`                      |
| `PRIVACY_EMAIL`    | `NEXT_PUBLIC_PRIVACY_EMAIL` | `privacy@laspeak.eu`                      |
| Brand LinkedIn     | `NEXT_PUBLIC_BRAND_LINKEDIN_URL` | `https://www.linkedin.com/company/laspeak/` |
| Founder LinkedIn   | `NEXT_PUBLIC_FOUNDER_LINKEDIN_URL` | `https://www.linkedin.com/in/denis-gasenchenko-en/` |
| Preview protection | `NEXT_PUBLIC_PREVIEW`       | `true` on previews, `false` on production |

The defaults use the production domain `laspeak.eu` and four role-based addresses: `hello@laspeak.eu` for general enquiries, `denis@laspeak.eu` for founder and product conversations, `support@laspeak.eu` for website and accessibility support, and `privacy@laspeak.eu` for data-protection requests. The footer links to the LaSpeak brand page on LinkedIn; founder sections link to Denis Gasenchenko’s dedicated English-language profile. Public marketing presents LaSpeak as a product; the legal notice separately records its current publisher status without inventing a company.

The production origin is indexable unless `NEXT_PUBLIC_PREVIEW=true` or Vercel identifies the deployment as a Preview environment. Canonicals, hreflang, social URLs and sitemap entries all derive from this configuration. Rebuild after changing values.

`npm run check:launch` checks the environment-variable route. If editing defaults directly, inspect `lib/site-config.ts` instead. Contact buttons use `mailto:` only, with platform, workflow and paid-pilot subjects.

## Deploy to Vercel

1. Put this project in a Git repository and import it into Vercel.
2. Use the detected Next.js preset and the default install/build/output settings. The project root is the folder containing this README and `package.json`.
3. Set the public configuration above in Production. Set `NEXT_PUBLIC_PREVIEW=true` in Preview environments.
4. Deploy and confirm that `laspeak.eu` is attached using Vercel’s domain settings and DNS records.
5. Verify all four mailboxes receive email and both LinkedIn destinations are correct.
6. Check `/en/`, `/fr/`, `/robots.txt` and `/sitemap.xml` on the final domain. Confirm production HTML is indexable and canonical URLs use the purchased hostname.
7. Submit the final sitemap to Google Search Console after verifying ownership. Submission and indexing are not performed by this build.

The repository defines public addresses but does not provision mailboxes. Confirm that all four addresses receive mail before relying on the contact links.

## Page routes

| Page            | English                                                 | French                                                   |
| --------------- | ------------------------------------------------------- | -------------------------------------------------------- |
| Home            | `/en/`                                                  | `/fr/`                                                   |
| Providers       | `/en/for-language-providers/`                           | `/fr/pour-les-organismes-fle/`                           |
| Product         | `/en/product/`                                          | `/fr/produit/`                                           |
| Pricing         | `/en/pricing/`                                          | `/fr/tarifs/`                                            |
| Trust & research| `/en/trust-and-research/`                               | `/fr/confiance-et-recherche/`                            |
| About           | `/en/about/`                                            | `/fr/a-propos/`                                          |
| Insights index  | `/en/insights/`                                         | `/fr/ressources/`                                        |
| Privacy         | `/en/privacy/`                                          | `/fr/confidentialite/`                                   |
| Legal notice    | `/en/legal-notice/`                                     | `/fr/mentions-legales/`                                  |
| Cookies         | `/en/cookies/`                                          | `/fr/cookies/`                                           |
| Terms of use    | `/en/terms-of-use/`                                     | `/fr/conditions-utilisation/`                            |
| Between lessons | `/en/insights/what-gets-lost-between-language-lessons/` | `/fr/ressources/que-perd-on-entre-deux-cours-de-langue/` |
| Transcripts     | `/en/insights/transcripts-and-learning-evidence/`       | `/fr/ressources/transcription-et-traces-pedagogiques/`   |

`/` permanently redirects to `/en/` in the normal Next.js runtime. The packaged private preview opens the English homepage directly. There is no geolocation or browser-language redirect. Unknown slugs are not generated. Internal navigation uses semantic native anchors so the small publication also works without a client-side router.

## Design decisions

- Warm `#F7F6F2`, near-black text, a lavender identity and one muted sage interruption.
- Onest is the only content font. Variable weights and responsive editorial scale replace decorative elements.
- Deliberately varied compositions: asymmetric hero, role routes, a learning-cycle diagram, product-layer cards, pricing markers, lavender pilot invitation and a typography-only founder section.
- The supplied temporary wordmark is retained. The favicon uses its mark.
- No gradients, testimonials, customer-logo strips, invented metrics or decorative charts.
- No animation framework. CSS handles interaction transitions and respects reduced motion.
- Mobile layouts reorganise the connected learning cycle, role routes and pricing cards rather than shrinking desktop compositions.
- A quiet colour-theme control is in the footer. No local storage or cookies are used.
- Privacy, cookie, legal-notice and website-use documents are published in both languages and linked from every page.

## Content and components

```text
app/
  (entry)/                     Root redirect
  [locale]/[[...slug]]/         Statically generated localised pages
  [locale]/layout.tsx           Correct HTML language and Onest
  globals.css                  Design system and responsive layouts
  robots.ts
  sitemap.ts
components/marketing/          Small, focused page and narrative components
content/
  en/site.ts                   English homepage and shared UI
  en/pages.ts                  English pages and two seed articles
  fr/site.ts                   French homepage and shared UI
  fr/pages.ts                  French pages and two seed articles
  types.ts                     Shared content interfaces
lib/
  i18n.ts                      Locale-specific route map
  site-config.ts               Domain, contacts and indexing
  seo.ts                       Page metadata
  image-loader.ts              Responsive pre-generated WebP loader
public/images/                 Production assets
scripts/                       Asset generation and QA helpers
qa/                            QA coverage and machine-readable results
```

Articles use a simple typed content structure: title, description, introduction, sections, paragraphs, optional lists and takeaway. They can be replaced without editing the layout, and need no CMS or MDX build machinery. Route translation is explicit, including article-to-article language switching.

Server components are the default. Client components are limited to navigation, image loading and the theme toggle. Essential copy and links are present in the generated HTML.

## Product narrative

The site presents LaSpeak as one connected platform across school operations, live teaching and learning between lessons. The homepage separates three perspectives (owner, teacher and student), eight steps in the learning cycle and three product layers (operating platform, learning intelligence and native practice).

Capability status is explicit throughout: existing ChinaChild foundations, work that requires multi-school productisation and research-programme directions are not presented as the same level of readiness. The site contains no platform screenshots, browser or phone frames, synthetic dashboards, fabricated customers or outcome claims.

## SEO

- Statically generated HTML for every localised page.
- One H1, distinct titles and descriptions, canonical URLs.
- Reciprocal `en`, `fr` and `x-default` alternate links.
- Localised OpenGraph/Twitter metadata and two 1200×630 Onest social images.
- Sitemap with all localised pages and alternate-language references.
- Environment-aware robots and indexing controls.
- Truthful WebSite, Product and Person JSON-LD; BreadcrumbList on secondary pages.
- No ratings, reviews, customer counts, incorporation claims or meta keywords.
- Internal navigation, related article links and descriptive photography alt text.

## Supplied assets used

| Original            | Production use                                         |
| ------------------- | ------------------------------------------------------ |
| `La-Speak-Logo.png` | Navigation/footer wordmark, favicon and social imagery |
| `7.png`             | Editorial photography for a remote learning situation  |
| `metodist.png`      | Editorial photography for the school workflow story    |
| `8.png`             | Product page and insights index                        |
| Founder portrait    | Founder identity block on the homepage and about page  |

The supplied `4.png`, `first-call.png` and `lawyer-junior.png` were inspected but not used. Other filenames mentioned in the brief were not among the seven actual attachments. No domain screenshot or visual-reference image is displayed.

Stock subjects are never named as customers, teachers using LaSpeak, employees or study participants. The founder section uses Denis Gasenchenko’s supplied portrait.

Photos have WebP variants at 192, 256, 384, 640, 828, 1080, 1440 and 1920 pixels. `next/image` supplies width/height, responsive `sizes`/`srcset` and lazy loading. The custom loader selects those real files, so both normal Vercel builds and static exports need no image-optimisation server.

To regenerate from the original attachments:

```bash
npm run images -- /path/to/original-attachments
npm run social
```

The original large PNGs are preserved in the original attachment set rather than copied into the deployment. The included Onest TTF and SIL Open Font License are used by the social-image generation script. The website itself uses `next/font/google` with self-hosted build output.

## Operational requirements

- Provision and verify `hello@laspeak.eu`, `denis@laspeak.eu`, `support@laspeak.eu` and `privacy@laspeak.eu` before production deployment.
- Keep the current non-professional publication status accurate in fact. Before professional activity, sales or incorporation begins, replace it with the publisher’s or entity’s complete required particulars, including address, telephone, registration and VAT information where applicable.
- Keep Vercel and Apple/iCloud disclosures aligned with the services actually used. The published policy sets a 24-month correspondence period, a 30-day maximum for publisher-accessible technical logs and a five-year compliance record for closed rights requests.
- Do not accept learner uploads through the public website. Any implementation using real lesson data needs a separate reviewed data-handling framework and agreement.
- Re-run the build and QA after editing content or configuration.
- Review dependency advisories periodically. The runtime dependency audit is clean at handoff. An unresolved development-only advisory remains in the `braces` dependency chain used by Next’s ESLint plugin; no untrusted glob patterns are accepted by the website. Do not downgrade Next.js to follow npm’s suggested incompatible lint fix.

See `qa/QA-RESULTS.md` for test results and the distinction between local lab measurements and production field performance.
