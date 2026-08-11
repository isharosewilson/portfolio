import type { Project, Skill, Stat } from '../types';

export const PERSONAL_INFO = {
  name: "Isha Rose Wilson",
  tagline: "Building clean, useful web experiences.",
  subheadline: "Engineering student at Government Engineering College Wayanad, based in Kozhikode, Kerala — crafting responsive, high-performance web applications with React, TypeScript, and modern web stack.",
  bio: [
    "I'm a computer science engineering student at Government Engineering College Wayanad, based in Kozhikode, Kerala, India.",
    "Driven by curiosity and a commitment to intuitive software, I focus on crafting clean, accessible, and responsive user interfaces. I enjoy transforming complex logic into simple, elegant digital experiences using modern web tools."
  ],
  college: "Government Engineering College Wayanad",
  location: "Kozhikode, Kerala, India",
  email: "isharosewilson@gmail.com",
  github: "https://github.com/isharosewilson",
  linkedin: "https://www.linkedin.com/in/isha-rose-wilson-895857351/",
  resumeUrl: "#",
  avatarUrl: "/avatar.jpg"
};

export const STATS: Stat[] = [
  {
    label: "Projects Shipped",
    value: "4+",
    sublabel: "Active GitHub Repositories"
  },
  {
    label: "Education",
    value: "B.Tech CSE",
    sublabel: "GEC Wayanad"
  },
  {
    label: "Location",
    value: "Kerala",
    sublabel: "Kozhikode, India"
  },
  {
    label: "Stack",
    value: "React & TS",
    sublabel: "Modern Web Stack"
  }
];

export const SKILLS: Skill[] = [
  {
    id: "react",
    name: "React",
    category: "Frontend",
    iconName: "Code2",
    description: "Building component-driven user interfaces with modern hooks and state management."
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Languages",
    iconName: "FileCode2",
    description: "Strong typing for robust, scalable, and maintainable application codebases."
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Frontend",
    iconName: "Palette",
    description: "Utility-first CSS styling for rapid, sleek, and responsive design systems."
  },
  {
    id: "html",
    name: "HTML5",
    category: "Frontend",
    iconName: "Layout",
    description: "Semantic structure, web accessibility standards, and clean DOM markup."
  },
  {
    id: "css",
    name: "CSS3",
    category: "Frontend",
    iconName: "Paintbrush",
    description: "Modern CSS layouts, Flexbox/Grid systems, custom properties, and fluid animations."
  },
  {
    id: "javascript",
    name: "JavaScript (ES6+)",
    category: "Languages",
    iconName: "Zap",
    description: "Async programming, DOM manipulation, ES module syntax, and core web APIs."
  },
  {
    id: "git",
    name: "Git & GitHub",
    category: "Tools & Methods",
    iconName: "GitBranch",
    description: "Version control workflows, commit history hygiene, and code repository hosting."
  },
  {
    id: "responsive",
    name: "Responsive Design",
    category: "Tools & Methods",
    iconName: "Smartphone",
    description: "Mobile-first layouts optimized seamlessly across phones, tablets, and desktops."
  }
];

export const PROJECTS: Project[] = [
  {
    id: "carzone",
    title: "Carzone",
    tagline: "Car Showcase & Marketplace Interface",
    description: "A CSS-focused vehicle marketplace showcase featuring modern layout grids, car filtering controls, and responsive detail cards.",
    longDescription: "Carzone is a clean, visually focused web project designed to display automobile inventory with an intuitive user layout. Developed using semantic HTML and custom CSS, it demonstrates structured product grids, hover state micro-interactions, and mobile responsiveness.",
    techStack: ["CSS3", "HTML5", "UI Design", "Responsive Layouts"],
    githubUrl: "https://github.com/isharosewilson/carzone",
    category: "UI Project",
    highlights: [
      "Custom CSS Grid & Flexbox layout architecture",
      "Interactive product showcase with smooth hover effects",
      "Fully responsive viewport scaling across mobile and desktop"
    ],
    featured: true,
    colorGradient: "from-gray-500/10 to-slate-500/10"
  },
  {
    id: "calculator",
    title: "Calculator",
    tagline: "Sleek Interactive Web Calculator",
    description: "A clean, responsive web calculator supporting standard mathematical operations, keyboard inputs, and state management.",
    longDescription: "A minimalist web calculator app created with HTML, CSS, and Vanilla JavaScript. Features precise event listener handling, clear display formatting, and keyboard support for fast, effortless calculations.",
    techStack: ["HTML5", "JavaScript", "CSS3", "DOM Manipulation"],
    githubUrl: "https://github.com/isharosewilson/calculator",
    category: "Web App",
    highlights: [
      "Clean UI styled with soft shadows and tactile button states",
      "Error handling for division by zero and invalid inputs",
      "Keyboard shortcut bindings for quick calculation workflow"
    ],
    featured: true,
    colorGradient: "from-blue-500/10 to-slate-500/10"
  },
  {
    id: "fortune-tours",
    title: "Fortune Tours",
    tagline: "Travel Agency Showcase Website",
    description: "A modern travel showcase site highlighting destination tour packages, customer itineraries, and booking inquiry forms.",
    longDescription: "Fortune Tours presents an engaging web presence for a travel agency. Built with HTML and CSS, it features hero imagery, tour package cards, customer testimonials, and contact section layouts.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    githubUrl: "https://github.com/isharosewilson/Fortune-tours",
    category: "UI Project",
    highlights: [
      "Engaging landing page design with structured destination sections",
      "Interactive cards for tour packages and itinerary highlights",
      "Clean call-to-action sections for user inquiry submissions"
    ],
    featured: true,
    colorGradient: "from-emerald-500/10 to-teal-500/10"
  },
  {
    id: "vibe-coding",
    title: "Vibe Coding",
    tagline: "Creative TypeScript & Web Explorations",
    description: "A TypeScript codebase exploring interactive scripts, algorithm utilities, and clean modern programming patterns.",
    longDescription: "Vibe Coding serves as an experimental TypeScript environment where algorithms, custom utilities, and modern web functions are crafted and refined with strict type safety.",
    techStack: ["TypeScript", "JavaScript", "Node.js", "Web APIs"],
    githubUrl: "https://github.com/isharosewilson/vibe_coding",
    category: "TypeScript",
    highlights: [
      "Strict TypeScript interfaces and type annotations",
      "Modular code organization for scalable utility functions",
      "Clean code practices and modern ES syntax"
    ],
    featured: true,
    colorGradient: "from-sky-500/10 to-blue-500/10"
  }
];
