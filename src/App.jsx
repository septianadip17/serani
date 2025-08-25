
import LoveLetter from "./components/LoveLetter";
import Proposal from "./components/Proposal";
import Gallery from "./components/Gallery";
import "aos/dist/aos.css";
import Landing from "./components/Landing";

const AnimatedHearts = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {[...Array(10)].map((_, i) => (
        <span
          key={i}
          className="heart"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: `${Math.random() * 100}px`,
            animationDelay: `${Math.random() * 10}s`,
            fontSize: `${Math.random() * 2 + 1.5}rem`,
          }}
        >
          💗
        </span>
      ))}
    </div>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-pink-gradient bg-[length:400%_400%] animate-gradient-move">
      <main className="bg-pink-100 min-h-screen p-4">
        <Landing />
        <AnimatedHearts />

        <Gallery />
        <LoveLetter />
        <Proposal />
      </main>
    </div>
  );
}

export default App;
