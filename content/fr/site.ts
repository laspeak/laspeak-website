import type { Dictionary } from "../types";
export const fr: Dictionary = {
  nav: {
    how: "Fonctionnement",
    providers: "Organismes FLE",
    research: "Recherche",
    about: "À propos",
    talk: "Échangeons",
    menu: "Menu",
    close: "Fermer",
    skip: "Aller au contenu",
    home: "Accueil",
    insights: "Ressources",
    privacy: "Confidentialité",
    contact: "Contact",
  },
  hero: {
    context:
      "Des traces pédagogiques validées par les enseignants, d’un cours à l’autre",
    title: "Des traces d’apprentissage qui",
    accent: "ne disparaissent pas à la fin du cours.",
    description:
      "LaSpeak relie les consignes, les productions de l’apprenant, les corrections, les reprises et les réemplois ultérieurs entre plusieurs séances, tout en conservant le contexte d’origine et en laissant la décision à l’enseignant.",
    cta: "Échanger avec le fondateur",
    secondary: "Découvrir le fonctionnement",
    note: "En développement. Au service des enseignants, pas à leur place.",
  },
  story: {
    label: "Le cours n’est qu’un début",
    title: "Un cours, c’est bien plus qu’un enregistrement.",
    text: "Une consigne. Une hésitation. Une correction qui fait sens. Une expression réutilisée trois séances plus tard. Ce contexte peut se perdre entre enregistrements, notes et comptes rendus isolés. LaSpeak est conçu pour en préserver le fil.",
    alt: "Une apprenante adulte, casque sur les oreilles, échange avec une enseignante sur son ordinateur.",
    caption:
      "L’échange humain reste au premier plan. Les traces doivent rester reliées à cet échange.",
  },
  problem: {
    label: "Ce qui se perd entre les cours",
    title: "Un compte rendu dit ce qui s’est passé.",
    muted: "Pas forcément ce que l’apprenant sait réutiliser.",
    lines: [
      ["L’assiduité", "indique la présence."],
      ["Le programme", "indique les contenus abordés."],
      ["La transcription", "indique ce qui a été dit."],
    ],
    question:
      "Mais cette production a-t-elle été sollicitée, corrigée, reprise ou réemployée de façon autonome ?",
  },
  journey: {
    label: "Le fonctionnement",
    title: "Suivre les productions.\nGarder le contexte.",
    description:
      "Un enchaînement illustratif, pas une note. LaSpeak vise à relier des moments que l’enseignant pourrait vouloir examiner ensemble.",
    steps: [
      [
        "Modèle ou consigne de l’enseignant",
        "« Qu’est-ce que vous avez fait ce week-end ? »",
      ],
      ["Production de l’apprenant", "« J’ai allé à Lyon. »"],
      ["Correction", "« On dit : je suis allé à Lyon. »"],
      ["Reprise", "« Oui, je suis allé à Lyon. »"],
      [
        "Réemploi autonome ultérieur",
        "« Le mois dernier, je suis allé à Marseille. »",
      ],
      [
        "Validation par l’enseignant",
        "Ce rapprochement est-il pertinent ? L’enseignant en décide.",
      ],
    ],
    distinction: "Observer ≠ interpréter.",
    observation:
      "Observation : l’apprenant a dit « je suis allé » au cours de deux séances différentes.",
    interpretation:
      "Interprétation : le réemploi pourrait être lié à une correction antérieure. C’est une piste à examiner, pas une preuve de maîtrise.",
  },
  viewer: {
    label: "Regarder de plus près",
    title: "Une interprétation n’est utile que si l’on peut la vérifier.",
    description:
      "Revenir à l’extrait. Retrouver l’échange. Valider le rapprochement, le modifier ou laisser la question ouverte.",
    synthetic: "Exemple fictif",
    illustrative: "Interface illustrative",
    lesson: "Séance",
    prompt: "Consigne de l’enseignant",
    attempt: "Production de l’apprenant",
    reuse: "Réemploi autonome possible",
    possible: "Lien possible",
    source: "Source",
    original: "Extrait d’origine",
    speaker: "Locuteur",
    learner: "Apprenant",
    timestamp: "Horodatage",
    event: "Événement",
    relationship: "Rapprochement proposé",
    correction: "Correction lors de la séance 02",
    review: "Validation par l’enseignant",
    actions: ["Accepter", "Modifier", "Rejeter", "Différer"],
    timeline: "D’une séance à l’autre",
    note: "Explorez cet exemple. Vos choix restent dans cette page : aucune sauvegarde ni évaluation.",
    reset: "Réinitialiser l’exemple",
    editLabel: "Votre interprétation",
    save: "Enregistrer dans cet exemple",
    cancel: "Annuler",
    statuses: [
      "Rapprochement accepté dans cet exemple.",
      "Interprétation modifiée dans cet exemple.",
      "Rapprochement rejeté dans cet exemple.",
      "Examen différé dans cet exemple.",
    ],
    viewSource: "Voir la source",
    closeSource: "Fermer la source",
  },
  why: {
    label: "Pourquoi LaSpeak",
    title: "Plus de contexte.\nPas de fausse certitude.",
    items: [
      [
        "Entre plusieurs séances",
        "Pas un compte rendu de plus. Un rapprochement à examiner dans la durée.",
      ],
      [
        "Relié aux sources",
        "Chaque interprétation proposée renvoie à son contexte d’origine.",
      ],
      [
        "L’enseignant décide",
        "L’IA propose ; l’enseignant accepte, modifie, rejette ou diffère.",
      ],
      [
        "L’incertitude reste visible",
        "L’absence de trace n’est pas automatiquement considérée comme un échec.",
      ],
    ],
    is: "Un complément, pas un remplacement.",
    isText:
      "LaSpeak est un outil de mise en relation et d’examen des traces pédagogiques, au service d’un enseignement humain.",
    isnt: "Ce n’est pas",
    exclusions: [
      "un tuteur IA",
      "un LMS",
      "un système de notation automatique",
      "un classement des enseignants",
      "une certification CECRL",
    ],
  },
  providers: {
    label: "Pour les organismes FLE",
    title: "Changer d’enseignant, sans repartir de zéro.",
    description:
      "Un premier terrain de recherche : la formation en FLE pour adultes et professionnels en France, et les équipes qui assurent la continuité pédagogique.",
    items: [
      [
        "Passation entre enseignants",
        "Conserver le contexte utile quand un autre enseignant prend le relais.",
      ],
      [
        "Échanges sur la progression",
        "S’appuyer sur des exemples concrets, au-delà des impressions générales.",
      ],
      [
        "Points à reprendre",
        "Repérer des traces qui méritent un nouvel examen.",
      ],
      [
        "Retrouver un exemple",
        "Revenir au moment pertinent sans revoir l’intégralité du cours.",
      ],
    ],
    complement:
      "LaSpeak est conçu pour compléter les outils d’enseignement et de gestion des formations existants, pas pour les remplacer.",
    cta: "Pour les organismes FLE",
    alt: "Une enseignante explique un point à distance, devant son ordinateur et ses notes.",
  },
  research: {
    label: "Comprendre avant de promettre",
    title: "Aidez-nous à déterminer si ce produit mérite d’exister.",
    paragraphs: [
      "Nous échangeons actuellement avec des organismes et des enseignants de FLE pour adultes en France afin de comprendre si la perte de contexte entre les cours constitue un problème réel et récurrent.",
      "Nous ne voulons pas vendre un logiciel à des organismes avant d’avoir vérifié qu’il leur est réellement utile.",
    ],
    cta: "Partager votre façon de travailler",
    note: "20 minutes. Aucun pitch commercial.",
    pilot: "Discuter d’un pilote de recherche",
  },
  founder: {
    label: "Derrière LaSpeak",
    title: "Un projet né de l’expérience opérationnelle.",
    paragraphs: [
      "Denis Gasenchenko travaille depuis plus de huit ans dans les produits numériques et le B2B, entre FinTech, paie, logiciels de gestion et enseignement des langues en ligne.",
      "La gestion de cours de langue en direct l’a amené à s’intéresser au problème que LaSpeak cherche à explorer : assurer un cours ne suffit pas à préserver les traces utiles d’un apprentissage dans la durée.",
    ],
    role: "Fondateur de LaSpeak",
    linkedin: "Échanger sur LinkedIn",
    linkedinPending: "Le profil LinkedIn sera ajouté au lancement",
    more: "En savoir plus sur le projet",
  },
  final: {
    title: "Ce problème existe-t-il dans votre organisation ?",
    text: "Je préfère le découvrir maintenant plutôt que de passer deux ans à construire un outil dont les enseignants n’ont pas besoin.",
    cta: "Échanger avec Denis",
  },
  footer: {
    statement: "Garder le fil.",
    development:
      "LaSpeak est un produit en cours de recherche et de développement.",
    theme: "Changer le thème de couleurs",
  },
};
