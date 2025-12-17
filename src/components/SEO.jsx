/**
 * COMPOSANT SEO - Gestion des balises meta pour le référencement
 * 
 * Ce composant permet de changer le titre et la description de chaque page
 * pour améliorer le référencement sur Google.
 * 
 * UTILISATION SIMPLE :
 * <SEO title="Mon titre" description="Ma description" />
 */

import { useEffect } from 'react';

const SEO = ({ 
  title = "L'image en tête", 
  description = "Coaching scolaire et accompagnement dans les apprentissages à Richebourg. Bilan, suivi individuel et ateliers de remédiation cognitive.",
  canonical = null 
}) => {
  // URL de base du site (à modifier si votre URL change)
  const baseUrl = "https://yodamned59.github.io/l-image-en-tete";
  
  // Récupère l'URL actuelle de la page
  const currentPath = window.location.pathname;
  const fullUrl = canonical || `${baseUrl}${currentPath}`;

  useEffect(() => {
    // 1. Change le titre de la page (celui qui apparaît dans l'onglet du navigateur)
    document.title = title;

    // 2. Gère la balise meta description (description qui apparaît dans Google)
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // 3. Gère la balise canonical (indique à Google quelle est l'URL principale de la page)
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', fullUrl);

    // 4. Meta robots (indique à Google d'indexer la page)
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', 'index, follow');

    // 5. Meta Open Graph (pour Facebook, LinkedIn, etc.)
    const ogTags = {
      'og:title': title,
      'og:description': description,
      'og:url': fullUrl,
      'og:type': 'website'
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute('content', content);
    });

  }, [title, description, fullUrl]);

  // Ce composant ne retourne rien visible, il modifie juste les balises dans <head>
  return null;
};

export default SEO;
