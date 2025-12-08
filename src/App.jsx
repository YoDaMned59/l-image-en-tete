import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import BilanPage from './pages/BilanPage'
import AtelierPage from './pages/AtelierPage'
import ReikiPage from './pages/ReikiPage'
import Atelier6BricksPage from './pages/Atelier6BricksPage'
import CGV from './pages/CGV'
import MentionsLegales from './pages/MentionsLegales'
import { normalizePath } from './utils/pathUtils'
import './styles/App.scss'

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
        {getCurrentPage()}
      </main>
      <Footer />
    </div>
  )
}

export default App
