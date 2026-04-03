"use client";

import { motion } from "framer-motion";
import { useProjects } from "../../hooks/useProjects";
import {
  getAppLinkIcon,
  getAppLinkLabel,
} from "../components/projects/ProjectsCommonComponents";
import { ExternalLink, ArrowUpRight } from "lucide-react";

export default function ProjectsSection() {
  const { featuredProjects, loading, error } = useProjects();

  const SectionHeader = () => (
    <div className="mb-12">
      <p
        className="text-sm text-gray-400 dark:text-gray-500 tracking-wider mb-4"
        style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
      >
        — Featured Work
      </p>
      <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
        Featured
        <br />
        Projects
      </h2>
      <p className="mt-4 text-base text-gray-500 dark:text-gray-400 max-w-md">
        Recent work and side projects that showcase my technical depth
      </p>
    </div>
  );

  if (loading) {
    return (
      <section id="projects" className="py-24 bg-gray-50 dark:bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader />
          <div className="flex justify-center py-12">
            <div className="w-8 h-8 border-2 border-gray-300 dark:border-gray-700 border-t-gray-900 dark:border-t-white rounded-full animate-spin" />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-24 bg-gray-50 dark:bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader />
          <p className="text-sm text-red-500 dark:text-red-400 py-8">Error loading projects: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionHeader />
        </motion.div>

        {/* See all link */}
        <div className="flex justify-end mb-8">
          <a
            href="/works"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
          >
            See all works
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              viewport={{ once: true, margin: "-40px" }}
              className="group flex flex-col bg-white dark:bg-[#0a0a0a] rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-colors duration-200"
            >
              {/* Project image */}
              <div className="relative overflow-hidden h-44 bg-gray-100 dark:bg-gray-900 flex-shrink-0">
                <img
                  src={project.imageUrl}
                  alt={project.projectName}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Type badge */}
                <span className="absolute top-3 right-3 px-2.5 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-gray-600 dark:text-gray-400 rounded-lg text-[10px] font-semibold uppercase tracking-wider">
                  {project.projectTypeDisplayName}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <div className="mb-2">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white leading-tight mb-1">
                    {project.projectName}
                  </h3>
                  <p className="text-xs text-gray-400 dark:text-gray-500 font-medium">
                    {project.companyName}
                  </p>
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.appLinks.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 rounded-lg text-xs font-medium transition-all duration-200"
                    >
                      {getAppLinkIcon(link.type)}
                      <span>{getAppLinkLabel(link.type)}</span>
                      <ExternalLink className="w-3 h-3 opacity-50" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
