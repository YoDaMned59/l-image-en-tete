import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import BilanPage from './pages/BilanPage'
import AtelierPage from './pages/AtelierPage'
import ReikiPage from './pages/ReikiPage'
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPath]);

  const getCurrentPage = () => {
    const path = currentPath;
    
    if (path === '/about' || path === '/about/') {
      return <About />;
    }
    if (path === '/contact' || path === '/contact/') {
      return <Contact />;
    }
    if (path === '/cgv' || path === '/cgv/') {
      return <CGV />;
    }
    if (path === '/mentions-legales' || path === '/mentions-legales/') {
      return <MentionsLegales />;
    }
    if (path === '/services/bilan' || path === '/services/bilan/') {
      return <BilanPage />;
    }
    if (path === '/services/atelier' || path === '/services/atelier/') {
      return <AtelierPage />;
    }
    if (path === '/services/reiki' || path === '/services/reiki/') {
      return <ReikiPage />;
    }
    
    return <Home />;
  };

  return (
    <div className="app">
      <Header />
      <main>
        {getCurrentPage()}
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}

export default App
