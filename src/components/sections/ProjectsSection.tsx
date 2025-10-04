"use client";

import { motion } from "framer-motion";
import { useProjects } from "../../hooks/useProjects";
import {
  getAppLinkIcon,
  getAppLinkLabel,
} from "../components/projects/ProjectsCommonComponents";

export default function ProjectsSection() {
  const { featuredProjects, loading, error } = useProjects();

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Loading projects...
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-red-600 dark:text-red-400">
              Error loading projects: {error}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-heading font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Some of my recent work and side projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="mb-4">
                <img
                  src={project.imageUrl}
                  alt={project.projectName}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-heading font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.projectName}
                  </h3>
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-md text-xs">
                    {project.projectTypeDisplayName}
                  </span>
                </div>
                <p className="text-md text-gray-500 dark:text-gray-400 mb-2 font-bold tracking-wide">
                  {project.companyName}
                </p>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.appLinks.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg text-sm transition-colors"
                  >
                    {getAppLinkIcon(link.type)}
                    <span className="ml-2">{getAppLinkLabel(link.type)}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
