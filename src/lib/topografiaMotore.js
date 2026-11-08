const F3 = 1 / 3;
const G3 = 1 / 6;
const GRAD = new Int8Array([
  1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0,
  1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1,
  0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1,
]);

const PALETTE = {
  dark: { base: 'rgba(255, 255, 255, 0.07)', forte: 'rgba(255, 255, 255, 0.14)' },
  light: { base: 'rgba(43, 52, 112, 0.22)', forte: 'rgba(43, 52, 112, 0.36)' },
};

const LIVELLI = 15;
const SCALA = 1 / 850;
const OTTAVE = 3;
const NORMALIZZA = 1.75;
const VELOCITA = 0.00003;

export const FPS = 24;

function creaRumore(seme) {
  const p = new Uint8Array(256);
  for (let i = 0; i < 256; i++) p[i] = i;
  let s = seme;
  for (let i = 255; i > 0; i--) {
    s = (s * 16807) % 2147483647;
    const j = s % (i + 1);
    const t = p[i];
    p[i] = p[j];
    p[j] = t;
  }
  const perm = new Uint8Array(512);
  const gradIndice = new Uint8Array(512);
  for (let i = 0; i < 512; i++) {
    perm[i] = p[i & 255];
    gradIndice[i] = (perm[i] % 12) * 3;
  }

  const contributo = (g, dx, dy, dz) => {
    let a = 0.6 - dx * dx - dy * dy - dz * dz;
    if (a <= 0) return 0;
    a *= a;
    return a * a * (GRAD[g] * dx + GRAD[g + 1] * dy + GRAD[g + 2] * dz);
  };

  return (x, y, z) => {
    const t = (x + y + z) * F3;
    const i = Math.floor(x + t);
    const j = Math.floor(y + t);
    const k = Math.floor(z + t);
    const u = (i + j + k) * G3;
    const x0 = x - i + u;
    const y0 = y - j + u;
    const z0 = z - k + u;

    let i1, j1, k1, i2, j2, k2;
    if (x0 >= y0) {
      if (y0 >= z0) { i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 1; k2 = 0; }
      else if (x0 >= z0) { i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 0; k2 = 1; }
      else { i1 = 0; j1 = 0; k1 = 1; i2 = 1; j2 = 0; k2 = 1; }
    } else if (y0 < z0) { i1 = 0; j1 = 0; k1 = 1; i2 = 0; j2 = 1; k2 = 1; }
    else if (x0 < z0) { i1 = 0; j1 = 1; k1 = 0; i2 = 0; j2 = 1; k2 = 1; }
    else { i1 = 0; j1 = 1; k1 = 0; i2 = 1; j2 = 1; k2 = 0; }

    const ii = i & 255;
    const jj = j & 255;
    const kk = k & 255;

    return 32 * (
      contributo(gradIndice[ii + perm[jj + perm[kk]]], x0, y0, z0)
      + contributo(gradIndice[ii + i1 + perm[jj + j1 + perm[kk + k1]]], x0 - i1 + G3, y0 - j1 + G3, z0 - k1 + G3)
      + contributo(gradIndice[ii + i2 + perm[jj + j2 + perm[kk + k2]]], x0 - i2 + 2 * G3, y0 - j2 + 2 * G3, z0 - k2 + 2 * G3)
      + contributo(gradIndice[ii + 1 + perm[jj + 1 + perm[kk + 1]]], x0 - 1 + 3 * G3, y0 - 1 + 3 * G3, z0 - 1 + 3 * G3)
    );
  };
}

