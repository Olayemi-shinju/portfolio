import { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.querySelector(id);
    if (el) {
      const headerOffset = 80; // adjust if your header is taller
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <header className="bg-slate-900 shadow-lg sticky top-0 z-50 border-b border-slate-800">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center"
      >
        {/* Logo / Name */}
        <h1 className="text-xl font-bold text-sky-400">My Portfolio</h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 text-slate-300">
          <li>
            <button
              onClick={() => handleScroll("#projects")}
              className="hover:text-sky-400 transition-colors"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("#skills")}
              className="hover:text-sky-400 transition-colors"
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("#contact")}
              className="hover:text-sky-400 transition-colors"
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex gap-3 ml-6">
          <a
            href="/resume.pdf"
            download
            className="bg-sky-500 text-slate-900 px-4 py-2 rounded-lg font-medium hover:bg-sky-400 transition-colors"
          >
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/olayemi-awoyemi-9045ba371/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-sky-400 text-sky-400 px-4 py-2 rounded-lg font-medium hover:bg-sky-400 hover:text-slate-900 transition-colors"
          >
            LinkedIn
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-sky-400 text-2xl"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </motion.nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-slate-800 border-t border-slate-700 px-4 py-4 space-y-4"
        >
          <button
            onClick={() => handleScroll("#projects")}
            className="block text-slate-300 hover:text-sky-400 transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => handleScroll("#skills")}
            className="block text-slate-300 hover:text-sky-400 transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => handleScroll("#contact")}
            className="block text-slate-300 hover:text-sky-400 transition-colors"
          >
            Contact
          </button>
          <a
            href="/resume.pdf"
            download
            className="block bg-sky-500 text-slate-900 px-4 py-2 rounded-lg font-medium hover:bg-sky-400 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/olayemi-awoyemi-9045ba371/"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-sky-400 text-sky-400 px-4 py-2 rounded-lg font-medium hover:bg-sky-400 hover:text-slate-900 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            LinkedIn
          </a>
        </motion.div>
      )}
    </header>
  );
}
