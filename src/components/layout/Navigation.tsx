"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 40);

      const sections = ["home", "about", "experience", "projects", "skills", "contact"];
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) setActiveSection(current);
      else if (scrollY < 100) setActiveSection("home");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home",       label: "Home",       action: scrollToTop },
    { id: "about",      label: "About",      action: () => scrollToSection("about") },
    { id: "experience", label: "Experience", action: () => scrollToSection("experience") },
    { id: "projects",   label: "Projects",   action: () => scrollToSection("projects") },
    { id: "skills",     label: "Skills",     action: () => scrollToSection("skills") },
    { id: "contact",    label: "Contact",    action: () => scrollToSection("contact") },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/88 dark:bg-gray-950/88 backdrop-blur-2xl border-b border-gray-200/50 dark:border-white/6 shadow-lg shadow-black/5 dark:shadow-black/30"
            : "bg-white/60 dark:bg-gray-950/60 backdrop-blur-md border-b border-transparent"
        }`}
      >
        {/* Scroll progress bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-600 via-sky-400 to-teal-500 z-60 origin-left"
          style={{ width: progressWidth }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center"
            >
              <motion.div
                whileTap={{ scale: 0.92 }}
                className="relative cursor-pointer"
                onClick={scrollToTop}
              >
                <Image
                  src="/icon.png"
                  alt="MJ"
                  width={38}
                  height={38}
                  className="rounded-full shadow-md ring-2 ring-blue-500/20"
                />
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 opacity-0 hover:opacity-20 transition-opacity duration-300 blur-sm scale-110"></div>
              </motion.div>
            </motion.div>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + index * 0.07 }}
                  onClick={item.action}
                  className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-colors duration-200 ${
                    activeSection === item.id
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-xl bg-blue-50 dark:bg-blue-900/25 border border-blue-100 dark:border-blue-700/30"
                      initial={false}
                      transition={{ type: "spring", stiffness: 480, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Mobile hamburger */}
            <div className="lg:hidden">
              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                className="p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/8 transition-colors duration-200"
              >
                <div className="w-5 h-4 flex flex-col justify-between">
                  <motion.span
                    animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 7 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="block w-full h-0.5 bg-current rounded-full"
                  />
                  <motion.span
                    animate={{ opacity: isMenuOpen ? 0 : 1, scaleX: isMenuOpen ? 0 : 1 }}
                    transition={{ duration: 0.2 }}
                    className="block w-full h-0.5 bg-current rounded-full"
                  />
                  <motion.span
                    animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -7 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="block w-full h-0.5 bg-current rounded-full"
                  />
                </div>
              </motion.button>
            </div>

          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden border-t border-gray-100 dark:border-white/6"
            >
              <div className="px-4 py-3 space-y-1 bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06, duration: 0.25 }}
                    onClick={item.action}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-colors duration-200 ${
                      activeSection === item.id
                        ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/6"
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
