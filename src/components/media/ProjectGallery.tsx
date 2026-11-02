import { lazy, Suspense, useState } from 'react';
import { Expand } from 'lucide-react';
import { PROJECT_IMAGES } from '../../data/projectImages';
import type { Project } from '../../types/portfolio';

const loadImageDialog = () => import('../dialogs/ProjectImageDialog');
const preloadImageDialog = () => { void loadImageDialog().catch(() => {}); };
const ProjectImageDialog = lazy(() => loadImageDialog().then(module => ({ default: module.ProjectImageDialog })));

export const ProjectGallery = ({ project }: { project: Project }) => {
  const screenshots = PROJECT_IMAGES[project.id] ?? [];
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const current = screenshots[index];
  if (!current) return null;

  return (
    <>
      <figure className="project-gallery motion-card" aria-label={`${project.title} screenshots`}>
        <div className="project-gallery-heading"><span>Product screenshots</span><span>{String(index + 1).padStart(2, '0')} / {String(screenshots.length).padStart(2, '0')}</span></div>
        <button type="button" className="project-image-open" onPointerEnter={preloadImageDialog} onFocus={preloadImageDialog} onClick={() => setExpanded(true)} aria-haspopup="dialog" aria-label={`View full size: ${project.title} — ${current.title}`}>
          <img src={current.previewSrc} srcSet={`${current.previewSrc} 840w, ${current.src} ${current.width}w`} sizes="(max-width:760px) calc(100vw - 76px), (max-width:1099px) 44vw, 520px" alt={current.alt} width={current.width} height={current.height} loading="lazy" decoding="async" />
          <span className="project-image-expand"><Expand size={15} aria-hidden="true" /> View full size</span>
        </button>
        <figcaption className="project-image-caption"><strong>{current.title}</strong><span>{current.source}</span></figcaption>
        <div className="project-image-selectors" role="group" aria-label={`Choose ${project.title} screenshot`}>
          {screenshots.map((screenshot, screenshotIndex) => (
            <button key={screenshot.src} type="button" aria-pressed={index === screenshotIndex} onClick={() => setIndex(screenshotIndex)}>
              <img src={screenshot.previewSrc} alt="" width={84} height={54} loading="lazy" decoding="async" />
              <span>{screenshot.title}</span>
            </button>
          ))}
        </div>
      </figure>
      {expanded && <Suspense fallback={<p className="preview-loading-toast" role="status">Opening screenshot…</p>}><ProjectImageDialog projectTitle={project.title} screenshots={screenshots} selectedIndex={index} onChange={setIndex} onClose={() => setExpanded(false)} /></Suspense>}
    </>
  );
};
