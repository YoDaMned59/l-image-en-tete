import React, { useState } from 'react';
import { siteData } from '../data/data';
import { normalizePath, navigate } from '../utils/pathUtils';
import logoImage from '../assets/Logo.webp';
import '../styles/Header.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  React.useEffect(() => {
    const updateActivePage = () => {
      const path = normalizePath(window.location.pathname);
      switch (path) {
        case '/about':
        case '/about/':
          setActivePage('about');
          break;
        case '/contact':
        case '/contact/':
          setActivePage('contact');
          break;
        case '/services/bilan':
        case '/services/bilan/':
          setActivePage('bilan');
          break;
        case '/services/atelier':
        case '/services/atelier/':
          setActivePage('atelier');
          break;
        case '/services/reiki':
        case '/services/reiki/':
          setActivePage('reiki');
          break;
        case '/services/atelier-6-bricks':
        case '/services/atelier-6-bricks/':
          setActivePage('atelier-6-bricks');
          break;
        default:
          setActivePage('home');
      }
    };

    updateActivePage();
    window.addEventListener('popstate', updateActivePage);
    
    return () => {
      window.removeEventListener('popstate', updateActivePage);
    };
  }, []);

  const navigateToPage = (path) => {
    const pageName = path === '/' ? 'home' : path.substring(1).split('/')[0];
    setActivePage(pageName);
    navigate(path);
    setIsMenuOpen(false);
  };

  const getNavLinkClass = (page) => {
    return activePage === page ? 'nav-link active' : 'nav-link';
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <div className="logo" onClick={() => navigateToPage('/')} style={{ cursor: 'pointer' }}>
            <img 
              src={logoImage} 
              alt="L'image en tête - Logo" 
              className="logo-image"
              loading="eager"
            />
          </div>
        </div>

        <div className="tagline-section">
          <p className="tagline">{siteData.slogan}</p>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      <nav className="navigation">
        <div className="nav-links">
          <button 
            className={getNavLinkClass('home')}
            onClick={() => navigateToPage('/')}
          >
            Accueil
          </button>
          <button 
            className={getNavLinkClass('about')}
            onClick={() => navigateToPage('/about')}
          >
            À propos
          </button>
          <button 
            className="nav-link dropdown"
            onMouseEnter={() => setActivePage('services')}
          >
            Services
            <div className="dropdown-content">
              <button className="dropdown-item" onClick={() => navigateToPage('/services/bilan')}>Mon bilan & suivi</button>
              <button className="dropdown-item" onClick={() => navigateToPage('/services/atelier')}>Mes ateliers</button>
              <button className="dropdown-item" onClick={() => navigateToPage('/services/atelier-6-bricks')}>Atelier 6 Bricks</button>
            </div>
          </button>
          <button 
            className={getNavLinkClass('contact')}
            onClick={() => navigateToPage('/contact')}
          >
            Contact
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="mobile-menu">
          <button className="mobile-nav-link" onClick={() => navigateToPage('/')}>
            Accueil
          </button>
          <button className="mobile-nav-link" onClick={() => navigateToPage('/about')}>
            À propos
          </button>
          <button className="mobile-nav-link" onClick={() => navigateToPage('/services/bilan')}>
            Mon bilan & suivi
          </button>
          <button className="mobile-nav-link" onClick={() => navigateToPage('/services/atelier')}>
            Mes ateliers
          </button>
          <button className="mobile-nav-link" onClick={() => navigateToPage('/services/atelier-6-bricks')}>
            Atelier 6 Bricks
          </button>
          <button className="mobile-nav-link" onClick={() => navigateToPage('/contact')}>
            Contact
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
