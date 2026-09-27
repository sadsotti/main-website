import { Link } from 'react-router-dom';
import { GithubIcon, LinkedinIcon } from './Icons';
import { OWNER } from '../lib/site';

function Footer() {
  return (
    <footer className="w-full border-t border-white/5 mt-16 py-8 relative z-10">
      <div className="w-full max-w-5xl mx-auto px-4 md:px-8 flex flex-col items-center gap-6 text-neutral-500 text-sm">

        <nav aria-label="Link legali" className="flex flex-wrap justify-center gap-x-8 gap-y-3 font-medium text-neutral-400">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy & Cookie</Link>
          <Link to="/diritti" className="hover:text-white transition-colors">I tuoi diritti</Link>
          <Link to="/contatti" className="hover:text-white transition-colors">Contatti</Link>
        </nav>

        <div className="flex justify-center gap-6 text-neutral-400">
          <a
            href="https://github.com/sadsotti"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white hover:scale-110 transition-all duration-300"
            aria-label="Profilo GitHub"
          >
            <GithubIcon size={22} className="stroke-current" />
          </a>
          <a
            href="https://www.linkedin.com/in/lorenzo-sottile/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white hover:scale-110 transition-all duration-300"
            aria-label="Profilo LinkedIn"
          >
            <LinkedinIcon size={22} className="stroke-current" />
          </a>
        </div>

        <div className="text-center text-xs leading-relaxed">
          <span className="text-white font-medium">© {new Date().getFullYear()} {OWNER.name}.</span> Tutti i diritti riservati.<br />
          {OWNER.address}
          {OWNER.vatNumber && <> · P.IVA {OWNER.vatNumber}</>}
          <br />
          Made by Me with <span className="text-white">♡</span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
