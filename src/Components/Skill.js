import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Import all images from the Assets folder
import Cpp from "../Assets/C++-Logo.wine.png";
import DSA from "../Assets/DSA.png";
import HTML from "../Assets/html.png";
import CSS from "../Assets/css.png";
import Javascript from "../Assets/js.png";
import Tailwind from "../Assets/Tailwind.png";
import Bootstrap from "../Assets/bootstrap.png";
import ReactLogo from "../Assets/react.png";
import Node from "../Assets/nodejs.png";
import Express from "../Assets/Express.jpg";
import MongoDB from "../Assets/Mongoose.png";
import Redux from "../Assets/redux.png";
import Ejs from "../Assets/EJS.png";
import GitHub from "../Assets/github.png";
import Restful from "../Assets/restful.jpeg";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const skills = [
    { name: "C++", image: Cpp, category: "Programming", level: 90 },
    { name: "DSA", image: DSA, category: "Computer Science", level: 85 },
    { name: "HTML5", image: HTML, category: "Frontend", level: 95 },
    { name: "CSS3", image: CSS, category: "Frontend", level: 90 },
    { name: "JavaScript", image: Javascript, category: "Frontend", level: 92 },
    { name: "Tailwind CSS", image: Tailwind, category: "Frontend", level: 88 },
    { name: "Bootstrap", image: Bootstrap, category: "Frontend", level: 85 },
    { name: "React", image: ReactLogo, category: "Frontend", level: 90 },
    { name: "Node.js", image: Node, category: "Backend", level: 85 },
    { name: "Express", image: Express, category: "Backend", level: 88 },
    { name: "MongoDB", image: MongoDB, category: "Database", level: 82 },
    { name: "Redux", image: Redux, category: "State Management", level: 85 },
    { name: "EJS", image: Ejs, category: "Templating", level: 80 },
    { name: "GitHub", image: GitHub, category: "Version Control", level: 88 },
    { name: "RESTful API", image: Restful, category: "Backend", level: 90 },
  ];

  const categories = [...new Set(skills.map((skill) => skill.category))];

  return (
    <section
      id="skills"
      ref={ref}
      className="min-h-screen py-20 bg-gradient-to-br from-[#1e3a8a] via-[#111827] to-[#1e3a8a] text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
            My Skills
          </h2>
          <p className="text-gray-300 text-lg">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-yellow-400">
                {category}
              </h3>
              <div className="space-y-6">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-white/10 p-2">
                        <img
                          src={skill.image}
                          alt={skill.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : {}}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="h-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600"
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center">
          <p className="text-gray-300 text-lg mb-8">
            Continuously learning and exploring new technologies to stay at the
            forefront of web development
          </p>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold rounded-lg shadow-lg hover:shadow-yellow-500/50 transition-all duration-300">
            View My Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
