function StorySection({ title, text, emoji, image }) {
  return (
    <div className="bg-white p-6 rounded-xl my-6 shadow-md max-w-2xl mx-auto border-l-4 border-rose-300">
      <div className="flex items-center gap-4">
        <div className="text-3xl">{emoji}</div>
        <h2 className="text-2xl font-script text-rose-500">{title}</h2>
      </div>
      {image && (
        <img
          src={image}
          alt={title}
          className="mt-4 rounded-lg w-full object-cover max-h-60"
        />
      )}
      <p className="text-gray-700 mt-3 font-body">{text}</p>
    </div>
  );
}
export default StorySection;