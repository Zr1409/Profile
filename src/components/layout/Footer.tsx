import { ArrowUp } from 'lucide-react';

export const Footer = () => (
  <footer className="site-footer">
    <div className="site-shell footer-bottom">
      <span>© {new Date().getFullYear()} Tran Van Du</span>
      <a href="#hero">Back to top <ArrowUp size={15} aria-hidden="true" /></a>
    </div>
  </footer>
);
