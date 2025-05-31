export interface Experience {
  company: string;
  position?: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface Project {
  name: string;
  description: string;
  period: string;
  link?: string;
  highlights: string[];
  skills: string[];
}

export interface Skill {
  name: string;
  icon?: string;
  proficiency: number; // 1-5
  category: 'frontend' | 'backend' | 'devops' | 'other';
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
}

export interface NavItem {
  label: string;
  href: string;
}