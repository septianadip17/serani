import { useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

export default function Proposal() {
  const [answer, setAnswer] = useState(null);
  const [noBtnPos, setNoBtnPos] = useState({ x: 0, y: 0 });

  const controls = useAnimation();

  const handleHoverStart = () => {
    controls.start({
      rotate: [0, 360],
      transition: { repeat: Infinity, ease: "linear", duration: 6 },
    });
  };

  const handleHoverEnd = () => {
    controls.stop();
    controls.set({ rotate: 0 });
  };

  // Generate random position for no button
  const handleNoHover = () => {
    const randomX = Math.floor(Math.random() * 300 - 200);
    const randomY = Math.floor(Math.random() * 300 - 200);
    setNoBtnPos({ x: randomX, y: randomY });
  };

  const messages = [
    "Yah masa nolak sih 😝",
    "Eits jangan gitu dong 😳",
    "Aku serius loh ini HAHAHA",
    "Nggak boleh nolak yaa 😏",
    "Pleaseee kasih aku kesempatan ✨",
    "Yailah tega amat si 😢",
    "Ayo deh bilang iya aja 😉",
    "Coba pikirin dulu lagi 🥺",
  ];

  const handleNoClick = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    Swal.fire({
      title: messages[randomIndex],
      icon: "error",
      confirmButtonText: "huft 😅",
      confirmButtonColor: "#f87171",
      background: "#fff7ed",
      customClass: {
        popup: "max-w-[90vw] sm:max-w-[400px] rounded-xl p-4 text-center",
        title: "text-base sm:text-sm font-semibold mb-2",
        confirmButton: "px-6 py-2 rounded-lg",
      },
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-pink-50 px-4">
     

      <h1 className="text-3xl md:text-5xl font-bold text-pink-600 mb-6">
        Ran,
      </h1>
      <p className="text-lg md:text-2xl mb-10">
        May i be your boyfriend? HAHAHAHAHA
      </p>

      {!answer ? (
        <div className="relative flex gap-6">
          <button
            onClick={() => setAnswer("yes")}
            className="bg-pink-500 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg hover:bg-pink-600 transition"
          >
            Yes! 🥰
          </button>

          <button
            onMouseEnter={handleNoHover}
            onClick={handleNoClick}
            style={{
              transform: `translate(${noBtnPos.x}px, ${noBtnPos.y}px)`,
            }}
            className="absolute bg-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-2xl shadow-lg transition"
          >
            G! 😆
          </button>
        </div>
      ) : (
        <div className="mt-10 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-pink-600">
            Yeaay! Akhirnya resmi yeee. <br /> Nih bunga buat kamu
          </h2>

          <Link to="/flower">
            <motion.button
              onHoverStart={handleHoverStart}
              onHoverEnd={handleHoverEnd}
              animate={controls}
              whileTap={{ scale: 1.5 }}
              className="mt-6 px-2 py-2 text-white hover:bg-pink-200 hover:rounded-full font-[Dancing Script] text-2xl rounded-md"
            >
              <img
                src="/photos/bunga-iay.png"
                alt="Bunga"
                className="w-20 mx-auto md:w-32 transition-transform duration-300 hover:scale-150 drop-shadow-lg"
              />
            </motion.button>
          </Link>
        </div>
      )}
    </div>
  );
}
