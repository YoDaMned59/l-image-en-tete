/**
 * CONTENU DU SITE — L'Image en Tête
 *
 * Fichier à modifier pour changer les textes (tarifs, phrases, horaires…).
 *
 * Règles simples :
 * 1. Ne touchez qu’au texte entre guillemets "comme ceci".
 * 2. Ne supprimez pas les virgules à la fin des lignes.
 * 3. Pour mettre un mot en gras : **mot**.
 * 4. Les images se changent dans le dossier public/images/ (même nom de fichier).
 *
 * Guide complet : GUIDE-CLIENT.md
 */

export const siteData = {

  // ============================================
  // INFORMATIONS GÉNÉRALES
  // ============================================
  siteName: "L'Image en Tête",
  slogan: "Coaching scolaire et accompagnement dans les apprentissages",

  // ============================================
  // IMAGES (ne changez pas les chemins : remplacez le fichier du même nom)
  // ============================================
  images: {
    logo: {
      src: "/images/logo.webp",
      alt: "L'Image en Tête - Accueil"
    },
    photoMathilde: {
      src: "/images/photo-mathilde.webp",
      alt: "Mathilde - Coach scolaire"
    },
    accueilHero: {
      src: "/images/accueil-hero.webp"
    },
    accueilBilan: {
      src: "/images/accueil-bilan.webp",
      alt: "Explication de la métacognition et des méthodes d'apprentissage"
    },
    accueilAtelier: {
      src: "/images/accueil-atelier.webp",
      alt: "Ateliers de remédiation cognitive"
    },
    sketchnote: {
      src: "/images/atelier-sketchnote.webp",
      alt: "Exemple de sketchnote - Facilitation graphique"
    },
    atelier6Bricks: {
      src: "/images/atelier-6-bricks.webp",
      alt: "Atelier 6 Bricks"
    },
    legotherapie: {
      src: "/images/atelier-legotherapie.webp",
      alt: "Séance de légothérapie autour des briques"
    }
  },

  // ============================================
  // MENU ET PIED DE PAGE
  // ============================================
  navigation: {
    accueil: "Accueil",
    aPropos: "À propos",
    services: "Services",
    bilan: "Mon bilan & suivi",
    ateliers: "Mes ateliers",
    bricks: "6 Bricks",
    legotherapie: "Légothérapie",
    contact: "Contact",
    ouvrirMenu: "Ouvrir le menu",
    fermerMenu: "Fermer le menu"
  },

  footer: {
    navigationTitre: "Navigation",
    legalesTitre: "Informations légales",
    contactTitre: "Contact",
    lienCgv: "Conditions Générales de Vente",
    lienMentions: "Mentions légales",
    lienConfidentialite: "Politique de confidentialité",
    copyright: "Tous droits réservés.",
    creditAvant: "Site réalisé par",
    creditNom: "SDuvivierTech",
    creditUrl: "https://sduviviertech.fr/"
  },

  mediateur: {
    titre: "Médiateur de la consommation",
    nom: "Société Médiation Professionnelle",
    url: "http://www.mediateur-consommation-smp.fr",
    adresse: "Alteritae, 5 rue Salvaing, 12000 Rodez"
  },

  // ============================================
  // COORDONNÉES
  // ============================================
  contact: {
    adresse: "Richebourg, France",
    email: "limagentete@gmail.com",
    telephone: "07.81.17.23.25",
    horaires: "Du lundi au samedi, de 9h à 19h"
  },

  // ============================================
  // PAGE ACCUEIL
  // ============================================
  home: {
    seo: {
      title: "L'Image en Tête - Coaching scolaire et accompagnement dans les apprentissages",
      description:
        "L'Image en Tête : coaching scolaire et accompagnement dans les apprentissages à Richebourg. Bilan, suivi individuel et ateliers de remédiation cognitive. Première rencontre gratuite."
    },
    hero: {
      description: "Je vous accompagne avec bienveillance pour révéler votre potentiel d'apprentissage",
      bouton: "Découvrir mes services"
    },
    presentation: {
      titre: "Mon approche",
      texte: "Je crois que chaque personne a un potentiel unique. Ma mission est de vous accompagner dans la découverte de votre façon d'apprendre pour retrouver plaisir et autonomie dans vos études."
    },
    activites: {
      titre: "Mes activités",
      titreModalites: "Modalités",
      boutonRdv: "Prendre rendez-vous",
      boutonPlus: "En savoir plus"
    },
    cta: {
      titre: "Prêt(e) à commencer votre parcours ?",
      description: "Première rencontre gratuite sur demande",
      boutonPrincipal: "Prendre rendez-vous",
      boutonSecondaire: "En savoir plus"
    }
  },

  // ============================================
  // PAGE À PROPOS
  // ============================================
  about: {
    seo: {
      title: "À propos - L'Image en Tête",
      description:
        "Découvrez le parcours de Mathilde, coach scolaire spécialisée en métacognition et facilitation graphique. L'Image en Tête : accompagnement bienveillant pour enfants et adolescents à Richebourg."
    },
    titre: "À propos",
    heroSubtitle: "Découvrez mon parcours et ma philosophie",

    parcours: {
      titre: "Mon parcours",
      paragraphes: [
        "Je m'appelle Mathilde, et je suis passionnée par les apprentissages et l'accompagnement des jeunes.",
        "Mon parcours n'a pas toujours été simple : au collège, j'ai traversé une période de phobie scolaire. Cette expérience, difficile mais formatrice, m'a poussée à chercher comment apprendre différemment, à comprendre mes propres mécanismes et à redonner du sens aux études.",
        "Avec le temps, j'ai découvert le plaisir d'apprendre et développé des stratégies qui m'ont permis de poursuivre des études supérieures avec confiance.",
        "Aujourd'hui, je partage ces outils et cette approche auprès des jeunes, pour les aider à (re)trouver confiance et plaisir dans leurs apprentissages.",
        "Formée en métacognition et en facilitation graphique, j'allie réflexion sur les processus d'apprentissage et créativité visuelle pour rendre les savoirs plus accessibles et concrets."
      ]
    },

    philosophie: {
      titre: "Ma philosophie",
      paragraphes: [
        "Je suis convaincue que chaque élève a le potentiel de réussir et de s'épanouir à condition de trouver sa propre manière d'apprendre.",
        "Certains ont besoin de plus de temps, d'un environnement calme ou d'outils pour compenser ou s'adapter au système scolaire.",
        "Mon approche s'adresse à des enfants et adolescents présentant des troubles des apprentissages ou à des étudiants souhaitant optimiser leurs études."
      ]
    },

    engagement: {
      titre: "Mon engagement",
      items: [
        "J'adapte mon approche à chaque profil",
        "Prendre du plaisir à apprendre",
        "Aider à mieux se connaitre",
        "Retrouver confiance en ses capacités",
        "Gagner en autonomie"
      ]
    },

    methodes: {
      titre: "Les méthodes que j'utilise",
      items: [
        {
          titre: "Métacognition",
          description: "Comprendre comment on apprend pour choisir des stratégies adaptées"
        },
        {
          titre: "Fonctions exécutives",
          description: "Développement des fonctions exécutives : inhibition, flexibilité, initiation"
        },
        {
          titre: "Facilitation graphique",
          description: "Facilitation graphique : comprendre et apprendre par les visuels"
        }
      ]
    },

    benefices: {
      titre: "Ce que vous allez obtenir",
      items: [
        { titre: "Méthode d'apprentissage sur mesure" },
        { titre: "Autonomie et confiance en soi" },
        { titre: "Plaisir d'apprendre" }
      ]
    },

    approche: {
      titre: "Mon approche en 3 étapes",
      etapes: [
        {
          numero: 1,
          titre: "Bilan personnalisé",
          description: "Un temps d'échange pour identifier le fonctionnement, les besoins et des objectifs concrets."
        },
        {
          numero: 2,
          titre: "Apprendre par le jeu",
          description: "Des exercices ludiques pour entraîner l'attention, la mémoire et les stratégies."
        },
        {
          numero: 3,
          titre: "Transfert des techniques apprises",
          description: "Application des techniques travaillées directement sur les cours scolaires."
        }
      ]
    },

    cta: {
      titre: "Prêt(e) à commencer votre parcours ?",
      description: "Je serais ravie de vous accompagner dans votre démarche",
      bouton: "Prendre contact"
    }
  },

  // ============================================
  // PAGE CONTACT
  // ============================================
  contactPage: {
    seo: {
      title: "Contact - L'Image en Tête",
      description:
        "Contactez L'Image en Tête pour prendre rendez-vous. Coaching scolaire à Richebourg. Première rencontre gratuite. Téléphone : 07.81.17.23.25"
    },
    titre: "Contact",
    heroSubtitle: "N'hésitez pas à me contacter pour toute question",
    formulaire: {
      titre: "Envoyez-moi un message",
      labels: {
        nom: "Nom *",
        email: "Email *",
        message: "Message *"
      },
      consentementAvant: "J'accepte que mes informations soient utilisées pour me recontacter. Détails dans la",
      consentementLien: "politique de confidentialité",
      bouton: "Envoyer le message",
      boutonChargement: "Envoi en cours...",
      messageConfirmation: "Message envoyé ! Je vous répondrai dans les plus brefs délais.",
      erreurChamps: "Veuillez remplir tous les champs du formulaire.",
      erreurRgpd: "Merci d’accepter le traitement de vos données pour envoyer le message.",
      erreurEnvoi: "Erreur lors de l'envoi. Vous pouvez aussi m'écrire directement par email."
    },
    coordonnees: {
      titre: "Coordonnées",
      adresse: "Adresse",
      email: "Email",
      telephone: "Téléphone",
      horaires: "Horaires"
    },
    reseauxSociaux: {
      titre: "Suivez-moi",
      liens: [
        { nom: "Instagram", url: "https://www.instagram.com/limage_en_tete/" },
        { nom: "Facebook", url: "https://www.facebook.com/profile.php?id=61585450187058&locale=fr_FR" }
      ]
    },
    premiereRencontre: {
      titre: "Première rencontre gratuite",
      description: "Sur demande, je propose une première rencontre gratuite pour faire connaissance et évaluer vos besoins."
    }
  },

  // ============================================
  // BOUTON EN BAS DES PAGES SERVICES
  // ============================================
  ctaService: {
    titre: "Intéressé(e) par ce service ?",
    description: "N'hésitez pas à me contacter pour plus d'informations ou pour prendre rendez-vous",
    boutonRdv: "Prendre rendez-vous",
    boutonAccueil: "Retour à l'accueil"
  },

  // ============================================
  // LIBELLÉS COMMUNS DES PAGES SERVICES
  // ============================================
  labelsServices: {
    objectifs: "Objectifs",
    format: "Format",
    tarif: "Tarif",
    approche: "Approche"
  },

  // ============================================
  // LISTE DES SERVICES
  // ============================================
  services: [
    {
      id: "bilan",
      titre: "Bilan & suivi individuel",
      pourQui: "Enfants à partir de 7 ans, étudiants",
      objectifs: [
        "Apprendre à apprendre (métacognition)",
        "Stimuler les fonctions exécutives",
        "Améliorer la prise de notes et la gestion du temps"
      ],
      format: "Séances de 1h à 1h30 - pack de 5 séances",
      tarif: "70 € / 55 € à domicile (CESU possible)",
      ton: "rassurant et motivant",
      modalites: ["Individuel", "À domicile"]
    },
    {
      id: "atelier",
      titre: "Ateliers collectifs",
      pourQui: "Enfants dès 7 ans, parents, étudiants",
      objectifs: [
        "Remédiation cognitive, stratégies d'apprentissage par le jeu",
        "Méthodologie visuelle (mindmap, sketchnote, etc.)"
      ],
      format: "Séance de 1h, groupes de 8 personnes maximum",
      tarif: "10 € à 20 €",
      ton: "ludique et collaboratif",
      modalites: ["Collectif", "À domicile"]
    },
    {
      id: "legotherapie",
      titre: "Légothérapie",
      pourQui: "Jeunes de 6 à 25 ans",
      resume: "Communication, coopération, gestion des émotions et fonctions exécutives",
      objectifs: [
        "Savoir demander de l'aide",
        "Utiliser un vocabulaire adapté pour se faire comprendre",
        "Être plus à l'aise à l'oral",
        "S'intégrer à un groupe",
        "Apprendre à gérer les désaccords",
        "Prendre en compte les idées des autres",
        "Apprendre à attendre son tour de parole",
        "Avoir confiance en ses propres capacités",
        "Favoriser l'engagement dans leurs études"
      ],
      format: "Séance de 1h30, groupe de 4 personnes, cycle de 5 ateliers minimum",
      tarif: "À partir de 25 € en collectif",
      ton: "coopératif et bienveillant",
      modalites: ["Collectif", "Individuel"]
    },
    {
      id: "reiki",
      titre: "Soin Reiki",
      pourQui: "Tout public",
      objectifs: [
        "Apaiser le stress et l'anxiété",
        "Retrouver clarté et équilibre intérieur",
        "Proposer un temps de calme et de recentrage"
      ],
      format: "Séance devant le corps, dos ou à distance",
      tarif: "60 €",
      ton: "apaisant et bienveillant"
    },
    {
      id: "atelier-6-bricks",
      titre: "Atelier 6 Bricks",
      pourQui: "Enfants, adolescents, adultes et personnes âgées",
      objectifs: [
        "Développer les compétences mathématiques et de calcul",
        "Renforcer les habiletés sociales et émotionnelles",
        "Améliorer la perception et l'attention",
        "Enrichir le langage et le vocabulaire",
        "Favoriser le jeu coopératif et les compétences de groupe",
        "Développer la motricité fine"
      ],
      format: "Ateliers ludiques basés sur la manipulation de briques LEGO",
      tarif: "À partir de 15 €",
      ton: "ludique et stimulant",
      resume: "Activités ludiques basées sur la manipulation de briques LEGO.",
      modalites: ["Collectif"]
    }
  ],

  // ============================================
  // DÉTAILS DES SERVICES
  // ============================================
  servicesDetails: {
    bilan: {
      seo: {
        title: "Bilan & suivi individuel - Bilan et suivi individuel",
        description:
          "Enfants à partir de 7 ans, étudiants. Bilan métacognitif et suivi individuel pour enfants et adolescents. Format : Séances de 1h à 1h30 - pack de 5 séances. Tarif : 70 € / 55 € à domicile (CESU possible)."
      },
      leBilan: {
        titre: "Le bilan",
        paragraphes: [
          "Le bilan commence par un entretien approfondi avec le(s) parent(s) et l'adolescent ou enfant.",
          "Celui-ci dure **1h30**. Cet échange permet d'identifier les besoins et définir ensemble des objectifs concrets pour un suivi adapté.",
          "Mon rôle n'est pas de poser un diagnostic. Je peux en revanche vous aider à comprendre le fonctionnement du cerveau et ses mécanismes d'apprentissage, apporter des pistes de réflexion et accompagner à la mise en place d'outils ou d'aménagements pour faciliter le quotidien."
        ],
        formulaire: "**Un formulaire sera à remplir** par les parents ou l'apprenant (selon son âge), ainsi que par l'enseignant / professeur principal, afin de vous aider au mieux."
      },
      suivi: {
        titre: "Suivi individuel",
        paragraphes: [
          "Grâce à la **métacognition**, nous élaborons ensemble des stratégies qui seront ensuite appliquées directement dans ses différents cours (français, mathématiques, etc.). L'objectif est de rendre l'élève autonome dans l'utilisation de méthodes efficaces, quel que soit le domaine.",
          "Le suivi comprend également un travail autour de la **gestion des erreurs**, afin de transformer les difficultés en opportunités d'apprentissage.",
          "Enfin, nous travaillons la **méthodologie de travail**, l'**organisation**, et des outils pratiques comme la **prise de notes visuelle**, pour donner à l'élève des méthodes concrètes, adaptées à son profil et faciles à réutiliser au quotidien."
        ],
        objectif: "Ce suivi vise à renforcer la **confiance**, l'**autonomie** et l'**efficacité** de votre enfant tout au long de son parcours scolaire."
      },
      pack: {
        titre: "Pack 5 séances",
        prix: "270 euros",
        description: "Bilan + 4 séances de suivi"
      }
    },
    atelier: {
      seo: {
        title: "Ateliers collectifs - Ateliers de remédiation cognitive",
        description:
          "Enfants dès 7 ans, parents, étudiants. Ateliers collectifs de remédiation cognitive avec facilitation graphique et sketchnote. Format : Séance de 1h, groupes de 8 personnes maximum. Tarif : 10 € à 20 €."
      },
      hero: {
        titre: "Apprenez ensemble, progressez plus vite",
        description: "Découvrez la puissance de l'apprentissage en groupe ! Dans une ambiance conviviale et bienveillante, vous développerez des compétences essentielles tout en créant des liens avec d'autres apprenants."
      },
      raisons: {
        titre: "Pourquoi choisir les ateliers collectifs ?",
        items: [
          {
            icone: "🤝",
            titre: "Apprentissage collaboratif",
            description: "Échangez avec d'autres parents et enfants, partagez vos expériences et découvrez de nouvelles approches. L'apprentissage est plus riche en groupe !"
          },
          {
            icone: "💰",
            titre: "Prix très accessible",
            description: "De 10€ à 20€ par atelier, c'est l'occasion parfaite de découvrir mes méthodes sans investissement important."
          },
          {
            icone: "🎯",
            titre: "Techniques pratiques",
            description: "Mind mapping, sketchnote, gestion du temps... Des outils concrets que vous pourrez utiliser immédiatement à la maison."
          },
          {
            icone: "👨‍👩‍👧‍👦",
            titre: "Pour toute la famille",
            description: "Parents et enfants apprennent ensemble, créant une dynamique positive à la maison et renforçant les liens familiaux."
          }
        ]
      },
      themes: {
        titre: "Thématiques des ateliers",
        items: [
          {
            visuel: "sketchnote",
            icone: "📝",
            titre: "Méthodes de prise de notes",
            description: "Mind mapping, sketchnote, Cornell... Découvrez la méthode qui vous convient le mieux pour retenir efficacement."
          },
          {
            icone: "⏰",
            titre: "Organisation et gestion du temps",
            description: "Planning efficace, priorités, procrastination... Apprenez à gérer votre temps pour être plus productif et moins stressé."
          }
        ]
      },
      planning: {
        titre: "Prochaines sessions",
        informations: [
          "Ateliers réguliers : Tous les samedis matin de 10h à 11h",
          "Stages vacances : Pendant les vacances scolaires, sessions intensives de 2h",
          "Thématiques variables : Chaque mois, un nouveau thème pour diversifier les apprentissages"
        ],
        cta: "Contactez-moi pour connaître les prochaines dates et réserver votre place !"
      }
    },
    bricks: {
      seo: {
        title: "Atelier 6 Bricks - Activités ludiques",
        description:
          "Atelier 6 Bricks pour enfants, adolescents, adultes et personnes âgées. Manipulation de briques LEGO pour les maths, l'attention, le langage et la coopération. Dès 15 €. L'Image en Tête, à Richebourg."
      },
      intro: [
        "Développez vos compétences à travers des activités ludiques basées sur la manipulation de briques LEGO.",
        "Une approche stimulante pour renforcer les compétences mathématiques, sociales, attentionnelles et bien plus encore."
      ]
    },
    legotherapie: {
      seo: {
        title: "Légothérapie - Compétences psychosociales",
        description:
          "Ateliers de légothérapie pour les 6-25 ans : communication, coopération et gestion des émotions, en groupe de 4. Dès 25 €. L'Image en Tête, à Richebourg."
      },
      intro: {
        titre: "La légothérapie",
        paragraphes: [
          "La légothérapie permet le développement des compétences psychosociales, la communication, la coopération, la gestion des émotions, l'adaptation du comportement et des fonctions exécutives.",
          "Elle a été développée par le Dr Legoff, neuropsychologue, suite à ses observations auprès d'enfants ayant un TSA."
        ]
      },
      mentionMarque: "**LEGO**, le logo, la brique et ses caractéristiques sont des marques déposées par The Lego Group. Les ateliers de L'Image en Tête ne sont pas liés à la marque The Lego Group.",
      pourQui: {
        titre: "Pour qui ?",
        items: [
          "Tu as entre 6 et 25 ans",
          "Tu peux avoir des difficultés à te faire comprendre et à collaborer",
          "Tu peux avoir eu de mauvaises expériences sociales (harcèlement, phobie sociale)",
          "Tu peux avoir du mal à t'intégrer à l'école ou dans la vie quotidienne",
          "Tu peux avoir des besoins particuliers (TDAH, TSA, DYS…)"
        ]
      },
      pourQuoi: {
        titre: "Pour quoi ?",
        introduction: "Ces ateliers s'adressent aux jeunes ayant des besoins particuliers ou ayant du mal à s'intégrer dans un groupe. Ils apportent de nombreux bénéfices :"
      },
      comment: {
        titre: "Comment ?",
        paragraphes: [
          "À travers une construction commune réalisée en petit groupe de 4 personnes pendant 1h30, les participants sont amenés à communiquer, à s'écouter et à collaborer pour atteindre un objectif partagé.",
          "Les thématiques varient selon les intérêts du groupe et des difficultés rencontrées.",
          "Les séances se déroulent sur un cycle d'au moins 5 ateliers pour observer des progrès.",
          "Un rapport détaillé des compétences évaluées est fourni à la fin de ce cycle pour chaque participant."
        ]
      },
      tarifs: {
        titre: "Tarifs",
        items: [
          { label: "Collectif", prix: "À partir de 25 € par participant" },
          { label: "Individuel", prix: "À partir de 60 €" },
          { label: "Structures", prix: "Sur devis" }
        ]
      },
      galerie: {
        titre: "Les ateliers en images",
        photos: [
          {
            src: "/images/Image-Leogtherapie.webp",
            alt: "Atelier de légothérapie : cartes, bacs de briques et construction autour d'une table"
          },
          {
            src: "/images/Image-Leogtherapie1.webp",
            alt: "Groupe autour d'une table ronde avec des fiches de consignes et des briques"
          },
          {
            src: "/images/Image-Leogtherapie2.webp",
            alt: "Tri de briques colorées à partir d'une fiche de consigne"
          },
          {
            src: "/images/Image-Leogtherapie3.webp",
            alt: "Petite construction en briques posée à côté de sa fiche"
          },
          {
            src: "/images/Image-Leogtherapie4.webp",
            alt: "Figurine en briques et meuble de rangement sur la table d'atelier"
          },
          {
            src: "/images/Image-Leogtherapie5.webp",
            alt: "Boîte de briques et assemblage autour de la table"
          }
        ]
      },
      themes: {
        titre: "Ateliers Lego ponctuels",
        description: "Ces ateliers utilisent les Lego, mais ne font pas partie du cycle de légothérapie.",
        items: [
          {
            icone: "🔢",
            titre: "Révise tes maths avec les légo",
            lignes: ["Niveau primaire"]
          },
          {
            icone: "📖",
            titre: "Révise ton français avec les légo",
            lignes: ["Grammaire / conjugaison", "Niveau primaire"]
          },
          {
            icone: "🧠",
            titre: "Développe tes fonctions cognitives",
            lignes: ["Soutenir les apprentissages", "Individuel ou collectif"]
          }
        ]
      }
    },
    reiki: {
      intro: {
        titre: "Le Reiki, une approche douce et globale",
        paragraphes: [
          "Le Reiki est une pratique d'origine japonaise basée sur l'apposition des mains. Elle est proposée ici comme un temps de calme, de recentrage et de détente, en complément du coaching scolaire.",
          "Ce n'est ni un diagnostic ni un soin médical. Elle ne se substitue pas à un suivi de santé.",
          "Offrez-vous un moment dans l'instant présent, pour retrouver du calme et une clarté intérieure."
        ]
      },
      coaching: {
        titre: "Reiki et coaching scolaire",
        intro: "Associé au coaching scolaire, le Reiki devient un véritable soutien pour l'équilibre intérieur.",
        points: [
          "Cette combinaison permet à l'élève de mettre en œuvre plus facilement les stratégies travaillées ensemble.",
          "Il soutient l'élève de façon subtile, en l'aidant à se recentrer et à se reconnecter à ses propres ressources.",
          "Grâce à cette approche, l'élève peut être plus présent dans ses études.",
          "Il aborde les défis scolaires avec plus de recul et de sérénité."
        ]
      },
      approche: {
        titre: "Mon approche",
        texte: "Je suis praticienne Reiki, initiée au second degré, et j'accompagne les élèves (et leurs parents) à retrouver équilibre, confiance et bien-être pour avancer plus sereinement dans leur parcours scolaire et personnel."
      }
    }
  },

  // ============================================
  // BANDEAU CONFIDENTIALITÉ ET PAGE 404
  // ============================================
  bandeauConfidentialite: {
    titre: "Confidentialité",
    texte: "Ce site n'utilise pas de cookies de mesure d'audience. Un stockage local sert uniquement à mémoriser ce choix. Le formulaire de contact transmet vos données via EmailJS, décrit dans la",
    lien: "politique de confidentialité",
    bouton: "J'ai compris"
  },

  pageIntrouvable: {
    titre: "Page introuvable",
    description: "Cette adresse ne correspond à aucune page du site.",
    bouton: "Retour à l'accueil",
    seoTitle: "Page introuvable - L'Image en Tête",
    seoDescription: "Cette page n'existe pas. Retournez à l'accueil de L'Image en Tête."
  },

  // ============================================
  // PAGE CONDITIONS GÉNÉRALES DE VENTE (CGV)
  // ============================================
  cgv: {
    seo: {
      title: "Conditions Générales de Vente",
      description: "Conditions générales de vente - L'Image en Tête - Coaching scolaire"
    },
    titre: "Conditions Générales de Vente",
    miseAJour: "23 octobre 2026",
    sections: [
      {
        titre: "1. Objet",
        contenu: [
          "Les présentes conditions générales de vente s'appliquent à tous les services de coaching scolaire et d'accompagnement dans les apprentissages proposés par L'image en tête."
        ]
      },
      {
        titre: "2. Prestations",
        contenu: [
          "Les prestations proposées comprennent :",
          ["Bilan et suivi individuel", "Ateliers collectifs", "Atelier 6 Bricks", "Légothérapie", "Soins Reiki"]
        ]
      },
      {
        titre: "3. Tarifs et modalités de paiement",
        contenu: [
          "Les tarifs sont indiqués pour chaque prestation. Le paiement s'effectue à la fin de chaque séance ou selon les modalités convenues lors de la prise de rendez-vous.",
          "Pour les séances à domicile, les frais de déplacement peuvent s'appliquer selon la distance."
        ]
      },
      {
        titre: "4. Annulation et report",
        contenu: [
          "Toute annulation doit être effectuée au moins 24h à l'avance. En cas d'annulation tardive, la séance sera facturée à 50% de son montant.",
          "Les reports sont possibles sous réserve de disponibilité et doivent être effectués au moins 24h à l'avance."
        ]
      },
      {
        titre: "5. Confidentialité",
        contenu: [
          "Toutes les informations échangées lors des séances sont strictement confidentielles et ne seront pas divulguées à des tiers sans l'accord explicite du client."
        ]
      },
      {
        titre: "6. Responsabilité",
        contenu: [
          "L'image en tête s'engage à fournir ses services avec professionnalisme et bienveillance. La responsabilité de l'entreprise est limitée au montant des prestations effectuées."
        ]
      },
      {
        titre: "7. Litige – médiation de la consommation",
        contenu: [
          "En cas de litige entre le Client et l'entreprise, ceux-ci s'efforceront de le résoudre à l'amiable (le Client adressera une réclamation écrite auprès du professionnel ou, le cas échéant, auprès du Service Relations Clientèle du professionnel).",
          "À défaut d'accord amiable ou en l'absence de réponse du professionnel dans un délai raisonnable d'un (1) mois, le Client consommateur au sens de l'article L.612-2 du code de la consommation a la possibilité de saisir gratuitement, si un désaccord subsiste, le médiateur compétent inscrit sur la liste des médiateurs établie par la Commission d'évaluation et de contrôle de la médiation de la consommation en application de l'article L.615-1 du code de la consommation, à savoir :",
          "La Société Médiation Professionnelle",
          "http://www.mediateur-consommation-smp.fr",
          "Alteritae, 5 rue Salvaing, 12000 Rodez"
        ]
      },
      {
        titre: "8. Droit applicable",
        contenu: [
          "Les présentes conditions générales de vente sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents."
        ]
      }
    ]
  },

  // ============================================
  // PAGE MENTIONS LÉGALES
  // ============================================
  mentionsLegales: {
    seo: {
      title: "Mentions légales",
      description: "Mentions légales - L'Image en Tête - Coaching scolaire"
    },
    titre: "Mentions légales",
    sections: [
      {
        titre: "1. Éditeur du site",
        contenu: [
          "Raison sociale : L'Image en Tête",
          "Activité : Coaching scolaire et accompagnement dans les apprentissages",
          "Adresse : Richebourg, France",
          "Téléphone : 07.81.17.23.25",
          "Email : limagentete@gmail.com",
          "Directeur de la publication : Mathilde, responsable de la publication",
          "SIRET : communiqué sur demande",
          "TVA : non applicable / communiquée sur demande",
          "Conception et réalisation du site : SDuvivierTech (https://sduviviertech.fr/)"
        ]
      },
      {
        titre: "2. Hébergement",
        contenu: [
          "Ce site est hébergé par :",
          "OVH SAS, 2 rue Kellermann, 59100 Roubaix, France",
          "Déploiement via Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis",
          "Les données sont stockées de manière sécurisée conformément aux standards de l'industrie."
        ]
      },
      {
        titre: "3. Propriété intellectuelle",
        contenu: [
          "L'ensemble du contenu de ce site (textes, images, vidéos, etc.) est protégé par le droit d'auteur et appartient à L'image en tête ou à ses partenaires.",
          "Toute reproduction, même partielle, est interdite sans autorisation préalable écrite."
        ]
      },
      {
        titre: "4. Protection des données personnelles",
        contenu: [
          "Conformément au Règlement Général sur la Protection des Données (RGPD), nous nous engageons à protéger vos données personnelles.",
          "Les données collectées lors de la prise de contact (nom, email, message) sont utilisées uniquement pour répondre à vos demandes.",
          "Sous-traitants : Les données du formulaire de contact sont transmises via EmailJS (EmailJS Inc., États-Unis) pour l'envoi des messages. EmailJS est conforme au RGPD et ne conserve pas vos données après l'envoi.",
          "Vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ce droit, contactez-nous à : limagentete@gmail.com",
          "La politique de confidentialité complète est disponible sur ce site."
        ]
      },
      {
        titre: "5. Cookies",
        contenu: [
          "Ce site n'utilise pas de cookies de mesure d'audience ni de publicité.",
          "Un stockage local (localStorage) mémorise uniquement le fait que le bandeau d'information a été lu."
        ]
      },
      {
        titre: "6. Responsabilité",
        contenu: [
          "L'image en tête s'efforce de fournir des informations exactes et à jour sur ce site. Toutefois, nous ne pouvons garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition."
        ]
      },
      {
        titre: "7. Droit applicable",
        contenu: [
          "Le présent site est soumis au droit français. En cas de litige, les tribunaux français seront seuls compétents."
        ]
      }
    ]
  },

  politiqueConfidentialite: {
    seo: {
      title: "Politique de confidentialité",
      description:
        "Politique de confidentialité de L'Image en Tête : données collectées, EmailJS et vos droits RGPD."
    },
    titre: "Politique de confidentialité",
    sections: [
      {
        titre: "1. Responsable du traitement",
        contenu: [
          "Le responsable du traitement des données est L'Image en Tête, joignable à limagentete@gmail.com."
        ]
      },
      {
        titre: "2. Données collectées",
        contenu: [
          "Le formulaire de contact collecte le nom, l'adresse e-mail et le contenu du message. Aucune donnée n'est utilisée à des fins publicitaires ou de profilage."
        ]
      },
      {
        titre: "3. Finalité",
        contenu: [
          "Ces informations servent uniquement à répondre à votre demande et, le cas échéant, à organiser un rendez-vous."
        ]
      },
      {
        titre: "4. Destinataires et sous-traitant",
        contenu: [
          "Les messages sont transmis via EmailJS (EmailJS Inc., États-Unis) afin d'être envoyés par e-mail. EmailJS agit comme sous-traitant technique pour l'acheminement du message."
        ]
      },
      {
        titre: "5. Durée de conservation",
        contenu: [
          "Les messages sont conservés le temps nécessaire au traitement de la demande, puis archivés ou supprimés selon les échanges ultérieurs."
        ]
      },
      {
        titre: "6. Vos droits",
        contenu: [
          "Vous pouvez demander l'accès, la rectification ou la suppression de vos données, ainsi que la limitation du traitement, en écrivant à limagentete@gmail.com."
        ]
      },
      {
        titre: "7. Cookies et stockage local",
        contenu: [
          "Ce site n'utilise pas de cookies de mesure d'audience. Un stockage local mémorise uniquement la lecture du bandeau d'information."
        ]
      }
    ]
  }

};
