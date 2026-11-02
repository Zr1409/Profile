import { ArrowDown, Download, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { PortraitSlideshow } from '../components/media/PortraitSlideshow';
import { TechMarquee } from '../components/media/TechMarquee';

export const Hero = () => (
  <section id="hero" aria-label="Introduction" className="hero-section">
    <div className="site-shell hero-layout">
      <div className="hero-copy" data-heading-reveal="hero">
        <p className="hero-greeting" data-reveal-copy>Hello, I'm</p>
        <h1 className="hero-name">Tran Van Du</h1>
        <p className="hero-subtitle" data-reveal-copy>{PERSONAL_INFO.title}</p>
        <p className="body-copy hero-description" data-reveal-copy>{PERSONAL_INFO.shortBio}</p>
        <div className="hero-actions">
          <a href="#projects" className="button button-primary">
            Explore projects <ArrowDown size={17} aria-hidden="true" />
          </a>
          <a href={PERSONAL_INFO.cvPath} download="CV_TRAN_VAN_DU.pdf" className="text-link">
            Download CV <Download size={17} aria-hidden="true" />
          </a>
        </div>
        <p className="hero-location" data-reveal-copy><MapPin size={17} aria-hidden="true" />Ho Chi Minh City, Vietnam</p>
        <p className="hero-eyebrow" data-reveal-copy>{PERSONAL_INFO.status}</p>
      </div>
      <figure className="hero-portrait-wrap">
        <PortraitSlideshow />
      </figure>
    </div>
    <TechMarquee />
  </section>
);
