"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Youtube,
  Facebook,
  Instagram,
  MessageCircle,
  Heart,
} from "lucide-react";
import { useContact } from "../../hooks/useContact";
import MJLogo from "@/components/MJLogo";

const iconMap = {
  Github,
  Linkedin,
  Youtube,
  Facebook,
  Instagram,
  MessageCircle,
};

export default function Footer() {
  const { contact } = useContact();

  return (
    <footer className="relative bg-gray-950 dark:bg-black overflow-hidden">
      {/* Subtle top gradient */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(37,99,235,0.08),transparent_60%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="flex flex-col items-center gap-6">

          {/* Logo + Name */}
          <div className="flex flex-col items-center gap-3">
            <MJLogo size={48} className="rounded-xl shadow-lg shadow-blue-500/20" />
            <div className="text-center">
              <p className="text-base font-heading font-black gradient-text mb-0.5">
                Muhammad Mujtaba
              </p>
              <p className="text-xs text-gray-500 font-medium">
                Technical Lead · Full-Stack Developer
              </p>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {contact.socialLinks.map((link, i) => {
              const IconComponent = iconMap[link.icon as keyof typeof iconMap];
              return (
                <motion.a
                  key={link.platform}
                  href={link.url}
                  target={link.platform === "Topmate" ? "_blank" : "_self"}
                  rel={link.platform === "Topmate" ? "noopener noreferrer" : ""}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  viewport={{ once: true }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.platform}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/8 hover:border-white/20 text-gray-500 hover:text-white transition-all duration-200"
                >
                  <IconComponent className="w-4 h-4" />
                </motion.a>
              );
            })}
          </div>

          {/* Divider */}
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

          {/* Copyright */}
          <p className="text-xs text-gray-600 flex items-center gap-1.5">
            &copy; {new Date().getFullYear()} MJ. Built with
            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
            using Next.js & Framer Motion
          </p>

        </div>
      </div>
    </footer>
  );
}
