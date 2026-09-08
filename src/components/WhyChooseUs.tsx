import React from 'react';
import { Shield, Wrench, CheckCircle, FileText, MapPin, Sparkles, HeartHandshake } from 'lucide-react';
import { BUSINESS_INFO } from '../data/solarData';

export const WhyChooseUs: React.FC = () => {
  const trustPillars = [
    {
      title: 'Genuine Tier-1 Solar Products',
      desc: 'We only deploy authentic, BIS-certified Mono PERC and TopCon bifacial solar modules from reputable manufacturers with 25-year linear performance warranties.',
      icon: Shield
    },
    {
      title: 'Monsoon & Cyclone-Resistant Engineering',
      desc: 'Coastal Andhra Pradesh experiences humid sea air and strong seasonal monsoon winds. We use heavy hot-dip galvanized steel structures with stainless steel fasteners.',
      icon: Wrench
    },
    {
      title: 'Comprehensive Safety Earthing',
      desc: 'Safety is non-negotiable. Every Orbit Power Solutions installation includes independent chemical earthing pits for DC, AC, and a dedicated copper lightning arrestor.',
      icon: Sparkles
    },
    {
      title: 'Local Presence & Fast Response',
      desc: `Headquartered locally in Ravulapalem, our technicians are based right in East Godavari. You never have to wait days for customer support or on-site inspections.`,
      icon: MapPin
    },
    {
      title: 'Direct Government Subsidy Assistance',
      desc: 'We assist residential homeowners step-by-step with National Portal registration, Discom meter approvals, and direct benefit transfer (DBT) subsidy disbursement.',
      icon: FileText
    },
    {
      title: 'Transparent, Itemized Pricing',
      desc: 'Zero surprise charges. Our quotations clearly break down panel specifications, inverter capacity, structure type, wiring gauges, and net-metering liaison fees.',
      icon: HeartHandshake
    }
  ];

  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Local Commitment */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider bg-amber-100 px-3 py-1 rounded-full">
              Trust & Craftsmanship
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Why Homeowners & Businesses in East Godavari Rely on Us
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Solar is a 25-year infrastructure investment for your property. We focus on genuine engineering, weather-proof structural integrity, and honest customer advice rather than cutting corners.
            </p>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Discom Net-Metering Liaison</h4>
                  <p className="text-xs text-slate-500">APEPDCL application & testing coordination</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">PM Surya Ghar Yojana Support</h4>
                  <p className="text-xs text-slate-500">Subsidy guidance up to ₹78,000 for homes</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-xs text-slate-500 italic">
                * Note: Orbit Power Solutions provides verified, certified installations following MNRE technical standards. We never make unsubstantiated claims or invent false certifications.
              </p>
            </div>
          </div>

          {/* Right Column: 6 Trust Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {trustPillars.map((pillar, pIdx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  id={`why-choose-pillar-${pIdx}`}
                  className="bg-white p-5 rounded-xl border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-start"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
