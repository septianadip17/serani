import { useEffect, useState, useRef } from "react";
import { Gem } from "lucide-react";

export default function LoveLetter() {
  const message = `Ran, kayanya kita udah terlalu kedeketan ga si, aku ngerasanya si gitu, harusnya kamu juga si hahaha. 
  kata kamu kan 3 bulan cukup buat pendekatan, nah sekarang udah mau 3 bulan ni wkwkwk. Apalagi yak. Bingung mau ngomong basa-basi apa lagi. langsung intinya aja dah.
Aku pengen kita gini terus cuma resmi WKWKWKWK. 
  `;

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartTyping(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  // typing effect
  useEffect(() => {
    if (startTyping && index < message.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + message[index]);
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index, message, startTyping]);

  return (
    <div
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-100 to-pink-50 px-6 relative"
    >
      <div className="max-w-3xl flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-pink-600 font-[Dancing Script]">
          Jadi Gini <Gem className="inline-block mb-1" />
        </h2>
        <p className="whitespace-pre-line text-base md:text-2xl leading-relaxed text-pink-700 font-normal">
          {displayedText}
        </p>
      </div>
    </div>
  );
}
