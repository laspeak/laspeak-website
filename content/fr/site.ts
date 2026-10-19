import type { Dictionary } from "../types";

export const fr: Dictionary = {
  nav: {
    how: "Fonctionnement", providers: "Pour les écoles", product: "Plateforme", pricing: "Tarifs",
    trust: "Confiance & recherche", about: "À propos", talk: "Discuter d’un pilote", menu: "Menu",
    close: "Fermer", skip: "Aller au contenu", home: "Accueil", insights: "Ressources",
    privacy: "Confidentialité", legal: "Mentions légales", cookies: "Cookies", terms: "Conditions d’utilisation", contact: "Contact",
  },
  hero: {
    context: "La plateforme pédagogique et opérationnelle des écoles de langues indépendantes",
    title: "Une école.", accent: "Tous les cours reliés.",
    description: "LaSpeak réunit planning, cours en direct, supports, devoirs, messages et progression dans un même service — pour la direction, l’enseignant et l’apprenant.",
    cta: "Découvrir la plateforme", secondary: "Discuter d’un pilote de 8 semaines",
    note: "Conçu pour les écoles dirigées par leur propriétaire, avec 6 à 25 enseignants et des cours récurrents pour adultes.",
    orbit: ["Planifier", "Enseigner", "Suivre", "Pratiquer", "Préparer"], centre: "Un même parcours d’apprentissage",
  },
  problem: {
    label: "L’école fragmentée", title: "Un bon cours peut rester prisonnier d’un service déconnecté.",
    description: "Planning, visioconférence, supports, devoirs et messages sont souvent répartis entre plusieurs outils. Entre les cours, le travail devient manuel, répété et fragile.",
    items: [
      { role: "Direction", title: "Les exceptions traversent les outils.", text: "Un changement de salle, un remplacement ou un suivi manqué n’a pas toujours de responsable visible." },
      { role: "Enseignant", title: "Le contexte doit être reconstruit.", text: "Notes, messages et devoirs ne préparent pas automatiquement la prochaine étape pédagogique utile." },
      { role: "Apprenant", title: "Le cours s’arrête trop tôt.", text: "L’action suivante est séparée de la conversation qui lui donnait du sens." },
    ],
  },
  roles: {
    label: "Une plateforme, trois perspectives", title: "Une même journée d’école, reliée pour tous.",
    description: "Chacun retrouve le travail dont il a besoin, tandis que l’identité, les droits et le contexte du cours restent dans le même service.",
    items: [
      { key: "owner", role: "Direction", title: "Piloter le service.", text: "Garder en vue planning, affectation des enseignants, exceptions et visibilité financière.", route: ["Planning", "Équipe", "Exceptions", "Pilotage"] },
      { key: "teacher", role: "Enseignant", title: "Enseigner avec le contexte.", text: "Passer des supports et du cours en direct aux observations validées et à la prochaine étape préparée.", route: ["Supports", "Cours", "Validation", "Préparation"] },
      { key: "student", role: "Apprenant", title: "Continuer à apprendre.", text: "Retrouver cours, devoirs, messages et courtes activités natives dans une expérience continue.", route: ["Rejoindre", "Apprendre", "Pratiquer", "Revenir"] },
    ],
  },
  cycle: {
    label: "Le cycle d’apprentissage complet", title: "Chaque cours transforme le suivant.",
    description: "LaSpeak relie le fonctionnement de l’école à la décision pédagogique — de la planification à la préparation du prochain cours.",
    steps: ["Planifier", "Cours en direct", "Observer", "Valider", "Pratiquer", "Actualiser l’historique", "Préparer", "Piloter l’école"],
    caption: "La valeur vient du cycle complet, pas d’un compte rendu isolé.",
  },
  layers: {
    label: "Architecture produit", title: "Trois couches. Un seul service pédagogique.",
    description: "L’anglais, le français et le chinois partagent le fonctionnement de l’école. Chaque langue conserve les interactions d’apprentissage qui lui sont propres.",
    items: [
      { number: "01", title: "Plateforme opérationnelle", purpose: "Faire fonctionner l’école.", features: ["Planning", "Classe virtuelle", "Contenus", "Devoirs", "Messages", "Visibilité financière"], status: "Socle existant → produit école", tone: "foundation" },
      { number: "02", title: "Intelligence pédagogique", purpose: "Faire suivre le contexte.", features: ["Traces du cours", "Validation enseignant", "Historique révisable", "Préparation du prochain cours"], status: "Comptes rendus existants ; état longitudinal en R&D", tone: "productisation" },
      { number: "03", title: "Pratique native", purpose: "Rendre l’action suivante utile.", features: ["Expression orale", "Compréhension", "Prononciation", "Écriture chinoise"], status: "Socle natif ; nouvelles interactions à évaluer", tone: "research" },
    ],
  },
  foundation: {
    label: "Un socle construit, des étapes explicites", title: "Réutiliser ce qui fonctionne. Construire soigneusement la frontière école.",
    description: "LaSpeak s’appuie sur un logiciel déjà utilisé pour exploiter un service d’enseignement. La productisation et la recherche restent clairement distinguées de ce socle.",
    columns: [
      { title: "Déjà construit", status: "Socle existant", tone: "foundation", text: "Des domaines opérationnels réduisent l’ingénierie nécessaire au premier produit école.", items: ["Plannings récurrents", "Classe LiveKit", "Contenus et devoirs", "Messages et dossiers", "Traitement des cours", "Code natif apprenant"] },
      { title: "En productisation", status: "Productisation", tone: "productisation", text: "Les hypothèses mono-école deviennent un service isolé et répétable pour plusieurs écoles.", items: ["Tenancy et rôles", "Configuration multilingue", "Contrôles européens", "Facturation et usage", "Onboarding et migration", "Observabilité des versions"] },
      { title: "En expérimentation", status: "Programme de recherche", tone: "research", text: "Les fonctions de recherche restent manuelles ou restreintes tant que les preuves sont insuffisantes.", items: ["Fiabilité des observations", "État apprenant corrigible", "Suivi utile", "Interactions propres aux langues"] },
    ],
  },
  why: {
    label: "Pourquoi LaSpeak", title: "La difficulté, c’est la boucle complète.",
    items: [
      ["Une identité opérationnelle", "Le même apprenant, le même cours et les mêmes droits traversent planning, enseignement, pratique et passations."],
      ["Un contexte qui circule", "Une observation validée peut orienter une action utile et revenir dans le prochain cours."],
      ["Un historique révisable", "Corrections et suppressions modifient le contexte futur sans réécrire silencieusement l’historique."],
      ["Une pratique adaptée à la langue", "Oral, écoute et écriture utilisent des interactions différentes plutôt qu’un exercice générique."],
    ],
  },
  pricing: {
    label: "Des tarifs école lisibles", title: "Choisir l’échelle. Garder l’usage visible.",
    description: "Chaque offre inclut le fonctionnement essentiel de l’école, les accès enseignants et apprenants, ainsi que des volumes média et traitement définis.",
    tiers: [
      { name: "Start", price: "199 €", unit: "/ mois", allowances: ["6 enseignants", "100 apprenants actifs", "300 participant-heures", "20 heures de cours IA"] },
      { name: "School", price: "399 €", unit: "/ mois", featured: true, allowances: ["12 enseignants", "250 apprenants actifs", "700 participant-heures", "40 heures de cours IA"] },
      { name: "Growth", price: "699 €", unit: "/ mois", allowances: ["25 enseignants", "500 apprenants actifs", "1 400 participant-heures", "80 heures de cours IA"] },
    ],
    footnote: "Prix HT. Onboarding : 200 € par école. Les usages supplémentaires sont facturés séparément.",
    cta: "Voir les tarifs et le pilote", details: "Pas de paiement en ligne : la première étape consiste à cadrer le fonctionnement de votre école.",
  },
  pilot: {
    label: "Première étape commerciale", title: "Un pilote School de huit semaines", price: "998 €",
    description: "Deux mois avec l’offre School et l’onboarding, en commençant par une cohorte adulte et un contact nommé dans l’école.",
    items: ["Un planning et un fonctionnement convenus", "Un usage régulier par les enseignants participants", "Un suivi réalisable par les apprenants", "Une décision de renouvellement mesurée"],
    cta: "Discuter d’un pilote", note: "Aucun enregistrement ni document apprenant n’est nécessaire pour le premier échange.",
  },
  trust: {
    label: "Une mise en œuvre responsable", title: "Une école peut enseigner sans enregistrer.",
    description: "L’enregistrement et l’analyse IA sont optionnels, associés à une finalité, à des contrôles adaptés et à une décision humaine claire.",
    items: [
      ["Choisir avant de capter", "Rejoindre un cours ou accepter des conditions générales ne vaut pas autorisation pour tous les usages ultérieurs."],
      ["Jugement enseignant", "Le produit soutient les décisions pédagogiques ; il ne note, ne classe et ne certifie pas automatiquement."],
      ["Cycle de vie contrôlé", "Accès, conservation, correction et suppression font partie de la conception du service."],
      ["Des preuves avant l’extension", "Les fonctions de recherche qui ne franchissent pas leur seuil restent manuelles ou restreintes."],
    ],
    cta: "Découvrir la confiance et la recherche",
  },
  product: {
    label: "La plateforme LaSpeak", title: "Voir le service pédagogique complet.",
    paragraphs: ["Relier le fonctionnement de l’école, les cours en direct et ce qui se passe entre les séances.", "Partir du fonctionnement réel de l’équipe, puis définir un pilote ciblé."],
    cta: "Découvrir la plateforme", note: "Un statut clair pour la base existante, la productisation et la recherche.", implementation: "Discuter d’une mise en œuvre",
  },
  providers: {
    label: "Pour les écoles de langues indépendantes", title: "Commencer là où la direction ressent la friction.",
    description: "Pour les écoles de 6 à 25 enseignants proposant des cours récurrents pour adultes en anglais, français ou chinois.",
    items: [["Un planning", "Coordonner cours récurrents et changements."], ["Un fil pédagogique", "Préserver le contexte lors des passations."], ["Un service apprenant", "Relier cours, suivi et pratique."], ["Un fonctionnement responsable", "Donner à chaque exception une prochaine action visible."]],
    complement: "La première démarche commerciale vise les écoles d’adultes en ligne ou hybrides en France.", cta: "Pour les écoles",
    alt: "Une enseignante prépare un cours de langue en ligne dans un espace calme.",
  },
  founder: {
    label: "Construit par l’expérience", title: "Une plateforme née de l’exploitation d’une école de langues.",
    paragraphs: ["Denis Gasenchenko travaille depuis plus de huit ans dans les produits numériques et le B2B, entre FinTech, paie, logiciels de gestion et enseignement des langues en ligne.", "La construction et l’exploitation d’une école de langues en ligne ont relié les problèmes concrets que LaSpeak transforme aujourd’hui en produit pour les écoles indépendantes."],
    role: "Fondateur de LaSpeak", linkedin: "Voir Denis sur LinkedIn", more: "Lire l’histoire du fondateur",
  },
  final: { title: "Reliez l’école autour de chaque cours.", text: "Apportez un planning réel et une cohorte adulte récurrente. Nous cartographierons le fonctionnement et vérifierons si un pilote de huit semaines est pertinent.", cta: "Discuter d’un pilote" },
  footer: {
    statement: "Une école. Tous les cours reliés.",
    development: "LaSpeak est une plateforme pédagogique et opérationnelle pour les écoles de langues indépendantes.", theme: "Changer le thème de couleurs",
    emailLabels: { general: "Général", founder: "Fondateur", support: "Assistance", privacy: "Données personnelles" },
  },
};
