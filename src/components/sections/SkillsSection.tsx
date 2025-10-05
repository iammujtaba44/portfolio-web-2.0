"use client";

import { motion } from "framer-motion";
import { useSkills } from "../../hooks/useSkills";
import SkillsLoadingComponent from "../components/skills/SkillsLoadingComponent";
import SkillsErrorComponent from "../components/skills/SkillsErrorComponent";
import { Code, Award } from "lucide-react";

export default function SkillsSection() {
  const { skills, techStackCategories, loading, error } = useSkills();

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

  if (loading) {
    return (
      <section id="skills" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 mb-6">
              <Code className="w-4 h-4" />
              Technical Skills
            </div>

            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Technologies and tools I use to build modern applications
            </p>
          </div>

          <div className="flex justify-center items-center py-12">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full"
            />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="skills" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 mb-6">
              <Code className="w-4 h-4" />
              Technical Skills
            </div>

            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Technologies and tools I use to build modern applications
            </p>
          </div>

          <div className="text-center py-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl">
              <Award className="w-5 h-5" />
              Error loading skills: {error}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 mb-6">
            <Code className="w-4 h-4" />
            Technical Skills
          </div>

          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to build modern applications
          </p>
        </motion.div>

        <div className="space-y-12">
          {techStackCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-heading font-semibold text-gray-900 dark:text-white text-center">
                {category.name}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {category.stacks.map((stack, stackIndex) => {
                  const skill = skills.find(
                    (s) => s.name === stack.name && s.category === category.name
                  );

                  return (
                    <motion.div
                      key={`${category.id}-${stack.name}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: stackIndex * 0.05,
                      }}
                      whileHover={{ y: -2 }}
                      className="group"
                    >
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 border border-gray-200 dark:border-gray-700">
                        {skill && (
                          <div className="mb-3 flex justify-center">
                            <skill.icon className="h-8 w-8 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                          </div>
                        )}

                        <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                          {stack.name}
                        </h4>

                        <div className="mt-2 flex justify-center">
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((level) => (
                              <div
                                key={level}
                                className={`w-1.5 h-1.5 rounded-full ${
                                  level <= Math.round(stack.proficiency * 5)
                                    ? "bg-blue-500"
                                    : "bg-gray-300 dark:bg-gray-600"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
