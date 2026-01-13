import React from 'react';
import { siteData } from '../data/data';
import SEO from '../components/SEO';
import '../styles/About.scss';

const About = () => {
  const { about } = siteData;

  return (
    <div className="about">
      <SEO 
        title="À propos"
        description="Découvrez le parcours de Mathilde, coach scolaire spécialisée en métacognition et facilitation graphique. Accompagnement bienveillant pour enfants et adolescents à Richebourg."
      />
      <div className="container">
        {/* Section Hero */}
        <section className="about-hero">
          <h1>{about.titre}</h1>
          <p className="hero-subtitle">{about.heroSubtitle}</p>
        </section>

        {/* Section Mon parcours */}
        <section className="presentation">
          <div className="presentation-content">
            <div className="text-content">
              <h2>{about.parcours.titre}</h2>
              {about.parcours.paragraphes.map((paragraphe, index) => (
                <p key={index}>{paragraphe}</p>
              ))}
              
              <h3>{about.philosophie.titre}</h3>
              {about.philosophie.paragraphes.map((paragraphe, index) => (
                <p key={index}>{paragraphe}</p>
              ))}
              
              <h3>{about.engagement.titre}</h3>
              <div className="engagement-cards">
                {about.engagement.items.map((item, index) => (
                  <div key={index} className="engagement-card">
                    <div className="engagement-check">✓</div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="image-content">
              <div className="profile-image">
                <div className="image-placeholder">
                  <span>Photo de profil</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
