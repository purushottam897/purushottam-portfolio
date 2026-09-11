import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolio';

export const Contact: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="relative pt-16 md:pt-24 overflow-hidden">
      {/* Panoramic Mountain Landscape Banner */}
      <div className="relative min-h-[360px] md:min-h-[420px] bg-[#07080B] border-t border-white/[0.08] overflow-hidden flex items-center">
        {/* Mountain Silhouette SVG Background */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <svg
            viewBox="0 0 1440 400"
            className="w-full h-full object-cover"
            preserveAspectRatio="none"
            fill="none"
          >
            {/* Distant mountains */}
            <path
              d="M0 260 L200 180 L400 240 L600 160 L800 230 L1000 150 L1200 220 L1440 170 L1440 400 L0 400 Z"
              fill="#0F1219"
            />
            {/* Midground mountains */}
            <path
              d="M0 310 L260 220 L520 280 L720 190 L980 270 L1240 200 L1440 290 L1440 400 L0 400 Z"
              fill="#141822"
            />
            {/* Foreground mountain ridge with valley */}
            <path
              d="M0 360 L380 270 L720 330 L1060 260 L1440 340 L1440 400 L0 400 Z"
              fill="#0A0C11"
            />
            {/* Center Peak with Hiker Silhouette */}
            <g transform="translate(710, 295)">
              {/* Rock peak */}
              <path d="M-25 35 L0 10 L25 35 Z" fill="#1B1F2A" />
              {/* Backpacker figure */}
              <circle cx="0" cy="-6" r="3.5" fill="#E8E4D9" />
              <rect x="-3" y="-2" width="6" height="12" rx="2" fill="#E8E4D9" />
              {/* Backpack */}
              <rect x="-6" y="-1" width="3.5" height="8" rx="1.5" fill="#C5A059" />
              {/* Walking stick / trail line */}
              <line x1="4" y1="-2" x2="6" y2="12" stroke="#E8E4D9" strokeWidth="1" />
            </g>
          </svg>
        </div>

        {/* Ambient Top & Bottom Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080A] via-transparent to-[#07080A]/80 pointer-events-none" />

        {/* Content Overlay */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full relative z-10 py-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
            {/* Left: Let's Create What's Next in Editorial Serif */}
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white leading-tight">
                Let's Create
                <br />
                <span className="font-serif italic text-white/95">What's Next</span>
              </h2>
            </div>

            {/* Right: Text + Button + Script */}
            <div className="max-w-md space-y-5">
              <p className="text-sm text-[#A6ABB8] font-light leading-relaxed">
                {PERSONAL_INFO.contact.ctaText}
              </p>

              <div>
                <a
                  href={SOCIAL_LINKS.email}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#E8E4D9] hover:bg-[#F5F2EB] text-black font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-xl"
                >
                  <span>Get In Touch</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Handwritten Script: Consistent Progress */}
              <div className="pt-2">
                <span className="font-script text-3xl md:text-4xl text-[#C5A059] block -rotate-3">
                  Consistent Progress
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal Footer Strip */}
      <footer className="py-8 border-t border-white/[0.08] bg-[#07080A] text-xs text-[#8A8F9E]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {currentYear} {PERSONAL_INFO.fullName}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={SOCIAL_LINKS.email}
              className="hover:text-white transition-colors"
            >
              Email
            </a>
            <span className="w-8 h-[1px] bg-white/20 hidden sm:inline-block" />
          </div>
        </div>
      </footer>
    </section>
  );
};
