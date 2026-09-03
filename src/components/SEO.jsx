import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { OG_IMAGE, SITE_URL } from '../config/site';

const SEO = ({
  title = "L'Image en Tête",
  description = "Coaching scolaire et accompagnement dans les apprentissages à Richebourg. Bilan, suivi individuel et ateliers de remédiation cognitive.",
  canonical = null,
  noIndex = false,
}) => {
  const { pathname } = useLocation();
  const fullUrl = canonical || `${SITE_URL}${pathname}`;

  useEffect(() => {
    document.title = title;

    const setMeta = (selector, attributes) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement(attributes.tag || 'meta');
        if (attributes.name) element.setAttribute('name', attributes.name);
        if (attributes.property) element.setAttribute('property', attributes.property);
        if (attributes.rel) element.setAttribute('rel', attributes.rel);
        document.head.appendChild(element);
      }
      element.setAttribute(attributes.valueAttr, attributes.value);
      return element;
    };

    setMeta('meta[name="description"]', {
      tag: 'meta',
      name: 'description',
      valueAttr: 'content',
      value: description,
    });

    setMeta('link[rel="canonical"]', {
      tag: 'link',
      rel: 'canonical',
      valueAttr: 'href',
      value: fullUrl,
    });

    setMeta('meta[name="robots"]', {
      tag: 'meta',
      name: 'robots',
      valueAttr: 'content',
      value: noIndex ? 'noindex, follow' : 'index, follow',
    });

    const extraTags = {
      'og:title': title,
      'og:description': description,
      'og:url': fullUrl,
      'og:type': 'website',
      'og:image': OG_IMAGE,
      'og:locale': 'fr_FR',
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': OG_IMAGE,
    };

    Object.entries(extraTags).forEach(([key, content]) => {
      const isOg = key.startsWith('og:');
      const selector = isOg
        ? `meta[property="${key}"]`
        : `meta[name="${key}"]`;
      setMeta(selector, {
        tag: 'meta',
        property: isOg ? key : undefined,
        name: isOg ? undefined : key,
        valueAttr: 'content',
        value: content,
      });
    });

    let schemaScript = document.querySelector('script[type="application/ld+json"][data-schema="organization"]');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.setAttribute('type', 'application/ld+json');
      schemaScript.setAttribute('data-schema', 'organization');
      document.head.appendChild(schemaScript);
    }

    schemaScript.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: "L'Image en Tête",
      url: SITE_URL,
      image: OG_IMAGE,
      description:
        "Coaching scolaire et accompagnement dans les apprentissages à Richebourg. Bilan, suivi individuel et ateliers de remédiation cognitive.",
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Richebourg',
        addressCountry: 'FR',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+33-7-81-17-23-25',
        contactType: 'customer service',
        email: 'limagentete@gmail.com',
        availableLanguage: 'French',
      },
    });
  }, [title, description, fullUrl, noIndex]);

  return null;
};

export default SEO;
