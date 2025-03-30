// client/src/components/Skills.jsx

import { skills } from "./Skills/SkillsData.js";
import { SkillCube } from "./Skills/SkillCube.jsx";

const Skills = ({ darkMode }) => {
  return (
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
  );
};

export default Skills;
