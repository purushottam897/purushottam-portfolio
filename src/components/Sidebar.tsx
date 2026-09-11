import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { NAV_ITEMS, SOCIAL_LINKS } from '../data/portfolio';

export const Sidebar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) => item.id);
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Fixed Left Sidebar */}
      <aside className="fixed top-0 left-0 bottom-0 w-44 lg:w-48 bg-[#08090C] border-r border-white/[0.08] z-40 hidden md:flex flex-col justify-between py-8 px-6">
        {/* Top Wordmark Logo */}
        <div>
          <a
            href="#home"
            className="group flex items-center gap-1.5 font-serif text-base lg:text-lg tracking-wide text-white hover:text-codex-cream transition-colors leading-snug"
          >
            <span className="font-medium">Purushottam Naidu</span>
            <span className="w-1.5 h-1.5 rounded-full bg-codex-gold inline-block mb-1 shrink-0" />
          </a>

          {/* Navigation Links */}
          <nav className="mt-12 flex flex-col space-y-5 text-xs tracking-wider">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`relative flex items-center transition-colors duration-200 py-0.5 ${
                    isActive
                      ? 'text-white font-semibold pl-3'
                      : 'text-[#8A8F9E] hover:text-white pl-0'
                  }`}
                >
                  {/* Left active line indicator exactly like reference image */}
                  {isActive && (
                    <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-white rounded-full" />
                  )}
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>
        </div>

        {/* Bottom Area: Social Icons & Tagline */}
        <div className="space-y-8">
          {/* Social Icons Stack */}
          <div className="flex items-center gap-4 text-[#8A8F9E]">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={SOCIAL_LINKS.email}
              className="hover:text-white transition-colors"
              aria-label="Direct Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Vertical Philosophical Quote */}
          <div className="text-[10px] tracking-widest text-white/30 uppercase leading-relaxed font-mono">
            Discipline
            <br />
            Creates
            <br />
            Freedom
          </div>
        </div>
      </aside>

      {/* Mobile Top Navigation Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-[#08090C]/90 backdrop-blur-md px-6 py-4 border-b border-white/[0.08] flex items-center justify-between">
        <a href="#home" className="flex items-center gap-1.5 font-serif text-base text-white">
          <span>Purushottam Naidu</span>
          <span className="w-1.5 h-1.5 rounded-full bg-codex-gold inline-block mb-1 shrink-0" />
        </a>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-1 text-white hover:text-codex-gold transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[61px] bg-[#08090C]/98 z-50 p-6 flex flex-col justify-between">
          <nav className="flex flex-col space-y-6 text-sm tracking-wider uppercase">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-1 border-b border-white/[0.06] flex items-center justify-between ${
                  activeSection === item.id ? 'text-white font-bold' : 'text-[#8A8F9E]'
                }`}
              >
                <span>{item.label}</span>
                <span className="font-serif text-xs">→</span>
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between text-[#8A8F9E]">
            <div className="flex gap-4">
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer"><Github className="w-5 h-5" /></a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer"><Linkedin className="w-5 h-5" /></a>
              <a href={SOCIAL_LINKS.email}><Mail className="w-5 h-5" /></a>
            </div>
            <div className="text-[10px] font-mono text-white/40 uppercase">Discipline Creates Freedom</div>
          </div>
        </div>
      )}
    </>
  );
};

