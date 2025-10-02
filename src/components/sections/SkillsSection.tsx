"use client";

import { motion } from "framer-motion";
import { useSkills } from "../../hooks/useSkills";

export default function SkillsSection() {
  const { skills } = useSkills();

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-heading font-bold gradient-text mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Tools and technologies I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="glass rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 group cursor-pointer"
              title={`${skill.name} - ${skill.level}`}
            >
              <skill.icon className="h-12 w-12 mx-auto mb-4 text-blue-600 dark:text-blue-400 group-hover:text-teal-500 transition-colors" />
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                {skill.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {skill.level}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
