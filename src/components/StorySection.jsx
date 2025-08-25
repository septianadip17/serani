// src/components/StorySection.jsx
import { motion } from "framer-motion";

const moments = [
  { date: "8 Juni (Sabtu)", title: "Awal Kenal", emoji: "💌" },
  {
    date: "13 Juni (Kamis)",
    title: "Pertemuan 1 – Tomorro Coffee setelah dia pulang kerja",
    emoji: "☕️",
  },
  {
    date: "17 Juni (Senin)",
    title: "Pertemuan 2 – Jemput, makan ramen, dia masih sakit",
    emoji: "🍜🤒",
  },
  {
    date: "30 Juni (Minggu)",
    title: "Pertemuan 3 – Nonton bioskop, selfie bareng pertama",
    emoji: "🎬🤳",
  },
  {
    date: "1 Juli (Senin)",
    title: "Pertemuan 4 – Jogging GBK, kasih bunga pertama",
    emoji: "🏃‍♀️🌸",
  },
  {
    date: "3 Juli (Rabu)",
    title: "Pertemuan 5 – Jemput, makan mie Bangladesh (2 porsi!)",
    emoji: "🍜🇧🇩",
  },
  {
    date: "7 Juli (Minggu)",
    title: "Pertemuan 6 – Kuncit: Miniso, Puma, Watson, beli skincare",
    emoji: "🛍️💄",
  },
  {
    date: "8 Juli (Senin)",
    title: "Pertemuan 7 – Antar ke kantor, dia bawain bekal",
    emoji: "🍱💖",
  },
  {
    date: "9 Juli (Selasa)",
    title: "Pertemuan 8 – Ketemu dan dia tampil cantik banget",
    emoji: "😍",
  },
  {
    date: "12 Juli (Jumat)",
    title: "Pertemuan 9 – Ke PRJ, dia ngambek pas pulang",
    emoji: "🎡😅",
  },
  {
    date: "14 Juli (Minggu)",
    title: "Pertemuan 10 – Bawain makanan (katanya ga enak), dia kasih sarapan",
    emoji: "🍳🍽️",
  },
  {
    date: "15 Juli (Senin)",
    title: "Pertemuan 11 – Jemput, makan nasgor UMKM di Tebet",
    emoji: "🍚",
  },
  {
    date: "16 Juli (Selasa)",
    title: "Pertemuan 12 – Makan mie Gacoan dan cimol Bojot",
    emoji: "🍜🍢",
  },
  {
    date: "17 Juli (Rabu)",
    title: "Pertemuan 13 – Makan di foodcourt Kuncit, ke Tomorro Coffee",
    emoji: "🍴☕️",
  },
  {
    date: "20 Juli (Sabtu)",
    title: "Pertemuan 14 – CFD, pisang ijo, naik KRL dan MRT, outfit check",
    emoji: "🚶‍♂️🚆✨",
  },
  {
    date: "27 Juli (Sabtu)",
    title: "Pertemuan 15 – Nonton di Kelapa Gading, naik TransJakarta",
    emoji: "🎥🚌",
  },
  {
    date: "28 Juli (Minggu)",
    title: "Pertemuan 16 – Jemput dan nail art bareng",
    emoji: "💅💖",
  },
  {
    date: "31 Juli (Rabu)",
    title:
      "Pertemuan 17 – Belanja bareng, makan Ricis, ngobrol tentang perasaan",
    emoji: "🛒🍗❤️",
  },
];

export default function StorySection() {
  return (
    <section className="py-16 bg-gradient-to-b from-pink-50 to-pink-100 relative" id="story">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pink-600 font-[Dancing Script]">
        Perjalanan Kita ✨
      </h2>

      {/* Garis tengah */}
      <div className="absolute left-1/2 top-0 w-1 h-full bg-pink-300 transform -translate-x-1/2"></div>

      <div className="max-w-4xl mx-auto space-y-12 px-4 relative z-10">
        {moments.map((m, i) => {
          const isLeft = i % 2 === 0; // zig-zag
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`flex ${
                isLeft ? "justify-start" : "justify-end"
              } w-full`}
            >
              <div
                className={`bg-white rounded-2xl shadow-lg p-4 md:p-6 w-5/6 md:w-1/2 relative`}
              >
                {/* Titik di garis */}
                <div
                  className={`absolute top-6 ${
                    isLeft ? "-right-4" : "-left-4"
                  } w-6 h-6 rounded-full bg-pink-500 border-4 border-white shadow`}
                ></div>

                <div className="flex items-start space-x-3">
                  <div className="text-3xl">{m.emoji}</div>
                  <div>
                    <p className="text-sm text-gray-500">{m.date}</p>
                    <p className="text-lg md:text-xl font-semibold text-pink-700">
                      {m.title}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
