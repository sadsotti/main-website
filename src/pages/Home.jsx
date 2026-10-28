import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Seo from '../components/Seo';
import { containerVariants, itemVariants, inView, cardBase, bentoCard, eyebrow, bottonePrimario } from '../lib/ui';
import { ROLE, PITCH } from '../lib/site';
import { SERVIZI } from '../lib/services';
import { PROGETTI, SNAPIX } from '../lib/projects';
import mioLogoSfondo from '../assets/logo.webp';
import mioAvatar from '../assets/mia-foto.jpg';

const numeri = [
  { valore: "50+", etichetta: "Progetti realizzati" },
  { valore: "2022", etichetta: "Dal primo incarico come sviluppatore in azienda" },
  { valore: SERVIZI.length, etichetta: "Aree di competenza" },
];

const inEvidenza = ['up-solutions', 'corso-liberta', 'stimatech'].map((id) => PROGETTI.find((p) => p.id === id));

const parolaVariants = {
  hidden: { y: '110%' },
  visible: (i) => ({ y: 0, transition: { delay: 0.15 + i * 0.12, type: 'spring', stiffness: 90, damping: 16 } }),
};

function Home() {
  return (
    <>
      <Seo path="/" />

      <motion.div className="flex flex-col gap-4" variants={containerVariants} initial="hidden" animate="visible">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.section variants={itemVariants} className={`${cardBase} md:col-span-2 p-8 md:p-12 overflow-hidden group min-h-105 flex`}>
            <div className="absolute inset-0 opacity-14 group-hover:opacity-20 pointer-events-none -z-10 transition-all duration-700 group-hover:scale-105 flex items-center justify-center overflow-hidden p-12" aria-hidden="true">
              <img src={mioLogoSfondo} alt="" className="w-full h-full object-contain object-center scale-110" />
            </div>

            <div className="flex flex-col justify-between w-full">
              <div>
                <div className="inline-flex items-center px-3 py-1 mb-8 border border-white/10 rounded-full text-xs font-semibold text-neutral-400 tracking-wider bg-[#121212]">
                  <span className="w-2 h-2 inline-block bg-green-500 rounded-full mr-2 animate-pulse" aria-hidden="true"></span>
                  {ROLE}
                </div>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white leading-[0.95] mb-6">
                  {['Lorenzo', 'Sottile'].map((parola, i) => (
                    <span key={parola} className="block overflow-hidden pb-1">
                      <motion.span className="block" custom={i} variants={parolaVariants}>
                        {parola}
                      </motion.span>
                    </span>
                  ))}
                </h1>
                <p className="text-lg md:text-xl text-neutral-400 font-light max-w-xl leading-relaxed">
                  {PITCH}
                </p>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <div className="cta-ring">
                  <Link to="/contatti" className="bg-[#0a0a0a] text-white font-semibold py-3 px-6 rounded-[0.8rem] hover:bg-neutral-900 transition-colors inline-flex items-center gap-2">
                    Iniziamo un progetto <span className="text-lg font-sans" aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
                <Link to="/portfolio" className="py-2.5 text-sm text-neutral-400 hover:text-white underline underline-offset-4 transition-colors">
                  Guarda i lavori
                </Link>
              </div>
            </div>
          </motion.section>

          <motion.section variants={itemVariants} className={`${bentoCard} flex flex-col justify-center items-center text-center`}>
            <motion.div
              className="w-28 h-28 bg-neutral-800 rounded-full mb-6 flex items-center justify-center border border-white/10 overflow-hidden"
              whileHover={{ scale: 1.08, rotate: 4 }}
            >
              <img src={mioAvatar} alt="Foto di Lorenzo Sottile" width="112" height="112" className="w-full h-full object-cover" />
            </motion.div>
            <h2 className="text-2xl font-medium text-white mb-2">Freelance</h2>
            <p className="text-neutral-500 text-sm">Milano, Monza e Brianza e da remoto</p>
            <Link to="/about" className="mt-4 py-2 text-sm text-neutral-400 hover:text-white underline underline-offset-4 transition-colors">
              La mia storia
            </Link>
          </motion.section>
        </div>

        <motion.section variants={itemVariants} aria-label="In numeri" className="grid grid-cols-3 gap-2 sm:gap-4">
          {numeri.map(({ valore, etichetta }) => (
            <div key={etichetta} className={`${cardBase} p-4 sm:p-6`}>
              <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight mb-1 sm:mb-2">{valore}</p>
              <p className="text-[11px] sm:text-xs text-neutral-500 leading-snug sm:leading-relaxed">{etichetta}</p>
            </div>
          ))}
        </motion.section>
      </motion.div>

      <motion.section variants={itemVariants} {...inView} className={`${cardBase} mt-4 p-8 md:p-10`}>
        <p className={`${eyebrow} mb-3`}>Incarico in corso</p>
        <h2 className="text-2xl font-semibold text-white tracking-tight mb-2">{SNAPIX.titolo}</h2>
        <p className="text-sm text-neutral-300 mb-4">{SNAPIX.ruolo} · Freelance</p>
        <p className="text-sm text-neutral-400 leading-relaxed max-w-2xl mb-4">{SNAPIX.breve}</p>
        <Link to="/portfolio#snapix" className="text-sm text-neutral-300 hover:text-white inline-flex items-center gap-2 group/link w-fit py-2">
          Approfondisci l'incarico <ArrowUpRight size={16} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" aria-hidden="true" />
        </Link>
      </motion.section>

      <motion.section className="mt-24" variants={containerVariants} {...inView} aria-labelledby="servizi-titolo">
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p className={`${eyebrow} mb-3`}>Servizi</p>
            <h2 id="servizi-titolo" className="text-3xl md:text-4xl font-semibold text-white tracking-tight max-w-xl">
              Un unico referente, dalla strategia alla realizzazione.
            </h2>
          </div>
          <Link to="/servizi" className="text-sm text-neutral-400 hover:text-white inline-flex items-center gap-2 group/link shrink-0">
            Tutti i servizi <span className="transition-transform group-hover/link:translate-x-1 font-sans" aria-hidden="true">&rarr;</span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SERVIZI.map(({ icon: Icon, titolo, breve }, i) => (
            <motion.div key={titolo} variants={itemVariants} className={`${bentoCard} flex flex-col`}>
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-neutral-300 border border-white/10">
                  <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <span className="text-xs font-mono text-neutral-600">0{i + 1}</span>
              </div>
              <h3 className="text-xl font-medium text-white mb-2">{titolo}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{breve}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section className="mt-24" variants={containerVariants} {...inView} aria-labelledby="lavori-titolo">
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p className={`${eyebrow} mb-3`}>Lavori selezionati</p>
            <h2 id="lavori-titolo" className="text-3xl md:text-4xl font-semibold text-white tracking-tight max-w-xl">
              Dal software su misura ai progetti 3D.
            </h2>
          </div>
          <Link to="/portfolio" className="text-sm text-neutral-400 hover:text-white inline-flex items-center gap-2 group/link shrink-0">
            Tutto il portfolio <span className="transition-transform group-hover/link:translate-x-1 font-sans" aria-hidden="true">&rarr;</span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {inEvidenza.map((p, i) => (
            <motion.div key={p.id} variants={itemVariants} className={i === 0 ? 'md:col-span-2' : ''}>
              <Link to={`/portfolio#${p.id}`} className={`${cardBase} overflow-hidden group flex flex-col h-full`}>
                <div className={`relative overflow-hidden ${i === 0 ? 'aspect-video md:aspect-21/9' : 'aspect-16/10'}`}>
                  <img
                    src={p.img}
                    alt={p.alt}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs text-neutral-500 mb-1">{p.eyebrow}</p>
                    <h3 className="text-lg font-medium text-white">{p.titolo}</h3>
                  </div>
                  <ArrowUpRight size={20} className="text-neutral-500 shrink-0 transition-all group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section variants={itemVariants} {...inView} className={`${cardBase} mt-24 p-10 md:p-16 text-center flex flex-col items-center overflow-hidden`}>
        <p className={`${eyebrow} mb-4`}>Parliamone</p>
        <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight max-w-2xl mb-6">
          Hai un progetto in mente?
        </h2>
        <p className="text-neutral-400 max-w-xl leading-relaxed mb-10">
          Raccontami di cosa hai bisogno: analizziamo insieme obiettivi, tempi e soluzione più adatta.
        </p>
        <Link to="/contatti" className={bottonePrimario}>
          Richiedi una consulenza <span className="font-sans" aria-hidden="true">&rarr;</span>
        </Link>
      </motion.section>
    </>
  );
}

export default Home;
