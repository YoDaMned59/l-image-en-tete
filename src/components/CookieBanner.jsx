import React, { useState, useEffect } from 'react';
import '../styles/CookieBanner.scss';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => {
        setShowBanner(true);
      }, 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="cookie-banner">
      <div className="cookie-banner-content">
        <div className="cookie-banner-text">
          <h3>🍪 Cookies et confidentialité</h3>
          <p>
            Ce site utilise des cookies pour améliorer votre expérience de navigation. 
            En continuant à naviguer, vous acceptez notre utilisation des cookies.
          </p>
        </div>
        <div className="cookie-banner-buttons">
          <button 
            className="cookie-button accept" 
            onClick={handleAccept}
          >
            J'accepte
          </button>
          <button 
            className="cookie-button decline" 
            onClick={handleDecline}
          >
            Je refuse
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
