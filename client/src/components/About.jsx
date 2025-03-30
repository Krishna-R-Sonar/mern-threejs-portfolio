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
          revealText="I am a passionate Blockchain and MERN developer focused on crafting innovative, user-centric experiences. I actively seek opportunities to collaborate with dynamic teams, forward-thinking individuals, and experienced mentors to tackle real-world challenges and build impactful solutions. Committed to lifelong learning, I continuously embrace new technologies and leverage advanced AI tools—such as ChatGPT, Deepseek, and Grok 3—to deepen my understanding, enhance my coding efficiency, and bring creative ideas to life. If you're looking for someone eager to push technological boundaries and contribute to groundbreaking projects, let's connect and build the future together."
          className="w-full md:w-[50rem] lg:w-[60rem] mx-auto"
        />
      </motion.div>
    </section>
  );
};

export default About;
