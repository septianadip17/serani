import { useState } from "react";
import Modal from "./Modal";

function StorySection({
  title,
  text,
  icon: Icon,
  image,
  imagePosition = "left",
}) {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = Array.isArray(image) ? image : image ? [image] : [];

  const handleImageClick = (imgUrl) => {
    setSelectedImage(imgUrl);
    setShowModal(true);
  };

  return (
    <div className="bg-white p-6 rounded-xl my-6 shadow-md max-w-6xl mx-auto border-l-4 border-rose-300">
      {/* Header Section */}
      <div className="flex items-center gap-4 mb-4">
        {Icon && <div className="text-3xl text-rose-400">{<Icon />}</div>}
        <h2 className="text-2xl md:text-3xl font-script text-rose-500">
          {title}
        </h2>
      </div>

      {/* Content Section */}
      <div
        className={`flex flex-col md:flex-row ${
          imagePosition === "right" ? "md:flex-row-reverse" : ""
        } gap-6 items-start`}
      >
        {/* Images */}
        {images.length > 0 && (
          <div className="flex flex-wrap gap-3 justify-center md:justify-start md:w-1/2">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${title}-${index}`}
                onClick={() => handleImageClick(img)}
                className="rounded-lg object-cover h-36 md:h-40 w-[calc(50%-0.375rem)] md:w-[calc(50%-0.375rem)] cursor-pointer hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        )}

        {/* Description */}
        <p className="text-gray-700 font-body text-base md:text-lg md:w-1/2 leading-relaxed">
          {text}
        </p>
      </div>

      {/* Modal */}
      {showModal && (
        <Modal
          images={image}
          title={title}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default StorySection;
