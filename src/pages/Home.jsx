import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Laptop, Settings, TrendingUp, Box } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import mioLogoSfondo from '../assets/logo.png'; 
import mioAvatar from '../assets/mia-foto.jpg'; 

function Home() {
  const bentoCard = "bg-[#121212] border border-white/5 rounded-3xl p-8 flex flex-col justify-between hover:bg-[#171717] transition-colors duration-300 relative overflow-hidden group";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
  };

  const rainbowButtonStyle = {
    '--rainbow-border-width': '3px',
    '--rainbow-angle': '0deg',
  };

  return (
    <>
      <Helmet>
        <title>Lorenzo Sottile | Developer & IT Consultant</title>
        <meta name="description" content="Sviluppatore Full Stack e Consulente IT freelance. Realizzo software su misura, web app, campagne digital e rendering 3D. Operativo a Monza Brianza, Milano e da remoto." />
        <link rel="canonical" href="https://www.lorenzosottile.it/" />
        <meta property="og:title" content="Lorenzo Sottile | Developer & IT Consultant" />
        <meta property="og:description" content="Costruisco soluzioni digitali moderne, unendo codice pulito, design e performance. Scopri i miei servizi di sviluppo software, consulenza IT e 3D." />
        <meta property="og:url" content="https://www.lorenzosottile.it/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <style>{`
        @keyframes rainbow-spin {
          from { --rainbow-angle: 0deg; }
          to { --rainbow-angle: 360deg; }
        }

        .rainbow-container {
          position: relative;
          display: inline-flex;
          border-radius: 1rem;
          padding: 3px; 
          overflow: hidden;
          transition: transform 0.3s ease;
          background: conic-gradient(from var(--rainbow-angle), 
            #ff0000, #ff8000, #ffff00, #80ff00, #00ff00, #00ff80, 
            #00ffff, #0080ff, #0000ff, #8000ff, #ff00ff, #ff0080, #ff0000);
          animation: rainbow-spin 5s linear infinite;
        }

        @property --rainbow-angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }

        .rainbow-container:hover {
          transform: scale(1.03);
        }
      `}</style>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-[minmax(300px,auto)_minmax(250px,auto)] gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.section variants={itemVariants} className={`${bentoCard} md:col-span-2`}>
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-0 transition-transform duration-700 group-hover:scale-105 flex items-center justify-center overflow-hidden p-12">
            <img 
              src={mioLogoSfondo} 
              alt="Watermark Logo" 
              className="w-full h-full object-contain object-center scale-150"
            />
          </div>

          <div className="relative z-10 flex flex-col justify-between h-full w-full">
            <div>
              <div className="inline-block px-3 py-1 mb-6 border border-white/10 rounded-full text-xs font-semibold text-neutral-400 tracking-wider bg-[#121212]">
                <span className="w-2 h-2 inline-block bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Benvenuto!
              </div>
              <h1 className="text-5xl md:text-6xl font-semibold mb-4 tracking-tight text-white">
                Lorenzo Sottile
              </h1>
              <p className="text-xl text-neutral-400 font-light max-w-lg leading-relaxed">
                Developer & IT Consultant. Costruisco soluzioni digitali moderne, unendo codice pulito, design e performance.
              </p>
            </div>
            
            <div className="mt-8 flex items-start">
              <div className="rainbow-container" style={rainbowButtonStyle}>
                <Link to="/contatti" className="w-full h-full bg-black text-white font-semibold py-3 px-6 rounded-xl hover:bg-neutral-800 transition-colors inline-flex items-center gap-2 group-hover:pl-8 duration-300">
                  Iniziamo un progetto <span className="text-lg font-sans">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className={`${bentoCard} md:col-span-1 justify-center items-center text-center`}>
          <motion.div 
            className="w-24 h-24 bg-neutral-800 rounded-full mb-6 flex items-center justify-center border border-white/10 relative z-10 overflow-hidden"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <img 
              src={mioAvatar} 
              alt="Lorenzo Sottile" 
              className="w-full h-full object-cover" 
            />
          </motion.div>
          <div className="relative z-10">
            <h2 className="text-2xl font-medium text-white mb-2">Freelance</h2>
            <p className="text-neutral-500">Milano, Monza e Brianza & Remote</p>
            <Link to="/about" className="mt-6 text-sm text-neutral-400 hover:text-white underline underline-offset-4 transition-colors">
              La mia storia
            </Link>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className={`${bentoCard} md:col-span-1 relative z-10`}>
          <div>
            <h2 className="text-2xl font-medium text-white mb-4">La mia filosofia</h2>
            <p className="text-neutral-400 leading-relaxed text-sm">
              Razionale, preciso e determinato. Nel settore tech l'aggiornamento costante è fondamentale. Dedico il mio tempo all'apprendimento continuo per rimanere al passo.
            </p>
          </div>
          <Link to="/about" className="mt-6 text-sm text-neutral-300 hover:text-white flex justify-between items-center group">
            Scopri di più <span className="transform group-hover:translate-x-1 transition-transform font-sans">&rarr;</span>
          </Link>
        </motion.section>

        <motion.section variants={itemVariants} className={`${bentoCard} md:col-span-2 flex flex-col justify-between`}>
          <div className="relative z-10">
            <h2 className="text-2xl font-medium text-white mb-6">Aree di competenza</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { 
                  icon: Laptop, 
                  title: "Software & Web", 
                  desc: "Sviluppo di software personalizzati, app desktop, web app gestionali e piattaforme web." 
                },
                { 
                  icon: Settings, 
                  title: "IT Consulting", 
                  desc: "Analisi, assistenza specialistica e ottimizzazione sistemi IT." 
                },
                { 
                  icon: TrendingUp, 
                  title: "Digital Advertising", 
                  desc: "Creazione e gestione campagne Google/Meta e ottimizzazione conversioni." 
                },
                { 
                  icon: Box, 
                  title: "3D & Video Editing", 
                  desc: "Rendering fotorealistici, planimetrie 3D immobiliari e video animazione." 
                },
              ].map((comp, idx) => (
                <motion.div key={idx} whileHover={{ y: -5 }} className="p-4 rounded-2xl bg-white/5 border border-white/5 transition-colors hover:bg-white/10 flex flex-col">
                  <comp.icon className="text-neutral-400 mb-2" size={24} />
                  <h3 className="text-white font-medium mb-1 text-sm">{comp.title}</h3>
                  <p className="text-xs text-neutral-500 leading-relaxed">{comp.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <Link to="/servizi" className="mt-6 pt-5 border-t border-white/5 text-sm text-neutral-300 hover:text-white flex justify-between items-center group relative z-10">
            Scopri i dettagli di tutti i servizi offerti <span className="transform group-hover:translate-x-1 transition-transform font-sans">&rarr;</span>
          </Link>
        </motion.section>
      </motion.div>
    </>
  );
}

export default Home;