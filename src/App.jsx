import React, { useState, useEffect, Suspense, lazy } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import { normalizePath } from './utils/pathUtils'
import './styles/App.scss'

// Code splitting : charge les pages seulement quand on en a besoin
// Cela améliore la vitesse de chargement initial du site
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const BilanPage = lazy(() => import('./pages/BilanPage'))
const AtelierPage = lazy(() => import('./pages/AtelierPage'))
const ReikiPage = lazy(() => import('./pages/ReikiPage'))
const Atelier6BricksPage = lazy(() => import('./pages/Atelier6BricksPage'))
const CGV = lazy(() => import('./pages/CGV'))
const MentionsLegales = lazy(() => import('./pages/MentionsLegales'))

function App() {
  const [currentPath, setCurrentPath] = useState(normalizePath(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Scroll vers le haut à chaque changement de page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPath]);

  // Routage simple basé sur l'URL
  const getCurrentPage = () => {
    const path = currentPath;
    
    // Pages principales
    if (path === '/about' || path === '/about/') {
      return <About />;
    }
    if (path === '/contact' || path === '/contact/') {
      return <Contact />;
    }
    
    // Pages légales
    if (path === '/cgv' || path === '/cgv/') {
      return <CGV />;
    }
    if (path === '/mentions-legales' || path === '/mentions-legales/') {
      return <MentionsLegales />;
    }
    
    // Pages de services
    if (path === '/services/bilan' || path === '/services/bilan/') {
      return <BilanPage />;
    }
    if (path === '/services/atelier' || path === '/services/atelier/') {
      return <AtelierPage />;
    }
    if (path === '/services/reiki' || path === '/services/reiki/') {
      return <ReikiPage />;
    }
    if (path === '/services/atelier-6-bricks' || path === '/services/atelier-6-bricks/') {
      return <Atelier6BricksPage />;
    }
    
    // Page d'accueil par défaut
    return <Home />;
  };

  return (
    <div className="app">
      <Header />
      <main>
        {/* Suspense affiche un message pendant le chargement des pages */}
        <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center' }}>Chargement...</div>}>
          {getCurrentPage()}
        </Suspense>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}

export default App
