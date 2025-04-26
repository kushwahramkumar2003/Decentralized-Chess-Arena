"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Wallet, ChevronRight, Trophy, Award } from "lucide-react";
import { FaChess } from "react-icons/fa";

export function HowItWorksSection() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const steps = [
    {
      icon: <Wallet className="h-8 w-8 text-teal-400" />,
      title: "Connect Wallet",
      description: "Link your Solana wallet securely to start playing.",
      details:
        "Support for Phantom, Solflare, and other popular Solana wallets with secure authentication.",
    },
    {
      icon: <FaChess className="h-8 w-8 text-teal-400" />,
      title: "Choose Your Game",
      description: "Select stake amount and find a match at your skill level.",
      details:
        "Advanced matchmaking algorithm ensures fair competition based on your on-chain rating.",
    },
    {
      icon: <Trophy className="h-8 w-8 text-teal-400" />,
      title: "Play & Win",
      description: "Compete in fair matches and earn SOL for your victories.",
      details:
        "Smart contracts automatically distribute winnings instantly upon game completion.",
    },
    {
      icon: <Award className="h-8 w-8 text-teal-400" />,
      title: "Collect NFTs",
      description: "Earn exclusive NFTs for your achievements and milestones.",
      details:
        "Compressed NFTs on Solana provide gas-efficient minting of all your chess accomplishments.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, rotateX: 10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="py-24 md:py-32 text-white relative overflow-hidden"
    >
      {/* Glass background glow effects */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-teal-400 rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full text-sm font-medium bg-teal-400/10 text-teal-400 border border-teal-400/20 backdrop-blur-sm">
            Getting Started
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-500">
            How It Works
          </h2>
          <p className="text-gray-200 max-w-3xl mx-auto text-lg md:text-xl">
            Start your journey with Decentralized Chess Arena in four simple
            steps.
          </p>
        </motion.div>

        {/* Timeline connector - visible on larger screens */}
        <div className="hidden lg:block absolute left-1/2 top-60 bottom-52 w-0.5 bg-gradient-to-b from-teal-400/50 via-purple-500/50 to-teal-400/50 transform -translate-x-1/2"></div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative"
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              {/* Number indicator for step sequence */}
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-r from-teal-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm z-20 shadow-lg">
                {index + 1}
              </div>

              <motion.div
                className={`h-full border rounded-2xl p-6 backdrop-blur-md transition-all duration-300 overflow-hidden relative
                  ${hoveredStep === index ? "bg-gray-800/60" : "bg-gray-800/30"}`}
                animate={{
                  y: hoveredStep === index ? -8 : 0,
                  boxShadow:
                    hoveredStep === index
                      ? "0 20px 25px -5px rgba(45, 212, 191, 0.1), 0 10px 10px -5px rgba(45, 212, 191, 0.04)"
                      : "0 0 0 rgba(0,0,0,0)",
                  borderColor:
                    hoveredStep === index
                      ? "rgb(45 212 191 / 50%)"
                      : "rgb(55 65 81 / 100%)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Glowing border effect on hover */}
                {hoveredStep === index && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      background:
                        "linear-gradient(45deg, rgba(45, 212, 191, 0.15) 0%, rgba(168, 85, 247, 0.15) 100%)",
                      boxShadow: "inset 0 0 0 1px rgba(45, 212, 191, 0.3)",
                    }}
                  />
                )}

                {/* Card content */}
                <div className="relative z-10">
                  <motion.div
                    className="relative"
                    animate={{
                      scale: hoveredStep === index ? 1.05 : 1,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <div className="mb-6 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-purple-500/20 rounded-lg blur-md"></div>
                      <div className="relative rounded-lg bg-gray-900/80 p-4 w-16 h-16 flex items-center justify-center shadow-lg border border-teal-400/30">
                        {step.icon}
                      </div>
                    </div>
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 mb-6 text-base">
                    {step.description}
                  </p>

                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: hoveredStep === index ? 1 : 0,
                      height: hoveredStep === index ? "auto" : 0,
                    }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-teal-400/20 pt-4 mt-2">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="h-1 w-6 bg-gradient-to-r from-teal-400 to-purple-500 rounded-full"></div>
                        <span className="text-teal-400 font-medium">
                          Details
                        </span>
                      </div>
                      <p className="text-gray-200 mt-2">{step.details}</p>

                      <motion.div
                        className="mt-4 text-teal-400 flex items-center group cursor-pointer"
                        whileHover={{ x: 3 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <span className="font-medium text-sm">Learn more</span>
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="inline-flex ml-2"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </motion.span>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                {/* Interactive corner accent */}
                <motion.div
                  className="absolute bottom-0 right-0 w-12 h-12 opacity-30"
                  style={{
                    background:
                      "linear-gradient(135deg, transparent 50%, rgba(45, 212, 191, 0.5) 50%)",
                    borderBottomRightRadius: "0.75rem",
                  }}
                  animate={{
                    scale: hoveredStep === index ? 1.5 : 1,
                    opacity: hoveredStep === index ? 0.4 : 0.2,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="#waitlist"
            className="relative bg-gray-800/50 border border-teal-400/30 text-white px-8 py-4 rounded-full font-medium flex items-center group overflow-hidden backdrop-blur-sm"
            whileHover={{ scale: 1.03 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-teal-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center">
              Get Started Now
              <motion.span
                className="ml-2 inline-flex"
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ChevronRight className="h-5 w-5" />
              </motion.span>
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
