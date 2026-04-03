"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Youtube,
  Facebook,
  Instagram,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import { useAppConfigs } from "@/hooks/useAppConfigs";
import { useContact } from "@/hooks/useContact";
import { useEffect, useState } from "react";

const iconMap = {
  Github,
  Linkedin,
  Youtube,
  Facebook,
  Instagram,
  MessageCircle,
};

const ROLES = [
  "Technical Lead",
  "Mobile Architect",
  "Full-Stack Developer",
  "App Security Expert",
  "React & NestJS Engineer",
];

function RotatingRole() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const cycle = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % ROLES.length);
        setVisible(true);
      }, 300);
    }, 2800);
    return () => clearInterval(cycle);
  }, []);

  return (
    <span
      className="inline-block transition-all duration-300"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(4px)",
      }}
    >
      {ROLES[index]}
    </span>
  );
}

export default function HeroSection() {
  const { stats, loading } = useAppConfigs();
  const { contact } = useContact();

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-16 bg-white dark:bg-[#0a0a0a] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-16">

        {/* ── Top row: label + availability ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-10"
        >
          <p
            className="text-sm text-gray-400 dark:text-gray-500 tracking-wider"
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
          >
            — <RotatingRole />
          </p>
          <div className="hidden sm:flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span
              className="text-[11px] text-gray-400 dark:text-gray-500 tracking-widest uppercase"
              style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
            >
              Available for work
            </span>
          </div>
        </motion.div>

        {/* ── Giant name ── */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-bold leading-[0.92] tracking-tight text-gray-900 dark:text-white"
            style={{ fontSize: "clamp(56px, 10vw, 140px)" }}
          >
            Muhammad
          </motion.h1>
        </div>

        {/* ── Second line: Mujtaba + tagline side by side ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-bold leading-[0.92] tracking-tight text-gray-900 dark:text-white"
              style={{ fontSize: "clamp(56px, 10vw, 140px)" }}
            >
              Mujtaba.
            </motion.h1>
          </div>

          {/* Tagline pinned to bottom-right on desktop */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base text-gray-500 dark:text-gray-400 max-w-xs leading-relaxed lg:mb-2 lg:text-right"
          >
            I build things that ship — mobile apps, APIs, and everything in between.
          </motion.p>
        </div>

        {/* ── Divider ── */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="origin-left w-full h-px bg-gray-100 dark:bg-gray-800 mb-10"
        />

        {/* ── Bottom row: stats + CTAs + socials ── */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

          {/* Stats */}
          {!loading && stats && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-8"
            >
              {[
                { value: stats.total_awards, label: "Awards" },
                { value: stats.total_clients, label: "Clients" },
                { value: stats.total_experience, label: "Yrs Exp" },
                { value: stats.total_projects, label: "Projects" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tabular-nums">
                    {value}+
                  </div>
                  <div className="text-[10px] text-gray-400 dark:text-gray-600 uppercase tracking-[0.15em] mt-1">
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* CTAs + Socials */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-5"
          >
            {/* Socials */}
            <div className="flex gap-2">
              {contact.socialLinks.map((link) => {
                const IconComponent = iconMap[link.icon as keyof typeof iconMap];
                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.platform}
                    className="p-2.5 text-gray-400 hover:text-gray-900 dark:hover:text-white border border-gray-100 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200"
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-8 bg-gray-100 dark:bg-gray-800" />

            {/* CTA buttons */}
            <div className="flex items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-semibold rounded-full hover:opacity-75 transition-opacity duration-200"
              >
                View Work
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="text-sm font-semibold text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 underline underline-offset-4 decoration-gray-200 dark:decoration-gray-800"
              >
                Get in touch
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
