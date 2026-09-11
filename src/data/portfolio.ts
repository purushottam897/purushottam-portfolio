/**
 * ==============================================================================
 * CODEX A — PORTFOLIO DATA CONFIGURATION
 * ==============================================================================
 * Single Source of Truth for Purushottam Naidu's Portfolio.
 * Matches exact editorial design system and verified credentials.
 * ==============================================================================
 */

export const IMAGES = {
  // PHOTO 1: Used in the Hero Section (tailored beige jacket)
  heroProfile: '/assets/photo-hero.jpg',

  // PHOTO 2: Used in the About Section (formal suit)
  aboutProfile: '/assets/photo-about.jpg',

  // PROJECT 1: Smart Hostel Issue Management System visual mockup
  projectHostel: '/assets/project-smart-hostel.jpg',

  // PROJECT 2: Smart City Bus Route Tracking visual mockup
  projectBus: '/assets/project-bus-tracking.jpg',

  // PROJECT 3: Real-Time Vastram Debugging dashboard visual
  projectVastram: '/assets/project-vastram.jpg',

  // PROJECT 4: Sales Forecasting & Data Analysis dashboard visual
  projectSales: '/assets/project-sales-forecasting.png',
};

export const PERSONAL_INFO = {
  brand: 'Purushottam Naidu •',
  brandWordmark: 'Purushottam Naidu',
  fullName: 'Purushottam Naidu',
  legalName: 'Mittireddy Purushottam Naidu',
  
  roles: [
    'SERVICENOW DEVELOPER',
    'SOFTWARE DEVELOPER',
    'DATA ANALYST',
  ],

  heroTagline: 'I build enterprise applications, full-stack solutions and data-driven insights. Passionate about solving real-world problems with technology.',
  
  aboutNarrative: {
    heading: 'More Than Just a Developer',
    intro: "I'm a B.Tech CSE (CSIT) student with a strong foundation in ServiceNow, software development and data analysis. I enjoy building solutions, automating processes and working on real-world projects that create impact. Always curious, always learning.",
    quote: 'Same Person Different Modes',
  },

  contact: {
    email: '2300090339csit@gmail.com',
    phone: '+91 9346838718',
    location: 'India',
    ctaText: "I'm always open to new opportunities, collaborations and interesting projects.",
  }
};

export const SOCIAL_LINKS = {
  github: 'https://github.com/purushottam897',
  linkedin: 'https://www.linkedin.com/in/purushottam-naidu-0abb3b34b/',
  email: 'mailto:2300090339csit@gmail.com',
  phone: 'tel:+919346838718',
};

// Hero Stats exactly matching user's layout
export const HERO_STATISTICS = [
  {
    value: '4+',
    label: 'Projects',
  },
  {
    value: '3',
    label: 'Certifications',
  },
  {
    value: '2',
    label: 'Azure Certifications',
  },
  {
    value: '100%',
    label: 'Learning Mode',
  }
];

export const RESUMES = {
  servicenow: {
    id: 'servicenow',
    number: '01',
    title: 'ServiceNow Developer Resume',
    fileName: 'Purushottam_Naidu_ServiceNow_Resume.pdf',
    filePath: '/assets/Purushottam_Naidu_ServiceNow_Resume.pdf',
    description: 'Enterprise ServiceNow application development, workflow automation, custom tables, Business Rules, Client Scripts, UI Policies, ACLs, and CMDB/CSDM implementation.',
  },
  softwareData: {
    id: 'software-data',
    number: '02',
    title: 'Software & Data Analytics Resume',
    fileName: 'Purushottam_Naidu_Software_Data_Resume.pdf',
    filePath: '/assets/Purushottam_Naidu_Software_Data_Resume.pdf',
    description: 'Full-stack software engineering, React, Spring Boot, MySQL, REST APIs, exploratory data analysis with Python, Pandas, NumPy, SQL, and Tableau dashboards.',
  }
};

// Section 05: Skills & Technologies with official brand icons
export interface TechSkill {
  name: string;
  iconType: string;
  color: string;
}

