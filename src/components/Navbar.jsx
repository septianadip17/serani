import React from "react";
import { Link } from "react-scroll"; // biar smooth scroll ke section

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo / Title */}
        <h1 className="text-2xl font-bold text-pink-500">HiRaney</h1>

        {/* Menu */}
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-pink-500 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="story"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-pink-500 transition"
            >
              Story
            </Link>
          </li>
          <li>
            <Link
              to="gallery"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-pink-500 transition"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-pink-500 transition"
            >
              Jadi Gini
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
