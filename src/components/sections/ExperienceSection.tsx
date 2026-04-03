"use client";

import { motion } from "framer-motion";
import { useExperience } from "../../hooks/useExperience";
import { Calendar, MapPin, ExternalLink, Users, Clock } from "lucide-react";

export default function ExperienceSection() {
  const { experiences, isLoading, error } = useExperience();

  const SectionHeader = () => (
    <div className="mb-12">
      <p
        className="text-sm text-gray-400 dark:text-gray-500 tracking-wider mb-4"
        style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
      >
        — Professional Journey
      </p>
      <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
        Work
        <br />
        Experience
      </h2>
      <p className="mt-4 text-base text-gray-500 dark:text-gray-400 max-w-md">
        My professional journey building innovative mobile and full-stack solutions
      </p>
    </div>
  );

  if (isLoading) {
    return (
      <section id="experience" className="py-24 bg-white dark:bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader />
          <div className="flex justify-center py-12">
            <div className="w-8 h-8 border-2 border-gray-200 dark:border-gray-700 border-t-gray-900 dark:border-t-white rounded-full animate-spin" />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="experience" className="py-24 bg-white dark:bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader />
          <p className="text-sm text-red-500 dark:text-red-400 py-8">Error loading experiences: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="py-24 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionHeader />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-100 dark:bg-gray-800 hidden sm:block" />

          <div className="space-y-5 sm:pl-14">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                viewport={{ once: true, margin: "-40px" }}
                className="group relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[37px] top-6 w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600 border-2 border-white dark:border-[#0a0a0a] hidden sm:block" />

                {/* Card */}
                <div className="bg-gray-50 dark:bg-[#111] rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-colors duration-200">

                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                        {exp.position}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mt-0.5">
                        {exp.company}
                      </p>
                    </div>

                    <a
                      href={`/experience/${exp.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 self-start inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 rounded-full transition-all duration-200"
                    >
                      Details
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
                      <Calendar className="w-3 h-3" />
                      {exp.duration}
                    </span>
                    <span className="text-gray-200 dark:text-gray-700">·</span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
                      <MapPin className="w-3 h-3" />
                      {exp.country}
                    </span>
                    <span className="text-gray-200 dark:text-gray-700">·</span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
                      <Users className="w-3 h-3" />
                      {exp.roleTypeDisplayName}
                    </span>
                  </div>

                  {/* Description */}
                  {exp.description && exp.description.length > 0 && (
                    <ul className="space-y-1.5 mb-4">
                      {exp.description.slice(0, 3).map((desc, descIndex) => (
                        <li
                          key={descIndex}
                          className="flex items-start gap-2.5 text-sm text-gray-500 dark:text-gray-400 leading-relaxed"
                        >
                          <span className="flex-shrink-0 w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600 mt-2" />
                          {desc}
                        </li>
                      ))}
                      {exp.description.length > 3 && (
                        <li className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-600">
                          <Clock className="w-3 h-3" />
                          +{exp.description.length - 3} more responsibilities
                        </li>
                      )}
                    </ul>
                  )}

                  {/* Tech tags */}
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.slice(0, 8).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2.5 py-1 bg-white dark:bg-[#0a0a0a] text-gray-500 dark:text-gray-400 rounded-lg text-xs font-medium border border-gray-100 dark:border-gray-800"
                        >
                          {tech}
                        </span>
                      ))}
                      {exp.technologies.length > 8 && (
                        <span className="px-2.5 py-1 text-gray-400 dark:text-gray-600 rounded-lg text-xs">
                          +{exp.technologies.length - 8}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
