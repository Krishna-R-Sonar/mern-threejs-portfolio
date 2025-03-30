import "./index.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { Contact } from "./components/Contact";
import MessageList from "./components/Dashboard/MessageList";
import Footer from "./components/Footer";
import LazyLoad from "./components/LazyLoad";

const App = () => {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
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
                <LazyLoad><Header darkMode={darkMode} /></LazyLoad>
                <LazyLoad><Projects darkMode={darkMode} /></LazyLoad>
                <LazyLoad><Skills darkMode={darkMode} /></LazyLoad>
                <LazyLoad><About darkMode={darkMode} /></LazyLoad>
                <LazyLoad><Contact darkMode={darkMode} /></LazyLoad>
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
