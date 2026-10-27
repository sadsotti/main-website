import { useEffect } from 'react';

function SpotlightTracker() {
  useEffect(() => {
    const onMove = (e) => {
      const card = e.target.closest?.('.spotlight');
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      card.style.setProperty('--my', `${e.clientY - rect.top}px`);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return null;
}

export default SpotlightTracker;
