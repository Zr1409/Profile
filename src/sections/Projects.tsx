import { lazy, Suspense, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectGallery } from '../components/media/ProjectGallery';
import type { Project } from '../types/portfolio';

const loadCaseStudy = () => import('../components/dialogs/CaseStudyDialog');
const preloadCaseStudy = () => { void loadCaseStudy().catch(() => {}); };
const CaseStudyDialog = lazy(() => loadCaseStudy().then(module => ({ default: module.CaseStudyDialog })));

const MAIN_TECHNOLOGIES = ['Java', 'Spring Boot', 'React', 'TypeScript', 'MySQL', 'AngularJS', 'SQL Server'];

export const Projects = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" aria-labelledby="projects-heading" className="section work-section">
      <div className="site-shell">
        <div className="section-intro" data-heading-reveal>
          <h2 id="projects-heading">Selected work</h2>
          <p data-reveal-copy>Fullstack applications, from data and APIs to the user interface.</p>
        </div>
        <div className="project-list">
          {PROJECTS.map(project => (
            <article key={project.id} className={`project-row${project.id === 'talenthub' ? ' project-row-reversed' : ''}`} aria-labelledby={`project-${project.id}-title`} data-scroll-reveal="split">
              <div className={`project-preview preview-${project.id}`} data-reveal-item>
                <ProjectGallery project={project} />
              </div>
              <div className="project-content" data-reveal-item>
                <p className="project-category">{project.category}</p>
                <h3 id={`project-${project.id}-title`}>{project.title}</h3>
                <p className="project-summary">{project.summary}</p>
                {!!project.highlights?.length && <ul className="project-highlights" aria-label={`${project.title} highlights`}>
                  {project.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}
                </ul>}
                <div className="project-meta">
                  {project.timeline && <span>{project.timeline}</span>}
                  {project.teamSize && <span>{project.teamSize}</span>}
                </div>
                <div className="project-role"><span>My role</span><p>{project.role.split(' · ').join(', ')}</p></div>
                <ul className="project-tech" aria-label={`${project.title} main technologies`}>
                  {project.techStack.filter(tech => MAIN_TECHNOLOGIES.includes(tech)).map(tech => <li key={tech}>{tech}</li>)}
                </ul>
                <div className="project-links">
                  <button type="button" className="text-link case-study-link" aria-haspopup="dialog" onPointerEnter={preloadCaseStudy} onFocus={preloadCaseStudy} onClick={() => setSelected(project)}>
                    View case study<span className="sr-only">: {project.title}</span> <ArrowUpRight size={16} aria-hidden="true" />
                  </button>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-link" aria-label={`${project.title} on GitHub`}>
                    GitHub <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                  {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-link">
                    Live demo <ArrowUpRight size={15} aria-hidden="true" />
                  </a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      {selected && (
        <Suspense fallback={<p className="preview-loading-toast" role="status">Opening case study…</p>}>
          <CaseStudyDialog project={selected} onClose={() => setSelected(null)} />
        </Suspense>
      )}
    </section>
  );
};
