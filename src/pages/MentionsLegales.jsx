import React from 'react';
import { siteData } from '../data/data';
import SEO from '../components/SEO';
import '../styles/MentionsLegales.scss';

const MentionsLegales = () => {
  const { mentionsLegales } = siteData;

  return (
    <div className="mentions-legales-page">
      <SEO 
        title="Mentions légales"
        description="Mentions légales - L'image en tête - Coaching scolaire"
      />
      <div className="container">
        <h1>{mentionsLegales.titre}</h1>
        
        {mentionsLegales.sections.map((section, index) => (
          <section key={index} className="mentions-section">
            <h2>{section.titre}</h2>
            {section.contenu.map((paragraphe, pIndex) => {
              if (paragraphe.includes(' : ')) {
                const [label, value] = paragraphe.split(' : ');
                return (
                  <p key={pIndex}>
                    <strong>{label} :</strong> {value}
                  </p>
                );
              }
              return <p key={pIndex}>{paragraphe}</p>;
            })}
          </section>
        ))}

        <div className="mentions-footer">
          <p><strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}</p>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;
