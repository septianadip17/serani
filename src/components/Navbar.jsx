import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "story", label: "Story" },
    { id: "gallery", label: "Gallery" },
    { id: "jadigini", label: "Jadi Gini" },
    { id: "nahgitu", label: "Nah Gitu" },
  ];

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const NavLink = ({ id, label, isMobile }) => (
    <button
      onClick={() => handleScroll(id)}
      className={`hover:text-pink-200 transition ${
        isMobile ? "block w-full text-left text-lg" : ""
      }`}
    >
      {label}
    </button>
  );

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-pink-500 to-pink-700 text-white shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">HiRani</div>

        {/* Menu desktop */}
        <div className="hidden md:flex gap-8 text-lg">
          {menuItems.map((item) => (
            <NavLink key={item.id} {...item} />
          ))}
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu (slide from right) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="fixed top-0 right-0 h-full w-2/4  bg-gradient-to-r from-pink-700 to-pink-400 shadow-2xl p-6 md:hidden z-40"
          >
            {/* Close button inside */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white"
            >
              <X size={28} />
            </button>

            {/* Menu items with slight slide-down animation */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.1 },
                },
              }}
              className="mt-12 space-y-6"
            >
              {menuItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <NavLink {...item} isMobile />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
