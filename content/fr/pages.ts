import type { EditorialPage, Article } from "../types";

export const pages: Record<
  "providers" | "research" | "about" | "privacy",
  EditorialPage
> = {
  providers: {
    label: "Formation linguistique pour adultes",
    title: "D’un cours à l’autre,\npréserver l’essentiel.",
    description:
      "Pour les organismes de formation FLE : explorer un suivi pédagogique fondé sur des traces reliées aux cours et examinées par les enseignants.",
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
          "LaSpeak est conçu pour rapprocher une consigne, une production de l’apprenant, une correction, une reprise et un éventuel réemploi ultérieur. L’objectif est de faciliter le retour à des exemples pertinents sur plusieurs séances.",
          "Un rapprochement proposé n’est pas une conclusion sur l’apprenant. L’extrait d’origine, la référence de la séance et le contexte de l’échange doivent permettre à l’enseignant d’en examiner la pertinence.",
        ],
      },
      {
        title: "Quatre situations à explorer",
        paragraphs: [
          "Nous cherchons à comprendre où cet outil pourrait s’inscrire dans le travail existant d’un organisme de formation FLE, sans imposer une nouvelle routine de compte rendu.",
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
          "Accepter, modifier, rejeter ou différer : les choix prévus pour l’examen d’un rapprochement doivent rester simples. L’enseignant peut reconnaître une piste utile, en corriger l’interprétation ou laisser la question ouverte.",
          "La présence d’une forme dans une transcription ne suffit pas à conclure à sa maîtrise. Son absence ne signifie pas non plus que l’apprenant ne sait pas l’utiliser : l’activité n’en a peut-être pas donné l’occasion.",
        ],
      },
      {
        title: "Un complément à vos outils",
        paragraphs: [
          "LaSpeak vise à compléter les cours, le suivi pédagogique et les outils de gestion de la formation déjà en place. Ce n’est ni une école de langues, ni un LMS de remplacement, ni un système de notation automatique. Aucune intégration technique n’est promise à ce stade.",
          "Notre premier terrain de recherche est la formation linguistique pour adultes et professionnels en France. Nous souhaitons comprendre vos contraintes : temps enseignant, pratiques d’enregistrement, consentement, droits d’accès et intérêt pédagogique d’un retour sur les cours.",
        ],
      },
      {
        title: "Un échange de recherche, pas une décision d’achat",
        paragraphs: [
          "LaSpeak est en phase initiale de R&D et de validation. L’utilité, la fiabilité technique et l’adéquation aux pratiques de terrain restent à examiner. Nous ne revendiquons ni précision validée, ni gain d’apprentissage démontré, ni déploiement existant.",
          "Un échange de 20 minutes sur la continuité pédagogique dans votre organisme constitue un premier pas. Il ne nécessite aucun enregistrement ni document concernant vos apprenants.",
        ],
      },
    ],
  },
  research: {
    label: "Recherche et validation",
    title: "D’abord, comprendre votre travail.",
    description:
      "Un échange de recherche de 20 minutes sur le suivi pédagogique en FLE pour adultes. Sans démonstration commerciale, préparation ni données d’apprenants.",
    intro:
      "Avant de développer davantage le produit, nous voulons comprendre si la perte de contexte entre les cours de langue est un problème qui mérite d’être résolu.",
    sections: [
      {
        title: "Les questions que nous explorons",
        paragraphs: [
          "Quand faut-il revenir sur plusieurs cours ? Qu’est-ce qui rend une production de l’apprenant utile à conserver ? À quelles conditions un rapprochement entre deux extraits aide-t-il l’enseignant, plutôt que d’ajouter une vérification ?",
          "Nous souhaitons aussi comprendre ce qui fonctionne déjà : des notes suffisantes, des situations où un enregistrement n’a pas d’intérêt, ou des tâches pour lesquelles cet outil ferait perdre du temps. Ces réponses comptent tout autant.",
        ],
      },
      {
        title: "Avec qui souhaitons-nous échanger ?",
        paragraphs: [
          "Avec des enseignants, responsables pédagogiques et coordinateurs intervenant dans des formations de FLE pour adultes ou professionnels en France. Les organismes de formation et les écoles de langues constituent notre premier public de recherche.",
          "Il n’est pas nécessaire d’utiliser un LMS particulier, d’enregistrer les cours ou de chercher un nouveau logiciel. Une pratique sans enregistrement peut également nous aider à comprendre les limites du projet.",
        ],
      },
      {
        title: "À quoi ressemblent ces 20 minutes ?",
        paragraphs: [
          "Nous vous proposons de revenir sur une situation récente et ordinaire : une passation, un échange sur la progression ou un moment où vous avez voulu retrouver un exemple. Nous chercherons à comprendre ce que vous avez utilisé, ce qui manquait et l’effort nécessaire.",
          "Aucune préparation, aucune démonstration commerciale. Vous n’avez pas à transmettre de noms d’apprenants, d’enregistrements ou de documents confidentiels. Une description orale anonymisée suffit.",
        ],
        list: [
          "Votre contexte : l’organisation des cours et du suivi pédagogique.",
          "Une situation concrète : ce qui s’est passé et la manière dont vous l’avez gérée.",
          "Votre regard : ce qui aurait, ou non, facilité le travail.",
        ],
      },
      {
        title: "Ce que nous ne prétendons pas",
        paragraphs: [
          "Les interfaces présentées sur ce site reposent sur des échanges fictifs. Ce ne sont pas des captures d’un produit déployé. LaSpeak ne dispose pas d’une précision validée ni de gains d’apprentissage démontrés.",
          "Nous explorons un outil d’examen des traces par l’enseignant, pas un système de notation des apprenants, de classement des enseignants ou de certification CECRL.",
        ],
      },
      {
        title: "Éventuellement, un futur pilote de recherche",
        paragraphs: [
          "Si le besoin et le contexte s’y prêtent, nous pouvons discuter de l’intérêt d’un futur pilote de recherche limité. Il s’agit d’une possibilité à étudier, pas d’un engagement ni d’un programme déjà en place.",
          "Tout travail sur des cours réels nécessiterait au préalable un cadre distinct précisant les finalités, la base légale, l’information des participants, les accès, la conservation et la suppression des données. Merci de ne pas envoyer de documents d’apprenants lors du premier contact.",
        ],
      },
    ],
  },
  about: {
    label: "À propos de LaSpeak",
    title: "Assurer le cours.\nGarder ce qui compte.",
    description:
      "LaSpeak est né d’une question opérationnelle sur la continuité entre les cours de langue. Découvrez le projet et son fondateur, Denis Gasenchenko.",
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
          "Le projet vise à créer un outil de mise en relation et d’examen des traces pédagogiques. Il s’agit de relier des moments pertinents entre plusieurs séances, en maintenant chaque interprétation au plus près de sa source.",
          "Le fil envisagé va du modèle ou de la consigne de l’enseignant à la production de l’apprenant, puis à la correction, à la reprise, à un éventuel réemploi autonome et à l’examen par l’enseignant. C’est une manière d’organiser une question, pas une formule pour prouver l’apprentissage.",
        ],
      },
      {
        title: "Un point de départ volontairement précis",
        paragraphs: [
          "Le premier public de recherche est celui des organismes de FLE pour adultes et professionnels en France. Ce cadre permet d’examiner des situations concrètes de passation, d’échange sur la progression et de recherche d’exemples.",
          "LaSpeak est encore en phase initiale de R&D et de validation. Il s’agit aujourd’hui de comprendre le problème et de vérifier l’intérêt de l’approche, pas de laisser entendre que sa valeur est déjà établie.",
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
    label: "Confidentialité",
    title: "Un site simple.\nUn périmètre clair.",
    description:
      "Contact par email, données techniques et exemples fictifs : le fonctionnement de ce site LaSpeak, sans dépôt de cours ni traceurs publicitaires.",
    intro:
      "Ce site public présente un projet à un stade précoce. Il ne permet pas de déposer des enregistrements, des transcriptions ou des données d’apprenants.",
    sections: [
      {
        title: "Consulter le site",
        paragraphs: [
          "LaSpeak n’ajoute à ce site ni traceurs publicitaires, ni outils de mesure d’audience, ni cookies de suivi. Le choix du thème et les décisions prises dans l’exemple illustratif restent dans la session de la page, sans stockage dans le navigateur.",
          "L’hébergeur traite nécessairement des informations techniques, notamment l’adresse IP et des informations sur le navigateur, pour servir et sécuriser le site. Les modalités d’hébergement et les durées de conservation applicables devront être confirmées avant le lancement sur le domaine définitif.",
        ],
      },
      {
        title: "Prendre contact par email",
        paragraphs: [
          "Les boutons de contact ouvrent votre application de messagerie. Aucun formulaire de ce site ne transmet de données. Si vous envoyez un email, votre adresse et les informations que vous choisissez de communiquer servent à vous répondre et à organiser l’échange.",
          "Merci de ne pas inclure de noms d’apprenants, d’enregistrements ou d’informations confidentielles dans votre premier message. Une description générale de votre pratique suffit. Pour toute question sur votre correspondance ou demande de suppression, contactez Denis via le lien email de cette page.",
        ],
      },
      {
        title: "La recherche fait l’objet d’une étape distincte",
        paragraphs: [
          "Un premier échange n’autorise pas la collecte ou l’analyse de cours. Toute recherche ultérieure impliquant des données personnelles nécessiterait une information et un cadre spécifiques sur les finalités, les responsabilités, la base légale, les accès et la conservation.",
          "Les échanges présentés dans les illustrations du produit sont fictifs. Ils ne correspondent à aucun apprenant, enseignant ou organisme réel.",
        ],
      },
      {
        title: "Les services externes",
        paragraphs: [
          "La messagerie et LinkedIn, lorsqu’un lien est proposé, sont des services externes soumis à leurs propres modalités de confidentialité. La police Onest est hébergée avec le site : sa consultation ne déclenche pas de requête vers Google pour charger la police.",
        ],
      },
    ],
  },
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
          "Ce sont les questions que LaSpeak explore auprès des organismes de FLE pour adultes. L’idée est de relier des moments pertinents, de conserver leurs sources et de laisser les enseignants décider de ce qui mérite d’être transmis. Le gain de temps et l’intérêt pour les pratiques restent à vérifier.",
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
          "LaSpeak explore cet espace : des rapprochements entre séances, reliés aux sources, avec une incertitude visible et un examen humain. C’est une direction de R&D, pas l’affirmation qu’une interprétation automatique serait déjà fiable ou qu’un extrait relié prouverait un apprentissage.",
        ],
      },
    ],
  },
];
