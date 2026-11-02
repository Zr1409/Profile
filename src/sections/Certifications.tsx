import { lazy, Suspense, useState } from 'react';
import { ArrowUpRight, Award, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { CERTIFICATES } from '../data/certificates';
import { useSlideshow } from '../hooks/useSlideshow';

const loadCertificateDialog = () => import('../components/dialogs/CertificateDialog');
const preloadCertificateDialog = () => { void loadCertificateDialog().catch(() => {}); };
const CertificateDialog = lazy(() => loadCertificateDialog().then(module => ({ default: module.CertificateDialog })));

export const Certifications = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const slides = useSlideshow(CERTIFICATES.length, 5000, {
    pauseOnHover: false,
    pauseOnFocus: false,
    pauseOnNavigate: false,
    paused: selectedIndex !== null,
  });
  const current = CERTIFICATES[slides.index];

  const openCertificate = () => {
    setSelectedIndex(slides.index);
  };

  return (
    <section id="achievements" aria-labelledby="achievements-heading" className="section certificates-section">
      <div className="site-shell">
        <div className="section-intro certificate-heading" data-heading-reveal>
          <div>
            <h2 id="achievements-heading">Certifications</h2>
            <p data-reveal-copy>Learning the fundamentals. Putting them into practice.</p>
          </div>
          <span className="certificate-issuer" data-reveal-copy><Award size={20} aria-hidden="true" /> HackerRank credentials</span>
        </div>

        <div ref={slides.rootRef} className="certificate-showcase" role="region" aria-roledescription="carousel" aria-label="Professional certificates" {...slides.interactionProps}>
          <div className="certificate-feature" data-scroll-reveal="split">
            <div className="certificate-stage" data-reveal-item data-reveal-from="left">
              <div className="certificate-slides">
                {CERTIFICATES.map((certificate, index) => (
                  <div key={certificate.id} className={`certificate-slide${slides.index === index ? ' is-active' : ''}`} aria-hidden={slides.index !== index}>
                    <img src={certificate.previewSrc} alt={slides.index === index ? certificate.title + ' certificate awarded to Tran Van Du' : ''} width={1100} height={825} loading="lazy" decoding="async" />
                  </div>
                ))}
              </div>
              <div className="certificate-stage-footer">
                <span>{String(slides.index + 1).padStart(2, '0')} / {String(CERTIFICATES.length).padStart(2, '0')}</span>
                <div className="slideshow-buttons">
                  <button type="button" className="slideshow-button" onClick={() => slides.goTo(slides.index - 1)} aria-label="Previous featured certificate"><ChevronLeft size={19} aria-hidden="true" /></button>
                  <button type="button" className="slideshow-button certificate-playback" onClick={slides.togglePlaying} disabled={slides.reducedMotion} aria-label={slides.playing ? 'Pause certificate slideshow' : 'Play certificate slideshow'}>{slides.playing ? <Pause size={17} aria-hidden="true" /> : <Play size={17} aria-hidden="true" />}</button>
                  <button type="button" className="slideshow-button" onClick={() => slides.goTo(slides.index + 1)} aria-label="Next featured certificate"><ChevronRight size={19} aria-hidden="true" /></button>
                </div>
              </div>
            </div>
            <div className="certificate-feature-copy" data-reveal-item data-reveal-from="right" aria-live={slides.playing ? 'off' : 'polite'} aria-atomic="true">
              <span className="certificate-category">{current.category}</span>
              <h3>{current.title}</h3>
              <p className="certificate-byline">Issued by {current.issuer}</p>
              <p className="certificate-description">{current.description}</p>
              <div className="certificate-feature-actions">
                <button type="button" className="button button-primary featured-certificate-open" aria-haspopup="dialog" onPointerEnter={preloadCertificateDialog} onFocus={preloadCertificateDialog} onClick={openCertificate}>View certificate <ArrowUpRight size={17} aria-hidden="true" /></button>
                <a href={current.pdfSrc} className="text-link" target="_blank" rel="noopener noreferrer">Original PDF <ArrowUpRight size={16} aria-hidden="true" /></a>
              </div>
            </div>
          </div>
          <div className="certificate-selectors" role="group" aria-label="Choose a certificate" data-scroll-reveal>
            {CERTIFICATES.map((certificate, index) => (
              <button type="button" key={certificate.id} className="certificate-selector" data-reveal-item onClick={() => slides.goTo(index)} aria-pressed={slides.index === index} aria-label={`Show ${certificate.title} certificate`}>
                <img src={certificate.previewSrc} alt="" width={1100} height={825} loading="lazy" decoding="async" />
                <span>{certificate.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      {selectedIndex !== null && (
        <Suspense fallback={<p role="status">Opening certificate…</p>}>
          <CertificateDialog certificates={CERTIFICATES} selectedIndex={selectedIndex} onChange={setSelectedIndex} onClose={() => setSelectedIndex(null)} />
        </Suspense>
      )}
    </section>
  );
};
