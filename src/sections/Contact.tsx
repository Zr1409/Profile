import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, MapPin, FileDown, Copy, Check, ArrowUpRight, Send, ShieldCheck } from 'lucide-react';
import { GithubIcon } from '../components/GithubIcon';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [copiedTemplate, setCopiedTemplate] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const copyFormattedMessage = () => {
    const textToCopy = `To: ${PERSONAL_INFO.email}
Subject: Inquiry from ${formData.name || 'Recruiter'}
Sender: ${formData.name || 'Recruiter'} (${formData.email || 'Not provided'})

${formData.message || 'Hi Du, I reviewed your portfolio and would like to discuss an opportunity.'}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedTemplate(true);
    setTimeout(() => setCopiedTemplate(false), 3000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) return;
    const subject = encodeURIComponent(`Opportunity / Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Du,\n\n${formData.message}\n\n---\nSender: ${formData.name}\nContact Email: ${formData.email || 'Not provided'}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 6000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative border-t border-white/[0.06] bg-tech-grid/20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="// 06"
          tag="Get In Touch"
          title="Have a project or opportunity in mind? Let's talk."
          description="I am actively interviewing for Fresher Fullstack / Backend Developer positions in Ho Chi Minh City or remote setups."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Details & Direct Actions (Left) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Direct Cards */}
            <div className="space-y-3">
              {/* Email Card with Copy Trigger */}
              <div className="p-5 rounded-2xl bg-charcoal-900 border border-white/[0.08] flex items-center justify-between gap-4 card-surface-hover">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="p-2.5 rounded-xl bg-charcoal-850 border border-white/10 text-tech-cyan shrink-0">
                    <Mail className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-mono text-ivory-500 block">DIRECT EMAIL</span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-base sm:text-lg font-bold text-ivory-100 hover:text-tech-cyan transition-colors truncate block focus-ring rounded"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  aria-label="Copy email address to clipboard"
                  className="p-2.5 rounded-xl bg-charcoal-850 hover:bg-charcoal-800 text-ivory-400 hover:text-white border border-white/10 transition-all flex items-center gap-1.5 font-mono text-xs focus-ring min-h-[44px] shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-tech-lime" aria-hidden="true" />
                      <span className="text-tech-lime text-[11px] hidden sm:inline">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" aria-hidden="true" />
                      <span className="text-[11px] hidden sm:inline">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-5 rounded-2xl bg-charcoal-900 border border-white/[0.08] flex items-center gap-3.5 card-surface-hover">
                <div className="p-2.5 rounded-xl bg-charcoal-850 border border-white/10 text-tech-lime shrink-0">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-mono text-ivory-500 block">PHONE / ZALO</span>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    aria-label={`Call or Zalo message Tran Van Du at ${PERSONAL_INFO.phone}`}
                    className="text-base sm:text-lg font-bold text-ivory-100 hover:text-tech-lime transition-colors font-mono focus-ring rounded"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-5 rounded-2xl bg-charcoal-900 border border-white/[0.08] flex items-center gap-3.5 card-surface-hover">
                <div className="p-2.5 rounded-xl bg-charcoal-850 border border-white/10 text-amber-400 shrink-0">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-mono text-ivory-500 block">BASE LOCATION</span>
                  <span className="text-base font-bold text-ivory-100">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Main Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex-1 min-w-[160px] py-3.5 px-5 rounded-xl bg-tech-cyan text-charcoal-950 font-mono text-xs font-bold tracking-wide hover:bg-white transition-all flex items-center justify-center gap-2 shadow-lg shadow-tech-cyan/10 focus-ring min-h-[44px]"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                <span>Send an Email</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>

              <a
                href={PERSONAL_INFO.cvPath}
                download="CV_TRAN_VAN_DU.pdf"
                aria-label="Download official CV PDF"
                className="flex-1 min-w-[160px] py-3.5 px-5 rounded-xl bg-charcoal-850 hover:bg-charcoal-800 border border-white/10 hover:border-tech-lime/50 text-ivory-100 font-mono text-xs font-semibold tracking-wide transition-all flex items-center justify-center gap-2 focus-ring min-h-[44px]"
              >
                <FileDown className="w-4 h-4 text-tech-lime" aria-hidden="true" />
                <span>Download CV (PDF)</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 min-w-[44px] min-h-[44px] rounded-xl bg-charcoal-850 hover:bg-charcoal-800 border border-white/10 hover:border-white/20 text-ivory-300 hover:text-white transition-all flex items-center justify-center focus-ring"
                aria-label="GitHub Profile (opens in new tab)"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Note / Recruiter Contact Form (Right) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-charcoal-900 border border-white/[0.08] shadow-2xl"
          >
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.06]">
              <div>
                <h3 className="text-lg font-bold text-ivory-100">Direct Message Composer</h3>
                <p className="text-xs font-mono text-ivory-400 mt-0.5">
                  Pre-fills your mail client directly to tranvandu1409@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-tech-lime/10 border border-tech-lime/20 text-[11px] font-mono text-tech-lime">
                <ShieldCheck className="w-3 h-3" />
                <span>Zero Tracking</span>
              </div>
            </div>

            <form onSubmit={handleSendMessage} className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-mono uppercase text-ivory-400 mb-1.5">
                  Your Name / Organization <span className="text-tech-cyan">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="e.g. Talent Acquisition / Engineering Lead"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-charcoal-850 border border-white/10 text-sm text-ivory-100 placeholder:text-ivory-600 transition-colors focus-ring"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-mono uppercase text-ivory-400 mb-1.5">
                  Your Email Address <span className="text-tech-cyan">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="e.g. recruiter@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-charcoal-850 border border-white/10 text-sm text-ivory-100 placeholder:text-ivory-600 transition-colors focus-ring"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono uppercase text-ivory-400 mb-1.5">
                  Message / Role Scope <span className="text-tech-cyan">*</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  placeholder="Briefly describe the role, tech stack, or interview invitation..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-charcoal-850 border border-white/10 text-sm text-ivory-100 placeholder:text-ivory-600 transition-colors resize-none focus-ring"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-2 pt-1">
                <button
                  type="submit"
                  className="flex-1 py-3 px-4 rounded-xl bg-tech-cyan text-charcoal-950 font-mono text-xs font-bold tracking-wide hover:bg-white transition-all flex items-center justify-center gap-2 shadow-md shadow-tech-cyan/10 focus-ring min-h-[44px]"
                >
                  <Send className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Open in Mail Client</span>
                </button>

                <button
                  type="button"
                  onClick={copyFormattedMessage}
                  className="py-3 px-4 rounded-xl bg-charcoal-850 hover:bg-charcoal-800 border border-white/10 text-ivory-300 hover:text-white font-mono text-xs transition-all flex items-center justify-center gap-1.5 focus-ring min-h-[44px]"
                  title="Copy formatted email text to clipboard"
                >
                  {copiedTemplate ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-tech-lime" />
                      <span className="text-tech-lime">Text Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Text</span>
                    </>
                  )}
                </button>
              </div>

              {formSubmitted && (
                <div className="p-3 rounded-lg bg-tech-lime/10 border border-tech-lime/30 text-xs text-tech-lime font-mono text-center">
                  Mail client launched with prefilled message! (Sent directly to tranvandu1409@gmail.com)
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
