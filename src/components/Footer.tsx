import React, { useState, useEffect } from 'react';
import { ArrowUp, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [localTime, setLocalTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in Ho Chi Minh City (Asia/Ho_Chi_Minh)
      const formatted = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Ho_Chi_Minh',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }).format(now);
      setLocalTime(`${formatted} (UTC+7)`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/[0.08] bg-charcoal-950 text-ivory-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          {/* Logo & Manifesto */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-ivory-100 font-bold text-base">
              <span className="w-6 h-6 rounded bg-charcoal-850 border border-white/10 flex items-center justify-center text-tech-cyan">
                <Terminal className="w-3.5 h-3.5" />
              </span>
              <span>TRAN VAN DU</span>
              <span className="text-tech-cyan">·</span>
              <span className="text-xs text-ivory-400 font-normal">Fullstack Developer</span>
            </div>
            <p className="text-xs text-ivory-500 max-w-md">
              Engineered with clean architectural principles, minimalist editorial aesthetics, and strict type safety.
            </p>
          </div>

          {/* Local Time in Ho Chi Minh City & Location */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-xs">
            <div className="px-3 py-1.5 rounded-lg bg-charcoal-900 border border-white/[0.06]">
              <span className="text-ivory-500 block text-[10px]">LOCAL TIME IN HCMC</span>
              <span className="text-tech-cyan font-semibold">{localTime || 'HCMC (UTC+7)'}</span>
            </div>

            <button
              onClick={scrollToTop}
              className="px-3 py-1.5 rounded-lg bg-charcoal-900 hover:bg-charcoal-850 border border-white/[0.06] hover:border-white/20 text-ivory-200 transition-colors flex items-center gap-2 focus-ring min-h-[40px]"
              aria-label="Scroll back to top of the page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-tech-cyan" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Bottom copyright & technical specs */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-ivory-500">
          <div>
            © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <span>{PERSONAL_INFO.coordinates}</span>
            <span>·</span>
            <span>Vite + React + TS + Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
