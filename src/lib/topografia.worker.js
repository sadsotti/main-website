import { creaMotore, creaCiclo, FPS } from './topografiaMotore';

const pianifica = self.requestAnimationFrame
  ? (cb) => self.requestAnimationFrame(cb)
  : (cb) => setTimeout(() => cb(performance.now()), 1000 / FPS);

const annulla = self.cancelAnimationFrame
  ? (id) => self.cancelAnimationFrame(id)
  : (id) => clearTimeout(id);

let motore = null;
let ciclo = null;

self.onmessage = ({ data }) => {
  if (data.tipo === 'avvio') {
    motore = creaMotore(data.canvas);
    ciclo = creaCiclo(motore, pianifica, annulla);
    motore.impostaTema(data.tema);
    motore.ridimensiona(data.larghezza, data.altezza, data.dpr);
    motore.disegna();
    ciclo.imposta(data.attivo);
    return;
  }
  if (!motore) return;
  if (data.tipo === 'dimensioni') {
    motore.ridimensiona(data.larghezza, data.altezza, data.dpr);
    motore.disegna();
  } else if (data.tipo === 'tema') {
    motore.impostaTema(data.tema);
    motore.disegna();
  } else if (data.tipo === 'attivo') {
    ciclo.imposta(data.attivo);
  }
};
