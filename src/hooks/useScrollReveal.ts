import { useEffect } from 'react';

const REVEAL_MOTION = {
  desktop: { heading: 900, content: 650, copy: 500, distance: 24, rise: 16, stagger: 45, maxDelay: 90 },
  mobile: { heading: 750, content: 550, copy: 450, distance: 12, rise: 10, stagger: 30, maxDelay: 60 },
};

/** Replay directional entrances on stable frames; base content stays visible. */
export function useScrollReveal() {
  useEffect(() => {
    const frames = Array.from(document.querySelectorAll<HTMLElement>('[data-heading-reveal], [data-scroll-reveal]'));
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const compactLayout = window.matchMedia('(max-width: 760px)');
    const visible = new Set<HTMLElement>();
    const active = new Map<HTMLElement, Animation[]>();
    let observer: IntersectionObserver | undefined;
    let generation = 0;

    const cancelFrame = (frame: HTMLElement) => {
      active.get(frame)?.forEach(animation => animation.cancel());
      active.delete(frame);
    };

    const stop = () => {
      generation++;
      observer?.disconnect();
      observer = undefined;
      frames.forEach(cancelFrame);
      visible.clear();
    };

    const start = () => {
      stop();
      if (preference.matches || !('IntersectionObserver' in window)) return;
      const currentGeneration = generation;
      observer = new IntersectionObserver(entries => {
        if (preference.matches || generation !== currentGeneration) return;
        const staggeredParents = new Map<Element, number>();
        for (const entry of entries) {
          if (!(entry.target instanceof HTMLElement)) continue;
          const frame = entry.target;
          if (!entry.isIntersecting) {
            visible.delete(frame);
            cancelFrame(frame);
            continue;
          }
          if (visible.has(frame)) continue;
          visible.add(frame);

          // Keyboard destinations and explicitly eager content stay immediate.
          if (frame.dataset.headingReveal === 'eager' || frame.contains(document.activeElement) || document.hidden) continue;

          const isHeadingFrame = frame.hasAttribute('data-heading-reveal');
          const isHeroFrame = frame.dataset.headingReveal === 'hero';
          const compact = compactLayout.matches;
          const motion = compact ? REVEAL_MOTION.mobile : REVEAL_MOTION.desktop;
          const parent = frame.parentElement ?? frame;
          const siblingsBefore = isHeadingFrame ? 0 : staggeredParents.get(parent) ?? 0;
          if (!isHeadingFrame) staggeredParents.set(parent, siblingsBefore + 1);
          const elements = Array.from(frame.querySelectorAll<HTMLElement>(
            isHeadingFrame ? 'h1, h2, [data-reveal-copy]' : '[data-reveal-item], [data-reveal-title]',
          )).filter(element => element.closest('[data-heading-reveal], [data-scroll-reveal]') === frame);

          // Follow visual reading order even for the reversed TalentHub layout.
          if (!isHeadingFrame) elements.sort((left, right) => {
            const a = left.getBoundingClientRect();
            const b = right.getBoundingClientRect();
            return Math.abs(a.top - b.top) > 12 ? a.top - b.top : a.left - b.left;
          });

          const frameBounds = frame.getBoundingClientRect();
          const bounds = new Map(elements.map(element => [element, element.getBoundingClientRect()]));
          const items = elements.filter(element => element.hasAttribute('data-reveal-item'));

          const animations = elements.flatMap((element, index) => {
            if (typeof element.animate !== 'function') return [];
            const isHeading = element.matches('h1, h2, [data-reveal-title]');
            const isCopy = isHeadingFrame && !isHeading;
            if (isHeroFrame) {
              // Keep identity readable throughout; actions are outside the reveal targets.
              const x = isHeading ? (compact ? -6 : -10) : 0;
              const y = isHeading ? 0 : compact ? 4 : 6;
              return [element.animate([
                { opacity: 0.85, transform: `translate3d(${x}px, ${y}px, 0)` },
                { opacity: 1, transform: 'translate3d(0, 0, 0)' },
              ], {
                duration: isHeading ? (compact ? 500 : 600) : (compact ? 400 : 450),
                delay: Math.min(index * (compact ? 20 : 30), compact ? 60 : 100),
                easing: 'cubic-bezier(0.25, 0.8, 0.25, 1)',
                fill: 'backwards',
              })];
            }
            let direction = element.dataset.revealFrom ?? 'up';
            // Project columns follow their visual position, including TalentHub.
            if (frame.dataset.scrollReveal === 'split' && !element.dataset.revealFrom && !isHeading) {
              const rect = bounds.get(element)!;
              direction = rect.width > frameBounds.width * 0.8
                ? (items.indexOf(element) % 2 === 0 ? 'left' : 'right')
                : (rect.left + rect.width / 2 < frameBounds.left + frameBounds.width / 2 ? 'left' : 'right');
            }
            const distance = motion.distance;
            const x = direction === 'left' ? -distance : direction === 'right' ? distance : 0;
            const y = x ? 0 : isCopy ? 6 : motion.rise;
            const duration = isHeading ? motion.heading : isCopy ? motion.copy : motion.content;
            // Paired columns enter together; grids keep a short, quiet stagger.
            const delay = isHeading || frame.dataset.scrollReveal === 'split'
              ? 0
              : Math.min((index + siblingsBefore) * motion.stagger, motion.maxDelay);
            const nestedTitle = isHeading && !!element.parentElement?.closest('[data-reveal-item]');
            return [element.animate(
              isHeading ? [
                { opacity: nestedTitle ? 1 : 0.8, transform: `translate3d(${nestedTitle ? 0 : -6}px, 0, 0)`, clipPath: 'inset(0 55% 0 0)' },
                { opacity: 1, transform: 'translate3d(0, 0, 0)', clipPath: 'inset(0 0 0 0)' },
              ] : [
                { opacity: isCopy ? 0.85 : 0.72, transform: `translate3d(${x}px, ${y}px, 0)` },
                { opacity: 1, transform: 'translate3d(0, 0, 0)' },
              ],
              {
                duration,
                delay,
                easing: 'cubic-bezier(0.25, 0.8, 0.25, 1)',
                fill: 'backwards',
              },
            )];
          });
          active.set(frame, animations);
          Promise.allSettled(animations.map(animation => animation.finished)).then(() => {
            if (active.get(frame) === animations) active.delete(frame);
          });
        }
      }, { threshold: 0 });
      frames.forEach(frame => {
        if (frame.dataset.headingReveal !== 'eager') observer?.observe(frame);
      });
    };

    const revealFocusedFrame = (event: FocusEvent) => {
      if (!(event.target instanceof Element)) return;
      const target = event.target;
      active.forEach((animations, frame) => {
        if (frame.contains(target)) animations.forEach(animation => animation.finish());
      });
    };

    start();
    preference.addEventListener('change', start);
    document.addEventListener('focusin', revealFocusedFrame);
    return () => {
      stop();
      preference.removeEventListener('change', start);
      document.removeEventListener('focusin', revealFocusedFrame);
    };
  }, []);
}
