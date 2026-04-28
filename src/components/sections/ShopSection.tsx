"use client";

import { motion } from "framer-motion";
import { Coffee, ShoppingBag, BookOpen, ArrowUpRight } from "lucide-react";

const shopItems = [
  {
    id: "extras",
    title: "Shop",
    tagline: "Extras & Digital Goods",
    description:
      "Browse templates, guides, and digital products built from real engineering work.",
    href: "https://buymeacoffee.com/immujtaba9h/extras",
    icon: ShoppingBag,
    cta: "Visit Shop",
  },
  {
    id: "posts",
    title: "Posts",
    tagline: "Writing & Tutorials",
    description:
      "Read articles, build logs, and behind-the-scenes notes on the projects I ship.",
    href: "https://buymeacoffee.com/immujtaba9h/posts",
    icon: BookOpen,
    cta: "Read Posts",
  },
  {
    id: "support",
    title: "Support",
    tagline: "Buy me a coffee",
    description:
      "Enjoying the work? A small tip goes a long way and keeps the side projects coming.",
    href: "https://buymeacoffee.com/immujtaba9h",
    icon: Coffee,
    cta: "Support Me",
  },
];

export default function ShopSection() {
  return (
    <section id="shop" className="py-24 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-60px" }}
          className="mb-12"
        >
          <p
            className="text-sm text-gray-400 dark:text-gray-500 tracking-wider mb-4"
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
          >
            — Shop & Support
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
            Goods, Posts
            <br />
            & Coffee
          </h2>
          <p className="mt-4 text-base text-gray-500 dark:text-gray-400 max-w-md">
            Grab something from the shop, read what I&apos;m writing, or fuel
            the next project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {shopItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                viewport={{ once: true, margin: "-40px" }}
                className="group flex flex-col p-6 bg-gray-50 dark:bg-[#111] rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-colors duration-200"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-[#0a0a0a] border border-gray-100 dark:border-gray-800 text-gray-700 dark:text-gray-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-300 dark:text-gray-600 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200" />
                </div>

                <p
                  className="text-[11px] text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2"
                  style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
                >
                  {item.tagline}
                </p>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1 mb-5">
                  {item.description}
                </p>

                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
                  {item.cta}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
