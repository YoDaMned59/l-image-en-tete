import React from 'react';
import { siteData } from '../data/data';
import { navigate } from '../utils/pathUtils';
import '../styles/BilanPage.scss';

const BilanPage = () => {
  const service = siteData.services.find(s => s.id === 'bilan');

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <div className="service-page service-page-rose">
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
          {/* Section Le Bilan */}
          <div className="bilan-section">
            <h2>Le bilan</h2>
            <div className="bilan-content">
              <p className="bilan-intro">
                Le bilan commence par un entretien approfondi avec le(s) parent(s) et l'adolescent ou enfant.
              </p>
              <p>
                Celui-ci dure <strong>1h30</strong>. Cet échange permet d'identifier les besoins et définir ensemble des objectifs concrets pour un suivi adapté.
              </p>
              <p>
                Mon rôle n'est pas de poser un diagnostic. Je peux en revanche vous aider à comprendre le fonctionnement du cerveau et ses mécanismes d'apprentissage, apporter des pistes de réflexion et accompagner à la mise en place d'outils ou d'aménagements pour faciliter le quotidien.
              </p>
              <div className="formulaire-info">
                <p>
                  <strong>Un formulaire sera à remplir</strong> à destination des parents ou de l'apprenant (selon son âge) ainsi qu'à l'enseignant / professeur principal sera à remplir afin de vous aider au mieux.
                </p>
              </div>
            </div>
          </div>

          {/* Section Suivi individuel */}
          <div className="suivi-section">
            <h2>Suivi individuel</h2>
            <div className="suivi-content">
              <p>
                Grâce à la <strong>métacognition</strong>, nous élaborons ensemble des stratégies qui seront ensuite appliquées directement dans ses différents cours (français, mathématiques, etc.). L'objectif est de rendre l'élève autonome dans l'utilisation de méthodes efficaces, quel que soit le domaine.
              </p>
              <p>
                Le suivi comprend également un travail autour de la <strong>gestion des erreurs</strong>, afin de transformer les difficultés en opportunités d'apprentissage.
              </p>
              <p>
                Enfin, nous travaillons la <strong>méthodologie de travail</strong>, l'<strong>organisation</strong>, et des outils pratiques comme la <strong>prise de notes visuelle</strong>, pour donner à l'élève des méthodes concrètes, adaptées à son profil et faciles à réutiliser au quotidien.
              </p>
              <p className="suivi-objectif">
                Ce suivi vise à renforcer la <strong>confiance</strong>, l'<strong>autonomie</strong> et l'<strong>efficacité</strong> de votre enfant tout au long de son parcours scolaire.
              </p>
            </div>
          </div>

          {/* Pack 5 séances */}
          <div className="pack-box">
            <h3>{siteData.about.pack.titre}</h3>
            <p className="pack-price">{siteData.about.pack.prix}</p>
            <p className="pack-description">{siteData.about.pack.description}</p>
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

export default BilanPage;
