import { Link } from 'react-router-dom';
import { siteData } from '../data/data';

const CTASection = ({ containerClass = 'service-container' }) => {
  const { ctaService } = siteData;

  return (
    <section className="cta-section">
      <div className={containerClass}>
        <h2>{ctaService.titre}</h2>
        <p>{ctaService.description}</p>
        <div className="cta-buttons">
          <Link to="/contact" className="cta-button cta-primary">
            {ctaService.boutonRdv}
          </Link>
          <Link to="/" className="cta-button cta-secondary">
            {ctaService.boutonAccueil}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
