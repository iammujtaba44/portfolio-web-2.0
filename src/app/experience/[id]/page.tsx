"use client";

import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { useExperience } from "../../../hooks/useExperience";
import { useEffect, useState } from "react";

export default function ExperienceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { experiences, isLoading, error } = useExperience();
  const [experience, setExperience] = useState<any>(null);

  useEffect(() => {
    if (experiences.length > 0 && params.id) {
      const foundExperience = experiences.find((exp) => exp.id === params.id);
      if (foundExperience) {
        setExperience(foundExperience);
      } else {
        // If not found in local data, redirect to home
        router.push("/");
      }
    }
  }, [experiences, params.id, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error || !experience) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Experience Not Found
          </h1>
          <button
            onClick={() => router.push("/")}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-teal-500/20"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <button
              onClick={() => router.push("/#experience")}
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors mb-8"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Experience
            </button>

            <h1 className="text-5xl md:text-6xl font-heading font-bold">
              <span className="gradient-text">{experience.position}</span>
            </h1>

            <p className="text-3xl md:text-4xl text-blue-600 dark:text-blue-400 font-semibold">
              {experience.company}
            </p>

            <div className="space-y-2">
              <p className="text-xl text-gray-600 dark:text-gray-300">
                {experience.duration} • {experience.country}
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                {experience.roleTypeDisplayName}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Description */}
          {experience.description && experience.description.length > 0 && (
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-heading font-bold text-gray-800 dark:text-gray-200 mb-6">
                Key Responsibilities
              </h2>
              <ul className="space-y-4">
                {experience.description.map((desc: string, index: number) => (
                  <li
                    key={index}
                    className="text-gray-600 dark:text-gray-300 flex items-start"
                  >
                    <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">
                      •
                    </span>
                    <span className="text-lg">{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          {experience.technologies && experience.technologies.length > 0 && (
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-heading font-bold text-gray-800 dark:text-gray-200 mb-6">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-3">
                {experience.technologies.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-lg font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Additional Details */}
          <div className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-heading font-bold text-gray-800 dark:text-gray-200 mb-6">
              Experience Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Company
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {experience.company}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Duration
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {experience.duration}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Location
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {experience.country}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Employment Type
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {experience.roleTypeDisplayName}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
