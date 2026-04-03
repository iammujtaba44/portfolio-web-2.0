"use client";

import { motion } from "framer-motion";
import { useProjects } from "@/hooks/useProjects";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import {
  getAppLinkIcon,
  getAppLinkLabel,
} from "@/components/components/projects/ProjectsCommonComponents";

export default function WorksPage() {
  const { projects, loading, error } = useProjects();
  const router = useRouter();

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#0a0a0a] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-gray-200 dark:border-gray-700 border-t-gray-900 dark:border-t-white rounded-full animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#0a0a0a] flex items-center justify-center">
        <p className="text-sm text-gray-400">Failed to load works.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">

        {/* Back */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          onClick={() => router.push("/")}
          className="inline-flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 mb-16"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          <p
            className="text-sm text-gray-400 dark:text-gray-500 tracking-wider mb-6"
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
          >
            — Selected Work
          </p>
          <h1
            className="font-bold text-gray-900 dark:text-white leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(48px, 8vw, 120px)" }}
          >
            Works.
          </h1>
          <p className="mt-6 text-base text-gray-500 dark:text-gray-400 max-w-md">
            A collection of products, open-source projects, and client work I&apos;ve shipped.
          </p>
        </motion.div>

        {/* Full-width divider */}
        <div className="h-px bg-gray-100 dark:bg-gray-800 mb-0" />

        {/* Project rows */}
        <div>
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                viewport={{ once: true, margin: "-60px" }}
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-0 py-16 lg:py-20 ${
                    isEven ? "" : "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
                  }`}
                >
                  {/* Image */}
                  <div className={`relative overflow-hidden aspect-[16/10] rounded-2xl bg-gray-100 dark:bg-gray-900 ${isEven ? "lg:pr-10" : "lg:pl-10"}`}>
                    <img
                      src={project.imageUrl}
                      alt={project.projectName}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    {/* Type pill */}
                    <span
                      className="absolute top-4 left-4 text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-400 px-3 py-1 bg-white/90 dark:bg-black/80 backdrop-blur-sm rounded-full border border-gray-100 dark:border-gray-700"
                      style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
                    >
                      {project.projectTypeDisplayName}
                    </span>
                  </div>

                  {/* Content */}
                  <div className={`flex flex-col justify-center gap-6 pt-8 lg:pt-0 ${isEven ? "lg:pl-16" : "lg:pr-16"}`}>
                    {/* Index */}
                    <span
                      className="text-xs text-gray-300 dark:text-gray-700 tracking-widest"
                      style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Name */}
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                      {project.projectName}
                    </h2>

                    {/* Company */}
                    <p
                      className="text-sm text-gray-400 dark:text-gray-500 tracking-wider -mt-2"
                      style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
                    >
                      {project.companyName}
                    </p>

                    {/* Description */}
                    <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Links */}
                    <div className="flex flex-wrap gap-3 pt-2">
                      {project.appLinks.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-200"
                        >
                          {getAppLinkIcon(link.type)}
                          {getAppLinkLabel(link.type)}
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Divider between projects */}
                {index < projects.length - 1 && (
                  <div className="h-px bg-gray-100 dark:bg-gray-800" />
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
