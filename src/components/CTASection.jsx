import React from 'react';
import { handleLinkClick } from '../utils/pathUtils';

const CTASection = ({ containerClass = 'service-container' }) => {
  return (
    <section className="cta-section">
      <div className={containerClass}>
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
  );
};

export default CTASection;
