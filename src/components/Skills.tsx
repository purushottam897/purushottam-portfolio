import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { TECH_SKILLS } from '../data/portfolio';
import {
  ServiceNowIcon,
  PythonIcon,
  JavaIcon,
  JavaScriptIcon,
  AzureIcon,
  SqlIcon,
  PowerBiIcon,
  ReactIcon,
  GitIcon,
  MySqlIcon,
} from './TechIcons';

export const Skills: React.FC = () => {
  const renderIcon = (type: string) => {
    switch (type) {
      case 'servicenow':
        return <ServiceNowIcon className="w-8 h-8 md:w-9 md:h-9" />;
      case 'python':
        return <PythonIcon className="w-8 h-8 md:w-9 md:h-9" />;
      case 'java':
        return <JavaIcon className="w-8 h-8 md:w-9 md:h-9" />;
      case 'javascript':
        return <JavaScriptIcon className="w-8 h-8 md:w-9 md:h-9" />;
      case 'azure':
        return <AzureIcon className="w-8 h-8 md:w-9 md:h-9" />;
      case 'sql':
        return <SqlIcon className="w-8 h-8 md:w-9 md:h-9" />;
      case 'powerbi':
        return <PowerBiIcon className="w-8 h-8 md:w-9 md:h-9" />;
      case 'react':
        return <ReactIcon className="w-8 h-8 md:w-9 md:h-9" />;
      case 'git':
        return <GitIcon className="w-8 h-8 md:w-9 md:h-9" />;
      case 'mysql':
        return <MySqlIcon className="w-8 h-8 md:w-9 md:h-9" />;
      default:
        return null;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-24 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header: / 05  SKILLS & TECHNOLOGIES */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs text-[#8A8F9E]">/ 05</span>
          <h2 className="text-sm sm:text-base font-bold tracking-[0.2em] uppercase text-white">
            SKILLS & TECHNOLOGIES
          </h2>
        </div>

        {/* Clean horizontal row of brand icons matching reference UI */}
        <div className="flex flex-wrap items-center justify-between gap-6 sm:gap-8 py-6 px-4 sm:px-8 bg-[#0E1015] border border-white/[0.08]">
          {TECH_SKILLS.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center gap-3 group transition-transform hover:-translate-y-1 duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center">
                {renderIcon(skill.iconType)}
              </div>
              <span className="text-[11px] sm:text-xs text-[#A0A5B5] group-hover:text-white font-medium tracking-wide transition-colors">
                {skill.name}
              </span>
            </div>
          ))}

          {/* More + Triple Dot */}
          <div className="flex flex-col items-center justify-center gap-3 group">
            <div className="w-12 h-12 flex items-center justify-center text-white/50 group-hover:text-white">
              <MoreHorizontal className="w-7 h-7" />
            </div>
            <span className="text-[11px] sm:text-xs text-[#A0A5B5] group-hover:text-white font-medium tracking-wide">
              More +
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
