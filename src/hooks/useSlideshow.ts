import { useCallback, useEffect, useRef, useState } from 'react';

interface SlideshowOptions {
  pauseOnHover?: boolean;
  pauseOnFocus?: boolean;
  pauseOnNavigate?: boolean;
  paused?: boolean;
}

export function useSlideshow(count: number, interval = 6000, {
  pauseOnHover = true,
  pauseOnFocus = true,
  pauseOnNavigate = true,
  paused = false,
}: SlideshowOptions = {}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [inView, setInView] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [hidden, setHidden] = useState(document.hidden);
  const [navigationVersion, setNavigationVersion] = useState(0);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => setReducedMotion(query.matches);
    const updateVisibility = () => setHidden(document.hidden);
    query.addEventListener('change', updateMotion);
    document.addEventListener('visibilitychange', updateVisibility);
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.2 });
    if (rootRef.current) observer.observe(rootRef.current);
    return () => {
      observer.disconnect();
      query.removeEventListener('change', updateMotion);
      document.removeEventListener('visibilitychange', updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (!playing || paused || reducedMotion || !inView || (pauseOnHover && hovered) || (pauseOnFocus && focused) || hidden || count < 2) return;
    const timer = window.setInterval(() => {
      if (!document.querySelector('dialog[open], [aria-modal="true"]')) setIndex(current => (current + 1) % count);
    }, interval);
    return () => window.clearInterval(timer);
  }, [playing, paused, reducedMotion, inView, hovered, focused, hidden, count, interval, pauseOnHover, pauseOnFocus, navigationVersion]);

  const goTo = useCallback((next: number) => {
    if (pauseOnNavigate) setPlaying(false);
    setIndex(((next % count) + count) % count);
    setNavigationVersion(version => version + 1);
  }, [count, pauseOnNavigate]);

  return {
    rootRef, index, goTo, playing: playing && !reducedMotion, reducedMotion,
    togglePlaying: () => setPlaying(value => !value),
    interactionProps: {
      onMouseEnter: () => { if (pauseOnHover) setHovered(true); },
      onMouseLeave: () => { if (pauseOnHover) setHovered(false); },
      onFocusCapture: () => { if (pauseOnFocus) setFocused(true); },
      onBlurCapture: (event: React.FocusEvent<HTMLDivElement>) => {
        if (pauseOnFocus && !event.currentTarget.contains(event.relatedTarget as Node | null)) setFocused(false);
      },
    },
  };
}
