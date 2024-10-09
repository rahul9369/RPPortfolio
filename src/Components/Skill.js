import React from "react";

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
  // Create an array of skills
  const skills = [
    "C++",
    "DSA",
    "HTML5",
    "CSS3",
    "Javascript",
    "Tailwind CSS",
    "Bootstrap",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Redux",
    "Ejs",
    "GitHub",
    "Restful",
  ];

  // Map skills to corresponding images
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
    // You can add more skills and their images here
  };

  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-gray-900 to-black py-12">
      <div className="max-w-7xl mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-12 animate-fade-in">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 animate-fade-in">
              {/* Dynamically load the image for each skill */}
              {skillImages[skill] && (
                <img
                  src={skillImages[skill]}
                  alt={`${skill} Logo`}
                  className="w-16 h-16 mx-auto mt-4"
                />
              )}
              <h3 className="text-xl font-semibold mb-2">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
