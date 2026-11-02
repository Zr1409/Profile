import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from 'lucide-react';
import type { CertificateDocument } from '../../types/portfolio';
import { useDialogMotion } from '../../hooks/useDialogMotion';

interface CertificateDialogProps {
  certificates: CertificateDocument[];
  selectedIndex: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
}

export const CertificateDialog: React.FC<CertificateDialogProps> = ({ certificates, selectedIndex, onClose, onChange }) => {
  const { closing, requestClose } = useDialogMotion(onClose);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const isOpen = selectedIndex !== null;
  const certificate = selectedIndex === null ? null : certificates[selectedIndex];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!isOpen || !dialog) return;

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
  }, [isOpen]);

  const navigate = (direction: number) => {
    if (selectedIndex !== null && certificates.length > 1) {
      onChange((selectedIndex + direction + certificates.length) % certificates.length);
    }
  };

  return createPortal(
    <dialog
      ref={dialogRef}
      className="certificate-dialog dialog-surface"
      data-dialog-state={closing ? 'closing' : 'open'}
      aria-labelledby={certificate ? 'certificate-dialog-title' : undefined}
      onCancel={(event) => { event.preventDefault(); requestClose(); }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) requestClose();
      }}
      onKeyDown={(event) => {
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
      }}
    >
      {certificate && (
        <>
          <div className="certificate-dialog-toolbar">
            <div><span className="eyebrow">{certificate.issuer}</span><h2 id="certificate-dialog-title">{certificate.title}</h2></div>
            <button ref={closeRef} type="button" className="certificate-dialog-button certificate-dialog-close dialog-close" onClick={requestClose} aria-label="Close certificate"><X size={22} aria-hidden="true" /></button>
          </div>
          <div className="certificate-dialog-image"><img src={certificate.previewSrc} alt={`${certificate.title} original certificate`} width={1100} height={825} /></div>
          <div className="certificate-dialog-footer">
            <div className="certificate-dialog-pagination">
              <button type="button" className="certificate-dialog-button" onClick={() => navigate(-1)} aria-label="Previous certificate" disabled={certificates.length < 2}><ArrowLeft size={20} aria-hidden="true" /></button>
              <span aria-live="polite" aria-atomic="true">{selectedIndex! + 1} / {certificates.length}</span>
              <button type="button" className="certificate-dialog-button" onClick={() => navigate(1)} aria-label="Next certificate" disabled={certificates.length < 2}><ArrowRight size={20} aria-hidden="true" /></button>
            </div>
            <a href={certificate.pdfSrc} className="text-link" target="_blank" rel="noopener noreferrer" aria-label="Open original certificate PDF (opens in a new tab)">Open original PDF <ArrowUpRight size={17} aria-hidden="true" /></a>
          </div>
        </>
      )}
    </dialog>,
    document.body,
  );
};
