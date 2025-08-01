import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Modal({ images = [], title, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative bg-white p-4 rounded-lg w-full max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gambar */}
        <img
          src={images[currentIndex]}
          alt={`${title} ${currentIndex + 1}`}
          className="w-full h-auto max-h-[70vh] object-contain rounded-md"
        />

        {/* Navigasi */}
        {images.length > 1 && (
          <>
            <button
              onClick={goPrev}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-rose-100"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={goNext}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-rose-100"
            >
              <FaChevronRight />
            </button>
          </>
        )}

        {/* Close Button */}
        <button
          className="mt-4 text-sm text-rose-500 hover:underline block mx-auto"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;