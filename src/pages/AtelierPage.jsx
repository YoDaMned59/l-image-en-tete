import React, { useState } from 'react';
import { siteData } from '../data/data';
import { navigate } from '../utils/pathUtils';
import sketchnoteImage from '../assets/Sketchnote.webp';
import '../styles/AtelierPage.scss';

const AtelierPage = () => {
  const service = siteData.services.find(s => s.id === 'atelier');
  const details = siteData.servicesDetails.atelier;
  const [isSketchnoteExpanded, setIsSketchnoteExpanded] = useState(false);

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <div className="service-page service-page-bleu">
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

          {/* Raisons */}
          {details.raisons && (
            <div className="reasons-section">
              <h3>{details.raisons.titre}</h3>
              <div className="reasons-grid">
                {details.raisons.items.map((raison, index) => (
                  <div key={index} className="reason-card">
                    <div className="reason-icon">{raison.icone}</div>
                    <h4>{raison.titre}</h4>
                    <p>{raison.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Thématiques */}
          {details.themes && (
            <div className="themes-section">
              <h3>{details.themes.titre}</h3>
              <div className="themes-grid">
                {details.themes.items.map((theme, index) => (
                  <div key={index} className="theme-card">
                    <div className="theme-icon">{theme.icone}</div>
                    <h4>{theme.titre}</h4>
                    <p>{theme.description}</p>
                    {/* Afficher l'exemple de sketchnote pour la stratégie de prise de note */}
                    {theme.description.toLowerCase().includes('sketchnote') && (
                      <div className="sketchnote-example">
                        <div 
                          className="sketchnote-container"
                          onClick={() => setIsSketchnoteExpanded(true)}
                        >
                          <img 
                            src={sketchnoteImage} 
                            alt="Exemple de sketchnote - Facilitation graphique" 
                            className="sketchnote-image"
                          />
                          <div className="sketchnote-overlay">
                            <span className="sketchnote-hint">Voir un exemple</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Planning */}
          {details.planning && (
            <div className="planning-section">
              <h3>{details.planning.titre}</h3>
              <div className="planning-box">
                {details.planning.informations.map((info, index) => {
                  const parts = info.split(' : ');
                  return (
                    <p key={index}>
                      {parts.length > 1 ? (
                        <>
                          <strong>{parts[0]} :</strong> {parts.slice(1).join(' : ')}
                        </>
                      ) : (
                        info
                      )}
                    </p>
                  );
                })}
                <div className="planning-cta">
                  <p><strong>{details.planning.cta}</strong></p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Modal sketchnote */}
      {isSketchnoteExpanded && (
        <div 
          className="sketchnote-backdrop"
          onClick={() => setIsSketchnoteExpanded(false)}
        >
          <div 
            className="sketchnote-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="sketchnote-close"
              onClick={() => setIsSketchnoteExpanded(false)}
              aria-label="Fermer"
            >
              ×
            </button>
            <img 
              src={sketchnoteImage} 
              alt="Exemple de sketchnote - Facilitation graphique" 
              className="sketchnote-image-expanded"
            />
          </div>
        </div>
      )}

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

export default AtelierPage;







