import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import BilanPage from './pages/BilanPage'
import AtelierPage from './pages/AtelierPage'
import BricksPage from './pages/BricksPage'
import LegotherapiePage from './pages/LegotherapiePage'
import ReikiPage from './pages/ReikiPage'
import CGV from './pages/CGV'
import MentionsLegales from './pages/MentionsLegales'
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite'
import NotFound from './pages/NotFound'
import './styles/App.scss'

function App() {
  return (
    <div className="app">
      <a className="skip-link" href="#contenu-principal">
        Aller au contenu
      </a>
      <ScrollToTop />
      <Header />
      <main id="contenu-principal">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cgv" element={<CGV />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="/services/bilan" element={<BilanPage />} />
          <Route path="/services/atelier" element={<AtelierPage />} />
          <Route path="/services/6-bricks" element={<BricksPage />} />
          <Route path="/services/legotherapie" element={<LegotherapiePage />} />
          <Route path="/services/reiki" element={<ReikiPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}

export default App
