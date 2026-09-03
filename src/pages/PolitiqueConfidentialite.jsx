import { siteData } from '../data/data';
import SEO from '../components/SEO';
import { LEGAL_UPDATED_AT } from '../config/site';
import { PAGE_SEO } from '../config/seoPages';
import '../styles/MentionsLegales.scss';

const PolitiqueConfidentialite = () => {
  const { politiqueConfidentialite } = siteData;

  return (
    <div className="mentions-legales-page">
      <SEO
        title={PAGE_SEO['/politique-de-confidentialite'].title}
        description={PAGE_SEO['/politique-de-confidentialite'].description}
      />
      <div className="container">
        <h1>{politiqueConfidentialite.titre}</h1>

        {politiqueConfidentialite.sections.map((section) => (
          <section key={section.titre} className="mentions-section">
            <h2>{section.titre}</h2>
            {section.contenu.map((paragraphe) => (
              <p key={paragraphe}>{paragraphe}</p>
            ))}
          </section>
        ))}

        <div className="mentions-footer">
          <p><strong>Dernière mise à jour :</strong> {LEGAL_UPDATED_AT}</p>
        </div>
      </div>
    </div>
  );
};

export default PolitiqueConfidentialite;
