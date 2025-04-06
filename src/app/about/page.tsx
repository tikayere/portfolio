"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { Rocket, Code, Palette } from "lucide-react";

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

export default function About() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Bio Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="mb-16 text-center"
      >
        <motion.h1 
          variants={itemVariants} 
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          About Me
        </motion.h1>
        
        <motion.div 
          variants={itemVariants}
          className="max-w-3xl mx-auto space-y-6 text-lg"
        >
          <p className="text-muted-foreground">
            Hi, I'm <span className="font-semibold text-primary">[Your Name]</span>, 
            a passionate <span className="font-semibold">[Your Profession]</span> dedicated to 
            creating exceptional digital experiences.
          </p>
          
          <p className="text-muted-foreground">
            With <span className="font-semibold">[X] years</span> of experience in 
            [your key skills], I specialize in turning complex problems into elegant, 
            user-friendly solutions.
          </p>
          
          <p className="text-muted-foreground">
            When I'm not coding, you can find me 
            <span className="font-semibold"> [hobby or interest]</span> or exploring 
            the latest in <span className="font-semibold">[related interest]</span>.
          </p>
        </motion.div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="mb-16"
      >
        <motion.h2 
          variants={itemVariants} 
          className="text-3xl font-bold mb-8 text-center"
        >
          My Skills & Expertise
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Frontend Development",
              icon: <Code className="w-6 h-6 text-primary" />,
              description: "Building responsive, accessible interfaces with modern frameworks",
              skills: skills.filter(skill => ["React", "Next.js", "TypeScript"].includes(skill))
            },
            {
              title: "UI/UX Design",
              icon: <Palette className="w-6 h-6 text-primary" />,
              description: "Creating intuitive user experiences with pixel-perfect designs",
              skills: skills.filter(skill => ["Figma", "UI Design", "UX Research"].includes(skill))
            },
            {
              title: "Other Skills",
              icon: <Rocket className="w-6 h-6 text-primary" />,
              description: "Additional technologies and methodologies I work with",
              skills: skills.filter(skill => !["React", "Next.js", "TypeScript", "Figma", "UI Design", "UX Research"].includes(skill))
            }
          ].map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    {category.icon}
                    <CardTitle>{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary"
                        className="font-medium"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2 
          variants={itemVariants} 
          className="text-3xl font-bold mb-8 text-center"
        >
          My Journey
        </motion.h2>
        
        <motion.div variants={itemVariants}>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-8">
                {[
                  {
                    role: "Your Current Position",
                    company: "Company Name",
                    period: "202X - Present",
                    description: "Brief description of your responsibilities and achievements"
                  },
                  {
                    role: "Previous Position",
                    company: "Previous Company",
                    period: "202X - 202X",
                    description: "Key contributions and what you learned"
                  }
                ].map((exp, index) => (
                  <div key={index} className="border-b pb-6 last:border-b-0 last:pb-0">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-2">
                      <h3 className="font-bold text-lg">{exp.role}</h3>
                      <Badge variant="outline" className="w-fit">
                        {exp.period}
                      </Badge>
                    </div>
                    <h4 className="text-muted-foreground mb-3">{exp.company}</h4>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>
    </div>
  );
}