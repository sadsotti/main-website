import { motion } from 'framer-motion';
import { RotateCcw, ExternalLink, Monitor, Smartphone } from 'lucide-react';

function Revoca() {
  const bentoCard = "bg-[#121212] border border-white/5 rounded-3xl p-6 md:p-8 hover:bg-[#171717] transition-colors duration-300 flex flex-col";
  const sectionTitle = "text-xl font-medium text-white mb-4 flex items-center gap-3";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
  };

  return (
    <motion.div className="flex flex-col gap-6" initial="hidden" animate="visible" variants={containerVariants}>
      <motion.div variants={itemVariants} className="mb-2">
        <h1 className="text-4xl font-semibold mb-4 text-white">Revoca Consensi</h1>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <motion.section variants={itemVariants} className={`${bentoCard} lg:col-span-2`}>
          <h2 className={sectionTitle}><RotateCcw className="text-neutral-500" size={24} /> Revoca tramite Email</h2>
          <p className="text-sm text-neutral-400 leading-relaxed mb-6">
            Se desideri revocare dei consensi dati in precedenza, invia una mail al nostro indirizzo di posta elettronica (<strong className="text-white">info@lorenzosottile.it</strong>), specificando nell’oggetto <span className="text-white italic">“Richiesta revoca consensi”</span> ed inserendo nel testo della mail l’elenco dei consensi che desideri revocare, inserendo una o più voci delle seguenti:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-neutral-300">
            <li className="bg-white/5 p-3 rounded-xl border border-white/5">• Revoca Comunicazioni a mezzo mail</li>
            <li className="bg-white/5 p-3 rounded-xl border border-white/5">• Revoca Comunicazioni marketing terze parti a mezzo mail</li>
            <li className="bg-white/5 p-3 rounded-xl border border-white/5">• Revoca cookie di profilazione</li>
            <li className="bg-white/5 p-3 rounded-xl border border-white/5">• Revoca cookie di profilazione marketing di terze parti</li>
          </ul>
        </motion.section>

        <motion.section variants={itemVariants} className={bentoCard}>
          <h2 className={sectionTitle}><ExternalLink className="text-neutral-500" size={24} /> Cookie Esterni</h2>
          <p className="text-sm text-neutral-400 leading-relaxed mb-4">Per la gestione consensi cookie esterni, clicca sui seguenti link:</p>
          <div className="flex flex-col gap-3">
            <a href="https://myadcenter.google.com/home" target="_blank" rel="noreferrer" className="text-xs text-neutral-300 hover:text-white transition-colors flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5">
              Servizi di Google <span className="font-sans">&rarr;</span>
            </a>
            <a href="https://www.facebook.com/privacy/policies/cookies/" target="_blank" rel="noreferrer" className="text-xs text-neutral-300 hover:text-white transition-colors flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5">
              Facebook <span className="font-sans">&rarr;</span>
            </a>
            <a href="https://help.x.com/it/rules-and-policies/x-cookies" target="_blank" rel="noreferrer" className="text-xs text-neutral-300 hover:text-white transition-colors flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5">
              X (Twitter) <span className="font-sans">&rarr;</span>
            </a>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className={`${bentoCard} lg:col-span-3`}>
          <h2 className={sectionTitle}><Monitor className="text-neutral-500" size={24} /> Come disabilitare i cookie mediante configurazione del browser</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            
            {/* Chrome */}
            <div className="space-y-2 bg-white/5 p-5 rounded-2xl border border-white/5">
              <h4 className="text-white text-base font-medium mb-3">1. Chrome</h4>
              <ul className="text-[13px] text-neutral-400 space-y-1 list-disc list-inside">
                <li>Eseguire il Browser Chrome</li>
                <li>Fare click sul menù a fianco dell'url</li>
                <li>Selezionare Impostazioni</li>
                <li>Fare clic su Mostra Impostazioni Avanzate</li>
                <li>Sezione “Privacy” &gt; “Impostazioni contenuti”</li>
                <li>Gestire/Eliminare i cookie</li>
              </ul>
              <a href="https://support.google.com/chrome/answer/95647?hl=it" target="_blank" rel="noreferrer" className="block mt-4 text-[11px] text-neutral-300 hover:underline">Info supporto Chrome &rarr;</a>
            </div>

            {/* Firefox */}
            <div className="space-y-2 bg-white/5 p-5 rounded-2xl border border-white/5">
              <h4 className="text-white text-base font-medium mb-3">2. Mozilla Firefox</h4>
              <ul className="text-[13px] text-neutral-400 space-y-1 list-disc list-inside">
                <li>Eseguire il Browser Mozilla Firefox</li>
                <li>Fare click sul menù del browser</li>
                <li>Selezionare Opzioni &gt; Privacy</li>
                <li>Fare clic su Mostra Impostazioni Avanzate</li>
                <li>Sezione “Privacy” e “Tracciamento”</li>
                <li>Gestire le preferenze e Cronologia</li>
              </ul>
              <a href="https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie" target="_blank" rel="noreferrer" className="block mt-4 text-[11px] text-neutral-300 hover:underline">Info supporto Firefox &rarr;</a>
            </div>

            {/* IE / Edge */}
            <div className="space-y-2 bg-white/5 p-5 rounded-2xl border border-white/5">
              <h4 className="text-white text-base font-medium mb-3">3. Internet Explorer/Edge</h4>
              <ul className="text-[13px] text-neutral-400 space-y-1 list-disc list-inside">
                <li>Eseguire Internet Explorer/Edge</li>
                <li>Fare click su Strumenti</li>
                <li>Scegliere Opzioni Internet</li>
                <li>Scheda Privacy &gt; Impostazioni</li>
                <li>Bloccare o consentire i cookie</li>
              </ul>
              <a href="https://support.microsoft.com/it-it/windows/eliminare-e-gestire-i-cookie" target="_blank" rel="noreferrer" className="block mt-4 text-[11px] text-neutral-300 hover:underline">Info supporto Microsoft &rarr;</a>
            </div>

            {/* Safari */}
            <div className="space-y-2 bg-white/5 p-5 rounded-2xl border border-white/5">
              <h4 className="text-white text-base font-medium mb-3">4. Safari 6</h4>
              <ul className="text-[13px] text-neutral-400 space-y-1 list-disc list-inside">
                <li>Eseguire il Browser Safari</li>
                <li>Fare click su Safari &gt; Preferenze</li>
                <li>Premere su Privacy</li>
                <li>Sezione Blocca Cookie</li>
                <li>Specificare come accettare i cookie</li>
              </ul>
              <a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noreferrer" className="block mt-4 text-[11px] text-neutral-300 hover:underline">Info supporto Apple &rarr;</a>
            </div>

            {/* Safari iOS */}
            <div className="space-y-2 bg-white/5 p-5 rounded-2xl border border-white/5">
              <h4 className="text-white text-base font-medium mb-3 flex items-center gap-2">
                5. Safari iOS <Smartphone size={16} />
              </h4>
              <ul className="text-[13px] text-neutral-400 space-y-1 list-disc list-inside">
                <li>Eseguire il Browser Safari iOS</li>
                <li>Tocca su Impostazioni e poi Safari</li>
                <li>Tocca su Blocca Cookie</li>
                <li>Scegli tra le varie opzioni</li>
                <li>Oppure: Cancella Cookie e dati</li>
              </ul>
              <a href="https://support.apple.com/it-it/HT201265" target="_blank" rel="noreferrer" className="block mt-4 text-[11px] text-neutral-300 hover:underline">Info supporto iOS &rarr;</a>
            </div>

            {/* Opera */}
            <div className="space-y-2 bg-white/5 p-5 rounded-2xl border border-white/5">
              <h4 className="text-white text-base font-medium mb-3">6. Opera</h4>
              <ul className="text-[13px] text-neutral-400 space-y-1 list-disc list-inside">
                <li>Eseguire il Browser Opera</li>
                <li>Fare click su Preferenze</li>
                <li>Avanzate &gt; Cookie</li>
                <li>Accetta tutti, solo dal sito, o mai</li>
              </ul>
              <a href="https://help.opera.com/en/latest/web-preferences/" target="_blank" rel="noreferrer" className="block mt-4 text-[11px] text-neutral-300 hover:underline">Info supporto Opera &rarr;</a>
            </div>

          </div>
        </motion.section>

      </div>
    </motion.div>
  );
}

export default Revoca;