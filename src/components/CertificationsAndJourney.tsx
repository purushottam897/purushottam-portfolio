import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CERTIFICATIONS, JOURNEY_ITEMS } from '../data/portfolio';
import { ServiceNowIcon, AzureIcon } from './TechIcons';

export const CertificationsAndJourney: React.FC = () => {
  return (
    <section id="certifications" className="py-20 md:py-28 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: / 06 CERTIFICATIONS (5 cards) */}
          <div className="lg:col-span-7">
            {/* Header */}
            <div className="flex items-center gap-3 mb-10">
              <span className="font-mono text-xs text-[#8A8F9E]">/ 06</span>
              <h2 className="text-sm sm:text-base font-bold tracking-[0.2em] uppercase text-white">
                CERTIFICATIONS
              </h2>
              <span className="flex-1 h-[1px] bg-white/[0.08] ml-2 hidden sm:inline-block" />
            </div>

            {/* 5 Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
              {CERTIFICATIONS.map((cert) => {
                const targetUrl = cert.verificationUrl || cert.certificatePdf;

                return (
                  <a
                    key={cert.id}
                    href={targetUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#0E1015] border border-white/[0.08] hover:border-white/[0.25] p-4 flex flex-col justify-between aspect-[1/1.3] group transition-all duration-300"
                  >
                    <div>
                      {/* Icon */}
                      <div className="mb-4">
                        {cert.iconType === 'servicenow' ? (
                          <ServiceNowIcon className="w-6 h-6" />
                        ) : (
                          <AzureIcon className="w-6 h-6" />
                        )}
                      </div>

                      {/* Title & Subtitle */}
                      <div className="text-[11px] text-[#8A8F9E] font-medium leading-tight">
                        {cert.title}
                      </div>
                      <div className="text-xs font-bold text-white mt-1 leading-snug group-hover:text-codex-cream transition-colors">
                        {cert.subtitle}
                      </div>
                    </div>

                    {/* Bottom arrow */}
                    <div className="flex justify-end pt-2">
                      <ArrowRight className="w-3.5 h-3.5 text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column: / 07 JOURNEY SO FAR */}
          <div id="journey" className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-white/[0.08] pt-10 lg:pt-0 lg:pl-10">
            {/* Header */}
            <div className="flex items-center gap-3 mb-10">
              <span className="font-mono text-xs text-[#8A8F9E]">/ 07</span>
              <h2 className="text-sm sm:text-base font-bold tracking-[0.2em] uppercase text-white">
                JOURNEY SO FAR
              </h2>
            </div>

            {/* Timeline */}
            <div className="space-y-8">
              {JOURNEY_ITEMS.map((item, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  {/* Year on Left */}
                  <div className="font-mono text-xs text-[#8A8F9E] w-28 shrink-0 pt-0.5">
                    {item.period}
                  </div>

                  {/* Bullet Dot & Content */}
                  <div className="relative pl-4 border-l border-white/10">
                    <span className="absolute -left-[4.5px] top-1.5 w-2 h-2 rounded-full bg-white/40 group-hover:bg-codex-gold transition-colors" />
                    <h3 className="text-sm font-bold text-white group-hover:text-codex-cream transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#8A8F9E] mt-0.5 font-light">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
