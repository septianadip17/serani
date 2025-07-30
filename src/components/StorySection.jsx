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

  return (
    <div className="bg-white p-6 rounded-xl my-6 shadow-md max-w-5xl mx-auto border-l-4 border-rose-300">
      <div className="flex items-center gap-4">
        <div className="text-3xl text-rose-400">{Icon && <Icon />}</div>
        <h2 className="text-2xl font-script text-rose-500">{title}</h2>
      </div>

      {image && (
        <div
          className={`mt-4 flex ${
            imagePosition === "right" ? "flex-row-reverse" : ""
          } gap-4 items-center`}
        >
          <div className="w-1/2">
            <img
              src={image}
              alt={title}
              onClick={() => setShowModal(true)}
              className="rounded-lg w-full object-cover max-h-60 transition-transform duration-300 hover:scale-105 cursor-pointer"
            />
          </div>
          <p className="text-gray-700 font-body w-1/2">{text}</p>
        </div>
      )}

      {!image && <p className="text-gray-700 mt-3 font-body">{text}</p>}

      {showModal && (
        <Modal
          image={image}
          title={title}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default StorySection;
