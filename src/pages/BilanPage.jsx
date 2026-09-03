import { siteData } from '../data/data';
import SEO from '../components/SEO';
import { PAGE_SEO } from '../config/seoPages';
import CTASection from '../components/CTASection';
import { formatTexte } from '../utils/formatTexte';
import '../styles/BilanPage.scss';

const BilanPage = () => {
  const service = siteData.services.find((s) => s.id === 'bilan');
  const details = siteData.servicesDetails.bilan;
  const { labelsServices } = siteData;

  return (
    <div className="service-page service-page-rose">
      <SEO
        title={PAGE_SEO['/services/bilan'].title}
        description={PAGE_SEO['/services/bilan'].description}
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
          <div className="bilan-section">
            <h2>{details.leBilan.titre}</h2>
            <div className="bilan-content">
              {details.leBilan.paragraphes.map((paragraphe, index) => (
                <p key={paragraphe} className={index === 0 ? 'bilan-intro' : undefined}>
                  {formatTexte(paragraphe)}
                </p>
              ))}
              <div className="formulaire-info">
                <p>{formatTexte(details.leBilan.formulaire)}</p>
              </div>
            </div>
          </div>

          <div className="suivi-section">
            <h2>{details.suivi.titre}</h2>
            <div className="suivi-content">
              {details.suivi.paragraphes.map((paragraphe) => (
                <p key={paragraphe}>{formatTexte(paragraphe)}</p>
              ))}
              <p className="suivi-objectif">{formatTexte(details.suivi.objectif)}</p>
            </div>
          </div>

          <div className="pack-box">
            <h3>{details.pack.titre}</h3>
            <p className="pack-price">{details.pack.prix}</p>
            <p className="pack-description">{details.pack.description}</p>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default BilanPage;
