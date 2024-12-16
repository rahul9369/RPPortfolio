import React, { useState } from "react";
import { motion } from "framer-motion";

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

// Skills component
const Skills = () => {
  const skills = [
    { name: "C++", link: "https://cplusplus.com/" },
    { name: "DSA", link: "https://www.geeksforgeeks.org/data-structures/" },
    {
      name: "HTML5",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    { name: "CSS3", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    {
      name: "Javascript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    { name: "Tailwind CSS", link: "https://tailwindcss.com/" },
    { name: "Bootstrap", link: "https://getbootstrap.com/" },
    { name: "React", link: "https://reactjs.org/" },
    { name: "Node.js", link: "https://nodejs.org/" },
    { name: "Express", link: "https://expressjs.com/" },
    { name: "MongoDB", link: "https://www.mongodb.com/" },
    { name: "Redux", link: "https://redux.js.org/" },
    { name: "Ejs", link: "https://ejs.co/" },
    { name: "GitHub", link: "https://github.com/" },
    { name: "Restful", link: "https://restfulapi.net/" },
  ];

  const skillImages = {
    "C++": Cpp,
    DSA: DSA,
    HTML5: HTML,
    CSS3: CSS,
    Javascript: Javascript,
    "Tailwind CSS": Tailwind,
    Bootstrap: Bootstrap,
    React: ReactLogo,
    "Node.js": Node,
    Express: Express,
    MongoDB: MongoDB,
    Redux: Redux,
    Ejs: Ejs,
    GitHub: GitHub,
    Restful: Restful,
  };

  return (
    <section
      id="skills"
      className="bg-gradient-to-br from-[#1e3a8a] via-[#2e4067] to-[#1e3a8a] py-16">
      <div className="max-w-7xl mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-12">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <motion.a
              key={index}
              href={skill.link} // Link to the official or top website for each skill
              target="_blank"
              rel="noopener noreferrer"
              className="p-8  text-white cursor-pointer hover:scale-105 transition-all duration-300 transform">
              {/* Dynamically load the image for each skill */}
              <motion.img
                src={skillImages[skill.name]}
                alt={`${skill.name} Logo`}
                className="w-24 h-24 mx-auto mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              {/* Skill name */}
              <h3 className="text-lg font-semibold">{skill.name}</h3>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
