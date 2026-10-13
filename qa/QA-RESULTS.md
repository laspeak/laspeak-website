# LaSpeak QA results

The first deployable version was checked on 13 October 2026. The checks below distinguish application verification from requirements that depend on the final public domain and hosting setup.

## Build and code

| Check                        | Result                                                                           |
| ---------------------------- | -------------------------------------------------------------------------------- |
| Next.js production build     | Passed, Next.js 16.4.0                                                           |
| Content generation           | 16 statically generated localised content routes                                 |
| Static export                | Passed                                                                           |
| TypeScript strict check      | Passed                                                                           |
| ESLint                       | Passed, no errors or warnings                                                    |
| Runtime dependency audit     | Zero vulnerabilities reported                                                    |
| Development dependency audit | Five advisory entries in the same `braces` → glob → Next ESLint dependency chain |

The remaining advisory is confined to build/lint tooling. No arbitrary glob patterns are accepted from website visitors. npm’s suggested fix downgrades the Next ESLint configuration to an incompatible major version, so it was not applied. Monitor the upstream fix.

## Routes and metadata

- All 16 content routes returned HTTP 200.
- All 16 had the correct `html` language and exactly one H1.
- All 16 had unique titles and unique descriptions.
- Canonical links and all three alternate-language references were present.
- Internal links, section anchors and image requests passed.
- EN/FR navigation was exercised, including equivalent research routes.
- Article-to-article alternate paths were checked against the route map and generated pages.
- All JSON-LD payloads parsed successfully.
- The normal Next.js runtime returned HTTP 308 from `/` to `/en/`.
- An unknown translated route returned HTTP 404.
- A configured production build returned `index, follow` and `Allow: /`.
- The placeholder-domain preview deliberately returns `noindex` and `Disallow: /`.

Production indexing was tested locally with a reserved `.test` hostname. This did not publish a domain, contact Google or send email.

## Responsive and visual review

Both homepages and all secondary pages were rendered in Chromium. Screenshots were captured at desktop and 375px widths. The homepage was additionally checked at 430, 768, 1024, 1440 and 1728 pixels.

No horizontal overflow was found at the requested widths. The hero, photography, journey, source-review interface, provider use cases, research surface, founder block, article layouts and shared footer were reviewed. A 720px viewport verified the reflow equivalent of 200% zoom on a 1440px display.

The mobile menu and evidence-review editor were inspected in their open states. Both light and dark themes were checked after transitions settled. Reduced-motion mode was exercised.

## Accessibility

- Axe-core WCAG 2 A/AA and WCAG 2.1 AA scans reported zero violations on all 16 routes.
- An additional dark-mode homepage scan reported zero violations.
- The first keyboard Tab focused the skip link; activating it moved focus to the main content.
- Menu Escape closed the menu and returned focus to its trigger.
- Form labels, focus states, source disclosure and review controls were checked.
- Essential French homepage copy and links were verified with JavaScript disabled.

These automated and manual spot checks are not a formal accessibility certification or an exhaustive assistive-technology audit.

## Synthetic interface

- All three timeline entries changed the visible original excerpt.
- The source reference opened the surrounding fictional exchange and closed correctly.
- Accept, reject and defer produced the corresponding inline review status.
- Edit saved the entered interpretation locally; cancel did not save.
- An empty required edit was blocked.
- Reset restored the initial example.
- Selecting a new lesson reset its review and showed the relevant proposed relationship.
- No remote storage, API call or learner assessment is involved.

## Local Lighthouse measurements

Measured against a production Next.js build served locally, using Lighthouse’s mobile configuration and a configured, indexable test origin.

| Category or metric       | English homepage      | French homepage       |
| ------------------------ | --------------------- | --------------------- |
| Performance              | 97                    | 96                    |
| Accessibility            | 100                   | 100                   |
| Best practices           | 100                   | 100                   |
| SEO                      | 100                   | 100                   |
| First contentful paint   | 1.2 s                 | 1.2 s                 |
| Largest contentful paint | 2.5 s                 | 2.8 s                 |
| Total blocking time      | 40 ms                 | 90 ms                 |
| Cumulative layout shift  | 0                     | 0                     |
| Transferred page weight  | Approximately 352 KiB | Approximately 352 KiB |

The deliberately non-indexable private preview has a lower SEO score because crawling is blocked. This is expected, not a missing SEO implementation. The production-mode run scored 100 for SEO after real-origin-style configuration was enabled locally.

These are lab results, not measured production Core Web Vitals. Performance varies with hosting, device, network, browser and future content changes. Re-test on the purchased domain after launch.

## Editorial checks

No lorem ipsum, fake testimonials, fabricated customers, partner logos, outcome statistics, invented studies or incorporation claims were found. Product examples are labelled synthetic/illustrative. No stock person is presented as the founder or a real LaSpeak customer.

The content clearly states the R&D stage and preserves the distinction between observation and interpretation. Proposed future pilots are invitations to discuss, not claims that a pilot exists.

## Remaining launch inputs

- Purchased domain and canonical production origin.
- Two working mailboxes and the confirmed founder LinkedIn URL.
- Final hosting/email privacy details, publisher information and any legally required notice.
- Public-domain deployment, mailbox delivery check and Search Console ownership/submission.
- Continued monitoring of the development-only lint dependency advisory.

No domain purchase, public deployment, email sending or Search Console submission was performed.
