# LaSpeak public website

A complete bilingual public site for an early-stage, teacher-reviewed language-evidence product. Built with Next.js 16 App Router, TypeScript, Tailwind CSS v4, `next/image` and self-hosted Onest via `next/font/google`.

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

`npm run build` is the normal Vercel production build. All 16 localised content routes are statically generated. `npm run build:preview` produces a portable static export in `out/`, then adapts only that export to the private preview host’s nested URL: relative asset paths, explicit HTML document links and an English entry page. The production Next.js output and route map are unchanged. Do not set `STATIC_EXPORT` on Vercel unless intentionally deploying the static export.

## Configure the real domain and contacts

The single source of truth is `lib/site-config.ts`. Set its defaults directly or set the corresponding environment variables:

| Configuration      | Vercel environment variable | Expected value                            |
| ------------------ | --------------------------- | ----------------------------------------- |
| `DOMAIN`           | `NEXT_PUBLIC_DOMAIN`        | Purchased hostname, without protocol      |
| `SITE_URL`         | `NEXT_PUBLIC_SITE_URL`      | Canonical origin including `https://`     |
| `HELLO_EMAIL`      | `NEXT_PUBLIC_HELLO_EMAIL`   | Working general-contact mailbox           |
| `FOUNDER_EMAIL`    | `NEXT_PUBLIC_FOUNDER_EMAIL` | Working founder mailbox                   |
| `LINKEDIN_URL`     | `NEXT_PUBLIC_LINKEDIN_URL`  | Confirmed founder profile URL             |
| Preview protection | `NEXT_PUBLIC_PREVIEW`       | `true` on previews, `false` on production |

The defaults deliberately use a reserved `.example` domain. This prevents accidentally sending mail to an unrelated domain. LinkedIn is visibly non-interactive until a real profile URL is supplied; no profile has been guessed.

With placeholder values, HTML has `noindex` and `robots.txt` disallows crawling. A real `SITE_URL` automatically enables indexing unless `NEXT_PUBLIC_PREVIEW=true` or Vercel identifies the deployment as a Preview environment. Canonicals, hreflang, social URLs and sitemap entries all derive from this configuration. Rebuild after changing values.

`npm run check:launch` checks the environment-variable route. If editing defaults directly, inspect `lib/site-config.ts` instead. Contact buttons use `mailto:` only, with the three requested research subjects.

## Deploy to Vercel

1. Put this project in a Git repository and import it into Vercel.
2. Use the detected Next.js preset and the default install/build/output settings. The project root is the folder containing this README and `package.json`.
3. Set the public configuration above in Production. Set `NEXT_PUBLIC_PREVIEW=true` in Preview environments.
4. Deploy. Attach the purchased domain using Vercel’s domain settings and the DNS records it provides.
5. Verify both mailboxes receive email and the LinkedIn URL is the intended profile.
6. Check `/en/`, `/fr/`, `/robots.txt` and `/sitemap.xml` on the final domain. Confirm production HTML is indexable and canonical URLs use the purchased hostname.
7. Submit the final sitemap to Google Search Console after verifying ownership. Submission and indexing are not performed by this build.

No domain has been bought, mailbox provisioned, Vercel account changed or public site published as part of the private preview.

## Page routes

| Page            | English                                                 | French                                                   |
| --------------- | ------------------------------------------------------- | -------------------------------------------------------- |
| Home            | `/en/`                                                  | `/fr/`                                                   |
| Providers       | `/en/for-language-providers/`                           | `/fr/pour-les-organismes-fle/`                           |
| Research        | `/en/research/`                                         | `/fr/recherche/`                                         |
| About           | `/en/about/`                                            | `/fr/a-propos/`                                          |
| Insights index  | `/en/insights/`                                         | `/fr/ressources/`                                        |
| Privacy         | `/en/privacy/`                                          | `/fr/confidentialite/`                                   |
| Between lessons | `/en/insights/what-gets-lost-between-language-lessons/` | `/fr/ressources/que-perd-on-entre-deux-cours-de-langue/` |
| Transcripts     | `/en/insights/transcripts-and-learning-evidence/`       | `/fr/ressources/transcription-et-traces-pedagogiques/`   |

`/` permanently redirects to `/en/` in the normal Next.js runtime. The packaged private preview opens the English homepage directly. There is no geolocation or browser-language redirect. Unknown slugs are not generated. Internal navigation uses semantic native anchors so the small publication also works without a client-side router.

## Design decisions

