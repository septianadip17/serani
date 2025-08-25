import moments from "../data/moments";
import TimelineItem from "./TimelineItem";

export default function StorySection() {
  return (
    <section
      className="py-28 bg-gradient-to-b from-pink-50 to-pink-100 relative"
      id="story"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pink-600 font-[Dancing Script]">
        Perjalanan Kita ✨
      </h2>

      {/* Garis tengah */}
      <div className="absolute left-1/2 top-0 w-1 h-full bg-pink-300 transform -translate-x-1/2"></div>

      <div className="max-w-4xl mx-auto space-y-12 px-4 relative z-10">
        {moments.map((m, i) => (
          <TimelineItem key={i} {...m} isLeft={i % 2 === 0} />
        ))}
      </div>
    </section>
  );
}