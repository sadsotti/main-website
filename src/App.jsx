import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Start2Impact from './pages/start2impact';
import Privacy from './pages/Privacy';
import Revoca from './pages/Revoca';

function App() {
  return (
    <Router>
      <Helmet>
        <title>Lorenzo Sottile | Developer & IT Consultant</title>
        <meta name="description" content="Sviluppatore Full Stack e Consulente IT specializzato in soluzioni digitali moderne, Web App gestionali e Rendering 3D. Operativo a Milano e Monza Brianza." />
        <meta name="author" content="Lorenzo Sottile" />
        <link rel="canonical" href="https://www.lorenzosottile.it/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Lorenzo Sottile Portfolio" />
        <meta property="og:title" content="Lorenzo Sottile | Developer & IT Consultant" />
        <meta property="og:description" content="Costruisco soluzioni digitali moderne, unendo codice pulito, design e performance." />
        <meta property="og:url" content="https://www.lorenzosottile.it/" />
      </Helmet>

      <div className="min-h-screen bg-[#0a0a0a] text-neutral-200 flex flex-col font-sans selection:bg-white selection:text-black">
        
        <Navbar />

        <main className="grow p-4 md:p-8 flex justify-center w-full mt-24">
          <div className="w-full max-w-5xl">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/servizi" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contatti" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/revoca" element={<Revoca />} />
              <Route path="/start2impact" element={<Start2Impact />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </div>
        </main>

        <Footer />
        
      </div>
    </Router>
  );
}

export default App;