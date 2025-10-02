"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-4xl font-heading font-bold gradient-text">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I'm a passionate Senior Flutter Engineer with over 4 years of
              experience building cross-platform mobile applications. I
              specialize in creating beautiful, performant apps that deliver
              exceptional user experiences.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              My expertise spans the entire mobile development lifecycle, from
              initial concept and design to deployment and maintenance. I'm
              particularly passionate about clean code architecture, performance
              optimization, and staying up-to-date with the latest Flutter and
              mobile development trends.
            </p>
            <div className="flex items-center space-x-4 text-gray-500 dark:text-gray-400">
              <MapPin className="h-5 w-5" />
              <span>Based in Pakistan</span>
              <Calendar className="h-5 w-5" />
              <span>Available for projects</span>
            </div>
          </div>
          <div className="relative">
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
              <div className="w-72 h-72 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                <div className="text-6xl font-bold gradient-text">MM</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
