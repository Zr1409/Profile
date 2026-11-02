import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ArrowUpRight, CalendarDays, Users, Wrench, X } from 'lucide-react';
import { GitHubIcon } from '../icons/GitHubIcon';
import { Project } from '../../types/portfolio';
import { useDialogMotion } from '../../hooks/useDialogMotion';

interface CaseStudyDialogProps { project: Project | null; onClose: () => void }

export const CaseStudyDialog: React.FC<CaseStudyDialogProps> = ({ project, onClose }) => {
  const { closing, requestClose } = useDialogMotion(onClose);
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLElement>(null);
  const onCloseRef = useRef(requestClose);

  useEffect(() => {
    onCloseRef.current = requestClose;
  }, [requestClose]);

  useEffect(() => {
    if (!project) return;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    const appRoot = document.getElementById('root');
    const previousInert = appRoot?.inert ?? false;

    const focusableElements = () => Array.from(dialogRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    ) ?? []).filter((element) => element.getClientRects().length > 0);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onCloseRef.current();
        return;
      }
      if (event.key !== 'Tab') return;
      const elements = focusableElements();
      const first = elements[0];
      const last = elements[elements.length - 1];
      if (!first) {
        event.preventDefault();
        dialogRef.current?.focus();
        return;
      }
      if (!dialogRef.current?.contains(document.activeElement)) {
        event.preventDefault();
        (event.shiftKey ? last : first).focus();
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const keepFocusInDialog = (event: FocusEvent) => {
      if (event.target instanceof Node && !dialogRef.current?.contains(event.target)) {
        closeRef.current?.focus({ preventScroll: true });
      }
    };

    document.body.style.overflow = 'hidden';
    if (appRoot) appRoot.inert = true;
    window.addEventListener('keydown', onKeyDown, true);
    document.addEventListener('focusin', keepFocusInDialog);
    closeRef.current?.focus({ preventScroll: true });
    return () => {
      document.body.style.overflow = previousOverflow;
      if (appRoot) appRoot.inert = previousInert;
      window.removeEventListener('keydown', onKeyDown, true);
      document.removeEventListener('focusin', keepFocusInDialog);
      if (previousFocus?.isConnected) previousFocus.focus({ preventScroll: true });
    };
  }, [project]);

  return createPortal(
      project && <div key={project.id} className="case-overlay" data-dialog-state={closing ? 'closing' : 'open'} role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) requestClose(); }}>
        <article ref={dialogRef} className="case-modal dialog-surface" data-dialog-state={closing ? 'closing' : 'open'} role="dialog" aria-modal="true" aria-labelledby="case-study-title" aria-describedby="case-study-summary" tabIndex={-1}>
          <button ref={closeRef} type="button" className="case-close dialog-close" onClick={requestClose} aria-label="Close case study"><X size={20} aria-hidden="true" /></button>
          <div className="case-kicker">{project.category}</div>
          <h2 id="case-study-title">{project.title}</h2>
          <p className="case-subtitle">{project.subtitle}</p>
          <div className="case-section"><h3>Overview</h3><p id="case-study-summary" className="case-summary">{project.summary}</p></div>
          <div className="case-facts">
            <div><span>Role</span><strong>{project.role.split(' · ').join(', ')}</strong></div>
            {project.teamSize && <div><span>TEAM</span><strong><Users size={14} aria-hidden="true" /> {project.teamSize}</strong></div>}
            {project.timeline && <div><span>TIMELINE</span><strong><CalendarDays size={14} aria-hidden="true" /> {project.timeline}</strong></div>}
          </div>
          {project.context && <section className="case-section"><h3>Problem & context</h3><p>{project.context}</p></section>}
          {project.contributions && <section className="case-section"><h3>My role & contributions</h3><ul>{project.contributions.map(item => <li key={item}>{item}</li>)}</ul></section>}
          <section className="case-section"><h3>Main workflows</h3><ul>{project.keyFeatures.map((feature) => <li key={feature}>{feature}</li>)}</ul></section>
          {project.workflows && <section className="case-section"><h3>User journeys</h3><div className="case-workflows">{project.workflows.map(workflow => <div key={workflow.title}><h4>{workflow.title}</h4><ol>{workflow.steps.map(step => <li key={step}>{step}</li>)}</ol></div>)}</div></section>}
          {!!project.architectureHighlights?.length && <section className="case-section"><h3>Technical approach</h3><div className="case-architecture">{project.architectureHighlights.map((item) => <div key={item.layer}><span>{item.layer}</span><p>{item.details}</p></div>)}</div></section>}
          {project.challengeAndSolution && <section className="case-section"><h3><Wrench size={16} /> Challenge & solution</h3><div className="case-challenge"><p><strong>Challenge</strong>{project.challengeAndSolution.challenge}</p><p><strong>Solution</strong>{project.challengeAndSolution.solution}</p></div></section>}
          <section className="case-section"><h3>Technology</h3><div className="case-tech">{project.techStack.map((tech) => <span key={tech}>{tech}</span>)}</div></section>
          <div className="case-actions"><a href={project.githubUrl} target="_blank" rel="noreferrer"><GitHubIcon className="w-4 h-4" /> GitHub <ArrowUpRight size={14} /></a>{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={14} /></a>}</div>
        </article>
      </div>,
    document.body
  );
};
