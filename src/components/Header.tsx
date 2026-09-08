import React, { useState, useEffect } from 'react';
import { Sun, Phone, MessageCircle, Menu, X, MapPin, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/solarData';

interface HeaderProps {
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'How Solar Works', href: '#how-solar-works' },
    { label: 'Savings Calculator', href: '#calculator' },
    { label: 'Projects', href: '#projects' },
    { label: 'Why Choose Us', href: '#why-choose-us' },
    { label: 'FAQs', href: '#faq' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top Notification / Contact Bar */}
      <div className="bg-[#071a2e] text-slate-200 text-xs py-2 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Ravulapalem, East Godavari, AP</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Mon - Sat: 9 AM - 7 PM</span>
            </span>
          </div>

          <div className="flex items-center gap-4 font-medium">
            <a
              href={`tel:${BUSINESS_INFO.phone1Raw}`}
              id="header-call-top"
              className="flex items-center gap-1.5 text-slate-200 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call: {BUSINESS_INFO.phone1}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(BUSINESS_INFO.whatsappPrefill)}`}
              target="_blank"
              rel="noopener noreferrer"
              id="header-whatsapp-top"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-white py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" id="navbar-logo" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-white shadow-sm shadow-amber-500/30 group-hover:scale-105 transition-transform">
              <Sun className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 leading-tight">
                Orbit <span className="text-amber-600">Power</span> Solutions
              </span>
              <span className="text-[11px] font-medium text-slate-500 tracking-wide">
                Solar Energy Systems • Andhra Pradesh
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-amber-600 transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              id="nav-get-quote-btn"
              onClick={onOpenQuoteModal}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold text-sm shadow-sm hover:shadow transition-all active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              Get a Free Quote
            </button>

            {/* Mobile Hamburger */}
            <button
              type="button"
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="flex flex-col gap-2 py-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-amber-50 hover:text-amber-700 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                type="button"
                id="mobile-nav-quote-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 rounded-lg bg-amber-500 text-slate-950 font-semibold text-center text-sm shadow-sm"
              >
                Get a Free Solar Quote
              </button>

              <div className="grid grid-cols-2 gap-2 mt-1">
                <a
                  href={`tel:${BUSINESS_INFO.phone1Raw}`}
                  id="mobile-nav-call"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg border border-slate-200 bg-slate-50 text-slate-800 text-sm font-medium"
                >
                  <Phone className="w-4 h-4 text-amber-600" />
                  Call Now
                </a>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(BUSINESS_INFO.whatsappPrefill)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="mobile-nav-whatsapp"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-emerald-600 text-white text-sm font-medium"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
