import React from 'react';
import { Download, ExternalLink, ShieldCheck, Database } from 'lucide-react';
import { RESUMES } from '../data/portfolio';

export const ResumeSection: React.FC = () => {
  return (
    <section id="resume" className="py-20 md:py-28 border-t border-white/[0.08] relative bg-[#08090C]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs text-[#8A8F9E]">/ 08</span>
          <h2 className="text-sm sm:text-base font-bold tracking-[0.2em] uppercase text-white">
            SELECT RESUME PATHWAY
          </h2>
          <span className="flex-1 h-[1px] bg-white/[0.08] ml-2 hidden sm:inline-block" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Resume 01: ServiceNow */}
          <div className="bg-[#0E1015] border border-white/[0.08] hover:border-white/[0.25] p-8 flex flex-col justify-between group transition-all duration-300">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
                <span className="text-xs font-mono tracking-widest text-codex-gold font-semibold">
                  PATHWAY 01
                </span>
                <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 border border-codex-gold/30 text-codex-gold">
                  Enterprise Focus
                </span>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <ShieldCheck className="w-5 h-5 text-codex-gold" />
                <h3 className="text-xl font-bold font-serif text-white group-hover:text-codex-cream transition-colors">
                  {RESUMES.servicenow.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-[#8A8F9E] leading-relaxed mb-6 font-light">
                {RESUMES.servicenow.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/[0.06]">
              <a
                href={RESUMES.servicenow.filePath}
                download={RESUMES.servicenow.fileName}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#E8E4D9] hover:bg-[#F5F2EB] text-black font-semibold text-xs tracking-wider uppercase transition-all shadow-md"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </a>

              <a
                href={RESUMES.servicenow.filePath}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 border border-white/20 hover:border-white text-white text-xs tracking-wider uppercase transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#8A8F9E]" />
                <span>Preview PDF</span>
              </a>
            </div>
          </div>

          {/* Resume 02: Software & Data Analytics */}
          <div className="bg-[#0E1015] border border-white/[0.08] hover:border-white/[0.25] p-8 flex flex-col justify-between group transition-all duration-300">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
                <span className="text-xs font-mono tracking-widest text-white/60 font-semibold">
                  PATHWAY 02
                </span>
                <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 border border-white/20 text-white/80">
                  Engineering & Data
                </span>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <Database className="w-5 h-5 text-sky-400" />
                <h3 className="text-xl font-bold font-serif text-white group-hover:text-codex-cream transition-colors">
                  {RESUMES.softwareData.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-[#8A8F9E] leading-relaxed mb-6 font-light">
                {RESUMES.softwareData.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/[0.06]">
              <a
                href={RESUMES.softwareData.filePath}
                download={RESUMES.softwareData.fileName}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-white/90 text-black font-semibold text-xs tracking-wider uppercase transition-all shadow-md"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </a>

              <a
                href={RESUMES.softwareData.filePath}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 border border-white/20 hover:border-white text-white text-xs tracking-wider uppercase transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#8A8F9E]" />
                <span>Preview PDF</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
