"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

export function SiteHeader() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [stars, setStars] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchStars() {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://api.github.com/repos/kushwahramkumar2003/Decentralized-Chess-Arena"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch repository data");
        }

        const data = await response.json();
        setStars(data.stargazers_count);
      } catch (error) {
        console.error("Error fetching GitHub stars:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchStars();
  }, []);

  const formatStarCount = (count: number): string => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 8px 16px -4px rgba(45, 212, 191, 0.3)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <header className="sticky top-4 z-50 w-full max-w-6xl mx-auto my-4 px-6">
      <motion.div
        className="relative border border-teal-400/30 bg-gray-900/70 backdrop-blur-lg rounded-xl shadow-lg shadow-teal-400/20"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute top-0 left-1/4 w-24 h-24 bg-teal-400 rounded-full filter blur-3xl opacity-10" />
        <div className="absolute top-0 right-1/4 w-24 h-24 bg-purple-500 rounded-full filter blur-3xl opacity-10" />

        <div className="flex h-16 items-center justify-between px-4 relative z-10">
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center space-x-2 group">
              <Image src={"/logo.png"} height={40} width={40} />
              <span className="font-extrabold text-lg md:text-xl bg-gradient-to-r from-teal-400 to-purple-500 text-transparent bg-clip-text">
                Chain Mate
              </span>
            </Link>
          </motion.div>

          <div className="flex items-center gap-3">
            <motion.div
              variants={buttonVariants}
              initial="rest"
              animate="rest"
              whileHover="hover"
              whileTap="tap"
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button
                asChild
                variant="outline"
                size="sm"
                className="bg-gray-800/50 border-teal-400/50 text-gray-200 hover:bg-teal-400/20 hover:text-teal-400 rounded-full flex items-center gap-2 px-4 py-2"
              >
                <Link
                  href="https://github.com/kushwahramkumar2003/Decentralized-Chess-Arena"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="h-4 w-4" />
                  <span>Star</span>
                  <span className="ml-1 text-xs bg-teal-400/30 rounded-full px-2 py-0.5">
                    {isLoading ? (
                      <span className="inline-block w-4 h-4 rounded-full animate-pulse bg-teal-400/50"></span>
                    ) : stars !== null ? (
                      formatStarCount(stars)
                    ) : (
                      "0"
                    )}
                  </span>
                </Link>
              </Button>
            </motion.div>
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <motion.button
                  className="md:hidden text-gray-300 hover:text-teal-400 hover:bg-gray-800/50 p-2 rounded-full border border-transparent hover:border-teal-400/30 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </motion.button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-gray-900/95 backdrop-blur-lg border-l border-teal-400/30 w-[280px] p-0"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between px-6 py-4 border-b border-teal-400/20">
                    <div className="flex items-center gap-2">
                      <Image src={"/logo.png"} height={20} width={20} />
                      <span className="font-extrabold text-lg bg-gradient-to-r from-teal-400 to-purple-500 text-transparent bg-clip-text">
                        Chain Mate
                      </span>
                    </div>
                  </div>

                  <div className="px-6 py-6 border-t border-teal-400/20">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Button
                        asChild
                        variant="outline"
                        className="w-full bg-gray-800/50 border-teal-400/50 text-gray-200 hover:bg-teal-400/20 hover:text-teal-400 rounded-full flex items-center justify-center gap-2 py-3"
                      >
                        <Link
                          href="https://github.com/kushwahramkumar2003/Decentralized-Chess-Arena"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub className="h-5 w-5" />
                          <span>Star on GitHub</span>
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
