// ---------------------------------------------------------------------------
// Portfolio content for Gwyneth Ashley Mucio.
// Everything rendered on the site comes from this file. Optional fields left
// empty are hidden in the UI — never fill them with placeholder content.
// ---------------------------------------------------------------------------

export type Accent = 'matcha' | 'blush' | 'butter' | 'lavender' | 'sky';

export interface PersonalInfo {
  fullName: string;
  extendedFullName: string;
  title: string;
  tagline: string;
  institution: string;
  email: string;
  /** City-level only. Do not put a street address here — this site is public. */
  publicLocation: string;
  photoUrl: string;
  aboutPhotoUrl: string;
  githubUrl: string;
  personalGithubUrl: string;
  /** Leave empty until available; the LinkedIn button only renders when set. */
  linkedinUrl: string;
  resumeUrl: string;
  formspreeUrl: string;
  summary: string[];
  traits: string[];
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

export interface TechStackItem {
  name: string;
  category: 'Languages' | 'Frameworks & Platforms' | 'Tools & IDEs';
  iconUrl: string;
}

export interface TechnicalSkill {
  id: string;
  name: string;
  /** Where this skill is demonstrated (coursework, project, or certification). */
  evidence: string;
  accent: Accent;
}

export interface LanguageItem {
  id: string;
  language: string;
  proficiency: string;
  accent: 'matcha' | 'sky';
}

export interface ProjectInfo {
  id: string;
  title: string;
  subtitle: string;
  projectType: 'Capstone Project' | 'Academic Project';
  role: string;
  status: 'Completed' | 'Ongoing';
  description: string;
  features: string[];
  /** Optional — hidden until provided. */
  techStack?: string[];
  /** Optional — paths under /public. Hidden until provided. */
  screenshots?: string[];
  accent: Accent;
}

export interface CertificationItem {
  id: string;
  title: string;
  categoryLabel: string;
  description: string;
  badgeEmoji: string;
  /** Optional badge artwork shown on the card. */
  badgeImage?: string;
  /** Scan of the certificate. When missing, the card shows "Scan coming soon". */
  certificateImage?: string;
  date?: string;
  accent: Accent;
}

export const PERSONAL_INFO_DATA: PersonalInfo = {
  fullName: 'Gwyneth Ashley Mucio',
  extendedFullName: 'Gwyneth Ashley Pacifico Mucio',
  title: 'BS Information Technology Student',
  tagline:
    'BSIT student at St. Dominic College of Asia who builds backend systems and writes clear technical documentation.',
  institution: 'St. Dominic College of Asia',
  email: 'mucioashley@gmail.com',
  publicLocation: 'Bacoor City, Cavite',
  photoUrl: '/mucio.JPG',
  aboutPhotoUrl: '/foraboutme.png',
  githubUrl: 'https://github.com/sdca-gwyneth-ashley-mucio',
  personalGithubUrl: 'https://github.com/gwynethashleymucio',
  linkedinUrl: '',
  resumeUrl: '/Gwyneth_Ashley_Mucio_Resume.pdf',
  formspreeUrl: 'https://formspree.io/f/movdlepy',
  summary: [
    "I'm a BSIT student at St. Dominic College of Asia focused on backend development, database management, and systems analysis.",
    'I built the backend for SDCANTEEN, a completed canteen ordering system for the SDCA Digital Campus, and I handle documentation for DC SPACE, our ongoing capstone project.',
    "People know me as friendly and caring — a natural multitasker who adapts quickly, communicates clearly, and brings creativity to every task.",
    "I'm looking for opportunities to grow through real-world projects and internships, and to keep turning passion into purpose.",
  ],
  traits: ['Friendly', 'Multitasker', 'Adaptable', 'Creative', 'Detail-oriented'],
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

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

export const TECH_STACK_DATA: TechStackItem[] = [
  // Languages
  { name: 'Java', category: 'Languages', iconUrl: `${DEVICON}/java/java-original.svg` },
  { name: 'JavaScript', category: 'Languages', iconUrl: `${DEVICON}/javascript/javascript-original.svg` },
  { name: 'C', category: 'Languages', iconUrl: `${DEVICON}/c/c-original.svg` },
  { name: 'HTML5', category: 'Languages', iconUrl: `${DEVICON}/html5/html5-original.svg` },
  { name: 'CSS3', category: 'Languages', iconUrl: `${DEVICON}/css3/css3-original.svg` },
  { name: 'SQL', category: 'Languages', iconUrl: '/sql-icon.png' },
  { name: 'Dart', category: 'Languages', iconUrl: '/icons8-dart-48.png' },

  // Frameworks & Platforms
  { name: 'Flutter', category: 'Frameworks & Platforms', iconUrl: '/icons8-flutter-48.png' },
  { name: 'Firebase', category: 'Frameworks & Platforms', iconUrl: '/icons8-firebase-48.png' },
  { name: 'Oracle APEX', category: 'Frameworks & Platforms', iconUrl: '/oracle-apex.png' },

  // Tools & IDEs
  { name: 'VS Code', category: 'Tools & IDEs', iconUrl: `${DEVICON}/vscode/vscode-original.svg` },
  { name: 'Eclipse', category: 'Tools & IDEs', iconUrl: `${DEVICON}/eclipse/eclipse-original.svg` },
  {
    name: 'NetBeans',
    category: 'Tools & IDEs',
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Apache_NetBeans_Logo.svg',
  },
  { name: 'GitHub', category: 'Tools & IDEs', iconUrl: `${DEVICON}/github/github-original.svg` },
];

export const TECH_STACK_CATEGORIES: TechStackItem['category'][] = [
  'Languages',
  'Frameworks & Platforms',
  'Tools & IDEs',
];

export const PROFESSIONAL_SKILLS: string[] = [
  'Problem-Solving',
  'Creative Thinking',
  'Critical Thinking',
  'Analytical Thinking',
  'Teamwork & Collaboration',
  'Communication',
  'Time Management',
  'Adaptability',
  'Attention to Detail',
];

export const TECHNICAL_SKILLS: TechnicalSkill[] = [
  {
    id: 'tech-backend',
    name: 'Backend Development',
    evidence: 'Backend developer for SDCANTEEN (orders, menu and stock management, order-status updates).',
    accent: 'matcha',
  },
  {
    id: 'tech-database',
    name: 'Database Management & SQL',
    evidence: 'Database Certification (2025) and BSIT Database Management coursework.',
    accent: 'sky',
  },
  {
    id: 'tech-documentation',
    name: 'Technical Documentation',
    evidence: 'Documentation for the DC SPACE capstone; Microsoft Office Specialist: Word Associate.',
    accent: 'butter',
  },
  {
    id: 'tech-systems',
    name: 'Systems Analysis & Process Design',
    evidence: 'BSIT coursework in Systems Analysis, Process Design, and Project Management.',
    accent: 'lavender',
  },
  {
    id: 'tech-web',
    name: 'HTML & CSS',
    evidence: 'HTML and CSS Certification; built and styled the original version of this portfolio.',
    accent: 'blush',
  },
  {
    id: 'tech-security',
    name: 'Cybersecurity Fundamentals',
    evidence: 'Cybersecurity Certification.',
    accent: 'lavender',
  },
];

export const LANGUAGES_DATA: LanguageItem[] = [
  { id: 'lang-tagalog', language: 'Tagalog', proficiency: 'Native', accent: 'matcha' },
  { id: 'lang-english', language: 'English', proficiency: 'Intermediate', accent: 'sky' },
];

export const PROJECTS_DATA: ProjectInfo[] = [
  {
    id: 'proj-sdcanteen',
    title: 'SDCANTEEN',
    subtitle: 'Ordering Management System',
    projectType: 'Academic Project',
    role: 'Backend Developer',
    status: 'Completed',
    description:
      'A canteen ordering solution for the SDCA Digital Campus that lets students browse daily menus, check item prices and availability, and place orders for pickup — while giving canteen staff the tools to run daily operations.',
    features: [
      'Daily menu browsing with prices and item availability',
      'Online ordering for pickup',
      'Staff management of menu updates, stock, incoming orders, and sales information',
      'Queue numbers and order-status notifications to keep pickup organized',
    ],
    accent: 'matcha',
  },
  {
    id: 'proj-dc-space',
    title: 'DC SPACE',
    subtitle: 'AI-driven Event Intelligence Platform for Predictive Crowd Management and Adaptive Event Optimization',
    projectType: 'Capstone Project',
    role: 'Documentation',
    status: 'Ongoing',
    description:
      'A capstone platform designed to analyze event-related data, predict crowd conditions, and give organizers data-driven insights to improve crowd management, event planning, and operational efficiency.',
    features: [
      'Event-related data analysis',
      'Predictive crowd management',
      'Adaptive event optimization based on anticipated crowd needs',
    ],
    accent: 'lavender',
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: 'cert-ms-word',
    title: 'Microsoft Office Specialist: Word Associate (Office 2019)',
    categoryLabel: 'Documentation',
    description: 'Professional document creation, formatting, and structured technical documentation in Microsoft Word.',
    badgeEmoji: '📄',
    badgeImage: '/msword-badge.png',
    certificateImage: '/WORD_2.png',
    date: 'March 14, 2024',
    accent: 'sky',
  },
  {
    id: 'cert-ms-powerpoint',
    title: 'Microsoft Office Specialist: PowerPoint Associate (Office 2019)',
    categoryLabel: 'Presentation',
    description: 'Designing clear, well-organized slide decks and visual presentations in Microsoft PowerPoint.',
    badgeEmoji: '📊',
    badgeImage: '/ppt-badge.png',
    certificateImage: '/PPT_1.png',
    date: 'May 30, 2024',
    accent: 'butter',
  },
  {
    id: 'cert-database',
    title: 'Database Certification',
    categoryLabel: 'Database',
    description: 'Relational database concepts and writing SQL queries to organize and retrieve data.',
    badgeEmoji: '🗄️',
    badgeImage: '/DATABASE_3.png',
    certificateImage: '/DatabaseCertificate.png',
    date: 'May 7, 2025',
    accent: 'matcha',
  },
  {
    id: 'cert-html-css',
    title: 'HTML and CSS Certification',
    categoryLabel: 'Web',
    description: 'Structuring web content with HTML and styling layouts with CSS.',
    badgeEmoji: '💻',
    // certificateImage: add the scan to /public and set the path here
    accent: 'blush',
  },
  {
    id: 'cert-cybersecurity',
    title: 'Cybersecurity Certification',
    categoryLabel: 'Security',
    description: 'Core cybersecurity awareness, safe computing practices, and information protection.',
    badgeEmoji: '🛡️',
    // certificateImage: add the scan to /public and set the path here
    accent: 'lavender',
  },
];
