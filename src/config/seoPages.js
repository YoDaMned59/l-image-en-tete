import { SITE_URL } from './site.js';
import { siteData } from '../data/data.js';

export const PAGE_SEO = {
  '/': siteData.home.seo,
  '/about': siteData.about.seo,
  '/contact': siteData.contactPage.seo,
  '/services/bilan': siteData.servicesDetails.bilan.seo,
  '/services/atelier': siteData.servicesDetails.atelier.seo,
  '/services/6-bricks': siteData.servicesDetails.bricks.seo,
  '/services/legotherapie': siteData.servicesDetails.legotherapie.seo,
  '/cgv': siteData.cgv.seo,
  '/mentions-legales': siteData.mentionsLegales.seo,
  '/politique-de-confidentialite': siteData.politiqueConfidentialite.seo,
};

export const canonicalUrl = (pathname) => `${SITE_URL}${pathname === '/' ? '/' : pathname}`;
