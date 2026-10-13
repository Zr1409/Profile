import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, MapPin, Download, Copy, Check, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../components/GithubIcon';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedTemplate, setCopiedTemplate] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyTemplate = () => {
    const template = `Hello Tran Van Du,

I reviewed your portfolio and would like to discuss an opportunity regarding a Fullstack / Backend Developer role.

Company: 
Position: 
Tech Stack: 

Best regards,`;
    navigator.clipboard.writeText(template);
    setCopiedTemplate(true);
    setTimeout(() => setCopiedTemplate(false), 3000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative border-t border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-[#080C14] scroll-mt-24 overflow-hidden bg-ambient-spotlight">
      {/* Ambient background light orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-500/5 dark:bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          number="06"
          tag="Get In Touch"
          title="Have an opportunity or project in mind? Let's talk."
          description="I am actively interviewing for Fresher Fullstack / Backend Developer positions in Ho Chi Minh City or remote setups."
        />

        {/* 2-Column Clean Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Direct Channels */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-6 space-y-4"
          >
            {/* Direct Email Card with Copy Trigger */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 card-glow hover:border-blue-400/80 dark:hover:border-blue-600/80 transition-all">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 shrink-0 border border-blue-200 dark:border-blue-800 shadow-sm">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-mono text-slate-400 dark:text-slate-400 block uppercase tracking-wider text-[11px]">Direct Email</span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-base font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors truncate block focus-ring rounded"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                aria-label="Copy email address to clipboard"
                className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700 transition-colors flex items-center gap-1.5 text-xs font-medium focus-ring min-h-[38px] shrink-0"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                    <span className="text-emerald-600 dark:text-emerald-400 text-xs font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" aria-hidden="true" />
                    <span className="text-xs">Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Phone / Zalo Card */}
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-3.5 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all">
              <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 shrink-0 border border-slate-200 dark:border-slate-700">
                <Phone className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 dark:text-slate-400 block uppercase tracking-wider text-[11px]">Phone / Zalo</span>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  aria-label={`Call or Zalo message Tran Van Du at ${PERSONAL_INFO.phone}`}
                  className="text-base font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-sans focus-ring rounded"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-3.5 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all">
              <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800 text-amber-600 dark:text-amber-400 shrink-0 border border-slate-200 dark:border-slate-700">
                <MapPin className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 dark:text-slate-400 block uppercase tracking-wider text-[11px]">Base Location</span>
                <span className="text-base font-semibold text-slate-900 dark:text-white">
                  {PERSONAL_INFO.location}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Direct Engagement Actions */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="lg:col-span-6 p-7 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 card-glow space-y-6"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                Ready to Connect
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-1.5 font-sans leading-relaxed">
                Whether you have an opening for a Fresher Fullstack role, a technical inquiry, or want to review my complete background, feel free to reach out.
              </p>
            </div>

            {/* Main Action Buttons */}
            <div className="space-y-3 pt-1">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-full py-3 px-5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors flex items-center justify-center gap-2 shadow-sm focus-ring min-h-[44px]"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                <span>Send an Email</span>
                <ArrowUpRight className="w-4 h-4 opacity-80" aria-hidden="true" />
              </a>

              <a
                href={PERSONAL_INFO.cvPath}
                download="CV_TRAN_VAN_DU.pdf"
                aria-label="Download official CV PDF"
                className="w-full py-3 px-5 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 text-sm font-medium transition-colors flex items-center justify-center gap-2 shadow-sm focus-ring min-h-[44px]"
              >
                <Download className="w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                <span>Download CV (PDF)</span>
              </a>

              <div className="flex gap-2.5 pt-1">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-xs font-medium transition-colors flex items-center justify-center gap-2 focus-ring min-h-[40px]"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Visit GitHub Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyTemplate}
                  className="py-2.5 px-3.5 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-xs font-medium transition-colors flex items-center justify-center gap-1.5 focus-ring min-h-[40px]"
                  title="Copy email template for recruiter outreach"
                >
                  {copiedTemplate ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400">Template Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Inquiry Template</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
