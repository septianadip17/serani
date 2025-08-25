import { motion } from "framer-motion";

export default function TimelineItem({ date, title, emoji, isLeft }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`flex ${isLeft ? "justify-start" : "justify-end"} w-full`}
    >
      <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 w-5/6 md:w-1/2 relative">
        {/* Titik di garis */}
        <div
          className={`absolute top-6 ${
            isLeft ? "-right-4" : "-left-4"
          } w-6 h-6 rounded-full bg-pink-500 border-4 border-white shadow`}
        ></div>

        <div className="flex items-start gap-3">
          <div className="text-3xl shrink-0">{emoji}</div>
          <div>
            <p className="text-xs md:text-sm text-gray-500">{date}</p>
            <p className="text-base md:text-lg font-semibold text-pink-700">
              {title}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
