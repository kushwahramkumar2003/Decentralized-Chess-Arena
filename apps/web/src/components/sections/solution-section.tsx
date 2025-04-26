"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Network,
  Coins,
  Trophy,
  CheckCircle,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

export function SolutionSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const solutions = [
    {
      icon: <Network className="h-8 w-8 text-teal-400" />,
      title: "Decentralized Gameplay",
      description:
        "Every match is secured by smart contracts, ensuring fair play and immutable game records that can never be manipulated.",
      features: [
        "Trustless matchmaking",
        "Verifiable randomness",
        "Tamper-proof history",
      ],
    },
    {
      icon: <Coins className="h-8 w-8 text-teal-400" />,
      title: "Stake & Earn",
      description:
        "Put your skills to the test by staking SOL on matches. Win games and earn crypto rewards based on your chess abilities.",
      features: [
        "Dynamic prize pools",
        "Skill-based rewards",
        "Daily tournaments",
      ],
    },
    {
      icon: <Trophy className="h-8 w-8 text-teal-400" />,
      title: "Own Your Legacy",
      description:
        "Your achievements are minted as compressed NFTs on Solana, creating a verifiable record of your chess accomplishments.",
      features: [
        "On-chain achievements",
        "Tradable tournament badges",
        "Memorialized victories",
      ],
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
      id="solutions"
      ref={sectionRef}
      className="py-24 md:py-32 text-white relative overflow-hidden"
    >
      {/* Glass background glow effects */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-teal-400 rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full text-sm font-medium bg-teal-400/10 text-teal-400 border border-teal-400/20 backdrop-blur-sm">
            Our Approach
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-500">
            Blockchain-Powered Solutions
          </h2>
          <p className="text-gray-200 max-w-3xl mx-auto text-lg md:text-xl">
            Decentralized Chess Arena combines the strategic depth of chess with
            blockchain innovation for a next-generation gaming experience.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <motion.div
                className={`h-full border rounded-2xl p-6 backdrop-blur-md transition-all duration-300 overflow-hidden relative
                  ${hoveredCard === index ? "bg-gray-800/60" : "bg-gray-800/30"}`}
                animate={{
                  y: hoveredCard === index ? -8 : 0,
                  boxShadow:
                    hoveredCard === index
                      ? "0 20px 25px -5px rgba(45, 212, 191, 0.1), 0 10px 10px -5px rgba(45, 212, 191, 0.04)"
                      : "0 0 0 rgba(0,0,0,0)",
                  borderColor:
                    hoveredCard === index
                      ? "rgb(45 212 191 / 50%)"
                      : "rgb(55 65 81 / 100%)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Glowing border effect on hover */}
                {hoveredCard === index && (
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
                      scale: hoveredCard === index ? 1.05 : 1,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <div className="mb-6 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-purple-500/20 rounded-lg blur-md"></div>
                      <div className="relative rounded-lg bg-gray-900/80 p-4 w-16 h-16 flex items-center justify-center shadow-lg border border-teal-400/30">
                        {solution.icon}
                      </div>
                    </div>
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {solution.title}
                  </h3>
                  <p className="text-gray-300 mb-6 text-base">
                    {solution.description}
                  </p>

                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: hoveredCard === index ? 1 : 0,
                      height: hoveredCard === index ? "auto" : 0,
                    }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-teal-400/20 pt-4 mt-2">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="h-1 w-6 bg-gradient-to-r from-teal-400 to-purple-500 rounded-full"></div>
                        <span className="text-teal-400 font-medium">
                          Key Features
                        </span>
                      </div>
                      <ul className="space-y-3 mt-3">
                        {solution.features.map((feature, i) => (
                          <motion.li
                            key={i}
                            className="flex items-center text-gray-300"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + i * 0.1 }}
                          >
                            <div className="mr-3 p-1 rounded-full bg-teal-400/10 flex items-center justify-center">
                              <CheckCircle className="h-4 w-4 text-teal-400" />
                            </div>
                            {feature}
                          </motion.li>
                        ))}
                      </ul>

                      <motion.div
                        className="mt-5 text-teal-400 flex items-center group cursor-pointer"
                        whileHover={{ x: 3 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <span className="font-medium">Learn more</span>
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="inline-flex ml-2"
                        >
                          <ArrowRight className="h-4 w-4" />
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
                    scale: hoveredCard === index ? 1.5 : 1,
                    opacity: hoveredCard === index ? 0.4 : 0.2,
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
          <motion.button
            className="relative bg-gray-800/50 border border-teal-400/30 text-white px-8 py-4 rounded-full font-medium flex items-center group overflow-hidden backdrop-blur-sm"
            whileHover={{ scale: 1.03 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-teal-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center">
              Explore Platform Features
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
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
