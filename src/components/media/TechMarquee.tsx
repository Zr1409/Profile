import { useState } from 'react';
import { Pause, Play } from 'lucide-react';

const TECHNOLOGIES = ['Java', 'Spring Boot', 'React', 'TypeScript', 'MySQL', 'REST APIs'];

export const TechMarquee = () => {
  const [paused, setPaused] = useState(false);
  return (
    <div className={`site-shell tech-marquee${paused ? ' is-paused' : ''}`}>
      <p className="sr-only">My toolkit: {TECHNOLOGIES.join(', ')}</p>
      <div className="marquee-viewport" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map(copy => <div className="marquee-group" key={copy}>{TECHNOLOGIES.map(technology => <span key={technology}>{technology}</span>)}</div>)}
        </div>
      </div>
      <button type="button" className="slideshow-button marquee-toggle" onClick={() => setPaused(value => !value)} aria-label={paused ? 'Play moving technology text' : 'Pause moving technology text'} aria-pressed={paused}>{paused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}</button>
    </div>
  );
};
