import React from 'react';
import { siteData } from '../data/data';
import SEO from '../components/SEO';
import '../styles/CGV.scss';

const CGV = () => {
  const { cgv } = siteData;

  return (
    <div className="cgv-page">
      <SEO 
        title="Conditions Générales de Vente"
        description="Conditions générales de vente - L'image en tête - Coaching scolaire"
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
          <p><strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}</p>
        </div>
      </div>
    </div>
  );
};

export default CGV;
