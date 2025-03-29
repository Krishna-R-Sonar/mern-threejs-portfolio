// client/src/components/Header.jsx
import { motion } from "framer-motion";
import { TextHoverEffect } from "./ui/text-hover-effect";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import { TypewriterText } from "./ui/typewriter-text";

const Header = ({ darkMode }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-10 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center z-10 max-w-2xl flex flex-col items-center"
        >
          <div className="h-20 sm:h-24 flex items-center justify-center">
            <TextHoverEffect text="Welcome to My Portfolio" />
          </div>
          <div className="relative w-full h-12 sm:h-16 overflow-hidden">
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mt-4 absolute top-0 left-0 w-full">
              <TypewriterText
                text="Aspiring Blockchain & MERN Developer dedicated to crafting innovative, secure, and scalable digital solutions."
                highlightWords={["Blockchain", "MERN", "innovative", "secure", "scalable"]}
              />
            </p>
          </div>
        </motion.div>
        <CardContainer className="w-full max-w-[320px] py-0">
          <CardBody
            className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full rounded-xl p-6 border"
            style={{ aspectRatio: "3/4" }}
          >
            <CardItem translateZ="100" className="w-full h-full">
              <div className="border-4 border-gray-300 dark:border-gray-600 w-full h-full">
                <img
                  src="/logos/pHOTO.jpg"
                  className="w-full h-full object-cover"
                  alt="My Photo"
                />
              </div>
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </section>
  );
};

export default Header;
