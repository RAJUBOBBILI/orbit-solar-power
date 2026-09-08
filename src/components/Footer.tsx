import React from 'react';
import { Sun, Phone, Mail, MapPin, MessageCircle, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO, SOLAR_SERVICES } from '../data/solarData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Company Identity (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-amber-500/20">
                <Sun className="w-6 h-6 text-slate-950" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white leading-tight">
                  Orbit <span className="text-amber-500">Power</span> Solutions
                </span>
                <span className="text-[11px] text-slate-400">
                  Solar Energy Specialists • Andhra Pradesh
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Orbit Power Solutions (Orbit Enterprises) provides professional rooftop solar installations, agricultural solar water pumps, and Discom net-metering services across East Godavari and coastal Andhra Pradesh.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p><strong className="text-slate-300">Office:</strong> {BUSINESS_INFO.address.fullFormatted}</p>
              <p><strong className="text-slate-300">Hours:</strong> {BUSINESS_INFO.hours}</p>
            </div>
          </div>

          {/* Quick Links (Col 5-6) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Solar Solutions</a></li>
              <li><a href="#how-solar-works" className="hover:text-amber-400 transition-colors">How Solar Works</a></li>
              <li><a href="#calculator" className="hover:text-amber-400 transition-colors">Savings Calculator</a></li>
              <li><a href="#projects" className="hover:text-amber-400 transition-colors">Recent Projects</a></li>
              <li><a href="#why-choose-us" className="hover:text-amber-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#solar-guides" className="hover:text-amber-400 transition-colors">Solar Guides</a></li>
              <li><a href="#faq" className="hover:text-amber-400 transition-colors">FAQs</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Solar Services (Col 7-9) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Solar Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SOLAR_SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-amber-400 transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Local Areas (Col 10-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Reach Orbit Power
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href={`tel:${BUSINESS_INFO.phone1Raw}`}
                className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>{BUSINESS_INFO.phone1}</span>
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phone2Raw}`}
                className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>{BUSINESS_INFO.phone2}</span>
              </a>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(BUSINESS_INFO.whatsappPrefill)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                <span>WhatsApp: {BUSINESS_INFO.whatsapp}</span>
              </a>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>{BUSINESS_INFO.email}</span>
              </a>
            </div>

            <div className="pt-3">
              <span className="text-[11px] font-bold text-slate-300 block mb-1">Service Coverage:</span>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Ravulapalem, Rajahmundry, Kakinada, Amalapuram, Mandapeta, Tanuku, Razole, Ramachandrapuram, and all surrounding East Godavari & Konaseema districts.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Orbit Power Solutions (Orbit Enterprises). All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
              XML Sitemap
            </a>
            <a href="/robots.txt" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
              Robots.txt
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
