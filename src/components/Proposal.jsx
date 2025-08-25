import { useState } from "react";
import Swal from "sweetalert2";

export default function Proposal() {
  const [answer, setAnswer] = useState(null);
  const [noBtnPos, setNoBtnPos] = useState({ x: 0, y: 0 });

  // Generate random position for no button
  const handleNoHover = () => {
    const randomX = Math.floor(Math.random() * 200 - 100);
    const randomY = Math.floor(Math.random() * 200 - 100);
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
      confirmButtonText: "Oke deh 😅",
      confirmButtonColor: "#f87171",
      background: "#fff7ed",
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
        <div className="mt-10">
          <h2 className="text-2xl md:text-4xl font-bold text-pink-600">
            Yeaay! Aku sayang kamu. Nih buat kamu ❤️
          </h2>
          <button
          
          >
            Yes! 🥰
          </button>
        </div>
      )}
    </div>
  );
}
