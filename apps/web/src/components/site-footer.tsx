"use client";

import Link from "next/link";
import { useRef } from "react";
import { Github, ChevronRight, Twitter, Disc as Discord } from "lucide-react";
import { motion, useInView } from "framer-motion";

export function SiteFooter() {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.2 });

  const linkVariants = {
    hover: {
      x: 5,
      color: "#e5e7eb", // text-gray-200
      transition: { duration: 0.3 },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { duration: 0.3 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const footerLinks = [
    {
      title: "Platform",
      links: [
        { name: "Features", href: "#features" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "Join Waitlist", href: "#waitlist" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#" },
        { name: "Whitepaper", href: "#" },
        { name: "FAQ", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
      ],
    },
  ];

  return (
    <footer
      ref={footerRef}
      className="border-t border-teal-400/30 bg-gray-900/70 backdrop-blur-lg text-white relative overflow-hidden"
    >
      {/* Glass background glow effects, matching ProblemSection */}
      <div className="absolute top-1/3 -left-24 w-64 h-64 bg-teal-400 rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>

      <div className="container py-16 md:py-20 max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-teal-400 to-purple-500 rounded-lg p-1.5">
                <ChevronRight className="h-6 w-6 text-white" />
              </div>
              <span className="font-extrabold text-xl bg-gradient-to-r from-teal-400 to-purple-500 text-transparent bg-clip-text">
                DCA
              </span>
            </div>
            <p className="text-sm text-gray-300">
              The future of chess is being built on Solana. Join us in
              revolutionizing the game with DeFi and NFTs.
            </p>
            <div className="flex gap-3">
              <motion.div
                className="rounded-full bg-gray-800/50 border border-teal-400/50 hover:bg-teal-400/10 hover:text-teal-400 transition-all duration-300 p-2"
                variants={iconVariants}
                whileHover="hover"
              >
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </motion.div>
              <motion.div
                className="rounded-full bg-gray-800/50 border border-teal-400/50 hover:bg-teal-400/10 hover:text-teal-400 transition-all duration-300 p-2"
                variants={iconVariants}
                whileHover="hover"
              >
                <Link
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Discord className="h-5 w-5" />
                  <span className="sr-only">Discord</span>
                </Link>
              </motion.div>
              <motion.div
                className="rounded-full bg-gray-800/50 border border-teal-400/50 hover:bg-teal-400/10 hover:text-teal-400 transition-all duration-300 p-2"
                variants={iconVariants}
                whileHover="hover"
              >
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {footerLinks.map((group, idx) => (
            <motion.div key={group.title} variants={itemVariants}>
              <h3 className="font-semibold text-sm mb-4 text-teal-400">
                {group.title}
              </h3>
              <ul className="space-y-3 text-sm">
                {group.links.map((link, linkIdx) => (
                  <li key={link.name}>
                    <motion.div variants={linkVariants} whileHover="hover">
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-gray-200 transition-colors flex items-center group"
                      >
                        <span>{link.name}</span>
                        <motion.span
                          className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                          animate={{ x: [0, 5, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            repeatDelay: 0.5,
                          }}
                        >
                          <ChevronRight className="h-3 w-3" />
                        </motion.span>
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 pt-8 border-t border-teal-400/20 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} Decentralized Chess Arena. All rights
            reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-300">Built on</span>
            <div className="relative">
              <span className="font-semibold bg-gradient-to-r from-teal-400 to-purple-500 text-transparent bg-clip-text">
                Solana
              </span>
              <div className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-teal-400 to-purple-500 opacity-70"></div>
            </div>
          </div>
        </motion.div>

        {/* Decorative element matching ProblemSection style */}
        <div className="absolute bottom-0 right-1/4 w-16 h-16 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, transparent 50%, rgba(45, 212, 191, 0.5) 50%)",
              borderRadius: "0.5rem",
            }}
          />
        </div>
      </div>
    </footer>
  );
}
