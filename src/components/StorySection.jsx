import moments from "../data/moments";
import TimelineItem from "./TimelineItem";
import { Sailboat } from "lucide-react";

export default function StorySection() {
  return (
    <section
      className="py-28 bg-gradient-to-b from-pink-50 to-pink-100 relative"
      id="story"
    >
      {/* Center line */}
      <div className="absolute left-1/2 top-56 bottom-0 w-1 bg-pink-300 transform -translate-x-1/2 z-0"></div>

      {/* Wrapper untuk judul */}
      <div className="relative max-w-4xl mx-auto px-4 z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pink-600 font-[Dancing Script]">
          Perjalanan Kita Coy <Sailboat className="inline-block mb-1" />
        </h2>
      </div>

      {/* Timeline items */}
      <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-12 flex flex-col md:flex-col">
        {moments.map((m, i) => (
          <TimelineItem
            key={i}
            {...m}
            isLeft={i % 2 === 0} // tetap kiri-kanan
          />
        ))}
      </div>
    </section>
  );
}
