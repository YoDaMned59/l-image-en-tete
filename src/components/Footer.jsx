import { Link } from 'react-router-dom';
import { siteData } from '../data/data';
import '../styles/Footer.scss';

const Footer = () => {
  const { contact, footer, mediateur, navigation, siteName, slogan } = siteData;
  const phoneHref = `tel:+33${contact.telephone.replace(/\D/g, '').replace(/^0/, '')}`;

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>{siteName}</h3>
          <p>{slogan}</p>
        </div>

        <div className="footer-section">
          <h4>{footer.navigationTitre}</h4>
          <ul>
            <li><Link to="/">{navigation.accueil}</Link></li>
            <li><Link to="/about">{navigation.aPropos}</Link></li>
            <li><Link to="/services/bilan">{navigation.bilan}</Link></li>
            <li><Link to="/services/atelier">{navigation.ateliers}</Link></li>
            <li><Link to="/services/6-bricks">{navigation.bricks}</Link></li>
            <li><Link to="/services/legotherapie">{navigation.legotherapie}</Link></li>
            <li><Link to="/contact">{navigation.contact}</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>{footer.legalesTitre}</h4>
          <ul>
            <li><Link to="/cgv">{footer.lienCgv}</Link></li>
            <li><Link to="/mentions-legales">{footer.lienMentions}</Link></li>
            <li><Link to="/politique-de-confidentialite">{footer.lienConfidentialite}</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>{footer.contactTitre}</h4>
          <p>{contact.adresse}</p>
          <p>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
          <p>
            <a href={phoneHref}>{contact.telephone}</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-mediateur">
          <p className="footer-mediateur-titre">{mediateur.titre}</p>
          <p>{mediateur.nom}</p>
          <p>
            <a href={mediateur.url} target="_blank" rel="noopener noreferrer">
              {mediateur.url}
            </a>
          </p>
          <p>{mediateur.adresse}</p>
        </div>
        <p>
          &copy; {new Date().getFullYear()} {siteName}. {footer.copyright}
        </p>
        <p className="footer-credit">
          {footer.creditAvant}{' '}
          <a href={footer.creditUrl} target="_blank" rel="noopener noreferrer">
            {footer.creditNom}
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
