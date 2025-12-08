import React, { useState } from 'react';
import { siteData } from '../data/data';
import '../styles/Contact.scss';

const Contact = () => {
  const { contactPage, contact } = siteData;
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulaire soumis:', formData);
    alert(contactPage.formulaire.messageConfirmation);
    setFormData({ nom: '', email: '', message: '' });
  };

  return (
    <div className="contact">
      {/* Section Hero */}
      <section className="contact-hero">
        <div className="contact-container">
          <h1>{contactPage.titre}</h1>
          <p className="hero-subtitle">{contactPage.heroSubtitle}</p>
        </div>
      </section>

      {/* Contenu principal */}
      <div className="contact-main">
        <div className="contact-container">
          <div className="contact-grid">
            {/* Formulaire de contact */}
            <section className="contact-form-section">
              <h2>{contactPage.formulaire.titre}</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="nom">{contactPage.formulaire.labels.nom}</label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">{contactPage.formulaire.labels.email}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">{contactPage.formulaire.labels.message}</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-button">
                  {contactPage.formulaire.bouton}
                </button>
              </form>
            </section>

            {/* Informations de contact */}
            <section className="contact-info-section">
              <h2>{contactPage.coordonnees.titre}</h2>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-text">
                    <h3>Adresse</h3>
                    <p>{contact.adresse}</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div className="contact-text">
                    <h3>Email</h3>
                    <p>{contact.email}</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div className="contact-text">
                    <h3>Téléphone</h3>
                    <p>{contact.telephone}</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">🕒</div>
                  <div className="contact-text">
                    <h3>Horaires</h3>
                    <p>{contact.horaires}</p>
                  </div>
                </div>
              </div>

              {/* Section réseaux sociaux */}
              <div className="social-section">
                <h3>{contactPage.reseauxSociaux.titre}</h3>
                <div className="social-links">
                  {contactPage.reseauxSociaux.liens.map((reseau, index) => (
                    <a 
                      key={index} 
                      href={reseau.url} 
                      className="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {reseau.nom}
                    </a>
                  ))}
                </div>
              </div>

              {/* Mention première rencontre gratuite */}
              <div className="free-consultation">
                <div className="highlight-box">
                  <div className="gift-icon">🎁</div>
                  <h3>{contactPage.premiereRencontre.titre}</h3>
                  <p>{contactPage.premiereRencontre.description}</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
