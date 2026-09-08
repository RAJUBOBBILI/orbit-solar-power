import React from 'react';
import { Star, Quote, MapPin, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/solarData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-wider bg-amber-100 px-3 py-1 rounded-full">
            Customer Experience
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What Our Solar Clients Say
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Real feedback from homeowners and local business proprietors across East Godavari and Konaseema who made the switch to solar with Orbit Power Solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((testimonial) => (
            <div
              key={testimonial.id}
              id={`testimonial-card-${testimonial.id}`}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-200" />
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{testimonial.reviewText}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">
                      {testimonial.clientName}
                    </h4>
                    <div className="flex items-center gap-1 text-xs text-slate-500 mt-0.5">
                      <MapPin className="w-3 h-3 text-amber-600 shrink-0" />
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-medium bg-amber-50 text-amber-800 px-2 py-1 rounded border border-amber-200/60">
                    {testimonial.systemSize}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transparency Disclaimer Note */}
        <div className="mt-10 max-w-2xl mx-auto p-4 rounded-xl bg-white border border-slate-200 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>
            Verified customer experiences from recent residential and commercial installations. We do not fabricate or alter customer reviews.
          </span>
        </div>

      </div>
    </section>
  );
};
