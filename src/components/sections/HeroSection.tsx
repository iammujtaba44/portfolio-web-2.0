"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import {
  Github,
  Linkedin,
  Youtube,
  Award,
  Users,
  Briefcase,
  Code,
  Facebook,
  Instagram,
  MessageCircle,
  ArrowDown,
  Zap,
} from "lucide-react";
import { useAppConfigs } from "@/hooks/useAppConfigs";
import { useContact } from "@/hooks/useContact";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

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
      }, 350);
    }, 2800);
    return () => clearInterval(cycle);
  }, []);

  return (
    <span
      className="inline-block transition-all duration-350 ease-in-out"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(6px)" }}
    >
      {ROLES[index]}
    </span>
  );
}

function AnimatedCounter({ target, delay = 0 }: { target: number | string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const unsub = rounded.on("change", (v) => setDisplay(v));
    return unsub;
  }, [rounded]);

  useEffect(() => {
    if (inView) {
      animate(motionVal, Number(target), {
        duration: 1.6,
        delay,
        ease: [0.4, 0, 0.2, 1],
      });
    }
  }, [inView, target, delay, motionVal]);

  return <span ref={ref}>{display}</span>;
}

export default function HeroSection() {
  const { stats, bio, loading, error } = useAppConfigs();
  const { contact } = useContact();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-start relative overflow-hidden pt-20"
    >
      {/* Layered background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/40 to-teal-50/30 dark:from-gray-950 dark:via-blue-950/20 dark:to-teal-950/10"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-60"></div>

      {/* Ambient blobs — GPU-only transforms */}
      <div
        className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-blue-400/15 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
        style={{ willChange: "transform" }}
      ></div>
      <div
        className="absolute bottom-1/4 -right-40 w-[420px] h-[420px] bg-teal-400/15 dark:bg-teal-500/10 rounded-full blur-3xl pointer-events-none"
        style={{ willChange: "transform" }}
      ></div>
      <div className="absolute top-2/3 left-1/2 w-72 h-72 bg-purple-400/8 dark:bg-purple-500/8 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Left Content ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-6 lg:space-y-8 text-left"
          >

            {/* Mobile: compact profile strip */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="lg:hidden flex items-center gap-4"
            >
              <div className="relative flex-shrink-0">
                <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-blue-500/40 ring-offset-2 ring-offset-transparent shadow-lg">
                  <Image
                    src="/profile-2.png"
                    alt="Muhammad Mujtaba"
                    width={56}
                    height={56}
                    className="object-cover object-top w-full h-full"
                  />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white dark:border-gray-950 shadow"></span>
              </div>
              <div>
                <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-0.5">
                  Crafting Exceptional Apps
                </p>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  <RotatingRole />
                </p>
              </div>
            </motion.div>

            {/* Desktop: role badge */}
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="hidden lg:inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-sm font-semibold text-blue-700 dark:text-blue-300 bg-blue-100/80 dark:bg-blue-900/25 border border-blue-200/60 dark:border-blue-700/30"
            >
              <Zap className="w-3.5 h-3.5 text-blue-500" />
              <RotatingRole />
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.18 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-heading font-black leading-[1.03] tracking-tight"
            >
              <span className="gradient-text">Muhammad</span>
              <br />
              <span className="gradient-text">Mujtaba</span>
            </motion.h1>

            {/* Animated divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.75, delay: 0.38, ease: "easeOut" }}
              className="origin-left w-20 h-[3px] rounded-full bg-gradient-to-r from-blue-600 via-sky-400 to-teal-500"
            />

            {/* Loading */}
            {loading && (
              <div className="flex items-center gap-3 py-3">
                <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-gray-400 text-sm">Loading...</span>
              </div>
            )}

            {/* Error */}
            {error && (
              <p className="text-red-500 text-sm py-2">{error}</p>
            )}

            {/* Stats with animated counters */}
            {stats && (
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.48 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
              >
                {[
                  { icon: Award, target: stats.total_awards, label: "Awards", color: "blue", delay: 0.5 },
                  { icon: Users, target: stats.total_clients, label: "Clients", color: "emerald", delay: 0.62 },
                  { icon: Briefcase, target: stats.total_experience, label: "Yrs Exp", color: "purple", delay: 0.74 },
                  { icon: Code, target: stats.total_projects, label: "Projects", color: "orange", delay: 0.86 },
                ].map(({ icon: Icon, target, label, color, delay }) => (
                  <div
                    key={label}
                    className={`
                      group relative p-3.5 sm:p-4 rounded-2xl cursor-default
                      bg-white/70 dark:bg-white/4
                      border border-gray-100 dark:border-white/6
                      hover:border-blue-200/70 dark:hover:border-blue-500/25
                      shadow-sm hover:shadow-lg hover:shadow-blue-500/8
                      transition-all duration-300 overflow-hidden
                    `}
                  >
                    {/* Hover micro-gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-teal-500/0 group-hover:from-blue-500/4 group-hover:to-teal-500/4 transition-all duration-400 pointer-events-none rounded-2xl"></div>

                    <div className={`
                      inline-flex p-1.5 rounded-lg mb-2.5
                      ${color === "blue" ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" : ""}
                      ${color === "emerald" ? "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400" : ""}
                      ${color === "purple" ? "bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400" : ""}
                      ${color === "orange" ? "bg-orange-50 dark:bg-orange-900/30 text-orange-500 dark:text-orange-400" : ""}
                    `}>
                      <Icon className="w-4 h-4" />
                    </div>

                    <div className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white leading-none mb-1 tabular-nums">
                      <AnimatedCounter target={target} delay={delay} />+
                    </div>
                    <div className="text-[10px] sm:text-xs font-bold text-gray-500 dark:text-gray-500 uppercase tracking-widest">
                      {label}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.62 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              {/* Primary */}
              <motion.a
                href="#projects"
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-white text-sm sm:text-base overflow-hidden shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-shadow duration-300"
                style={{
                  background: "linear-gradient(135deg, #2563eb 0%, #0ea5e9 55%, #14b8a6 100%)",
                }}
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12 pointer-events-none"></span>
                <span className="relative z-10">View Projects</span>
                <svg className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.a>

              {/* Secondary */}
              <motion.a
                href="#contact"
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-sm sm:text-base border-2 border-transparent overflow-hidden transition-all duration-300"
                style={{
                  background: "linear-gradient(white, white) padding-box, linear-gradient(135deg, #2563eb, #14b8a6) border-box",
                }}
              >
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-500/8 to-teal-500/8 pointer-events-none"></span>
                <span className="relative z-10 gradient-text">Get in Touch</span>
                <svg className="relative z-10 w-4 h-4 text-teal-500 transition-transform duration-300 group-hover:rotate-12" viewBox="0 0 24 24" fill="none">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.76 }}
              className="flex flex-wrap gap-2.5"
            >
              {contact.socialLinks.map((link, i) => {
                const IconComponent = iconMap[link.icon as keyof typeof iconMap];
                return (
                  <motion.a
                    key={link.platform}
                    href={link.url}
                    target={link.platform === "Topmate" ? "_blank" : "_self"}
                    rel={link.platform === "Topmate" ? "noopener noreferrer" : ""}
                    initial={{ opacity: 0, scale: 0.75 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.38, delay: 0.82 + i * 0.07 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={link.platform}
                    className="p-3 bg-white dark:bg-white/6 rounded-xl border border-gray-100 dark:border-white/8 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-600/40 hover:shadow-md hover:shadow-blue-500/10 transition-all duration-200"
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* ── Right: Profile Image (desktop) ── */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.95, delay: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative hidden lg:flex justify-center"
          >
            <div className="relative">
              {/* Slow-rotating glow ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-teal-500 animate-spin-slow opacity-15 blur-2xl scale-110 pointer-events-none"></div>

              {/* Main image card */}
              <div className="relative w-full max-w-[460px] h-[580px] rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/15 dark:shadow-blue-900/40 border border-white/30 dark:border-white/8">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/12 to-teal-500/12 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/55 via-transparent to-transparent z-10"></div>
                <Image
                  src="/profile-2.png"
                  alt="Muhammad Mujtaba — Technical Lead"
                  fill
                  className="object-contain object-center"
                  priority
                />

                {/* Name card overlay */}
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <div
                    className="rounded-2xl px-5 py-4 border border-white/20"
                    style={{
                      background: "rgba(10, 15, 30, 0.65)",
                      backdropFilter: "blur(20px)",
                    }}
                  >
                    <p className="text-white font-bold text-lg leading-tight">Muhammad Mujtaba</p>
                    <p className="text-blue-300 text-sm font-medium mt-0.5">
                      <RotatingRole />
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating accent chips */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-5 -right-8 px-4 py-2.5 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700/60 flex items-center gap-2.5"
              >
                <div className="relative flex-shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                  <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping opacity-60"></div>
                </div>
                <span className="text-xs font-bold text-gray-800 dark:text-gray-200 whitespace-nowrap">
                  Shipping Excellence
                </span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                className="absolute -bottom-5 -left-8 px-4 py-2.5 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700/60 flex items-center gap-2"
              >
                <Code className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span className="text-xs font-bold text-gray-800 dark:text-gray-200">Flutter · React · NestJS</span>
              </motion.div>

              {/* Decorative corner shapes */}
              <div className="absolute -top-7 -left-7 w-14 h-14 border-2 border-blue-300/25 dark:border-blue-500/20 rounded-xl rotate-12"></div>
              <div className="absolute -bottom-7 -right-7 w-10 h-10 border-2 border-teal-300/25 dark:border-teal-500/20 rounded-full"></div>
              <div className="absolute top-1/2 -left-10 w-6 h-6 border-2 border-purple-300/25 dark:border-purple-500/20 rounded-lg rotate-45"></div>
            </div>
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="text-[10px] font-bold text-gray-400 dark:text-gray-600 uppercase tracking-[0.2em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4 text-gray-400 dark:text-gray-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
