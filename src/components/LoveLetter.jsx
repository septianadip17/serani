import { useEffect, useState } from "react";

export default function LoveLetter() {
  const message = `Ran, kayanya kita udah terlalu kedeketan ga si, aku ngerasanya si gitu, harusnya kamu juga si hahaha. 
    
  Hari ini aku mau jujur... aku nggak cuma suka, tapi aku benar-benar sayang sama kamu. ❤️`;

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < message.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + message[index]);
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index, message]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-100 to-pink-50 px-6 relative">
      <div className="max-w-2xl text-center">
        <p className="whitespace-pre-line text-lg md:text-2xl leading-relaxed text-pink-700 font-medium">
          {displayedText}
      </p>
      </div>
    </div>
  );
}
