export type SkillCategoryFilter =
  | 'All Skills'
  | 'Professional Skills'
  | 'Academic & Technical Foundations';

export interface PersonalInfo {
  fullName: string;
  title: string;
  institution: string;
  phone: string;
  email: string;
  address: string;
  summarySentences: string[];
}

export interface EducationItem {
  id: string;
  degreeOrTrack: string;
  institution: string;
  location?: string;
  period: string;
  statusBadge: string;
  coursework?: string[];
  accent: 'matcha' | 'butter';
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'Professional Skills' | 'Academic & Technical Foundations';
  description: string;
  accent: 'matcha' | 'blush' | 'butter' | 'lavender' | 'sky';
}

export interface LanguageItem {
  id: string;
  language: string;
  proficiency: string;
  description: string;
  accent: 'matcha' | 'sky';
}

export interface CapstoneProjectInfo {
  title: string;
  shortTitle: string;
  projectType: string;
  description: string;
  coreFocusAreas: string[];
  evidenceId: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  categoryLabel: string;
  description: string;
  badgeEmoji: string;
  accent: 'matcha' | 'blush' | 'butter' | 'lavender' | 'sky';
  evidenceId: string;
}

export interface EvidenceModalPayload {
  id: string;
  type: 'certificate' | 'capstone' | 'resume' | 'contact';
  title: string;
  subtitle: string;
  holderName: string;
  contextLabel: string;
  summary: string;
  highlights: string[];
  accentTheme: 'matcha' | 'blush' | 'butter' | 'lavender' | 'sky';
}

export const PERSONAL_INFO_DATA: PersonalInfo = {
  fullName: 'Gwyneth Ashley Mucio',
  title: 'Bachelor of Science in Information Technology (BSIT) Student',
  institution: 'St. Dominic College of Asia',
  phone: '09754422395',
  email: 'mucioashley@gmail.com',
  address: 'Blk 6 Lot 21, Habay 1, San Carlos Villa, Bacoor City, Cavite',
  summarySentences: [
    'I am a motivated and adaptable Bachelor of Science in Information Technology (BSIT) student at St. Dominic College of Asia who genuinely enjoys exploring technology, solving problems, and developing practical solutions.',
    'Throughout my academic journey, I have cultivated strong creativity, a keen attention to detail, and an eagerness to learn new concepts and tools as project needs evolve.',
    'Whether working independently on focused tasks or collaborating closely with a team, I value clear communication, thoughtful organization, and steady execution.',
    'I am excited to apply my IT coursework in process design, systems analysis, database management, and software development to real-world challenges while continuing to grow professionally.',
  ],
};

export const EDUCATIONAL_BACKGROUND_DATA: EducationItem[] = [
  {
    id: 'edu-bsit',
    degreeOrTrack: 'Bachelor of Science in Information Technology (BSIT)',
    institution: 'St. Dominic College of Asia',
    location: 'Emilio Aguinaldo Highway, Bacoor, Philippines',
    period: '2023–Present',
    statusBadge: 'Current Degree Program',
    coursework: [
      'Process Design',
      'Project Management',
      'Database Management',
      'Systems Analysis',
      'Software Development',
    ],
    accent: 'matcha',
  },
  {
    id: 'edu-humss',
    degreeOrTrack: 'Humanities and Social Sciences (HUMSS) – Senior High School',
    institution: "St. Michael's Institute, Inc.",
    period: '2017–2023',
    statusBadge: 'Senior High School Graduate',
    accent: 'butter',
  },
];

