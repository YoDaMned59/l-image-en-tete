import { Link } from 'react-router-dom';
import { siteData } from '../data/data';
import SEO from '../components/SEO';

const NotFound = () => {
  const { pageIntrouvable } = siteData;

  return (
    <div className="not-found">
      <SEO
        title={pageIntrouvable.seoTitle}
        description={pageIntrouvable.seoDescription}
        noIndex
      />
      <h1>{pageIntrouvable.titre}</h1>
      <p>{pageIntrouvable.description}</p>
      <Link to="/" className="cta-button">{pageIntrouvable.bouton}</Link>
    </div>
  );
};

export default NotFound;
