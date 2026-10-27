export const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export const fastContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } },
};

export const inView = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, margin: '-80px' },
};

export const cardBase = 'spotlight bg-[#121212] border border-white/5 rounded-3xl hover:bg-[#171717] hover:border-white/10 transition-colors duration-300';

export const bentoCard = `${cardBase} p-6 md:p-8`;

export const eyebrow = 'text-xs font-semibold text-neutral-500 uppercase tracking-widest';

export const bottonePrimario = 'inline-flex items-center justify-center gap-2 text-sm text-black font-semibold bg-white px-6 py-3 rounded-xl hover:bg-neutral-200 transition-colors';

export const bottoneSecondario = 'inline-flex items-center justify-center gap-2 text-sm text-white font-medium bg-white/10 border border-white/10 px-6 py-3 rounded-xl hover:bg-white/20 transition-colors';
