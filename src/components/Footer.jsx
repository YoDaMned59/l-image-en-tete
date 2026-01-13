import React from 'react';
import { navigate } from '../utils/pathUtils';
import '../styles/Footer.scss';

const Footer = () => {
  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>L'image en tête</h3>
          <p>Coaching scolaire et accompagnement dans les apprentissages</p>
        </div>
        
        <div className="footer-section">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#" onClick={(e) => { e.preventDefault(); navigateTo('/'); }}>Accueil</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); navigateTo('/about'); }}>À propos</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); navigateTo('/services'); }}>Services</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); navigateTo('/contact'); }}>Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Informations légales</h4>
          <ul>
            <li><a href="#" onClick={(e) => { e.preventDefault(); navigateTo('/cgv'); }}>Conditions Générales de Vente</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); navigateTo('/mentions-legales'); }}>Mentions légales</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Richebourg, France</p>
          <p>limageentete@gmail.com</p>
          <p>06 46 25 50 65</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 SDuvivierTech. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;

