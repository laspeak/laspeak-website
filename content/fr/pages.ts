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
    label: "Pour les écoles de langues indépendantes",
    title: "Commencer là où la direction ressent la friction.",
    description: "LaSpeak est conçu pour les écoles dirigées par leur propriétaire, avec 6 à 25 enseignants, des cours récurrents pour adultes et une vision directe de la pédagogie comme des opérations.",
    intro: "Une école ne devrait pas dépendre d’une collection d’outils déconnectés pour garder cohérents son planning, ses cours, son suivi et l’expérience apprenant.",
    sections: [
      {
        title: "Le profil du premier client",
        paragraphs: [
          "Le premier acheteur est un dirigeant qui reste proche du travail quotidien. L’école organise des cours en direct récurrents, plusieurs enseignants partagent le contexte apprenant et l’équipe veut un service cohérent sans maintenir plusieurs systèmes isolés.",
          "La fourchette de 6 à 25 enseignants constitue l’hypothèse de départ : assez grande pour ressentir la friction de coordination, assez accessible pour une décision et une migration ciblées.",
        ],
      },
      {
        title: "Un fonctionnement école complet",
        paragraphs: [
          "LaSpeak relie planning, cours en direct, supports, devoirs, messages et pilotage opérationnel au contexte nécessaire pour le cours suivant.",
          "Une identité école et une trace de cours servent trois perspectives : la direction pilote le service, l’enseignant poursuit le parcours et l’apprenant agit entre les cours.",
        ],
      },
      {
        title: "Où apparaît la valeur",
        paragraphs: ["Le premier pilote suit le planning réel de l’école plutôt qu’une démonstration produit générique."],
        list: [
          "Direction : voir changements de planning, validations en attente et exceptions avec une prochaine action.",
          "Enseignant : commencer avec le contexte utile au lieu de le reconstruire entre plusieurs outils.",
          "Apprenant : passer du cours aux devoirs, messages et activités courtes dans le même service.",
          "École : mesurer onboarding, usage récurrent, suivi terminé et volonté de renouveler.",
        ],
      },
      {
        title: "Un premier marché ciblé",
        paragraphs: [
          "Les prospects prioritaires enseignent l’anglais, le français ou le chinois à des adultes en ligne ou en hybride et peuvent nommer un responsable opérationnel pour le pilote.",
          "Les enseignants indépendants pourront rejoindre plus tard une offre autonome. Les grandes universités et les achats grands comptes sont hors de la première démarche commerciale.",
        ],
      },
      {
        title: "Aucune économie non mesurée",
        paragraphs: [
          "Le pilote mesure la double saisie, la préparation, les passations, les exceptions, le temps d’assistance et les coûts fournisseurs par rapport au point de départ de l’école.",
          "LaSpeak ne promet pas de gain prouvé de temps, de coût ou d’apprentissage avant l’obtention de ces preuves.",
        ],
      },
    ],
  },
  product: {
    label: "La plateforme LaSpeak",
    title: "Trois couches. Un seul service pédagogique.",
    description: "Découvrez comment fonctionnement de l’école, continuité pédagogique et pratique native forment un seul produit pour les écoles de langues indépendantes.",
    intro: "L’unité de valeur de LaSpeak est le cycle d’apprentissage complet — du planning et du cours en direct au suivi, à la pratique, à la préparation et au pilotage.",
    sections: [
      {
        title: "Plateforme opérationnelle — du socle existant au produit école",
        paragraphs: [
          "Plannings récurrents, classe LiveKit, contenus pédagogiques, devoirs, messages, dossiers et traitement des cours existent déjà dans le socle technologique LaSpeak.",
          "LaSpeak transforme ces domaines en produit avec tenancy école, rôles, configuration multilingue, contrôles européens, facturation, onboarding et observabilité.",
        ],
      },
      {
        title: "Intelligence pédagogique — rapports existants, état longitudinal en R&D",
        paragraphs: [
          "Les traces de cours, la validation enseignant et la préparation suivante maintiennent les décisions pédagogiques liées à leur source. L’enseignant peut confirmer, modifier, écarter ou laisser une preuve faible sans conclusion.",
          "Un historique apprenant révisable, capable de gérer correction tardive et suppression sans altérer les vues antérieures, reste un programme de recherche et d’ingénierie délimité.",
        ],
      },
      {
        title: "Pratique native — un socle existe, les interactions restent à évaluer",
        paragraphs: [
          "Le code natif apprenant existant couvre cours, contenus, devoirs, messages, planning, vocabulaire et progression.",
          "Les nouvelles interactions d’oral, d’écoute, de prononciation et d’écriture chinoise sont évaluées par tâche et par langue, sans être présentées comme des résultats d’apprentissage validés.",
        ],
      },
      {
        title: "Une plateforme, trois perspectives",
        paragraphs: [
          "La direction voit planning, affectation des enseignants, exceptions et visibilité financière. L’enseignant travaille avec supports, cours en direct, observations validées et prochaine étape. L’apprenant retrouve cours, devoirs, messages et pratique courte.",
          "Le même apprenant, le même cours et les mêmes droits traversent ces perspectives au lieu d’être recréés dans des outils séparés.",
        ],
      },
      {
        title: "Une publication progressive, pas une promesse globale",
        paragraphs: [
          "Le statut produit reste explicite : un socle opérationnel, une productisation pour les écoles indépendantes et des fonctions de recherche soumises à des seuils de décision.",
          "Une fonction qui ne franchit pas un seuil de fiabilité, d’utilité, de confidentialité ou d’interaction reste manuelle ou restreinte. Aucun visuel du site n’est présenté comme une capture du produit en production.",
        ],
      },
    ],
  },
  pricing: {
    label: "Tarifs & pilote",
    title: "Un abonnement école avec des volumes clairs.",
    description: "Trois offres mensuelles alignent taille de l’école, activité apprenant et usage média. La première étape commerciale est un pilote payant de huit semaines.",
    intro: "Chaque offre inclut planning, classe, supports, devoirs, messages et accès enseignants/apprenants. Prix hors taxes.",
    sections: [
      { title: "Start — 199 € par mois", paragraphs: ["Jusqu’à 6 enseignants nommés et 100 apprenants actifs par mois."], list: ["300 participant-heures", "20 heures de cours individuels traitées par IA", "Fonctionnement école essentiel et accès enseignants/apprenants"] },
      { title: "School — 399 € par mois", paragraphs: ["Jusqu’à 12 enseignants nommés et 250 apprenants actifs par mois. C’est l’offre de départ des premiers pilotes payants."], list: ["700 participant-heures", "40 heures de cours individuels traitées par IA", "Onboarding de 200 € par école"] },
      { title: "Growth — 699 € par mois", paragraphs: ["Jusqu’à 25 enseignants nommés et 500 apprenants actifs par mois."], list: ["1 400 participant-heures", "80 heures de cours individuels traitées par IA", "Le même fonctionnement école connecté à une échelle supérieure"] },
      { title: "Un socle prévisible, des usages supplémentaires mesurés", paragraphs: ["L’usage supplémentaire est facturé 0,30 € par participant-heure et 1,50 € par heure de cours individuel traitée par IA. Un cours d’une heure avec un enseignant et un apprenant consomme deux participant-heures. Le traitement des groupes fait l’objet d’un devis séparé."], list: ["Les apprenants actifs sont comptés chaque mois", "Les sièges enseignants sont nominatifs", "Les heures IA couvrent les cours individuels avec deux pistes enregistrées au maximum"] },
      { title: "Pilote School de huit semaines — 998 €", paragraphs: ["Le pilote comprend deux mois School à 399 € et 200 € d’onboarding. Il commence avec une cohorte adulte, un planning convenu et un contact nommé dans l’école."], list: ["Accès fiable à la classe", "Usage récurrent par les enseignants participants", "Suivi réalisable par les apprenants", "Décision de renouvellement mesurée"] },
    ],
  },
  trust: {
    label: "Confiance & recherche",
    title: "Faire des données d’apprentissage un service contrôlé.",
    description: "Adaptation européenne, traitement optionnel et recherche délimitée sont des chantiers de livraison, pas des labels marketing.",
    intro: "Une école peut enseigner sans enregistrer. Lorsqu’un enregistrement ou une analyse IA est utilisé, la finalité, les contrôles participants et la responsabilité humaine doivent être explicites.",
    sections: [
      { title: "Rôles et choix des participants", paragraphs: ["Pour les données pédagogiques gérées par l’école, le modèle de travail place généralement l’école comme responsable de traitement et LaSpeak comme sous-traitant ; LaSpeak traite séparément ses propres données commerciales.", "Rejoindre un cours ou accepter des conditions générales ne vaut pas autorisation pour tous les usages ultérieurs."] },
      { title: "Captation optionnelle, traitement limité", paragraphs: ["L’enregistrement et l’analyse IA sont optionnels. Le travail couvre l’application des finalités, les durées de conservation, la suppression des données dérivées, les journaux d’accès, l’examen des fournisseurs et transferts, ainsi qu’une décision d’analyse d’impact.", "Notes manuelles et devoirs maintiennent la boucle pédagogique lorsque le traitement automatisé est désactivé."] },
      { title: "Le contrôle enseignant ne remplace pas l’évaluation juridique", paragraphs: ["LaSpeak soutient les enseignants sans prendre de décision d’admission, attribuer de note ou délivrer de certificat. L’usage prévu et la fonctionnalité réelle déterminent néanmoins les obligations applicables à l’IA.", "Publication restreinte, journalisation, contrôle humain et documentation suivent une classification écrite."] },
      { title: "Quatre chantiers de recherche", paragraphs: ["Le programme sépare les données d’évaluation des exemples de développement et publie les résultats par tâche et par langue."], list: ["Fiabilité des observations face à une référence validée par des enseignants", "Invariants de correction, suppression et cohérence temporelle", "Acceptation enseignant et utilité des activités de suivi", "Utilisabilité et performance propres aux interactions natives"] },
      { title: "Des seuils avant toute diffusion élargie", paragraphs: ["Une fonction qui ne franchit pas son seuil reste manuelle. Toute affirmation d’effet sur l’apprentissage exige une étude distincte et suffisamment dimensionnée.", "Sauvegardes testées, cours récupérables et réponse aux incidents complètent la promesse de continuité."] },
    ],
  },
  about: {
    label: "À propos de LaSpeak",
    title: "Construit par l’expérience.\nPensé pour plusieurs écoles.",
    description: "LaSpeak transforme l’expérience de Denis Gasenchenko dans les produits numériques et l’enseignement des langues en ligne en produit multilingue pour les écoles indépendantes.",
    intro: "Les systèmes B2B fiables ont apporté la discipline opérationnelle. L’exploitation d’un service pédagogique a révélé le travail quotidien. La construction de la plateforme a relié les deux.",
    sections: [
      {
        title: "Un fondateur qui a vécu le problème",
        paragraphs: [
          "Denis Gasenchenko travaille depuis plus de huit ans dans les produits numériques et le B2B, entre FinTech, paie, logiciels de gestion et enseignement des langues en ligne.",
          "En exploitant une école de langues en ligne, il a traité comme un ensemble les cours récurrents, la disponibilité des enseignants, l’accès à la classe, les devoirs, la communication apprenant et l’administration financière.",
        ],
      },
      {
        title: "Un point de départ technologique substantiel",
        paragraphs: [
          "La construction du service a produit logique de planning, classe LiveKit, contenus, devoirs, messages, traitement des cours et un code iOS/Android substantiel.",
          "LaSpeak conserve les composants solides tout en créant les frontières nécessaires à plusieurs écoles, à la livraison multilingue et aux pratiques européennes de données.",
        ],
      },
      {
        title: "La France comme base de lancement",
        paragraphs: [
          "La France rassemble découverte client, expertise linguistique, accès au marché européen et compétences de recherche pertinentes dans un même programme.",
          "Le produit initial sert l’enseignement de l’anglais, du français et du chinois. La France est la base commerciale et de développement avant l’expansion européenne et internationale.",
        ],
      },
      {
        title: "Droits et données restent explicites",
        paragraphs: [
          "Seuls les droits logiciels vérifiés sont apportés, cédés ou licenciés à la société française. Les contenus pédagogiques, actifs tiers et contributions de prestataires font l’objet d’un examen séparé.",
          "Les données clients et apprenants ne sont pas transférées avec le code. La productisation commence par des frontières école propres et un cycle de vie adapté.",
        ],
      },
    ],
  },
  privacy: {
    label: "Confidentialité et données personnelles",
    title: "Politique de confidentialité",
    description:
      "Traitement des données techniques et des échanges volontaires par email sur le site LaSpeak : finalités, bases légales, durées et droits RGPD.",
    intro:
      "Cette politique couvre le site public LaSpeak et les échanges volontaires. Le site public ne comporte ni compte, ni formulaire, ni paiement, ni dépôt de données d’apprenants.",
    updated: "Dernière mise à jour : 15 octobre 2026",
    sections: [
      {
        title: "Responsable du traitement et contacts",
        paragraphs: [
          "Le responsable du traitement est Denis Gasenchenko, personne physique et fondateur de LaSpeak. LaSpeak ne constitue pas actuellement une personne morale distincte.",
          "Utilisez privacy@laspeak.eu pour exercer un droit ou poser une question sur cette politique, support@laspeak.eu pour un problème technique ou d’accessibilité, hello@laspeak.eu pour une demande générale et denis@laspeak.eu pour un échange avec le fondateur ou sur le produit.",
        ],
        details: [
          {
            label: "Données personnelles",
            value: siteConfig.PRIVACY_EMAIL,
            href: emailHref(siteConfig.PRIVACY_EMAIL, "LaSpeak — demande vie privée"),
          },
          {
            label: "Assistance technique",
            value: siteConfig.SUPPORT_EMAIL,
            href: emailHref(siteConfig.SUPPORT_EMAIL, "LaSpeak — assistance site"),
          },
          {
            label: "Contact général",
            value: siteConfig.HELLO_EMAIL,
            href: emailHref(siteConfig.HELLO_EMAIL, "LaSpeak — demande générale"),
          },
          {
            label: "Fondateur et produit",
            value: siteConfig.FOUNDER_EMAIL,
            href: emailHref(siteConfig.FOUNDER_EMAIL, "LaSpeak — échange produit"),
          },
        ],
      },
      {
        title: "Données traitées lors de la navigation",
        paragraphs: [
          "LaSpeak n’utilise ni mesure d’audience, ni technologie publicitaire, ni pixel de réseau social, ni cookie de suivi. Le choix du thème reste uniquement dans la mémoire de la page et n’est ni conservé ni transmis à LaSpeak.",
          "Vercel traite les informations techniques nécessaires pour fournir et protéger le site. Il peut s’agir de l’adresse IP, de l’heure de la requête, de l’URL demandée, de l’agent utilisateur, d’informations réseau approximatives et de signaux de sécurité. Les finalités sont la fourniture du site, sa disponibilité, le diagnostic et la prévention des abus. La base légale est l’intérêt légitime du responsable à proposer un site public sûr et fiable.",
          "Les données techniques sont générées automatiquement et nécessaires pour servir la page demandée. LaSpeak ne constitue aucune base de mesure d’audience indépendante. Les journaux techniques accessibles à l’éditeur sont conservés pendant 30 jours au maximum, sauf si un incident précis nécessite une investigation documentée plus longue.",
        ],
      },
      {
        title: "Données traitées lorsque vous nous écrivez",
        paragraphs: [
          "Les liens de contact ouvrent votre propre messagerie ; aucun formulaire ne transmet de données par le site. Si vous écrivez à LaSpeak, les données traitées peuvent comprendre votre nom, adresse email, organisation, fonction, contenu du message, signature et métadonnées usuelles, uniquement dans la mesure où vous choisissez de les communiquer.",
          "Les finalités sont de répondre à votre demande, d’organiser un échange produit, de comprendre des pratiques professionnelles et d’assurer un suivi pertinent. La base légale est l’intérêt légitime du responsable à répondre et à évaluer l’adéquation d’une mise en œuvre, ou, le cas échéant, l’exécution de mesures prises à votre demande avant un éventuel accord. L’envoi d’une adresse email et d’un contexte suffisant est facultatif, mais une réponse peut être impossible sans ces éléments.",
          "Les correspondances sont conservées pendant 24 mois au maximum après le dernier échange substantiel, puis supprimées ou anonymisées, sauf demande de suppression anticipée ou nécessité légale de les conserver plus longtemps pour constater, exercer ou défendre un droit. Les éléments nécessaires pour démontrer le traitement d’une demande relative aux droits peuvent être conservés pendant cinq ans après sa clôture.",
        ],
      },
      {
        title: "Périmètre des échanges produit et informations sensibles",
        paragraphs: [
          "Un premier échange n’autorise ni la collecte ni l’analyse de supports de cours. N’envoyez pas de noms d’apprenants, enregistrements, transcriptions, données de santé, données sensibles, informations confidentielles d’un employeur ou contenus que vous n’êtes pas autorisé à communiquer. Une description générale et anonymisée suffit.",
          "Aucun échange produit n’est enregistré sans information préalable distincte des participants et sans base légale appropriée. Toute mise en œuvre impliquant des cours réels ou des données d’apprenants exige, avant tout partage, un cadre écrit distinct couvrant les rôles, finalités, base légale, information des personnes, sécurité, accès, sous-traitants, conservation et suppression.",
          "Les situations d’apprentissage décrites sur le site sont génériques. Elles ne représentent aucun apprenant, enseignant, organisme, client ou déploiement réel. Le site public s’adresse à des professionnels adultes et n’est pas destiné à collecter des données d’enfants.",
        ],
      },
      {
        title: "Destinataires, prestataires et transferts internationaux",
        paragraphs: [
          "Les correspondances sont accessibles uniquement à Denis Gasenchenko et, lorsque cela est strictement nécessaire, aux prestataires utilisés pour exploiter le site et la messagerie. Les principaux prestataires actuels sont Vercel Inc. pour l’hébergement du site et Apple iCloud Mail pour les boîtes du domaine laspeak.eu. Les données personnelles ne sont ni vendues, ni louées, ni partagées à des fins publicitaires pour des tiers.",
          "Ces prestataires peuvent s’appuyer sur des infrastructures ou des opérations d’assistance situées hors de l’Espace économique européen. Lorsque les règles du RGPD sur les transferts s’appliquent, ceux-ci doivent reposer sur une décision d’adéquation applicable ou sur des garanties appropriées, telles que les clauses contractuelles types de la Commission européenne. La documentation du prestataire précise le mécanisme applicable à chaque traitement.",
          "Des informations peuvent aussi être communiquées lorsqu’une loi l’exige ou lorsque cela est strictement nécessaire pour protéger des droits, la sécurité ou l’intégrité du service. LaSpeak ne réalise aucune prise de décision automatisée ni aucun profilage.",
        ],
        details: [
          {
            label: "Informations Vercel",
            value: "vercel.com/legal/privacy-notice",
            href: "https://vercel.com/legal/privacy-notice",
          },
          {
            label: "Informations Apple",
            value: "apple.com/legal/privacy",
            href: "https://www.apple.com/legal/privacy/",
          },
        ],
      },
      {
        title: "Vos droits",
        paragraphs: [
          "Dans les conditions prévues par le RGPD, vous pouvez demander l’accès, la rectification, l’effacement, la limitation ou la portabilité de vos données et vous opposer aux traitements fondés sur l’intérêt légitime. Lorsqu’un traitement repose sur le consentement, celui-ci peut être retiré à tout moment sans remettre en cause la licéité du traitement antérieur.",
          "Adressez votre demande à privacy@laspeak.eu. LaSpeak peut demander des informations complémentaires limitées uniquement lorsqu’elles sont raisonnablement nécessaires pour confirmer l’identité. Les demandes sont traitées dans les meilleurs délais et normalement sous un mois. Vous pouvez également saisir l’autorité de contrôle de votre lieu de résidence ou de travail ; en France, il s’agit de la Commission nationale de l’informatique et des libertés (CNIL).",
        ],
        details: [
          {
            label: "Exercer vos droits",
            value: siteConfig.PRIVACY_EMAIL,
            href: emailHref(siteConfig.PRIVACY_EMAIL, "LaSpeak — exercice des droits RGPD"),
          },
          {
            label: "Autorité française",
            value: "cnil.fr",
            href: "https://www.cnil.fr/",
          },
        ],
      },
      {
        title: "Sécurité, liens externes et évolutions",
        paragraphs: [
          "Des mesures techniques et organisationnelles raisonnables sont mises en œuvre au regard du volume limité de données traité par le site. Aucun service internet ou de messagerie ne peut toutefois garantir une sécurité absolue. Si vous pensez qu’une information a été exposée ou mal dirigée, contactez rapidement support@laspeak.eu et privacy@laspeak.eu.",
          "LinkedIn et votre prestataire de messagerie sont des services externes indépendants. Leurs propres conditions s’appliquent lorsque vous choisissez de les consulter ou de les utiliser. La police Onest est fournie avec le site et n’est pas demandée à Google lors de la consultation d’une page.",
          "Cette politique sera mise à jour avant l’ajout de comptes, formulaires, outils de mesure d’audience, newsletters, paiements, dépôts de fichiers ou traitements de supports d’apprenants. Toute modification importante sera signalée par une nouvelle date de mise à jour.",
        ],
      },
    ],
  },
  ...legalPages,
};

