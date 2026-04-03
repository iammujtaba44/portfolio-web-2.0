"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useSkills } from "../../hooks/useSkills";

interface SkillBarProps {
  proficiency: number;
  delay?: number;
}

function SkillBar({ proficiency, delay = 0 }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="mt-2 h-1 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${Math.round(proficiency * 100)}%` } : { width: 0 }}
        transition={{ duration: 0.9, delay, ease: [0.4, 0, 0.2, 1] }}
        className="h-full rounded-full bg-gray-900 dark:bg-white"
      />
    </div>
  );
}

export default function SkillsSection() {
  const { skills, techStackCategories, loading, error } = useSkills();

  const SectionHeader = () => (
    <div className="mb-12">
      <p
        className="text-sm text-gray-400 dark:text-gray-500 tracking-wider mb-4"
        style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
      >
        — Technical Skills
      </p>
      <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
        Skills &
        <br />
        Technologies
      </h2>
      <p className="mt-4 text-base text-gray-500 dark:text-gray-400 max-w-md">
        Tools and technologies I use to craft modern, high-performance applications
      </p>
    </div>
  );

  if (loading) {
    return (
      <section id="skills" className="py-24 bg-white dark:bg-[#0a0a0a]">
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
      <section id="skills" className="py-24 bg-white dark:bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader />
          <p className="text-sm text-red-500 dark:text-red-400 py-8">Error loading skills: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="py-24 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionHeader />
        </motion.div>

        <div className="space-y-14">
          {techStackCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.08 }}
              viewport={{ once: true, margin: "-40px" }}
            >
              {/* Category header */}
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
                >
                  {category.name}
                </h3>
                <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800" />
                <span className="text-xs text-gray-400 dark:text-gray-600 tabular-nums">
                  {category.stacks.length}
                </span>
              </div>

              {/* Skills grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {category.stacks.map((stack, stackIndex) => {
                  const skill = skills.find(
                    (s) => s.name === stack.name && s.category === category.name
                  );

                  return (
                    <motion.div
                      key={`${category.id}-${stack.name}`}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: stackIndex * 0.03 }}
                      viewport={{ once: true, margin: "-40px" }}
                      className="p-4 bg-gray-50 dark:bg-[#111] rounded-xl border border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-colors duration-200 cursor-default"
                    >
                      {/* Icon */}
                      {skill && (
                        <div className="mb-3 flex justify-center">
                          <skill.icon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                        </div>
                      )}

                      {/* Name */}
                      <p className="text-center text-xs font-semibold text-gray-700 dark:text-gray-300 leading-tight mb-2">
                        {stack.name}
                      </p>

                      {/* Bar */}
                      <SkillBar
                        proficiency={stack.proficiency}
                        delay={stackIndex * 0.03 + 0.2}
                      />

                      {/* Percentage */}
                      <p className="text-center text-[10px] text-gray-400 dark:text-gray-600 mt-1.5 tabular-nums">
                        {Math.round(stack.proficiency * 100)}%
                      </p>
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
