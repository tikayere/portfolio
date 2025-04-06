"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-gray-100 dark:bg-gray-900 py-6 border-t"
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} [Your Name]. All rights reserved.
        </p>
        <div className="mt-4 md:mt-0 flex space-x-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              GitHub
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              Twitter
            </Link>
          </Button>
        </div>
      </div>
    </motion.footer>
  );
}