export const TECH_SKILLS: TechSkill[] = [
  { name: 'ServiceNow', iconType: 'servicenow', color: '#81B5A1' },
  { name: 'Python', iconType: 'python', color: '#3776AB' },
  { name: 'Java', iconType: 'java', color: '#E76F00' },
  { name: 'JavaScript', iconType: 'javascript', color: '#F7DF1E' },
  { name: 'Azure', iconType: 'azure', color: '#0089D6' },
  { name: 'SQL', iconType: 'sql', color: '#336791' },
  { name: 'Power BI', iconType: 'powerbi', color: '#F2C811' },
  { name: 'React', iconType: 'react', color: '#61DAFB' },
  { name: 'Git', iconType: 'git', color: '#F05032' },
  { name: 'MySQL', iconType: 'mysql', color: '#4479A1' },
];

export interface ProjectItem {
  id: string;
  number: string;
  name: string;
  tagline?: string;
  category: string;
  shortDescription: string;
  technologies: string[];
  image: string;
  links: {
    github?: string;
    liveDemo?: string;
  };
  caseStudy: {
    overview: string;
    objective: string;
    problem: string;
    solution: string;
    systemFlow?: string;
    myContribution: string[];
    keyFeatures: string[];
    technologiesDetailed: { label: string; details: string }[];
    whatILearned: string;
  };
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 'smart-hostel-issue-management',
    number: '01',
    name: 'Smart Hostel Issue Management System',
    category: 'ServiceNow',
    shortDescription: 'A ServiceNow application to manage and track hostel-related issues with automated workflows and a help portal.',
    technologies: ['ServiceNow', 'ITSM', 'Flow Designer', 'Business Rules', 'Client Scripts', 'UI Policies', 'ACLs'],
    image: IMAGES.projectHostel,
    links: {
      github: '',
      liveDemo: '',
    },
    caseStudy: {
      overview: 'The Smart Hostel Issue Management System is a ServiceNow application designed to manage and track hostel-related issues raised by students through a structured Help Portal and automated workflow.',
      objective: 'To provide a structured process for handling hostel complaints from submission through assignment, progress tracking, resolution, and closure.',
      problem: 'Handling hostel complaints via manual registers resulted in delayed resolutions, missing status visibility, and unassigned tickets.',
      solution: 'Engineered an end-to-end ServiceNow enterprise application with automated Flow Designer routing, student self-service portal, and granular role-based ACLs.',
      systemFlow: 'Student Portal Form → Field Validation (Client Scripts) → Dynamic Display (UI Policies) → Submission → Business Rules Validation → Flow Designer Auto-Assignment → Lifecycle: New → Assigned → In Progress → Resolved → Closed',
      myContribution: [
        'Developed the ServiceNow application and implemented the Smart Hostel Help Portal.',
        'Engineered custom tables, forms, fields, and reference relationships for students, issues, and facilities staff.',
        'Automated ticket assignment, notifications, and status transitions using Flow Designer.',
        'Configured Business Rules, Client Scripts, and UI Policies for dynamic form validation.',
        'Enforced strict security and privacy using Access Control Lists (ACLs).'
      ],
      keyFeatures: [
        'Student issue and complaint submission portal',
        'Real-time issue tracking and monitoring',
        'Automated issue assignment based on category',
        'Resolution workflow with automated status notifications',
        'Role-based access and security'
      ],
      technologiesDetailed: [
        { label: 'Platform', details: 'ServiceNow' },
        { label: 'Application Development', details: 'Custom tables, forms, fields, reference relationships' },
        { label: 'Automation', details: 'Flow Designer, workflow automation' },
        { label: 'Logic & UI', details: 'Business Rules, Client Scripts, UI Policies' },
        { label: 'Security', details: 'ACLs, role-based access control' }
      ],
      whatILearned: 'Strengthened practical understanding of ServiceNow application development, workflow automation, business logic, form customization, issue lifecycle management, and role-based access control.'
    }
  },
  {
    id: 'smart-city-bus-route-tracking',
    number: '02',
    name: 'Smart City Bus Route Tracking',
    category: 'Full Stack',
    shortDescription: 'A full-stack web application for city bus route search, live tracking and schedule management.',
    technologies: ['React', 'Spring Boot', 'MySQL', 'REST APIs'],
    image: IMAGES.projectBus,
    links: {
      github: 'https://github.com/purushottam897/Smart-City-Bus-Tracker.git',
      liveDemo: '',
    },
    caseStudy: {
      overview: 'Smart City Bus Route Tracking is a full-stack web application designed to help users search city bus routes, access bus information, and view schedule-related information through a responsive web interface.',
      objective: 'To provide a convenient digital interface for searching city bus routes and timings while connecting a responsive frontend with backend services and a MySQL database.',
      problem: 'Commuters frequently face unpredictable urban transit schedules, unclear transfer points, and inaccessible timetables.',
      solution: 'Built a full-stack web system linking a modular React interface to Spring Boot REST microservices and a high-performance relational database.',
      systemFlow: 'User → React Frontend → Spring Boot REST API → MySQL Database → API Response → React Interface',
      myContribution: [
        'Worked on the full-stack application, including the responsive frontend and REST API functionality.',
        'Engineered Spring Boot backend integration and MySQL database connectivity for bus route and schedule-related features.',
        'Designed intuitive React user interfaces for searching routes, stops, and schedules.'
      ],
      keyFeatures: [
        'Bus route search and live tracking visualization',
        'Detailed bus information and stop sequences',
        'Schedule management and departure frequencies',
        'Responsive user interface optimized for mobile and desktop',
        'REST API communication with MySQL connectivity'
      ],
      technologiesDetailed: [
        { label: 'Frontend', details: 'React' },
        { label: 'Backend', details: 'Spring Boot' },
        { label: 'Database', details: 'MySQL' },
        { label: 'Communication', details: 'REST APIs' }
      ],
      whatILearned: 'Strengthened understanding of full-stack application development, frontend-backend communication, REST API design and integration, database connectivity, and responsive web interface development.'
    }
  },
  {
    id: 'real-time-vastram-debugging',
    number: '03',
    name: 'Real-Time Vastram Debugging',
    category: 'Debugging',
    shortDescription: "Debugged and resolved real-time issues in Vastram's application, improving performance and stability.",
    technologies: ['Debugging', 'Issue Resolution', 'Software Development'],
    image: IMAGES.projectVastram,
    links: {
      github: 'https://github.com/purushottam897/vastrams.git',
      liveDemo: 'https://vastrams.vercel.app/',
    },
    caseStudy: {
      overview: 'Real-Time Vastram Debugging focuses on diagnosing and resolving live operational errors, runtime script conflicts, and performance bottlenecks across enterprise software applications.',
      objective: 'To identify, isolate, and remediate critical software bugs in real time to ensure uninterrupted application availability and optimal performance.',
      problem: 'Runtime script exceptions, client script submission errors, and business rule conflicts caused transaction failures and operational delays.',
      solution: 'Implemented real-time error logging, triage workflows, and root-cause analysis to systematically remediate errors and verify stability.',
      systemFlow: 'Runtime Bug Telemetry → Diagnostic Stack Trace Inspection → Defect Isolation → Patch Implementation → Regression Testing → Production Verification',
      myContribution: [
        'Debugged and resolved real-time software issues in Vastram application workflows.',
        'Identified and fixed JavaScript client script errors, onSubmit bugs, and business rule execution sequence conflicts.',
        'Optimized data sync flows with external APIs to prevent null reference errors.'
      ],
      keyFeatures: [
        'Real-time incident ticket monitoring and severity categorization',
        'Detailed error log and stack trace inspection',
        'Resolution lifecycle auditing and developer assignment',
        'Live deployment and operational testing'
      ],
      technologiesDetailed: [
        { label: 'Specialization', details: 'Debugging, Defect Isolation, Issue Resolution' },
        { label: 'Application Stack', details: 'Full-Stack Web & Enterprise Scripts' },
        { label: 'Deployment', details: 'Vercel Deployment' }
      ],
      whatILearned: 'Deepened expertise in systematic software debugging, analyzing complex runtime stack traces, resolving asynchronous conflicts, and hardening applications against runtime failures.'
    }
  },
  {
    id: 'sales-forecasting-data-analysis',
    number: '04',
    name: 'Sales Forecasting & Data Analysis',
    category: 'Data Analysis',
    shortDescription: 'Analyzed sales data, performed EDA and built forecasting models with interactive dashboards.',
    technologies: ['Python', 'SQL', 'Pandas', 'NumPy', 'Tableau', 'Machine Learning'],
    image: IMAGES.projectSales,
    links: {
      github: 'https://github.com/purushottam897/Smart-Grocery-Tracking-System.git',
      liveDemo: '',
    },
    caseStudy: {
      overview: 'Sales Forecasting & Data Analysis is an end-to-end data intelligence project extracting business insights, seasonal patterns, and predictive trajectories from commercial transactional datasets.',
      objective: 'To uncover actionable sales trends, analyze product category performance, and project forward-looking sales using Python, SQL, and interactive dashboards.',
      problem: 'Disorganized sales datasets lacked centralized KPI metrics, making it difficult for management to anticipate product demand or track regional growth.',
      solution: 'Constructed an automated data pipeline performing cleaning, exploratory data analysis (EDA), statistical forecasting, and Tableau executive visualization.',
      systemFlow: 'Raw Sales Data → SQL Extraction → Python (Pandas/NumPy) Cleaning & EDA → Forecasting Model Evaluation → Tableau Dashboard Visualization',
      myContribution: [
        'Analyzed sales data using Python, Pandas, and SQL to identify key trends.',
        'Performed data cleaning and exploratory data analysis (EDA) to uncover business insights.',
        'Created Tableau dashboards to visualize sales KPIs, category performance, and regional trends.',
        'Used SQL to calculate sales metrics including total orders and high-value transactions.'
      ],
      keyFeatures: [
        'Historical sales trend decomposition and seasonal analysis',
        'Predictive sales forecasting curves with accuracy metrics',
        'Product category distribution and regional sales share',
        'Interactive executive KPI cards and automated summaries'
      ],
      technologiesDetailed: [
        { label: 'Programming & Data', details: 'Python, Pandas, NumPy, SQL' },
        { label: 'Visualization', details: 'Tableau Dashboards' },
        { label: 'Methods', details: 'Exploratory Data Analysis (EDA), Time-Series Modeling' }
      ],
      whatILearned: 'Mastered the complete data analytics lifecycle: from relational SQL extraction and Python data wrangling to formulating predictive insights and interactive visual dashboards.'
    }
  }
];

