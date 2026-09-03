import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/data';
import SEO from '../components/SEO';
import { PAGE_SEO } from '../config/seoPages';
import '../styles/Home.scss';

const Home = () => {
  const { home, services, images } = siteData;
  const activitiesSectionRef = useRef(null);

  const bilanService = services.find((s) => s.id === 'bilan');
  const atelierService = services.find((s) => s.id === 'atelier');

  const scrollToActivities = () => {
    activitiesSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home">
      <SEO
        title={PAGE_SEO['/'].title}
        description={PAGE_SEO['/'].description}
      />

      <section className="hero-section" style={{ backgroundImage: `url(${images.accueilHero.src})` }}>
        <div className="hero-content">
          <h1>{siteData.siteName}</h1>
          <p className="hero-slogan">{siteData.slogan}</p>
          <p className="hero-description">{home.hero.description}</p>
          <button type="button" className="cta-button" onClick={scrollToActivities}>
            {home.hero.bouton}
          </button>
        </div>
      </section>

      <section className="presentation-section">
        <div className="container">
          <h2>{home.presentation.titre}</h2>
          <p>{home.presentation.texte}</p>
        </div>
      </section>

      <section className="activities-section" ref={activitiesSectionRef}>
        <div className="container">
          <h2>{home.activites.titre}</h2>
          <div className="activities-grid">
            <div className="service-block bilan-block">
              <div className="service-image">
                <img
                  src={images.accueilBilan.src}
                  alt={images.accueilBilan.alt}
                  loading="lazy"
                  width="564"
                  height="376"
                />
              </div>
              <div className="service-content">
                <h3>{bilanService.titre.toUpperCase()}</h3>
                <p className="service-description">{bilanService.pourQui}</p>
                <div className="objectives">
                  <p>{bilanService.objectifs.join(', ')}</p>
                </div>
                <div className="modalities">
                  <h4>{home.activites.titreModalites}</h4>
                  {bilanService.modalites.map((modalite) => (
                    <div key={modalite} className="modality-item"><span>{modalite}</span></div>
                  ))}
                  <div className="modality-item"><span>{bilanService.format}</span></div>
                  <div className="modality-item"><span>{bilanService.tarif}</span></div>
                </div>
                <div className="service-buttons">
                  <Link to="/contact" className="cta-button primary">{home.activites.boutonRdv}</Link>
                  <Link to="/services/bilan" className="cta-button secondary">{home.activites.boutonPlus}</Link>
                </div>
              </div>
            </div>

            <div className="service-block atelier-block">
              <div className="service-image">
                <img
                  src={images.accueilAtelier.src}
                  alt={images.accueilAtelier.alt}
                  loading="lazy"
                  width="564"
                  height="376"
                />
              </div>
              <div className="service-content">
                <h3>{atelierService.titre.toUpperCase()}</h3>
                <p className="service-description">{atelierService.pourQui}</p>
                <div className="objectives">
                  <p>{atelierService.objectifs.join(', ')}</p>
                </div>
                <div className="modalities">
                  <h4>{home.activites.titreModalites}</h4>
                  {atelierService.modalites.map((modalite) => (
                    <div key={modalite} className="modality-item"><span>{modalite}</span></div>
                  ))}
                  <div className="modality-item"><span>{atelierService.format}</span></div>
                  <div className="modality-item"><span>{atelierService.tarif}</span></div>
                </div>
                <div className="service-buttons">
                  <Link to="/contact" className="cta-button primary">{home.activites.boutonRdv}</Link>
                  <Link to="/services/atelier" className="cta-button secondary">{home.activites.boutonPlus}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>{home.cta.titre}</h2>
          <p>{home.cta.description}</p>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-button primary">{home.cta.boutonPrincipal}</Link>
            <Link to="/about" className="cta-button secondary">{home.cta.boutonSecondaire}</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
