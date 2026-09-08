import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/solarData';
import { ArrowRight, MessageSquare, ClipboardCheck, Sliders, FileText, Wrench, ShieldCheck } from 'lucide-react';

interface HowItWorksProps {
  onOpenQuoteModal: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenQuoteModal }) => {
  const getStepIcon = (stepNumber: number) => {
    switch (stepNumber) {
      case 1:
        return <MessageSquare className="w-5 h-5 text-amber-600" />;
      case 2:
        return <ClipboardCheck className="w-5 h-5 text-amber-600" />;
      case 3:
        return <Sliders className="w-5 h-5 text-amber-600" />;
      case 4:
        return <FileText className="w-5 h-5 text-amber-600" />;
      case 5:
        return <Wrench className="w-5 h-5 text-amber-600" />;
      case 6:
      default:
        return <ShieldCheck className="w-5 h-5 text-amber-600" />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-wider bg-amber-100 px-3 py-1 rounded-full">
            Streamlined Execution
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How It Works: 6 Easy Steps to Solar Energy
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            From your very first enquiry to solar commissioning and net-meter synchronisation, Orbit Power Solutions handles the complete process.
          </p>
        </div>

        {/* 6 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOW_IT_WORKS_STEPS.map((item) => (
            <div
              key={item.step}
              id={`how-it-works-step-${item.step}`}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
                    {getStepIcon(item.step)}
                  </div>
                  <span className="text-2xl font-black text-slate-200">
                    0{item.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-amber-700">
                Phase 0{item.step} of 06
              </div>
            </div>
          ))}
        </div>

        {/* Action strip */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={onOpenQuoteModal}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm shadow-md transition-all"
          >
            <span>Start Step 1 — Book a Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
