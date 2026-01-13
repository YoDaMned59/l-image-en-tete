import React, { useRef } from 'react';
import { siteData } from '../data/data';
import { handleLinkClick } from '../utils/pathUtils';
import SEO from '../components/SEO';
import expliquerImage from '../assets/expliquer comment faire.webp';
import atelierImage from '../assets/Atelier remediation cognitive.webp';
import heroBackgroundImage from '../assets/soutien-scolaire.webp';
import '../styles/Home.scss';

const Home = () => {
  const { home, services } = siteData;
  const activitiesSectionRef = useRef(null);
  
  const bilanService = services.find(s => s.id === 'bilan');
  const atelierService = services.find(s => s.id === 'atelier');

  const scrollToActivities = () => {
    if (activitiesSectionRef.current) {
      activitiesSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home">
      {/* Composant SEO : définit le titre et la description pour Google */}
      <SEO 
        title="Accueil"
        description="Coaching scolaire et accompagnement dans les apprentissages à Richebourg. Bilan, suivi individuel et ateliers de remédiation cognitive. Première rencontre gratuite."
      />
      
      {/* Section Hero */}
      <section className="hero-section" style={{ backgroundImage: `url(${heroBackgroundImage})` }}>
        <div className="hero-content">
          <h1>{siteData.siteName}</h1>
          <h2>{siteData.slogan}</h2>
          <p className="hero-description">
            {home.hero.description}
          </p>
          <button className="cta-button" onClick={scrollToActivities}>{home.hero.bouton}</button>
        </div>
      </section>

      {/* Section Présentation */}
      <section className="presentation-section">
        <div className="container">
          <h2>{home.presentation.titre}</h2>
          <p>{home.presentation.texte}</p>
        </div>
      </section>

      {/* Section Mes Activités */}
      <section className="activities-section" ref={activitiesSectionRef}>
        <div className="container">
          <h2>Mes activités</h2>
          <div className="activities-grid">
            {/* Bilan & Suivi */}
            <div className="service-block bilan-block">
              <div className="service-image">
                <img 
                  src={expliquerImage} 
                  alt="Explication de la métacognition et des méthodes d'apprentissage" 
                  loading="lazy"
                />
              </div>
              <div className="service-content">
                <h3>{bilanService.titre.toUpperCase()}</h3>
                <p className="service-description">
                  {bilanService.pourQui}
                </p>
                <div className="objectives">
                  <p>{bilanService.objectifs.join(', ')}</p>
                </div>
                <div className="modalities">
                  <h4>Modalités :</h4>
                  <div className="modality-item">
                    <span className="icon">👤</span>
                    <span>Individuel</span>
                  </div>
                  <div className="modality-item">
                    <span className="icon">📍</span>
                    <span>À domicile</span>
                  </div>
                  <div className="modality-item">
                    <span className="icon">⏰</span>
                    <span>{bilanService.format}</span>
                  </div>
                  <div className="modality-item">
                    <span className="icon">€</span>
                    <span>{bilanService.tarif}</span>
                  </div>
                </div>
                <div className="service-buttons">
                  <a href="#" onClick={(e) => handleLinkClick(e, '/contact')} className="cta-button primary">Prendre rendez-vous</a>
                  <a href="#" onClick={(e) => handleLinkClick(e, '/services/bilan')} className="cta-button secondary">En savoir plus</a>
                </div>
              </div>
            </div>

            {/* Ateliers */}
            <div className="service-block atelier-block">
              <div className="service-image">
                <img 
                  src={atelierImage} 
                  alt="Ateliers de remédiation cognitive" 
                  loading="lazy"
                />
              </div>
              <div className="service-content">
                <h3>{atelierService.titre.toUpperCase()}</h3>
                <p className="service-description">
                  {atelierService.pourQui}
                </p>
                <div className="objectives">
                  <p>{atelierService.objectifs.join(', ')}</p>
                </div>
                <div className="modalities">
                  <h4>Modalités :</h4>
                  <div className="modality-item">
                    <span className="icon">👥</span>
                    <span>Collectif</span>
                  </div>
                  <div className="modality-item">
                    <span className="icon">📍</span>
                    <span>À domicile</span>
                  </div>
                  <div className="modality-item">
                    <span className="icon">⏰</span>
                    <span>{atelierService.format}</span>
                  </div>
                  <div className="modality-item">
                    <span className="icon">€</span>
                    <span>{atelierService.tarif}</span>
                  </div>
                </div>
                <div className="service-buttons">
                  <a href="#" onClick={(e) => handleLinkClick(e, '/contact')} className="cta-button primary">Prendre rendez-vous</a>
                  <a href="#" onClick={(e) => handleLinkClick(e, '/services/atelier')} className="cta-button secondary">En savoir plus</a>
                </div>
              </div>
            </div>

            {/* Reiki - masqué pour l'instant - à réactiver plus tard */}
            {/* <div className="service-block reiki-block">
              <div className="service-image">
                <div className="reiki-placeholder">
                  <div className="reiki-icon">🧘</div>
                </div>
              </div>
              <div className="service-content">
                <h3>{reikiService.titre.toUpperCase()}</h3>
                <p className="service-description">
                  {reikiService.pourQui}
                </p>
                <div className="objectives">
                  <p>{reikiService.objectifs.join(', ')}</p>
                </div>
                <div className="modalities">
                  <h4>Modalités :</h4>
                  <div className="modality-item">
                    <span className="icon">🧘</span>
                    <span>Tout public</span>
                  </div>
                  <div className="modality-item">
                    <span className="icon">📍</span>
                    <span>En cabinet (Richebourg) ou à distance</span>
                  </div>
                  <div className="modality-item">
                    <span className="icon">⏰</span>
                    <span>{reikiService.format}</span>
                  </div>
                  <div className="modality-item">
                    <span className="icon">€</span>
                    <span>{reikiService.tarif}</span>
                  </div>
                </div>
                <div className="service-buttons">
                  <a href="#" onClick={(e) => handleLinkClick(e, '/contact')} className="cta-button primary">Prendre rendez-vous</a>
                  <a href="#" onClick={(e) => handleLinkClick(e, '/services/reiki')} className="cta-button secondary">En savoir plus</a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>{home.cta.titre}</h2>
          <p>{home.cta.description}</p>
          <div className="cta-buttons">
            <a href="#" onClick={(e) => handleLinkClick(e, '/contact')} className="cta-button primary">{home.cta.boutonPrincipal}</a>
            <a href="#" onClick={(e) => handleLinkClick(e, '/about')} className="cta-button secondary">{home.cta.boutonSecondaire}</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
