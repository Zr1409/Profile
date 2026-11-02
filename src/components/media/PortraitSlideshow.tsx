import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { useSlideshow } from '../../hooks/useSlideshow';

const PHOTOS = [
  { name: 'At the desk', slug: 'portrait', alt: 'Tran Van Du at a café with his laptop', width: 1086, height: 1448, objectPosition: 'center 30%' },
  { name: 'Beyond the screen', slug: 'standing', alt: 'Tran Van Du outdoors at night', width: 1086, height: 1448, objectPosition: 'center 30%' },
  { name: 'Out in nature', slug: 'wings', alt: 'Tran Van Du seated in front of a wing sculpture in a garden', width: 1024, height: 1024, objectPosition: 'center' },
];

export const PortraitSlideshow = () => {
  const slides = useSlideshow(PHOTOS.length, 5000);
  return (
    <div ref={slides.rootRef} className="portrait-slideshow" role="region" aria-roledescription="carousel" aria-label="Photos of Tran Van Du" {...slides.interactionProps}>
      <div className="portrait-slides">
        {PHOTOS.map((photo, index) => (
          <picture key={photo.slug} className={`portrait-slide${slides.index === index ? ' is-active' : ''}`} aria-hidden={slides.index !== index}>
            <source srcSet={`/images/portraits/${photo.slug}-560.webp 560w, /images/portraits/${photo.slug}-840.webp 840w`} sizes="(max-width:760px) calc(100vw - 80px), 420px" />
            <img src={`/images/portraits/${photo.slug}-840.webp`} alt={slides.index === index ? photo.alt : ''} width={photo.width} height={photo.height} style={{ objectPosition: photo.objectPosition }} loading={index === 0 ? 'eager' : 'lazy'} fetchPriority={index === 0 ? 'high' : 'auto'} />
          </picture>
        ))}
      </div>
      <div className="portrait-controls" role="group" aria-label="Photo controls">
        <button type="button" className="portrait-control" onClick={() => slides.goTo(slides.index - 1)} aria-label="Previous portrait"><ChevronLeft size={19} aria-hidden="true" /></button>
        <button type="button" className="portrait-control portrait-playback" onClick={slides.togglePlaying} disabled={slides.reducedMotion} aria-label={slides.playing ? 'Pause photo slideshow' : 'Play photo slideshow'}>{slides.playing ? <Pause size={17} aria-hidden="true" /> : <Play size={17} aria-hidden="true" />}</button>
        <button type="button" className="portrait-control" onClick={() => slides.goTo(slides.index + 1)} aria-label="Next portrait"><ChevronRight size={19} aria-hidden="true" /></button>
        <span className="sr-only" aria-live={slides.playing ? 'off' : 'polite'} aria-atomic="true">Photo {slides.index + 1} of {PHOTOS.length}: {PHOTOS[slides.index].name}</span>
      </div>
    </div>
  );
};
