import React from 'react';
import { siteData } from '../data/data';
import { navigate } from '../utils/pathUtils';
import '../styles/ReikiPage.scss';

const ReikiPage = () => {
  const service = siteData.services.find(s => s.id === 'reiki');

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <div className="service-page service-page-vert">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="service-container">
          <h1>{service.titre}</h1>
          <p className="service-subtitle">{service.pourQui}</p>
        </div>
      </section>

      {/* Objectifs Section */}
      <section className="objectives-section">
        <div className="service-container">
          <h2>Objectifs</h2>
          <div className="objectives-grid">
            {service.objectifs.map((objectif, index) => (
              <div key={index} className="objective-card">
                <div className="objective-check">✓</div>
                <p>{objectif}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Informations Section */}
      <section className="info-section">
        <div className="service-container">
          <div className="info-grid">
            <div className="info-card">
              <h3>Format</h3>
              <p>{service.format}</p>
            </div>
            <div className="info-card">
              <h3>Tarif</h3>
              <p className="price">{service.tarif}</p>
            </div>
            <div className="info-card">
              <h3>Approche</h3>
              <p>{service.ton}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contenu spécifique */}
      <section className="content-section">
        <div className="service-container">
          {/* Section Le Reiki */}
          <div className="reiki-intro-section">
            <h2>Le Reiki, une approche douce et globale</h2>
            <div className="reiki-intro-content">
              <p>
                Le Reiki est un soin énergétique d'origine japonaise où l'énergie universelle est transmise par apposition des mains sur différentes régions du corps. Elle agit sur plusieurs plans : mental, émotionnel et physique.
              </p>
              <p>
                Il stimule le potentiel actif d'auto-guérison que l'on a tous en nous. Ce processus d'autorégulation nous permet de maintenir une stabilité face aux variations.
              </p>
              <p>
                Offrez-vous un moment de détente, dans l'instant présent et retrouvez votre calme et une clarté intérieure.
              </p>
            </div>
          </div>

          {/* Séparateur */}
          <div className="section-divider"></div>

          {/* Section Reiki et coaching scolaire */}
          <div className="coaching-section">
            <h3>Reiki et coaching scolaire</h3>
            <div className="coaching-intro">
              <p>
                Associé au coaching scolaire, le Reiki devient un véritable soutien pour l'équilibre intérieur.
              </p>
            </div>
            <div className="coaching-points">
              <div className="coaching-point">
                <div className="point-icon">✨</div>
                <p>Cette combinaison permet à l'élève de mettre en œuvre plus facilement les stratégies travaillées ensemble.</p>
              </div>
              <div className="coaching-point">
                <div className="point-icon">✨</div>
                <p>Il soutient l'élève de façon subtile, en l'aidant à se recentrer et à se reconnecter à ses propres ressources.</p>
              </div>
              <div className="coaching-point">
                <div className="point-icon">✨</div>
                <p>Grâce à cette approche, l'élève peut être plus présent dans ses études.</p>
              </div>
              <div className="coaching-point">
                <div className="point-icon">✨</div>
                <p>Il aborde les défis scolaires avec plus de recul et de sérénité.</p>
              </div>
            </div>
          </div>

          {/* Séparateur */}
          <div className="section-divider"></div>

          {/* Section Mon approche */}
          <div className="approche-section">
            <h3>Mon approche</h3>
            <div className="approche-card">
              <div className="approche-icon">🧘</div>
              <p>
                Je suis praticienne Reiki, initiée au second degré, et j'accompagne les élèves (et leurs parents) à retrouver équilibre, confiance et bien-être pour avancer plus sereinement dans leur parcours scolaire et personnel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="service-container">
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
    </div>
  );
};

export default ReikiPage;
