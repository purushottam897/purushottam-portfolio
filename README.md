# CODEX A — Purushottam Naidu Portfolio

A high-end, editorial-style personal developer portfolio website engineered for **Purushottam Naidu** under the brand **CODEX A**.

Positioned across three verified disciplines:
- **ServiceNow Developer** (CSA, CAD, CIS-Data Foundations CMDB/CSDM)
- **Software Developer** (React, Spring Boot, MySQL, REST APIs)
- **Data Analyst** (Python, Pandas, NumPy, SQL, Tableau, Power BI)

---

## 🌟 Key Highlights & Design Architecture

- **Aesthetic**: Deep charcoal/obsidian palette (`#08090C`), warm off-white typography (`#F4F2ED`), subtle champagne gold accents (`#C5A059`), refined serif accents, asymmetrical compositions, and fine borders (`rgba(255, 255, 255, 0.08)`).
- **Zero AI Template Cliches**: No excessive neon glows, no tacky glassmorphism, no generic badge walls.
- **Easy Update System**: All content, projects, images, links, credentials, and resume paths are centralized in a single file: `src/data/portfolio.ts`.
- **Dynamic Link Safety**: If any project or credential link is empty, the corresponding action button automatically and gracefully hides without breaking layout.
- **Dual Resume Hub**: One-click download & PDF preview for both the ServiceNow-focused and Software/Data-focused resumes.
- **Interactive Deep Case Studies**: Rich case study reader modal for all 4 featured projects covering problem, solution, system architecture, key features, and engineering takeaways.

---

## 📂 Project Structure

```
Portfolio website/
├── public/
│   ├── assets/
│   │   ├── photo-hero.jpg                              # Hero profile photo
│   │   ├── photo-about.jpg                             # About section portrait
│   │   ├── project-smart-hostel.jpg                    # Project 01 visual mockup
│   │   ├── project-bus-tracking.jpg                    # Project 02 visual mockup
│   │   ├── project-vastram.jpg                         # Project 03 visual dashboard
│   │   ├── project-sales-forecasting.png               # Project 04 visual dashboard
│   │   ├── Purushottam_Naidu_ServiceNow_Resume.pdf     # Resume 01 (ServiceNow)
│   │   ├── Purushottam_Naidu_Software_Data_Resume.pdf  # Resume 02 (Software/Data)
│   │   ├── ServiceNow_CIS_Data_Foundations.pdf         # CIS-DF Certificate
│   │   ├── ServiceNow_CSA.pdf                          # CSA Certificate
│   │   ├── ServiceNow_CAD.pdf                          # CAD Certificate
│   │   └── Microsoft_Azure_Administrator_Associate.pdf # Azure AZ-104 Certificate
│   └── favicon.svg                                     # Minimalist typographic favicon
├── src/
│   ├── components/
│   │   ├── Navbar.tsx                                  # Fixed header & mobile drawer
│   │   ├── Hero.tsx                                    # Hero section & statistics strip
│   │   ├── About.tsx                                   # Biography & metadata boxes
│   │   ├── Skills.tsx                                  # Categorized capabilities
│   │   ├── Projects.tsx                                # Featured projects showcase
│   │   ├── CaseStudyModal.tsx                          # Interactive deep-dive modal
│   │   ├── Certifications.tsx                          # Verified credentials & cert links
│   │   ├── Journey.tsx                                 # Timeline & academic milestones
│   │   ├── ResumeSection.tsx                           # Dual resume download hub
│   │   ├── Contact.tsx                                 # Contact CTA & quick copy
│   │   └── Footer.tsx                                  # Minimalist signature footer
│   ├── data/
│   │   └── portfolio.ts                                # ⚡ SINGLE SOURCE OF TRUTH (Easy Update)
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## ⚡ Easy Update System (`src/data/portfolio.ts`)

To update any section of your portfolio, edit `src/data/portfolio.ts`:

- **Images**: Change paths in `IMAGES`
- **Contact & Tagline**: Change in `PERSONAL_INFO`
- **Social Links**: Update URLs in `SOCIAL_LINKS`
- **Projects**: Add, modify, or update repository and demo links in `PROJECTS`
- **Certifications**: Add or update in `CERTIFICATIONS`
- **Resumes**: Update filenames or paths in `RESUMES`

---

## 🚀 Running Locally

```powershell
# 1. Install dependencies (if not already installed)
npm.cmd install

# 2. Start development server
npm.cmd run dev

# 3. Build production bundle
npm.cmd run build

# 4. Preview production build
npm.cmd run preview
```

