import React from 'react';
import { Phone, MessageCircle, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { BUSINESS_INFO } from '../data/solarData';

interface FinalCTAProps {
  onOpenQuoteModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-slate-950 via-[#0a2540] to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <Zap className="w-3.5 h-3.5 fill-current" />
          <span>Cut Your Power Bill This Month</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Ready to Switch to Solar Power?
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Book a free site survey in Ravulapalem, Rajahmundry, Kakinada, or anywhere across East Godavari & Konaseema. Get an honest quotation with PM Surya Ghar subsidy guidance.
        </p>

        {/* 3 High-Impact Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            id="final-cta-quote"
            onClick={onOpenQuoteModal}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm sm:text-base shadow-xl shadow-amber-500/20 transition-all transform active:scale-95"
          >
            <span>Get Free Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(BUSINESS_INFO.whatsappPrefill)}`}
            target="_blank"
            rel="noopener noreferrer"
            id="final-cta-whatsapp"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-lg transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp Us</span>
          </a>

          <a
            href={`tel:${BUSINESS_INFO.phone1Raw}`}
            id="final-cta-call"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-600 bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-sm sm:text-base transition-all"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>Call: {BUSINESS_INFO.phone1}</span>
          </a>
        </div>

        {/* Reassurance text */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Zero Obligation Site Feasibility</span>
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Prompt Local Engineering Support</span>
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span>APEPDCL Net-Metering Process Handled</span>
          </span>
        </div>

      </div>
    </section>
  );
};
