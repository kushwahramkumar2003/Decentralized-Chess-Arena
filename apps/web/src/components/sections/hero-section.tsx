"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { FaChess } from "react-icons/fa";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const { left, top, width, height } =
          sectionRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!mounted) return null;

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-24 md:py-32 lg:py-40  text-white "
    >
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-teal-400/30 to-purple-500/30 blur-3xl"
        animate={{
          x: mousePosition.x * 20 - 10,
          y: mousePosition.y * 20 - 10,
        }}
        transition={{ type: "spring", damping: 12 }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/30 to-teal-400/30 blur-3xl"
        animate={{
          x: -mousePosition.x * 30 + 15,
          y: -mousePosition.y * 30 + 15,
        }}
        transition={{ type: "spring", damping: 15 }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center mb-10 relative"
          >
            {/* Chess icon with animated glow */}
            <div className="relative">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 to-purple-500 opacity-50"
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="relative bg-gray-900/70 p-6 rounded-full backdrop-blur-lg border border-teal-400/30">
                <FaChess size={60} className="text-teal-400" />
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6"
          >
            Revolutionizing Chess with{" "}
            <span className="bg-gradient-to-r from-teal-400 to-purple-500 text-transparent bg-clip-text">
              DeFi & NFTs
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl"
          >
            Stake SOL, earn rewards, and own your achievements with cNFTs on the
            Solana blockchain.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-teal-400 to-purple-500 hover:from-teal-500 hover:to-purple-600 text-white font-semibold px-10 py-7 rounded-full shadow-lg shadow-teal-400/30 transition-all duration-300 hover:shadow-xl hover:shadow-teal-400/40 hover:scale-105"
            >
              <Link href="#waitlist" className="flex items-center">
                Join Waiting List
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-teal-400/50 hover:border-teal-400 text-teal-400 bg-gray-900/50 backdrop-blur-lg px-10 py-7 rounded-full hover:bg-gray-800/70 transition-all duration-300 hover:scale-105"
            >
              <Link href="#features">Explore Features</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 flex gap-6 items-center justify-center"
          >
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full border-2 border-gray-800 bg-gray-700 flex items-center justify-center overflow-hidden"
                >
                  <div className="w-full h-full bg-gradient-to-br from-teal-400/50 to-purple-500/50" />
                </div>
              ))}
            </div>
            <p className="text-gray-300 text-sm md:text-base">
              <span className="text-white font-semibold">600+</span> players
              already joined
            </p>
          </motion.div>
        </div>
      </div>

      {/* Decorative chess icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
        animate={{ opacity: 0.1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute right-0 bottom-0 -z-10"
      >
        <FaChess size={450} className="text-teal-400/20" />
      </motion.div>
    </section>
  );
}
