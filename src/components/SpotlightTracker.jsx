import { useEffect } from 'react';

function SpotlightTracker() {
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;
    let gx = 0;
    let gy = 0;

    const aggiorna = () => {
      frame = 0;
      root.style.setProperty('--gx', `${gx}px`);
      root.style.setProperty('--gy', `${gy}px`);
      root.style.setProperty('--glow-on', '1');
    };

    const pianifica = () => {
      if (!frame) frame = requestAnimationFrame(aggiorna);
    };

    const onMove = (e) => {
      if (e.pointerType === 'mouse') {
        gx = e.clientX;
        gy = e.clientY;
        pianifica();
      }

      const card = e.target.closest?.('.spotlight');
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      card.style.setProperty('--my', `${e.clientY - rect.top}px`);
    };

    const onLeave = () => root.style.setProperty('--glow-on', '0');

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
