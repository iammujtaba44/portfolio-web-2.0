"use client";

import { motion } from "framer-motion";
import { useExperience } from "../../hooks/useExperience";

export default function ExperienceSection() {
  const { experiences, isLoading, error } = useExperience();

  if (isLoading) {
    return (
      <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold gradient-text mb-4">
              Experience
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              My professional journey in mobile development
            </p>
          </motion.div>
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold gradient-text mb-4">
              Experience
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              My professional journey in mobile development
            </p>
          </motion.div>
          <div className="text-center py-12">
            <p className="text-red-600 dark:text-red-400">
              Error loading experiences: {error}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-heading font-bold gradient-text mb-4">
            Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            My professional journey in mobile development
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass rounded-2xl p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-heading font-bold text-gray-800 dark:text-gray-200">
                    {exp.position}
                  </h3>
                  <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">
                    {exp.company}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 mb-2">
                    {exp.duration} • {exp.country}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {exp.roleTypeDisplayName}
                  </p>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <a
                    href={`/experience/${exp.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                  >
                    See Details
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Show only first 2-3 description items as glimpse */}
              {exp.description && exp.description.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                    Key Responsibilities:
                  </h4>
                  <ul className="space-y-2">
                    {exp.description.slice(0, 2).map((desc, descIndex) => (
                      <li
                        key={descIndex}
                        className="text-gray-600 dark:text-gray-300 flex items-start"
                      >
                        <span className="text-blue-600 dark:text-blue-400 mr-2">
                          •
                        </span>
                        <span>{desc}</span>
                      </li>
                    ))}
                    {exp.description.length > 2 && (
                      <li className="text-gray-500 dark:text-gray-400 text-sm italic">
                        +{exp.description.length - 2} more responsibilities...
                      </li>
                    )}
                  </ul>
                </div>
              )}

              {/* Show only first 6 technologies as glimpse */}
              {exp.technologies && exp.technologies.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.slice(0, 6).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {exp.technologies.length > 6 && (
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-sm">
                        +{exp.technologies.length - 6} more
                      </span>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
