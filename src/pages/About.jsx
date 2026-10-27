import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Music, Lightbulb, Briefcase, Award, Globe, GraduationCap } from 'lucide-react';
import Seo from '../components/Seo';
import { containerVariants, itemVariants, cardBase, bentoCard, eyebrow } from '../lib/ui';
import { ROLE } from '../lib/site';
import mioAvatar from '../assets/mia-foto.jpg';

function About() {
  return (
    <>
      <Seo path="/about" />

      <motion.div
        className="flex flex-col gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-2">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-white tracking-tight">Chi Sono</h1>
          <p className="text-neutral-400 max-w-2xl">
            Un tuffo nel mio percorso personale, professionale e accademico.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.section variants={itemVariants} className={`${cardBase} lg:col-span-2 p-8 md:p-10 flex flex-col sm:flex-row gap-8 items-start`}>
            <img
              src={mioAvatar}
              alt="Foto di Lorenzo Sottile"
              width="112"
              height="112"
              className="w-28 h-28 rounded-full object-cover border border-white/10 shrink-0"
            />
            <div>
              <p className={`${eyebrow} mb-3`}>{ROLE}</p>
              <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-4">
                Dalla strategia tecnica alla realizzazione.
              </h2>
              <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                Ho iniziato da ragazzo smontando e riparando dispositivi elettronici e oggi guido la parte tecnica di piattaforme in produzione: per Snapix Image seguo, come consulente freelance esterno, sicurezza, architettura e sviluppo del prodotto.
              </p>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Affianco le aziende come unico referente per la parte digitale: dalle scelte tecniche allo sviluppo di software su misura, fino alle campagne pubblicitarie e ai rendering 3D per il settore immobiliare.
              </p>
            </div>
          </motion.section>

          <motion.section variants={itemVariants} className={`${bentoCard} flex flex-col`}>
            <Music className="text-neutral-400 mb-6" size={32} strokeWidth={1.5} aria-hidden="true" />
            <h2 className="font-medium text-white mb-3 uppercase tracking-wider text-xs">Oltre il codice</h2>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Amo la musica: ho prestato la mia voce, con chitarra d’accompagnamento, ad alcune band locali e ho prodotto tracce musicali per cantanti emergenti.<br/><br/>
              L’elettronica resta la mia prima passione: smontare, riparare e capire come funzionano le cose.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className={`${bentoCard} lg:col-span-2 flex flex-col`}>
            <h2 className="text-2xl font-medium text-white mb-8 flex items-center gap-3">
              <Briefcase size={24} className="text-neutral-400" aria-hidden="true" /> Esperienza
            </h2>

            <div className="space-y-10">
              <div className="relative pl-6 border-l border-white/10">
                <div className="absolute w-3 h-3 bg-white rounded-full left-[-6.5px] top-1.5 shadow-[0_0_10px_rgba(255,255,255,0.5)]" aria-hidden="true"></div>
                <h3 className="text-xl font-medium text-white mb-1">Fractional CTO</h3>
                <div className="flex flex-wrap gap-2 items-center mb-4">
                  <span className="text-sm text-neutral-300 font-medium">SNAPIX IMAGE SRL · Freelance</span>
                  <span className="text-xs px-2 py-0.5 bg-white/10 rounded text-neutral-400">settembre 2026 - presente</span>
                  <span className="text-xs px-2 py-0.5 bg-green-500/10 border border-green-500/20 rounded text-green-400">In corso</span>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Direzione tecnica esterna della piattaforma digitale di Snapix Image: riferimento per sicurezza, architettura e sviluppo full-stack del prodotto. Ho avviato l'incarico con una revisione completa di sicurezza, architettura e qualità del codice della piattaforma, definendo una roadmap di intervento prioritizzata per rischio/sforzo e verificando sul campo in produzione i rilievi principali. Cura del passaggio di consegne tecnico dal fornitore uscente, con la ricostruzione da zero delle pipeline CI/CD. Oggi seguo con continuità l'hardening e l'ottimizzazione della piattaforma, la risoluzione degli incidenti in produzione, l'onboarding di nuove agenzie partner e lo sviluppo di nuove funzionalità, garantendo inoltre l'assistenza tecnica continuativa.
                </p>
              </div>

              <div className="relative pl-6 border-l border-white/10">
                <div className="absolute w-3 h-3 bg-white rounded-full left-[-6.5px] top-1.5 shadow-[0_0_10px_rgba(255,255,255,0.5)]" aria-hidden="true"></div>
                <h3 className="text-xl font-medium text-white mb-1">{ROLE}</h3>
                <div className="flex flex-wrap gap-2 items-center mb-4">
                  <span className="text-sm text-neutral-300 font-medium">Freelance</span>
                  <span className="text-xs px-2 py-0.5 bg-white/10 rounded text-neutral-400">maggio 2024 - presente</span>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Implementazione di soluzioni digitali integrate. La mia attività coniuga analisi tecnica, sviluppo e produzione multimediale. Nell'ambito Software & Web mi occupo dello sviluppo di software personalizzati, web app gestionali lato client/server e piattaforme web. La mia consulenza IT comprende l'analisi dei sistemi informatici, l'assistenza tecnica e l'ottimizzazione delle infrastrutture tecnologiche. Per il Digital Advertising gestisco la configurazione e l'ottimizzazione di campagne Ads su Google e Meta basate sull'analisi dei dati. Realizzo inoltre rendering fotorealistici, video animazione 3D e video editing, offrendo soluzioni specifiche per la valorizzazione del settore immobiliare.
                </p>
              </div>

              <div className="relative pl-6 border-l border-white/10">
                <div className="absolute w-3 h-3 bg-neutral-700 rounded-full left-[-6.5px] top-1.5" aria-hidden="true"></div>
                <h3 className="text-xl font-medium text-white mb-1">ICT Developer</h3>
                <div className="flex flex-wrap gap-2 items-center mb-4">
                  <span className="text-sm text-neutral-300 font-medium">Office Automation 2000 srl</span>
                  <span className="text-xs px-2 py-0.5 bg-white/5 rounded text-neutral-500">dicembre 2022 - marzo 2024</span>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Sviluppo e gestione di software, applicazioni mobile e web app gestionali (lato client e lato server); assistenza hardware e software; sviluppo e cura di siti web e i relativi servizi di web marketing.
                </p>
              </div>

              <div className="relative pl-6 border-l border-white/10">
                <div className="absolute w-3 h-3 bg-neutral-700 rounded-full left-[-6.5px] top-1.5" aria-hidden="true"></div>
                <h3 className="text-xl font-medium text-white mb-1">Assistente di funzione</h3>
                <div className="flex flex-wrap gap-2 items-center mb-4">
                  <span className="text-sm text-neutral-300 font-medium">CRINET</span>
                  <span className="text-xs px-2 py-0.5 bg-white/5 rounded text-neutral-500">luglio 2022 - novembre 2022</span>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Community moderation, social media management, content creation, graphic design e front-end web development.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.div variants={itemVariants} className="lg:col-span-1 flex flex-col gap-6">
            <section className={bentoCard}>
              <Lightbulb className="text-neutral-400 mb-6" size={32} strokeWidth={1.5} aria-hidden="true" />
              <h2 className="font-medium text-white mb-3 uppercase tracking-wider text-xs">Apprendimento continuo</h2>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Il mondo della tecnologia è in costante evoluzione, e questo mi spinge a mettermi sempre in gioco. Dedico parte del mio tempo alla formazione su alcune delle migliori piattaforme online, per restare aggiornato su tecnologie emergenti e migliori pratiche del settore.
              </p>
            </section>

            <section className={`${bentoCard} grow`}>
              <h2 className="text-xl font-medium text-white mb-6 flex items-center gap-3">
                <Award size={24} className="text-neutral-400" aria-hidden="true" /> Certificazioni Selezionate
              </h2>
              <ul className="text-sm text-neutral-400 space-y-3 leading-relaxed">
                <li>• Introduction to Cybersecurity</li>
                <li>• Google Analytics Advanced</li>
                <li>• Foundational C# with Microsoft</li>
                <li>• CS107: C++ Programming</li>
                <li>• CS105: Introduction to Python</li>
                <li>• Certificate of Excellence – UX Fundamentals</li>
                <li>• Certificate of Excellence - Modern Web Design</li>
                <li>• Certificate of Excellence – Responsive Web Design Fundamentals</li>
                <li>• Certificate of Excellence - JavaScript and jQuery Survival Guide</li>
                <li>• Corso per Programmatori Java Junior</li>
              </ul>
            </section>

            <section className={bentoCard}>
              <h2 className="text-xl font-medium text-white mb-6 flex items-center gap-3">
                <Globe size={24} className="text-neutral-400" aria-hidden="true" /> Lingue
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-sm text-white">Italiano</span>
                  <span className="text-xs text-neutral-500 bg-white/5 px-2 py-1 rounded">Madrelingua</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-sm text-white">Inglese</span>
                  <span className="text-xs text-neutral-500 bg-white/5 px-2 py-1 rounded">Professionale</span>
                </div>
                <div className="flex justify-between items-center pb-1">
                  <span className="text-sm text-white">Spagnolo</span>
                  <span className="text-xs text-neutral-500 bg-white/5 px-2 py-1 rounded">Lavorativa limitata</span>
                </div>
              </div>
            </section>
          </motion.div>

          <motion.section variants={itemVariants} className={`${bentoCard} lg:col-span-3 flex flex-col`}>
            <h2 className="text-2xl font-medium text-white mb-8 flex items-center gap-3">
              <GraduationCap size={28} className="text-neutral-400" aria-hidden="true" /> Formazione
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#171717] p-6 md:p-8 rounded-2xl border border-white/5 flex flex-col">
                <h3 className="text-xl font-medium text-white mb-1">start2impact</h3>
                <p className="text-xs text-neutral-500 font-medium mb-4 uppercase tracking-wider">Master professionalizzante</p>
                <p className="text-base text-neutral-200 font-medium mb-4">Full Stack Development e Agenti AI</p>
                <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                  Percorso formativo intensivo focalizzato su AI e Prompt Engineering, HTML, CSS, JavaScript (Basics e Advanced), TypeScript, React, Angular, Vue.js, PHP e MySQL, Node.js e Java.
                </p>
                <p className="text-sm text-neutral-400 leading-relaxed mb-8">
                  Include la progettazione di Agenti AI no-code per la produttività e Agenti AI avanzati per lo sviluppo, con la realizzazione di un chatbot AI-based che integra front-end, back-end e modelli di intelligenza artificiale, culminando infine in un Progetto Finale completo che sintetizza le competenze acquisite.
                </p>

                <div className="mt-auto">
                  <Link to="/start2impact" className="inline-flex items-center gap-2 text-sm text-black font-semibold bg-white px-5 py-3 rounded-xl hover:bg-neutral-200 transition-colors w-fit">
                    Vedi i progetti del Master <span className="font-sans" aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="bg-[#171717] p-6 rounded-2xl border border-white/5">
                  <h3 className="text-lg font-medium text-white mb-1">Università degli Studi di Milano-Bicocca</h3>
                  <p className="text-xs text-neutral-500 font-medium mb-3 uppercase tracking-wider">Laurea triennale | Studi interrotti</p>
                  <p className="text-sm text-neutral-200 font-medium mb-3">Corso di laurea in Ottica e Optometria</p>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Corso di Laurea triennale con attività di laboratorio (ottica geometrica e oftalmica, sistemi ottici, optometria, applicazione di lenti a contatto, ottica fisica, strumentazione optometrica avanzata), stage (Terzo Anno) e pratica optometrica, insegnamenti di ottica, fisica, matematica, anatomia, istologia e fisiologia, chimica, psicologia.
                  </p>
                </div>

                <div className="bg-[#171717] p-6 rounded-2xl border border-white/5">
                  <h3 className="text-lg font-medium text-white mb-1">Istituto Istruzione Superiore Ettore Majorana - Cesano Maderno (MB)</h3>
                  <p className="text-xs text-neutral-500 font-medium mb-3 uppercase tracking-wider">Diploma di Maturità Scientifica opzione Scienze Applicate</p>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Attività di laboratorio, simulazione d'impresa, Educazione Ambientale, Educazione alla Legalità, Meteorologia, Pronto Soccorso e Rianimazione Cardio-Polmonare, accoglienza nei laboratori scientifici per gli studenti delle Scuole Medie.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </motion.div>
    </>
  );
}

export default About;
