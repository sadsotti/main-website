import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, Mail, BookOpen, Clapperboard, Receipt, ShieldCheck, Radar, Bot } from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import Seo from '../components/Seo';

function Lab() {
  const bentoCard = "bg-[#121212] border border-white/5 rounded-3xl p-6 hover:bg-[#171717] transition-all duration-300 flex flex-col group";
  const badgeStyle = "px-2 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-medium text-neutral-400";
  const bottonePrimario = "flex items-center justify-center gap-2 py-2 bg-white text-black rounded-xl text-xs font-bold hover:bg-neutral-200 transition-colors";
  const bottoneSecondario = "flex items-center justify-center gap-2 py-2 bg-white/5 border border-white/10 text-white rounded-xl text-xs font-medium hover:bg-white/10 transition-colors";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const labProjects = [
    {
      id: 0, icon: BookOpen, titolo: "BookPaw",
      stack: ["React", "Firebase", "Cloudflare Workers", "Gemini AI"],
      desc: "Web app per lettori con libreria personale, scanner ISBN, citazioni e recensioni, calendario delle letture, amici e un mentore AI basato su Gemini. Installabile come app, con accesso su invito.",
      cover: "/progetti/cover_bookpaw.webp", alt: "BookPaw, web app per lettori con libreria personale e mentore AI", linkApp: "https://joinbookpaw.web.app", linkAccess: `/contatti?oggetto=${encodeURIComponent("Richiesta di accesso a BookPaw")}`, linkCode: ""
    },
    {
      id: 4, icon: Clapperboard, titolo: "CineLista",
      stack: ["React", "Firebase", "Cloudflare Workers", "Gemini AI"],
      desc: "Web app per collezionisti di film: catalogo dei film che possiedi e di quelli da vedere, ricerca nel database OMDb, filtri avanzati, esportazione CSV e un assistente AI basato su Gemini. Accesso su invito.",
      cover: "/progetti/cover_cinelista.webp", alt: "CineLista, web app per collezionisti di film con assistente AI", linkApp: "https://joincinelista.web.app", linkAccess: `/contatti?oggetto=${encodeURIComponent("Richiesta di accesso a CineLista")}`, linkCode: ""
    },
    {
      id: 5, icon: Receipt, titolo: "Sumptus",
      stack: ["React", "Supabase", "Claude AI", "Chart.js"],
      desc: "Gestionale web per la mia attività da freelance in regime forfettario: fatture, spese, clienti, progetti, scadenze e calcolo di tasse e contributi, con preventivi generati dall'AI e pronti per la stampa. Uso personale.",
      cover: "/progetti/cover_sumptus.webp", alt: "Sumptus, gestionale per freelance in regime forfettario con preventivi generati dall'AI", linkApp: "", linkInfo: `/contatti?oggetto=${encodeURIComponent("Informazioni su Sumptus")}`, linkCode: ""
    },
    {
      id: 1, icon: ShieldCheck, titolo: "Bastion++",
      stack: ["C++", "Steganografia LSB", "Crittografia XOR"],
      desc: "Tool da riga di comando per nascondere file di testo cifrati all'interno di immagini BMP, modificando solo i bit meno significativi dei pixel. Interfaccia terminale personalizzata, protezione con password e zero dipendenze esterne.",
      cover: "/progetti/cover_bastion.webp", alt: "Bastion++, tool di steganografia in C++ con interfaccia da terminale", linkApp: "", linkCode: "https://github.com/sadsotti/bastion"
    },
    {
      id: 2, icon: Radar, titolo: "Pylemetry",
      stack: ["Python", "Scapy", "PyQt6"],
      desc: "Analizzatore di rete con interfaccia grafica e sistema di rilevamento delle intrusioni. Cattura e ispeziona il traffico in tempo reale, geolocalizza gli IP in background e segnala flood DoS, port scan e protocolli non sicuri.",
      cover: "/progetti/cover_pylemetry.webp", alt: "Pylemetry, analizzatore di rete e sistema di rilevamento intrusioni in Python", linkApp: "", linkCode: "https://github.com/sadsotti/pylemetry"
    },
    {
      id: 3, icon: Bot, titolo: "Helper Bot",
      stack: ["Python", "discord.py", "OpenAI API"],
      desc: "Bot Discord che risponde alle domande degli utenti e fornisce assistenza tecnica direttamente in chat grazie all'intelligenza artificiale. Leggero, facile da configurare ed estendere, eseguibile in locale o in hosting.",
      cover: "/progetti/cover_helper_bot.webp", alt: "Helper Bot, assistente AI per Discord sviluppato in Python", linkApp: "", linkCode: "https://github.com/sadsotti/helper-bot"
    },
  ];

  return (
    <>
      <Seo path="/lab" />

      <motion.div className="flex flex-col gap-10" variants={containerVariants} initial="hidden" animate="visible">
        <motion.div variants={itemVariants}>
          <h1 className="text-4xl font-semibold mb-4 text-white">Progetti Personali</h1>
          <p className="text-neutral-400 max-w-2xl leading-relaxed">
            Le app e gli strumenti che sviluppo nel tempo libero, per curiosità o per risolvere un problema mio. Dove possibile puoi provarli direttamente, altrimenti trovi il codice su GitHub.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {labProjects.map((p) => (
            <motion.section key={p.id} variants={itemVariants} className={bentoCard}>
              <div className="aspect-video bg-neutral-900 rounded-2xl mb-5 overflow-hidden border border-white/5 relative group-hover:border-white/10 transition-colors">
                {p.cover ? (
                  <img
                    src={p.cover}
                    alt={p.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity text-neutral-600">
                    <p className="text-[10px] font-mono uppercase tracking-widest italic">Preview Image</p>
                  </div>
                )}
              </div>

              <div className="flex flex-col grow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                    <p.icon size={18} className="text-neutral-300" aria-hidden="true" />
                  </div>
                  <h2 className="text-lg font-medium text-white group-hover:text-neutral-200 transition-colors">{p.titolo}</h2>
                </div>

                <p className="text-xs text-neutral-500 leading-relaxed mb-4 grow">
                  {p.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {p.stack.map((s, idx) => (
                    <span key={idx} className={badgeStyle}>{s}</span>
                  ))}
                </div>

                <div className={`grid ${[p.linkApp, p.linkAccess, p.linkInfo, p.linkCode].filter(Boolean).length > 1 ? 'grid-cols-2' : 'grid-cols-1'} gap-2 mt-auto pt-4 border-t border-white/5`}>
                  {p.linkApp && (
                    <a
                      href={p.linkApp}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Apri l'app ${p.titolo}`}
                      className={bottonePrimario}
                    >
                      <ExternalLink size={14} aria-hidden="true" /> Apri l'app
                    </a>
                  )}

                  {p.linkAccess && (
                    <Link
                      to={p.linkAccess}
                      aria-label={`Richiedi l'accesso a ${p.titolo}`}
                      className={bottoneSecondario}
                    >
                      <Mail size={14} aria-hidden="true" /> Richiedi l'accesso
                    </Link>
                  )}

                  {p.linkInfo && (
                    <Link
                      to={p.linkInfo}
                      aria-label={`Chiedi informazioni su ${p.titolo}`}
                      className={bottonePrimario}
                    >
                      <Mail size={14} aria-hidden="true" /> Chiedi informazioni
                    </Link>
                  )}

                  {p.linkCode && (
                    <a
                      href={p.linkCode}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Codice del progetto ${p.titolo} su GitHub`}
                      className={p.linkApp ? bottoneSecondario : bottonePrimario}
                    >
                      <GithubIcon size={14} /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </motion.div>
    </>
  );
}

export default Lab;