- Warm `#F7F6F2`, near-black text, a lavender identity and one muted sage interruption.
- Onest is the only content font. Variable weights and responsive editorial scale replace decorative elements.
- Deliberately varied compositions: asymmetric hero, large photo break, numbered sequence, editorial lists, a source-review interface, lavender research invitation and a typography-only founder section.
- The supplied temporary wordmark is retained. The favicon uses its mark.
- No gradients, testimonials, customer-logo strips, invented metrics or decorative charts.
- No animation framework. CSS handles interaction transitions and respects reduced motion.
- Mobile layouts reorganise the timeline and review actions rather than shrinking the desktop UI.
- A quiet colour-theme control is in the footer. No local storage or cookies are used.

## Content and components

```text
app/
  (entry)/                     Root redirect
  [locale]/[[...slug]]/         Statically generated localised pages
  [locale]/layout.tsx           Correct HTML language and Onest
  globals.css                  Design system and responsive layouts
  robots.ts
  sitemap.ts
components/marketing/          Small, focused page and interface components
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

Server components are the default. Client components are limited to the navigation, evidence viewer, image loader and theme toggle. Essential copy, links and initial evidence are present in the generated HTML.

## Evidence interaction

The hero, conceptual journey and viewer are visibly labelled synthetic/illustrative in both languages. The viewer supports:

- Selecting source excerpts from Lessons 02, 04 and 07.
- Opening the surrounding fictional exchange from the source reference.
- Accepting, editing, rejecting or deferring a proposed relationship.
- Cancelling an edit and resetting the example.
- Keeping observation separate from the editable interpretation.

Choices exist only in memory on the current page. They do not persist, call an API, assess a learner or represent a deployed product. Selecting another excerpt resets its illustrative review state.

## SEO

- Statically generated HTML for every localised page.
- One H1, distinct titles and descriptions, canonical URLs.
- Reciprocal `en`, `fr` and `x-default` alternate links.
- Localised OpenGraph/Twitter metadata and two 1200×630 Onest social images.
- Sitemap with all localised pages and alternate-language references.
- Environment-aware robots and indexing controls.
- Truthful WebSite and Person JSON-LD; BreadcrumbList on secondary pages.
- No ratings, reviews, customer counts, incorporation claims or meta keywords.
- Internal navigation, related article links and descriptive photography alt text.

## Supplied assets used

| Original            | Production use                                         |
| ------------------- | ------------------------------------------------------ |
| `La-Speak-Logo.png` | Navigation/footer wordmark, favicon and social imagery |
| `7.png`             | Homepage story about an actual remote lesson           |
| `metodist.png`      | Homepage provider section and dedicated provider page  |
| `8.png`             | Research page and insights index                       |

The supplied `4.png`, `first-call.png` and `lawyer-junior.png` were inspected but not used. Other filenames mentioned in the brief were not among the seven actual attachments. No domain screenshot or visual-reference image is displayed.

Stock subjects are never named as customers, teachers using LaSpeak, research participants or the founder. The founder section has no portrait.

Photos have WebP variants at 192, 256, 384, 640, 828, 1080, 1440 and 1920 pixels. `next/image` supplies width/height, responsive `sizes`/`srcset` and lazy loading. The custom loader selects those real files, so both normal Vercel builds and static exports need no image-optimisation server.

To regenerate from the original attachments:

```bash
npm run images -- /path/to/original-attachments
npm run social
```

The original large PNGs are preserved in the original attachment set rather than copied into the deployment. The included Onest TTF and SIL Open Font License are used by the social-image generation script. The website itself uses `next/font/google` with self-hosted build output.

## Before public launch

- Supply the final domain, two functioning email addresses and confirmed LinkedIn profile.
- Confirm the privacy notice against the actual hosting/email arrangements, data-controller identity, contact details and correspondence retention policy. Add any legally required publisher/hosting notice using real details; no address or legal entity has been invented.
- Keep introductory research free of learner uploads. Any future use of real lesson data needs a separate reviewed data-handling framework.
- Re-run the build and QA after editing content or configuration.
- Review dependency advisories periodically. The runtime dependency audit is clean at handoff. An unresolved development-only advisory remains in the `braces` dependency chain used by Next’s ESLint plugin; no untrusted glob patterns are accepted by the website. Do not downgrade Next.js to follow npm’s suggested incompatible lint fix.

See `qa/QA-RESULTS.md` for test results and the distinction between local lab measurements and production field performance.
