"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Lock, DollarSign, AlertTriangle } from "lucide-react";

export function ProblemSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const problems = [
    {
      icon: <Lock className="h-8 w-8 text-teal-400" />,
      title: "Centralized Control",
      description:
        "Traditional chess platforms are prone to manipulation, outages, and data vulnerabilities.",
      solution:
        "Decentralized gameplay on Solana ensures trustless, secure, and transparent matches.",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-teal-400" />,
      title: "Lack of Incentives",
      description:
        "Players dedicate hours to chess without financial rewards for their skills.",
      solution:
        "Stake SOL, compete for prize pools, and earn rewards for your victories.",
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-teal-400" />,
      title: "Non-Transferable Achievements",
      description:
        "Achievements and ratings are locked within platforms, limiting their value.",
      solution:
        "Own and trade cNFTs representing your chess milestones on the blockchain.",
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
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="text-white relative overflow-hidden mt-10"
    >
      <div className="absolute top-1/3 -left-24 w-64 h-64 bg-teal-400 rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-500">
            Challenges in Online Chess
          </h2>
          <p className="text-gray-200 max-w-3xl mx-auto text-lg md:text-xl">
            Traditional chess platforms face critical limitations. DCA redefines
            the game with blockchain innovation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <motion.div
                className={`h-full border border-gray-700 rounded-2xl p-6 backdrop-blur-md transition-all duration-300 overflow-hidden relative
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
                transition={{ type: "keyframes", stiffness: 300, damping: 20 }}
              >
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
                        {problem.icon}
                      </div>
                    </div>
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {problem.title}
                  </h3>
                  <p className="text-gray-300 mb-6 text-base">
                    {problem.description}
                  </p>

                  <div className="border-t border-teal-400/20 pt-4 mt-2">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="h-1 w-1 bg-gradient-to-r from-teal-400 to-purple-500 rounded-full"></div>
                      <span className="text-teal-400 font-medium">
                        Our Solution
                      </span>
                    </div>
                    <p className="text-gray-200 mt-2">{problem.solution}</p>
                  </div>
                </div>

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
      </div>
    </section>
  );
}
