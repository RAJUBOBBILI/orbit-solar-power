import React from 'react';
import { Phone, MessageCircle, ArrowRight, ShieldCheck, Zap, Award, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/solarData';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="home" className="relative bg-gradient-to-b from-slate-900 via-[#0a2540] to-slate-900 text-white pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      {/* Background Subtle Solar Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-amber-400 text-xs sm:text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>Solar Installation in East Godavari & Konaseema, AP</span>
            </div>

            {/* Clear Primary H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Professional Rooftop Solar Solutions for Homes & Businesses in Andhra Pradesh
            </h1>

            {/* Descriptive, non-vague supporting paragraph */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Orbit Power Solutions designs and installs high-efficiency On-Grid, Off-Grid, and Hybrid solar energy systems. 
              Reduce monthly electricity bills by up to 90%, secure Central Government subsidies under PM Surya Ghar Muft Bijli Yojana, and obtain end-to-end APEPDCL net-metering approvals.
            </p>

            {/* Core Direct CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                type="button"
                id="hero-free-quote-cta"
                onClick={onOpenQuoteModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-amber-500/20 transition-all transform active:scale-95"
              >
                <span>Get a Free Solar Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(BUSINESS_INFO.whatsappPrefill)}`}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-cta"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm sm:text-base shadow-sm transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone1Raw}`}
                id="hero-call-cta"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg border border-slate-600 hover:border-slate-400 bg-slate-800/60 text-slate-200 hover:text-white font-semibold text-sm sm:text-base transition-all"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call: {BUSINESS_INFO.phone1}</span>
              </a>
            </div>

            {/* Trust bullet checkpoints */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>PM Surya Ghar Subsidy Assistance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Discom Net-Metering Liaison</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Tier-1 Panels with 25-Yr Warranty</span>
              </div>
            </div>

          </div>

          {/* Right Image / Trust Card Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-800">
              {/* High-quality solar panel installation image */}
              <img
                src="https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1000&q=80"
                alt="Orbit Power Solutions rooftop solar panel installation in Andhra Pradesh"
                className="w-full h-80 sm:h-96 object-cover"
                loading="eager"
                width={1000}
                height={750}
              />

              {/* Floating verified badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-700 flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-1.5 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Local Engineering & Support</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Based in Ravulapalem, serving East Godavari & Konaseema
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-xs text-slate-400 block">Subsidy up to</span>
                  <span className="text-base font-bold text-emerald-400">₹78,000*</span>
                </div>
              </div>
            </div>

            {/* Small floating stat pill */}
            <div className="hidden sm:flex absolute -top-4 -right-4 bg-amber-500 text-slate-950 px-4 py-2 rounded-xl shadow-lg font-bold text-xs items-center gap-2 border border-amber-400">
              <Zap className="w-4 h-4 text-slate-950 fill-current" />
              <span>Up to 90% Bill Reduction</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
