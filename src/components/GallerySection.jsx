// src/components/GallerySection.jsx
import { useState } from "react";
import { motion } from "framer-motion";

const photos = [
  {
    id: 1,
    url: "/photos/chat-pertama.jpeg",
    date: "Awal Kenal",
    caption: "Chat pertama 💌",
  },
  {
    id: 2,
    url: "/photos/ig-chat.png",
    date: "Awal Kenal",
    caption: "Mulai dari DM 😳",
  },
  {
    id: 3,
    url: "/photos/13-juni.jpeg",
    date: "13 Juni",
    caption: "Pertemuan pertama ☕️",
  },
  {
    id: 4,
    url: "/photos/first-selfie.jpeg",
    date: "30 Juni",
    caption: "Selfie bareng pertama 🤳",
  },
  {
    id: 5,
    url: "/photos/gbk-berdua.jpeg",
    date: "1 Juli",
    caption: "Jogging & bunga 🌸",
  },
  {
    id: 6,
    url: "/photos/rani-bangadesh.jpeg",
    date: "3 Juli",
    caption: "Mie Bangladesh 🍜",
  },
  { id: 7, url: "/photos/prj-1.jpeg", date: "12 Juli", caption: "Ke PRJ 🎡" },
  {
    id: 8,
    url: "/photos/rani-gacoan.jpeg",
    date: "16 Juli",
    caption: "Mie Gacoan 🍜",
  },
  {
    id: 9,
    url: "/photos/rani-cimol.jpeg",
    date: "16 Juli",
    caption: "Cimol Bojot 🍢",
  },
  {
    id: 10,
    url: "/photos/rani-espisangijo.jpeg",
    date: "20 Juli",
    caption: "Es Pisang Ijo 🥤",
  },
  {
    id: 11,
    url: "/photos/krl-1.jpeg",
    date: "20 Juli",
    caption: "Naik KRL 🚆",
  },
  {
    id: 12,
    url: "/photos/mrt-1.jpeg",
    date: "20 Juli",
    caption: "Naik MRT 🚇",
  },
  {
    id: 13,
    url: "/photos/nonton-sore.jpeg",
    date: "27 Juli",
    caption: "Nonton bareng 🎬",
  },
  {
    id: 14,
    url: "/photos/rani-kutekan.jpeg",
    date: "28 Juli",
    caption: "Nail Art bareng 💅",
  },
  {
    id: 15,
    url: "/photos/rani-makan-nasgor.jpeg",
    date: "15 Juli",
    caption: "Makan nasgor 🍚",
  },
  {
    id: 16,
    url: "/photos/rani-grad.jpeg",
    date: "Spesial",
    caption: "Cantiknya pas wisuda 🎓",
  },
  {
    id: 17,
    url: "/photos/cantik.jpeg",
    date: "Random",
    caption: "Cantik banget 😍",
  },
  {
    id: 18,
    url: "/photos/cantikk.jpeg",
    date: "Random",
    caption: "Manis maksimal 💖",
  },
  {
    id: 19,
    url: "/photos/our-shadow.jpeg",
    date: "Random",
    caption: "Bayangan kita berdua 🌇",
  },
  {
    id: 20,
    url: "/photos/kita-jasujan.jpeg",
    date: "Random",
    caption: "Jas hujan bareng ☔️",
  },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-16 px-6 bg-pink-50" id="gallery">
      <h2 className="text-3xl font-bold text-center text-pink-600 mb-10 font-[Dancing Script]">
        Galeri Kenangan Kita 📸
      </h2>

      {/* Grid foto */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <motion.div
            key={photo.id}
            className="relative cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImage(photo)}
          >
            <img
              src={photo.url}
              alt={photo.caption}
              className="rounded-xl shadow-lg w-full h-40 object-cover"
            />
            <p className="absolute bottom-2 left-2 bg-white/70 text-xs px-2 py-1 rounded">
              {photo.date}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="bg-white rounded-2xl p-4 max-w-lg w-[90%] relative"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()} // biar modal ga ketutup pas klik isi
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-pink-600"
              onClick={() => setSelectedImage(null)}
            >
              ✖
            </button>
            <img
              src={selectedImage.url}
              alt="Selected"
              className="rounded-xl w-full object-cover"
            />
            <p className="mt-3 text-center text-gray-700 font-medium">
              {selectedImage.caption}
            </p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