export const articles: Article[] = [
  {
    key: "between-lessons",
    label: "Continuité pédagogique",
    title: "Que perd-on entre deux cours de langue ?",
    description:
      "Consignes, corrections, productions : quelles traces conserver entre deux cours pour éclairer la séance suivante sans tirer de conclusions hâtives ?",
    intro:
      "« Nous avons travaillé le passé composé » est une note utile. Mais que permet-elle de comprendre du travail réalisé par un apprenant précis ?",
    readTime: "6 min de lecture",
    takeaway:
      "Il ne s’agit pas de tout conserver, mais de garder assez de contexte pour poser la prochaine question utile.",
    sections: [
      {
        title: "Le contenu abordé ne dit pas tout",
        paragraphs: [
          "Imaginons un échange fictif. L’apprenant dit « J’ai allé à Lyon ». L’enseignant propose « Je suis allé à Lyon », puis l’apprenant reprend la forme corrigée. Un compte rendu mentionnant « passé composé : voyages » décrit le contenu. Une note indiquant « utilise correctement le passé composé » fait disparaître l’aide qui a précédé la production.",
          "Ni la présence au cours ni la liste des activités ne permettent au prochain enseignant de reconstituer cet échange. Ce qui manque n’est pas nécessairement un résumé plus long : c’est le lien entre une consigne, un essai, une correction et la réponse qui suit.",
          "Cette distinction peut éclairer la préparation de la séance suivante. Une reprise immédiate d’un modèle et un réemploi sans aide dans un nouveau récit ne soulèvent pas les mêmes questions. Il appartient à l’enseignant de les interpréter, avec le contexte dont il dispose.",
        ],
      },
      {
        title: "Les mots restent, le contexte s’efface",
        paragraphs: [
          "L’enregistrement peut conserver l’échange, mais la personne qui prépare une passation ne dispose pas toujours d’un moyen pratique de revenir au bon moment. Les notes facilitent parfois ce retour, sans lever toutes les ambiguïtés : « progrès au passé composé » peut recouvrir des situations très différentes.",
          "Quelques cours plus tard, la phrase « Je suis allé à Marseille » apparaît. L’apprenant vient-il d’entendre un modèle ? Lit-il un exercice ? Répond-il à une question ouverte ? L’enseignant a-t-il fourni le début de la phrase ? La production seule ne permet pas de le savoir.",
          "Préserver le contexte suppose de garder l’activité et les tours de parole voisins accessibles. Cela suppose aussi d’indiquer ce qui manque. Si la transcription est partielle, cette limite doit accompagner l’exemple.",
        ],
      },
      {
        title: "Une bonne passation fait des choix",
        paragraphs: [
          "L’alternative à la perte de contexte n’est pas de consigner chaque hésitation dans un profil permanent de l’apprenant. On créerait alors un autre problème : trop de matière, trop d’interprétations et pas assez de temps pour les examiner.",
          "Un point de départ plus concret est une question que se pose déjà l’enseignant qui prend le relais : « Cet apprenant a-t-il eu l’occasion de raconter une expérience passée sans modèle ? » Quelques extraits reliés à leurs sources peuvent éclairer cette question sans prétendre décrire l’ensemble de ses compétences.",
          "Une passation pourrait conserver l’extrait, ce qui le précédait, la raison de sa sélection et une occasion possible de reprise. La différence entre la trace et l’interprétation de l’enseignant doit rester visible.",
        ],
      },
      {
        title: "Quelles traces transmettre ?",
        paragraphs: [
          "Une trace mérite d’être conservée si elle aide à prendre une décision pédagogique située. Un même extrait peut être utile pour préparer une reprise sans permettre de conclure plus largement à une progression.",
        ],
        list: [
          "Les mots de l’apprenant, plutôt qu’une simple étiquette générale.",
          "La tâche et les aides disponibles à ce moment-là.",
          "La correction et la réponse immédiate, lorsqu’elles éclairent la situation.",
          "Un exemple ultérieur dont le contexte permet une comparaison prudente.",
          "Une question ouverte pour la suite, plutôt qu’une conclusion automatique.",
        ],
      },
      {
        title: "Pas de trace ne veut pas dire pas de compétence",
        paragraphs: [
          "Un apprenant peut ne pas utiliser une forme parce que l’activité ne l’appelle pas. Il peut choisir une autre formulation tout à fait pertinente. L’enregistrement peut être incomplet ou la transcription erronée. L’absence d’exemple ne doit pas devenir silencieusement un jugement négatif.",
          "Même un réemploi plausible ne suffit pas à établir une maîtrise durable ni à attribuer l’apprentissage à une correction précise. Il peut mériter une discussion sans constituer une preuve. Rendre cette incertitude visible fait partie de l’utilité de la trace.",
        ],
      },
      {
        title: "Partir du prochain échange",
        paragraphs: [
          "Avant d’ajouter un outil, on peut revenir sur une passation récente. De quoi l’enseignant avait-il réellement besoin ? A-t-il pu retrouver un exemple ? Le détail disponible a-t-il changé une décision ou simplement ajouté du texte à lire ?",
          "LaSpeak répond à ces questions en reliant les moments pertinents, en conservant leurs sources et en laissant les enseignants décider de ce qui mérite d’être transmis. Le produit ancre chaque décision dans des traces sans transformer un dossier partiel en portrait complet de l’apprenant.",
        ],
      },
    ],
  },
  {
    key: "transcripts",
    label: "Observation et interprétation",
    title:
      "Pourquoi une transcription ne suffit pas à décrire ce qui s’est passé pédagogiquement",
    description:
      "Une transcription conserve des mots. Leur interprétation demande aussi de connaître la tâche, les aides et le contexte, sous le regard de l’enseignant.",
    intro:
      "Une transcription aide à retrouver une phrase. À elle seule, elle ne dit pas ce que cette phrase signifie du point de vue pédagogique.",
    readTime: "6 min de lecture",
    takeaway:
      "Conserver les mots. Garder le contexte. Laisser l’interprétation ouverte à l’examen.",
    sections: [
      {
        title: "Les mêmes mots, des situations différentes",
        paragraphs: [
          "Prenons « Je suis allé à Lyon ». Dans un premier échange fictif, l’enseignant vient de prononcer cette phrase et demande de la répéter. Dans un second, l’apprenant raconte son week-end sans disposer de ce modèle. La phrase est identique. Les conditions de production ne le sont pas.",
          "Une transcription qui inclut les tours de parole voisins apporte davantage qu’une citation isolée. Elle peut rendre visibles la consigne, la correction ou la reprise immédiate. D’autres éléments peuvent pourtant manquer : un texte partagé à l’écran, un support écrit, un geste ou une aide donnée hors de l’échange enregistré.",
          "Qualifier une production d’« autonome » demande donc de la prudence. Il s’agit d’une interprétation des aides disponibles, pas d’une propriété toujours lisible dans la phrase.",
        ],
      },
      {
        title: "Partir de ce qui est observé",
        paragraphs: [
          "Une observation reste proche de la matière disponible : une personne a prononcé ces mots à ce moment du cours. Une catégorie comme « production de l’apprenant » ou « reprise » organise cette matière, mais peut elle-même nécessiter une vérification.",
          "L’interprétation va plus loin. Elle peut proposer qu’une production ultérieure soit liée à une correction antérieure, ou qu’un exemple mérite d’être repris. Ces propositions peuvent être utiles si l’on voit sur quoi elles reposent et ce qui reste incertain.",
          "La frontière doit rester explicite. « Cette forme apparaît aux séances 02 et 07 » ne signifie pas « l’apprenant a acquis cette forme grâce à la correction de la séance 02 ». La première observation n’établit pas la seconde affirmation.",
        ],
      },
      {
        title: "La source fait partie du sens",
        paragraphs: [
          "Un extrait utile doit permettre de revenir à son origine. La référence du cours, le locuteur et l’horodatage donnent un point d’entrée dans l’échange. Lorsqu’un enregistrement est légitimement disponible, l’enseignant peut aussi avoir besoin de le comparer à la transcription.",
          "Ce retour n’est pas seulement une vérification formelle. Il peut modifier l’interprétation : un réemploi supposé autonome peut être une répétition ; une erreur apparente peut venir de la transcription.",
          "L’accès aux sources demande également un cadre. Tous les collègues ne doivent pas automatiquement avoir accès à tous les enregistrements. La finalité de l’examen, les droits d’accès et la conservation doivent être précisés avant de collecter des cours.",
        ],
      },
      {
        title: "D’un cours à l’autre, les liens restent des hypothèses",
        paragraphs: [
          "Rapprocher des moments dans la durée peut soulever une question plus utile qu’un compte rendu supplémentaire. L’expression réapparaît-elle dans une autre activité ? L’aide est-elle comparable ? Le prochain enseignant gagnerait-il à voir les deux échanges ?",
          "Mais la proximité des mots ne suffit pas à établir une trajectoire d’apprentissage. Le sujet, la tâche et les supports peuvent changer. Un lien possible doit rester présenté comme tel, avec les sources nécessaires à une comparaison.",
          "Il n’est pas nécessaire de convertir chaque rapprochement en pourcentage. Lorsque le contexte manque, « éléments insuffisants pour interpréter » peut être la réponse la plus utile.",
        ],
      },
      {
        title: "Donner une vraie place à l’examen enseignant",
        paragraphs: [
          "Le contrôle par l’enseignant ne peut pas se résumer à un bouton d’approbation. Il doit pouvoir reformuler l’explication proposée, rejeter un rapprochement trompeur ou différer son jugement en attendant un autre exemple.",
          "L’observation d’origine doit rester distincte de cet examen. Modifier une interprétation ne doit pas réécrire les mots de l’apprenant. Rejeter un lien ne doit pas effacer l’extrait source.",
          "Cet examen demande aussi du temps. Une évaluation utile devra donc vérifier si ces choix servent une tâche pédagogique réelle, et pas seulement si le système peut produire davantage d’éléments à contrôler.",
        ],
      },
      {
        title: "Une transcription est un point de départ",
        paragraphs: [
          "Reconnaître les limites d’une transcription ne revient pas à en nier l’intérêt. Elle peut fournir un accès pratique au cours et faciliter la recherche d’exemples. La question porte sur ce qui se passe entre retrouver des mots et formuler une conclusion sur l’apprenant.",
          "LaSpeak intervient dans cet espace : des rapprochements entre séances, reliés aux sources, avec une incertitude visible et un examen humain. Les suggestions automatiques restent des interprétations à valider ; un extrait relié constitue une trace à examiner, pas une preuve d’apprentissage à lui seul.",
        ],
      },
    ],
  },
];
