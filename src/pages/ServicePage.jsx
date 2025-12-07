import React from 'react';
import { siteData } from '../data/data';
import { navigate } from '../utils/pathUtils';
import '../styles/ServicePage.scss';

const ServicePage = ({ serviceId }) => {
  const service = siteData.services.find(s => s.id === serviceId);
  const details = service ? siteData.servicesDetails[serviceId] : null;

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  if (!service || !details) {
    return (
      <div className="service-page">
        <div className="container">
          <h1>Service non trouvé</h1>
          <p>Le service demandé n'existe pas.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="service-page">
      <div className="container">
        {/* Section Hero */}
        <section className={`service-hero service-hero-${serviceId}`}>
          <h1>{service.titre}</h1>
          <p className="service-subtitle">{service.pourQui}</p>
        </section>

        {/* Section Objectifs */}
        <section className={`objectives-section objectives-section-${serviceId}`}>
          <div className="objectives-container">
            <h2>Objectifs</h2>
            {serviceId === 'reiki' ? (
              <div className="objectives-cards-grid">
                {service.objectifs.map((objectif, index) => (
                  <div key={index} className="objective-card-reiki">
                    <div className="objective-check">✓</div>
                    <p>{objectif}</p>
                  </div>
                ))}
              </div>
            ) : serviceId === 'bilan' ? (
              <div className="objectives-cards-grid">
                {service.objectifs.map((objectif, index) => (
                  <div key={index} className="objective-card-bilan">
                    <div className="objective-check">✓</div>
                    <p>{objectif}</p>
                  </div>
                ))}
              </div>
            ) : serviceId === 'atelier' ? (
              <div className="objectives-cards-grid">
                {service.objectifs.map((objectif, index) => (
                  <div key={index} className="objective-card-atelier">
                    <div className="objective-check">✓</div>
                    <p>{objectif}</p>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="objectives-list">
                {service.objectifs.map((objectif, index) => (
                  <li key={index}>{objectif}</li>
                ))}
              </ul>
            )}
          </div>
        </section>

        {/* Section Format et Tarifs */}
        <section className={`details-section details-section-${serviceId}`}>
          <div className="details-container">
            <div className="details-grid">
            <div className="detail-card">
              <h3>Format</h3>
              <p>{service.format}</p>
            </div>
            <div className="detail-card">
              <h3>Tarif</h3>
              <p className="price">{service.tarif}</p>
            </div>
            <div className="detail-card">
              <h3>Approche</h3>
              <p>{service.ton}</p>
            </div>
            </div>
          </div>
        </section>

        {/* Section spécifique selon le service */}
        {serviceId === 'bilan' && (
          <section className={`specific-content specific-content-${serviceId}`}>
            <div className="specific-container">
              <h2>{details.hero.titre}</h2>
              <div className="hero-description">
                <p>{details.hero.description}</p>
              </div>
              
              {/* Encadré Pack 5 séances */}
              <section className="pack-section">
                <div className="pack-container">
                  <div className="pack-box gift-box">
                    <h2>{siteData.about.pack.titre}</h2>
                    <p className="pack-price">{siteData.about.pack.prix}</p>
                    <p className="pack-description">{siteData.about.pack.description}</p>
                  </div>
                </div>
              </section>
              
              <div className="benefits-section">
                <h3>{details.benefices.titre}</h3>
                <div className="benefits-grid">
                  {details.benefices.items.map((benefice, index) => (
                    <div key={index} className="benefit-card">
                      <div className="benefit-icon">{benefice.icone}</div>
                      <h4>{benefice.titre}</h4>
                      <p>{benefice.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="process-section">
                <h3>{details.approche.titre}</h3>
                <div className="process-steps">
                  {details.approche.etapes.map((etape, index) => (
                    <div key={index} className="step">
                      <div className="step-number">{etape.numero}</div>
                      <h4>{etape.titre}</h4>
                      <p>{etape.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {details.temoignages && (
                <div className="testimonials-section">
                  <h3>{details.temoignages.titre}</h3>
                  <div className="testimonials">
                    {details.temoignages.items.map((temoignage, index) => (
                      <div key={index} className="testimonial">
                        <p>"{temoignage.texte}"</p>
                        <span className="author">{temoignage.auteur}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {serviceId === 'atelier' && (
          <section className={`specific-content specific-content-${serviceId}`}>
            <div className="specific-container">
              <h2>{details.hero.titre}</h2>
              <div className="hero-description">
                <p>{details.hero.description}</p>
              </div>
              
              <div className="benefits-section">
                <h3>{details.raisons.titre}</h3>
                <div className="benefits-grid">
                  {details.raisons.items.map((raison, index) => (
                    <div key={index} className="benefit-card">
                      <div className="benefit-icon">{raison.icone}</div>
                      <h4>{raison.titre}</h4>
                      <p>{raison.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="themes-section">
                <h3>{details.themes.titre}</h3>
                <div className="themes-grid">
                  {details.themes.items.map((theme, index) => (
                    <div key={index} className="theme-card">
                      <h4>{theme.icone} {theme.titre}</h4>
                      <p>{theme.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="schedule-section">
                <h3>{details.planning.titre}</h3>
                <div className="schedule-info">
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
                  <div className="cta-info">
                    <p>📞 <strong>{details.planning.cta}</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {serviceId === 'reiki' && (
          <section className={`specific-content specific-content-${serviceId}`}>
            <div className="specific-container">
              <h2>{details.hero.titre}</h2>
              
              {/* Carte principale Reiki */}
              <div className="reiki-main-card">
                <div className="reiki-card-content">
                  <p className="reiki-intro">{details.hero.description}</p>
                  {details.hero.suite && details.hero.suite.map((paragraphe, index) => (
                    <p key={index} className="reiki-paragraph">{paragraphe}</p>
                  ))}
                </div>
              </div>
              
              {/* Section Reiki et coaching scolaire */}
              <div className="coaching-scolaire-section">
                <h3>{details.coachingScolaire.titre}</h3>
                <div className="coaching-intro-card">
                  <p>{details.coachingScolaire.description}</p>
                </div>
                <div className="reiki-benefits-grid">
                  {details.coachingScolaire.points.map((point, index) => (
                    <div key={index} className="reiki-benefit-card">
                      <div className="reiki-benefit-icon">✨</div>
                      <p>{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section Mon approche */}
              <div className="approche-section">
                <h3>{details.approche.titre}</h3>
                <div className="approche-card">
                  <div className="approche-icon">🧘</div>
                  <p>{details.approche.description}</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Section CTA */}
        <section className="service-cta">
          <h2>Intéressé(e) par ce service ?</h2>
          <p>N'hésitez pas à me contacter pour plus d'informations ou pour prendre rendez-vous</p>
          <div className="cta-buttons">
            <a href="#" onClick={(e) => handleLinkClick(e, '/contact')} className="cta-button primary">Prendre rendez-vous</a>
            <a href="#" onClick={(e) => handleLinkClick(e, '/')} className="cta-button secondary">Retour à l'accueil</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicePage;
