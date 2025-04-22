import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${darkMode ? "bg-gray-900" : "bg-white"} shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="https://mern-threejs-portfolio.vercel.app/">
              <img
                src="/logos/krs-logo.png"
                alt="KRS Logo"
                className="h-8 sm:h-10 w-auto max-w-full"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {links.map((link) => (
              <motion.div
                key={link}
                whileHover={{ scale: 1.1 }}
                className={`${darkMode ? "text-gray-300" : "text-gray-600"} hover:text-blue-600`}
              >
                <a href={`#${link.toLowerCase()}`} className="px-3 py-2 rounded-md text-sm font-medium">
                  {link}
                </a>
              </motion.div>
            ))}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-200"}`}
            >
              {darkMode ? "🌞" : "🌙"}
            </button>
            {/* Social Icons */}
            <a href="https://github.com/Krishna-R-Sonar" target="_blank" rel="noopener noreferrer">
              <img src="/logos/github.png" alt="GitHub" className="h-6 w-6 hover:opacity-75 transition-opacity" />
            </a>
            <a href="https://www.linkedin.com/in/krishna-s-ba906525a" target="_blank" rel="noopener noreferrer">
              <img src="/logos/linkedin.png" alt="LinkedIn" className="h-6 w-6 hover:opacity-75 transition-opacity" />
            </a>
            <a href="https://drive.google.com/file/d/1DGuEZ3Thh3K-GVM5i6ZXY09xc6su3qES/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <img src="/logos/resume.png" alt="Resume" className="h-6 w-6 hover:opacity-75 transition-opacity" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2 sm:gap-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-200"}`}
            >
              {darkMode ? "🌞" : "🌙"}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                darkMode ? "text-gray-300" : "text-gray-600"
              } hover:text-blue-600`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`md:hidden ${darkMode ? "bg-gray-900" : "bg-white"}`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`block px-3 py-2 rounded-md text-sm ${
                  darkMode ? "text-gray-300 hover:bg-gray-800" : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            ))}
            {/* Social Icons in Mobile Menu */}
            <div className="flex justify-center gap-4 mt-4">
              <a href="https://github.com/Krishna-R-Sonar" target="_blank" rel="noopener noreferrer">
                <img src="/logos/github.png" alt="GitHub" className="h-8 w-8 hover:opacity-75 transition-opacity" />
              </a>
              <a href="https://www.linkedin.com/in/krishna-s-ba906525a" target="_blank" rel="noopener noreferrer">
                <img src="/logos/linkedin.png" alt="LinkedIn" className="h-8 w-8 hover:opacity-75 transition-opacity" />
              </a>
              <a href="https://drive.google.com/file/d/1DGuEZ3Thh3K-GVM5i6ZXY09xc6su3qES/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <img src="/logos/resume.png" alt="Resume" className="h-8 w-8 hover:opacity-75 transition-opacity" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
