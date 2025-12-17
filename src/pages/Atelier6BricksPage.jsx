import React from 'react';
import { siteData } from '../data/data';
import { navigate } from '../utils/pathUtils';
import SEO from '../components/SEO';
import '../styles/Atelier6BricksPage.scss';

const Atelier6BricksPage = () => {
  const service = siteData.services.find(s => s.id === 'atelier-6-bricks');
  const details = siteData.servicesDetails['atelier-6-bricks'];

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <div className="service-page service-page-vert">
      <SEO 
        title={`${service.titre} - Atelier ludique 6 Bricks`}
        description={`${service.pourQui}. Atelier ludique 6 Bricks pour développer les compétences cognitives. Format : ${service.format}. Tarif : ${service.tarif}.`}
      />
      {/* Hero Section */}
      <section className="service-hero">
        <div className="service-container">
          <h1>{service.titre}</h1>
          <p className="service-subtitle">{service.pourQui}</p>
        </div>
      </section>

      {/* Objectifs Section */}
      <section className="objectives-section">
        <div className="service-container">
          <h2>Objectifs</h2>
          <div className="objectives-grid">
            {service.objectifs.map((objectif, index) => (
              <div key={index} className="objective-card">
                <div className="objective-check">✓</div>
                <p>{objectif}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Informations Section */}
      <section className="info-section">
        <div className="service-container">
          <div className="info-grid">
            <div className="info-card">
              <h3>Format</h3>
              <p>{service.format}</p>
            </div>
            <div className="info-card">
              <h3>Tarif</h3>
              <p className="price">{service.tarif}</p>
            </div>
            <div className="info-card">
              <h3>Approche</h3>
              <p>{service.ton}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contenu spécifique */}
      <section className="content-section">
        <div className="service-container">
          <div className="content-hero">
            <h2>{details.hero.titre}</h2>
            <p className="hero-description">{details.hero.description}</p>
          </div>

          {/* Compétences */}
          {details.competences && (
            <div className="competences-section">
              <h3>{details.competences.titre}</h3>
              <p className="competences-intro">{details.competences.description}</p>
              <div className="competences-grid">
                {details.competences.items.map((competence, index) => (
                  <div key={index} className="competence-card">
                    <div className="competence-icon">{competence.icone}</div>
                    <h4>{competence.titre}</h4>
                    <p>{competence.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Approche */}
          {details.approche && (
            <div className="approche-section">
              <h3>{details.approche.titre}</h3>
              <p className="approche-description">{details.approche.description}</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="service-container">
          <h2>Intéressé(e) par ce service ?</h2>
          <p>N'hésitez pas à me contacter pour plus d'informations ou pour prendre rendez-vous</p>
          <div className="cta-buttons">
            <a 
              href="#" 
              onClick={(e) => handleLinkClick(e, '/contact')} 
              className="cta-button cta-primary"
            >
              Prendre rendez-vous
            </a>
            <a 
              href="#" 
              onClick={(e) => handleLinkClick(e, '/')} 
              className="cta-button cta-secondary"
            >
              Retour à l'accueil
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Atelier6BricksPage;



