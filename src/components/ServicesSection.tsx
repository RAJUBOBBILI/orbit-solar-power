import React from 'react';
import { Home, Building2, BatteryCharging, Zap, Droplets, CheckCircle2, ArrowRight, Check } from 'lucide-react';
import { SOLAR_SERVICES } from '../data/solarData';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return <Home className="w-5 h-5 text-amber-600" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-amber-600" />;
      case 'BatteryCharging':
        return <BatteryCharging className="w-5 h-5 text-amber-600" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-600" />;
      case 'Droplets':
        return <Droplets className="w-5 h-5 text-amber-600" />;
      case 'CheckCircle2':
      default:
        return <CheckCircle2 className="w-5 h-5 text-amber-600" />;
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-wider bg-amber-100 px-3 py-1 rounded-full">
            Our Core Solar Offerings
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Solar Power Services by Orbit Power Solutions
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            From residential rooftops to high-capacity industrial plants and agricultural water pumps, we provide end-to-end engineering, installation, and Discom liaison in Andhra Pradesh.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SOLAR_SERVICES.map((service) => (
            <article
              key={service.id}
              id={`service-card-${service.id}`}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={`${service.title} by Orbit Power Solutions`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    width={600}
                    height={350}
                  />
                  <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md text-amber-400 text-xs font-semibold px-2.5 py-1 rounded-md">
                    {service.capacityRange}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center shrink-0">
                      {getIcon(service.icon)}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 leading-snug">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Key Benefits List */}
                  <div className="space-y-2 pt-2 border-t border-slate-100 mb-4">
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wide block">
                      Key Highlights:
                    </span>
                    {service.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Ideal For Badge */}
                  <div className="bg-slate-50 p-3 rounded-lg text-xs text-slate-600 mb-2">
                    <span className="font-semibold text-slate-800">Ideal for: </span>
                    {service.idealFor}
                  </div>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  id={`btn-quote-service-${service.id}`}
                  onClick={() => onSelectServiceForQuote(service.title)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white text-sm font-semibold transition-colors shadow-sm"
                >
                  <span>Request Quote for this Solution</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
