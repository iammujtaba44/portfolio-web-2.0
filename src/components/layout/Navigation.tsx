"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ThemeToggle from "../ThemeToggle";

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <Image
              src="/icon.png"
              alt="Muhammad Mujtaba"
              width={120}
              height={120}
              className="rounded-full"
            />
          </motion.div>
          <div className="flex items-center space-x-4">
            <a
              href="#projects"
              className="hidden md:block hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="hidden md:block hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="hidden md:block hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
