"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import MJLogo from "@/components/MJLogo";

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
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800/60"
            : "bg-white/60 dark:bg-[#0a0a0a]/60 backdrop-blur-sm"
        }`}
      >
        {/* Scroll progress — thin, neutral */}
        <motion.div
          className="absolute bottom-0 left-0 h-[1px] bg-gray-900 dark:bg-white z-60 origin-left"
          style={{ width: progressWidth }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              onClick={scrollToTop}
              className="cursor-pointer"
            >
              <MJLogo size={36} className="rounded-xl" />
            </motion.div>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.06 }}
                  onClick={item.action}
                  className={`px-4 py-2 text-sm transition-colors duration-200 ${
                    activeSection === item.id
                      ? "text-gray-900 dark:text-white font-semibold"
                      : "text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white font-medium"
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Mobile hamburger */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <div className="w-5 h-4 flex flex-col justify-between">
                  <motion.span
                    animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 7 : 0 }}
                    transition={{ duration: 0.22 }}
                    className="block w-full h-0.5 bg-current rounded-full"
                  />
                  <motion.span
                    animate={{ opacity: isMenuOpen ? 0 : 1, scaleX: isMenuOpen ? 0 : 1 }}
                    transition={{ duration: 0.18 }}
                    className="block w-full h-0.5 bg-current rounded-full"
                  />
                  <motion.span
                    animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -7 : 0 }}
                    transition={{ duration: 0.22 }}
                    className="block w-full h-0.5 bg-current rounded-full"
                  />
                </div>
              </button>
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
              transition={{ duration: 0.24, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden border-t border-gray-100 dark:border-gray-800"
            >
              <div className="px-6 py-4 space-y-0.5 bg-white dark:bg-[#0a0a0a]">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.2 }}
                    onClick={item.action}
                    className={`w-full text-left px-3 py-2.5 text-sm transition-colors duration-200 ${
                      activeSection === item.id
                        ? "text-gray-900 dark:text-white font-semibold"
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
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
