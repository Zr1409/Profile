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
    <div className="w-full rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 shadow-card font-sans">
      {/* App Bar */}
      <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-200 dark:border-slate-800 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xs">
            M
          </div>
          <span className="font-bold text-sm tracking-tight text-slate-900 dark:text-white">MinLish</span>
          <span className="px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-[11px] font-mono border border-blue-200 dark:border-blue-800">
            SM-2 ACTIVE
          </span>
        </div>
        <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 text-xs">
          <span className="hidden sm:inline font-mono">Streak: 14d</span>
          <span className="text-blue-600 dark:text-blue-400 font-semibold">84/120 Reviewed</span>
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
        className="relative group cursor-pointer min-h-[210px] sm:min-h-[230px] rounded-xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 p-5 sm:p-6 flex flex-col justify-between transition-all hover:border-blue-400 dark:hover:border-blue-600 shadow-sm focus-ring select-none"
      >
        <div className="flex items-start justify-between">
          <span className="text-[10px] font-mono uppercase tracking-wider text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded border border-blue-200 dark:border-blue-800">
            {flipped ? 'TRANSLATION & CONTEXT' : 'TARGET VOCABULARY'}
          </span>
          <div className="flex items-center gap-1 text-xs text-slate-400 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            <RotateCw className="w-3.5 h-3.5" />
            <span className="text-xs">Click to flip</span>
          </div>
        </div>

        {!flipped ? (
          <div className="my-auto py-3 text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <h4 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                resilient
              </h4>
              <button 
                onClick={handlePronounce}
                className="p-1.5 rounded-full hover:bg-white dark:hover:bg-slate-700 text-blue-600 dark:text-blue-400 transition-colors focus-ring"
                aria-label="Listen to pronunciation of resilient"
                title="Pronounce resilient"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
            <div className="text-xs text-slate-400 dark:text-slate-500 font-mono">/rɪˈzɪl.jənt/ · adjective</div>
            <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 italic max-w-md mx-auto font-sans">
              "The distributed system architecture is highly resilient against network partition failures."
            </p>
          </div>
        ) : (
          <div className="my-auto py-3 text-center animate-fade-in">
            <h4 className="text-xl sm:text-2xl font-bold text-blue-700 dark:text-blue-300 mb-2">
              Có khả năng phục hồi nhanh chóng
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto font-sans">
              Able to withstand or recover quickly from difficult conditions, failures, or disruptions.
            </p>
            <div className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="px-2 py-0.5 rounded bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600">Synonym: robust</span>
              <span className="px-2 py-0.5 rounded bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600">CEFR: C1</span>
            </div>
          </div>
        )}

        {/* Algorithm Metrics footer */}
        <div className="pt-2.5 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs font-mono text-slate-400 dark:text-slate-500">
          <span>Repetition: 3</span>
          <span className="text-blue-600 dark:text-blue-400 font-semibold">Interval: +6 days</span>
          <span>Easiness: 2.50</span>
        </div>
      </div>

      {/* SM-2 Feedback Buttons */}
      <div className="mt-3 grid grid-cols-4 gap-2 text-center text-xs">
        {[
          { label: 'Again', time: '<1 min', color: 'hover:border-red-300 hover:bg-red-50 dark:hover:bg-red-950/40 text-red-600 dark:text-red-400' },
          { label: 'Hard', time: '1 day', color: 'hover:border-amber-300 hover:bg-amber-50 dark:hover:bg-amber-950/40 text-amber-600 dark:text-amber-400' },
          { label: 'Good', time: '6 days', color: 'hover:border-blue-300 hover:bg-blue-50 dark:hover:bg-blue-950/40 text-blue-600 dark:text-blue-400' },
          { label: 'Easy', time: '14 days', color: 'hover:border-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400' },
        ].map((btn, idx) => (
          <button
            key={btn.label}
            onClick={() => setSelectedGrade(idx)}
            aria-pressed={selectedGrade === idx}
            aria-label={`Mark recall as ${btn.label}, next in ${btn.time}`}
            className={`py-2 px-1 rounded-lg border transition-all focus-ring ${
              selectedGrade === idx
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/60 font-bold text-blue-700 dark:text-blue-300'
                : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300'
            } ${btn.color}`}
          >
            <div className="text-xs font-semibold">{btn.label}</div>
            <div className="text-[10px] opacity-75 font-mono">{btn.time}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

/* 02. TalentHub Freelancer Platform Mockup */
const TalentHubMockup: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 shadow-card font-sans">
      {/* App Bar */}
      <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-200 dark:border-slate-800 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xs">
            TH
          </div>
          <span className="font-bold text-sm tracking-tight text-slate-900 dark:text-white">TalentHub</span>
          <span className="px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-[11px] font-mono border border-blue-200 dark:border-blue-800 flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-emerald-500" />
            2FA AUTH
          </span>
        </div>
        <div className="text-slate-500 dark:text-slate-400 text-xs">
          <span className="text-emerald-600 dark:text-emerald-400 font-medium">● Employer Portal</span>
        </div>
      </div>

      {/* Main Job Listing Card */}
      <div className="rounded-xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 p-4 mb-3">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            <div className="text-xs font-mono text-slate-400 dark:text-slate-500">JOB #8204 · FULLSTACK DEV</div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white tracking-tight mt-0.5">
              Spring Boot & React Developer for FinTech Portal
            </h4>
          </div>
          <span className="px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-mono text-xs font-semibold whitespace-nowrap border border-emerald-200 dark:border-emerald-800">
            $1,200 - $1,800
          </span>
        </div>

        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
          Seeking a developer with hands-on experience in Spring Boot, Spring Security JWT authentication, and React interfaces.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-2.5">
          {['Spring Boot', 'Spring Security', 'React', 'MySQL', 'REST API'].map((tag) => (
            <span key={tag} className="text-[11px] font-mono px-2 py-0.5 rounded bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Applicant Proposal & AI Assistant Drawer */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {/* Applicant item */}
        <div className="p-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-xs font-bold text-blue-600 dark:text-blue-400">
              VD
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-white">Van Du Tran</div>
              <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">98% Skill Match</div>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-[10px] text-slate-600 dark:text-slate-300">
            Interview Set
          </span>
        </div>

        {/* AI Assistant Chat preview */}
        <div className="p-3 rounded-lg bg-blue-50/80 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800/80 flex items-start gap-2">
          <Bot className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
          <div className="text-[11px] text-blue-900 dark:text-blue-200 leading-snug">
            <span className="text-blue-700 dark:text-blue-300 font-semibold block">AI Screening Bot:</span>
            "Candidate matches Spring Security & relational JPA requirements."
          </div>
        </div>
      </div>
    </div>
  );
};

/* 03. BookNest Bookstore with GHN Logistics Mockup */
const BookNestMockup: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 shadow-card font-sans">
      {/* App Bar */}
      <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-200 dark:border-slate-800 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xs">
            BN
          </div>
          <span className="font-bold text-sm tracking-tight text-slate-900 dark:text-white">BookNest</span>
          <span className="px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-[11px] font-mono border border-emerald-200 dark:border-emerald-800">
            LOGISTICS LIVE
          </span>
        </div>
        <div className="text-slate-500 dark:text-slate-400 text-xs font-mono">
          <span>Order #BN-9021</span>
        </div>
      </div>

      {/* Book Item Card */}
      <div className="rounded-xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 p-4 mb-3">
        <div className="flex items-start gap-3.5">
          <div className="w-12 h-16 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center p-1 text-center shrink-0 shadow-sm">
            <span className="text-[7px] font-mono text-blue-600 dark:text-blue-400 font-bold">SYSTEMS</span>
            <span className="text-[8px] font-bold text-slate-900 dark:text-white leading-tight mt-1">CLEAN ARCH</span>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white truncate">
                  Clean Architecture: A Craftsman's Guide
                </h4>
                <div className="text-xs text-slate-400 dark:text-slate-500 font-sans">Robert C. Martin · Software Eng</div>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 shrink-0">295,000 VND</span>
            </div>

            {/* GHN Shipping Tracker Strip */}
            <div className="mt-2.5 p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-medium">
                  <Truck className="w-3.5 h-3.5 shrink-0" />
                  <span>GHN Tracking: GHN88294</span>
                </span>
                <span className="text-emerald-600 dark:text-emerald-400 text-xs font-medium">In Transit</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                <div className="bg-blue-600 dark:bg-blue-500 h-full w-3/4 rounded-full"></div>
              </div>
              <div className="flex justify-between text-[10px] text-slate-400 dark:text-slate-400 mt-1 font-sans">
                <span>Warehouse (HCMC)</span>
                <span>Sorting Center</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-medium">Out for Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gemini AI Recommendation Bar */}
      <div className="p-3 rounded-lg bg-blue-50/80 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800/80 flex items-start gap-2.5">
        <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
        <div className="text-[11px] text-blue-900 dark:text-blue-200 leading-snug">
          <span className="text-blue-700 dark:text-blue-300 font-semibold">Gemini AI Book Assistant: </span>
          "Readers who studied Clean Architecture also found value in 'Designing Data-Intensive Applications'."
        </div>
      </div>
    </div>
  );
};
