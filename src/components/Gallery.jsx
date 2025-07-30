function Gallery() {
  const photos = [
    "/photos/gbk-1.HEIC",
    "/photos/gbk-2.HEIC",
  ];

  return (
    <div className="my-10 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-script text-rose-500 mb-4">Our Moments 📸</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Memory ${index + 1}`}
            className="rounded-lg shadow-md object-cover w-full h-64"
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;