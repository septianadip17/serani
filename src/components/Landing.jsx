// src/components/Landing.jsx
import { motion } from "framer-motion";
import { CornerRightDown } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-200 via-pink-100 to-peach-100 text-center relative overflow-hidden px-4" id="home">
      {/* Main Text (Fade In) */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-3xl sm:text-4xl md:text-6xl font-bold text-pink-600 mb-4 font-[Dancing Script]"
      >
        Hai Raneyyy🤪
      </motion.h1>

      {/* Sub Text (Fade In after main text) */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        className="text-base sm:text-lg md:text-2xl text-pink-700 max-w-xl"
      >
        aku buat website ini buat ngobrol aja si ke kamu😜
      </motion.p>

      {/* Animated hearts */}
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: -250, opacity: 1 }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute text-pink-400 text-2xl sm:text-3xl md:text-4xl left-1/4 bottom-0"
      >
        💖
      </motion.div>
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: -300, opacity: 1 }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute text-yellow-400 text-xl sm:text-2xl md:text-3xl right-1/3 bottom-0"
      >
        ✨
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 text-pink-500 animate-bounce text-sm sm:text-base md:text-lg"
      >
        kamu masih inget ini ga sih? <CornerRightDown className="inline-block ml-1" />
      </motion.div>
    </div>
  );
}
