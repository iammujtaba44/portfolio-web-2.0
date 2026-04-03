"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useSkills } from "../../hooks/useSkills";
import { Code, Sparkles } from "lucide-react";

interface SkillBarProps {
  proficiency: number;
  delay?: number;
}

function SkillBar({ proficiency, delay = 0 }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="mt-2.5 h-1.5 rounded-full bg-gray-200/60 dark:bg-white/10 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${Math.round(proficiency * 100)}%` } : { width: 0 }}
        transition={{ duration: 1, delay, ease: [0.4, 0, 0.2, 1] }}
        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-teal-500"
      />
    </div>
  );
}

export default function SkillsSection() {
  const { skills, techStackCategories, loading, error } = useSkills();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
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
        Technical Skills
      </motion.div>

      <motion.h2
        variants={itemVariants}
        className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black leading-tight mb-4"
      >
        <span className="gradient-text">Skills &</span>
        <br />
        <span className="gradient-text">Technologies</span>
      </motion.h2>

      <motion.p
        variants={itemVariants}
        className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto"
      >
        Tools and technologies I use to craft modern, high-performance applications
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="w-16 h-1 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full mx-auto mt-6"
      />
    </motion.div>
  );

  if (loading) {
    return (
      <section id="skills" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400/15 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-teal-400/15 dark:bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader />
          <div className="flex justify-center items-center py-12">
            <div className="w-10 h-10 border-3 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="skills" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader />
          <div className="text-center py-12">
            <p className="text-red-500 dark:text-red-400">Error loading skills: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Background — matches other premium sections */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(59,130,246,0.08),transparent_55%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(20,184,166,0.08),transparent_55%)]"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>

      {/* Ambient orbs */}
      <div className="absolute top-16 right-12 w-80 h-80 bg-blue-400/15 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-16 left-12 w-72 h-72 bg-teal-400/15 dark:bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400/8 dark:bg-purple-500/6 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader />

        <div className="space-y-16">
          {techStackCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: categoryIndex * 0.1 }}
              viewport={{ once: true, margin: "-60px" }}
            >
              {/* Category label */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-teal-500 shadow-lg shadow-blue-500/25">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-gray-800 dark:text-gray-100">
                    {category.name}
                  </h3>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-blue-200/60 via-gray-200/40 to-transparent dark:from-blue-700/30 dark:via-gray-700/20 dark:to-transparent"></div>
                <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 tabular-nums">
                  {category.stacks.length} skills
                </span>
              </div>

              {/* Skills grid — bento style */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
                {category.stacks.map((stack, stackIndex) => {
                  const skill = skills.find(
                    (s) => s.name === stack.name && s.category === category.name
                  );

                  return (
                    <motion.div
                      key={`${category.id}-${stack.name}`}
                      initial={{ opacity: 0, scale: 0.92, y: 16 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: stackIndex * 0.04,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      viewport={{ once: true, margin: "-40px" }}
                      whileTap={{ scale: 0.97 }}
                      className="group relative"
                    >
                      <div className="relative h-full bg-white/70 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-gray-100 dark:border-white/8 hover:border-blue-200/60 dark:hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden cursor-default">
                        {/* Hover gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-teal-500/0 group-hover:from-blue-500/5 group-hover:to-teal-500/5 transition-all duration-300 rounded-2xl pointer-events-none"></div>

                        <div className="relative z-10">
                          {/* Icon */}
                          {skill && (
                            <div className="mb-3 flex justify-center">
                              <div className="p-2 rounded-xl bg-gray-50 dark:bg-white/8 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors duration-300">
                                <skill.icon className="h-6 w-6 sm:h-7 sm:w-7 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
                              </div>
                            </div>
                          )}

                          {/* Name */}
                          <p className="text-center text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300 leading-tight mb-3">
                            {stack.name}
                          </p>

                          {/* Animated proficiency bar */}
                          <SkillBar
                            proficiency={stack.proficiency}
                            delay={stackIndex * 0.04 + 0.3}
                          />

                          {/* Proficiency percentage */}
                          <p className="text-center text-[10px] font-medium text-gray-400 dark:text-gray-600 mt-1.5 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
                            {Math.round(stack.proficiency * 100)}%
                          </p>
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
