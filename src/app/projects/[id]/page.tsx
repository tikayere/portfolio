"use client";

import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import { use } from  "react";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.5
    } 
  },
};

export default function ProjectDetail({ params: paramsPromise }: { params: Promise<{ id: string }> }) {
  const params = use(paramsPromise);
  const project = projects.find((p) => p.id === parseInt(params.id));
  if (!project) return notFound();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Project Image */}
        <motion.div variants={itemVariants} className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
          <Image
            src={project.image || "/project-placeholder.jpg"}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Project Details */}
        <div className="space-y-6">
          <motion.div variants={itemVariants}>
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              {project.title}
            </h1>
          </motion.div>

          <motion.p variants={itemVariants} className="text-lg text-muted-foreground">
            {project.description}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-2">
            {project.techStack?.map((tech, index) => (
              <span 
                key={index} 
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
            {project.link && (
              <Button asChild>
                <a 
                  href={project.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-1"
                >
                  Live Demo
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </Button>
            )}
            {project.github && (
              <Button variant="outline" asChild>
                <a 
                  href={project.github} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-1"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
              </Button>
            )}
          </motion.div>
        </div>
      </div>

      {/* Project Content Sections */}
      <div className="mt-16 space-y-12">
        {project.details && (
          <motion.section 
            variants={itemVariants}
            className="prose prose-sm dark:prose-invert max-w-none"
          >
            <h2 className="text-2xl font-bold mb-6">Project Details</h2>
            <div dangerouslySetInnerHTML={{ __html: project.details }} />
          </motion.section>
        )}

        {project.features && (
          <motion.section variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-6">Key Features</h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 mt-1 mr-2 text-primary">
                    •
                  </span>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.section>
        )}
      </div>
    </motion.div>
  );
}