export const SKILLS_DATA: SkillItem[] = [
  {
    id: 'skill-problem-solving',
    name: 'Problem-Solving',
    category: 'Professional Skills',
    description:
      'Breaking down complex operational or academic requirements into clear, manageable steps and practical solutions.',
    accent: 'matcha',
  },
  {
    id: 'skill-creative-thinking',
    name: 'Creative Thinking',
    category: 'Professional Skills',
    description:
      'Approaching system workflows, presentations, and user-facing layouts with fresh, thoughtful, and user-friendly ideas.',
    accent: 'blush',
  },
  {
    id: 'skill-critical-thinking',
    name: 'Critical Thinking',
    category: 'Professional Skills',
    description:
      'Evaluating information carefully to make sound decisions during systems analysis and project planning.',
    accent: 'butter',
  },
  {
    id: 'skill-analytical-thinking',
    name: 'Analytical Thinking',
    category: 'Professional Skills',
    description:
      'Examining data patterns, system requirements, and process flows to identify areas for improvement.',
    accent: 'sky',
  },
  {
    id: 'skill-teamwork',
    name: 'Teamwork and Collaboration',
    category: 'Professional Skills',
    description:
      'Working constructively with fellow students and project members to achieve shared milestones smoothly.',
    accent: 'lavender',
  },
  {
    id: 'skill-communication',
    name: 'Communication Skills',
    category: 'Professional Skills',
    description:
      'Presenting ideas, documentation, and project updates clearly in both Tagalog and English.',
    accent: 'blush',
  },
  {
    id: 'skill-time-management',
    name: 'Time Management',
    category: 'Professional Skills',
    description:
      'Prioritizing coursework, project deliverables, and deadlines with steady organization and reliability.',
    accent: 'butter',
  },
  {
    id: 'skill-adaptability',
    name: 'Adaptability and Willingness to Learn',
    category: 'Professional Skills',
    description:
      'Embracing new tools, feedback, and evolving project scopes with a positive and curious mindset.',
    accent: 'matcha',
  },
  {
    id: 'skill-attention-detail',
    name: 'Attention to Detail',
    category: 'Professional Skills',
    description:
      'Reviewing documents, structured queries, markup, and project specifications carefully for accuracy.',
    accent: 'sky',
  },
  // Certified & Coursework Technical Foundations (strictly established from certifications & coursework)
  {
    id: 'tech-html-css',
    name: 'HTML and CSS',
    category: 'Academic & Technical Foundations',
    description:
      'Certified foundation in structuring web content with HTML and styling clean, organized layouts with CSS.',
    accent: 'blush',
  },
  {
    id: 'tech-sql-db',
    name: 'SQL & Database Management',
    category: 'Academic & Technical Foundations',
    description:
      'Certified in SQL alongside BSIT coursework in Database Management for organizing and querying relational data.',
    accent: 'sky',
  },
  {
    id: 'tech-cybersecurity',
    name: 'Cybersecurity Fundamentals',
    category: 'Academic & Technical Foundations',
    description:
      'Certified foundation in core cybersecurity awareness, safe computing practices, and information protection.',
    accent: 'lavender',
  },
  {
    id: 'tech-ms-office',
    name: 'Microsoft Word & PowerPoint',
    category: 'Academic & Technical Foundations',
    description:
      'Certified proficiency in creating structured technical documentation in Microsoft Word and clear visual presentations in PowerPoint.',
    accent: 'butter',
  },
  {
    id: 'tech-systems-process',
    name: 'Systems Analysis, Process Design & Project Management',
    category: 'Academic & Technical Foundations',
    description:
      'Academic grounding in mapping workflows, analyzing system needs, and coordinating software development lifecycles.',
    accent: 'matcha',
  },
];

export const LANGUAGES_DATA: LanguageItem[] = [
  {
    id: 'lang-tagalog',
    language: 'Tagalog',
    proficiency: 'Native',
    description: 'Fluent native proficiency in spoken and written communication, team coordination, and presentations.',
    accent: 'matcha',
  },
  {
    id: 'lang-english',
    language: 'English',
    proficiency: 'Intermediate',
    description: 'Working academic and professional proficiency in technical documentation, coursework, and collaboration.',
    accent: 'sky',
  },
];

