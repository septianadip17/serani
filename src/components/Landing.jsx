// src/components/Landing.jsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Landing() {
  const text = "Hai Raniii 🥰";
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-200 via-pink-100 to-peach-100 text-center relative overflow-hidden">
      {/* Typing text */}
      <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-4 font-[Dancing Script]">
        {displayed}
      </h1>

      {/* Sub text */}
      {index >= text.length && (
        <p className="text-lg md:text-2xl text-pink-700">
          Aku ada sesuatu buat kamu 💌
        </p>
      )}

      {/* Animated hearts */}
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: -250, opacity: 1 }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute text-pink-400 text-4xl left-1/4 bottom-0"
      >
        💖
      </motion.div>
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: -300, opacity: 1 }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute text-yellow-400 text-3xl right-1/3 bottom-0"
      >
        ✨
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 text-pink-500 animate-bounce">
        ⬇️ Scroll ke bawah ⬇️
      </div>
    </div>
  );
}
