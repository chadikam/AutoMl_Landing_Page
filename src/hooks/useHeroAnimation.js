import { useEffect } from 'react';

export default function useHeroAnimation(headingRef) {
  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;

    const lines = heading.innerHTML.split(/<br\s*\/?>/i);

    heading.innerHTML = lines
      .map((line, lineIdx) => {
        const words = line.trim().split(/\s+/).filter(Boolean);
        const offset = lineIdx * 4;
        return words
          .map(
            (word, i) =>
              `<span class="hero-word" style="animation-delay:${0.12 + (offset + i) * 0.07}s">${word}</span>`
          )
          .join(' ');
      })
      .join('<br/>');
  }, [headingRef]);
}
