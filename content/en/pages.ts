import type { EditorialPage, Article } from "../types";
import { legalPages } from "./legal";
import { emailHref, siteConfig } from "@/lib/site-config";

export const pages: Record<
  | "providers"
  | "product"
  | "pricing"
  | "trust"
  | "about"
  | "privacy"
  | "legal"
  | "cookies"
  | "terms",
  EditorialPage
> = {
  providers: {
    label: "For independent language schools",
    title: "Start where the owner feels the friction.",
    description: "LaSpeak is designed for owner-led language schools with 6–25 teachers, recurring adult lessons and a direct view of both teaching quality and operations.",
    intro: "A school should not need a collection of disconnected tools to keep its timetable, teaching, follow-up and student experience coherent.",
    sections: [
      {
        title: "The first customer profile",
        paragraphs: [
          "The initial buyer is a school owner who still sees the daily work. The school runs recurring live lessons, has several teachers sharing student context and wants a consistent service without maintaining loosely connected systems.",
          "The 6–25 teacher range is the starting hypothesis: large enough for coordination friction, small enough for a reachable decision-maker and a focused migration.",
        ],
      },
      {
        title: "A complete school workflow",
        paragraphs: [
          "LaSpeak connects scheduling, live teaching, materials, homework, messages and operational oversight with the context needed for the next lesson.",
          "One school identity and one lesson record serve three perspectives: the owner running the service, the teacher continuing the learning story and the student acting between lessons.",
        ],
      },
      {
        title: "Where the value appears",
        paragraphs: ["The first pilot follows the school’s actual timetable rather than a generic product tour."],
        list: [
          "Owner: see schedule changes, unfinished reviews and service exceptions with a next action.",
          "Teacher: begin with relevant learner context instead of reconstructing it from several tools.",
          "Student: move from the lesson to homework, messages and short practice within the same service.",
          "School: measure onboarding, recurring use, follow-up completion and willingness to renew.",
        ],
      },
      {
        title: "A focused first market",
        paragraphs: [
          "Priority prospects teach English, French or Chinese to adults through online or hybrid recurring lessons and can nominate an operational owner for a pilot.",
          "Solo teachers may later use a self-service offer. Large universities and enterprise procurement are outside the first sales motion.",
        ],
      },
      {
        title: "No unmeasured savings claims",
        paragraphs: [
          "The pilot measures duplicate entry, preparation, handoffs, service exceptions, support time and supplier cost against the school’s own baseline.",
          "LaSpeak does not claim proven time, cost or learning improvements before that evidence exists.",
        ],
      },
    ],
  },
  product: {
    label: "The LaSpeak platform",
    title: "Three layers. One teaching service.",
    description: "Explore how school operations, learning continuity and native practice fit into one product for independent language schools.",
    intro: "LaSpeak’s unit of value is the complete learning cycle — from scheduling and live teaching to follow-up, practice, preparation and school oversight.",
    sections: [
      {
        title: "Operating platform — existing foundation to school product",
        paragraphs: [
          "Recurring schedules, a LiveKit classroom, teaching content, homework, messaging, records and lesson processing already exist in the LaSpeak technology base.",
          "LaSpeak productises those domains with school tenancy, roles, language-neutral configuration, European processing controls, billing, onboarding and release observability.",
        ],
      },
      {
        title: "Learning intelligence — reports exist, longitudinal state is R&D",
        paragraphs: [
          "Lesson evidence, teacher review and next-lesson preparation keep teaching decisions connected to their source. Teachers can confirm, edit, dismiss or leave weak evidence unresolved.",
          "A revisable learner history that survives late correction and deletion without corrupting earlier views remains a bounded research and engineering programme.",
        ],
      },
      {
        title: "Native practice — foundation exists, interactions require evaluation",
        paragraphs: [
          "Existing native student code covers lessons, content, homework, messages, schedule, vocabulary and progress.",
          "New speaking, listening, pronunciation and Chinese handwriting interactions are evaluated by task and language rather than presented as validated learning outcomes.",
        ],
      },
      {
        title: "One platform, three perspectives",
        paragraphs: [
          "Owners see schedules, teacher allocation, service exceptions and billing visibility. Teachers work with materials, the live lesson, reviewed observations and a prepared next step. Students find lessons, homework, messages and short practice in one place.",
          "The same learner, lesson and permissions continue across those perspectives rather than being re-created in separate tools.",
        ],
      },
      {
        title: "A staged release, not a blanket claim",
        paragraphs: [
          "Product status is explicit: an operating foundation, productisation work for independent schools and research features with decision gates.",
          "Features that miss a reliability, usefulness, privacy or interaction gate remain manual or restricted. No interface on this website is presented as a production screenshot.",
        ],
      },
    ],
  },
  pricing: {
    label: "Pricing & pilot",
    title: "A school subscription with clear allowances.",
    description: "Three monthly tiers align school size, student activity and variable media usage. The first commercial step is a paid eight-week pilot.",
    intro: "Every tier includes schedules, classroom, materials, homework, messaging and teacher/student access. Prices exclude VAT.",
    sections: [
      { title: "Start — €199 per month", paragraphs: ["For up to 6 named teachers and 100 monthly active students."], list: ["300 participant-hours", "20 processed one-to-one AI lesson-hours", "Core school workflow and teacher/student access"] },
      { title: "School — €399 per month", paragraphs: ["For up to 12 named teachers and 250 monthly active students. This is the starting tier for the first paid pilots."], list: ["700 participant-hours", "40 processed one-to-one AI lesson-hours", "€200 onboarding per school"] },
      { title: "Growth — €699 per month", paragraphs: ["For up to 25 named teachers and 500 monthly active students."], list: ["1,400 participant-hours", "80 processed one-to-one AI lesson-hours", "The same connected school workflow at a larger operating scale"] },
      { title: "Predictable core, metered extra use", paragraphs: ["Additional usage is €0.30 per participant-hour and €1.50 per processed one-to-one AI lesson-hour. A one-hour lesson with one teacher and one student consumes two participant-hours. Group processing receives a separate usage quote."], list: ["Active students are counted monthly", "Teacher seats are named accounts", "AI hours cover one-to-one lessons with up to two recorded tracks"] },
      { title: "Eight-week School pilot — €998", paragraphs: ["The pilot includes two School months at €399 and €200 onboarding. It begins with one adult teaching cohort, an agreed timetable and a named school contact."], list: ["Reliable classroom access", "Recurring use by participating teachers", "Follow-up students can complete", "A measured renewal decision"] },
    ],
  },
  trust: {
    label: "Trust & research",
    title: "Make learning data a controlled service.",
    description: "European adaptation, optional processing and bounded research are delivery workstreams, not marketing labels.",
    intro: "A school can teach without recording. Where recording or AI analysis is used, the purpose, participant controls and human responsibility must be explicit.",
    sections: [
      { title: "Roles and participant choice", paragraphs: ["For school-managed learning data, the working model generally places the school as controller and LaSpeak as processor; LaSpeak separately controls its own commercial account data.", "A join action or generic terms acceptance is not treated as sufficient permission for every downstream use."] },
      { title: "Optional capture, limited processing", paragraphs: ["Recording and AI analysis are optional. The delivery work includes purpose-specific enforcement, retention periods, deletion across derived data, access logging, vendor and transfer review, and an impact-assessment decision.", "Manual notes and homework keep the teaching loop usable when automated processing is disabled."] },
      { title: "Teacher control does not replace assessment", paragraphs: ["LaSpeak supports teachers rather than issuing admissions decisions, grades or certificates. Intended use and actual functionality still determine the applicable AI obligations.", "Restricted release, logging, human oversight and documentation follow the written classification and obligation assessment."] },
      { title: "Four research workstreams", paragraphs: ["The research programme separates evaluation data from development examples and reports results by task and language."], list: ["Observation reliability against a teacher-reviewed reference set", "Correction, deletion and time-consistency invariants", "Teacher acceptance and usefulness of follow-up tasks", "Task-specific usability and performance of native interactions"] },
      { title: "Decision gates before wider release", paragraphs: ["Features that miss a gate stay in manual use. Learning-effect claims require a separately designed and sufficiently powered study.", "Tested backups, recoverable lessons and incident response complete the school promise of dependable continuity."] },
    ],
  },
  about: {
    label: "About LaSpeak",
    title: "Built by operating.\nMade for many schools.",
    description: "LaSpeak grows from Denis Gasenchenko’s experience building digital products and operating online language education into a multilingual product for independent schools.",
    intro: "Dependable B2B systems taught the operating discipline. Running a teaching service exposed the daily work. Building the platform connected the two.",
    sections: [
      {
        title: "A founder who has run the problem",
        paragraphs: [
          "Denis Gasenchenko is a digital-product and B2B operator with more than eight years of experience across FinTech, payroll, business software and online language education.",
          "Through operating an online language school, he has dealt with recurring lessons, teacher availability, classroom access, homework, student communication and financial administration as connected problems.",
        ],
      },
      {
        title: "A substantial technology starting point",
        paragraphs: [
          "Building the service produced scheduling logic, a LiveKit classroom, teaching content, homework, messaging, lesson processing and substantial iOS and Android code.",
          "LaSpeak retains sound components while creating the boundaries required for multiple schools, multilingual delivery and European data practices.",
        ],
      },
      {
        title: "France as the launch base",
        paragraphs: [
          "France brings customer discovery, language expertise, European market access and relevant research capabilities into one programme.",
          "The initial product serves English, French and Chinese teaching. France is the commercial and development base for later European and international expansion.",
        ],
      },
      {
        title: "Rights and data stay explicit",
        paragraphs: [
          "Only verified software rights are contributed, assigned or licensed to the French company. Teaching content, third-party assets and contractor contributions require separate review.",
          "Customer and student data do not transfer with the code. Productisation starts with clean school boundaries and an appropriate data lifecycle.",
        ],
      },
    ],
  },
  privacy: {
    label: "Privacy and data protection",
    title: "Privacy policy",
    description:
      "How the LaSpeak website processes technical data and voluntary email correspondence, with GDPR rights, purposes, retention periods and contact details.",
    intro:
      "This policy covers the LaSpeak public website and voluntary correspondence. The public site has no account, form, payment or learner-upload facility.",
    updated: "Last updated: 15 October 2026",
    sections: [
      {
        title: "Controller and contact points",
        paragraphs: [
          "The data controller is Denis Gasenchenko, a natural person and founder of LaSpeak. LaSpeak is not currently a separate legal person.",
          "Use privacy@laspeak.eu to exercise a data-protection right or ask about this policy. Use support@laspeak.eu for a technical or accessibility issue, hello@laspeak.eu for a general enquiry, and denis@laspeak.eu for founder or product correspondence.",
        ],
        details: [
          {
            label: "Data protection",
            value: siteConfig.PRIVACY_EMAIL,
            href: emailHref(siteConfig.PRIVACY_EMAIL, "LaSpeak — privacy request"),
          },
          {
            label: "Technical support",
            value: siteConfig.SUPPORT_EMAIL,
            href: emailHref(siteConfig.SUPPORT_EMAIL, "LaSpeak — website support"),
          },
          {
            label: "General contact",
            value: siteConfig.HELLO_EMAIL,
            href: emailHref(siteConfig.HELLO_EMAIL, "LaSpeak — general enquiry"),
          },
          {
            label: "Founder and product",
            value: siteConfig.FOUNDER_EMAIL,
            href: emailHref(siteConfig.FOUNDER_EMAIL, "LaSpeak — product conversation"),
          },
        ],
      },
      {
        title: "Data processed when you browse",
        paragraphs: [
          "LaSpeak does not use analytics, advertising technology, social-media pixels or tracking cookies. Theme and presentation choices remain in page memory only and are not stored or transmitted to LaSpeak.",
          "Vercel processes the technical request information required to deliver and protect the website. This may include an IP address, request time, requested URL, user agent, approximate network information and security signals. The purpose is website delivery, availability, troubleshooting and abuse prevention. The legal basis is the controller’s legitimate interest in providing a secure, reliable public website.",
          "Technical request data is generated automatically and is necessary to deliver the requested page. LaSpeak does not create an independent analytics database. Any technical logs accessible to the publisher are retained for no more than 30 days, unless a specific security incident requires a longer, documented investigation.",
        ],
      },
      {
        title: "Data processed when you contact us",
        paragraphs: [
          "Contact links open your own email application; no form submits information through the website. If you write to LaSpeak, the data processed may include your name, email address, organisation, role, message content, signature and ordinary message metadata, but only to the extent you choose to provide it.",
          "The purposes are to answer your request, organise a product conversation, understand professional workflows and maintain relevant follow-up. The legal basis is the controller’s legitimate interest in responding and assessing implementation fit, or steps taken at your request before a possible agreement where applicable. Providing an email address and enough context is voluntary, but a reply may be impossible without them.",
          "Correspondence is retained for up to 24 months after the last substantive exchange, then deleted or anonymised, unless you request earlier deletion or a longer period is required by law or to establish, exercise or defend a legal claim. Records needed to demonstrate the handling of a privacy request may be retained for up to five years after the request is closed.",
        ],
      },
      {
        title: "Product-conversation boundary and sensitive information",
        paragraphs: [
          "An introductory conversation does not authorise the collection or analysis of lesson material. Do not send learner names, recordings, transcripts, health information, special-category data, confidential employer material or information you are not authorised to disclose. A high-level, anonymised description is sufficient.",
          "No product conversation is recorded unless participants receive separate information in advance and an appropriate legal basis is established. Any implementation involving real lesson or learner data requires a separate written framework covering roles, purposes, lawful basis, participant information, security, access, processors, retention and deletion before any data is shared.",
          "The product illustrations use fictional exchanges. They do not represent a real learner, teacher, organisation, customer or deployment. The public site is directed to adult professionals and is not intended to collect children’s data.",
        ],
      },
      {
        title: "Recipients, service providers and international transfers",
        paragraphs: [
          "Correspondence is accessible only to Denis Gasenchenko and, where strictly necessary, the providers used to operate the website and email. The current principal providers are Vercel Inc. for website hosting and Apple iCloud Mail for the laspeak.eu mailboxes. Personal data is not sold, rented or shared for third-party advertising.",
          "These providers may use infrastructure or support operations outside the European Economic Area. Where GDPR transfer rules apply, transfers must rely on an applicable adequacy decision or appropriate safeguards such as the European Commission’s Standard Contractual Clauses. Provider documentation should be consulted for the mechanism applying to a particular processing operation.",
          "Information may also be disclosed where required by law or strictly necessary to protect rights, security or the integrity of the service. LaSpeak does not carry out automated decision-making or profiling.",
        ],
        details: [
          {
            label: "Vercel privacy information",
            value: "vercel.com/legal/privacy-notice",
            href: "https://vercel.com/legal/privacy-notice",
          },
          {
            label: "Apple privacy information",
            value: "apple.com/legal/privacy",
            href: "https://www.apple.com/legal/privacy/",
          },
        ],
      },
      {
        title: "Your rights",
        paragraphs: [
          "Subject to the conditions of the GDPR, you may request access, rectification, erasure, restriction or portability of your personal data, and you may object to processing based on legitimate interests. Where processing is based on consent, consent may be withdrawn at any time without affecting earlier lawful processing.",
          "Send a request to privacy@laspeak.eu. LaSpeak may ask for limited additional information only where reasonably necessary to confirm identity. Requests are handled without undue delay and normally within one month. You may also lodge a complaint with the supervisory authority in your place of residence or work; for France, this is the Commission nationale de l’informatique et des libertés (CNIL).",
        ],
        details: [
          {
            label: "Exercise your rights",
            value: siteConfig.PRIVACY_EMAIL,
            href: emailHref(siteConfig.PRIVACY_EMAIL, "LaSpeak — GDPR rights request"),
          },
          {
            label: "French supervisory authority",
            value: "cnil.fr",
            href: "https://www.cnil.fr/",
          },
        ],
      },
      {
        title: "Security, external links and changes",
        paragraphs: [
          "Reasonable technical and organisational measures are used in proportion to the limited data processed by this website. No internet or email service can nevertheless guarantee absolute security. If you believe information has been exposed or misdirected, contact support@laspeak.eu and privacy@laspeak.eu promptly.",
          "LinkedIn and your email provider are independent external services. Their own terms apply once you choose to visit or use them. The Onest font is served with the website and is not requested from Google when you view a page.",
          "This policy will be updated before the website introduces accounts, forms, analytics, newsletters, payments, uploads or processing of learner material. Material changes will be identified by a new update date.",
        ],
      },
    ],
  },
  ...legalPages,
};

