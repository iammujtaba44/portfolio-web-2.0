"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Youtube,
  MessageCircle,
  Calendar,
  Clock,
  DollarSign,
  ExternalLink,
  Facebook,
  Instagram,
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

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-heading font-bold gradient-text mb-6">
            Let&apos;s Connect
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to work together? Book a session with me or connect through my
            social channels. I&apos;m here to help you build amazing
            applications!
          </p>
        </motion.div>

        {/* Topmate Integration Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.a
              href="https://topmate.io/immujtaba"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle className="h-6 w-6 mr-3" />
              Book Now on Topmate
              <ExternalLink className="h-5 w-5 ml-2" />
            </motion.a>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-heading font-bold mb-6 flex items-center">
                <Mail className="h-6 w-6 mr-3 text-blue-600 dark:text-blue-400" />
                Get in Touch
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                  <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {contact.info.email}
                    </p>
                  </div>
                </div>
                {/* <div className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                  <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {contact.info.location}
                    </p>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="glass rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-heading font-bold mb-6 flex items-center">
                <MessageCircle className="h-6 w-6 mr-3 text-blue-600 dark:text-blue-400" />
                Connect with Me
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {contact.socialLinks.map((link) => {
                  const IconComponent =
                    iconMap[link.icon as keyof typeof iconMap];
                  return (
                    <motion.a
                      key={link.platform}
                      href={link.url}
                      target={link.platform === "Topmate" ? "_blank" : "_self"}
                      rel={
                        link.platform === "Topmate" ? "noopener noreferrer" : ""
                      }
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 group"
                    >
                      <IconComponent className="h-5 w-5 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                      <span className="text-sm font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {link.platform}
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-2xl font-heading font-bold mb-6 flex items-center">
              <MessageCircle className="h-6 w-6 mr-3 text-blue-600 dark:text-blue-400" />
              Send a Message
            </h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              {/* <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-all duration-300">
                  <option>General Inquiry</option>
                  <option>Flutter Development</option>
                  <option>NestJS Consultation</option>
                  <option>App Security</option>
                  <option>Project Collaboration</option>
                </select>
              </div> */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-all duration-300"
                  placeholder="Tell me about your project or how I can help..."
                ></textarea>
              </div>
              <motion.button
                type="submit"
                onClick={() => {}}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
