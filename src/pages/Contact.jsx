import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Send, Mail, MapPin, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons'; 
import { Helmet } from 'react-helmet-async';

function Contacts() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); 
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const bentoCard = "bg-[#121212] border border-white/5 rounded-3xl p-6 md:p-8 hover:bg-[#171717] transition-colors duration-300";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!privacyAccepted) {
      alert("Per favore, accetta la Privacy Policy prima di inviare il messaggio.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs.sendForm('service_qtd5mzj', 'template_3v60xq9', form.current, 'MTjQjQA3eotCCZb54')
      .then(() => {
          setSubmitStatus('success');
          form.current.reset();
          setPrivacyAccepted(false);
      }, (error) => {
          console.error(error.text);
          setSubmitStatus('error');
      })
      .finally(() => {
          setIsSubmitting(false);
          setTimeout(() => {
            setSubmitStatus(null);
          }, 3000);
      });
  };

  const renderButtonContent = () => {
    if (isSubmitting) {
      return (
        <>
          Invio in corso <Loader2 size={16} className="animate-spin ml-2" />
        </>
      );
    }
    if (submitStatus === 'success') {
      return (
        <>
          Inviato con successo <CheckCircle size={16} className="ml-2" />
        </>
      );
    }
    if (submitStatus === 'error') {
      return (
        <>
          Errore nell'invio <AlertCircle size={16} className="ml-2" />
        </>
      );
    }
    return (
      <>
        Invia Messaggio <Send size={16} className="ml-2" />
      </>
    );
  };

  const getButtonClass = () => {
    const baseClass = "w-full sm:w-auto inline-flex justify-center items-center px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ";
    
    if (isSubmitting) return baseClass + "bg-neutral-700 text-white cursor-wait";
    if (submitStatus === 'success') return baseClass + "bg-green-600 text-white";
    if (submitStatus === 'error') return baseClass + "bg-red-600 text-white";
    
    return baseClass + (privacyAccepted 
      ? "bg-white text-black hover:bg-neutral-200" 
      : "bg-neutral-800 text-neutral-500 cursor-not-allowed");
  };

  return (
    <>
      <Helmet>
        <title>Contatti | Richiedi una Consulenza | Lorenzo Sottile</title>
        <meta name="description" content="Hai un progetto in mente? Contattami per una consulenza tecnica. Ricevi assistenza per sviluppo web, sistemi IT o rendering 3D. Risposta rapida garantita." />
        <link rel="canonical" href="https://www.lorenzosottile.it/contatti" />
        <meta property="og:title" content="Contatti | Parliamo del tuo progetto | Lorenzo Sottile" />
        <meta property="og:description" content="Hai un'idea per un progetto web, software o 3D? Scrivimi per una consulenza. Operativo su Milano, Monza e Brianza e da remoto." />
        <meta property="og:url" content="https://www.lorenzosottile.it/contatti" />
        <meta property="og:type" content="website" />
      </Helmet>

      <motion.div 
        className="flex flex-col gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-2">
          <h1 className="text-4xl font-semibold mb-4 text-white">Contatti</h1>
          <p className="text-neutral-400 max-w-2xl leading-relaxed">
            Hai un'idea per un progetto, una richiesta di consulenza o vuoi semplicemente fare due chiacchiere? Scrivimi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div variants={itemVariants} className="lg:col-span-1 flex flex-col gap-6">
            <section className={`${bentoCard} grow`}>
              <h2 className="text-xl font-medium text-white mb-6">Info utili</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-neutral-300">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 font-medium uppercase tracking-widest mb-1">Email</p>
                    <a href="mailto:info@lorenzosottile.it" className="text-sm text-white hover:underline">info@lorenzosottile.it</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-neutral-300">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 font-medium uppercase tracking-widest mb-1">Zona Operativa</p>
                    <p className="text-sm text-white">Milano, Monza e Brianza<br/><span className="text-neutral-400">Disponibile Remote</span></p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-white/5">
                <p className="text-xs text-neutral-500 font-medium uppercase tracking-widest mb-4 text-left">I miei profili</p>
                <div className="flex justify-left gap-4 text-neutral-400">
                  <a href="https://github.com/sadsotti" target="_blank" rel="noreferrer" className="hover:text-white transition-colors p-2 bg-white/5 rounded-lg border border-white/5 hover:border-white/20">
                    <GithubIcon size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/lorenzo-sottile/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors p-2 bg-white/5 rounded-lg border border-white/5 hover:border-white/20">
                    <LinkedinIcon size={20} />
                  </a>
                </div>
              </div>
            </section>
          </motion.div>

          <motion.section variants={itemVariants} className={`${bentoCard} lg:col-span-2`}>
            <h2 className="text-2xl font-medium text-white mb-6">Invia un messaggio</h2>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-xs font-medium text-neutral-400 pl-1">Nome completo <span className="text-red-500">*</span></label>
                  <input 
                    type="text" name="name" id="name" required 
                    className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/30 transition-all"
                    placeholder="Mario Rossi"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="text-xs font-medium text-neutral-400 pl-1">Indirizzo Email <span className="text-red-500">*</span></label>
                  <input 
                    type="email" name="email" id="email" required 
                    className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/30 transition-all"
                    placeholder="mario@esempio.com"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="subject" className="text-xs font-medium text-neutral-400 pl-1">Oggetto</label>
                <input 
                  type="text" name="subject" id="subject" 
                  className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/30 transition-all"
                  placeholder="Richiesta informazioni..."
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-xs font-medium text-neutral-400 pl-1">Messaggio <span className="text-red-500">*</span></label>
                <textarea 
                  name="message" id="message" required rows="5"
                  className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/30 transition-all resize-none"
                  placeholder="Scrivi qui il tuo messaggio..."
                ></textarea>
              </div>

              <div className="flex items-start gap-3 py-2">
                <input 
                  type="checkbox" id="privacy_check" 
                  className="mt-1 h-4 w-4 rounded border-white/20 bg-[#1a1a1a] text-white accent-white cursor-pointer"
                  checked={privacyAccepted}
                  onChange={(e) => setPrivacyAccepted(e.target.checked)}
                />
                <label htmlFor="privacy_check" className="text-xs text-neutral-500 leading-relaxed cursor-pointer select-none">
                  Ho letto e accetto la <a href="/privacy" target="_blank" className="text-neutral-300 hover:text-white underline">Privacy Policy</a>. Acconsento al trattamento dei miei dati personali in base al Regolamento UE n. 679/2016 (GDPR).
                </label>
              </div>

              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={isSubmitting || !privacyAccepted || submitStatus !== null}
                  className={getButtonClass()}
                >
                  {renderButtonContent()}
                </button>
              </div>
            </form>
          </motion.section>
        </div>
      </motion.div>
    </>
  );
}

export default Contacts;