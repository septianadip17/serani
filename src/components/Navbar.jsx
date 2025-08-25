import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">HiRani</div>

        {/* Menu desktop */}
        <div className="hidden md:flex gap-8 text-lg">
          <button
            onClick={() => handleScroll("home")}
            className="hover:text-pink-200 transition"
          >
            Home
          </button>
          <button
            onClick={() => handleScroll("story")}
            className="hover:text-pink-200 transition"
          >
            Story
          </button>
          <button
            onClick={() => handleScroll("gallery")}
            className="hover:text-pink-200 transition"
          >
            Gallery
          </button>
          <button
            onClick={() => handleScroll("jadigini")}
            className="hover:text-pink-200 transition"
          >
            Jadi Gini
          </button>
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-pink-600 px-6 py-4 space-y-4">
          <button
            onClick={() => handleScroll("home")}
            className="block hover:text-pink-200 transition"
          >
            Home
          </button>
          <button
            onClick={() => handleScroll("story")}
            className="block hover:text-pink-200 transition"
          >
            Story
          </button>
          <button
            onClick={() => handleScroll("gallery")}
            className="block hover:text-pink-200 transition"
          >
            Gallery
          </button>
          <button
            onClick={() => handleScroll("jadigini")}
            className="block hover:text-pink-200 transition"
          >
            Jadi Gini
          </button>
        </div>
      )}
    </nav>
  );
}
