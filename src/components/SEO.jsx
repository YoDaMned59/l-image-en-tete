import { useEffect } from 'react';

const SEO = ({ 
  title = "L'image en tête", 
  description = "Coaching scolaire et accompagnement dans les apprentissages à Richebourg. Bilan, suivi individuel et ateliers de remédiation cognitive.",
  canonical = null 
}) => {
  const baseUrl = "https://yodamned59.github.io/l-image-en-tete";
  const currentPath = window.location.pathname;
  const fullUrl = canonical || `${baseUrl}${currentPath}`;

  useEffect(() => {
    document.title = title;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', fullUrl);

    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', 'index, follow');

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

  return null;
};

export default SEO;


