// src/components/Proposal.jsx
import { useState } from "react";

export default function Proposal() {
  const [answer, setAnswer] = useState(null);
  const [noBtnPos, setNoBtnPos] = useState({ x: 0, y: 0 });

  const handleNoHover = () => {
    // Biar tombol "Enggak" kabur ke posisi random
    const randomX = Math.floor(Math.random() * 200 - 100);
    const randomY = Math.floor(Math.random() * 200 - 100);
    setNoBtnPos({ x: randomX, y: randomY });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-pink-50 px-4">
      <h1 className="text-3xl md:text-5xl font-bold text-pink-600 mb-6">
        Rani ❤️
      </h1>
      <p className="text-lg md:text-2xl mb-10">
        Mau nggak jadi pasangan hidupku? 🥹
      </p>

      {!answer ? (
        <div className="relative flex gap-6">
          {/* Tombol Iya */}
          <button
            onClick={() => setAnswer("yes")}
            className="bg-pink-500 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg hover:bg-pink-600 transition"
          >
            Iya ❤️
          </button>

          {/* Tombol Enggak */}
          <button
            onMouseEnter={handleNoHover}
            style={{
              transform: `translate(${noBtnPos.x}px, ${noBtnPos.y}px)`,
            }}
            className="absolute bg-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-2xl shadow-lg transition"
          >
            Enggak 😆
          </button>
        </div>
      ) : (
        <div className="mt-10">
          <h2 className="text-2xl md:text-4xl font-bold text-pink-600">
            Yeaay! Aku sayang kamu ❤️🎉
          </h2>
        </div>
      )}
    </div>
  );
}
