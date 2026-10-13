import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const scrollToTop = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-charcoal-950/90 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-2xl'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Status */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              onClick={scrollToTop}
              aria-label="Tran Van Du Portfolio - Back to top"
              className="group flex items-center gap-2.5 font-mono text-lg font-bold tracking-tight text-ivory-100 transition-colors focus-ring rounded-lg p-1"
            >
              <span className="w-8 h-8 rounded-lg bg-charcoal-850 border border-white/10 flex items-center justify-center text-tech-cyan group-hover:border-tech-cyan/50 transition-colors">
                <Terminal className="w-4 h-4" />
              </span>
              <span className="tracking-tighter text-xl">DU<span className="text-tech-cyan">.</span></span>
            </a>

            <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-full bg-charcoal-900 border border-white/[0.08] text-xs font-mono text-ivory-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tech-lime opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-tech-lime"></span>
              </span>
              <span>Available for Hire</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 bg-charcoal-900/60 p-1.5 rounded-full border border-white/[0.08] backdrop-blur-sm"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative px-4 py-1.5 text-xs font-mono uppercase tracking-wider rounded-full transition-all duration-200 focus-ring ${
                    isActive
                      ? 'text-ivory-100 font-semibold bg-white/[0.08]'
                      : 'text-ivory-400 hover:text-ivory-200 hover:bg-white/[0.03]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 border border-tech-cyan/40 rounded-full pointer-events-none"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub Profile (opens in new tab)"
              className="p-2 rounded-lg bg-charcoal-850 hover:bg-charcoal-800 border border-white/10 hover:border-white/20 text-ivory-300 hover:text-white transition-all focus-ring"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-tech-cyan text-charcoal-950 font-mono text-xs font-semibold tracking-wide hover:bg-white transition-all shadow-sm focus-ring"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub Profile (opens in new tab)"
              className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg bg-charcoal-850 border border-white/10 text-ivory-300 focus-ring"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg bg-charcoal-850 border border-white/10 text-ivory-200 hover:text-white focus-ring"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-b border-white/[0.08] bg-charcoal-950/98 backdrop-blur-xl"
          >
            <div className="max-w-7xl mx-auto px-4 py-5 space-y-3">
              <div className="flex items-center gap-2 pb-3 mb-2 border-b border-white/[0.06] text-xs font-mono text-tech-lime">
                <span className="w-2 h-2 rounded-full bg-tech-lime animate-ping"></span>
                <span>Available for Full-time Roles</span>
              </div>

              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  aria-current={activeSection === link.href.substring(1) ? 'page' : undefined}
                  className={`block px-3 py-3 rounded-lg text-sm font-mono tracking-wider min-h-[44px] flex items-center focus-ring ${
                    activeSection === link.href.substring(1)
                      ? 'bg-tech-cyan/10 text-tech-cyan font-bold border-l-2 border-tech-cyan'
                      : 'text-ivory-300 hover:bg-white/[0.04]'
                  }`}
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-3 border-t border-white/[0.06] flex gap-3">
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-tech-cyan text-charcoal-950 font-mono text-xs font-bold min-h-[44px] focus-ring"
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
