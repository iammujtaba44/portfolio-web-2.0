"use client";

import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { useExperience } from "../../../hooks/useExperience";
import { useEffect, useState } from "react";
import { Experience } from "../../../domain/entities/Experience";
import { ArrowLeft, MapPin, Calendar, Users } from "lucide-react";

export default function ExperienceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { experiences, isLoading, error } = useExperience();
  const [experience, setExperience] = useState<Experience | null>(null);

  useEffect(() => {
    if (experiences.length > 0 && params.id) {
      const found = experiences.find((exp) => exp.id === params.id);
      if (found) {
        setExperience(found);
      } else {
        router.push("/");
      }
    }
  }, [experiences, params.id, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#0a0a0a] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-gray-200 dark:border-gray-700 border-t-gray-900 dark:border-t-white rounded-full animate-spin" />
      </div>
    );
  }

  if (error || !experience) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#0a0a0a] flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-gray-500 dark:text-gray-400">Experience not found.</p>
          <button
            onClick={() => router.push("/")}
            className="text-sm font-semibold text-gray-900 dark:text-white underline underline-offset-4"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-20">

        {/* Back */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          onClick={() => router.push("/#experience")}
          className="inline-flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 mb-16"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Experience
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6 mb-12"
        >
          {/* Mono label */}
          <p
            className="text-sm text-gray-400 dark:text-gray-500 tracking-wider"
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
          >
            — Work Experience
          </p>

          {/* Position */}
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
            {experience.position}
          </h1>

          {/* Company */}
          <p className="text-xl text-gray-500 dark:text-gray-400 font-medium">
            {experience.company}
          </p>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-gray-100 dark:border-gray-800">
            <span className="inline-flex items-center gap-1.5 text-sm text-gray-400 dark:text-gray-500">
              <Calendar className="w-3.5 h-3.5" />
              {experience.duration}
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-200 dark:bg-gray-700" />
            <span className="inline-flex items-center gap-1.5 text-sm text-gray-400 dark:text-gray-500">
              <MapPin className="w-3.5 h-3.5" />
              {experience.country}
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-200 dark:bg-gray-700" />
            <span className="inline-flex items-center gap-1.5 text-sm text-gray-400 dark:text-gray-500">
              <Users className="w-3.5 h-3.5" />
              {experience.roleTypeDisplayName}
            </span>
          </div>
        </motion.div>

        {/* Body */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-12"
        >

          {/* Responsibilities */}
          {experience.description && experience.description.length > 0 && (
            <div>
              <h2
                className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-6"
                style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
              >
                Key Responsibilities
              </h2>
              <ul className="space-y-4">
                {experience.description.map((desc: string, index: number) => (
                  <li key={index} className="flex items-start gap-4">
                    <span
                      className="flex-shrink-0 text-xs text-gray-300 dark:text-gray-700 mt-1 tabular-nums"
                      style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Divider */}
          {experience.technologies && experience.technologies.length > 0 &&
            experience.description && experience.description.length > 0 && (
            <div className="h-px bg-gray-100 dark:bg-gray-800" />
          )}

          {/* Technologies */}
          {experience.technologies && experience.technologies.length > 0 && (
            <div>
              <h2
                className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-6"
                style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
              >
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-gray-50 dark:bg-[#111] text-gray-600 dark:text-gray-400 rounded-lg text-sm font-medium border border-gray-100 dark:border-gray-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

        </motion.div>
      </div>
    </div>
  );
}
