"use client";

import { useAppConfigs } from "@/hooks/useAppConfigs";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  const { bio } = useAppConfigs();

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── Left: Text ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-8 lg:sticky lg:top-28"
          >
            {/* Mono label */}
            <p
              className="text-sm text-gray-400 dark:text-gray-500 tracking-wider"
              style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
            >
              — About Me
            </p>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl font-bold leading-[1.08] text-gray-900 dark:text-white">
              Crafting Digital
              <br />
              Experiences
            </h2>

            {/* Bio */}
            <div className="space-y-4 border-t border-gray-200 dark:border-gray-800 pt-6">
              {bio?.about.split("|").map((line, index) => (
                <p
                  key={index}
                  className="text-base text-gray-500 dark:text-gray-400 leading-relaxed"
                >
                  {line}
                </p>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-semibold rounded-full hover:opacity-75 transition-opacity duration-200"
              >
                View My Work
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="text-sm font-semibold text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 underline underline-offset-4 decoration-gray-200 dark:decoration-gray-800"
              >
                Let&apos;s Connect
              </a>
            </div>
          </motion.div>

          {/* ── Right: Photo ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-4"
          >
            {/* Tall portrait */}
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-800">
              <Image
                src="/profile-2.png"
                alt="Muhammad Mujtaba"
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Availability indicator below photo */}
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  Available for new projects
                </span>
              </div>
              <span
                className="text-[10px] text-gray-400 dark:text-gray-600 tracking-widest uppercase"
                style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
              >
                Mobile · Backend · App Security
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
