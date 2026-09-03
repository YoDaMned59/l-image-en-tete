import { siteData } from '../data/data';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';
import '../styles/ReikiPage.scss';

const ReikiPage = () => {
  const service = siteData.services.find((s) => s.id === 'reiki');
  const details = siteData.servicesDetails.reiki;
  const { labelsServices } = siteData;

  return (
    <div className="service-page service-page-vert">
      <SEO
        title={`${service.titre} - Soin Reiki`}
        description={`${service.pourQui}. Pratique Reiki proposée en complément du coaching scolaire, comme temps de calme et de recentrage. Format : ${service.format}. Tarif : ${service.tarif}.`}
        noIndex
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
          <div className="reiki-intro-section">
            <h2>{details.intro.titre}</h2>
            <div className="reiki-intro-content">
              {details.intro.paragraphes.map((paragraphe) => (
                <p key={paragraphe}>{paragraphe}</p>
              ))}
            </div>
          </div>

          <div className="section-divider"></div>

          <div className="coaching-section">
            <h3>{details.coaching.titre}</h3>
            <div className="coaching-intro">
              <p>{details.coaching.intro}</p>
            </div>
            <div className="coaching-points">
              {details.coaching.points.map((point) => (
                <div key={point} className="coaching-point">
                  <div className="point-icon">✨</div>
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="section-divider"></div>

          <div className="approche-section">
            <h3>{details.approche.titre}</h3>
            <div className="approche-card">
              <div className="approche-icon">🧘</div>
              <p>{details.approche.texte}</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default ReikiPage;
