"use client";

import { motion } from "framer-motion";
import { useSkills } from "../../hooks/useSkills";
import SkillsLoadingComponent from "../components/skills/SkillsLoadingComponent";
import SkillsErrorComponent from "../components/skills/SkillsErrorComponent";

export default function SkillsSection() {
  const { skills, techStackCategories, loading, error } = useSkills();

  if (loading) {
    return <SkillsLoadingComponent />;
  }

  if (error) {
    return <SkillsErrorComponent error={error} />;
  }

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

        {/* Group skills by category */}
        {techStackCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 text-center">
              {category.name}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {category.stacks.map((stack, stackIndex) => {
                const skill = skills.find(
                  (s) => s.name === stack.name && s.category === category.name
                );
                // const proficiencyPercentage = Math.round(
                //   stack.proficiency * 100
                // );

                return (
                  <motion.div
                    key={`${category.id}-${stack.name}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: categoryIndex * 0.2 + stackIndex * 0.1,
                    }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass rounded-2xl p-4 text-center hover:shadow-xl transition-all duration-300 group cursor-pointer"
                    // title={`${stack.name} - ${proficiencyPercentage}% proficiency`}
                  >
                    {skill && (
                      <skill.icon className="h-10 w-10 mx-auto mb-3 text-blue-600 dark:text-blue-400 group-hover:text-teal-500 transition-colors" />
                    )}
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-sm mb-2">
                      {stack.name}
                    </h4>
                    {/* <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${proficiencyPercentage}%` }}
                      ></div>
                    </div> */}
                    {/* <p className="text-xs text-gray-500 dark:text-gray-400">
                      {proficiencyPercentage}%
                    </p> */}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
