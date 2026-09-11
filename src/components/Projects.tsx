import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJECTS, ProjectItem } from '../data/portfolio';
import { CaseStudyModal } from './CaseStudyModal';

export const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header: / 04  FEATURED PROJECTS | Some of the things I've built < > */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#8A8F9E]">/ 04</span>
            <h2 className="text-sm sm:text-base font-bold tracking-[0.2em] uppercase text-white">
              FEATURED PROJECTS
            </h2>
          </div>

          <div className="flex items-center gap-4 text-xs text-[#8A8F9E]">
            <span className="hidden sm:inline">Some of the things I've built</span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="w-7 h-7 rounded-full border border-white/20 hover:border-white flex items-center justify-center text-white/70 hover:text-white transition-colors"
                aria-label="Previous Projects"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                className="w-7 h-7 rounded-full border border-white/20 hover:border-white flex items-center justify-center text-white/70 hover:text-white transition-colors"
                aria-label="Next Projects"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Cards Grid exactly like reference UI */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-[#0E1015] border border-white/[0.08] hover:border-white/[0.25] transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              {/* Top Window / Image Container */}
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-[#141720] border-b border-white/[0.06]">
                  {/* Subtle browser mockup header */}
                  <div className="absolute top-2 left-3 flex items-center gap-1.5 z-10 opacity-70">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                  </div>

                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Card Content */}
                <div className="p-5">
                  {/* Category Pill */}
                  <span className="inline-block text-[10px] uppercase tracking-wider font-semibold px-2.5 py-0.5 bg-white/[0.08] text-white/90 rounded-sm mb-3">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-codex-cream transition-colors">
                    {project.name}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-[#8A8F9E] leading-relaxed font-light">
                    {project.shortDescription}
                  </p>
                </div>
              </div>

              {/* Bottom Action: View Project -> */}
              <div className="p-5 pt-0">
                <button
                  type="button"
                  onClick={() => setActiveProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs text-white/80 group-hover:text-white font-medium hover:underline transition-colors mt-2"
                >
                  <span>View Project</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal for deep-dive inspection */}
      <CaseStudyModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
