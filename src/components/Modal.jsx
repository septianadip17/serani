function Modal({ image, title, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div className="bg-white p-4 rounded-lg max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
        <img src={image} alt={title} className="w-full h-auto rounded" />
        <button
          className="mt-4 text-sm text-rose-500 hover:underline"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;