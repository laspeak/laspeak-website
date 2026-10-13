import type { EditorialPage, Article } from "../types";

export const pages: Record<
  "providers" | "research" | "about" | "privacy",
  EditorialPage
> = {
  providers: {
    label: "For adult and professional FLE providers",
    title: "A little less lost between lessons.",
    description:
      "Explore how source-linked, teacher-reviewed evidence could support handovers and formative progress conversations in adult FLE provision.",
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
          "LaSpeak is being designed to connect a teacher prompt, a learner attempt, a correction, a repair and a possible later reuse. The aim is to make relevant examples easier to revisit across several lessons.",
          "A proposed connection is not a conclusion about the learner. The original excerpt, lesson reference and surrounding exchange should remain available so an educator can assess the interpretation.",
        ],
      },
      {
        title: "Four situations worth investigating",
        paragraphs: [
          "We are exploring where this approach would fit into work that already happens, rather than asking teaching teams to adopt a new reporting routine.",
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
          "The intended review options are simple: accept, edit, reject or defer. A teacher can recognise a relevant connection, correct its interpretation, dismiss it, or leave it unresolved.",
          "A system should not infer that a learner has mastered a form simply because it appears in a transcript. Nor should it treat an unobserved form as something the learner cannot do. There may have been no opportunity to use it.",
        ],
      },
      {
        title: "Alongside your existing systems",
        paragraphs: [
          "LaSpeak is designed to complement live teaching, course management and your existing LMS. It is not a new language school, a replacement LMS or an automatic assessment system. No integration is being promised at this stage.",
          "The initial focus is adult and professional French as a foreign language in France. We want to understand your constraints: teacher time, recording practices, consent, access permissions and the pedagogical value of looking back.",
        ],
      },
      {
        title: "An R&D conversation, not a purchase decision",
        paragraphs: [
          "LaSpeak is in early research and validation. Its usefulness, technical reliability and fit with real teaching workflows still need to be investigated. We are not claiming validated accuracy, learning gains or existing deployments.",
          "A 20-minute conversation about how your team handles continuity is a useful starting point. No learner recordings or documents are needed for that conversation.",
        ],
      },
    ],
  },
  research: {
    label: "Research & validation",
    title: "First, understand the work.",
    description:
      "Join a 20-minute research conversation about adult FLE teaching workflows in France. No sales demo, preparation or learner data required.",
    intro:
      "Before building more software, we want to understand whether preserving context between language lessons is a problem worth solving.",
    sections: [
      {
        title: "The questions we are investigating",
        paragraphs: [
          "When does an educator need to look back across lessons? What makes a learner example worth keeping? What would make a proposed connection useful rather than another item to review?",
          "We also want to understand the opposite: where existing notes work well, where a recording is unnecessary and where an evidence-review layer would add effort without enough benefit. Those answers matter just as much.",
        ],
      },
      {
        title: "Who we would like to hear from",
        paragraphs: [
          "Teachers, pedagogical managers and academic coordinators working in adult or professional FLE provision in France. Independent training organisations and language schools are part of the initial discovery audience.",
          "You do not need to use a particular LMS, record your classes or be looking for new software. A workflow that does not involve recordings can help us understand the limits of the idea.",
        ],
      },
      {
        title: "What happens in 20 minutes",
        paragraphs: [
          "We will ask you to describe a recent, ordinary situation: a handover, a progress discussion or a moment when you wanted to find an earlier learner example. Then we will explore what you used, what was missing and whether the effort was worthwhile.",
          "There is no preparation and no sales demonstration. You do not need to share learner names, recordings or confidential documents. An anonymised verbal description is enough.",
        ],
        list: [
          "Your context: how teaching and pedagogical follow-up are organised.",
          "A concrete situation: what happened and how you handled it.",
          "Your judgement: what, if anything, would have made the work easier.",
        ],
      },
      {
        title: "What we are not claiming",
        paragraphs: [
          "The illustrative interfaces on this site are synthetic examples, not screenshots of a deployed product. LaSpeak has not established validated accuracy or demonstrated learning gains.",
          "We are exploring a tool for teacher review, not a system for grading learners, ranking teachers or certifying CEFR levels.",
        ],
      },
      {
        title: "A possible future research pilot",
        paragraphs: [
          "If the problem and context align, we can discuss whether a future, limited research pilot would make sense. This is an option to explore, not a commitment or an existing programme.",
          "Any work involving real lesson material would require a separate agreement on purpose, lawful basis, participant information, access, retention and deletion before data is shared. Please do not send learner material in an introductory email.",
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
          "The product is being designed as an evidence-review layer: a way to connect relevant moments across lessons while keeping each interpretation close to its source.",
          "The conceptual chain runs from teacher model or prompt to learner attempt, correction, repair, possible later independent reuse and teacher review. It is a way to organise a question, not a formula for proving learning.",
        ],
      },
      {
        title: "A deliberately narrow starting point",
        paragraphs: [
          "The initial discovery audience is adult and professional FLE providers in France. This gives the project a concrete teaching context in which to investigate handovers, formative progress conversations and the work of finding examples.",
          "LaSpeak is still in early R&D and validation. The task now is to understand the problem and test whether the proposed approach is useful, not to suggest that its value is already established.",
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
    label: "Privacy",
    title: "A simple site.\nA clear boundary.",
    description:
      "How the LaSpeak public website handles contact emails, technical hosting data and synthetic examples. No learner uploads, tracking analytics or advertising cookies.",
    intro:
      "This public website introduces an early-stage project. It does not accept lesson recordings, transcripts or learner uploads.",
    sections: [
      {
        title: "Browsing this website",
        paragraphs: [
          "LaSpeak does not add advertising trackers, analytics scripts or tracking cookies to this website. The colour-theme preference and illustrative review choices are held in the current page session, not in browser storage.",
          "The hosting provider necessarily processes technical request information, such as IP addresses and browser details, to deliver and secure the site. Hosting arrangements and applicable retention details should be confirmed before the final public-domain launch.",
        ],
      },
      {
        title: "Contact by email",
        paragraphs: [
          "The contact buttons open your own email application. Nothing is submitted through a form on this website. If you send an email, your address and the content you choose to share are used to respond and organise the conversation.",
          "Do not include learner names, lesson recordings or confidential learner information in your first message. A general description of your workflow is sufficient. Contact Denis using the email link on this page for questions about your correspondence or to request deletion.",
        ],
      },
      {
        title: "Research is a separate step",
        paragraphs: [
          "An introductory conversation does not authorise the collection or analysis of lesson material. Any future research involving personal data would need its own clear information and agreement about the purposes, responsibilities, legal basis, access and retention.",
          "The product illustrations contain fictional exchanges. They do not represent a real learner, teacher or school.",
        ],
      },
      {
        title: "External destinations",
        paragraphs: [
          "Email and LinkedIn, when linked, are external services with their own privacy arrangements. Onest is self-hosted as part of the site build; viewing the site does not request the font from Google.",
        ],
      },
    ],
  },
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
          "Those are the questions LaSpeak is investigating with adult FLE providers. The proposal is to connect relevant moments across lessons, retain their sources and let teachers decide what deserves to travel forward. Whether that approach saves effort or improves a workflow remains something to test.",
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
          "LaSpeak is exploring that space: source-linked relationships across lessons, visible uncertainty and human review. It is an R&D direction, not a claim that automated interpretation is already accurate or that a connected excerpt proves learning.",
        ],
      },
    ],
  },
];
