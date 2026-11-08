import { useEffect } from 'react';

function SpotlightTracker() {
  useEffect(() => {
    const glow = document.querySelector('.ambient-glow');
    let frame = 0;
    let gx = 0;
    let gy = 0;
    let mouse = false;
    let card = null;
    let cx = 0;
    let cy = 0;
    let acceso = false;

    const aggiorna = () => {
      frame = 0;
      if (mouse && glow) {
        glow.style.transform = `translate3d(${gx}px, ${gy}px, 0)`;
        if (!acceso) {
          acceso = true;
          glow.style.opacity = '1';
        }
      }
      if (card) {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${cx - rect.left}px`);
        card.style.setProperty('--my', `${cy - rect.top}px`);
        card = null;
      }
    };

    const pianifica = () => {
      if (!frame) frame = requestAnimationFrame(aggiorna);
    };

    const onMove = (e) => {
      mouse = e.pointerType === 'mouse';
      if (mouse) {
        gx = e.clientX;
        gy = e.clientY;
      }
      const bersaglio = e.target.closest?.('.spotlight');
      if (bersaglio) {
        card = bersaglio;
        cx = e.clientX;
        cy = e.clientY;
      }
      if (mouse || bersaglio) pianifica();
    };

    const onLeave = () => {
      acceso = false;
      if (glow) glow.style.opacity = '0';
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    return () => {
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}

export default SpotlightTracker;
