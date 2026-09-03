import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { siteData } from '../data/data';
import SEO from '../components/SEO';
import { EMAILJS_CONFIG } from '../config/emailjs.config';
import { PAGE_SEO } from '../config/seoPages';
import '../styles/Contact.scss';

const emptyForm = {
  nom: '',
  email: '',
  message: '',
  website: '',
  rgpd: false,
};

const Contact = () => {
  const { contactPage, contact } = siteData;
  const seo = PAGE_SEO['/contact'];
  const startedAtRef = useRef(Date.now());
  const [formData, setFormData] = useState(emptyForm);
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');
  const phoneHref = `tel:+33${contact.telephone.replace(/\D/g, '').replace(/^0/, '')}`;

  useEffect(() => {
    if (EMAILJS_CONFIG.PUBLIC_KEY) {
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    }
  }, []);

  const handleChange = (event) => {
    const { name, type, checked, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (submitStatus) {
      setSubmitStatus(null);
      setStatusMessage('');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.website.trim() || Date.now() - startedAtRef.current < 800) {
      setSubmitStatus('success');
      setStatusMessage(contactPage.formulaire.messageConfirmation);
      setFormData(emptyForm);
      return;
    }

    if (!formData.nom.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      setStatusMessage(contactPage.formulaire.erreurChamps);
      return;
    }

    if (!formData.rgpd) {
      setSubmitStatus('error');
      setStatusMessage(contactPage.formulaire.erreurRgpd);
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
        EMAILJS_CONFIG.PUBLIC_KEY,
      );

      if (response.status === 200) {
        setSubmitStatus('success');
        setStatusMessage(contactPage.formulaire.messageConfirmation);
        setFormData(emptyForm);
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch {
      setSubmitStatus('error');
        setStatusMessage(contactPage.formulaire.erreurEnvoi);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact">
      <SEO title={seo.title} description={seo.description} />
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
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="hp-field" aria-hidden="true">
                  <label htmlFor="website">Site web</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="nom">{contactPage.formulaire.labels.nom}</label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                    autoComplete="name"
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
                    autoComplete="email"
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
                  />
                </div>

                <div className="form-group form-consent">
                  <label htmlFor="rgpd">
                    <input
                      type="checkbox"
                      id="rgpd"
                      name="rgpd"
                      checked={formData.rgpd}
                      onChange={handleChange}
                      required
                    />
                    <span>
                      {contactPage.formulaire.consentementAvant}{' '}
                      <Link to="/politique-de-confidentialite">{contactPage.formulaire.consentementLien}</Link>.
                    </span>
                  </label>
                </div>

                {submitStatus ? (
                  <div
                    className={`form-status ${submitStatus === 'success' ? 'success' : 'error'}`}
                    role="status"
                  >
                    {statusMessage}
                  </div>
                ) : null}

                <button type="submit" className="submit-button" disabled={isLoading}>
                  {isLoading ? contactPage.formulaire.boutonChargement : contactPage.formulaire.bouton}
                </button>
              </form>
            </section>

            <section className="contact-info-section">
              <h2>{contactPage.coordonnees.titre}</h2>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-text">
                    <h3>{contactPage.coordonnees.adresse}</h3>
                    <p>{contact.adresse}</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-text">
                    <h3>{contactPage.coordonnees.email}</h3>
                    <p><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-text">
                    <h3>{contactPage.coordonnees.telephone}</h3>
                    <p><a href={phoneHref}>{contact.telephone}</a></p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-text">
                    <h3>{contactPage.coordonnees.horaires}</h3>
                    <p>{contact.horaires}</p>
                  </div>
                </div>
              </div>

              <div className="social-section">
                <h3>{contactPage.reseauxSociaux.titre}</h3>
                <div className="social-links">
                  {contactPage.reseauxSociaux.liens.map((reseau) => (
                    <a
                      key={reseau.nom}
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
