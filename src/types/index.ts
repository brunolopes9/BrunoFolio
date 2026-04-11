export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: ProjectCategory;
  githubLink: string;
  demoLink: string;
  image: string;
  images?: string[];
  featured?: boolean;
  highlights?: string[];
}

export type ProjectCategory = 'fullstack' | 'frontend' | 'backend' | 'all';

export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}
