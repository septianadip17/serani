import { useState } from "react";
import {
  Menu,
  X,
  Home,
  BookOpen,
  Image,
  MessageCircle,
  HeartHandshake,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: "home", label: "Home", icon: Home, desc: "Halo Ran wkwk" },
    {
      id: "story",
      label: "Story",
      icon: BookOpen,
      desc: "Kenangan Ketemu Nih",
    },
    {
      id: "gallery",
      label: "Gallery",
      icon: Image,
      desc: "Foto-Foto Asoy Kita",
    },
    {
      id: "jadigini",
      label: "Jadi Gini",
      icon: MessageCircle,
      desc: "Hehehe",
    },
    {
      id: "nahgitu",
      label: "Nah Gitu",
      icon: HeartHandshake,
      desc: "Oke Yeh",
    },
  ];

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const NavLink = ({ id, label, icon: Icon, desc, isMobile }) => (
    <button
      onClick={() => handleScroll(id)}
      className={`hover:text-pink-200 transition flex items-center 
    ${isMobile ? "w-full text-left gap-3" : "gap-1"}`}
    >
      {Icon && <Icon size={22} />}
      <div className="flex flex-col items-start">
        <span className="text-lg font-semibold">{label}</span>
        {isMobile && desc && (
          <span className="text-sm text-pink-100">{desc}</span>
        )}
      </div>
    </button>
  );

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-br from-pink-500 to-pink-700 text-white shadow-lg z-50">
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

      {/* Overlay + Mobile menu (slide from right) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black md:hidden z-30"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              key="mobileMenu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
              className="fixed top-0 right-0 h-full w-2/4 bg-gradient-to-br from-pink-800  to-pink-500 shadow-2xl p-6 md:hidden z-40"
            >
              {/* Close button inside */}
              <button
                onClick={() => setTimeout(() => setIsOpen(false), 40)}
                className="absolute top-4 right-4 text-white"
              >
                <X size={28} />
              </button>

              {/* Menu items */}
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
                className="mt-20 space-y-6"
              >
                {menuItems.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={{
                      hidden: { opacity: 0, y: -30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <NavLink {...item} isMobile />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
