function StorySection({ title, text }) {
  return (
    <div className="bg-blush p-6 rounded-xl my-6 shadow-md max-w-2xl mx-auto">
      <h2 className="text-2xl font-script text-rose-500">{title}</h2>
      <p className="text-gray-700 mt-2 font-body">{text}</p>
    </div>
  );
}

export default StorySection;
