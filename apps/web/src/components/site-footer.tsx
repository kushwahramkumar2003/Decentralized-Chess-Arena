"use client";

import Link from "next/link";
import { useRef } from "react";
import { ChevronRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord, FaGithub } from "react-icons/fa";
import Image from "next/image";

export function SiteFooter() {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.2 });

  const linkVariants = {
    hover: {
      x: 5,
      color: "#e5e7eb",
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
    <footer ref={footerRef} className=" text-white relative overflow-hidden">
      <div className="absolute top-1/3 -left-24 w-64 h-64 bg-teal-400 rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute top-1/3 -right-24 w-64 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>

      <div className="py-9 max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-2">
              <Image src={"/logo.png"} height={40} width={40} />
              <span className="font-extrabold text-xl bg-gradient-to-r from-teal-400 to-purple-500 text-transparent bg-clip-text">
                Chain Mate
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
                  <FaXTwitter className="h-5 w-5" />
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
                  <FaDiscord className="h-5 w-5" />
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
                  <FaGithub className="h-5 w-5" />
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
          className="mt-6 pt-8 border-t border-teal-400/20 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} Chain Mate. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-300">Built on</span>
            <div className="relative">
              {/* <span className="font-semibold bg-gradient-to-r from-teal-400 to-purple-500 text-transparent bg-clip-text">
                Solana
              </span>
              <div className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-teal-400 to-purple-500 opacity-70"></div> */}
              <Image
                src={"/solanaLogo.svg"}
                alt="Solana Logo"
                width={100}
                height={50}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
