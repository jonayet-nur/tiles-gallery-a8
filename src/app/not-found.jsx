"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600 opacity-20 blur-3xl rounded-full top-10 left-10 animate-pulse"></div>
      <div className="absolute w-[400px] h-[400px] bg-blue-500 opacity-20 blur-3xl rounded-full bottom-10 right-10 animate-pulse"></div>

      <div className="text-center z-10">
        
        {/* Animated 404 */}
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-8xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
        >
          404
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-xl text-gray-300"
        >
          Oops! Page not found.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link href="/">
            <button className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-110 transition-all duration-300 shadow-lg">
              Go Home
            </button>
          </Link>
        </motion.div>

        {/* Floating Animation */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="mt-10 text-gray-500"
        >
          🚀 Lost in space...
        </motion.div>
      </div>
    </div>
  );
}