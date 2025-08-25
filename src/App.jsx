import {
  FaCommentDots,
  FaPhoneAlt,
  FaLaughSquint,
  FaVideo,
  FaMoon,
  FaHeartBroken,
  FaHeart,
  FaRing,
} from "react-icons/fa";
import StorySection from "./components/StorySection";
import LoveLetter from "./components/LoveLetter";
import Proposal from "./components/Proposal";
import Gallery from "./components/Gallery";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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
  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: true, 
    });
  }, []);
  const stories = [
    {
      title: "Lucu amat yak",
      text: "It started from a simple chat, but something about you felt special from the very beginning.",
      icon: FaCommentDots,
      image: ["/photos/chat-pertama.jpeg", "/photos/ig-chat.png"],
      imagePosition: "right",
    },
    {
      title: "",
      text: "Your voice instantly calmed me. That phone call changed everything.",
      icon: FaPhoneAlt,
      image: "/photos/first-call.jpeg",
      imagePosition: "left",
    },
    {
      title: "Our Little Jokes",
      text: "Gendut Lucu, Nasi Padang, Jatuh-Jatuh — those silly moments became treasures.",
      icon: FaLaughSquint,
      image: "/photos/jokes.jpeg",
      imagePosition: "right",
    },
    {
      title: "Our First Video Call",
      text: "Seeing your smile on screen made me wish I could reach through it and hug you.",
      icon: FaVideo,
      image: "/photos/video-call.jpeg",
      imagePosition: "left",
    },
    {
      title: "Late Night Talks",
      text: "Those deep talks at night made me feel safe. I never wanted them to end.",
      icon: FaMoon,
      image: "/photos/late-night.jpeg",
      imagePosition: "right",
    },
    {
      title: "Missing You",
      text: "Even just a day without your voice felt like something was missing.",
      icon: FaHeartBroken,
      image: "/photos/miss-you.jpeg",
      imagePosition: "left",
    },
    {
      title: "The Moment I Fell",
      text: "I didn’t even realize I was falling for you — it just felt so natural.",
      icon: FaHeart,
      image: "/photos/fall-in-love.jpeg",
      imagePosition: "right",
    },
    {
      title: "Today",
      text: "And now, here we are. I gathered all my courage to say what’s been in my heart.",
      icon: FaRing,
      image: "/photos/proposal.jpeg",
      imagePosition: "center",
    },
  ];

  return (
    <div className="min-h-screen bg-pink-gradient bg-[length:400%_400%] animate-gradient-move">
      <main className="bg-pink-100 min-h-screen p-4">
        <section className="text-center mt-10">
          <h1 className="text-5xl font-script text-rose-600 mb-6">
            Hai, Raney Raniy wkwkwk
          </h1>
          <p className="text-gray-700 font-body max-w-xl mx-auto">
            A little memory lane of us — every scroll tells a piece of my heart.
          </p>
        </section>

        <section>
          {stories.map((story, index) => (
            <StorySection
              key={index}
              title={story.title}
              text={story.text}
              icon={story.icon}
              image={story.image}
              imagePosition={story.imagePosition}
            />
          ))}
        </section>
        <AnimatedHearts />

        <Gallery />
        <LoveLetter />
        <Proposal />
      </main>
    </div>
  );
}

export default App;
