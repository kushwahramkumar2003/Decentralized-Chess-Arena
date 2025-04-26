"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  ChevronRight as ChessKnight,
  Menu,
  X,
  ExternalLink,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function SiteHeader() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const linkVariants = {
    hover: {
      x: 5,
      color: "#e5e7eb",
      transition: { duration: 0.3 },
    },
  };

  const sheetVariants = {
    hidden: {
      opacity: 0,
      x: "100%",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const sheetItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const buttonHoverVariants = {
    rest: {
      scale: 1,
      boxShadow:
        "0 10px 15px -3px rgba(45, 212, 191, 0.15), 0 4px 6px -4px rgba(45, 212, 191, 0.15)",
    },
    hover: {
      scale: 1.05,
      boxShadow:
        "0 20px 25px -5px rgba(45, 212, 191, 0.25), 0 8px 10px -6px rgba(45, 212, 191, 0.25)",
    },
    tap: {
      scale: 0.98,
    },
  };

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#waitlist", label: "Waitlist" },
    { href: "#about", label: "About" },
  ];

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full border-b border-teal-400/30 bg-gray-900/70 backdrop-blur-lg text-white"
    >
      {/* Subtle glow effect */}
      <div className="absolute top-0 left-1/4 w-32 h-16 bg-teal-400 rounded-full filter blur-3xl opacity-5"></div>
      <div className="absolute top-0 right-1/3 w-32 h-16 bg-purple-500 rounded-full filter blur-3xl opacity-5"></div>

      <div className="container flex h-16 items-center justify-between max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-br from-teal-400 to-purple-500 rounded-lg p-1.5 transition-all duration-300 group-hover:shadow-md group-hover:shadow-teal-400/20">
              <motion.div
                whileHover={{ rotate: 10 }}
                transition={{ duration: 0.2 }}
              >
                <ChessKnight className="h-6 w-6 text-white" />
              </motion.div>
            </div>
            <span className="font-extrabold text-lg md:text-xl bg-gradient-to-r from-teal-400 to-purple-500 text-transparent bg-clip-text">
              DCA
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.href}
              variants={linkVariants}
              whileHover="hover"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                href={link.href}
                className="text-gray-300 hover:text-gray-200 transition-colors relative group"
              >
                <span>{link.label}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={buttonHoverVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
          >
            <Link
              href="#waitlist"
              className="bg-gray-800/50 border border-teal-400/30 text-white text-sm px-5 py-2 rounded-full font-medium flex items-center group hover:bg-gray-800/80 transition-all duration-300"
            >
              <span>Log In</span>
              <motion.span
                className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{ x: [0, 3, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 0.5,
                }}
              >
                <ExternalLink className="h-3 w-3" />
              </motion.span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={buttonHoverVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
          >
            <Link
              href="#waitlist"
              className="relative bg-gradient-to-r from-teal-400 to-purple-500 text-white text-sm px-6 py-2.5 rounded-full font-medium flex items-center space-x-1 overflow-hidden shadow-lg shadow-teal-400/20 transition-all duration-300"
            >
              <span className="relative z-10">Join Early Access</span>
              <motion.span
                className="relative z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ChessKnight className="h-4 w-4" />
              </motion.span>
              {/* Gradient hover effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-teal-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="md:hidden text-gray-300 hover:text-teal-400 hover:bg-gray-800/50 p-2 rounded-full border border-transparent hover:border-teal-400/30 transition-all duration-300"
            onClick={() => setIsSheetOpen(!isSheetOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </motion.button>
        </div>
      </div>

      {/* Mobile Sheet Menu */}
      <AnimatePresence>
        {isSheetOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSheetOpen(false)}
          >
            <motion.div
              className="absolute right-0 top-0 bottom-0 w-3/4 max-w-xs bg-gray-900/95 backdrop-blur-lg border-l border-teal-400/30 shadow-xl shadow-teal-400/5 flex flex-col"
              variants={sheetVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Sheet Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-teal-400/20">
                <div className="flex items-center gap-2">
                  <div className="bg-gradient-to-br from-teal-400 to-purple-500 rounded-lg p-1">
                    <ChessKnight className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-extrabold text-lg bg-gradient-to-r from-teal-400 to-purple-500 text-transparent bg-clip-text">
                    DCA
                  </span>
                </div>
                <motion.button
                  className="text-gray-300 hover:text-teal-400 p-2 rounded-full"
                  onClick={() => setIsSheetOpen(false)}
                  whileHover={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5" />
                </motion.button>
              </div>

              {/* Sheet Content */}
              <div className="flex-1 overflow-y-auto py-6 px-6">
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      variants={sheetItemVariants}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href={link.href}
                        className="text-gray-200 hover:text-teal-400 transition-colors text-lg font-medium flex items-center"
                        onClick={() => setIsSheetOpen(false)}
                      >
                        <span>{link.label}</span>
                        <ChessKnight className="ml-2 h-4 w-4 opacity-60" />
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Decorative element */}
                <div className="mt-8 h-px w-full bg-gradient-to-r from-teal-400/30 via-purple-500/30 to-transparent"></div>

                {/* Additional Links */}
                <div className="mt-8 space-y-6">
                  <motion.div variants={sheetItemVariants}>
                    <Link
                      href="#about"
                      className="text-gray-300 hover:text-teal-400 transition-colors flex items-center"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      About
                    </Link>
                  </motion.div>
                  <motion.div variants={sheetItemVariants}>
                    <Link
                      href="#faq"
                      className="text-gray-300 hover:text-teal-400 transition-colors flex items-center"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      FAQ
                    </Link>
                  </motion.div>
                </div>
              </div>

              {/* Sheet Footer */}
              <div className="px-6 py-6 border-t border-teal-400/20">
                <motion.div
                  variants={sheetItemVariants}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Link
                    href="#waitlist"
                    className="bg-gradient-to-r from-teal-400 to-purple-500 hover:from-teal-500 hover:to-purple-600 text-white font-medium py-3 px-6 rounded-full flex justify-center items-center transition-all duration-300 shadow-lg shadow-teal-400/20"
                    onClick={() => setIsSheetOpen(false)}
                  >
                    Join Early Access
                  </Link>
                </motion.div>
                <motion.div variants={sheetItemVariants} className="mt-4">
                  <Link
                    href="#login"
                    className="bg-gray-800/70 border border-teal-400/30 text-white font-medium py-2.5 px-6 rounded-full flex justify-center items-center transition-all duration-300"
                    onClick={() => setIsSheetOpen(false)}
                  >
                    Log In
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
