// Avis Google de L'Image en Tête, recopiés depuis la fiche publique.
// Pour en ajouter, modifier ou retirer un : éditez uniquement ce fichier.
//
// Copiez un objet dans `avis`, puis mettez à jour noteMoyenne et nombreAvis.
// Exemple de forme (ne pas publier un avis inventé) :
// { auteur: 'Prénom Nom', note: 5, date: 'mars 2026', texte: 'Le commentaire publié sur Google.' }
//
// provenance doit rester « google » seulement si le texte vient vraiment de Google.

export const googleReviews = {
  titre: 'Avis Google',
  introduction: 'Ce que disent les familles accompagnées',
  provenance: 'google',
  noteMoyenne: 5,
  nombreAvis: 3,
  urlFiche:
    'https://www.google.com/maps/search/?api=1&query=L%27image+en+t%C3%AAte%2C+1192+Rue+de+Loisne%2C+62136+Vieille-Chapelle',
  texteLien: 'Voir tous nos avis Google',
  avis: [
    {
      auteur: 'Soline Flament',
      note: 5,
      date: 'août 2026',
      texte:
        "Mathilde est pédagogue et utilise des supports variés et diversifiés. Elle fait principalement des maths avec ma fille, qui comprend ses leçons avec Mathilde alors que cela est bien difficile à l'école ! Elle sait se rendre disponible et est réactive.",
    },
    {
      auteur: 'Kathalyne',
      note: 5,
      date: 'février 2026',
      texte:
        'Mathilde,\n\nSait se montrer pédagogue, douce.\nElle amène et crée des supports adaptés aux besoins de mon fils.\nJe la recommande.\n\nKathalyne',
    },
    {
      auteur: 'Claire Bridoux',
      note: 5,
      date: 'février 2026',
      texte:
        'Mathilde est de très bon conseil, patiente et pédagogue, Anaelle aime beaucoup travailler avec elle.',
    },
  ],
};
