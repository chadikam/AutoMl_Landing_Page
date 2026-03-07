import { useEffect, useCallback, useRef } from 'react';

export default function useHeaderScroll(headerRef) {
  const ticking = useRef(false);

  const update = useCallback(() => {
    const header = headerRef.current;
    if (!header) return;

    if (window.scrollY > 32) {
      header.style.background = 'rgba(8, 9, 10, 0.82)';
      header.style.backdropFilter = 'blur(16px) saturate(1.6)';
      header.style.borderBottom = '1px solid rgba(255,255,255,0.06)';
    } else {
      header.style.background = 'transparent';
      header.style.backdropFilter = 'none';
      header.style.borderBottom = '1px solid transparent';
    }
    ticking.current = false;
  }, [headerRef]);

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(update);
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update();

    return () => window.removeEventListener('scroll', onScroll);
  }, [update]);
}
