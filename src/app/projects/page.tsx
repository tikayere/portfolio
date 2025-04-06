"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";
import { motion } from "framer-motion";
import { Code, Smartphone, Server, Layers } from "lucide-react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.3
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 10
    } 
  },
};

const projectCategories = [
  { id: "all", label: "All Projects", icon: <Layers className="w-4 h-4 mr-2" /> },
  { id: "Web", label: "Web", icon: <Code className="w-4 h-4 mr-2" /> },
  { id: "Mobile", label: "Mobile", icon: <Smartphone className="w-4 h-4 mr-2" /> },
  { id: "Backend", label: "Backend", icon: <Server className="w-4 h-4 mr-2" /> }
];

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Intro Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="mb-12 text-center"
      >
        <motion.h1 
          variants={itemVariants} 
          className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          My Work
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Explore a selection of my projects showcasing technical skills, design thinking, and problem-solving abilities.
        </motion.p>
      </motion.section>

      {/* Filter Buttons */}
      <motion.div
        variants={containerVariants}
        className="flex flex-wrap justify-center gap-2 mb-12"
      >
        {projectCategories.map((category) => (
          <motion.div key={category.id} variants={itemVariants}>
            <Button
              variant={filter === category.id ? "default" : "outline"}
              onClick={() => setFilter(category.id)}
              className="gap-1"
            >
              {category.icon}
              {category.label}
            </Button>
          </motion.div>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id} 
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div 
            variants={itemVariants}
            className="text-center py-12"
          >
            <h3 className="text-xl font-medium text-muted-foreground">
              No projects found in this category
            </h3>
            <Button 
              variant="ghost" 
              className="mt-4"
              onClick={() => setFilter("all")}
            >
              View All Projects
            </Button>
          </motion.div>
        )}
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-16 text-center"
      >
        <h3 className="text-2xl font-medium mb-4">Have a project in mind?</h3>
        <Button size="lg">Let's Talk</Button>
      </motion.section>
    </div>
  );
}