import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import photos  from "../data/photos";

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const getRandomRowSpan = () => Math.floor(Math.random() * 2) + 1;

  return (
    <section className="py-28 px-6 bg-pink-50" id="gallery" >
      <h2 className="text-3xl font-bold text-center text-pink-600 mb-10 font-[Dancing Script]">
        Galeri Kenangan Kita 📸
      </h2>

      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[150px]">
        {photos.map((photo) => (
          <motion.div
            key={photo.id}
            className={`relative cursor-pointer row-span-${getRandomRowSpan()}`}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImage(photo)}
          >
            <img
              src={photo.url}
              alt={photo.caption}
              className="rounded-xl shadow-lg w-full h-full object-cover"
            />
            <p className="absolute bottom-2 left-2 bg-white/70 text-xs px-2 py-1 rounded">
              {photo.date}
            </p>
          </motion.div>
        ))}
      </div>

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
            onClick={(e) => e.stopPropagation()}
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