// Section 06: Both Azure 104 and Azure 400 + 3 ServiceNow Certifications
export interface CertItem {
  id: string;
  title: string;
  subtitle: string;
  issuer: 'ServiceNow' | 'Azure';
  iconType: 'servicenow' | 'azure';
  credentialId?: string;
  verificationUrl?: string;
  certificatePdf: string;
}

export const CERTIFICATIONS: CertItem[] = [
  {
    id: 'csa',
    title: 'ServiceNow',
    subtitle: 'CSA',
    issuer: 'ServiceNow',
    iconType: 'servicenow',
    certificatePdf: '/assets/ServiceNow_CSA.pdf',
  },
  {
    id: 'cad',
    title: 'ServiceNow',
    subtitle: 'CAD',
    issuer: 'ServiceNow',
    iconType: 'servicenow',
    certificatePdf: '/assets/ServiceNow_CAD.pdf',
  },
  {
    id: 'cis-df',
    title: 'ServiceNow',
    subtitle: 'Data Foundations (CMDB & CSDM)',
    issuer: 'ServiceNow',
    iconType: 'servicenow',
    certificatePdf: '/assets/ServiceNow_CIS_Data_Foundations.pdf',
  },
  {
    id: 'az-104',
    title: 'Azure',
    subtitle: 'AZ-104',
    issuer: 'Azure',
    iconType: 'azure',
    credentialId: 'E6381E0A4575C36D',
    verificationUrl: 'https://learn.microsoft.com/en-gb/users/mittireddypurushottamnaidu-1890/credentials/certification/azure-administrator?wt.mc_id=certnurture_eml1_email_wwl',
    certificatePdf: '/assets/Microsoft_Azure_Administrator_Associate.pdf',
  },
  {
    id: 'az-400',
    title: 'Azure',
    subtitle: 'AZ-400',
    issuer: 'Azure',
    iconType: 'azure',
    credentialId: '8FC83468FEC21334',
    verificationUrl: 'https://learn.microsoft.com/en-gb/users/mittireddypurushottamnaidu-1890/credentials/certification/devops-engineer?wt.mc_id=certnurture_eml1_email_wwl',
    certificatePdf: '/assets/Microsoft_Azure_DevOps_Engineer_Expert.pdf',
  },
];

// Section 07: Journey So Far (Right column next to Certifications)
export const JOURNEY_ITEMS = [
  {
    period: '2023 - 2027',
    title: 'B.Tech CSE (CSIT)',
    subtitle: 'KL University, Vaddeswaram',
  },
  {
    period: 'Feb 2026 - Apr 2026',
    title: 'ServiceNow University Virtual Internship',
    subtitle: 'Workflow automation & enterprise systems',
  },
  {
    period: '2025 - Present',
    title: 'Building, Learning, Growing',
    subtitle: 'More projects, more impact',
  },
];

export const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];
