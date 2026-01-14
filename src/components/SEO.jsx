import { useEffect } from 'react';

const SEO = ({ 
  title = "L'Image en Tête", 
  description = "Coaching scolaire et accompagnement dans les apprentissages à Richebourg. Bilan, suivi individuel et ateliers de remédiation cognitive.",
  canonical = null 
}) => {
  const baseUrl = "https://imagentete.fr";
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

    // Données structurées Schema.org - Organization
    let schemaScript = document.querySelector('script[type="application/ld+json"][data-schema="organization"]');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.setAttribute('type', 'application/ld+json');
      schemaScript.setAttribute('data-schema', 'organization');
      document.head.appendChild(schemaScript);
    }
    
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "L'Image en Tête",
      "url": "https://imagentete.fr",
      "description": "Coaching scolaire et accompagnement dans les apprentissages à Richebourg. Bilan, suivi individuel et ateliers de remédiation cognitive.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Richebourg",
        "addressCountry": "FR"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+33-7-81-17-23-25",
        "contactType": "customer service",
        "email": "limagentete@gmail.com"
      }
    };
    
    schemaScript.textContent = JSON.stringify(organizationSchema);

  }, [title, description, fullUrl]);

  return null;
};

export default SEO;


