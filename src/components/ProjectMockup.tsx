import React, { useState, useCallback } from 'react';
import { 
  Sparkles, 
  Volume2, 
  RotateCw, 
  ShieldCheck, 
  Truck, 
  Bot 
} from 'lucide-react';

interface ProjectMockupProps {
  projectId: string;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ projectId }) => {
  if (projectId === 'minlish') {
    return <MinlishMockup />;
  }
  if (projectId === 'talenthub') {
    return <TalentHubMockup />;
  }
  return <BookNestMockup />;
};

/* 01. MinLish Interactive Flashcard & SM-2 Mockup */
const MinlishMockup: React.FC = () => {
  const [flipped, setFlipped] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState<number | null>(2);

  const handlePronounce = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance('resilient');
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  }, []);

  const handleToggleFlip = () => {
    setFlipped(prev => !prev);
  };

  return (
    <div className="w-full rounded-2xl bg-charcoal-900 border border-white/10 p-4 sm:p-5 text-ivory-100 shadow-xl overflow-hidden font-sans">
      {/* App Bar */}
      <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/[0.08] text-xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-tech-cyan/20 border border-tech-cyan/40 flex items-center justify-center text-tech-cyan font-bold text-xs">
            M
          </div>
          <span className="font-bold text-sm tracking-tight text-white">MinLish</span>
          <span className="px-2 py-0.5 rounded-full bg-tech-cyan/10 text-tech-cyan text-[10px] font-mono border border-tech-cyan/20">
            SM-2 ACTIVE
          </span>
        </div>
        <div className="flex items-center gap-3 text-ivory-400 font-mono text-[11px]">
          <span className="hidden sm:inline">Streak: 🔥 14d</span>
          <span className="text-tech-lime">84/120 Done</span>
        </div>
      </div>

      {/* Main Flashcard */}
      <div 
        role="button"
        tabIndex={0}
        aria-label={`Vocabulary flashcard. Front: resilient. Click or press Enter to flip. Currently showing ${flipped ? 'Vietnamese translation' : 'English term'}.`}
        onClick={handleToggleFlip}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleToggleFlip();
          }
        }}
        className="relative group cursor-pointer min-h-[220px] sm:min-h-[240px] rounded-xl bg-charcoal-850/90 border border-white/[0.08] p-5 sm:p-6 flex flex-col justify-between transition-all hover:border-tech-cyan/40 hover:shadow-lg focus-ring select-none"
      >
        <div className="flex items-start justify-between">
          <span className="text-[10px] font-mono uppercase tracking-widest text-tech-cyan bg-tech-cyan/10 px-2 py-0.5 rounded border border-tech-cyan/20">
            {flipped ? 'DEFINITION & CONTEXT' : 'TARGET VOCABULARY'}
          </span>
          <div className="flex items-center gap-1.5 text-xs text-ivory-400 group-hover:text-tech-cyan transition-colors">
            <RotateCw className="w-3.5 h-3.5" />
            <span className="text-[11px] font-mono">Click to flip</span>
          </div>
        </div>

        {!flipped ? (
          <div className="my-auto py-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <h4 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                resilient
              </h4>
              <button 
                onClick={handlePronounce}
                className="p-1.5 rounded-full hover:bg-white/10 text-tech-cyan transition-colors focus-ring"
                aria-label="Listen to pronunciation of resilient"
                title="Pronounce resilient"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
            <div className="font-mono text-xs text-ivory-400">/rɪˈzɪl.jənt/ · adjective</div>
            <p className="mt-3 text-xs sm:text-sm text-ivory-300 italic max-w-md mx-auto">
              "The distributed microservice architecture is highly resilient against network partition failures."
            </p>
          </div>
        ) : (
          <div className="my-auto py-4 text-center animate-fade-in">
            <h4 className="text-xl sm:text-2xl font-bold text-tech-lime mb-2">
              Có khả năng phục hồi nhanh chóng
            </h4>
            <p className="text-xs text-ivory-300 max-w-md mx-auto">
              Able to withstand or recover quickly from difficult conditions, failures, or disruptions.
            </p>
            <div className="mt-3 flex items-center justify-center gap-2 text-[11px] font-mono text-ivory-400">
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5">Synonym: robust</span>
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5">CEFR: C1</span>
            </div>
          </div>
        )}

        {/* Algorithm Metrics footer */}
        <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-ivory-500">
          <span>Repetition: 3</span>
          <span className="text-tech-cyan">Interval: +6 days</span>
          <span>Easiness: 2.50</span>
        </div>
      </div>

      {/* SM-2 Feedback Buttons */}
      <div className="mt-3.5 grid grid-cols-4 gap-2 text-center text-xs font-mono">
        {[
          { label: 'Again', time: '<1 min', color: 'hover:border-red-500/50 hover:bg-red-500/10 text-red-400' },
          { label: 'Hard', time: '1 day', color: 'hover:border-amber-500/50 hover:bg-amber-500/10 text-amber-400' },
          { label: 'Good', time: '6 days', color: 'hover:border-blue-500/50 hover:bg-blue-500/10 text-blue-400' },
          { label: 'Easy', time: '14 days', color: 'hover:border-tech-lime/50 hover:bg-tech-lime/10 text-tech-lime' },
        ].map((btn, idx) => (
          <button
            key={btn.label}
            onClick={() => setSelectedGrade(idx)}
            aria-pressed={selectedGrade === idx}
            aria-label={`Mark recall quality as ${btn.label}, schedule review in ${btn.time}`}
            className={`py-2 px-1 rounded-lg border transition-all focus-ring ${
              selectedGrade === idx
                ? 'border-white/40 bg-white/10 font-bold'
                : 'border-white/[0.06] bg-charcoal-850/50'
            } ${btn.color}`}
          >
            <div className="text-[11px] font-semibold">{btn.label}</div>
            <div className="text-[9px] opacity-75">{btn.time}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

/* 02. TalentHub Freelancer Platform Mockup */
const TalentHubMockup: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-charcoal-900 border border-white/10 p-4 sm:p-5 text-ivory-100 shadow-xl overflow-hidden font-sans">
      {/* App Bar */}
      <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/[0.08] text-xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-bold text-xs">
            TH
          </div>
          <span className="font-bold text-sm tracking-tight text-white">TalentHub</span>
          <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-mono border border-blue-500/20 flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-tech-lime" />
            2FA VERIFIED
          </span>
        </div>
        <div className="flex items-center gap-2 text-ivory-400 font-mono text-[11px]">
          <span className="text-tech-lime">● Employer Portal</span>
        </div>
      </div>

      {/* Main Job Listing Card */}
      <div className="rounded-xl bg-charcoal-850/90 border border-white/[0.08] p-4 sm:p-5 mb-3.5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            <div className="text-xs font-mono text-ivory-400">JOB #8204 · FULLSTACK DEV</div>
            <h4 className="text-base sm:text-lg font-bold text-white tracking-tight mt-0.5">
              Spring Boot & React Developer for FinTech Portal
            </h4>
          </div>
          <span className="px-2.5 py-1 rounded-md bg-tech-lime/10 text-tech-lime font-mono text-xs font-semibold border border-tech-lime/20 whitespace-nowrap">
            $1,200 - $1,800
          </span>
        </div>

        <p className="text-xs text-ivory-300 leading-relaxed line-clamp-2">
          Seeking a developer with hands-on experience in Spring Boot, Spring Security JWT authentication, and React interfaces.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {['Spring Boot', 'Spring Security', 'React', 'MySQL', 'REST API'].map((tag) => (
            <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-charcoal-900 text-ivory-300 border border-white/[0.05]">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Applicant Proposal & AI Assistant Drawer */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Applicant item */}
        <div className="p-3 rounded-lg bg-charcoal-850/60 border border-white/[0.06] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-tech-cyan/20 border border-tech-cyan/30 flex items-center justify-center font-mono text-xs text-tech-cyan font-bold">
              VD
            </div>
            <div>
              <div className="text-xs font-bold text-white">Van Du Tran</div>
              <div className="text-[10px] font-mono text-tech-lime">98% Skill Match · Verified</div>
            </div>
          </div>
          <span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-ivory-200">
            Interview Scheduled
          </span>
        </div>

        {/* AI Assistant Chat preview */}
        <div className="p-3 rounded-lg bg-blue-950/20 border border-blue-500/20 flex items-start gap-2">
          <Bot className="w-4 h-4 text-tech-cyan shrink-0 mt-0.5" />
          <div className="text-[11px] text-ivory-300 leading-snug">
            <span className="text-tech-cyan font-semibold block">AI Screening Bot:</span>
            "Candidate has strong Spring Security & relational JPA background. Recommended for technical round."
          </div>
        </div>
      </div>
    </div>
  );
};

/* 03. BookNest Bookstore with GHN Logistics Mockup */
const BookNestMockup: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-charcoal-900 border border-white/10 p-4 sm:p-5 text-ivory-100 shadow-xl overflow-hidden font-sans">
      {/* App Bar */}
      <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/[0.08] text-xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold text-xs">
            BN
          </div>
          <span className="font-bold text-sm tracking-tight text-white">BookNest</span>
          <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-mono border border-emerald-500/20">
            LOGISTICS LIVE
          </span>
        </div>
        <div className="flex items-center gap-2 text-ivory-400 font-mono text-[11px]">
          <span>Order #BN-9021</span>
        </div>
      </div>

      {/* Book Item Card */}
      <div className="rounded-xl bg-charcoal-850/90 border border-white/[0.08] p-4 sm:p-5 mb-3.5">
        <div className="flex items-start gap-3.5">
          <div className="w-14 h-20 rounded bg-charcoal-900 border border-white/10 flex flex-col items-center justify-center p-1 text-center shrink-0">
            <span className="text-[8px] font-mono text-tech-cyan">SYSTEMS</span>
            <span className="text-[9px] font-bold text-white leading-tight mt-1">CLEAN ARCH</span>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <h4 className="text-sm sm:text-base font-bold text-white truncate">
                  Clean Architecture: A Craftsman's Guide
                </h4>
                <div className="text-xs font-mono text-ivory-400">Robert C. Martin · Software Eng</div>
              </div>
              <span className="text-xs font-mono font-bold text-tech-lime shrink-0">295,000 VND</span>
            </div>

            {/* GHN Shipping Tracker Strip */}
            <div className="mt-3 p-2.5 rounded-lg bg-charcoal-900/80 border border-white/[0.06]">
              <div className="flex items-center justify-between text-[11px] font-mono mb-1.5">
                <span className="flex items-center gap-1.5 text-tech-cyan">
                  <Truck className="w-3.5 h-3.5 shrink-0" />
                  <span>GHN Express Tracking: GHN88294</span>
                </span>
                <span className="text-tech-lime font-medium">In Transit</span>
              </div>
              <div className="w-full bg-charcoal-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-tech-cyan to-tech-lime h-full w-3/4 rounded-full"></div>
              </div>
              <div className="flex justify-between text-[9px] font-mono text-ivory-500 mt-1">
                <span>Warehouse (HCMC)</span>
                <span>Sorting Center</span>
                <span className="text-tech-lime">Out for Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gemini AI Recommendation Bar */}
      <div className="p-3 rounded-lg bg-charcoal-850/60 border border-purple-500/20 flex items-start gap-2.5">
        <Sparkles className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
        <div className="text-[11px] text-ivory-300 leading-snug">
          <span className="text-purple-300 font-semibold">Gemini AI Book Assistant: </span>
          "Readers who purchased Clean Architecture also found high value in 'Designing Data-Intensive Applications'."
        </div>
      </div>
    </div>
  );
};
