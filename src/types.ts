export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  category: 'Web App' | 'UI Project' | 'TypeScript' | 'Tool';
  highlights?: string[];
  featured?: boolean;
  colorGradient?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: 'Frontend' | 'Languages' | 'Tools & Methods';
  iconName: string;
  description: string;
}

export interface Stat {
  label: string;
  value: string;
  sublabel?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  location: string;
  imageUrl: string;
  videoUrl?: string;
  mediaType?: 'image' | 'video';
  aspectRatio?: 'square' | 'portrait' | 'wide';
}
