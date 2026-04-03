"use client";

import { motion } from "framer-motion";
import { useProjects } from "../../hooks/useProjects";
import {
  getAppLinkIcon,
  getAppLinkLabel,
} from "../components/projects/ProjectsCommonComponents";
import { Code, ExternalLink, Sparkles, Award } from "lucide-react";

export default function ProjectsSection() {
  const { featuredProjects, loading, error } = useProjects();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
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
        <Code className="w-4 h-4" />
        Featured Work
      </motion.div>

      <motion.h2
        variants={itemVariants}
        className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black leading-tight mb-4"
      >
        <span className="gradient-text">Featured</span>
        <br />
        <span className="gradient-text">Projects</span>
      </motion.h2>

      <motion.p
        variants={itemVariants}
        className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto"
      >
        Recent work and side projects that showcase my technical depth
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="w-16 h-1 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full mx-auto mt-6"
      />
    </motion.div>
  );

  if (loading) {
    return (
      <section id="projects" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"></div>
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
      <section id="projects" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader />
          <div className="text-center py-12">
            <span className="inline-flex items-center gap-2 px-5 py-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl text-sm">
              <Award className="w-4 h-4" />
              Error loading projects: {error}
            </span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background — alternates from Experience section */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(20,184,166,0.08),transparent_55%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(59,130,246,0.08),transparent_55%)]"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>

      {/* Ambient orbs */}
      <div className="absolute top-16 right-8 w-72 h-72 bg-teal-400/15 dark:bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-16 left-8 w-64 h-64 bg-blue-400/15 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              transition={{ duration: 0.6, delay: index * 0.07 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex flex-col"
            >
              <div className="flex flex-col h-full relative bg-white/85 dark:bg-white/4 backdrop-blur-xl rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-100 dark:border-white/8 hover:border-blue-200/60 dark:hover:border-blue-500/25 shadow-sm hover:shadow-xl hover:shadow-blue-500/8 dark:hover:shadow-blue-500/10 transition-all duration-350">

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-teal-500/0 group-hover:from-blue-500/3 group-hover:to-teal-500/3 transition-all duration-400 pointer-events-none z-10"></div>

                {/* Project image */}
                <div className="relative overflow-hidden h-44 sm:h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex-shrink-0">
                  <img
                    src={project.imageUrl}
                    alt={project.projectName}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Type badge on image */}
                  <div className="absolute top-3 right-3 z-20">
                    <span className="px-2.5 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-gray-700 dark:text-gray-300 rounded-lg text-[10px] font-bold uppercase tracking-wider border border-white/50 dark:border-white/10 shadow-sm">
                      {project.projectTypeDisplayName}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col flex-1 p-5 sm:p-6">
                  {/* Project name & company */}
                  <div className="mb-3">
                    <h3 className="text-base sm:text-lg font-heading font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 leading-tight mb-1.5">
                      {project.projectName}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 text-xs font-semibold flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 flex-shrink-0" />
                      {project.companyName}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Links */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.appLinks.map((link, linkIndex) => (
                      <motion.a
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileTap={{ scale: 0.94 }}
                        className="inline-flex items-center gap-1.5 px-3 py-2 bg-gray-50 dark:bg-white/6 hover:bg-blue-50 dark:hover:bg-blue-900/25 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl text-xs font-semibold border border-gray-100 dark:border-white/8 hover:border-blue-200/60 dark:hover:border-blue-500/30 transition-all duration-200"
                      >
                        {getAppLinkIcon(link.type)}
                        <span>{getAppLinkLabel(link.type)}</span>
                        <ExternalLink className="w-3 h-3 opacity-60" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
