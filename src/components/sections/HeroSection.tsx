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
  Facebook,
  Instagram,
  MessageCircle,
} from "lucide-react";
import { useAppConfigs } from "@/hooks/useAppConfigs";
import { useContact } from "@/hooks/useContact";
import Image from "next/image";

const iconMap = {
  Github,
  Linkedin,
  Youtube,
  Facebook,
  Instagram,
  MessageCircle,
};

export default function HeroSection() {
  const { stats, bio, loading, error } = useAppConfigs();
  const { contact } = useContact();

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
              className="flex flex-col sm:flex-row gap-6 justify-start items-start pt-8"
            >
              {/* Primary Button - Modern Gradient */}
              <motion.a
                href="#projects"
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-12 py-5 overflow-hidden rounded-2xl font-semibold text-white transition-all duration-500 ease-out"
                style={{
                  background:
                    "linear-gradient(135deg, #2563eb 0%, #0ea5e9 50%, #14b8a6 100%)",
                  boxShadow: "0 10px 30px rgba(37, 99, 235, 0.3)",
                }}
              >
                {/* Animated background overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-sky-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 -top-2 -left-2 w-[calc(100%+1rem)] h-[calc(100%+1rem)] bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>

                {/* Button content */}
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <motion.div
                    className="w-5 h-5"
                    whileHover={{ rotate: 45 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-full h-full"
                    >
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                </span>
              </motion.a>

              {/* Secondary Button - Glassmorphism Gradient Border */}
              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  boxShadow: "0 20px 40px rgba(37, 99, 235, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-12 py-5 rounded-2xl font-semibold transition-all duration-500 ease-out overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                  backdropFilter: "blur(10px)",
                  border: "2px solid transparent",
                  backgroundClip: "padding-box",
                }}
              >
                {/* Animated gradient border */}
                <div
                  className="absolute inset-0 rounded-2xl p-[2px]"
                  style={{
                    background:
                      "linear-gradient(135deg, #2563eb, #0ea5e9, #14b8a6, #06b6d4) border-box",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                >
                  <div className="w-full h-full rounded-2xl bg-gradient-to-r from-blue-500/20 via-sky-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Button content */}
                <span className="relative z-10 flex items-center gap-2 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300">
                  Get in Touch
                  <motion.div
                    className="w-5 h-5"
                    whileHover={{ rotate: 12 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-full h-full"
                    >
                      <path
                        d="M22 12h-4l-3 9L9 3l-3 9H2"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                </span>
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex justify-start space-x-4 pt-8"
            >
              {contact.socialLinks.map((link) => {
                const IconComponent =
                  iconMap[link.icon as keyof typeof iconMap];
                return (
                  <motion.a
                    key={link.platform}
                    href={link.url}
                    target={link.platform === "Topmate" ? "_blank" : "_self"}
                    rel={
                      link.platform === "Topmate" ? "noopener noreferrer" : ""
                    }
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600"
                  >
                    <IconComponent className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                  </motion.a>
                );
              })}
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
                  src="/profile-2.png"
                  alt="MJ - Full-stack developer"
                  fill
                  className="object-contain object-center"
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