export function creaMotore(canvas) {
  const ctx = canvas.getContext('2d');
  const rumore = creaRumore(1337);

  let larghezza = 0;
  let altezza = 0;
  let passo = 14;
  let colonne = 0;
  let righe = 0;
  let celle = 0;
  let campo = new Float32Array(0);
  let px = new Float32Array(0);
  let py = new Float32Array(0);
  let vicini = new Int32Array(0);
  let grado = new Uint8Array(0);
  let visitato = new Uint8Array(0);
  let toccati = new Int32Array(0);
  let catena = new Int32Array(0);
  let nToccati = 0;
  let tempo = 0;
  let tema = PALETTE.dark;

  const ridimensiona = (w, h, dprRichiesto) => {
    const dpr = Math.min(dprRichiesto || 1, 2);
    larghezza = w;
    altezza = h;
    canvas.width = Math.max(1, Math.round(larghezza * dpr));
    canvas.height = Math.max(1, Math.round(altezza * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    passo = larghezza < 768 ? 16 : 14;
    colonne = Math.ceil(larghezza / passo) + 1;
    righe = Math.ceil(altezza / passo) + 1;
    celle = colonne * righe;
    const lati = celle * 2;
    campo = new Float32Array(celle);
    px = new Float32Array(lati);
    py = new Float32Array(lati);
    vicini = new Int32Array(lati * 2);
    grado = new Uint8Array(lati);
    visitato = new Uint8Array(lati);
    toccati = new Int32Array(lati);
    catena = new Int32Array(lati);
  };

  const impostaTema = (nome) => {
    tema = nome === 'light' ? PALETTE.light : PALETTE.dark;
  };

  const avanza = (delta) => {
    tempo += delta * VELOCITA;
  };

  const calcolaCampo = () => {
    for (let r = 0; r < righe; r++) {
      const y = r * passo * SCALA;
      for (let c = 0; c < colonne; c++) {
        const x = c * passo * SCALA;
        let valore = 0;
        let ampiezza = 1;
        let frequenza = 1;
        for (let o = 0; o < OTTAVE; o++) {
          valore += rumore(x * frequenza + o * 31.7, y * frequenza + o * 17.3, tempo) * ampiezza;
          frequenza *= 2;
          ampiezza *= 0.5;
        }
        campo[r * colonne + c] = valore / NORMALIZZA;
      }
    }
  };

  const punto = (id, x, y) => {
    if (grado[id] === 0) {
      px[id] = x;
      py[id] = y;
      toccati[nToccati++] = id;
    }
    return id;
  };

  const collega = (p, q) => {
    vicini[p * 2 + grado[p]++] = q;
    vicini[q * 2 + grado[q]++] = p;
  };

  const disegnaCatena = (path, inizio) => {
    let n = 0;
    let corrente = inizio;
    visitato[corrente] = 1;
    catena[n++] = corrente;
    for (;;) {
      const a = vicini[corrente * 2];
      const b = grado[corrente] > 1 ? vicini[corrente * 2 + 1] : -1;
      const prossimo = !visitato[a] ? a : b >= 0 && !visitato[b] ? b : -1;
      if (prossimo < 0) break;
      visitato[prossimo] = 1;
      catena[n++] = prossimo;
      corrente = prossimo;
    }
    if (n < 2) return;

    const chiusa = n > 2 && (vicini[corrente * 2] === inizio || (grado[corrente] > 1 && vicini[corrente * 2 + 1] === inizio));

    if (chiusa) {
      const ultimoId = catena[n - 1];
      path.moveTo((px[ultimoId] + px[inizio]) / 2, (py[ultimoId] + py[inizio]) / 2);
      for (let k = 0; k < n; k++) {
        const id = catena[k];
        const succ = catena[(k + 1) % n];
        path.quadraticCurveTo(px[id], py[id], (px[id] + px[succ]) / 2, (py[id] + py[succ]) / 2);
      }
      return;
    }

    path.moveTo(px[inizio], py[inizio]);
    for (let k = 1; k < n - 1; k++) {
      const id = catena[k];
      const succ = catena[k + 1];
      path.quadraticCurveTo(px[id], py[id], (px[id] + px[succ]) / 2, (py[id] + py[succ]) / 2);
    }
    const fine = catena[n - 1];
    path.lineTo(px[fine], py[fine]);
  };

  const tracciaLivello = (soglia, path) => {
    nToccati = 0;

    for (let r = 0; r < righe - 1; r++) {
      const y0 = r * passo;
      for (let c = 0; c < colonne - 1; c++) {
        const i = r * colonne + c;
        const a = campo[i];
        const b = campo[i + 1];
        const d = campo[i + colonne];
        const e = campo[i + colonne + 1];
        const caso = (a > soglia ? 8 : 0) | (b > soglia ? 4 : 0) | (e > soglia ? 2 : 0) | (d > soglia ? 1 : 0);
        if (caso === 0 || caso === 15) continue;

        const x0 = c * passo;
        const alto = (caso & 12) === 4 || (caso & 12) === 8 ? punto(i, x0 + passo * ((soglia - a) / (b - a)), y0) : -1;
        const basso = (caso & 3) === 1 || (caso & 3) === 2 ? punto(i + colonne, x0 + passo * ((soglia - d) / (e - d)), y0 + passo) : -1;
        const sinistra = ((caso >> 3) & 1) !== (caso & 1) ? punto(celle + i, x0, y0 + passo * ((soglia - a) / (d - a))) : -1;
        const destra = ((caso >> 2) & 1) !== ((caso >> 1) & 1) ? punto(celle + i + 1, x0 + passo, y0 + passo * ((soglia - b) / (e - b))) : -1;

        switch (caso) {
          case 1: case 14: collega(sinistra, basso); break;
          case 2: case 13: collega(basso, destra); break;
          case 3: case 12: collega(sinistra, destra); break;
          case 4: case 11: collega(alto, destra); break;
          case 6: case 9: collega(alto, basso); break;
          case 7: case 8: collega(sinistra, alto); break;
          case 5: collega(sinistra, alto); collega(basso, destra); break;
          case 10: collega(alto, destra); collega(sinistra, basso); break;
        }
      }
    }

    for (let k = 0; k < nToccati; k++) {
      const id = toccati[k];
      if (grado[id] === 1 && !visitato[id]) disegnaCatena(path, id);
    }
    for (let k = 0; k < nToccati; k++) {
      const id = toccati[k];
      if (!visitato[id]) disegnaCatena(path, id);
    }

    for (let k = 0; k < nToccati; k++) {
      const id = toccati[k];
      grado[id] = 0;
      visitato[id] = 0;
    }
  };

  const disegna = () => {
    if (!larghezza || !altezza) return;
    calcolaCampo();

    const base = new Path2D();
    const forte = new Path2D();
    for (let l = 0; l < LIVELLI; l++) {
      const soglia = -0.7 + (1.4 * (l + 0.5)) / LIVELLI;
      tracciaLivello(soglia, l % 5 === 0 ? forte : base);
    }

    ctx.clearRect(0, 0, larghezza, altezza);
    ctx.lineWidth = 1;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.strokeStyle = tema.base;
    ctx.stroke(base);
    ctx.strokeStyle = tema.forte;
    ctx.stroke(forte);

    ctx.save();
    ctx.globalCompositeOperation = 'destination-in';
    ctx.translate(larghezza * 0.5, altezza * 0.3);
    ctx.scale(larghezza * 0.85, altezza * 0.75);
    const sfumatura = ctx.createRadialGradient(0, 0, 0, 0, 0, 1);
    sfumatura.addColorStop(0.4, '#000');
    sfumatura.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = sfumatura;
    ctx.fillRect(-2, -2, 4, 4);
    ctx.restore();
  };

  return { ridimensiona, impostaTema, avanza, disegna };
}

export function creaCiclo(motore, pianifica, annulla) {
  let attivo = false;
  let ultimo = 0;
  let frame = 0;

  const ciclo = (ora) => {
    frame = pianifica(ciclo);
    if (ora - ultimo < 1000 / FPS) return;
    const delta = ultimo ? Math.min(ora - ultimo, 100) : 0;
    ultimo = ora;
    motore.avanza(delta);
    motore.disegna();
  };

  const imposta = (valore) => {
    if (valore === attivo) return;
    attivo = valore;
    if (attivo) {
      ultimo = 0;
      frame = pianifica(ciclo);
    } else {
      annulla(frame);
      frame = 0;
    }
  };

  return { imposta };
}
