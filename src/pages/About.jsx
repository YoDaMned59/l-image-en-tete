import { Link } from 'react-router-dom';
import { siteData } from '../data/data';
import SEO from '../components/SEO';
import { PAGE_SEO } from '../config/seoPages';
import '../styles/About.scss';

const About = () => {
  const { about } = siteData;

  return (
    <div className="about">
      <SEO
        title={PAGE_SEO['/about'].title}
        description={PAGE_SEO['/about'].description}
      />
      <div className="container">
        <section className="about-hero">
          <h1>{about.titre}</h1>
          <p className="hero-subtitle">{about.heroSubtitle}</p>
        </section>

        <section className="presentation">
          <div className="presentation-content">
            <div className="text-content">
              <h2>{about.parcours.titre}</h2>
              {about.parcours.paragraphes.map((paragraphe) => (
                <p key={paragraphe}>{paragraphe}</p>
              ))}

              <h3>{about.philosophie.titre}</h3>
              {about.philosophie.paragraphes.map((paragraphe) => (
                <p key={paragraphe}>{paragraphe}</p>
              ))}

              <h3>{about.engagement.titre}</h3>
              <div className="engagement-cards">
                {about.engagement.items.map((item) => (
                  <div key={item} className="engagement-card">
                    <div className="engagement-check" aria-hidden="true">✓</div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="image-content">
              <div className="profile-image">
                <img
                  src={siteData.images.photoMathilde.src}
                  alt={siteData.images.photoMathilde.alt}
                  className="profile-photo"
                  width="400"
                  height="400"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="methods">
          <div className="methods-container">
            <h2>{about.methodes.titre}</h2>
            <div className="methods-grid">
              {about.methodes.items.map((methode) => (
                <article key={methode.titre} className="method-card">
                  <h3>{methode.titre}</h3>
                  <p>{methode.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="benefits-section">
          <div className="benefits-container">
            <h2>{about.benefices.titre}</h2>
            <div className="benefits-grid">
              {about.benefices.items.map((benefice) => (
                <article key={benefice.titre} className="benefit-card">
                  <h3>{benefice.titre}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="approach-section">
          <div className="approach-container">
            <h2>{about.approche.titre}</h2>
            <div className="steps-grid">
              {about.approche.etapes.map((etape) => (
                <article key={etape.numero} className="step-card">
                  <div className="step-number" aria-hidden="true">{etape.numero}</div>
                  <h3>{etape.titre}</h3>
                  <p>{etape.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>

      <section className="about-cta">
        <h2>{about.cta.titre}</h2>
        <p>{about.cta.description}</p>
        <Link to="/contact" className="cta-button">{about.cta.bouton}</Link>
      </section>
    </div>
  );
};

export default About;
