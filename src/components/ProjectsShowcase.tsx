import React, { useState } from 'react';
import { MapPin, Zap, Calendar, Check, ExternalLink } from 'lucide-react';
import { PROJECTS_DATA } from '../data/solarData';

interface ProjectsShowcaseProps {
  onOpenQuoteModal: () => void;
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ onOpenQuoteModal }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'Residential', 'Commercial', 'Agricultural', 'Industrial'];

  const filteredProjects = selectedFilter === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.type === selectedFilter);

  return (
    <section id="projects" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider bg-amber-100 px-3 py-1 rounded-full">
              Installation Portfolio
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Recent Solar Projects in Andhra Pradesh
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-2xl">
              Representative rooftop and agricultural solar installations across East Godavari, Kakinada, Rajahmundry, and Konaseema regions.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                id={`filter-projects-${cat.toLowerCase()}`}
                onClick={() => setSelectedFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedFilter === cat
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              id={`project-card-${project.id}`}
              className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-52 w-full overflow-hidden bg-slate-200">
                  <img
                    src={project.image}
                    alt={`${project.title} - Orbit Power Solutions`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    width={600}
                    height={400}
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-md flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>{project.capacity}</span>
                  </div>
                  <div className="absolute top-3 right-3 bg-amber-500 text-slate-950 text-xs font-bold px-2.5 py-1 rounded-md">
                    {project.type}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-amber-700 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {project.savingsHighlights && (
                    <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-100 text-xs text-emerald-800 font-medium flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{project.savingsHighlights}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={onOpenQuoteModal}
                  className="text-xs font-bold text-amber-700 hover:text-amber-800 inline-flex items-center gap-1 group/btn"
                >
                  <span>Inquire for Similar Capacity</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Project Disclaimer Box */}
        <div className="mt-12 p-4 rounded-xl bg-slate-50 border border-slate-200 text-center text-xs text-slate-500">
          <span>
            * Illustrated representative installation portfolio across East Godavari and surrounding Andhra Pradesh districts. For specific local references or site visit requests, please speak to our engineering team.
          </span>
        </div>

      </div>
    </section>
  );
};
