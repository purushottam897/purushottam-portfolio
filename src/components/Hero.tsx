import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { PERSONAL_INFO, HERO_STATISTICS, IMAGES } from '../data/portfolio';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-12 md:pt-16 pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[580px]">
          {/* Left Text Column */}
          <div className="lg:col-span-7 z-10 pt-6 lg:pt-0">
            {/* Tag line: < 01  HELLO, I'M */}
            <div className="text-xs font-mono tracking-widest text-[#8A8F9E] uppercase mb-4 flex items-center gap-2">
              <span className="text-white/40">&lt; 01</span>
              <span>HELLO, I'M</span>
            </div>

            {/* Name Heading in Editorial Serif */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-serif tracking-tight text-white leading-[1.05] mb-5">
              Purushottam
              <br />
              <span className="inline-block">Naidu</span>
              <span className="text-codex-cream font-serif">.</span>
            </h1>

            {/* Triple Roles */}
            <div className="flex flex-wrap items-center gap-2.5 text-[11px] sm:text-xs font-semibold tracking-widest text-[#A6ABB8] uppercase mb-6">
              <span>SERVICENOW DEVELOPER</span>
              <span className="text-white/30">×</span>
              <span>SOFTWARE DEVELOPER</span>
              <span className="text-white/30">×</span>
              <span>DATA ANALYST</span>
            </div>

            {/* Intro paragraph */}
            <p className="text-sm sm:text-base text-[#9A9FA0] leading-relaxed max-w-lg mb-8 font-light">
              {PERSONAL_INFO.heroTagline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#E8E4D9] hover:bg-[#F5F2EB] text-black font-semibold text-xs tracking-wider transition-all duration-300 shadow-md"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#resume"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-white/40 text-white font-medium text-xs tracking-wider transition-all duration-300 bg-white/[0.02]"
              >
                <Download className="w-4 h-4 text-[#A6ABB8]" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Stats Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-white/[0.08] max-w-xl">
              {HERO_STATISTICS.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl font-bold font-serif text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-[#8A8F9E] tracking-wider mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Photo 1 + Right Badges & Script Accent */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Layered Decorative Borders */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-t-[140px] sm:rounded-t-[180px] rounded-b-3xl border border-codex-gold/20 pointer-events-none transform -rotate-1" />
              <div className="absolute -inset-1 sm:-inset-1.5 rounded-t-[130px] sm:rounded-t-[170px] rounded-b-2xl border border-white/10 pointer-events-none" />

              {/* Photo 1 Container with architectural arched top and edge dissolve */}
              <div className="relative overflow-hidden aspect-[3/4] rounded-t-[120px] sm:rounded-t-[160px] rounded-b-2xl bg-[#0E1015] border border-white/[0.12] shadow-2xl">
                <img
                  src={IMAGES.heroProfile}
                  alt="Purushottam Naidu"
                  className="w-full h-full object-cover object-top filter contrast-[1.03]"
                />
                {/* Multi-stage soft edge fades to dissolve harsh boundaries */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-[#08090C]/20 to-transparent opacity-85 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#08090C]/40 via-transparent to-[#08090C]/40 pointer-events-none" />
              </div>

              {/* Far Right Badge (BUILD LEARN EXPLORE GROW REPEAT) */}
              <div className="absolute -right-2 top-8 text-[9px] font-mono tracking-[0.3em] uppercase text-white/40 flex flex-col items-center gap-2 select-none">
                <span>BUILD</span>
                <span>LEARN</span>
                <span>EXPLORE</span>
                <span>GROW</span>
                <span>REPEAT</span>
              </div>

              {/* Handwritten Script Accent: Good Code Better Tomorrow */}
              <div className="absolute -right-6 bottom-10 z-20 transform -rotate-6 hidden sm:block pointer-events-none">
                <span className="font-script text-3xl md:text-4xl text-[#D8D4C8] block drop-shadow-md">
                  Good Code
                  <br />
                  Better
                  <br />
                  Tomorrow
                </span>
                <div className="w-16 h-[1px] bg-codex-gold/60 mt-1 ml-auto" />
              </div>
            </div>
          </div>
        </div>

        {/* Panoramic Landscape Banner: TURNING IDEAS INTO IMPACT --- / 02 */}
        <div className="mt-14 py-6 border-y border-white/[0.08] relative overflow-hidden flex items-center justify-between text-xs tracking-widest text-[#8A8F9E]">
          <div className="flex items-center gap-6 z-10">
            <span className="uppercase font-mono text-[11px] text-white/80">
              TURNING IDEAS INTO IMPACT
            </span>
            <span className="w-16 sm:w-32 h-[1px] bg-white/20 hidden sm:inline-block" />
          </div>

          <div className="z-10 font-mono text-xs text-white/60">
            / 02
          </div>

          {/* Subtle dark texture bg */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E1118] via-[#141720] to-[#0E1118] opacity-50" />
        </div>
      </div>
    </section>
  );
};
