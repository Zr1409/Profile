import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Check, Copy, Download, MapPin, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GitHubIcon } from '../components/icons/GitHubIcon';
import { LinkedInIcon } from '../components/icons/LinkedInIcon';

export const Contact = () => {
  const gmailComposeUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(PERSONAL_INFO.email);
  const [copyStatus, setCopyStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copyEmail = async () => {
    window.clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopyStatus('success');
      timer.current = window.setTimeout(() => setCopyStatus('idle'), 3000);
    } catch {
      setCopyStatus('error');
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="contact-section">
      <div className="site-shell">
        <div className="contact-layout" data-scroll-reveal="split">
          <div className="contact-intro" data-reveal-item data-reveal-from="left">
            <h2 id="contact-heading" data-reveal-title>Let's talk</h2>
            <p className="contact-pitch" data-reveal-copy>Looking for a Java or Fullstack developer? Let's talk about your team and what we could build together.</p>
            <div className="contact-email-row" data-reveal-copy>
              <a href={gmailComposeUrl} target="_blank" rel="noopener noreferrer" className="contact-email-link" aria-label={'Write to ' + PERSONAL_INFO.email + ' in Gmail (opens in a new tab)'}>
                {PERSONAL_INFO.email}<ArrowUpRight size={20} aria-hidden="true" />
              </a>
              <button type="button" className="copy-email" onClick={copyEmail} aria-label={copyStatus === 'success' ? 'Email copied' : 'Copy email address'}>
                {copyStatus === 'success' ? <Check size={17} aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}
              </button>
            </div>
            <p className="copy-status" role="status">{copyStatus === 'success' ? 'Email address copied.' : copyStatus === 'error' ? 'Could not copy. Please select the email above.' : ''}</p>
          </div>
          <div className="contact-resources" data-reveal-item data-reveal-from="right">
            <p className="contact-resource-label">Find me online</p>
            <nav className="contact-channels" aria-label="Professional profiles">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="contact-channel"><GitHubIcon className="contact-channel-icon" /><span>GitHub</span><ArrowUpRight size={17} aria-hidden="true" /></a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="contact-channel"><LinkedInIcon /><span>LinkedIn</span><ArrowUpRight size={17} aria-hidden="true" /></a>
            </nav>
            <a href={PERSONAL_INFO.cvPath} download className="contact-cv">Download CV <Download size={17} aria-hidden="true" /></a>
          </div>
        </div>
        <address className="contact-meta">
          <a href="tel:+84358768117"><Phone size={17} aria-hidden="true" />{PERSONAL_INFO.displayPhone}</a>
          <span><MapPin size={17} aria-hidden="true" />{PERSONAL_INFO.location}</span>
        </address>
      </div>
    </section>
  );
};
