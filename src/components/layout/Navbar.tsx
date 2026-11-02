import React, { useEffect, useRef, useState } from 'react';
import { ArrowDownToLine, ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { useTheme } from '../../context/ThemeContext';
import { Logo } from './Logo';
import { GitHubIcon } from '../icons/GitHubIcon';

interface NavbarProps {
  activeSection: string;
}

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const brandLinkRef = useRef<HTMLAnchorElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 1001px)');
    const closeOnDesktop = () => {
      if (desktopQuery.matches) setOpen(false);
    };
    desktopQuery.addEventListener('change', closeOnDesktop);
    return () => desktopQuery.removeEventListener('change', closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const pageRegions = Array.from(document.querySelectorAll<HTMLElement>('main, footer'));
    const previousInert = pageRegions.map((region) => region.inert);
    pageRegions.forEach((region) => { region.inert = true; });

    const focusableElements = () => Array.from(
      mobileMenuRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex="0"]') ?? [],
    );

    const focusFrame = window.requestAnimationFrame(() => {
      mobileMenuRef.current?.querySelector<HTMLAnchorElement>('.mobile-nav-links a')?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setOpen(false);
      }
      if (event.key !== 'Tab') return;
      const focusable = focusableElements();
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const keepFocusInMenu = (event: FocusEvent) => {
      if (!mobileMenuRef.current?.contains(event.target as Node)) {
        focusableElements()[0]?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('focusin', keepFocusInMenu);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      pageRegions.forEach((region, index) => { region.inert = previousInert[index]; });
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('focusin', keepFocusInMenu);
      const returnTarget = menuButtonRef.current?.getClientRects().length
        ? menuButtonRef.current
        : brandLinkRef.current;
      returnTarget?.focus({ preventScroll: true });
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-nav">
      <div className="nav-inner site-shell">
        <a ref={brandLinkRef} href="#hero" aria-label={`${PERSONAL_INFO.name}, home`} className="brand-link nav-brand">
          <Logo />
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'location' : undefined}
                className="nav-link"
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        <div className="nav-actions">
          <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="nav-github" aria-label="View GitHub profile (opens in a new tab)">
            <GitHubIcon className="nav-github-mark" /><span>GitHub</span><ArrowUpRight className="nav-external-arrow" size={16} aria-hidden="true" />
          </a>
          <button type="button" onClick={toggleTheme} className="nav-icon" aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
            {theme === 'dark' ? <Sun size={19} aria-hidden="true" /> : <Moon size={19} aria-hidden="true" />}
          </button>
          <button
            ref={menuButtonRef}
            type="button"
            className="nav-menu-button"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            aria-controls="mobile-navigation"
            aria-haspopup="dialog"
            aria-expanded={open}
          >
            <Menu size={23} aria-hidden="true" />
          </button>
        </div>
      </div>
        {open && (
          <div
            ref={mobileMenuRef}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="mobile-nav"
          >
            <div className="mobile-nav-inner site-shell">
              <div className="mobile-nav-header">
                <a href="#hero" onClick={closeMenu} className="brand-link mobile-nav-brand" aria-label={`${PERSONAL_INFO.name}, home`}>
                  <Logo />
                </a>
                <button type="button" className="nav-icon dialog-close" onClick={closeMenu} aria-label="Close navigation menu">
                  <X size={23} aria-hidden="true" />
                </button>
              </div>

              <nav className="mobile-nav-links" aria-label="Mobile navigation">
                {NAV_LINKS.map((link) => (
                  <a key={link.href} href={link.href} onClick={closeMenu} aria-current={activeSection === link.href.slice(1) ? 'location' : undefined}>
                    <span>{link.name}</span>
                    <ArrowUpRight size={23} aria-hidden="true" />
                  </a>
                ))}
              </nav>

              <div className="mobile-nav-footer">
                <a href={PERSONAL_INFO.github} className="text-link" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>GitHub <ArrowUpRight size={17} aria-hidden="true" /></a>
                <a href={PERSONAL_INFO.cvPath} download className="button button-primary" onClick={closeMenu}>Download CV <ArrowDownToLine size={17} aria-hidden="true" /></a>
              </div>
              <p className="mobile-nav-location">{PERSONAL_INFO.location}</p>
            </div>
          </div>
        )}
    </header>
  );
};
