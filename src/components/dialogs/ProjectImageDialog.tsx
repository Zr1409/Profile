import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from 'lucide-react';
import type { ProjectScreenshot } from '../../types/portfolio';
import { useDialogMotion } from '../../hooks/useDialogMotion';

interface Props {
  projectTitle: string;
  screenshots: ProjectScreenshot[];
  selectedIndex: number;
  onChange: (index: number) => void;
  onClose: () => void;
}

export const ProjectImageDialog = ({ projectTitle, screenshots, selectedIndex, onChange, onClose }: Props) => {
  const { closing, requestClose } = useDialogMotion(onClose);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const current = screenshots[selectedIndex];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.showModal();
    closeRef.current?.focus({ preventScroll: true });
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      if (previousFocus?.isConnected) previousFocus.focus({ preventScroll: true });
    };
  }, []);

  const navigate = (direction: number) => onChange((selectedIndex + direction + screenshots.length) % screenshots.length);

  return createPortal(
    <dialog ref={dialogRef} className="project-image-dialog dialog-surface" data-dialog-state={closing ? 'closing' : 'open'} aria-labelledby="project-image-dialog-title"
      onCancel={event => { event.preventDefault(); requestClose(); }}
      onClick={event => {
        if (event.target !== event.currentTarget) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) requestClose();
      }}
      onKeyDown={event => {
        if (event.key === 'Tab') {
          const focusable = Array.from(event.currentTarget.querySelectorAll<HTMLElement>('button:not([disabled]), a[href], [tabindex="0"]'))
            .filter(element => element.getClientRects().length > 0);
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          if (first && last && event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
          } else if (first && last && !event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
          }
          return;
        }
        if (event.altKey || event.ctrlKey || event.metaKey) return;
        if (event.key === 'ArrowLeft') { event.preventDefault(); navigate(-1); }
        if (event.key === 'ArrowRight') { event.preventDefault(); navigate(1); }
      }}>
      <header className="project-image-dialog-toolbar">
        <div><span>{projectTitle}</span><h2 id="project-image-dialog-title">{current.title}</h2></div>
        <button ref={closeRef} type="button" className="certificate-dialog-button dialog-close" aria-label="Close project screenshot" onClick={requestClose}><X size={22} aria-hidden="true" /></button>
      </header>
      <div className="project-image-dialog-stage"><img src={current.src} alt={current.alt} width={current.width} height={current.height} /></div>
      <footer className="project-image-dialog-footer">
        <div className="certificate-dialog-pagination">
          <button type="button" className="certificate-dialog-button" aria-label="Previous project screenshot" onClick={() => navigate(-1)}><ArrowLeft size={19} aria-hidden="true" /></button>
          <span aria-live="polite" aria-atomic="true">{selectedIndex + 1} / {screenshots.length}</span>
          <button type="button" className="certificate-dialog-button" aria-label="Next project screenshot" onClick={() => navigate(1)}><ArrowRight size={19} aria-hidden="true" /></button>
        </div>
        <a className="text-link" href={current.src} target="_blank" rel="noopener noreferrer">Open image <ArrowUpRight size={16} aria-hidden="true" /></a>
      </footer>
    </dialog>, document.body,
  );
};
