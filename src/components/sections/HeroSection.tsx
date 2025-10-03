"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Youtube,
  Award,
  Users,
  Briefcase,
  Code,
} from "lucide-react";
import { useAppConfigs } from "@/hooks/useAppConfigs";
import Image from "next/image";

export default function HeroSection() {
  const { stats, bio, loading, error } = useAppConfigs();

  return (
    <section className="min-h-screen flex items-center justify-start relative overflow-hidden pt-20">
      <div className="absolute inset-0 gradient-bg opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-teal-500/20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-left"
          >
            {/* Position */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider"
            >
              {bio?.title || "Senior Flutter Engineer"}
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-6xl md:text-8xl font-heading font-bold leading-tight"
            >
              <span className="gradient-text">Muhammad</span>
              <br />
              <span className="gradient-text">Mujtaba</span>
            </motion.h1>

            {/* Elegant divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full"
            />

            {/* Loading State */}
            {loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="py-8"
              >
                <div className="text-lg text-gray-600 dark:text-gray-400">
                  Loading data...
                </div>
              </motion.div>
            )}

            {/* Error State */}
            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="py-8"
              >
                <div className="text-lg text-red-600 dark:text-red-400">
                  Error: {error}
                </div>
              </motion.div>
            )}

            {/* Stats Section */}
            {stats && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl py-8"
              >
                <div className="text-left group">
                  <div className="flex justify-start mb-3">
                    <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                      <Award className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1">
                    {stats.total_awards}+
                  </div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                    Awards
                  </div>
                </div>
                <div className="text-left group">
                  <div className="flex justify-start mb-3">
                    <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded-lg group-hover:bg-green-100 dark:group-hover:bg-green-900/30 transition-colors">
                      <Users className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1">
                    {stats.total_clients}+
                  </div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                    Clients
                  </div>
                </div>
                <div className="text-left group">
                  <div className="flex justify-start mb-3">
                    <div className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg group-hover:bg-purple-100 dark:group-hover:bg-purple-900/30 transition-colors">
                      <Briefcase className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1">
                    {stats.total_experience}+
                  </div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                    Years Experience
                  </div>
                </div>
                <div className="text-left group">
                  <div className="flex justify-start mb-3">
                    <div className="p-2 bg-orange-50 dark:bg-orange-900/20 rounded-lg group-hover:bg-orange-100 dark:group-hover:bg-orange-900/30 transition-colors">
                      <Code className="h-6 w-6 text-orange-600" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1">
                    {stats.total_projects}+
                  </div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                    Projects
                  </div>
                </div>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-start items-start pt-8"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl border border-blue-600/20"
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg font-semibold transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/10"
              >
                Get in Touch
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex justify-start space-x-4 pt-8"
            >
              <motion.a
                href={bio?.repositories || "https://github.com/mujtaba"}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600"
              >
                <Github className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/mujtaba"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600"
              >
                <Linkedin className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              </motion.a>
              <motion.a
                href="https://youtube.com/@mujtaba"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600"
              >
                <Youtube className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-full h-[700px] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-teal-500/20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>

                {/* Profile Image */}
                <Image
                  src="/profile.png"
                  alt="Muhammad Mujtaba - Senior Flutter Engineer"
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal-500/20 rounded-full blur-xl"></div>

              {/* Decorative Elements */}
              <div className="absolute top-8 -left-8 w-16 h-16 border-2 border-blue-300/30 rounded-lg rotate-12"></div>
              <div className="absolute bottom-8 -right-8 w-12 h-12 border-2 border-teal-300/30 rounded-full"></div>
            </div>
          </motion.div>
          <div className="space-y-4"></div>
        </div>
      </div>
    </section>
  );
}
