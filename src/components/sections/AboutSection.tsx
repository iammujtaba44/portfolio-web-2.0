"use client";

import { useAppConfigs } from "@/hooks/useAppConfigs";
import { motion } from "framer-motion";
import React from "react";

export default function AboutSection() {
  const { bio } = useAppConfigs();

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-4xl font-heading font-bold gradient-text">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {bio?.about.split("|").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>
          <div className="relative">
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
              <div className="w-72 h-72 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                <div className="text-6xl font-bold gradient-text">MM</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
