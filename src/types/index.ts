export interface Project {
    id: number;
    title: string;
    description: string;
    link: string; // Live demo URL
    category: string; // e.g., "Web", "Mobile", "Backend"
    image?: string; // URL or path to project image (optional)
    github?: string; // GitHub URL (optional)
    techStack?: string[]; // Array of technologies used (optional)
    details?: string; // HTML string for project details (optional)
    features?: string[]; // Array of feature descriptions (optional)
  }