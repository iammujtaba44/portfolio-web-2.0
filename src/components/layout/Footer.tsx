"use client";

import {
  Github,
  Linkedin,
  Youtube,
  Facebook,
  Instagram,
  MessageCircle,
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
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <div className="flex flex-col items-center gap-6">

          {/* Logo + Name */}
          <div className="flex flex-col items-center gap-2.5">
            <MJLogo size={40} className="rounded-xl" />
            <div className="text-center">
              <p className="text-sm font-semibold text-white">Muhammad Mujtaba</p>
              <p className="text-xs text-gray-600 mt-0.5">Technical Lead · Full-Stack Developer</p>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {contact.socialLinks.map((link) => {
              const IconComponent = iconMap[link.icon as keyof typeof iconMap];
              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.platform}
                  className="p-2.5 rounded-lg text-gray-500 hover:text-white border border-gray-800 hover:border-gray-600 transition-all duration-200"
                >
                  <IconComponent className="w-4 h-4" />
                </a>
              );
            })}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-800" />

          {/* Copyright */}
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Muhammad Mujtaba. Built with Next.js & Framer Motion.
          </p>

        </div>
      </div>
    </footer>
  );
}
