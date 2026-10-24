import { useEffect, useState } from 'react';
import { googleReviews } from '../data/googleReviews';
import '../styles/GoogleReviews.scss';

const Etoiles = ({ note }) => (
  <span className="google-reviews-etoiles" role="img" aria-label={`${note} sur 5`}>
    {Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        viewBox="0 0 20 20"
        aria-hidden="true"
        className={index < note ? 'est-pleine' : 'est-vide'}
      >
        <path d="M10 1.6 12.5 7l5.9.7-4.4 4 1.2 5.8L10 14.8 4.8 17.5l1.2-5.8L1.6 7.7 7.5 7 10 1.6z" />
      </svg>
    ))}
  </span>
);

const MarqueGoogle = () => (
  <span className="google-reviews-marque" aria-hidden="true">
    <span>G</span>
    <span>o</span>
    <span>o</span>
    <span>g</span>
    <span>l</span>
    <span>e</span>
  </span>
);

const GoogleReviews = () => {
  const avis = googleReviews.avis ?? [];
  const [index, setIndex] = useState(0);
  const [enPause, setEnPause] = useState(false);
  const plusieurs = avis.length > 1;
  const vientDeGoogle = googleReviews.provenance === 'google';

  useEffect(() => {
    if (!plusieurs || enPause) {
      return undefined;
    }

    const reduit = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduit.matches) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setIndex((actuel) => (actuel + 1) % avis.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [plusieurs, enPause, avis.length]);

  if (!avis.length) {
    return null;
  }

  const aller = (delta) => {
    setIndex((actuel) => (actuel + delta + avis.length) % avis.length);
  };

  const pauseSiFocusInterne = (evenement) => {
    if (!evenement.currentTarget.contains(evenement.relatedTarget)) {
      setEnPause(false);
    }
  };

  return (
    <section className="google-reviews" aria-labelledby="google-reviews-titre">
      <div className="google-reviews-contenu">
        <h2 id="google-reviews-titre">
          {vientDeGoogle ? <MarqueGoogle /> : null}
          {googleReviews.titre}
        </h2>
        {googleReviews.introduction ? (
          <p className="google-reviews-intro">{googleReviews.introduction}</p>
        ) : null}
        {googleReviews.noteMoyenne ? (
          <p className="google-reviews-synthese">
            <Etoiles note={Math.round(googleReviews.noteMoyenne)} />
            <span>
              {Number(googleReviews.noteMoyenne).toLocaleString('fr-FR', {
                minimumFractionDigits: 1,
                maximumFractionDigits: 1,
              })}{' '}
              / 5
              {googleReviews.nombreAvis ? ` · ${googleReviews.nombreAvis} avis` : null}
            </span>
          </p>
        ) : null}

        <div
          className="google-reviews-carrousel"
          role="region"
          aria-roledescription="carrousel"
          aria-label={googleReviews.titre}
          onMouseEnter={() => setEnPause(true)}
          onMouseLeave={() => setEnPause(false)}
          onFocus={() => setEnPause(true)}
          onBlur={pauseSiFocusInterne}
          onKeyDown={(evenement) => {
            if (evenement.key === 'ArrowLeft') {
              evenement.preventDefault();
              aller(-1);
            }
            if (evenement.key === 'ArrowRight') {
              evenement.preventDefault();
              aller(1);
            }
          }}
        >
          <button
            type="button"
            className="google-reviews-fleche"
            onClick={() => aller(-1)}
            aria-label="Avis précédent"
            disabled={!plusieurs}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14.5 5.5 8 12l6.5 6.5" />
            </svg>
          </button>

          <div className="google-reviews-fenetre">
            <div
              className="google-reviews-piste"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {avis.map((item, position) => (
                <article
                  key={`${item.auteur}-${item.date}-${position}`}
                  className="google-reviews-carte"
                  aria-hidden={position !== index}
                >
                  <Etoiles note={item.note} />
                  <p className="google-reviews-texte">{item.texte}</p>
                  <p className="google-reviews-auteur">
                    {item.auteur}
                    {item.date ? <span> · {item.date}</span> : null}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="google-reviews-fleche"
            onClick={() => aller(1)}
            aria-label="Avis suivant"
            disabled={!plusieurs}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9.5 5.5 16 12l-6.5 6.5" />
            </svg>
          </button>
        </div>

        {plusieurs ? (
          <div className="google-reviews-points">
            {avis.map((item, position) => (
              <button
                key={`${item.auteur}-point-${position}`}
                type="button"
                className="google-reviews-point"
                aria-label={`Avis ${position + 1} sur ${avis.length}`}
                aria-current={position === index ? 'true' : undefined}
                onClick={() => setIndex(position)}
              />
            ))}
          </div>
        ) : null}

        {vientDeGoogle && googleReviews.urlFiche ? (
          <a
            className="google-reviews-lien"
            href={googleReviews.urlFiche}
            target="_blank"
            rel="noopener noreferrer"
          >
            {googleReviews.texteLien}
          </a>
        ) : null}
      </div>
    </section>
  );
};

export default GoogleReviews;
