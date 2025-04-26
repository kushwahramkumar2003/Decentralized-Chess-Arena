"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronRight, Twitter } from "lucide-react";
import { toast } from "sonner";

export function WaitlistSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const totalJoined = 1234; // This would come from your API in production
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const handleTwitterAuth = async () => {
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success(
      "Successfully joined the waitlist! Check your X/Twitter for confirmation."
    );
    setIsSubmitting(false);
  };

  const benefits = [
    {
      emoji: "🎮",
      title: "Beta Access",
      description: "Be among the first to play and test the platform",
    },
    {
      emoji: "💎",
      title: "Exclusive NFTs",
      description:
        "Receive limited edition collectibles only for early adopters",
    },
    {
      emoji: "🏆",
      title: "Founder Status",
      description: "Special in-game badges and recognition for your support",
    },
  ];

  return (
    <section
      id="waitlist"
      ref={sectionRef}
      className="py-24 md:py-32 text-white relative overflow-hidden"
    >
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-1/2 left-1/4 w-80 h-80 bg-teal-400 rounded-full filter blur-3xl opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-500">
            Join the Chess Revolution
          </h2>
          <p className="text-gray-200 max-w-3xl mx-auto text-lg md:text-xl">
            Be among the first to experience decentralized chess on Solana.
            Connect with your X handle to secure your spot.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden border border-teal-400/30 bg-gray-800/40 backdrop-blur-md">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400/10 to-purple-500/10"></div>

            <div className="relative p-10 md:p-12">
              <div className="text-center mb-10">
                <div className="flex items-center justify-center gap-2 text-gray-300 mb-8">
                  <div className="flex -space-x-2">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-500 to-purple-600 flex items-center justify-center text-xs font-bold text-white border-2 border-gray-800"
                      >
                        {String.fromCharCode(65 + i)}
                      </div>
                    ))}
                    <div className="w-8 h-8 rounded-full bg-gray-800 border-2 border-gray-700 flex items-center justify-center text-xs font-medium text-gray-400">
                      +{totalJoined - 3}
                    </div>
                  </div>
                  <span className="ml-2 text-base">
                    <span className="text-teal-400 font-medium">
                      {totalJoined.toLocaleString()}
                    </span>{" "}
                    players already waiting
                  </span>
                </div>

                <motion.button
                  onClick={handleTwitterAuth}
                  disabled={isSubmitting}
                  className="hover:cursor-pointer relative bg-transparent text-teal-400 border border-teal-400/20 backdrop-blur-sm px-4 py-3 rounded-full font-medium flex items-center gap-3 group mx-auto overflow-hidden shadow-lg shadow-teal-400/20 hover:shadow-teal-400/30"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Twitter className="h-5 w-5" />
                  <span className="relative flex items-center">
                    {isSubmitting ? "Connecting..." : "Join with X"}
                  </span>
                  <motion.span
                    className="inline-flex"
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </motion.span>
                </motion.button>
              </div>

              <div className="mt-12 pt-8 border-t border-teal-400/20">
                <h3 className="text-center text-xl font-bold mb-8 text-white">
                  Early access members will receive:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-teal-400/30 transition-colors duration-300"
                    >
                      <div className="relative mb-4">
                        <div className="absolute inset-0 bg-teal-400/20 rounded-full blur-md"></div>
                        <div className="relative bg-gray-900/80 w-12 h-12 rounded-full flex items-center justify-center border border-teal-400/30 text-xl">
                          {benefit.emoji}
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-300 text-sm">
                        {benefit.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12 text-sm text-gray-400 max-w-2xl mx-auto"
        >
          <p>
            By connecting your X/Twitter account, you&apos;ll be added to our
            exclusive waitlist for the Decentralized Chess Arena beta. We
            respect your privacy and will only use your information to provide
            updates about the platform.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
