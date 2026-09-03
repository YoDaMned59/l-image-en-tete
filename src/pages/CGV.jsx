import { siteData } from '../data/data';
import SEO from '../components/SEO';
import { LEGAL_UPDATED_AT } from '../config/site';
import { PAGE_SEO } from '../config/seoPages';
import '../styles/CGV.scss';

const CGV = () => {
  const { cgv } = siteData;

  return (
    <div className="cgv-page">
      <SEO 
        title={PAGE_SEO['/cgv'].title}
        description={PAGE_SEO['/cgv'].description}
      />
      <div className="container">
        <h1>{cgv.titre}</h1>
        
        {cgv.sections.map((section, index) => (
          <section key={index} className="cgv-section">
            <h2>{section.titre}</h2>
            {section.contenu.map((paragraphe, pIndex) => {
              if (Array.isArray(paragraphe)) {
                return (
                  <ul key={pIndex}>
                    {paragraphe.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return <p key={pIndex}>{paragraphe}</p>;
            })}
          </section>
        ))}

        <div className="cgv-footer">
          <p><strong>Dernière mise à jour :</strong> {LEGAL_UPDATED_AT}</p>
        </div>
      </div>
    </div>
  );
};

export default CGV;
