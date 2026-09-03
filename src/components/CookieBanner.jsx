import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/data';
import '../styles/CookieBanner.scss';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const { bandeauConfidentialite } = siteData;

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setShowBanner(true);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    localStorage.setItem('cookieConsent', 'acknowledged');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="cookie-banner" role="dialog" aria-labelledby="cookie-banner-title">
      <div className="cookie-banner-content">
        <div className="cookie-banner-text">
          <h3 id="cookie-banner-title">{bandeauConfidentialite.titre}</h3>
          <p>
            {bandeauConfidentialite.texte}{' '}
            <Link to="/politique-de-confidentialite">{bandeauConfidentialite.lien}</Link>.
          </p>
        </div>
        <div className="cookie-banner-buttons">
          <button type="button" className="cookie-button accept" onClick={handleDismiss}>
            {bandeauConfidentialite.bouton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
