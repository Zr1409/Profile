import { useCallback, useEffect, useRef, useState } from 'react';

// Keep in sync with the 160ms dialog exit animation in index.css.
const EXIT_DURATION = 160;

/** Keep focus and modality in place until the closing animation finishes. */
export function useDialogMotion(onClose: () => void) {
  const [closing, setClosing] = useState(false);
  const closingRef = useRef(false);
  const callbackRef = useRef(onClose);
  const timerRef = useRef<number | undefined>(undefined);

  useEffect(() => { callbackRef.current = onClose; }, [onClose]);
  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  const requestClose = useCallback(() => {
    if (closingRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      callbackRef.current();
      return;
    }
    closingRef.current = true;
    setClosing(true);
    timerRef.current = window.setTimeout(() => callbackRef.current(), EXIT_DURATION);
  }, []);

  return { closing, requestClose };
}
