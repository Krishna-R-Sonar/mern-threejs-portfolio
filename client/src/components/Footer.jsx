import { motion } from "framer-motion";

const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-8 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="flex items-center gap-2">
          <img src="/logos/copyright.png" alt="Copyright" className="h-5 w-5" />
          <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Krishna Sonar
          </p>
        </div>
        <p className={`text-sm mt-2 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
          Made with love using Acernity UI and Icons8
        </p>
      </div>
    </footer>
  );
};

export default Footer;
