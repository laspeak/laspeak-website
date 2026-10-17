import type { Dictionary } from "../types";

export const en: Dictionary = {
  nav: {
    how: "How it works", providers: "For schools", product: "Platform", pricing: "Pricing",
    trust: "Trust & research", about: "About", talk: "Discuss a pilot", menu: "Menu",
    close: "Close", skip: "Skip to content", home: "Home", insights: "Insights",
    privacy: "Privacy", legal: "Legal notice", cookies: "Cookies", terms: "Terms of use", contact: "Contact",
  },
  hero: {
    context: "The learning and operating platform for independent language schools",
    title: "One school.", accent: "Every lesson connected.",
    description: "LaSpeak brings schedules, live teaching, materials, homework, messages and student progress into one continuous service — for the owner, the teacher and the learner.",
    cta: "Explore the platform", secondary: "Discuss an 8-week pilot",
    note: "Built for owner-led schools with 6–25 teachers delivering recurring adult lessons.",
    orbit: ["Schedule", "Teach", "Follow up", "Practise", "Prepare"], centre: "One learning record",
  },
  problem: {
    label: "The fragmented school", title: "A good lesson can still sit inside a disconnected service.",
    description: "The timetable, video room, materials, homework and messages often live in separate tools. The work between lessons becomes manual, repeated and easy to lose.",
    items: [
      { role: "Owner", title: "Exceptions cross systems.", text: "A room change, teacher cover or missed follow-up has no single operational owner." },
      { role: "Teacher", title: "Context must be rebuilt.", text: "Notes, messages and homework do not automatically prepare the next useful teaching step." },
      { role: "Student", title: "The lesson stops too soon.", text: "The next action is separated from the conversation that made it relevant." },
    ],
  },
  roles: {
    label: "One platform, three perspectives", title: "The same school day, connected for everyone.",
    description: "Each role sees the work it needs, while identity, permissions and lesson context remain part of the same service.",
    items: [
      { key: "owner", role: "Owner", title: "Run the service.", text: "Keep schedules, teacher allocation, service exceptions and billing visibility in view.", route: ["Timetable", "Team", "Exceptions", "Oversight"] },
      { key: "teacher", role: "Teacher", title: "Teach with context.", text: "Move from materials and live teaching to reviewed observations and a prepared next step.", route: ["Materials", "Lesson", "Review", "Prepare"] },
      { key: "student", role: "Student", title: "Keep learning.", text: "Find lessons, homework, messages and short native practice in one continuous experience.", route: ["Join", "Learn", "Practise", "Return"] },
    ],
  },
  cycle: {
    label: "The complete learning cycle", title: "Every lesson changes what happens next.",
    description: "LaSpeak connects the operating workflow with the teaching decision — from booking the lesson to preparing the next one.",
    steps: ["Schedule", "Live lesson", "Observe", "Review", "Practise", "Update history", "Prepare", "School oversight"],
    caption: "The unit of value is the complete cycle, not an isolated report.",
  },
  layers: {
    label: "Product architecture", title: "Three layers. One teaching service.",
    description: "English, French and Chinese share the school workflow. Each language keeps the learning interaction it needs.",
    items: [
      { number: "01", title: "Operating platform", purpose: "Keep the school running.", features: ["Scheduling", "Classroom", "Content", "Homework", "Messages", "Finance visibility"], status: "Existing foundation → school product", tone: "foundation" },
      { number: "02", title: "Learning intelligence", purpose: "Carry the context forward.", features: ["Lesson evidence", "Teacher review", "Revisable history", "Next-lesson preparation"], status: "Reports exist; longitudinal state is R&D", tone: "productisation" },
      { number: "03", title: "Native practice", purpose: "Make the next action useful.", features: ["Speaking", "Listening", "Pronunciation", "Chinese handwriting"], status: "Native foundation; new interactions require evaluation", tone: "research" },
    ],
  },
  foundation: {
    label: "Built foundation, explicit next steps", title: "Reuse what works. Build the school boundary carefully.",
    description: "LaSpeak starts from ChinaChild software used to operate a teaching service. Productisation and research remain clearly separated from that existing base.",
    columns: [
      { title: "Already built", status: "Existing foundation", tone: "foundation", text: "Working domains reduce the basic engineering needed for a first school product.", items: ["Recurring schedules", "LiveKit classroom", "Content and homework", "Messaging and records", "Lesson processing", "Native student code"] },
      { title: "Being productised", status: "Productisation", tone: "productisation", text: "Single-school assumptions become a repeatable, isolated service for independent schools.", items: ["School tenancy and roles", "Language-neutral configuration", "European data controls", "Billing and usage", "Onboarding and migration", "Release observability"] },
      { title: "Being tested", status: "Research programme", tone: "research", text: "Research features stay manual or restricted until evidence supports wider release.", items: ["Observation reliability", "Correctable learner state", "Useful follow-up", "Language-specific interaction"] },
    ],
  },
  why: {
    label: "Why LaSpeak", title: "The hard part is the whole loop.",
    items: [
      ["One operational identity", "The same learner, lesson and permissions continue through scheduling, teaching, practice and handovers."],
      ["Context that moves", "A reviewed teaching observation can inform a useful action and return as context for the next lesson."],
      ["A revisable history", "Corrections and deletion change future context without silently rewriting what was known before."],
      ["Language-specific practice", "Speaking, listening and handwriting use different interactions rather than one generic exercise format."],
    ],
  },
  pricing: {
    label: "Simple school pricing", title: "Choose the operating scale. Keep usage visible.",
    description: "Every tier includes the core school workflow, teacher and student access, and defined media and processing allowances.",
    tiers: [
      { name: "Start", price: "€199", unit: "/ month", allowances: ["6 teachers", "100 active students", "300 participant-hours", "20 AI lesson-hours"] },
      { name: "School", price: "€399", unit: "/ month", featured: true, allowances: ["12 teachers", "250 active students", "700 participant-hours", "40 AI lesson-hours"] },
      { name: "Growth", price: "€699", unit: "/ month", allowances: ["25 teachers", "500 active students", "1,400 participant-hours", "80 AI lesson-hours"] },
    ],
    footnote: "Prices exclude VAT. €200 onboarding per school. Additional usage is metered.",
    cta: "See pricing and pilot", details: "No checkout: the first step is a scoped conversation about your school workflow.",
  },
  pilot: {
    label: "First commercial step", title: "An eight-week School pilot", price: "€998",
    description: "Two months on the School tier plus onboarding, beginning with one adult teaching cohort and a named school contact.",
    items: ["An agreed timetable and workflow", "Recurring use by participating teachers", "Follow-up students can complete", "A measured renewal decision"],
    cta: "Discuss a pilot", note: "No learner recordings or documents are needed for the first conversation.",
  },
  trust: {
    label: "Responsible delivery", title: "A school can teach without recording.",
    description: "Recording and AI analysis are optional capabilities with a purpose, appropriate controls and a clear human decision around their use.",
    items: [
      ["Choice before capture", "A join action or generic terms acceptance is not permission for every downstream use."],
      ["Teacher judgement", "The product supports teaching decisions; it does not automatically grade, rank or certify."],
      ["Controlled lifecycle", "Access, retention, correction and deletion are part of the service design."],
      ["Evidence before expansion", "Research features that miss their release gate stay manual or restricted."],
    ],
    cta: "Explore trust and research",
  },
  product: {
    label: "The LaSpeak platform", title: "See the complete teaching service.",
    paragraphs: ["Connect school operations, live teaching and what happens between lessons.", "Start with the workflow your team already runs, then define a focused pilot."],
    cta: "Explore the platform", note: "Clear product status across foundation, productisation and research.", implementation: "Discuss an implementation",
  },
  providers: {
    label: "For independent language schools", title: "Start where the owner feels the friction.",
    description: "For owner-led schools with 6–25 teachers delivering recurring adult lessons in English, French or Chinese.",
    items: [["One timetable", "Coordinate recurring lessons and changes."], ["One teaching thread", "Carry useful context through handovers."], ["One student service", "Connect lessons, follow-up and practice."], ["One accountable workflow", "Give exceptions a visible next action."]],
    complement: "The first commercial motion is designed for online and hybrid adult schools in France.", cta: "For schools",
    alt: "A teacher preparing an online language lesson in a calm workspace.",
  },
  founder: {
    label: "Built by operating", title: "A platform shaped by running a language school.",
    paragraphs: ["Denis Gasenchenko is a digital-product and B2B operator with more than eight years of experience across FinTech, payroll, business software and online language education.", "Building and operating ChinaChild connected the practical problems LaSpeak now turns into a product for independent schools."],
    role: "Founder, ChinaChild and LaSpeak", linkedin: "View Denis on LinkedIn", more: "Read the founder story",
  },
  final: { title: "Connect the school around every lesson.", text: "Bring one real timetable and one recurring adult cohort. We will map the workflow and see whether an eight-week pilot fits.", cta: "Discuss a pilot" },
  footer: {
    statement: "One school. Every lesson connected.",
    development: "LaSpeak is a learning and operating platform for independent language schools.", theme: "Change colour theme",
    emailLabels: { general: "General", founder: "Founder", support: "Support", privacy: "Privacy" },
  },
};
