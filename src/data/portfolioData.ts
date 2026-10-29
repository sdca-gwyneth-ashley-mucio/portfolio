export type SkillCategoryFilter =
  | 'All Skills'
  | 'Professional Skills'
  | 'Academic & Technical Foundations';

export interface PersonalInfo {
  fullName: string;
  middleName?: string;
  extendedFullName: string;
  title: string;
  institution: string;
  phone: string;
  email: string;
  address: string;
  photoUrl: string;
  aboutPhotoUrl: string;
  githubUrl: string;
  oldGithubUrl: string;
  formspreeUrl: string;
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

export interface TechStackItem {
  name: string;
  category: 'Languages' | 'Environment / IDE' | 'Tools & Platform';
  iconUrl: string;
  description?: string;
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
  officialTitle?: string;
  categoryLabel: string;
  description: string;
  badgeEmoji: string;
  badgeImage?: string;
  certificateImage?: string;
  date?: string;
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
  imageSrc?: string;
  badgeSrc?: string;
  date?: string;
  accentTheme: 'matcha' | 'blush' | 'butter' | 'lavender' | 'sky';
}

export const PERSONAL_INFO_DATA: PersonalInfo = {
  fullName: 'Gwyneth Ashley Mucio',
  middleName: 'Pacifico',
  extendedFullName: 'Gwyneth Ashley Pacifico Mucio',
  title: 'Bachelor of Science in Information Technology (BSIT) Student',
  institution: 'St. Dominic College of Asia',
  phone: '09754422395',
  email: 'mucioashley@gmail.com',
  address: 'Blk 6 Lot 21, Habay 1, San Carlos Villa, Bacoor City, Cavite',
  photoUrl: '/mucio.JPG',
  aboutPhotoUrl: '/foraboutme.png',
  githubUrl: 'https://github.com/sdca-gwyneth-ashley-mucio',
  oldGithubUrl: 'https://github.com/gwynethashleymucio',
  formspreeUrl: 'https://formspree.io/f/movdlepy',
  summarySentences: [
    'My name is Gwyneth Ashley Pacifico Mucio. I’ve always been known for my friendly, sweet, and caring nature with a keen eye for observing the world around me. I’m an open-minded individual who enjoys connecting with people and embracing new experiences.',
    'One of my strengths is multitasking, paired with strong communication, adaptability, and creativity. Whether it’s managing responsibilities or solving problems, I strive to bring my best in everything I do!',
    'I aspire to grow, inspire, and make a meaningful impact through my career. I love learning and see every challenge as an opportunity to improve. My goal is to keep pushing forward turning passion into purpose.',
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

export const TECH_STACK_DATA: TechStackItem[] = [
  // Languages
  {
    name: 'Java',
    category: 'Languages',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  },
  {
    name: 'JavaScript',
    category: 'Languages',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'C',
    category: 'Languages',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
  },
  {
    name: 'HTML5',
    category: 'Languages',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS3',
    category: 'Languages',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    name: 'SQL',
    category: 'Languages',
    iconUrl: '/sql-icon.png',
  },
  {
    name: 'Flutter',
    category: 'Languages',
    iconUrl: '/icons8-flutter-48.png',
  },
  {
    name: 'Dart',
    category: 'Languages',
    iconUrl: '/icons8-dart-48.png',
  },
  {
    name: 'Firebase',
    category: 'Languages',
    iconUrl: '/icons8-firebase-48.png',
  },

  // Environment / IDE
  {
    name: 'Eclipse',
    category: 'Environment / IDE',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg',
  },
  {
    name: 'Apache NetBeans',
    category: 'Environment / IDE',
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Apache_NetBeans_Logo.svg',
  },
  {
    name: 'VS Code',
    category: 'Environment / IDE',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
  },
  {
    name: 'Oracle APEX',
    category: 'Environment / IDE',
    iconUrl: '/oracle-apex.png',
  },

  // Tools & Platform
  {
    name: 'GitHub',
    category: 'Tools & Platform',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  },
  {
    name: 'LinkedIn',
    category: 'Tools & Platform',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
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
  // Certified & Coursework Technical Foundations
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
    description:
      'Fluent native proficiency in spoken and written communication, team coordination, and presentations.',
    accent: 'matcha',
  },
  {
    id: 'lang-english',
    language: 'English',
    proficiency: 'Intermediate',
    description:
      'Working academic and professional proficiency in technical documentation, coursework, and collaboration.',
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
    officialTitle: 'Microsoft Office Specialist: Word Associate (Office 2019)',
    categoryLabel: 'Productivity & Documentation',
    description:
      'Official Microsoft Office Specialist certification verifying advanced competency in document design, professional formatting, and structured manuscripts.',
    badgeEmoji: '📄',
    badgeImage: '/msword-badge.png',
    certificateImage: '/WORD_2.png',
    date: 'March 14, 2024',
    accent: 'sky',
    evidenceId: 'ev-cert-word',
  },
  {
    id: 'cert-ms-powerpoint',
    title: 'Microsoft PowerPoint Certification',
    officialTitle: 'Microsoft Office Specialist: PowerPoint Associate (Office 2019)',
    categoryLabel: 'Presentation & Visual Design',
    description:
      'Official Microsoft Office Specialist certification verifying expertise in creating impactful, organized slide decks, presentations, and visual reports.',
    badgeEmoji: '📊',
    badgeImage: '/ppt-badge.png',
    certificateImage: '/PPT_1.png',
    date: 'May 30, 2024',
    accent: 'butter',
    evidenceId: 'ev-cert-ppt',
  },
  {
    id: 'cert-sql',
    title: 'SQL Certification',
    officialTitle: 'Database Certification',
    categoryLabel: 'Database & Relational Querying',
    description:
      'Certified competence in relational database design, data manipulation, and executing structured SQL queries for scalable data environments.',
    badgeEmoji: '🗄️',
    badgeImage: '/DATABASE_3.png',
    certificateImage: '/DatabaseCertificate.png',
    date: 'May 7, 2025',
    accent: 'matcha',
    evidenceId: 'ev-cert-sql',
  },
  {
    id: 'cert-html-css',
    title: 'HTML and CSS Certification',
    officialTitle: 'Web Development: HTML5 & CSS3',
    categoryLabel: 'Web Structure & Styling',
    description:
      'Demonstrates competency in building semantic, accessible, and responsive user interfaces using foundational HTML5 and CSS3.',
    badgeEmoji: '💻',
    accent: 'blush',
    evidenceId: 'ev-cert-html-css',
  },
  {
    id: 'cert-cybersecurity',
    title: 'Cybersecurity Certification',
    officialTitle: 'Cybersecurity Fundamentals & Digital Safety',
    categoryLabel: 'Information Security Awareness',
    description:
      'Validates understanding of essential cybersecurity principles, digital safety, safe network practices, and data protection.',
    badgeEmoji: '🛡️',
    accent: 'lavender',
    evidenceId: 'ev-cert-cyber',
  },
];

export const EVIDENCE_MODAL_REGISTRY: Record<string, EvidenceModalPayload> = {
  'ev-cert-word': {
    id: 'ev-cert-word',
    type: 'certificate',
    title: 'Microsoft Office Specialist: Word Associate (Office 2019)',
    subtitle: 'Official Microsoft Certification · Issued March 14, 2024',
    holderName: 'Gwyneth Ashley Mucio',
    contextLabel: 'Microsoft Office Specialist (Office 2019)',
    date: 'March 14, 2024',
    badgeSrc: '/msword-badge.png',
    imageSrc: '/WORD_2.png',
    summary:
      'Official Microsoft certification validating Gwyneth Ashley Mucio’s proficiency in document structuring, formatting styles, table and graphics management, and technical documentation creation in Microsoft Word.',
    highlights: [
      'Official Credential: Word Associate (Office 2019)',
      'Issued Date: March 14, 2024',
      'Certificate Holder: Gwyneth Ashley Mucio',
      'Verified via Certiport / Microsoft Office Specialist Program',
    ],
    accentTheme: 'sky',
  },
  'ev-cert-ppt': {
    id: 'ev-cert-ppt',
    type: 'certificate',
    title: 'Microsoft Office Specialist: PowerPoint Associate (Office 2019)',
    subtitle: 'Official Microsoft Certification · Issued May 30, 2024',
    holderName: 'Gwyneth Ashley Mucio',
    contextLabel: 'Microsoft Office Specialist (Office 2019)',
    date: 'May 30, 2024',
    badgeSrc: '/ppt-badge.png',
    imageSrc: '/PPT_1.png',
    summary:
      'Official Microsoft certification validating Gwyneth Ashley Mucio’s proficiency in presentation layouts, visual media integration, animations, and communication delivery in Microsoft PowerPoint.',
    highlights: [
      'Official Credential: PowerPoint Associate (Office 2019)',
      'Issued Date: May 30, 2024',
      'Certificate Holder: Gwyneth Ashley Mucio',
      'Verified via Certiport / Microsoft Office Specialist Program',
    ],
    accentTheme: 'butter',
  },
  'ev-cert-sql': {
    id: 'ev-cert-sql',
    type: 'certificate',
    title: 'Database Certification',
    subtitle: 'Verified Credential in Relational Databases · Issued May 7, 2025',
    holderName: 'Gwyneth Ashley Mucio',
    contextLabel: 'Database Management & SQL Systems',
    date: 'May 7, 2025',
    badgeSrc: '/DATABASE_3.png',
    imageSrc: '/DatabaseCertificate.png',
    summary:
      'Certifies Gwyneth Ashley Mucio’s mastery in structured query language (SQL), schema design, relational normalization, and database administration fundamentals.',
    highlights: [
      'Official Credential: Database Certification',
      'Issued Date: May 7, 2025',
      'Certificate Holder: Gwyneth Ashley Mucio',
      'Aligned with BSIT Database Management Coursework at SDCA',
    ],
    accentTheme: 'matcha',
  },
  'ev-cert-html-css': {
    id: 'ev-cert-html-css',
    type: 'certificate',
    title: 'HTML and CSS Certification',
    subtitle: 'Verified Credential in Web Markup & Modern Layouts',
    holderName: 'Gwyneth Ashley Mucio',
    contextLabel: 'Web Front-End Development Foundations',
    summary:
      'Demonstrates foundational proficiency in HTML5 and CSS3 for authoring accessible web pages, structuring component hierarchies, and applying clean stylesheet rules.',
    highlights: [
      'Certificate Holder: Gwyneth Ashley Mucio',
      'Core Area: Web Markup (HTML5) & Styling Frameworks (CSS3)',
      'Directly applied to portfolio designs and web applications',
    ],
    accentTheme: 'blush',
  },
  'ev-cert-cyber': {
    id: 'ev-cert-cyber',
    type: 'certificate',
    title: 'Cybersecurity Certification',
    subtitle: 'Verified Credential in Cybersecurity Fundamentals',
    holderName: 'Gwyneth Ashley Mucio',
    contextLabel: 'Information Security & Digital Safety',
    summary:
      'Certifies foundational knowledge in digital safety, threat prevention, data privacy policies, and secure computing principles in academic and professional IT environments.',
    highlights: [
      'Certificate Holder: Gwyneth Ashley Mucio',
      'Core Area: Cybersecurity Fundamentals & Digital Hygiene',
      'Supports reliable, security-conscious software operations',
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
      'DC SPACE is an AI-driven event intelligence platform designed to analyze event-related data, predict crowd conditions, and help event organizers improve crowd management, event planning, and operational efficiency. By transforming event data into actionable, data-driven insights, the platform supports predictive crowd management and adaptive event optimization for safer and better-coordinated events.',
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
      'Complete one-page resume view consolidating Gwyneth Ashley Pacifico Mucio’s profile, education at St. Dominic College of Asia, full tech stack, certifications, and DC SPACE capstone project.',
    highlights: [
      'BSIT Student at St. Dominic College of Asia (2023–Present)',
      'Tech Stack: Java, JavaScript, C, HTML5, CSS3, SQL, Flutter, Dart, Firebase, Eclipse, NetBeans, VS Code, Oracle APEX',
      'Certifications: Microsoft Word, Microsoft PowerPoint, Database/SQL, HTML/CSS, Cybersecurity',
      'Capstone Project: DC SPACE (AI-driven Event Intelligence Platform)',
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
      'Send a comment or reach out regarding internship opportunities, academic collaboration, or inquiries about her BSIT coursework, tech stack, and DC SPACE capstone project.',
    highlights: [
      'Phone: 09754422395',
      'Email: mucioashley@gmail.com',
      'Address: Blk 6 Lot 21, Habay 1, San Carlos Villa, Bacoor City, Cavite',
      'GitHub: github.com/sdca-gwyneth-ashley-mucio',
    ],
    accentTheme: 'blush',
  },
};
