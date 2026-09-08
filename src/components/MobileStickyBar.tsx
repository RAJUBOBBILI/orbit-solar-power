import React from 'react';
import { Phone, MessageCircle, FileText } from 'lucide-react';
import { BUSINESS_INFO } from '../data/solarData';

interface MobileStickyBarProps {
  onOpenQuoteModal: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenQuoteModal }) => {
  return (
    <>
      {/* Floating WhatsApp Bubble for Desktop & Tablet */}
      <a
        href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(BUSINESS_INFO.whatsappPrefill)}`}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="fixed bottom-20 md:bottom-8 right-5 z-40 w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-emerald-400"
        aria-label="Chat with Orbit Power Solutions on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="hidden group-hover:inline-block absolute right-16 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg">
          Chat on WhatsApp
        </span>
      </a>

      {/* Sticky Bottom Action Bar for Mobile (< 768px) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 px-3 py-2 shadow-2xl safe-area-pb">
        <div className="grid grid-cols-3 gap-2">
          {/* Call Now */}
          <a
            href={`tel:${BUSINESS_INFO.phone1Raw}`}
            id="mobile-sticky-call"
            className="flex flex-col items-center justify-center min-h-[44px] py-1.5 px-1 rounded-xl bg-slate-100 text-slate-800 font-semibold text-xs active:bg-slate-200 transition-colors"
          >
            <Phone className="w-4 h-4 text-amber-600 mb-0.5" />
            <span>Call Now</span>
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(BUSINESS_INFO.whatsappPrefill)}`}
            target="_blank"
            rel="noopener noreferrer"
            id="mobile-sticky-whatsapp"
            className="flex flex-col items-center justify-center min-h-[44px] py-1.5 px-1 rounded-xl bg-emerald-600 text-white font-semibold text-xs active:bg-emerald-700 transition-colors"
          >
            <MessageCircle className="w-4 h-4 mb-0.5" />
            <span>WhatsApp</span>
          </a>

          {/* Free Quote */}
          <button
            type="button"
            id="mobile-sticky-quote"
            onClick={onOpenQuoteModal}
            className="flex flex-col items-center justify-center min-h-[44px] py-1.5 px-1 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs active:bg-amber-600 transition-colors"
          >
            <FileText className="w-4 h-4 mb-0.5" />
            <span>Free Quote</span>
          </button>
        </div>
      </div>
    </>
  );
};
