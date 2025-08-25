import React from 'react'
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
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const Stories = () => {
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
    <div className="stories-container">
      {stories.map((story, idx) => (
        <div
          key={idx}
          className={`story story-${story.imagePosition}`}
          data-aos="fade-up"
        >
          <div className="story-icon">
            {React.createElement(story.icon)}
          </div>
          <div className="story-content">
            {story.title && <h3>{story.title}</h3>}
            <p>{story.text}</p>
            {Array.isArray(story.image) ? (
              <div className="story-images">
                {story.image.map((img, i) => (
                  <img key={i} src={img} alt="" />
                ))}
              </div>
            ) : (
              <img src={story.image} alt="" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Stories