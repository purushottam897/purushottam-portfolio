import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Sidebar } from './components/Sidebar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { CertificationsAndJourney } from './components/CertificationsAndJourney';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#08090C] text-[#F4F2ED] selection:bg-[#E8E4D9] selection:text-black font-sans">
      {/* Fixed Left Sidebar on Desktop / Mobile Nav Bar */}
      <Sidebar />

      {/* Main Content Area indented for desktop sidebar */}
      <div className="md:pl-44 lg:pl-48 flex flex-col min-h-screen">
        <main className="flex-1">
          {/* < 01 HELLO, I'M Purushottam Naidu. / 02 TURNING IDEAS INTO IMPACT */}
          <Hero />

          {/* 03 ABOUT ME: More Than Just a Developer */}
          <About />

          {/* / 04 FEATURED PROJECTS */}
          <Projects />

          {/* / 05 SKILLS & TECHNOLOGIES */}
          <Skills />

          {/* / 06 CERTIFICATIONS & / 07 JOURNEY SO FAR */}
          <CertificationsAndJourney />

          {/* / 08 SELECT RESUME PATHWAY */}
          <ResumeSection />

          {/* Let's Create What's Next & Footer */}
          <Contact />
        </main>
      </div>
      <Analytics />
    </div>
  );
};

export default App;