export const CAPSTONE_PROJECT_DATA: CapstoneProjectInfo = {
  title:
    'DC SPACE: AI-driven Event Intelligence Platform for Predictive Crowd Management and Adaptive Event Optimization',
  shortTitle: 'DC SPACE',
  projectType: 'Capstone Project',
  description:
    'DC SPACE is an AI-driven event intelligence platform designed to analyze event-related data, predict crowd conditions, and help event organizers improve crowd management, event planning, and operational efficiency. By transforming event data into actionable, data-driven insights, the platform supports predictive crowd management and adaptive event optimization for safer and better-coordinated events.',
  coreFocusAreas: [
    'Event-Related Data Analysis',
    'Predictive Crowd Management',
    'Adaptive Event Optimization',
    'Event Planning & Operational Efficiency',
  ],
  evidenceId: 'ev-dc-space',
};

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: 'cert-ms-word',
    title: 'Microsoft Word Certification',
    categoryLabel: 'Productivity & Documentation',
    description:
      'Validates proficiency in formatting professional reports, academic manuscripts, and structured documentation.',
    badgeEmoji: '📄',
    accent: 'sky',
    evidenceId: 'ev-cert-word',
  },
  {
    id: 'cert-ms-powerpoint',
    title: 'Microsoft PowerPoint Certification',
    categoryLabel: 'Presentation & Visual Communication',
    description:
      'Validates skill in designing clear, engaging slide decks and visual presentations for academic and project briefings.',
    badgeEmoji: '📊',
    accent: 'butter',
    evidenceId: 'ev-cert-ppt',
  },
  {
    id: 'cert-sql',
    title: 'SQL Certification',
    categoryLabel: 'Database & Querying',
    description:
      'Demonstrates foundational knowledge in writing SQL queries and working with structured relational databases.',
    badgeEmoji: '🗄️',
    accent: 'matcha',
    evidenceId: 'ev-cert-sql',
  },
  {
    id: 'cert-html-css',
    title: 'HTML and CSS Certification',
    categoryLabel: 'Web Structure & Styling',
    description:
      'Demonstrates competency in building and styling structured web pages using foundational HTML and CSS.',
    badgeEmoji: '💻',
    accent: 'blush',
    evidenceId: 'ev-cert-html-css',
  },
  {
    id: 'cert-cybersecurity',
    title: 'Cybersecurity Certification',
    categoryLabel: 'Information Security Awareness',
    description:
      'Validates understanding of essential cybersecurity principles, digital safety, and data protection practices.',
    badgeEmoji: '🛡️',
    accent: 'lavender',
    evidenceId: 'ev-cert-cyber',
  },
];

