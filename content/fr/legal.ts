import type { EditorialPage } from "../types";
import { emailHref, siteConfig } from "@/lib/site-config";

const updated = "Dernière mise à jour : 15 octobre 2026";

export const legalPages: Record<"legal" | "cookies" | "terms", EditorialPage> = {
  legal: {
    label: "Informations légales",
    title: "Mentions légales",
    description:
      "Éditeur, hébergeur, statut de publication, contacts et propriété intellectuelle du site LaSpeak.",
    intro:
      "Les présentes mentions identifient l’éditeur et l’hébergeur du site officiel du produit LaSpeak.",
    updated,
    sections: [
      {
        title: "Site et éditeur",
        paragraphs: [
          "LaSpeak est un produit et une marque d’intelligence pédagogique validée par l’enseignant. Il n’est actuellement pas exploité par une société immatriculée ou une personne morale distincte ; aucune dénomination sociale, forme juridique, mention de capital, immatriculation ou numéro de TVA n’est donc applicable.",
          "Au stade actuel, préalable à l’activité commerciale, le site est édité à titre non professionnel par Denis Gasenchenko, personne physique et fondateur de LaSpeak. Denis Gasenchenko est également directeur de la publication et responsable du contenu éditorial.",
          "L’accès au produit, le périmètre de mise en œuvre et les conditions commerciales ne sont pas contractualisés sur ce site public. Les mentions seront mises à jour avec l’ensemble des coordonnées professionnelles de l’exploitant dès le début de l’activité ou la reprise de l’édition par une personne morale.",
        ],
        details: [
          { label: "Site", value: siteConfig.SITE_URL, href: siteConfig.SITE_URL },
          { label: "Éditeur et directeur de la publication", value: "Denis Gasenchenko" },
          {
            label: "Contact direct",
            value: siteConfig.FOUNDER_EMAIL,
            href: emailHref(siteConfig.FOUNDER_EMAIL, "LaSpeak — question juridique"),
          },
          {
            label: "Demandes générales",
            value: siteConfig.HELLO_EMAIL,
            href: emailHref(siteConfig.HELLO_EMAIL, "LaSpeak — demande générale"),
          },
          {
            label: "Assistance technique",
            value: siteConfig.SUPPORT_EMAIL,
            href: emailHref(siteConfig.SUPPORT_EMAIL, "LaSpeak — assistance site"),
          },
          {
            label: "Données personnelles",
            value: siteConfig.PRIVACY_EMAIL,
            href: emailHref(siteConfig.PRIVACY_EMAIL, "LaSpeak — demande vie privée"),
          },
        ],
      },
      {
        title: "Édition non professionnelle et identification",
        paragraphs: [
          "La loi française permet à la personne qui édite à titre non professionnel un service de communication au public en ligne de ne pas rendre publics son domicile et son numéro de téléphone, sous réserve d’avoir communiqué à l’hébergeur des éléments d’identification personnelle exacts. Le nom de l’éditeur et des contacts électroniques dédiés sont néanmoins publiés volontairement ici par souci de transparence.",
          "Ce régime dépend de l’usage actuel et factuel du site, et non du niveau de maturité du produit présenté. Dès le début d’une activité professionnelle ou d’une contractualisation en ligne, ou en cas de reprise par une entité immatriculée, les informations de l’éditeur devront être remplacées par l’ensemble des mentions professionnelles alors requises, notamment une adresse et un numéro de téléphone le cas échéant.",
        ],
        details: [
          {
            label: "Référence",
            value: "Article 1-1 de la loi n° 2004-575 du 21 juin 2004 (LCEN)",
            href: "https://www.legifrance.gouv.fr/codes/section_lc/JORFTEXT000000801164/LEGISCTA000006117684/",
          },
        ],
      },
      {
        title: "Hébergement",
        paragraphs: [
          "Le site est hébergé et distribué par Vercel. Les coordonnées de l’hébergeur sont publiées y compris lorsque l’hébergement est fourni à titre gratuit.",
        ],
        details: [
          { label: "Hébergeur", value: "Vercel Inc.", href: "https://vercel.com" },
          {
            label: "Adresse",
            value: "440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis",
          },
          { label: "Téléphone", value: "+1 559 288 7060", href: "tel:+15592887060" },
          {
            label: "Politique de confidentialité",
            value: "vercel.com/legal/privacy-notice",
            href: "https://vercel.com/legal/privacy-notice",
          },
        ],
      },
      {
        title: "Propriété intellectuelle et crédits",
        paragraphs: [
          "Sauf crédit attribué à un tiers, les textes originaux, l’architecture de l’information, la conception de l’interface, le nom LaSpeak et l’identité visuelle LaSpeak présents sur ce site sont protégés par les règles applicables de propriété intellectuelle. L’accès au site n’emporte aucune licence de reproduction, d’adaptation, de diffusion ou d’exploitation commerciale.",
          "Le portrait du fondateur est publié avec l’autorisation de Denis Gasenchenko. Les autres photographies et éléments visuels ont été fournis pour le projet et restent soumis aux droits et aux licences de leurs auteurs ou ayants droit respectifs. Les noms et marques de tiers demeurent la propriété de leurs titulaires. Toute réutilisation dépassant les exceptions prévues par la loi nécessite une vérification et, le cas échéant, une autorisation préalable.",
          "La police Onest est distribuée sous licence SIL Open Font License. Les interfaces de produit et les conversations présentées sur le site sont fictives et ne représentent aucun apprenant, enseignant, client ou déploiement réel.",
        ],
      },
      {
        title: "Signaler un contenu et contacter l’éditeur",
        paragraphs: [
          "Pour signaler un problème d’accessibilité, une difficulté technique, une atteinte présumée à un droit ou un contenu manifestement illicite, écrivez à support@laspeak.eu en indiquant l’adresse de la page et les éléments permettant d’examiner la demande. Les demandes relatives aux données personnelles doivent être adressées à privacy@laspeak.eu.",
          "Ces mentions décrivent le fonctionnement actuel du site. Elles sont réexaminées en cas de changement de statut, d’éditeur, d’hébergement, de pratiques de traitement des données ou d’activité commerciale.",
        ],
      },
    ],
  },
  cookies: {
    label: "Cookies et stockage local",
    title: "Aucun suivi, par conception.",
    description:
      "Le site public LaSpeak n’utilise ni outil de mesure d’audience, ni cookie publicitaire, ni pixel de suivi, ni stockage persistant dans le navigateur.",
    intro:
      "Aucun bandeau de consentement n’est affiché, car LaSpeak ne dépose actuellement aucun cookie ou traceur non essentiel sur votre appareil.",
    updated,
    sections: [
      {
        title: "Ce que le site ne stocke pas",
        paragraphs: [
          "LaSpeak n’utilise aucun cookie de mesure d’audience ou de publicité, pixel de réseau social, technique d’empreinte numérique, suivi intersites, localStorage ou sessionStorage. Aucun identifiant publicitaire ni profil de visiteur n’est créé.",
          "Le choix du thème et les décisions prises dans l’exemple illustratif restent uniquement dans la mémoire de travail de la page. Ils disparaissent au rechargement ou à la fermeture de la page et ne sont pas transmis à LaSpeak.",
        ],
      },
      {
        title: "La fourniture technique n’est pas une mesure d’audience",
        paragraphs: [
          "Comme pour tout site, une requête doit parvenir à l’hébergeur. Vercel peut traiter des informations techniques telles que l’adresse IP, l’horodatage, l’URL demandée, l’agent utilisateur et des signaux de sécurité afin de fournir la page, prévenir les abus et maintenir le service. LaSpeak n’utilise pas ces requêtes pour mesurer l’audience ou diffuser de la publicité.",
          "Lorsque des journaux techniques sont accessibles à l’éditeur, ils sont utilisés uniquement pour la sécurité et le diagnostic, puis conservés pendant 30 jours au maximum, sauf si un incident précis nécessite une investigation documentée plus longue.",
        ],
      },
      {
        title: "Liens externes",
        paragraphs: [
          "LinkedIn est proposé sous la forme d’un lien sortant ordinaire, et non d’un module social intégré. La simple consultation du présent site ne déclenche aucune requête vers LinkedIn. Si vous suivez ce lien, les règles de confidentialité et de cookies de LinkedIn s’appliquent sur son service.",
          "Les liens email ouvrent l’application de messagerie choisie par l’utilisateur. Ils ne transmettent aucune information par l’intermédiaire de ce site.",
        ],
      },
      {
        title: "En cas d’évolution",
        paragraphs: [
          "Si LaSpeak ajoute ultérieurement un outil non essentiel de mesure d’audience, de publicité ou de réseau social, la présente politique indiquera le fournisseur, la finalité, la base légale et la durée de vie avant toute activation. Lorsqu’un consentement sera requis, le traceur restera désactivé jusqu’à l’expression d’un choix libre, et le refus sera aussi simple que l’acceptation.",
          "Toute question sur cette politique peut être adressée à privacy@laspeak.eu. Les questions techniques peuvent être adressées à support@laspeak.eu.",
        ],
        details: [
          {
            label: "Données personnelles",
            value: siteConfig.PRIVACY_EMAIL,
            href: emailHref(siteConfig.PRIVACY_EMAIL, "LaSpeak — cookies et vie privée"),
          },
          {
            label: "Assistance",
            value: siteConfig.SUPPORT_EMAIL,
            href: emailHref(siteConfig.SUPPORT_EMAIL, "LaSpeak — assistance site"),
          },
        ],
      },
    ],
  },
  terms: {
    label: "Règles du site",
    title: "Conditions d’utilisation",
    description:
      "Conditions d’accès et d’utilisation du site public du produit LaSpeak.",
    intro:
      "Ces conditions s’appliquent au site public. L’accès au produit, les prestations de mise en œuvre et les conditions commerciales relèvent, le cas échéant, d’accords écrits distincts.",
    updated,
    sections: [
      {
        title: "Objet et périmètre",
        paragraphs: [
          "Le site présente LaSpeak, son fonctionnement et les contextes professionnels qu’il prend en charge. Il fournit également des contacts directs pour les échanges produit et de mise en œuvre. Aucun achat, abonnement ou contrat de service n’est conclu par l’intermédiaire du site lui-même.",
          "Les descriptions publiques présentent le fonctionnement central du produit, sans se substituer à une spécification, un périmètre de mise en œuvre ou un accord commercial convenu. Les interfaces illustratives utilisent des données fictives afin de n’exposer aucun apprenant, enseignant ou organisme.",
        ],
      },
      {
        title: "Accès et usage acceptable",
        paragraphs: [
          "Vous pouvez consulter les pages publiques et créer des liens vers celles-ci à des fins licites d’information. Il est interdit de tenter de compromettre le site, de contourner ses mesures de sécurité, d’en perturber la disponibilité, d’y introduire un code malveillant, de laisser croire à une affiliation avec LaSpeak ou d’utiliser le contenu en violation des droits d’autrui.",
          "Le site public ne comporte ni espace personnel ni dépôt de fichiers. N’envoyez pas par email de noms d’apprenants, d’enregistrements de cours, de transcriptions, de données sensibles, d’informations confidentielles d’un employeur ou de contenus que vous n’êtes pas autorisé à communiquer. Une description générale suffit pour un premier échange produit.",
        ],
      },
      {
        title: "Information, disponibilité et responsabilité",
        paragraphs: [
          "L’éditeur apporte un soin raisonnable à l’exactitude des informations publiques sur le produit et à la disponibilité du site. Aucun contenu du site ne constitue un conseil juridique, réglementaire, d’évaluation pédagogique ou professionnel.",
          "Dans les limites permises par le droit applicable, l’éditeur ne répond pas des préjudices indirects résultant exclusivement de l’utilisation d’informations générales du site ou d’une indisponibilité temporaire. Aucune stipulation ne limite une responsabilité lorsqu’une telle limitation est interdite, notamment en cas de fraude, de faute intentionnelle ou de droit auquel il ne peut être renoncé.",
        ],
      },
      {
        title: "Propriété intellectuelle et services externes",
        paragraphs: [
          "Le site et ses contenus originaux restent protégés dans les conditions exposées dans les Mentions légales. De courts extraits peuvent être cités avec une attribution claire et un lien lorsque la loi l’autorise ; toute reproduction plus large ou réutilisation commerciale nécessite une autorisation préalable.",
          "Les liens vers la messagerie et LinkedIn sont proposés par commodité. Ces services sont exploités indépendamment et appliquent leurs propres conditions. Un lien ne vaut pas approbation de l’ensemble des déclarations ou services proposés à destination.",
        ],
      },
      {
        title: "Évolutions, règles applicables et contact",
        paragraphs: [
          "Ces conditions peuvent être mises à jour lorsque le site ou le statut juridique évolue. La version affichée s’applique à compter de la date de mise à jour indiquée. Les règles impératives et protections auxquelles un visiteur ne peut renoncer demeurent pleinement applicables.",
          "Aucun achat ou contrat de service n’étant conclu par l’intermédiaire du site, ces conditions ne comportent pas de clauses de vente en ligne, de rétractation, de résiliation d’abonnement ou de médiation de la consommation. Lorsqu’une relation commerciale est proposée, les informations contractuelles applicables sont communiquées avant tout engagement.",
        ],
        details: [
          {
            label: "Demandes générales",
            value: siteConfig.HELLO_EMAIL,
            href: emailHref(siteConfig.HELLO_EMAIL, "LaSpeak — conditions d’utilisation"),
          },
          {
            label: "Assistance site",
            value: siteConfig.SUPPORT_EMAIL,
            href: emailHref(siteConfig.SUPPORT_EMAIL, "LaSpeak — assistance site"),
          },
        ],
      },
    ],
  },
};
