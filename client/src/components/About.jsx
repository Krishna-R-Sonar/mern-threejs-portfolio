// client/src/components/About.jsx
import { motion } from "framer-motion";
import { TextRevealCard } from "./ui/text-reveal-card";

const About = ({ darkMode }) => {
  return (
    <section id="about" className={`py-12 sm:py-20 px-4 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="max-w-6xl mx-auto"
      >
        <TextRevealCard
          text="About Me"
          revealText="I'm a full-stack developer specializing in building modern web applications with React, Node.js, and Three.js. Passionate about creating interactive 3D experiences."
          className="w-full md:w-[50rem] lg:w-[60rem] mx-auto"
        />
      </motion.div>
    </section>
  );
};

export default About;
