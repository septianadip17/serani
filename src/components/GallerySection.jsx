import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import photos from "../data/photos";
import {
  Images,
  ArrowUpRight,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [q, setQ] = useState("");
  const [tag, setTag] = useState("All");

  const tags = useMemo(
    () => ["All", ...Array.from(new Set(photos.map((p) => p.moment)))],
    []
  );

  const filtered = useMemo(() => {
    return photos.filter((p) => {
      const hitQ =
        !q ||
        p.caption.toLowerCase().includes(q.toLowerCase()) ||
        p.moment.toLowerCase().includes(q.toLowerCase());
      const hitTag = tag === "All" || p.moment === tag;
      return hitQ && hitTag;
    });
  }, [q, tag]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight" && selectedIndex !== null) {
        setSelectedIndex((prev) => (prev + 1) % filtered.length);
      }
      if (e.key === "ArrowLeft" && selectedIndex !== null) {
        setSelectedIndex(
          (prev) => (prev - 1 + filtered.length) % filtered.length
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, filtered.length]);

  // fungsi navigasi
  const nextPhoto = () =>
    setSelectedIndex((prev) => (prev + 1) % filtered.length);
  const prevPhoto = () =>
    setSelectedIndex((prev) => (prev - 1 + filtered.length) % filtered.length);

  return (
    <section className="py-28 px-6 bg-pink-50" id="gallery">
      <h2 className="text-3xl font-bold text-center text-pink-600 mb-10 font-[Dancing Script]">
        Galeri Kita <Images className="inline-block mb-1" />
      </h2>

      {/* controls */}
      <div className="flex flex-col md:flex-row gap-3 md:items-center mb-6 justify-center">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Cari momen atau caption..."
          className="w-full md:max-w-sm rounded-xl px-4 py-2 bg-white border border-pink-200 outline-none focus:ring-2 focus:ring-pink-400"
        />
        <div className="flex gap-2 flex-wrap justify-center">
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setTag(t)}
              className={`px-3 py-1 rounded-full text-sm border transition ${
                tag === t
                  ? "bg-pink-500 text-white border-pink-500"
                  : "bg-white border-pink-200 hover:bg-pink-100"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* masonry gallery */}
      <div className="container mx-auto masonry columns-2 md:columns-4 space-y-4">
        <AnimatePresence>
          {filtered.map((photo, idx) => (
            <motion.div
              key={photo.id}
              className="masonry-col relative cursor-pointer break-inside-avoid group"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (idx % 6) * 0.05 }}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedIndex(idx)}
            >
              <div className="rounded-xl overflow-hidden shadow-lg bg-white">
                <img
                  src={photo.url}
                  alt={photo.caption}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <div className="p-3 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">{photo.caption}</p>
                    <p className="text-xs text-pink-600/80">{photo.moment}</p>
                  </div>
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* modal preview */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              className="bg-white rounded-2xl p-4 max-w-md w-[70%] relative overflow-hidden"
              initial={{ scale: 0.9, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 10 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-1 text-gray-600 hover:text-pink-600"
                onClick={() => setSelectedIndex(null)}
              >
                <X />
              </button>

              {/* Tombol kiri */}
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow"
                onClick={prevPhoto}
              >
                <ChevronLeft className="text-pink-600" />
              </button>

              {/* Foto dengan swipe gesture */}
              <motion.img
                key={filtered[selectedIndex].id}
                src={filtered[selectedIndex].url}
                alt={filtered[selectedIndex].caption}
                className="rounded-xl w-full object-cover"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, info) => {
                  if (info.offset.x > 100) {
                    prevPhoto();
                  } else if (info.offset.x < -100) {
                    nextPhoto();
                  }
                }}
                initial={{ x: 0, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />

              <p className="mt-3 text-center text-gray-700 font-medium">
                {filtered[selectedIndex].caption}
              </p>

              {/* Tombol kanan */}
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow"
                onClick={nextPhoto}
              >
                <ChevronRight className="text-pink-600" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
