/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function TimelineItem({
  date,
  title,
  emoji,
  photo,
  desc,
  isLeft,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Pastikan photo selalu array
  const photos = Array.isArray(photo) ? photo : [photo];

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const showPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const showNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  // Keyboard listener (ESC untuk close, arrow untuk navigasi)
  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={`flex ${isLeft ? "justify-start" : "justify-end"} w-full`}
      >
        <div className="bg-white rounded-2xl shadow-lg p-3 md:p-6 w-1/2 relative">
          {/* Titik di garis */}
          <div
            className={`absolute top-6 ${
              isLeft ? "-right-4" : "-left-4"
            } w-5 h-5 md:w-6 md:h-6 rounded-full bg-pink-500 border-4 border-white shadow`}
          ></div>

          <div className="flex flex-col md:flex-row items-start gap-3">
            <div className="text-2xl md:text-3xl shrink-0">{emoji}</div>
            <div className="flex flex-col">
              <p className="text-xs md:text-sm text-gray-500">{date}</p>
              <p className="text-sm md:text-base font-semibold text-pink-700">
                {title}
              </p>

              {/* Show Photos */}
              <div className="flex gap-2 mt-2 flex-wrap">
                {photos.map((p, i) => (
                  <img
                    key={i}
                    src={p}
                    alt={`${title}-${i}`}
                    className="w-16 h-16 md:w-32 md:h-32 rounded-lg object-cover cursor-pointer hover:scale-105 transition"
                    onClick={() => openModal(i)}
                  />
                ))}
              </div>

              {desc && (
                <p className="text-xs md:text-sm text-gray-500 mt-1">{desc}</p>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl p-4 max-w-2xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tombol close */}
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-pink-600 text-2xl"
              onClick={closeModal}
            >
              <X />
            </button>

            {/* Tombol Prev */}
            {photos.length > 1 && (
              <button
                className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/70 rounded-full p-2 hover:bg-white shadow"
                onClick={showPrev}
              >
                <ChevronLeft size={24} />
              </button>
            )}

            {/* Tombol Next */}
            {photos.length > 1 && (
              <button
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/70 rounded-full p-2 hover:bg-white shadow"
                onClick={showNext}
              >
                <ChevronRight size={24} />
              </button>
            )}

            {/* Foto */}
            <img
              src={photos[currentIndex]}
              alt={`${title}-${currentIndex}`}
              className="rounded-xl w-full object-contain max-h-[80vh]"
            />
          </div>
        </div>
      )}
    </>
  );
}
