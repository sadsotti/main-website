import { useEffect, useRef } from 'react';
import { creaMotore, creaCiclo } from '../lib/topografiaMotore';

const PAUSA_SCROLL = 180;

const leggiTema = () => (document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');

function avviaNelWorker(canvas, stato) {
  if (typeof Worker === 'undefined' || !('transferControlToOffscreen' in canvas)) return null;
  try {
    const worker = new Worker(new URL('../lib/topografia.worker.js', import.meta.url), { type: 'module' });
    const offscreen = canvas.transferControlToOffscreen();
    worker.postMessage({ tipo: 'avvio', canvas: offscreen, ...stato }, [offscreen]);
    return {
      dimensioni: (larghezza, altezza, dpr) => worker.postMessage({ tipo: 'dimensioni', larghezza, altezza, dpr }),
      tema: (tema) => worker.postMessage({ tipo: 'tema', tema }),
      attivo: (attivo) => worker.postMessage({ tipo: 'attivo', attivo }),
      chiudi: () => worker.terminate(),
    };
  } catch {
    return null;
  }
}

function avviaNelThread(canvas, stato) {
  const motore = creaMotore(canvas);
  const ciclo = creaCiclo(motore, requestAnimationFrame, cancelAnimationFrame);
  motore.impostaTema(stato.tema);
  motore.ridimensiona(stato.larghezza, stato.altezza, stato.dpr);
  motore.disegna();
  ciclo.imposta(stato.attivo);
  return {
    dimensioni: (larghezza, altezza, dpr) => {
      motore.ridimensiona(larghezza, altezza, dpr);
      motore.disegna();
    },
    tema: (tema) => {
      motore.impostaTema(tema);
      motore.disegna();
    },
    attivo: (attivo) => ciclo.imposta(attivo),
    chiudi: () => ciclo.imposta(false),
  };
}

function Topografia() {
  const contenitoreRef = useRef(null);

  useEffect(() => {
    const contenitore = contenitoreRef.current;
    const canvas = document.createElement('canvas');
    contenitore.appendChild(canvas);

    const riduciMovimento = window.matchMedia('(prefers-reduced-motion: reduce)');
    let inScroll = false;
    let timerScroll = 0;
    let attivo = false;

    const calcolaAttivo = () => !document.hidden && !riduciMovimento.matches && !inScroll;

    const stato = {
      larghezza: contenitore.clientWidth,
      altezza: contenitore.clientHeight,
      dpr: window.devicePixelRatio || 1,
      tema: leggiTema(),
      attivo: calcolaAttivo(),
    };
    attivo = stato.attivo;

    const motore = avviaNelWorker(canvas, stato) ?? avviaNelThread(canvas, stato);

    const aggiornaAttivo = () => {
      const prossimo = calcolaAttivo();
      if (prossimo === attivo) return;
      attivo = prossimo;
      motore.attivo(attivo);
    };

    const onScroll = () => {
      inScroll = true;
      aggiornaAttivo();
      clearTimeout(timerScroll);
      timerScroll = setTimeout(() => {
        inScroll = false;
        aggiornaAttivo();
      }, PAUSA_SCROLL);
    };

    let larghezza = stato.larghezza;
    let altezza = stato.altezza;
    const osservatoreDimensioni = new ResizeObserver(([voce]) => {
      const w = Math.round(voce.contentRect.width);
      const h = Math.round(voce.contentRect.height);
      if (w === larghezza && h === altezza) return;
      larghezza = w;
      altezza = h;
      motore.dimensioni(w, h, window.devicePixelRatio || 1);
    });

    const osservatoreTema = new MutationObserver(() => motore.tema(leggiTema()));

    osservatoreDimensioni.observe(contenitore);
    osservatoreTema.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    document.addEventListener('visibilitychange', aggiornaAttivo);
    riduciMovimento.addEventListener('change', aggiornaAttivo);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      clearTimeout(timerScroll);
      motore.chiudi();
      osservatoreDimensioni.disconnect();
      osservatoreTema.disconnect();
      document.removeEventListener('visibilitychange', aggiornaAttivo);
      riduciMovimento.removeEventListener('change', aggiornaAttivo);
      window.removeEventListener('scroll', onScroll);
      canvas.remove();
    };
  }, []);

  return <div ref={contenitoreRef} className="topografia" />;
}

export default Topografia;