export const EVIDENCE_MODAL_REGISTRY: Record<string, EvidenceModalPayload> = {
  'ev-cert-word': {
    id: 'ev-cert-word',
    type: 'certificate',
    title: 'Microsoft Word Certification',
    subtitle: 'Verified Credential in Document Creation & Formatting',
    holderName: 'Gwyneth Ashley Mucio',
    contextLabel: 'BSIT Certification Portfolio',
    summary:
      'Certifies that Gwyneth Ashley Mucio has demonstrated competency in Microsoft Word for creating, formatting, and managing structured academic and professional documents.',
    highlights: [
      'Certificate Holder: Gwyneth Ashley Mucio',
      'Core Area: Professional Documentation & Report Formatting',
      'Applicable to Systems Analysis & Project Management Documentation',
    ],
    accentTheme: 'sky',
  },
  'ev-cert-ppt': {
    id: 'ev-cert-ppt',
    type: 'certificate',
    title: 'Microsoft PowerPoint Certification',
    subtitle: 'Verified Credential in Presentation Design & Delivery',
    holderName: 'Gwyneth Ashley Mucio',
    contextLabel: 'BSIT Certification Portfolio',
    summary:
      'Certifies that Gwyneth Ashley Mucio has demonstrated proficiency in Microsoft PowerPoint for organizing and presenting project concepts, process designs, and capstone briefings clearly.',
    highlights: [
      'Certificate Holder: Gwyneth Ashley Mucio',
      'Core Area: Visual Communication & Structured Slide Design',
      'Supports Clear Project & Academic Presentations',
    ],
    accentTheme: 'butter',
  },
  'ev-cert-sql': {
    id: 'ev-cert-sql',
    type: 'certificate',
    title: 'SQL Certification',
    subtitle: 'Verified Credential in Structured Query Language',
    holderName: 'Gwyneth Ashley Mucio',
    contextLabel: 'BSIT Certification Portfolio',
    summary:
      'Certifies that Gwyneth Ashley Mucio has completed certification in SQL, complementing her BSIT coursework in Database Management at St. Dominic College of Asia.',
    highlights: [
      'Certificate Holder: Gwyneth Ashley Mucio',
      'Core Area: Relational Data Querying & Database Foundations',
      'Aligned with BSIT Database Management Coursework',
    ],
    accentTheme: 'matcha',
  },
  'ev-cert-html-css': {
    id: 'ev-cert-html-css',
    type: 'certificate',
    title: 'HTML and CSS Certification',
    subtitle: 'Verified Credential in Web Markup & Styling',
    holderName: 'Gwyneth Ashley Mucio',
    contextLabel: 'BSIT Certification Portfolio',
    summary:
      'Certifies that Gwyneth Ashley Mucio has demonstrated foundational proficiency in HTML and CSS for structuring and styling web interfaces.',
    highlights: [
      'Certificate Holder: Gwyneth Ashley Mucio',
      'Core Area: Web Page Structure (HTML) & Layout Styling (CSS)',
      'Aligned with BSIT Software Development Coursework',
    ],
    accentTheme: 'blush',
  },
  'ev-cert-cyber': {
    id: 'ev-cert-cyber',
    type: 'certificate',
    title: 'Cybersecurity Certification',
    subtitle: 'Verified Credential in Cybersecurity Principles',
    holderName: 'Gwyneth Ashley Mucio',
    contextLabel: 'BSIT Certification Portfolio',
    summary:
      'Certifies that Gwyneth Ashley Mucio has completed foundational certification in Cybersecurity, covering essential security awareness and responsible system practices.',
    highlights: [
      'Certificate Holder: Gwyneth Ashley Mucio',
      'Core Area: Information Security & Safe Digital Practices',
      'Supports Reliable and Responsible IT Operations',
    ],
    accentTheme: 'lavender',
  },
  'ev-dc-space': {
    id: 'ev-dc-space',
    type: 'capstone',
    title:
      'DC SPACE: AI-driven Event Intelligence Platform for Predictive Crowd Management and Adaptive Event Optimization',
    subtitle: 'Capstone Project Overview — Gwyneth Ashley Mucio',
    holderName: 'Gwyneth Ashley Mucio',
    contextLabel: 'Project Type: Capstone Project · St. Dominic College of Asia',
    summary:
      'DC SPACE is an AI-driven event intelligence platform designed to analyze event-related data, predict crowd conditions, and help event organizers improve crowd management, event planning, and operational efficiency. It emphasizes data-driven insights to support predictive crowd management and adaptive event optimization.',
    highlights: [
      'Analyzes event-related data to generate clear, actionable insights for organizers',
      'Predicts crowd conditions to support proactive and safer crowd management',
      'Enables adaptive event optimization to improve event planning and operational efficiency',
    ],
    accentTheme: 'matcha',
  },
  'ev-resume': {
    id: 'ev-resume',
    type: 'resume',
    title: 'Gwyneth Ashley Mucio — One-Page BSIT Resume',
    subtitle: 'Bachelor of Science in Information Technology · St. Dominic College of Asia',
    holderName: 'Gwyneth Ashley Mucio',
    contextLabel: 'Bacoor City, Cavite · 09754422395 · mucioashley@gmail.com',
    summary:
      'Complete one-page resume view consolidating Gwyneth Ashley Mucio’s personal contact details, professional summary, educational background, skills, languages, DC SPACE capstone project, and 5 certifications.',
    highlights: [
      'BSIT Student at St. Dominic College of Asia (2023–Present)',
      'Capstone Project: DC SPACE (AI-driven Event Intelligence Platform)',
      '5 Certifications: Microsoft Word, Microsoft PowerPoint, SQL, HTML and CSS, Cybersecurity',
    ],
    accentTheme: 'matcha',
  },
  'ev-contact': {
    id: 'ev-contact',
    type: 'contact',
    title: 'Connect with Gwyneth Ashley Mucio 💌',
    subtitle: 'BSIT Student · St. Dominic College of Asia',
    holderName: 'Gwyneth Ashley Mucio',
    contextLabel: '09754422395 · mucioashley@gmail.com',
    summary:
      'Reach out to Gwyneth Ashley Mucio regarding internship opportunities, academic collaboration, or questions about her BSIT coursework and DC SPACE capstone project.',
    highlights: [
      'Phone: 09754422395',
      'Email: mucioashley@gmail.com',
      'Address: Blk 6 Lot 21, Habay 1, San Carlos Villa, Bacoor City, Cavite',
    ],
    accentTheme: 'blush',
  },
};
