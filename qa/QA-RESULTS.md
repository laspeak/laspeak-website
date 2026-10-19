# LaSpeak QA results

The platform-repositioning build was checked locally on 16 October 2026. No deployment, DNS change, email submission or external data transfer was performed.

## Build and code

| Check                    | Result                                        |
| ------------------------ | --------------------------------------------- |
| Next.js production build | Passed, 31 static pages / 26 localised routes |
| TypeScript strict check  | Passed                                        |
| ESLint                   | Passed, no errors or warnings                 |
| Social-card generation   | Passed for English and French                 |

## Routes and metadata

- All 26 sitemap routes returned HTTP 200, the correct HTML language and exactly one H1.
- All 26 titles and descriptions were present and unique. Canonical links, EN/FR/x-default alternates and JSON-LD parsed successfully.
- All 28 discovered internal route targets resolved without a 4xx/5xx response.
- `/` returned the expected 308 redirect to `/en/`; an unknown localised route returned 404.

## Responsive and visual review

- The English and French homepages were inspected in Chromium at 375px and desktop widths; the header was additionally checked at the 960px breakpoint and 1024px.
- The mobile navigation exposes Platform, For schools, Pricing, Trust & research, About, Insights and the pilot CTA in both languages.
- Enter opens the mobile menu; Escape closes it, restores `inert` and returns focus to the menu trigger.
- English Pricing and French Trust & research were checked at 375px. Both rendered the expected localised H1 and content without horizontal overflow.
- The learning-cycle diagram remains editorial at narrow widths. Owner, Teacher and Student routes and all three product layers are visibly distinct.
- Light and dark themes were exercised. The 375px pages reported equal viewport and document widths.
- No platform screenshots, synthetic dashboards, browser frames, phone frames or controls presented as product UI are rendered.

## Content and product claims

- The homepage first screen identifies LaSpeak as the learning and operating platform for independent language schools and names the connected processes.
- Pricing is published as Start €199, School €399 and Growth €699; onboarding, additional-use rates and the €998 eight-week School pilot are documented.
- Existing operating foundations, multi-school productisation and research-programme work are explicitly separated.
- Recording and AI analysis are optional; teacher confirmation, retention/deletion controls and the absence of automatic grading or CEFR certification are stated.
- No invented clients, testimonials, partners, achieved research results or proven time/money savings were found.

## Remaining operational checks

- Confirm the four configured mailboxes receive mail before relying on public contact links.
- Keep the legal notice aligned with the publisher’s actual status before commercial trading begins.
- Re-run production-domain checks for canonical URLs, robots and sitemap after deployment.

These checks are application QA, not an accessibility certification, legal opinion or production Core Web Vitals measurement.
