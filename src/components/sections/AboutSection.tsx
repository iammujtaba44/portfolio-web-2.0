"use client";

import { useAppConfigs } from "@/hooks/useAppConfigs";
import { motion } from "framer-motion";
import React from "react";
import {
  Code,
  Heart,
  Coffee,
  Lightbulb,
  Target,
  Users,
  Award,
  Zap,
} from "lucide-react";
import AboutPointsComponent from "../components/about/AboutPointsComponent";

export default function AboutSection() {
  const { bio } = useAppConfigs();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
      },
    },
  };

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-teal-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(20,184,166,0.1),transparent_50%)]"></div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-500"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Section Header */}
            <div className="space-y-4">
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300"
              >
                <Heart className="w-4 h-4" />
                About Me
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className="text-5xl lg:text-6xl font-heading font-bold leading-tight"
              >
                <span className="gradient-text">Crafting Digital</span>
                <br />
                <span className="gradient-text">Experiences</span>
              </motion.h2>

              <motion.div
                variants={itemVariants}
                className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full"
              />
            </div>

            {/* Bio Content */}
            <motion.div
              variants={itemVariants}
              className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              {bio?.about.split("|").map((line, index) => (
                <motion.p
                  key={index}
                  variants={itemVariants}
                  className="relative pl-6 border-l-2 border-blue-200 dark:border-blue-800"
                >
                  {line}
                </motion.p>
              ))}
            </motion.div>

            {/* Key Points Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8"
            >
              <AboutPointsComponent />
            </motion.div>

            {/* Call to Action */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-8"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Zap className="w-5 h-5" />
                  </motion.div>
                </span>
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-xl font-semibold transition-all duration-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white"
              >
                <span className="flex items-center gap-2">
                  Let's Connect
                  <motion.div
                    whileHover={{ rotate: 12 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Coffee className="w-5 h-5" />
                  </motion.div>
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Main Avatar Container */}
              <motion.div
                variants={floatingVariants}
                animate="animate"
                className="relative w-80 h-80 lg:w-96 lg:h-96"
              >
                {/* Outer Glow Ring */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-teal-500 rounded-full p-1">
                  <div className="w-full h-full bg-white dark:bg-gray-800 rounded-full flex items-center justify-center relative overflow-hidden">
                    {/* Inner Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-900"></div>

                    {/* Avatar Content */}
                    <div className="relative z-10 text-center">
                      <div className="text-8xl lg:text-9xl font-bold gradient-text mb-4">
                        MJ
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                        <Award className="w-4 h-4" />
                        <span>Senior Developer</span>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-blue-500/20 rounded-full blur-sm"></div>
                    <div className="absolute bottom-4 left-4 w-6 h-6 bg-teal-500/20 rounded-full blur-sm"></div>
                    <div className="absolute top-1/2 left-2 w-4 h-4 bg-purple-500/20 rounded-full blur-sm"></div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 border-2 border-blue-300/30 rounded-lg rotate-12 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 border-2 border-teal-300/30 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 -left-8 w-8 h-8 border-2 border-purple-300/30 rounded-lg rotate-45 animate-pulse delay-500"></div>
              </motion.div>

              {/* Background Decorative Circles */}
              <div className="absolute -z-10 top-10 -right-10 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"></div>
              <div className="absolute -z-10 bottom-10 -left-10 w-40 h-40 bg-teal-400/10 rounded-full blur-2xl"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
