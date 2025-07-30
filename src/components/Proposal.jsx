import { useState, useEffect } from "react";
import Confetti from "react-confetti";

function Proposal() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleYesClick = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000); 
  };

  return (
    <div className="text-center py-10 relative">
      {showConfetti && (
        <Confetti width={windowSize.width} height={windowSize.height} />
      )}
      <h2 className="text-4xl font-script text-rose-600 mb-4">
        Would you be my girlfriend?
      </h2>
      <div className="flex justify-center gap-4">
        <button
          className="bg-rose-400 text-white px-6 py-2 rounded-full hover:bg-rose-500 transition"
          onClick={handleYesClick}
        >
          💗 Yes
        </button>
        <button className="bg-white border border-rose-300 px-6 py-2 rounded-full hover:bg-rose-100 transition">
          🤭 Blush
        </button>
      </div>
    </div>
  );
}

export default Proposal;
