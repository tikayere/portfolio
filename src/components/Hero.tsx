"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      type: "spring",
      stiffness: 100,
      damping: 10
    },
  }),
};

export default function Hero() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-background to-muted/50 dark:from-gray-900 dark:to-gray-800/50">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-secondary/10 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={heroVariants}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary">
              Welcome to My Portfolio
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={heroVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Hi, I'm [Your Name]
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={heroVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
          >
            A passionate <span className="font-semibold">[Your Profession]</span> specializing in 
            <span className="font-semibold"> [Your Specialization]</span>. I build digital experiences 
            that are beautiful, functional, and impactful.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={heroVariants}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link href="/projects">
              <Button size="lg" className="gap-1">
                View My Work
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Contact Me
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}