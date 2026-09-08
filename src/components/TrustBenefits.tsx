import React from 'react';
import { ShieldCheck, Wrench, Cpu, Headset, Sliders } from 'lucide-react';
import { QUICK_BENEFITS } from '../data/solarData';

export const TrustBenefits: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-amber-600" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-amber-600" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-amber-600" />;
      case 'Headset':
        return <Headset className="w-6 h-6 text-amber-600" />;
      case 'Sliders':
      default:
        return <Sliders className="w-6 h-6 text-amber-600" />;
    }
  };

  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Why Customers Choose Orbit Power Solutions
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Engineered specifically for Andhra Pradesh’s climate, high humidity, and local Discom net-metering standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {QUICK_BENEFITS.map((benefit, index) => (
            <div
              key={benefit.title}
              id={`trust-benefit-card-${index}`}
              className="bg-slate-50 hover:bg-white rounded-xl p-5 border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center mb-4">
                  {getIcon(benefit.icon)}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
