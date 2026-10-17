import type { EditorialPage } from "../types";
import { emailHref, siteConfig } from "@/lib/site-config";

const updated = "Last updated: 16 October 2026";

export const legalPages: Record<"legal" | "cookies" | "terms", EditorialPage> = {
  legal: {
    label: "Legal information",
    title: "Legal notice",
    description:
      "Publisher, hosting, publishing status, contact details and intellectual-property information for the LaSpeak website.",
    intro:
      "This notice identifies the publisher and hosting provider of the LaSpeak product website.",
    updated,
    sections: [
      {
        title: "Website and publisher",
        paragraphs: [
          "LaSpeak is a learning and operating platform and brand for independent language schools. It is not currently operated by an incorporated company or separate legal person, and no company name, legal form, share capital, registration number or VAT number applies.",
          "At the present pre-trading stage, the website is published on a non-professional basis by Denis Gasenchenko, a natural person and founder of LaSpeak. Denis Gasenchenko is also the publication director and is responsible for the editorial content.",
          "Product access, implementation scope and commercial terms are not contracted through this public website. The legal notice will be updated with the operator’s complete professional particulars when trading begins or an incorporated entity takes over publication.",
        ],
        details: [
          { label: "Website", value: siteConfig.SITE_URL, href: siteConfig.SITE_URL },
          { label: "Publisher and publication director", value: "Denis Gasenchenko" },
          {
            label: "Direct contact",
            value: siteConfig.FOUNDER_EMAIL,
            href: emailHref(siteConfig.FOUNDER_EMAIL, "LaSpeak — legal enquiry"),
          },
          {
            label: "General enquiries",
            value: siteConfig.HELLO_EMAIL,
            href: emailHref(siteConfig.HELLO_EMAIL, "LaSpeak — general enquiry"),
          },
          {
            label: "Technical support",
            value: siteConfig.SUPPORT_EMAIL,
            href: emailHref(siteConfig.SUPPORT_EMAIL, "LaSpeak — website support"),
          },
          {
            label: "Privacy",
            value: siteConfig.PRIVACY_EMAIL,
            href: emailHref(siteConfig.PRIVACY_EMAIL, "LaSpeak — privacy request"),
          },
        ],
      },
      {
        title: "Non-professional publication and identification",
        paragraphs: [
          "French law allows a person publishing an online communication service on a non-professional basis to keep their home address and telephone number from public display, provided that accurate personal identification has been supplied to the hosting provider. The publisher’s name and dedicated electronic contact details are nevertheless disclosed here voluntarily for transparency.",
          "This publishing status is tied to the website’s present factual use, not to the maturity of the product it presents. When professional activity or online contracting begins, or a registered entity takes over the site, the publisher information must be replaced with the complete professional particulars required at that time, including an address and telephone number where applicable.",
        ],
        details: [
          {
            label: "Legal reference",
            value: "Article 1-1 of French Law no. 2004-575 of 21 June 2004 (LCEN)",
            href: "https://www.legifrance.gouv.fr/codes/section_lc/JORFTEXT000000801164/LEGISCTA000006117684/",
          },
        ],
      },
      {
        title: "Hosting provider",
        paragraphs: [
          "The website is hosted and delivered through Vercel. Hosting-provider information is published even where the hosting service is provided without charge.",
        ],
        details: [
          { label: "Provider", value: "Vercel Inc.", href: "https://vercel.com" },
          {
            label: "Address",
            value: "440 N Barranca Avenue #4133, Covina, CA 91723, United States",
          },
          { label: "Telephone", value: "+1 559 288 7060", href: "tel:+15592887060" },
          {
            label: "Privacy notice",
            value: "vercel.com/legal/privacy-notice",
            href: "https://vercel.com/legal/privacy-notice",
          },
        ],
      },
      {
        title: "Intellectual property and credits",
        paragraphs: [
          "Unless a third-party credit states otherwise, the original text, information architecture, interface design, LaSpeak name and LaSpeak visual identity on this website are protected by applicable intellectual-property laws. No licence to reproduce, adapt, distribute or commercially exploit them is granted by access to the website.",
          "The founder portrait is published with Denis Gasenchenko’s authorisation. Other photographic and visual assets were supplied for the project and remain subject to the rights and licence terms of their respective authors or rightsholders. Third-party names and marks remain the property of their owners. Please contact the publisher before any reuse beyond exceptions permitted by law.",
          "The Onest typeface is distributed under the SIL Open Font License. Editorial diagrams and example learning situations shown on the website are generic and do not depict a real learner, teacher, customer or deployment.",
        ],
      },
      {
        title: "Reporting content and contacting the publisher",
        paragraphs: [
          "To report an accessibility issue, technical problem, suspected infringement or unlawful content, email support@laspeak.eu with the page address and enough detail to assess the request. Personal-data requests should be sent to privacy@laspeak.eu.",
          "This notice is intended to reflect the website as it currently operates. It is reviewed when the project status, publisher, hosting, data practices or commercial activity changes.",
        ],
      },
    ],
  },
  cookies: {
    label: "Cookies and local storage",
    title: "No tracking by design.",
    description:
      "The LaSpeak public website does not use analytics, advertising cookies, tracking pixels or persistent browser storage.",
    intro:
      "No consent banner is shown because LaSpeak currently places no non-essential cookie or other tracker on your device.",
    updated,
    sections: [
      {
        title: "What this website does not store",
        paragraphs: [
          "LaSpeak does not use analytics cookies, advertising cookies, social-media pixels, fingerprinting, cross-site tracking, localStorage or sessionStorage. It does not create an advertising identifier or visitor profile.",
          "The colour-theme choice exists only in the page’s working memory. It disappears when the page is reloaded or closed and is not sent to LaSpeak.",
        ],
      },
      {
        title: "Technical delivery is not audience tracking",
        paragraphs: [
          "As with any website, a request must reach the hosting provider. Vercel may process technical request information such as an IP address, timestamp, requested URL, user agent and security signals to deliver the page, prevent abuse and maintain the service. LaSpeak does not use those requests for audience measurement or advertising.",
          "When technical logs are accessible to the publisher, they are used only for security and fault diagnosis and are retained for no more than 30 days, unless a specific security incident requires a longer, documented investigation.",
        ],
      },
      {
        title: "External links",
        paragraphs: [
          "LinkedIn is provided as an ordinary outbound link, not as an embedded social widget. No request is made to LinkedIn merely because you view this website. If you follow the link, LinkedIn’s own privacy and cookie terms apply on its service.",
          "Email links open your chosen email application. They do not submit information through this website.",
        ],
      },
      {
        title: "If this changes",
        paragraphs: [
          "If LaSpeak later introduces a non-essential analytics, advertising or social-media tracker, this policy will identify the provider, purpose, legal basis and lifetime before the tracker is activated. Where consent is required, the tracker will remain disabled until a freely given choice is recorded, and refusing will be as easy as accepting.",
          "Questions about this policy may be sent to privacy@laspeak.eu. Technical questions may be sent to support@laspeak.eu.",
        ],
        details: [
          {
            label: "Privacy",
            value: siteConfig.PRIVACY_EMAIL,
            href: emailHref(siteConfig.PRIVACY_EMAIL, "LaSpeak — cookies and privacy"),
          },
          {
            label: "Support",
            value: siteConfig.SUPPORT_EMAIL,
            href: emailHref(siteConfig.SUPPORT_EMAIL, "LaSpeak — website support"),
          },
        ],
      },
    ],
  },
  terms: {
    label: "Website terms",
    title: "Terms of use",
    description:
      "Conditions for accessing and using the public LaSpeak product website.",
    intro:
      "These terms apply to the public website. Product access, implementation services and commercial terms are covered by separate written agreements where applicable.",
    updated,
    sections: [
      {
        title: "Purpose and scope",
        paragraphs: [
          "The website presents LaSpeak, its product workflow and the professional contexts it supports. It also provides direct contact points for product and implementation conversations. No purchase, subscription or service contract is concluded through the website itself.",
          "Public product descriptions explain the core workflow but do not replace an agreed specification, implementation scope or commercial agreement. Editorial diagrams use generic content so that no learner, teacher or organisation is exposed.",
        ],
      },
      {
        title: "Access and acceptable use",
        paragraphs: [
          "You may access and link to the public pages for lawful informational purposes. You must not attempt to compromise the website, bypass security controls, disrupt availability, introduce malicious code, misrepresent an affiliation with LaSpeak or use the content in a way that infringes another person’s rights.",
          "There is no public account area or file-upload facility on this website. Do not email learner names, lesson recordings, transcripts, special-category data, confidential employer information or material you are not authorised to disclose. A high-level description is sufficient for an introductory product conversation.",
        ],
      },
      {
        title: "Information, availability and responsibility",
        paragraphs: [
          "The publisher takes reasonable care to keep the public product information accurate and the website available. Nothing on the website is legal, regulatory, educational-assessment or other professional advice.",
          "To the extent permitted by applicable law, the publisher is not responsible for indirect loss arising solely from reliance on general website information or from temporary unavailability. Nothing in these terms excludes or limits liability where doing so would be unlawful, including liability for fraud, wilful misconduct or rights that cannot be waived.",
        ],
      },
      {
        title: "Intellectual property and external services",
        paragraphs: [
          "The website and its original content remain protected as described in the Legal notice. You may quote short extracts with clear attribution and a link where permitted by law; broader reproduction or commercial reuse requires prior permission.",
          "Links to email services and LinkedIn are provided for convenience. Those services are operated independently and apply their own terms. A link does not imply endorsement of every statement or service found at the destination.",
        ],
      },
      {
        title: "Changes, applicable rules and contact",
        paragraphs: [
          "These terms may be updated when the website or legal status changes. The version displayed on this page applies from its stated update date. Any mandatory law or non-waivable protection that applies to a visitor remains unaffected.",
          "Because no purchase or service contract is concluded through this website, these terms do not contain online-sales, withdrawal, subscription-cancellation or consumer-mediation provisions. Where a commercial relationship is proposed, the applicable contractual information is provided before commitment.",
        ],
        details: [
          {
            label: "General enquiries",
            value: siteConfig.HELLO_EMAIL,
            href: emailHref(siteConfig.HELLO_EMAIL, "LaSpeak — terms of use"),
          },
          {
            label: "Website support",
            value: siteConfig.SUPPORT_EMAIL,
            href: emailHref(siteConfig.SUPPORT_EMAIL, "LaSpeak — website support"),
          },
        ],
      },
    ],
  },
};
