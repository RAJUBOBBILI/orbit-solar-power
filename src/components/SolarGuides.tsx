import React, { useState } from 'react';
import { BookOpen, Clock, ChevronRight, CheckCircle2 } from 'lucide-react';
import { SOLAR_GUIDES_DATA } from '../data/solarData';

export const SolarGuides: React.FC = () => {
  const [selectedGuideId, setSelectedGuideId] = useState<string | null>(null);

  return (
    <section id="solar-guides" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-wider bg-amber-100 px-3 py-1 rounded-full">
            Knowledge Hub & Guides
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Solar Resources & Educational Guides
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Helpful, human-first guides written for Andhra Pradesh homeowners and commercial property managers.
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SOLAR_GUIDES_DATA.map((guide) => (
            <article
              key={guide.id}
              id={`solar-guide-${guide.id}`}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="bg-amber-100 text-amber-800 font-semibold px-2.5 py-0.5 rounded">
                    {guide.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{guide.readTime}</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {guide.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {guide.excerpt}
                </p>

                <div className="space-y-2 pt-3 border-t border-slate-200/70">
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                    Key Highlights:
                  </span>
                  {guide.keyPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-200">
                <a
                  href="#calculator"
                  className="text-xs font-bold text-amber-700 hover:text-amber-800 inline-flex items-center gap-1"
                >
                  <span>Calculate requirements for this setup</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
