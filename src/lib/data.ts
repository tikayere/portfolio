import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio showcasing my skills with a modern, responsive design.",
    link: "https://example.com/portfolio",
    category: "Web",
    image: "/images/portfolio.jpg",
    github: "https://github.com/yourusername/portfolio",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Framer Motion"],
    details: `
      <p>This portfolio was built to demonstrate my expertise in modern web development. It features a clean UI, smooth animations, and a modular structure for easy extension.</p>
      <p>The project uses Next.js App Router for server-side rendering and Shadcn UI for reusable components.</p>
    `,
    features: [
      "Responsive design across all devices",
      "Dark/light mode toggle",
      "Animated page transitions",
      "Contact form with API integration",
      "Dynamic project filtering",
    ],
  },
  {
    id: 2,
    title: "Task Manager App",
    description: "A mobile-friendly task management app with real-time updates.",
    link: "https://example.com/task-manager",
    category: "Mobile",
    image: "/images/task-manager.jpg",
    github: "https://github.com/yourusername/task-manager",
    techStack: ["React", "React Native", "Firebase", "Tailwind CSS"],
    details: `
      <p>This app helps users organize tasks with a simple, intuitive interface.</p>
      <p>It integrates Firebase for real-time data syncing and user authentication.</p>
    `,
    features: [
      "Real-time task updates",
      "User authentication",
      "Cross-platform support (iOS/Android)",
      "Push notifications",
    ],
  },
  {
    id: 3,
    title: "E-commerce API",
    description: "A scalable RESTful API for an e-commerce platform.",
    link: "https://example.com/ecommerce-api",
    category: "Backend",
    image: "/images/ecommerce-api.jpg",
    github: "https://github.com/yourusername/ecommerce-api",
    techStack: ["Node.js", "Express", "MongoDB", "JWT"],
    details: `
      <p>This API powers an e-commerce platform with endpoints for products, users, and orders.</p>
      <p>It includes authentication using JWT and data storage with MongoDB.</p>
    `,
    features: [
      "CRUD operations for products and users",
      "Secure authentication with JWT",
      "Order management system",
      "Rate limiting and error handling",
    ],
  },
  {
    id: 4,
    title: "Blog Platform",
    description: "A full-stack blogging platform with a rich text editor.",
    link: "https://example.com/blog-platform",
    category: "Web",
    image: "/images/blog-platform.jpg",
    github: "https://github.com/yourusername/blog-platform",
    techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Rich Text Editor"],
    details: `
      <p>A platform for users to create, edit, and publish blog posts with a modern UI.</p>
      <p>Features a custom-built backend and a rich text editor for content creation.</p>
    `,
    features: [
      "User authentication and profiles",
      "Rich text editing with markdown support",
      "Post categorization and search",
      "Responsive design",
    ],
  },
  {
    id: 5,
    title: "Fitness Tracker",
    description: "A mobile app to track workouts and health metrics.",
    link: "https://example.com/fitness-tracker",
    category: "Mobile",
    image: "/images/fitness-tracker.jpg",
    github: "https://github.com/yourusername/fitness-tracker",
    techStack: ["React Native", "TypeScript", "SQLite", "Redux"],
    details: `
      <p>This app allows users to log workouts, track progress, and set fitness goals.</p>
      <p>Uses SQLite for offline storage and Redux for state management.</p>
    `,
    features: [
      "Workout logging and history",
      "Goal setting and progress tracking",
      "Offline support",
      "Data visualization with charts",
    ],
  },
  {
    id: 6,
    title: "Inventory System API",
    description: "A RESTful API for managing inventory in a warehouse.",
    link: "https://example.com/inventory-api",
    category: "Backend",
    image: "/images/inventory-api.jpg",
    github: "https://github.com/yourusername/inventory-api",
    techStack: ["Express", "MongoDB", "TypeScript", "Docker"],
    details: `
      <p>An API designed for inventory management with robust error handling.</p>
      <p>Containerized with Docker for easy deployment.</p>
    `,
    features: [
      "Inventory tracking and updates",
      "Search and filtering endpoints",
      "Dockerized deployment",
      "API documentation with Swagger",
    ],
  },
];

export const skills: string[] = [
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "SQLite",
  "Tailwind CSS",
  "Shadcn UI",
  "Framer Motion",
  "Python",
  "Django",
  "Firebase",
  "JWT",
  "Docker",
  "Redux",
  "HTML",
  "CSS",
  "Git",
  "Swagger",
];