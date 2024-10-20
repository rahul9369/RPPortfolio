import React from "react";
import { motion } from "framer-motion";
// Import images from assets folder
import ecommerceImage from "../Assets/Shoping App.png";
import ChatAppImage from "../Assets/Chat App.png";
import blogAppImage from "../Assets/Blogging.png";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Website",
      img: ecommerceImage, // Imported image
    },
    {
      title: "Chat Application",
      img: ChatAppImage, // Imported image
    },
    {
      title: "Blog App",
      img: blogAppImage, // Imported image
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-gray-800 to-black py-12">
      <div className="max-w-7xl mx-auto text-center text-white">
        <motion.h2
          className="text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }} // Slower duration for the title
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.5 }} // Initial state with scale down
              whileInView={{ opacity: 1, scale: 1 }} // Animate scale up when in view
              transition={{ duration: 1 }} // Slower duration for smooth scaling effect
              viewport={{ once: false }} // Reset animation on leave
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg mb-2"
              />
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
