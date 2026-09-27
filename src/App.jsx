import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';

const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Contact = lazy(() => import('./pages/Contact'));
const Start2Impact = lazy(() => import('./pages/start2impact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Diritti = lazy(() => import('./pages/Diritti'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Router>
      <MotionConfig reducedMotion="user">
        <ScrollToTop />
        <div className="min-h-screen bg-[#0a0a0a] text-neutral-200 flex flex-col font-sans selection:bg-white selection:text-black">
          <a
            href="#contenuto"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded-xl focus:text-sm focus:font-semibold"
          >
            Vai al contenuto
          </a>

          <Navbar />

          <main id="contenuto" className="grow p-4 md:p-8 flex justify-center w-full mt-24">
            <div className="w-full max-w-5xl">
              <Suspense fallback={<div className="min-h-[60vh]" aria-busy="true" />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/servizi" element={<Services />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/contatti" element={<Contact />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/diritti" element={<Diritti />} />
                  <Route path="/start2impact" element={<Start2Impact />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </div>
          </main>

          <Footer />
        </div>
      </MotionConfig>
    </Router>
  );
}

export default App;
