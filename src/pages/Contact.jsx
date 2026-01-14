import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { siteData } from '../data/data';
import SEO from '../components/SEO';
import { EMAILJS_CONFIG } from '../config/emailjs.config';
import '../styles/Contact.scss';

const Contact = () => {
  const { contactPage, contact } = siteData;
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    if (EMAILJS_CONFIG.PUBLIC_KEY && EMAILJS_CONFIG.PUBLIC_KEY !== 'VOTRE_PUBLIC_KEY_ICI') {
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (submitStatus) {
      setSubmitStatus(null);
      setStatusMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!EMAILJS_CONFIG.PUBLIC_KEY || 
        EMAILJS_CONFIG.PUBLIC_KEY === 'VOTRE_PUBLIC_KEY_ICI' ||
        !EMAILJS_CONFIG.SERVICE_ID ||
        !EMAILJS_CONFIG.TEMPLATE_ID) {
      setSubmitStatus('error');
      setStatusMessage('⚠️ EmailJS n\'est pas encore configuré. Voir EMAILJS-GUIDE.md pour les instructions.');
      return;
    }

    if (!formData.nom.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      setStatusMessage('❌ Veuillez remplir tous les champs du formulaire.');
      return;
    }

    setIsLoading(true);
    setSubmitStatus(null);
    setStatusMessage('');

    try {
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          name: formData.nom.trim(),
          from_name: formData.nom.trim(),
          from_email: formData.email.trim(),
          message: formData.message.trim(),
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (response.status === 200) {
        setSubmitStatus('success');
        setStatusMessage(contactPage.formulaire.messageConfirmation || 'Message envoyé avec succès !');
        setFormData({ nom: '', email: '', message: '' });
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
      
    } catch (error) {
      console.error('Erreur EmailJS:', error);
      setSubmitStatus('error');
      
      if (error.text) {
        setStatusMessage(`❌ Erreur : ${error.text}`);
      } else {
        setStatusMessage('❌ Erreur lors de l\'envoi. Veuillez réessayer ou me contacter directement par email.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact">
      <SEO 
        title="Contact - L'Image en Tête"
        description="Contactez L'Image en Tête pour prendre rendez-vous. Coaching scolaire à Richebourg. Première rencontre gratuite. Téléphone : 07.81.17.23.25"
      />
      <section className="contact-hero">
        <div className="contact-container">
          <h1>{contactPage.titre}</h1>
          <p className="hero-subtitle">{contactPage.heroSubtitle}</p>
        </div>
      </section>

      <div className="contact-main">
        <div className="contact-container">
          <div className="contact-grid">
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
                
                {submitStatus && (
                  <div className={`form-status ${submitStatus === 'success' ? 'success' : 'error'}`}>
                    {statusMessage}
                  </div>
                )}
                
                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={isLoading}
                >
                  {isLoading ? 'Envoi en cours...' : contactPage.formulaire.bouton}
                </button>
              </form>
            </section>

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
