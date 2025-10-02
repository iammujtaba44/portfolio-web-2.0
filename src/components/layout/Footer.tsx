"use client";

import { Github, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-lg font-heading font-bold text-white mb-4">
            Muhammad Mujtaba
          </p>
          <p className="mb-6">
            Senior Flutter Engineer & Builder of Modern Apps
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://github.com/mujtaba"
              className="hover:text-white transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/mujtaba"
              className="hover:text-white transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://youtube.com/@mujtaba"
              className="hover:text-white transition-colors"
            >
              <Youtube className="h-6 w-6" />
            </a>
          </div>
          <p className="text-sm">
            &copy; 2024 Muhammad Mujtaba. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
