"use client";

import { motion } from "framer-motion";
import { useExperience } from "../../hooks/useExperience";
import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  Code,
  Users,
  Award,
  Clock,
  Sparkles,
} from "lucide-react";

export default function ExperienceSection() {
  const { experiences, isLoading, error } = useExperience();

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

  const SectionHeader = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="text-center mb-14"
    >
      <motion.div
        variants={itemVariants}
        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-sm font-semibold text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-700/40 mb-6"
      >
        <Briefcase className="w-4 h-4" />
        Professional Journey
      </motion.div>

      <motion.h2
        variants={itemVariants}
        className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black leading-tight mb-4"
      >
        <span className="gradient-text">Work</span>
        <br />
        <span className="gradient-text">Experience</span>
      </motion.h2>

      <motion.p
        variants={itemVariants}
        className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto"
      >
        My professional journey building innovative mobile and full-stack solutions
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="w-16 h-1 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full mx-auto mt-6"
      />
    </motion.div>
  );

  if (isLoading) {
    return (
      <section id="experience" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-teal-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader />
          <div className="flex justify-center py-12">
            <div className="w-10 h-10 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="experience" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-teal-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader />
          <p className="text-center text-red-500 dark:text-red-400 py-12">
            Error loading experiences: {error}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-white to-teal-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_10%_20%,rgba(59,130,246,0.08),transparent_55%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_90%_80%,rgba(20,184,166,0.08),transparent_55%)]"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>

      {/* Ambient orbs */}
      <div className="absolute top-20 left-8 w-72 h-72 bg-blue-400/15 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-8 w-64 h-64 bg-teal-400/15 dark:bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader />

        {/* Timeline-style experience cards */}
        <div className="relative">
          {/* Vertical line — hidden on mobile */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-200 via-teal-200 to-transparent dark:from-blue-800 dark:via-teal-800 dark:to-transparent hidden sm:block"></div>

          <div className="space-y-6 sm:space-y-8 sm:pl-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.4, 0, 0.2, 1] }}
                viewport={{ once: true, margin: "-40px" }}
                className="group relative"
              >
                {/* Timeline dot — desktop */}
                <div className="absolute -left-[52px] top-7 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 border-2 border-white dark:border-gray-900 shadow-lg shadow-blue-500/30 hidden sm:block z-10"></div>

                {/* Card */}
                <div className="relative bg-white/80 dark:bg-white/4 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-gray-100 dark:border-white/8 hover:border-blue-200/60 dark:hover:border-blue-500/25 shadow-sm hover:shadow-xl hover:shadow-blue-500/8 dark:hover:shadow-blue-500/10 transition-all duration-350 overflow-hidden">

                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-teal-500/0 group-hover:from-blue-500/4 group-hover:to-teal-500/4 transition-all duration-400 rounded-2xl sm:rounded-3xl pointer-events-none"></div>

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                      <div className="flex items-start gap-3 flex-1 min-w-0">
                        {/* Icon */}
                        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                          <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg sm:text-2xl font-heading font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 leading-tight">
                            {exp.position}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-1.5 mt-1 text-sm sm:text-base">
                            <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      {/* View details button */}
                      <motion.a
                        href={`/experience/${exp.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileTap={{ scale: 0.96 }}
                        className="flex-shrink-0 self-start inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-teal-600 text-white text-xs sm:text-sm font-semibold rounded-xl shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-shadow duration-250"
                      >
                        <span>Details</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </motion.a>
                    </div>

                    {/* Meta badges */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 dark:bg-white/6 rounded-lg text-xs font-medium text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-white/8">
                        <Calendar className="w-3 h-3 text-blue-500" />
                        {exp.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 dark:bg-white/6 rounded-lg text-xs font-medium text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-white/8">
                        <MapPin className="w-3 h-3 text-teal-500" />
                        {exp.country}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 dark:bg-white/6 rounded-lg text-xs font-medium text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-white/8">
                        <Users className="w-3 h-3 text-purple-500" />
                        {exp.roleTypeDisplayName}
                      </span>
                    </div>

                    {/* Description bullets */}
                    {exp.description && exp.description.length > 0 && (
                      <div className="mb-5">
                        <h4 className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2 uppercase tracking-wider">
                          <Code className="w-3.5 h-3.5 text-blue-500" />
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {exp.description.slice(0, 3).map((desc, descIndex) => (
                            <li
                              key={descIndex}
                              className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
                            >
                              <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 mt-2"></div>
                              <span>{desc}</span>
                            </li>
                          ))}
                          {exp.description.length > 3 && (
                            <li className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 italic">
                              <Clock className="w-3.5 h-3.5" />
                              +{exp.description.length - 3} more responsibilities
                            </li>
                          )}
                        </ul>
                      </div>
                    )}

                    {/* Tech badges */}
                    {exp.technologies && exp.technologies.length > 0 && (
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2 uppercase tracking-wider">
                          <Award className="w-3.5 h-3.5 text-teal-500" />
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.slice(0, 8).map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg text-xs font-semibold border border-blue-100 dark:border-blue-700/30"
                            >
                              {tech}
                            </span>
                          ))}
                          {exp.technologies.length > 8 && (
                            <span className="px-3 py-1 bg-gray-100 dark:bg-white/6 text-gray-500 dark:text-gray-400 rounded-lg text-xs font-medium border border-gray-200 dark:border-white/8">
                              +{exp.technologies.length - 8}
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
