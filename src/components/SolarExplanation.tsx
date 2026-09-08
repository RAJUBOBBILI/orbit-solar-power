import React, { useState } from 'react';
import { Sun, ArrowRight, Zap, Battery, Network, ShieldAlert, CheckCircle2, ChevronRight } from 'lucide-react';
import { SYSTEM_COMPONENTS } from '../data/solarData';

export const SolarExplanation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'types' | 'components' | 'how-it-works'>('types');

  const systemComparison = [
    {
      title: 'On-Grid Solar (Grid-Tied)',
      badge: 'Lowest Upfront Cost & Highest ROI',
      desc: 'Connects directly to your APEPDCL electricity meter. You consume solar power during the day, and excess generation is exported to the grid for monetary credits.',
      pros: [
        'Eligible for PM Surya Ghar subsidy (up to ₹78,000 for homes)',
        'Zero battery replacement or maintenance costs',
        'Fastest payback period (typically 3 to 4.5 years)'
      ],
      cons: [
        'Shuts down automatically during power cuts for line-worker safety (islanding protection)'
      ],
      bestFor: 'Homes, schools, shops & offices with stable grid power'
    },
    {
      title: 'Off-Grid Solar (Battery Storage)',
      badge: '100% Grid Independent',
      desc: 'Operates independently from the electricity board. Solar power charges a battery bank (Tubular or LiFePO4) which continuously powers your appliances.',
      pros: [
        'Zero dependence on Discom supply or power cuts',
        'Consistent power supply in rural or remote farm locations',
        'Safeguards sensitive equipment against grid fluctuations'
      ],
      cons: [
        'Higher initial cost due to battery bank',
        'Batteries require eventual replacement after their warranty period'
      ],
      bestFor: 'Farmhouses, remote agricultural pumps & areas with frequent load shedding'
    },
    {
      title: 'Hybrid Solar (Grid + Battery)',
      badge: 'Maximum Reliability',
      desc: 'The complete solution: combines net-metering grid connection with battery backup storage. Excess power is either stored or exported, ensuring 24/7 power.',
      pros: [
        'Zero downtime during power outages (instantaneous switchover)',
        'Net metering bill reduction plus emergency blackout protection',
        'Intelligent power management app monitoring'
      ],
      cons: [
        'Higher investment than standard on-grid systems due to hybrid inverter & batteries'
      ],
      bestFor: 'Clinics, diagnostic centers, commercial offices & homes requiring 24/7 power'
    }
  ];

  return (
    <section id="how-solar-works" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-wider bg-amber-100 px-3 py-1 rounded-full">
            Educational & Technical Transparency
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How Solar Power Works & System Comparison
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Understanding your solar system helps you make the right investment. Here is how photovoltaic technology functions and how on-grid, off-grid, and hybrid systems compare.
          </p>

          {/* Tab buttons */}
          <div className="inline-flex p-1 mt-6 bg-slate-100 rounded-xl border border-slate-200">
            <button
              type="button"
              id="tab-btn-types"
              onClick={() => setActiveTab('types')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                activeTab === 'types'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              On-Grid vs. Off-Grid vs. Hybrid
            </button>
            <button
              type="button"
              id="tab-btn-components"
              onClick={() => setActiveTab('components')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                activeTab === 'components'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              System Components
            </button>
            <button
              type="button"
              id="tab-btn-how-it-works"
              onClick={() => setActiveTab('how-it-works')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                activeTab === 'how-it-works'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Energy Flow Diagram
            </button>
          </div>
        </div>

        {/* Tab 1: System Types Comparison */}
        {activeTab === 'types' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in fade-in duration-200">
            {systemComparison.map((sys, idx) => (
              <div
                key={sys.title}
                id={`system-type-card-${idx}`}
                className="rounded-2xl border border-slate-200 p-6 bg-slate-50 hover:bg-white transition-all flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="inline-block px-2.5 py-1 rounded bg-amber-100 text-amber-800 text-xs font-semibold mb-3">
                    {sys.badge}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {sys.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                    {sys.desc}
                  </p>

                  <div className="space-y-2 mb-4">
                    <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block">
                      Advantages:
                    </span>
                    {sys.pros.map((pro, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{pro}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 mb-4">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                      Considerations:
                    </span>
                    {sys.cons.map((con, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                        <span>{con}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 text-xs text-slate-600">
                  <span className="font-semibold text-slate-800">Recommended for: </span>
                  {sys.bestFor}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: System Components */}
        {activeTab === 'components' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-200">
            {SYSTEM_COMPONENTS.map((comp, idx) => (
              <div
                key={comp.name}
                id={`component-card-${idx}`}
                className="p-5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-amber-400 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold text-sm mb-3">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5">
                  {comp.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {comp.role}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Simple Energy Flow Diagram */}
        {activeTab === 'how-it-works' && (
          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 border border-slate-800 animate-in fade-in duration-200">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h3 className="text-xl font-bold text-white">
                The 4-Stage Rooftop Solar Energy Cycle
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                How sunlight becomes usable household electricity and utility bill savings
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
                  <Sun className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-amber-400 uppercase">Step 1</span>
                <h4 className="font-bold text-sm text-white mt-1">Capture Sunlight</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Solar PV panels absorb sunlight and generate Direct Current (DC) electricity.
                </p>
              </div>

              <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mb-3">
                  <Zap className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-blue-400 uppercase">Step 2</span>
                <h4 className="font-bold text-sm text-white mt-1">Convert to AC</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  The inverter converts DC into safe 230V AC power for your regular appliances.
                </p>
              </div>

              <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-emerald-400 uppercase">Step 3</span>
                <h4 className="font-bold text-sm text-white mt-1">Power Your Home</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Fans, lights, refrigerators, and ACs draw free electricity from solar first.
                </p>
              </div>

              <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center mb-3">
                  <Network className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-purple-400 uppercase">Step 4</span>
                <h4 className="font-bold text-sm text-white mt-1">Net-Meter Export</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Any surplus electricity automatically flows to the Discom grid for bill credits.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
