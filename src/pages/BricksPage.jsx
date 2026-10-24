import { siteData } from '../data/data';
import SEO from '../components/SEO';
import { PAGE_SEO } from '../config/seoPages';
import CTASection from '../components/CTASection';
import '../styles/BricksPage.scss';

const BricksPage = () => {
  const service = siteData.services.find((s) => s.id === 'atelier-6-bricks');
  const details = siteData.servicesDetails.bricks;
  const { labelsServices } = siteData;

  return (
    <div className="service-page service-page-bricks">
      <SEO
        title={PAGE_SEO['/services/6-bricks'].title}
        description={PAGE_SEO['/services/6-bricks'].description}
      />
      <section className="service-hero">
        <div className="service-container">
          <h1>{service.titre}</h1>
          <p className="service-subtitle">{service.pourQui}</p>
        </div>
      </section>

      <section className="content-section">
        <div className="service-container">
          <div className="texte-content">
            {details.intro.map((paragraphe) => (
              <p key={paragraphe}>{paragraphe}</p>
            ))}
          </div>
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

      <CTASection />
    </div>
  );
};

export default BricksPage;
