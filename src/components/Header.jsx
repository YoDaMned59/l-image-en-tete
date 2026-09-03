import { useEffect, useId, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { siteData } from '../data/data';
import '../styles/Header.scss';

const navClass = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link');

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const servicesRef = useRef(null);
  const menuId = useId();
  const isServicePage = location.pathname.startsWith('/services/');
  const { navigation, images } = siteData;

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        setIsServicesOpen(false);
      }
    };

    const onPointerDown = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onPointerDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onPointerDown);
    };
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <Link to="/" className="logo" aria-label={images.logo.alt} onClick={() => setIsMenuOpen(false)}>
            <img
              src={images.logo.src}
              alt={images.logo.alt}
              className="logo-image"
              width="256"
              height="100"
            />
          </Link>
        </div>

        <div className="tagline-section">
          <p className="tagline">{siteData.slogan}</p>
        </div>

        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls={menuId}
          aria-label={isMenuOpen ? navigation.fermerMenu : navigation.ouvrirMenu}
        >
          <span className="hamburger-line" aria-hidden="true"></span>
          <span className="hamburger-line" aria-hidden="true"></span>
          <span className="hamburger-line" aria-hidden="true"></span>
        </button>
      </div>

      <nav className="navigation" aria-label="Navigation principale">
        <div className="nav-links">
          <NavLink to="/" end className={navClass}>
            {navigation.accueil}
          </NavLink>
          <NavLink to="/about" className={navClass}>
            {navigation.aPropos}
          </NavLink>
          <div
            className={`dropdown${isServicesOpen ? ' open' : ''}${isServicePage ? ' is-active' : ''}`}
            ref={servicesRef}
          >
            <button
              type="button"
              className="dropdown-toggle"
              aria-expanded={isServicesOpen}
              aria-haspopup="true"
              onClick={() => setIsServicesOpen((open) => !open)}
            >
              {navigation.services}
            </button>
            <div className="dropdown-content" role="menu">
              <NavLink
                to="/services/bilan"
                className="dropdown-item"
                role="menuitem"
                onClick={() => setIsServicesOpen(false)}
              >
                {navigation.bilan}
              </NavLink>
              <NavLink
                to="/services/atelier"
                className="dropdown-item"
                role="menuitem"
                onClick={() => setIsServicesOpen(false)}
              >
                {navigation.ateliers}
              </NavLink>
            </div>
          </div>
          <NavLink to="/contact" className={navClass}>
            {navigation.contact}
          </NavLink>
        </div>
      </nav>

      {isMenuOpen ? (
        <div className="mobile-menu" id={menuId}>
          <NavLink to="/" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
            {navigation.accueil}
          </NavLink>
          <NavLink to="/about" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
            {navigation.aPropos}
          </NavLink>
          <NavLink to="/services/bilan" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
            {navigation.bilan}
          </NavLink>
          <NavLink to="/services/atelier" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
            {navigation.ateliers}
          </NavLink>
          <NavLink to="/contact" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
            {navigation.contact}
          </NavLink>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
