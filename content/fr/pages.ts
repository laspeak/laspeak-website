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
    label: "Formation linguistique pour adultes",
    title: "D’un cours à l’autre,\npréserver l’essentiel.",
    description:
      "Pour les organismes de formation FLE : un suivi pédagogique fondé sur des traces reliées aux cours et examinées par les enseignants.",
    intro:
      "Un parcours de formation repose sur une suite d’échanges humains. Lorsque les enseignants, les groupes ou les plannings changent, le contexte utile ne devrait pas repartir de zéro.",
    sections: [
      {
        title: "Ce qui se perd entre les séances",
        paragraphs: [
          "Un compte rendu peut indiquer qu’un cours portait sur le passé composé. Il ne précise pas toujours si l’apprenant a produit une forme après un modèle, l’a reprise après une correction ou l’a réemployée sans aide au cours d’un échange ultérieur.",
          "Pour une équipe pédagogique, ces distinctions peuvent éclairer une passation entre enseignants. Elles deviennent plus difficiles à examiner lorsque les traces issues des cours sont dispersées entre notes, enregistrements et historique du LMS.",
        ],
      },
      {
        title: "Relier des traces, plutôt qu’ajouter un rapport",
        paragraphs: [
          "LaSpeak rapproche une consigne, une production de l’apprenant, une correction, une reprise et un éventuel réemploi ultérieur. Les exemples pertinents deviennent faciles à retrouver sur plusieurs séances.",
          "Un rapprochement proposé n’est pas une conclusion sur l’apprenant. L’extrait d’origine, la référence de la séance et le contexte de l’échange restent accessibles afin que l’enseignant puisse en examiner la pertinence.",
        ],
      },
      {
        title: "Quatre usages pris en charge",
        paragraphs: [
          "LaSpeak s’inscrit dans le travail déjà réalisé par les équipes pédagogiques, sans imposer une nouvelle routine de compte rendu.",
        ],
        list: [
          "Passation entre enseignants : transmettre un exemple concret et les conditions dans lesquelles il a été produit.",
          "Échanges sur la progression de l’apprenant : discuter d’une production choisie, au-delà d’une impression générale.",
          "Préparation d’une reprise : formuler une question pour la séance suivante sans transformer l’absence de trace en difficulté supposée.",
          "Recherche d’exemples : revenir à un passage précis sans parcourir tout un enregistrement.",
        ],
      },
      {
        title: "La décision reste à l’enseignant",
        paragraphs: [
          "Accepter, modifier, rejeter ou différer : les choix pour l’examen d’un rapprochement restent simples. L’enseignant peut reconnaître une piste utile, en corriger l’interprétation ou laisser la question ouverte.",
          "La présence d’une forme dans une transcription ne suffit pas à conclure à sa maîtrise. Son absence ne signifie pas non plus que l’apprenant ne sait pas l’utiliser : l’activité n’en a peut-être pas donné l’occasion.",
        ],
      },
      {
        title: "Un complément à vos outils",
        paragraphs: [
          "LaSpeak complète les cours, le suivi pédagogique et les outils de gestion de la formation déjà en place. C’est une couche d’examen des traces, et non une école de langues, un LMS de remplacement ou un système de notation automatique.",
          "Le produit se concentre sur la formation linguistique pour adultes et professionnels en France, avec des usages qui respectent le temps enseignant, les pratiques d’enregistrement, le consentement, les droits d’accès et l’intérêt pédagogique d’un retour sur les cours.",
        ],
      },
      {
        title: "Un échange produit ciblé",
        paragraphs: [
          "Un échange de 20 minutes permet de situer LaSpeak dans la façon dont votre équipe assure la continuité, les passations et les bilans de progression. Aucun enregistrement ou document d’apprenant n’est nécessaire pour ce premier échange.",
          "Lorsque le fonctionnement correspond à vos besoins, l’étape suivante consiste à cadrer la mise en œuvre : participants, données, accès, responsabilités et critères de réussite.",
        ],
      },
    ],
  },
  product: {
    label: "Produit et mise en œuvre",
    title: "Rendre la continuité visible.",
    description:
      "Un échange produit ciblé pour les équipes de FLE pour adultes en France : découvrir LaSpeak et définir le bon périmètre de mise en œuvre.",
    intro:
      "LaSpeak transforme les enregistrements, transcriptions et notes pédagogiques en traces reliées aux sources que les enseignants examinent entre plusieurs cours.",
    sections: [
      {
        title: "Ce que LaSpeak relie",
        paragraphs: [
          "LaSpeak relie les moments qui comptent : consignes, productions de l’apprenant, corrections, reprises et réemplois ultérieurs. Chaque interprétation reste proche de sa source et soumise à la validation de l’enseignant.",
          "Le résultat est une couche de traces directement exploitable pour les passations, les bilans de progression et la préparation des cours, sans transformer une transcription isolée en jugement automatique.",
        ],
      },
      {
        title: "À qui s’adresse le produit ?",
        paragraphs: [
          "LaSpeak est conçu pour les enseignants, responsables pédagogiques et coordinateurs intervenant dans des formations de FLE pour adultes ou professionnels en France, notamment dans les organismes de formation et les écoles de langues.",
          "Il complète les outils d’enseignement et de gestion déjà en place. L’échange part de votre organisation réelle, que les traces se trouvent aujourd’hui dans des enregistrements, des transcriptions, des notes ou un LMS.",
        ],
      },
      {
        title: "Le contenu de l’échange produit",
        paragraphs: [
          "En 20 minutes, nous identifions une situation concrète — passation, bilan de progression ou décision de préparation — et montrons où LaSpeak s’insère dans la chaîne de travail.",
          "Aucune préparation ni donnée d’apprenant n’est nécessaire. Une description générale et anonymisée suffit pour définir le bon périmètre produit.",
        ],
        list: [
          "Votre contexte : l’organisation des cours et du suivi pédagogique.",
          "Une situation concrète : ce qui s’est passé et la manière dont vous l’avez gérée.",
          "Votre regard : ce qui aurait, ou non, facilité le travail.",
        ],
      },
      {
        title: "Des limites produit claires",
        paragraphs: [
          "LaSpeak assiste l’examen par l’enseignant ; il ne note pas les apprenants, ne classe pas les enseignants et ne certifie aucun niveau CECRL. La source et l’interprétation de l’enseignant restent distinctes tout au long du processus.",
          "L’interface publique présentée sur ce site utilise des données fictives afin de n’exposer aucun apprenant, enseignant ou organisme. Les démonstrations et mises en œuvre s’inscrivent dans un périmètre convenu et respectueux des données.",
        ],
      },
      {
        title: "De l’échange à la mise en œuvre",
        paragraphs: [
          "Lorsque l’adéquation est claire, nous définissons une mise en œuvre limitée avec un processus, des participants, des responsabilités et des critères de réussite convenus.",
          "Avant tout partage de supports de cours réels, le cadre de mise en œuvre couvre les finalités, la base légale, l’information des participants, les accès, la sécurité, la conservation et la suppression. Merci de ne pas envoyer de données d’apprenants dans un premier email.",
        ],
      },
    ],
  },
  about: {
    label: "À propos de LaSpeak",
    title: "Assurer le cours.\nGarder ce qui compte.",
    description:
      "LaSpeak est né d’une question opérationnelle sur la continuité entre les cours de langue. Découvrez le produit et son fondateur, Denis Gasenchenko.",
    intro:
      "À l’origine de LaSpeak, une distinction très concrète : assurer un cours et préserver les traces utiles de ce cours sont deux tâches différentes.",
    sections: [
      {
        title: "Une question née de l’expérience",
        paragraphs: [
          "Denis Gasenchenko travaille depuis plus de huit ans dans les produits numériques et le B2B, entre FinTech, paie, logiciels de gestion et enseignement des langues en ligne.",
          "La gestion de cours de langue en direct l’a conduit à s’intéresser à ce qui reste après la séance. Un cours peut avoir eu lieu, être suivi et faire l’objet d’un compte rendu, sans que le contexte d’une production précise soit facile à retrouver ensuite.",
        ],
      },
      {
        title: "L’idée derrière LaSpeak",
        paragraphs: [
          "LaSpeak est une couche de mise en relation et d’examen des traces pédagogiques. Le produit relie des moments pertinents entre plusieurs séances, en maintenant chaque interprétation au plus près de sa source.",
          "Le parcours va du modèle ou de la consigne de l’enseignant à la production de l’apprenant, puis à la correction, à la reprise, à un éventuel réemploi autonome et à l’examen par l’enseignant. Il organise les traces sans réduire l’apprentissage à une formule.",
        ],
      },
      {
        title: "Un produit volontairement ciblé",
        paragraphs: [
          "LaSpeak est d’abord conçu pour les organismes de FLE pour adultes et professionnels en France. Ce cadre donne au produit un contexte précis pour les passations, les bilans de progression et la recherche d’exemples reliés aux sources.",
          "Ce périmètre ciblé maintient le produit ancré dans le travail pédagogique réel : conserver le contexte, faire remonter les traces pertinentes et laisser l’interprétation finale à l’enseignant.",
        ],
      },
      {
        title: "Ce qui doit rester humain",
        paragraphs: [
          "L’enseignant connaît l’apprenant, l’activité et le parcours dans son ensemble. Un extrait ne contient pas tout ce contexte. Son examen constitue donc le cœur du projet, pas une simple case à cocher après un jugement automatique.",
          "Un outil utile doit permettre de modifier une interprétation, de la rejeter ou de laisser une question ouverte. Il doit aussi rendre visible la différence entre ce qui a été observé et ce qui est supposé.",
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
          "LaSpeak n’utilise ni mesure d’audience, ni technologie publicitaire, ni pixel de réseau social, ni cookie de suivi. Le choix du thème et les décisions prises dans l’interface illustrative restent uniquement dans la mémoire de la page et ne sont ni conservés ni transmis à LaSpeak.",
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
          "Les interfaces du produit présentent des échanges fictifs. Elles ne représentent aucun apprenant, enseignant, organisme, client ou déploiement réel. Le site public s’adresse à des professionnels adultes et n’est pas destiné à collecter des données d’enfants.",
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