export const articles: Article[] = [
  {
    key: "between-lessons",
    label: "Pedagogical continuity",
    title: "What gets lost between one language lesson and the next?",
    description:
      "A practical reflection on prompts, corrections and learner examples: what is worth carrying into the next lesson, and what should remain a question.",
    intro:
      "“We worked on the past tense” is a useful note. But imagine picking up the next lesson without knowing what that work looked like for one particular learner.",
    readTime: "6 min read",
    takeaway:
      "The aim is not to preserve everything. It is to preserve enough context for the next useful question.",
    sections: [
      {
        title: "Coverage is not the whole story",
        paragraphs: [
          "Consider a fictional lesson in which a learner says « J’ai allé à Lyon ». The teacher offers « Je suis allé à Lyon », and the learner repeats the corrected form. A report that says “past tense: travel” describes the content. A note that says “used the past tense correctly” leaves out the help that preceded the production.",
          "Neither attendance nor a list of activities tells the next teacher how that exchange unfolded. The missing detail is not necessarily a longer summary. It is the relationship between a prompt, an attempt, feedback and the next response.",
          "This distinction matters when deciding what to ask next. A learner who repeated a model might benefit from a different opportunity than one who independently used the same form while telling a new story. That is a teaching judgement, not a classification a short excerpt can settle alone.",
        ],
      },
      {
        title: "A phrase can stay while its context disappears",
        paragraphs: [
          "A recording can preserve the exchange, but a teacher preparing a handover may not have a practical way to return to the right moment. Notes can make it easier to find, but a shorthand phrase such as “past tense improving” can mean different things to different readers.",
          "Suppose « Je suis allé à Marseille » appears several lessons later. Was the learner responding to a direct model? Reading a written exercise? Answering an open question? Did the teacher supply the first words? The sentence itself does not answer those questions.",
          "Preserving context means keeping the activity and surrounding turns available. It also means being honest about what was not captured. If only a partial transcript exists, the limits of that source belong beside the example.",
        ],
      },
      {
        title: "A useful handover is selective",
        paragraphs: [
          "The alternative to losing context is not recording every hesitation in a permanent learner profile. That would create a different problem: too much material, too many interpretations and too little time to review them.",
          "A more practical starting point is one question the receiving teacher already has. For example: “Has this learner had an opportunity to talk about a past experience without a model?” A small set of source-linked examples could support that question without claiming to describe the whole learner.",
          "A handover might contain the original excerpt, what was happening immediately before it, why the teacher selected it and a possible next opportunity. The distinction between the excerpt and the teacher’s interpretation should remain visible.",
        ],
      },
      {
        title: "What might be worth carrying forward",
        paragraphs: [
          "A useful trace is one that helps someone make a grounded teaching decision. The same excerpt may be useful for planning a revisit and unhelpful for any broader judgement about progress.",
        ],
        list: [
          "The learner’s actual words, rather than only a general label.",
          "The task and the help available at that moment.",
          "The teacher’s correction and the learner’s immediate response, when relevant.",
          "A later example with enough context to compare cautiously.",
          "An open question for the next teacher, not an automatic conclusion.",
        ],
      },
      {
        title: "No example does not mean no ability",
        paragraphs: [
          "A learner may not use a particular form because the activity never calls for it. They may choose a different, perfectly workable expression. The recording may be incomplete, or the transcription may be wrong. A missing example should not silently become a negative judgement.",
          "Even a plausible later reuse does not by itself establish durable mastery or demonstrate the effect of a particular correction. It can be worth discussing without being proof. Keeping that uncertainty visible is part of making the evidence useful.",
        ],
      },
      {
        title: "Start with the next conversation",
        paragraphs: [
          "Before adding a tool, try reviewing a recent handover. What did the next teacher actually need to know? Could they find an example? Did the available detail change a decision, or simply add reading?",
          "LaSpeak addresses those questions by connecting relevant moments across lessons, retaining their sources and letting teachers decide what deserves to travel forward. The product keeps each decision grounded in evidence without turning a partial record into a complete account of the learner.",
        ],
      },
    ],
  },
  {
    key: "transcripts",
    label: "Observation & interpretation",
    title: "Why a transcript is useful, but not the same as learning evidence",
    description:
      "A transcript preserves words. Interpreting a learner’s production also requires the task, available support, surrounding exchange and teacher judgement.",
    intro:
      "A transcript can help you find a sentence. It cannot, by itself, tell you what that sentence meant pedagogically.",
    readTime: "6 min read",
    takeaway:
      "Keep the words. Keep the context. Keep the interpretation open to review.",
    sections: [
      {
        title: "The same words, different situations",
        paragraphs: [
          "Take the sentence « Je suis allé à Lyon ». In one fictional exchange, the teacher has just said exactly those words and asked the learner to repeat them. In another, the learner is describing a weekend without that model. The visible sentence is identical. The circumstances are not.",
          "A transcript that includes the surrounding turns is more informative than an isolated quotation. It may reveal the prompt, correction or immediate repair. Yet other context can still be missing: text on a shared screen, a written task, a gesture or support given outside the recorded exchange.",
          "Calling a production “independent” therefore requires caution. It is an interpretation about the support available, not a property that can always be read directly from the sentence.",
        ],
      },
      {
        title: "Observation comes first",
        paragraphs: [
          "An observation is close to the material: a speaker said these words at this point in a lesson. A proposed event label, such as “learner attempt” or “repair”, organises that material, but it too can need checking against the exchange.",
          "An interpretation goes further. It might suggest that a later production relates to an earlier correction or that an example is worth revisiting. Those suggestions can be helpful, provided the reader can see what supports them and what remains uncertain.",
          "The boundary should be explicit. “The form appears in Lessons 02 and 07” is different from “the learner acquired the form because of the correction in Lesson 02”. The second claim is not established by the first.",
        ],
      },
      {
        title: "A source reference is part of the meaning",
        paragraphs: [
          "A useful excerpt needs a route back to its origin. A lesson reference, speaker and timestamp make it possible to revisit the exchange rather than trust a detached label. Where an original recording is legitimately available, the educator may also need to compare it with the transcript.",
          "This is not simply an audit feature. Returning to the source can change the interpretation. What looked like independent reuse might turn out to be a repetition; what looked like an error might be a transcription mistake.",
          "Source access also needs boundaries. Not every colleague should automatically see every recording. The purpose of the review, permissions and retention need to be considered before introducing a tool, not added once lesson material is already collected.",
        ],
      },
      {
        title: "Across lessons, relationships remain hypotheses",
        paragraphs: [
          "Connecting moments over time can raise a more useful question than producing another single-session summary. Did an expression reappear in a different activity? Was the same kind of help present? Would the next teacher benefit from seeing both exchanges?",
          "But similar words are not enough to establish a learning trajectory. The topic, task and available support can change. A possible match should be presented as a possible match, with the relevant sources available for comparison.",
          "There is no need to convert every connection into a percentage. Where there is not enough context, “not enough evidence to interpret” may be the most useful result.",
        ],
      },
      {
        title: "Give review a real place in the workflow",
        paragraphs: [
          "Teacher control needs to be more than an approval button. An educator should be able to adjust the proposed explanation, reject a misleading relationship, or defer a decision until another example is available.",
          "The original observation should remain separate from that review. Editing an interpretation should not rewrite what the learner said. Rejecting a connection should not erase the source excerpt.",
          "Review also costs time. A sensible evaluation should ask whether these choices help with an existing pedagogical task, not merely whether a system can generate more things to check.",
        ],
      },
      {
        title: "A transcript is a starting point",
        paragraphs: [
          "There is no need to dismiss transcripts to recognise their limits. They can be a practical route into a lesson and a way to locate examples. The question is what should happen between retrieving words and making a claim about a learner.",
          "LaSpeak works in that space: source-linked relationships across lessons, visible uncertainty and human review. Automated suggestions remain reviewable interpretations; a connected excerpt is evidence to examine, not proof of learning on its own.",
        ],
      },
    ],
  },
];
