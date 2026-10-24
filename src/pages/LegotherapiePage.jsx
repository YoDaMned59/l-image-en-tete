import { siteData } from '../data/data';
import SEO from '../components/SEO';
import { PAGE_SEO } from '../config/seoPages';
import CTASection from '../components/CTASection';
import { formatTexte } from '../utils/formatTexte';
import '../styles/LegotherapiePage.scss';

const LegotherapiePage = () => {
  const service = siteData.services.find((s) => s.id === 'legotherapie');
  const details = siteData.servicesDetails.legotherapie;

  return (
    <div className="service-page service-page-legotherapie">
      <SEO
        title={PAGE_SEO['/services/legotherapie'].title}
        description={PAGE_SEO['/services/legotherapie'].description}
      />
      <section className="service-hero">
        <div className="service-container">
          <h1>{service.titre}</h1>
          <p className="service-subtitle">{service.pourQui}</p>
        </div>
      </section>

      <section className="content-section">
        <div className="service-container">
          <div className="texte-section">
            <div className="texte-content">
              {details.intro.paragraphes.map((paragraphe) => (
                <p key={paragraphe}>{paragraphe}</p>
              ))}
              <p className="mention-marque">{formatTexte(details.mentionMarque)}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="objectives-section">
        <div className="service-container">
          <h2>{details.pourQui.titre}</h2>
          <div className="objectives-grid">
            {details.pourQui.items.map((item, index) => (
              <div key={item} className="objective-card">
                <div className="objective-check">{index + 1}</div>
                <p>{item}</p>
              </div>
            ))}
          </div>

          <h2 className="objectives-suite">{details.pourQuoi.titre}</h2>
          <p className="section-intro">{details.pourQuoi.introduction}</p>
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

      <section className="content-section">
        <div className="service-container">
          <div className="texte-section">
            <h2>{details.comment.titre}</h2>
            <div className="texte-content">
              {details.comment.paragraphes.map((paragraphe) => (
                <p key={paragraphe}>{paragraphe}</p>
              ))}
            </div>
          </div>

          <div className="themes-section">
            <h3>{details.themes.titre}</h3>
            <p className="themes-intro">{details.themes.description}</p>
            <div className="themes-grid">
              {details.themes.items.map((theme) => (
                <div key={theme.titre} className="theme-card">
                  <div className="theme-icon" aria-hidden="true">{theme.icone}</div>
                  <h4>{theme.titre}</h4>
                  {theme.lignes.map((ligne) => (
                    <p key={ligne}>{ligne}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="galerie-section" aria-labelledby="galerie-legotherapie-titre">
        <div className="service-container">
          <h2 id="galerie-legotherapie-titre">{details.galerie.titre}</h2>
          <div className="galerie-grille">
            {details.galerie.photos.map((photo) => (
              <figure key={photo.src}>
                <img src={photo.src} alt={photo.alt} width="1080" height="1440" loading="lazy" decoding="async" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="info-section">
        <div className="service-container">
          <h2>{details.tarifs.titre}</h2>
          <div className="info-grid">
            {details.tarifs.items.map((tarif) => (
              <div key={tarif.label} className="info-card">
                <h3>{tarif.label}</h3>
                <p className="price">{tarif.prix}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default LegotherapiePage;
