// client/src/components/Projects.jsx
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { CardSpotlight } from "./ui/card-spotlight";

const Projects = ({ darkMode }) => {
  return (
    <section
      id="projects"
      className={`py-12 sm:py-20 px-4 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}
    >
      <h2
        className={`text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 ${
          darkMode ? "text-white" : "text-gray-800"
        }`}
      >
        My Projects
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CardSpotlight
              className="min-h-64 w-full"
              radius={200}
              color={darkMode ? "#1a1a1a" : "#d1d5db"}
            >
              <h3
                className={`text-lg sm:text-xl font-bold mb-2 relative z-20 ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                {project.title}
              </h3>
              <p
                className={`relative z-20 text-sm sm:text-base ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 rounded-md relative z-20 transition-colors text-sm sm:text-base ${
                    darkMode
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
                >
                  View in GitHub
                </a>
                {project.deployedLink && (
                  <a
                    href={project.deployedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2 rounded-md relative z-20 transition-colors text-sm sm:text-base ${
                      darkMode
                        ? "bg-green-600 text-white hover:bg-green-700"
                        : "bg-green-500 text-white hover:bg-green-600"
                    }`}
                  >
                    Web Link
                  </a>
                )}
              </div>
            </CardSpotlight>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
