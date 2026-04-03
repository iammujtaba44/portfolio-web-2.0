"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Youtube,
  MessageCircle,
  ExternalLink,
  Facebook,
  Instagram,
  Send,
  ArrowUpRight,
} from "lucide-react";
import ProductHuntIcon from "@/components/icons/ProductHuntIcon";
import { useContact } from "../../hooks/useContact";

const iconMap = {
  Github,
  Linkedin,
  Youtube,
  MessageCircle,
  Facebook,
  Instagram,
  ProductHunt: ProductHuntIcon,
};

export default function ContactSection() {
  const { contact } = useContact();

  return (
    <section id="contact" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-60px" }}
          className="mb-14"
        >
          <p
            className="text-sm text-gray-500 tracking-wider mb-4"
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
          >
            — Let&apos;s Talk
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Let&apos;s Build
            <br />
            Something Great
          </h2>
          <p className="mt-4 text-base text-gray-400 max-w-md">
            Ready to collaborate? Book a session, drop a message, or connect on social.
          </p>
        </motion.div>

        {/* Topmate CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <a
            href="https://topmate.io/immujtaba"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 text-sm font-semibold rounded-full hover:opacity-80 transition-opacity duration-200"
          >
            Book a Session on Topmate
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          {/* Left — Contact info + Socials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Email */}
            <div className="p-6 rounded-2xl border border-gray-800 bg-gray-800/30">
              <h3 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider"
                style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
              >
                Direct Contact
              </h3>
              <a
                href={`mailto:${contact.info.email}`}
                className="flex items-center gap-3 group"
              >
                <Mail className="w-4 h-4 text-gray-500 flex-shrink-0" />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-200 text-sm break-all">
                  {contact.info.email}
                </span>
              </a>
            </div>

            {/* Socials */}
            <div className="p-6 rounded-2xl border border-gray-800 bg-gray-800/30">
              <h3 className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-wider"
                style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
              >
                Connect
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {contact.socialLinks.map((link) => {
                  const IconComponent = iconMap[link.icon as keyof typeof iconMap];
                  return (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 p-3 rounded-xl border border-gray-700 hover:border-gray-500 text-gray-400 hover:text-white transition-all duration-200"
                    >
                      <IconComponent className="w-4 h-4 flex-shrink-0" />
                      <span className="text-xs font-medium truncate">{link.platform}</span>
                      <ExternalLink className="w-3 h-3 ml-auto opacity-40" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right — Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 rounded-2xl border border-gray-800 bg-gray-800/30"
          >
            <h3 className="text-sm font-semibold text-gray-300 mb-6 uppercase tracking-wider"
              style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
            >
              Send a Message
            </h3>

            <form className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Muhammad Ali"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 focus:border-gray-500 rounded-xl text-white placeholder-gray-600 text-sm outline-none transition-colors duration-200"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="hello@example.com"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 focus:border-gray-500 rounded-xl text-white placeholder-gray-600 text-sm outline-none transition-colors duration-200"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 focus:border-gray-500 rounded-xl text-white placeholder-gray-600 text-sm outline-none transition-colors duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3 bg-white text-gray-900 text-sm font-semibold rounded-xl hover:opacity-80 transition-opacity duration-200"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
