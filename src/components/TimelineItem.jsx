import { useState } from "react";
import { motion } from "framer-motion";

export default function TimelineItem({
  date,
  title,
  emoji,
  photo,
  desc,
  isLeft,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

              {photo && (
                <>
                  <img
                    src={photo}
                    alt={title}
                    className="w-20 h-20 md:w-32 md:h-32 mt-2 rounded-lg object-cover cursor-pointer hover:scale-105 transition"
                    onClick={() => setIsModalOpen(true)}
                  />
                  {desc && (
                    <p className="text-xs md:text-sm text-gray-500 mt-1">
                      {desc}
                    </p>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl p-4 max-w-md w-full md:max-w-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-pink-600 text-xl"
              onClick={() => setIsModalOpen(false)}
            >
              ✖
            </button>
            <img
              src={photo}
              alt={title}
              className="rounded-xl w-full object-cover max-h-[80vh]"
            />
          </div>
        </div>
      )}
    </>
  );
}
