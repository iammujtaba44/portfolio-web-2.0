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
  Sparkles,
} from "lucide-react";
import { useContact } from "../../hooks/useContact";

const iconMap = {
  Github,
  Linkedin,
  Youtube,
  MessageCircle,
  Facebook,
  Instagram,
};

export default function ContactSection() {
  const { contact } = useContact();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden"
    >
      {/* Background — rich gradient like other premium sections */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-gray-950 to-teal-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(37,99,235,0.25),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_70%,rgba(20,184,166,0.2),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>

      {/* Ambient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-blue-300 bg-blue-500/15 border border-blue-400/20 mb-6"
          >
            <MessageCircle className="w-4 h-4" />
            Let&apos;s Talk
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black leading-tight mb-4"
          >
            <span className="gradient-text">Let&apos;s Build</span>
            <br />
            <span className="text-white">Something Great</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Ready to collaborate? Book a session, drop a message, or connect on social.
            I&apos;m here to help bring your ideas to life.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="w-16 h-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mx-auto mt-6"
          />
        </motion.div>

        {/* Topmate CTA — hero button */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <motion.a
            href="https://topmate.io/immujtaba"
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-white text-base sm:text-lg overflow-hidden shadow-xl shadow-blue-500/25 transition-shadow duration-300 hover:shadow-2xl hover:shadow-blue-500/35"
            style={{
              background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #14b8a6 100%)",
            }}
          >
            {/* Shimmer */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"></span>
            <Sparkles className="relative z-10 w-5 h-5" />
            <span className="relative z-10">Book a Session on Topmate</span>
            <ExternalLink className="relative z-10 w-4 h-4 opacity-70" />
          </motion.a>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

          {/* Left — Contact info + Socials */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            {/* Email card */}
            <div className="relative bg-white/8 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-blue-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-blue-500/20 border border-blue-400/20">
                    <Mail className="w-4 h-4 text-blue-400" />
                  </div>
                  Direct Contact
                </h3>
                <a
                  href={`mailto:${contact.info.email}`}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-blue-500/10 border border-white/5 hover:border-blue-400/20 transition-all duration-250 group/email"
                >
                  <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-0.5">Email</p>
                    <p className="text-gray-200 group-hover/email:text-white font-medium transition-colors duration-200 text-sm sm:text-base break-all">
                      {contact.info.email}
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Socials card */}
            <div className="relative bg-white/8 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-teal-400/30 transition-all duration-300 group">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-teal-500/20 border border-teal-400/20">
                    <MessageCircle className="w-4 h-4 text-teal-400" />
                  </div>
                  Connect with Me
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {contact.socialLinks.map((link) => {
                    const IconComponent = iconMap[link.icon as keyof typeof iconMap];
                    return (
                      <motion.a
                        key={link.platform}
                        href={link.url}
                        target={link.platform === "Topmate" ? "_blank" : "_self"}
                        rel={link.platform === "Topmate" ? "noopener noreferrer" : ""}
                        whileTap={{ scale: 0.96 }}
                        className="flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/8 hover:border-white/20 transition-all duration-250 group/link"
                      >
                        <IconComponent className="w-4 h-4 text-gray-400 group-hover/link:text-white transition-colors duration-200 flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-400 group-hover/link:text-white transition-colors duration-200 truncate">
                          {link.platform}
                        </span>
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative bg-white/8 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-blue-400/20 transition-all duration-300"
          >
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-purple-500/20 border border-purple-400/20">
                <Send className="w-4 h-4 text-purple-400" />
              </div>
              Send a Message
            </h3>

            <form className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Muhammad Ali"
                  className="w-full px-4 py-3 bg-white/8 border border-white/10 focus:border-blue-400/50 rounded-xl text-white placeholder-gray-600 text-sm outline-none transition-colors duration-200 focus:bg-white/10"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="hello@example.com"
                  className="w-full px-4 py-3 bg-white/8 border border-white/10 focus:border-blue-400/50 rounded-xl text-white placeholder-gray-600 text-sm outline-none transition-colors duration-200 focus:bg-white/10"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-white/8 border border-white/10 focus:border-blue-400/50 rounded-xl text-white placeholder-gray-600 text-sm outline-none transition-colors duration-200 focus:bg-white/10 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileTap={{ scale: 0.97 }}
                className="group w-full relative inline-flex items-center justify-center gap-2.5 py-4 rounded-xl font-semibold text-white overflow-hidden shadow-lg shadow-blue-500/20 transition-shadow duration-300 hover:shadow-xl hover:shadow-blue-500/30"
                style={{
                  background: "linear-gradient(135deg, #2563eb 0%, #0ea5e9 60%, #14b8a6 100%)",
                }}
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"></span>
                <Send className="relative z-10 w-4 h-4" />
                <span className="relative z-10">Send Message</span>
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
