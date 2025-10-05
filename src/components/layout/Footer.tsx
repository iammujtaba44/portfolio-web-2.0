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
    <footer className="bg-gray-900 dark:bg-black text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-lg font-heading font-bold text-white mb-4">
            Muhammad Mujtaba
          </p>
          <p className="mb-6">
            Full-stack developer specializing in mobile apps, frontend & backend
            solutions
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            {contact.socialLinks.map((link) => {
              const IconComponent = iconMap[link.icon as keyof typeof iconMap];
              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target={link.platform === "Topmate" ? "_blank" : "_self"}
                  rel={link.platform === "Topmate" ? "noopener noreferrer" : ""}
                  className="hover:text-white transition-colors"
                >
                  <IconComponent className="h-6 w-6" />
                </a>
              );
            })}
          </div>
          <p className="text-sm">&copy; 2024 MJ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
