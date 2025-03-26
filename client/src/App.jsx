import "./index.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import { Contact } from "./components/Contact";
import MessageList from "./components/Dashboard/MessageList";
import { skills } from "./components/Skills/SkillsData.js";
import { SkillCube } from "./components/Skills/SkillCube.jsx";
import Footer from "./components/Footer";

const App = () => {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(() => {
    // Load dark mode preference from localStorage, default to false if not set
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    // Apply dark mode class to HTML element on mount and when darkMode changes
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Save preference to localStorage
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`relative min-h-screen ${darkMode ? "dark bg-gray-900" : "bg-white"}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <>
                <Header darkMode={darkMode} />
                <Projects darkMode={darkMode} />
                <section
                  id="skills"
                  className={`py-12 sm:py-20 px-4 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}
                >
                  <h2
                    className={`text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 ${
                      darkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    My Skills
                  </h2>
                  <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8">
                    {skills.map((skill, index) => (
                      <SkillCube key={index} skill={skill} darkMode={darkMode} />
                    ))}
                  </div>
                </section>
                <About darkMode={darkMode} />
                <Contact darkMode={darkMode} />
              </>
            }
          />
          <Route path="/dashboard" element={<MessageList darkMode={darkMode} />} />
        </Routes>
      </AnimatePresence>
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default App;
