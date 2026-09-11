import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Workflow, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../data/portfolio';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy, links } = project;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl animate-fade-in">
      {/* Background click to dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0E1017] border border-white/[0.15] shadow-2xl overflow-y-auto flex flex-col text-codex-text z-10 custom-modal-scroll">
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-20 bg-[#0E1017]/95 backdrop-blur-md border-b border-white/[0.1] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-codex-gold tracking-widest uppercase">
              PROJECT {project.number}
            </span>
            <span className="text-white/20">/</span>
            <span className="text-xs uppercase tracking-wider font-semibold text-codex-muted truncate max-w-[200px] sm:max-w-md">
              {project.name}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-codex-muted hover:text-white hover:bg-white/[0.05] transition-colors rounded-sm"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 md:p-10 space-y-10">
          {/* Title & Headline */}
          <div>
            <div className="inline-block text-[11px] uppercase tracking-widest font-semibold px-2.5 py-1 border border-codex-gold/30 text-codex-gold mb-3 bg-codex-gold/5">
              {project.category}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display tracking-tight text-white mb-2">
              {project.name}
            </h2>
            <p className="text-sm sm:text-base text-codex-gold font-serif italic">
              {project.tagline}
            </p>
          </div>

          {/* Project Visual Showcase */}
          <div className="relative overflow-hidden border border-white/[0.1] bg-[#08090C]">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-auto object-cover max-h-[480px]"
            />
            <div className="p-3 bg-[#0A0C11] border-t border-white/[0.06] flex items-center justify-between text-[11px] text-codex-muted">
              <span className="font-mono">PROJECT VISUAL SHOWCASE</span>
              <span className="font-serif italic text-codex-gold">Verified Portfolio Asset</span>
            </div>
          </div>

          {/* Conditional Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {links.liveDemo && (
              <a
                href={links.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-codex-gold text-black font-semibold text-xs tracking-wider uppercase hover:bg-codex-gold-light transition-all"
              >
                <span>Launch Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/[0.2] text-white font-medium text-xs tracking-wider uppercase hover:border-codex-gold hover:text-codex-gold transition-all bg-white/[0.02]"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View Source on GitHub</span>
              </a>
            )}
          </div>

          {/* Executive Overview & Objective */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/[0.08]">
            <div className="editorial-card p-6">
              <h4 className="text-xs uppercase tracking-widest font-bold text-codex-gold mb-2">
                Project Overview
              </h4>
              <p className="text-sm text-[#C4C9D6] leading-relaxed font-light">
                {caseStudy.overview}
              </p>
            </div>

            <div className="editorial-card p-6">
              <h4 className="text-xs uppercase tracking-widest font-bold text-codex-gold mb-2">
                Core Objective
              </h4>
              <p className="text-sm text-[#C4C9D6] leading-relaxed font-light">
                {caseStudy.objective}
              </p>
            </div>
          </div>

          {/* Problem & Solution */}
          <div className="space-y-6 pt-4 border-t border-white/[0.08]">
            <div>
              <h3 className="text-sm uppercase tracking-widest font-bold text-white mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-400/80" />
                The Problem & Operational Challenge
              </h3>
              <p className="text-sm text-[#B0B5C4] leading-relaxed font-light">
                {caseStudy.problem}
              </p>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-widest font-bold text-white mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400/80" />
                The Architectural Solution
              </h3>
              <p className="text-sm text-[#B0B5C4] leading-relaxed font-light">
                {caseStudy.solution}
              </p>
            </div>
          </div>

          {/* System Flow (If available) */}
          {caseStudy.systemFlow && (
            <div className="p-6 bg-[#090B10] border border-white/[0.08]">
              <h4 className="text-xs uppercase tracking-widest font-bold text-codex-gold mb-3 flex items-center gap-2">
                <Workflow className="w-4 h-4 text-codex-gold" />
                <span>System Architecture & Request Flow</span>
              </h4>
              <div className="text-xs sm:text-sm font-mono text-[#E0E2EC] leading-relaxed p-4 bg-black/40 border border-white/[0.04] overflow-x-auto">
                {caseStudy.systemFlow}
              </div>
            </div>
          )}

          {/* My Exact Contribution */}
          <div className="pt-4 border-t border-white/[0.08]">
            <h3 className="text-sm uppercase tracking-widest font-bold text-white mb-4 flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-codex-gold" />
              <span>My Technical Contribution</span>
            </h3>
            <ul className="space-y-3">
              {caseStudy.myContribution.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#C4C9D6] leading-relaxed">
                  <span className="text-codex-gold font-bold text-xs mt-1">0{idx + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Features */}
          <div className="pt-4 border-t border-white/[0.08]">
            <h3 className="text-sm uppercase tracking-widest font-bold text-white mb-4">
              Key Features & Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {caseStudy.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 bg-white/[0.02] border border-white/[0.06]">
                  <CheckCircle2 className="w-4 h-4 text-codex-gold shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#CCD1DF] leading-snug">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Breakdown */}
          <div className="pt-4 border-t border-white/[0.08]">
            <h3 className="text-sm uppercase tracking-widest font-bold text-white mb-4">
              Technologies & Implementations
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {caseStudy.technologiesDetailed.map((tech, idx) => (
                <div key={idx} className="p-3.5 border border-white/[0.06] bg-white/[0.01]">
                  <div className="text-[11px] font-mono text-codex-gold uppercase">{tech.label}</div>
                  <div className="text-xs text-[#CCD1DF] mt-1">{tech.details}</div>
                </div>
              ))}
            </div>
          </div>

          {/* What I Learned */}
          <div className="p-6 bg-codex-gold/[0.03] border border-codex-gold/20">
            <h4 className="text-xs uppercase tracking-widest font-bold text-codex-gold mb-2">
              Engineering Takeaway & Insights
            </h4>
            <p className="text-sm text-[#D1D5E0] leading-relaxed font-serif italic">
              "{caseStudy.whatILearned}"
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-[#0E1017]/95 backdrop-blur-md border-t border-white/[0.1] px-6 py-4 flex items-center justify-between text-xs text-codex-muted">
          <span className="font-mono">CODEX A • CASE STUDY ARCHIVE</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border border-white/[0.2] hover:border-codex-gold text-white hover:text-codex-gold text-xs tracking-wider transition-colors"
          >
            Close Reader
          </button>
        </div>
      </div>
    </div>
  );
};

