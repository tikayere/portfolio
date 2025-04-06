"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 py-4"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-primary dark:text-white"
          >
            Portfolio
          </motion.div>
        </Link>
        
        <div className="flex space-x-1 sm:space-x-2">
          {[
            { href: "/about", label: "About" },
            { href: "/projects", label: "Projects" },
            { href: "/contact", label: "Contact" }
          ].map((item) => (
            <Link key={item.href} href={item.href}>
              <Button 
                variant="ghost" 
                className="text-sm sm:text-base px-3 sm:px-4 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}