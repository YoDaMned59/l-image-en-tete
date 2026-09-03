import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/data';
import SEO from '../components/SEO';
import { PAGE_SEO } from '../config/seoPages';
import CTASection from '../components/CTASection';
import '../styles/AtelierPage.scss';

const AtelierPage = () => {
  const service = siteData.services.find((s) => s.id === 'atelier');
  const details = siteData.servicesDetails.atelier;
  const atelier6BricksService = siteData.services.find((s) => s.id === 'atelier-6-bricks');
  const { labelsServices, images } = siteData;
  const [isSketchnoteExpanded, setIsSketchnoteExpanded] = useState(false);
  const bricksSectionRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isSketchnoteExpanded) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsSketchnoteExpanded(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isSketchnoteExpanded]);

  const scrollToBricksSection = (e) => {
    e.preventDefault();
    bricksSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="service-page service-page-bleu">
      <SEO
        title={PAGE_SEO['/services/atelier'].title}
        description={PAGE_SEO['/services/atelier'].description}
      />
      <section className="service-hero">
        <div className="service-container">
          <h1>{service.titre}</h1>
          <p className="service-subtitle">{service.pourQui}</p>
        </div>
      </section>

      <section className="objectives-section">
        <div className="service-container">
          <h2>{labelsServices.objectifs}</h2>
          <div className="objectives-grid">
            {service.objectifs.map((objectif) => (
              <div key={objectif} className="objective-card">
                <div className="objective-check">✓</div>
                <p>{objectif}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="info-section">
        <div className="service-container">
          <div className="info-grid">
            <div className="info-card">
              <h3>{labelsServices.format}</h3>
              <p>{service.format}</p>
            </div>
            <div className="info-card">
              <h3>{labelsServices.tarif}</h3>
              <p className="price">{service.tarif}</p>
            </div>
            <div className="info-card">
              <h3>{labelsServices.approche}</h3>
              <p>{service.ton}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="service-container">
          <div className="content-hero">
            <h2>{details.hero.titre}</h2>
            <p className="hero-description">{details.hero.description}</p>
          </div>

          {details.raisons && (
            <div className="reasons-section">
              <h3>{details.raisons.titre}</h3>
              <div className="reasons-grid">
                {details.raisons.items.map((raison) => (
                  <div key={raison.titre} className="reason-card">
                    <div className="reason-icon">{raison.icone}</div>
                    <h4>{raison.titre}</h4>
                    <p>{raison.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {details.themes && (
            <div className="themes-section">
              <h3>{details.themes.titre}</h3>
              <div className="themes-grid">
                {details.themes.items.map((theme) => (
                  <div key={theme.titre} className="theme-card">
                    {theme.visuel === 'sketchnote' ? (
                      <button
                        type="button"
                        className="theme-icon sketchnote-icon"
                        onClick={() => setIsSketchnoteExpanded(true)}
                        aria-label="Agrandir l'exemple de sketchnote"
                      >
                        <img
                          src={images.sketchnote.src}
                          alt={images.sketchnote.alt}
                          className="sketchnote-icon-image"
                          loading="lazy"
                          width="564"
                          height="376"
                        />
                      </button>
                    ) : theme.visuel === '6bricks' ? (
                      <div className="theme-icon lego-icon">
                        <img
                          src={images.atelier6Bricks.src}
                          alt={images.atelier6Bricks.alt}
                          className="lego-icon-image"
                          loading="lazy"
                          width="564"
                          height="376"
                        />
                      </div>
                    ) : (
                      <div className="theme-icon">{theme.icone}</div>
                    )}
                    <h4>{theme.titre}</h4>
                    <p>{theme.description}</p>
                    {theme.visuel === '6bricks' && theme.bouton ? (
                      <button
                        type="button"
                        className="theme-button"
                        onClick={scrollToBricksSection}
                      >
                        {theme.bouton}
                      </button>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          )}

          {details.planning && (
            <div className="planning-section">
              <h3>{details.planning.titre}</h3>
              <div className="planning-box">
                {details.planning.informations.map((info) => {
                  const parts = info.split(' : ');
                  return (
                    <p key={info}>
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

      {atelier6BricksService && (
        <section ref={bricksSectionRef} id="atelier-6-bricks" className="atelier-6-bricks-section">
          <div className="service-container">
            <div className="atelier-6-bricks-card">
              <div className="bricks-card-image">
                <img
                  src={images.atelier6Bricks.src}
                  alt={images.atelier6Bricks.alt}
                  className="bricks-image"
                  loading="lazy"
                  width="564"
                  height="376"
                />
              </div>
              <div className="bricks-card-content">
                <h2>{atelier6BricksService.titre}</h2>
                <p className="bricks-description">{atelier6BricksService.pourQui}</p>
                <div className="bricks-objectives">
                  <h3>{details.bricks.titreObjectifs}</h3>
                  <ul>
                    {atelier6BricksService.objectifs.map((objectif) => (
                      <li key={objectif}>{objectif}</li>
                    ))}
                  </ul>
                </div>
                <div className="bricks-info">
                  <div className="bricks-info-item">
                    <strong>{labelsServices.format} :</strong> {atelier6BricksService.format}
                  </div>
                  <div className="bricks-info-item">
                    <strong>{labelsServices.tarif} :</strong> {atelier6BricksService.tarif}
                  </div>
                </div>
                <div className="bricks-cta">
                  <Link to="/contact" className="cta-button cta-primary">
                    {details.bricks.boutonRdv}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {isSketchnoteExpanded ? (
        <div
          className="sketchnote-backdrop"
          onClick={() => setIsSketchnoteExpanded(false)}
        >
          <div
            className="sketchnote-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Exemple de sketchnote"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              className="sketchnote-close"
              onClick={() => setIsSketchnoteExpanded(false)}
              aria-label="Fermer"
            >
              ×
            </button>
            <img
              src={images.sketchnote.src}
              alt={images.sketchnote.alt}
              className="sketchnote-image-expanded"
              loading="lazy"
              width="1200"
              height="800"
            />
          </div>
        </div>
      ) : null}

      <CTASection />
    </div>
  );
};

export default AtelierPage;
