import type { EditorialPage, Article } from "../types";
import { legalPages } from "./legal";
import { emailHref, siteConfig } from "@/lib/site-config";

export const pages: Record<
  | "providers"
  | "product"
  | "about"
  | "privacy"
  | "legal"
  | "cookies"
  | "terms",
  EditorialPage
> = {
  providers: {
    label: "For adult and professional FLE providers",
    title: "A little less lost between lessons.",
    description:
      "See how source-linked, teacher-reviewed evidence supports handovers, lesson planning and formative progress conversations in adult FLE provision.",
    intro:
      "A course is a sequence of human interactions. When teachers, timetables or groups change, the useful context should not have to start again.",
    sections: [
      {
        title: "What gets lost between sessions",
        paragraphs: [
          "A lesson report might record that a class worked on the past tense. It may not preserve whether a learner used a form after a model, repaired it after a correction, or returned to it without help in a later conversation.",
          "For a pedagogical manager or academic coordinator, those distinctions can be useful questions during a handover. They are harder to investigate when the relevant moments sit in separate notes, recordings or LMS entries.",
        ],
      },
      {
        title: "Relationships, not another report",
        paragraphs: [
          "LaSpeak connects a teacher prompt, a learner attempt, a correction, a repair and a possible later reuse, making relevant examples easier to revisit across several lessons.",
          "A proposed connection is not a conclusion about the learner. The original excerpt, lesson reference and surrounding exchange remain available so an educator can assess the interpretation.",
        ],
      },
      {
        title: "Four workflows LaSpeak supports",
        paragraphs: [
          "LaSpeak fits the work teaching teams already do, without introducing another reporting routine.",
        ],
        list: [
          "Teacher handovers: pass on a concrete example and the circumstances in which it occurred.",
          "Progress conversations: discuss a selected production with the learner, rather than only a broad impression.",
          "Planning what to revisit: identify a question for the next lesson without turning absence of evidence into a deficit.",
          "Finding examples: return to a specific excerpt rather than manually searching an entire recording.",
        ],
      },
      {
        title: "Teachers keep the decision",
        paragraphs: [
          "The review options are simple: accept, edit, reject or defer. A teacher can recognise a relevant connection, correct its interpretation, dismiss it, or leave it unresolved.",
          "A system should not infer that a learner has mastered a form simply because it appears in a transcript. Nor should it treat an unobserved form as something the learner cannot do. There may have been no opportunity to use it.",
        ],
      },
      {
        title: "Alongside your existing systems",
        paragraphs: [
          "LaSpeak complements live teaching, course management and your existing LMS. It is an evidence-review layer, not a language school, replacement LMS or automatic assessment system.",
          "The product is focused on adult and professional French as a foreign language in France, with workflows that respect teacher time, recording practices, consent, access permissions and the pedagogical value of looking back.",
        ],
      },
      {
        title: "A focused product conversation",
        paragraphs: [
          "A 20-minute conversation maps LaSpeak to the way your team handles continuity, handovers and progress review. No learner recordings or documents are needed for the first conversation.",
          "Where the workflow fits, the next step is a clearly scoped implementation discussion covering participants, data, access, responsibilities and success criteria.",
        ],
      },
    ],
  },
  product: {
    label: "Product & implementation",
    title: "Bring continuity into view.",
    description:
      "A focused product conversation for adult FLE teams in France: see the LaSpeak workflow and identify the right implementation scope.",
    intro:
      "LaSpeak turns lesson recordings, transcripts and teaching notes into source-linked evidence that teachers can review across lessons.",
    sections: [
      {
        title: "What LaSpeak brings together",
        paragraphs: [
          "LaSpeak connects the moments that matter: teacher prompts, learner attempts, corrections, repairs and later reuse. Each interpretation stays close to its source and remains open to teacher review.",
          "The result is a practical evidence layer for handovers, progress conversations and lesson planning, without turning an isolated transcript into an automatic judgement.",
        ],
      },
      {
        title: "Who the product is built for",
        paragraphs: [
          "LaSpeak is built for teachers, pedagogical managers and academic coordinators working in adult or professional FLE provision in France, including independent training organisations and language schools.",
          "It works alongside existing teaching and course-management systems. The product conversation starts from your actual workflow, whether evidence currently lives in recordings, transcripts, notes or an LMS.",
        ],
      },
      {
        title: "What the product conversation covers",
        paragraphs: [
          "In 20 minutes, we identify one concrete situation — a handover, progress discussion or lesson-planning decision — and show where LaSpeak fits into the sequence of work.",
          "No preparation or learner data is required. A high-level, anonymised description of the workflow is enough to establish the right product scope.",
        ],
        list: [
          "Your context: how teaching and pedagogical follow-up are organised.",
          "A concrete situation: what happened and how you handled it.",
          "Your judgement: what, if anything, would have made the work easier.",
        ],
      },
      {
        title: "Clear product boundaries",
        paragraphs: [
          "LaSpeak supports teacher review; it does not grade learners, rank teachers or certify CEFR levels. The source and the teacher’s interpretation remain distinct throughout the workflow.",
          "The public interface shown on this site uses synthetic data so that no learner, teacher or organisation is exposed. Product demonstrations and implementation discussions use an agreed, privacy-conscious scope.",
        ],
      },
      {
        title: "From conversation to implementation",
        paragraphs: [
          "Where there is a clear fit, we define a limited implementation with an agreed workflow, participants, responsibilities and success criteria.",
          "Before any real lesson material is shared, the implementation framework must cover purpose, lawful basis, participant information, access, security, retention and deletion. Do not send learner material in an introductory email.",
        ],
      },
    ],
  },
  about: {
    label: "About LaSpeak",
    title: "Delivering a lesson.\nKeeping what matters.",
    description:
      "The origin of LaSpeak: Denis Gasenchenko’s experience operating language education workflows and a grounded question about continuity between lessons.",
    intro:
      "LaSpeak starts with a practical distinction: delivering a lesson and preserving useful evidence from it are not the same task.",
    sections: [
      {
        title: "A problem from operating experience",
        paragraphs: [
          "Denis Gasenchenko is a digital-product and B2B operator with more than eight years of experience across FinTech, payroll, business software and online language education.",
          "His work operating live-language teaching workflows led him to investigate what remains after a lesson ends. A session can be delivered, attended and reported, while the context of a particular learner production is still difficult to find later.",
        ],
      },
      {
        title: "The idea behind LaSpeak",
        paragraphs: [
          "LaSpeak is an evidence-review layer that connects relevant moments across lessons while keeping each interpretation close to its source.",
          "The product workflow runs from teacher model or prompt to learner attempt, correction, repair, possible later independent reuse and teacher review. It organises evidence without reducing learning to a formula.",
        ],
      },
      {
        title: "A deliberately focused product",
        paragraphs: [
          "LaSpeak is built first for adult and professional FLE providers in France. This gives the product a concrete teaching context for handovers, formative progress conversations and finding source-linked examples.",
          "The focused scope keeps the product grounded in real teaching work: preserve context, surface relevant evidence and leave the final interpretation with the educator.",
        ],
      },
      {
        title: "What should stay human",
        paragraphs: [
          "Teachers bring knowledge of the learner, the activity and the wider course that a short excerpt cannot contain. Their review is central to the concept, not a final checkbox after an automated judgement.",
          "A useful system should allow an interpretation to be changed, rejected or left unresolved. It should also make it easy to see the difference between something observed and something inferred.",
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
          "LaSpeak does not use analytics, advertising technology, social-media pixels or tracking cookies. Theme and illustrative interface choices remain in page memory only and are not stored or transmitted to LaSpeak.",
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
