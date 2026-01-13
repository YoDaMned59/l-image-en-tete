import React, { useState } from 'react';
import { siteData } from '../data/data';
import { navigate } from '../utils/pathUtils';
import SEO from '../components/SEO';
import sketchnoteImage from '../assets/Sketchnote.webp';
import '../styles/AtelierPage.scss';

const AtelierPage = () => {
  const service = siteData.services.find(s => s.id === 'atelier');
  const details = siteData.servicesDetails.atelier;
  const atelier6BricksService = siteData.services.find(s => s.id === 'atelier-6-bricks');
  const [isSketchnoteExpanded, setIsSketchnoteExpanded] = useState(false);

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <div className="service-page service-page-bleu">
      <SEO 
        title={`${service.titre} - Ateliers de remédiation cognitive`}
        description={`${service.pourQui}. Ateliers collectifs de remédiation cognitive avec facilitation graphique et sketchnote. Format : ${service.format}. Tarif : ${service.tarif}.`}
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
                    {theme.description.toLowerCase().includes('sketchnote') ? (
                      <div 
                        className="theme-icon sketchnote-icon"
                        onClick={() => setIsSketchnoteExpanded(true)}
                      >
                        <img 
                          src={sketchnoteImage} 
                          alt="Exemple de sketchnote - Facilitation graphique" 
                          className="sketchnote-icon-image"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="theme-icon">{theme.icone}</div>
                    )}
                    <h4>{theme.titre}</h4>
                    <p>{theme.description}</p>
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

      {/* Section Atelier 6 Bricks */}
      {atelier6BricksService && (
        <section className="atelier-6-bricks-section">
          <div className="service-container">
            <div className="atelier-6-bricks-card">
              <div className="bricks-card-image">
                <div className="bricks-placeholder">
                  <div className="bricks-icon">🧱</div>
                </div>
              </div>
              <div className="bricks-card-content">
                <h2>{atelier6BricksService.titre}</h2>
                <p className="bricks-description">{atelier6BricksService.pourQui}</p>
                <div className="bricks-objectives">
                  <h3>Objectifs :</h3>
                  <ul>
                    {atelier6BricksService.objectifs.map((objectif, index) => (
                      <li key={index}>{objectif}</li>
                    ))}
                  </ul>
                </div>
                <div className="bricks-info">
                  <div className="bricks-info-item">
                    <strong>Format :</strong> {atelier6BricksService.format}
                  </div>
                  <div className="bricks-info-item">
                    <strong>Tarif :</strong> {atelier6BricksService.tarif}
                  </div>
                </div>
                <div className="bricks-cta">
                  <a 
                    href="#" 
                    onClick={(e) => handleLinkClick(e, '/contact')} 
                    className="cta-button cta-primary"
                  >
                    Prendre rendez-vous
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

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
              loading="lazy"
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







