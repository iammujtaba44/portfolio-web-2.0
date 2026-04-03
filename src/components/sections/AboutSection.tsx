"use client";

import { useAppConfigs } from "@/hooks/useAppConfigs";
import { motion } from "framer-motion";
import { Heart, Zap, Coffee } from "lucide-react";
import Image from "next/image";
import AboutPointsComponent from "../components/about/AboutPointsComponent";

export default function AboutSection() {
  const { bio } = useAppConfigs();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-white to-teal-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(59,130,246,0.08),transparent_55%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(20,184,166,0.08),transparent_55%)]"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>

      {/* Ambient orbs */}
      <div className="absolute top-16 left-8 w-72 h-72 bg-blue-400/15 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-16 right-8 w-64 h-64 bg-teal-400/15 dark:bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >

          {/* ── Left: Text content ── */}
          <motion.div variants={itemVariants} className="space-y-7">
            {/* Label */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-sm font-semibold text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-700/40"
            >
              <Heart className="w-4 h-4" />
              About Me
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black leading-tight"
            >
              <span className="gradient-text">Crafting Digital</span>
              <br />
              <span className="gradient-text">Experiences</span>
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="w-16 h-1 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full"
            />

            {/* Bio paragraphs */}
            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              {bio?.about.split("|").map((line, index) => (
                <p
                  key={index}
                  className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed pl-4 border-l-2 border-blue-200 dark:border-blue-700/50"
                >
                  {line}
                </p>
              ))}
            </motion.div>

            {/* Points grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <AboutPointsComponent />
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <motion.a
                href="#projects"
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white text-sm overflow-hidden shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-shadow duration-300"
                style={{
                  background: "linear-gradient(135deg, #2563eb 0%, #0ea5e9 60%, #14b8a6 100%)",
                }}
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"></span>
                <span className="relative z-10">View My Work</span>
                <Zap className="relative z-10 w-4 h-4" />
              </motion.a>

              <motion.a
                href="#contact"
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm border-2 border-transparent transition-all duration-300"
                style={{
                  background: "linear-gradient(white, white) padding-box, linear-gradient(135deg, #2563eb, #14b8a6) border-box",
                }}
              >
                <span className="gradient-text font-semibold">Let&apos;s Connect</span>
                <Coffee className="w-4 h-4 text-teal-500" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ── Right: Visual element ── */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">

              {/* Outer spinning ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-teal-500 animate-spin-slow opacity-30 blur-md scale-110 pointer-events-none"></div>

              {/* Gradient border ring */}
              <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-br from-blue-500 via-purple-500 to-teal-500">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center relative overflow-hidden">
                  {/* Inner soft gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"></div>

                  {/* Profile image filling the circle */}
                  <Image
                    src="/profile-2.png"
                    alt="Muhammad Mujtaba"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Floating accent badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -right-3 sm:-top-5 sm:-right-5 px-3 py-2 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-2"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-[10px] sm:text-xs font-bold text-gray-700 dark:text-gray-300 whitespace-nowrap">Available</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -bottom-3 -left-3 sm:-bottom-5 sm:-left-5 px-3 py-2 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700"
              >
                <span className="text-[10px] sm:text-xs font-bold gradient-text whitespace-nowrap">Flutter · React · NestJS</span>
              </motion.div>

              {/* Decorative small shapes */}
              <div className="absolute top-6 -left-6 sm:top-8 sm:-left-8 w-10 h-10 border-2 border-blue-300/30 dark:border-blue-600/20 rounded-lg rotate-12"></div>
              <div className="absolute bottom-6 -right-6 sm:bottom-8 sm:-right-8 w-8 h-8 border-2 border-teal-300/30 dark:border-teal-600/20 rounded-full"></div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
