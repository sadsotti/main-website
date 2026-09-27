import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'Chi Sono' },
  { path: '/servizi', label: 'Servizi' },
  {
    label: 'Progetti',
    subLinks: [
      { path: '/portfolio', label: 'Portfolio Generale' },
      { path: '/start2impact', label: 'Master start2impact' }
    ]
  },
  { path: '/contatti', label: 'Contatti' },
];

const desktopLinkStyle = ({ isActive }) =>
  isActive
    ? "bg-white/10 text-white px-4 py-2 rounded-xl font-semibold transition-all border border-white/10 text-sm"
    : "text-neutral-400 hover:bg-white/5 hover:text-white px-4 py-2 rounded-xl font-medium transition-all text-sm border border-transparent";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    if (!isOpen && !openDropdown) return;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setOpenDropdown(null);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, openDropdown]);

  const closeAll = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  return (
    <div className="fixed top-0 left-0 w-full flex justify-center p-4 z-50 pointer-events-none">
      <nav
        aria-label="Navigazione principale"
        className="pointer-events-auto bg-[#0a0a0a]/80 backdrop-blur-xl shadow-2xl border border-white/10 rounded-2xl w-full max-w-5xl px-4 py-3 flex justify-between items-center relative"
      >
        <NavLink
          to="/"
          className="text-4xl text-white hover:text-neutral-300 transition-colors font-barcode"
          aria-label="Lorenzo Sottile, torna alla home"
          onClick={closeAll}
        >
          LS.
        </NavLink>

        <div className="hidden md:flex gap-1 items-center">
          {navLinks.map((link) => (
            link.subLinks ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget)) setOpenDropdown(null);
                }}
              >
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={openDropdown === link.label}
                  aria-controls="menu-progetti"
                  className={`px-4 py-2 rounded-xl font-medium transition-all text-sm flex items-center gap-1 cursor-pointer border ${
                    openDropdown === link.label
                      ? 'bg-white/10 text-white border-white/10'
                      : 'text-neutral-400 hover:bg-white/5 hover:text-white border-transparent'
                  }`}
                  onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                >
                  {link.label}
                  <motion.span
                    className="inline-flex"
                    animate={{ rotate: openDropdown === link.label ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  >
                    <ChevronDown size={14} aria-hidden="true" />
                  </motion.span>
                </button>

                <div className="absolute top-full left-0 pt-2 z-50">
                  <div
                    id="menu-progetti"
                    className={`w-52 bg-[#121212] border border-white/10 rounded-2xl p-2 shadow-2xl transition-all duration-200 flex flex-col ${openDropdown === link.label ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                  >
                    {link.subLinks.map((subLink) => (
                      <NavLink
                        key={subLink.path}
                        to={subLink.path}
                        onClick={closeAll}
                        className={({ isActive }) =>
                          isActive
                            ? "bg-white/10 text-white px-4 py-2 rounded-xl font-semibold transition-all border border-white/10 text-sm mb-1 last:mb-0"
                            : "text-neutral-400 hover:bg-white/5 hover:text-white px-4 py-2 rounded-xl font-medium transition-all text-sm mb-1 last:mb-0 border border-transparent"
                        }
                      >
                        {subLink.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink key={link.path} to={link.path} className={desktopLinkStyle}>
                {link.label}
              </NavLink>
            )
          ))}
        </div>

        <button
          type="button"
          className="md:hidden text-neutral-400 hover:text-white transition-colors p-1 cursor-pointer"
          aria-label={isOpen ? 'Chiudi il menu' : 'Apri il menu'}
          aria-expanded={isOpen}
          aria-controls="menu-mobile"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="menu-mobile"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 mt-3 w-full bg-[#121212] border border-white/10 rounded-2xl p-2 flex flex-col shadow-2xl md:hidden overflow-hidden z-50"
            >
              {navLinks.map((link) => (
                link.subLinks ? (
                  <div key={link.label} className="flex flex-col mb-1">
                    <p className="px-4 py-3 text-white font-medium text-sm opacity-70">
                      {link.label}
                    </p>
                    <div className="flex flex-col pl-4 border-l border-white/10 ml-6 space-y-1">
                      {link.subLinks.map((subLink) => (
                        <NavLink
                          key={subLink.path}
                          to={subLink.path}
                          className={({ isActive }) => `block px-4 py-2 rounded-xl font-medium text-sm transition-colors ${isActive ? 'bg-white/10 text-white' : 'text-neutral-400 hover:bg-white/5 hover:text-white'}`}
                          onClick={closeAll}
                        >
                          {subLink.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                ) : (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) => `block px-4 py-3 rounded-xl font-medium text-sm transition-colors mb-1 ${isActive ? 'bg-white/10 text-white' : 'text-neutral-400 hover:bg-white/5 hover:text-white'}`}
                    onClick={closeAll}
                  >
                    {link.label}
                  </NavLink>
                )
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}

export default Navbar;
