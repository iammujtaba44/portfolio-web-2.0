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
  ChevronRight,
  Sparkles,
} from "lucide-react";

export default function ExperienceSection() {
  const { experiences, isLoading, error } = useExperience();

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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  if (isLoading) {
    return (
      <section id="experience" className="relative py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-teal-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(20,184,166,0.1),transparent_50%)]"></div>

        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300 mb-6"
            >
              <Briefcase className="w-4 h-4" />
              Professional Journey
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6"
            >
              <span className="gradient-text">Work</span>
              <br />
              <span className="gradient-text">Experience</span>
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full mx-auto"
            />
          </motion.div>

          <div className="flex justify-center items-center py-12">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full"
            />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="experience" className="relative py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-teal-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(20,184,166,0.1),transparent_50%)]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300 mb-6"
            >
              <Briefcase className="w-4 h-4" />
              Professional Journey
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6"
            >
              <span className="gradient-text">Work</span>
              <br />
              <span className="gradient-text">Experience</span>
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full mx-auto"
            />
          </motion.div>

          <div className="text-center py-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-xl"
            >
              <Award className="w-5 h-5" />
              Error loading experiences: {error}
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="relative py-24 overflow-hidden">
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
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300 mb-6"
          >
            <Briefcase className="w-4 h-4" />
            Professional Journey
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6"
          >
            <span className="gradient-text">Work</span>
            <br />
            <span className="gradient-text">Experience</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            My professional journey in mobile development, building innovative
            solutions and leading technical teams
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full mx-auto mt-8"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={cardVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Card Background with Glass Effect */}
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-gray-700/20 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-teal-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  {/* Header Section */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      {/* Position and Company */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                          <Briefcase className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl lg:text-3xl font-heading font-bold text-gray-800 dark:text-gray-200 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {exp.position}
                          </h3>
                          <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-2">
                            <Sparkles className="w-5 h-5" />
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      {/* Meta Information */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm font-medium">
                            {exp.duration}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm font-medium">
                            {exp.country}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <Users className="w-4 h-4" />
                          <span className="text-sm font-medium">
                            {exp.roleTypeDisplayName}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="mt-6 lg:mt-0 lg:ml-6">
                      <motion.a
                        href={`/experience/${exp.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                      >
                        <span>View Details</span>
                        <motion.div
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.div>
                      </motion.a>
                    </div>
                  </div>

                  {/* Description Section */}
                  {exp.description && exp.description.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                        <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-3">
                        {exp.description.slice(0, 3).map((desc, descIndex) => (
                          <motion.li
                            key={descIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.5,
                              delay: descIndex * 0.1,
                            }}
                            className="text-gray-600 dark:text-gray-300 flex items-start gap-3"
                          >
                            <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mt-2"></div>
                            <span className="leading-relaxed">{desc}</span>
                          </motion.li>
                        ))}
                        {exp.description.length > 3 && (
                          <motion.li
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-gray-500 dark:text-gray-400 text-sm italic flex items-center gap-2"
                          >
                            <Clock className="w-4 h-4" />+
                            {exp.description.length - 3} more
                            responsibilities...
                          </motion.li>
                        )}
                      </ul>
                    </div>
                  )}

                  {/* Technologies Section */}
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                        <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        Technologies & Tools
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {exp.technologies.slice(0, 8).map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.3,
                              delay: techIndex * 0.05,
                            }}
                            className="px-4 py-2 bg-gradient-to-r from-blue-100 to-teal-100 dark:from-blue-900/30 dark:to-teal-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium border border-blue-200/50 dark:border-blue-700/50 hover:scale-105 transition-transform duration-200"
                          >
                            {tech}
                          </motion.span>
                        ))}
                        {exp.technologies.length > 8 && (
                          <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.4 }}
                            className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-600"
                          >
                            +{exp.technologies.length - 8} more
                          </motion.span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
