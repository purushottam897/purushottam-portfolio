import React, { useState } from 'react';
import { ArrowRight, GraduationCap, Briefcase, Compass, Target } from 'lucide-react';
import { PERSONAL_INFO, IMAGES } from '../data/portfolio';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'experience' | 'interests' | 'goals'>('education');
  const [showModal, setShowModal] = useState(false);

  const tabContent = {
    education: {
      title: 'Education',
      icon: <GraduationCap className="w-4 h-4 text-codex-gold" />,
      detail: 'B.Tech in Computer Science & Information Technology',
      institution: 'KL University, Vaddeswaram (2023–2027)',
      score: 'CGPA: 8.7 / 10 • Intermediate: 6.7 / 10 • SSC: 9.9 / 10',
    },
    experience: {
      title: 'Experience',
      icon: <Briefcase className="w-4 h-4 text-codex-gold" />,
      detail: 'ServiceNow University Virtual Internship Program',
      institution: 'ServiceNow (Feb 2026 – Apr 2026)',
      score: 'Hands-on enterprise workflow automation & structured process optimization',
    },
    interests: {
      title: 'Interests',
      icon: <Compass className="w-4 h-4 text-codex-gold" />,
      detail: 'Enterprise Systems & Intelligent Automation',
      institution: 'Real-world problem solving & Scalable Microservices',
      score: 'CMDB/CSDM Governance, Full-stack architecture, and Cloud infrastructure',
    },
    goals: {
      title: 'Goals',
      icon: <Target className="w-4 h-4 text-codex-gold" />,
      detail: 'Building Impactful Enterprise & Cloud Solutions',
      institution: 'Delivering scalable software and automated workflows',
      score: 'Continuous engineering mastery across ServiceNow, Azure and Full-Stack',
    },
  };

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Photo 2 + Script Overlay */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Handwritten script overlay on top-left of image */}
              <div className="absolute -top-6 -left-8 z-20 transform -rotate-12 pointer-events-none">
                <span className="font-script text-3xl md:text-4xl text-[#E8E4D9] block drop-shadow-lg leading-tight">
                  Same
                  <br />
                  Person
                  <br />
                  <span className="text-[#C5A059]">Different</span>
                  <br />
                  Modes
                </span>
              </div>

              {/* Layered Decorative Offset Frames */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-2xl border border-codex-gold/25 transform rotate-2 pointer-events-none" />
              <div className="absolute -inset-1 sm:-inset-1.5 rounded-2xl border border-white/10 pointer-events-none" />

              {/* Image Card with rounded corners and edge dissolve */}
              <div className="relative aspect-[3.5/4.5] overflow-hidden rounded-2xl bg-[#101217] border border-white/[0.12] shadow-2xl">
                <img
                  src={IMAGES.aboutProfile}
                  alt="Purushottam Naidu"
                  className="w-full h-full object-cover filter contrast-[1.03]"
                  loading="lazy"
                />
                {/* Perimeter dark vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-[#08090C]/10 to-transparent opacity-80 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#08090C]/40 via-transparent to-[#08090C]/40 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Right Column: Narrative + Category Selector */}
          <div className="lg:col-span-7">
            {/* Header: ABOUT ME | 03 */}
            <div className="flex items-center justify-between text-xs font-mono tracking-widest text-[#8A8F9E] uppercase mb-4">
              <span>ABOUT ME</span>
              <span>03</span>
            </div>

            {/* Heading in Editorial Serif */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight mb-6">
              {PERSONAL_INFO.aboutNarrative.heading}
            </h2>

            {/* Content & Right Categories Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-8 space-y-6">
                <p className="text-sm sm:text-base text-[#9A9FA0] leading-relaxed font-light">
                  {PERSONAL_INFO.aboutNarrative.intro}
                </p>

                {/* Know More Button */}
                <div>
                  <button
                    type="button"
                    onClick={() => setShowModal(!showModal)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 hover:border-white/50 text-white text-xs tracking-wider uppercase transition-all duration-300 bg-white/[0.02]"
                  >
                    <span>{showModal ? 'Show Less' : 'Know More'}</span>
                    <ArrowRight className={`w-3.5 h-3.5 transition-transform ${showModal ? 'rotate-90' : ''}`} />
                  </button>
                </div>

                {/* Expanded details when Know More is clicked */}
                {showModal && (
                  <div className="p-5 bg-[#0E1118] border border-white/[0.08] text-xs text-[#CCD1DF] space-y-3 animate-fade-in">
                    <div className="font-mono text-codex-gold uppercase text-[11px] mb-1">
                      Academic & Professional Profile:
                    </div>
                    <p>• KL University: B.Tech Computer Science and Information Technology (2023–2027) with 8.7 CGPA.</p>
                    <p>• Certified in ServiceNow System Administration (CSA), Application Development (CAD), and Data Foundations CMDB/CSDM (CIS-DF).</p>
                    <p>• Dual-certified in Microsoft Azure: Azure Administrator Associate (AZ-104) and DevOps Engineer Expert (AZ-400).</p>
                    <p>• Completed ServiceNow University Virtual Internship (Feb 2026 – Apr 2026).</p>
                  </div>
                )}
              </div>

              {/* Right Vertical Categories (EDUCATION, EXPERIENCE, INTERESTS, GOALS) */}
              <div className="md:col-span-4 border-l border-white/[0.08] pl-6 flex flex-col space-y-4">
                {(['education', 'experience', 'interests', 'goals'] as const).map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`text-left text-xs uppercase tracking-widest transition-colors ${
                      activeTab === tab
                        ? 'text-white font-bold'
                        : 'text-[#6A7080] hover:text-[#9A9FA0]'
                    }`}
                  >
                    {tab}
                  </button>
                ))}

                {/* Interactive preview of active tab */}
                <div className="mt-4 pt-4 border-t border-white/[0.06] text-[11px] text-[#A6ABB8]">
                  <div className="font-semibold text-white mb-0.5">
                    {tabContent[activeTab].detail}
                  </div>
                  <div className="text-white/60 mb-1">
                    {tabContent[activeTab].institution}
                  </div>
                  <div className="text-codex-gold text-[10px] font-mono">
                    {tabContent[activeTab].score}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
