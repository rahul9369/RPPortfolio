import React from "react";
import { motion } from "framer-motion";
// Import images from assets folder
import ecommerceImage from "../Assets/Shoping App.png";
import chatAppImage from "../Assets/Chat App.png";
import blogAppImage from "../Assets/Blogging.png";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Website",
      img: ecommerceImage,
      description:
        "Developed an e-commerce platform using EJS for dynamic rendering. Integrated secure authentication with Passport.js and created REST APIs for smooth frontend-backend communication. Designed a responsive UI with Bootstrap.",
      liveLink: "https://shopping-app-34yb.onrender.com/",
    },
    {
      title: "Chat Application",
      img: chatAppImage,
      description:
        "Built a real-time group chat application with Socket.IO for seamless communication. Implemented authentication with Passport.js and designed a user-friendly UI using Bootstrap. The backend was built with Express.js for scalability.",
      liveLink: "https://chating-app-gfr3.onrender.com/",
    },
    {
      title: "Blog App",
      img: blogAppImage,
      description:
        "Created a blog application where users can post, edit, and delete blogs. Used React.js for frontend, Node.js and Express.js for backend, and MongoDB for database management. The interface was made responsive with Tailwind CSS.",
      liveLink: "https://your-blog-app-link.com/", // Replace with your live link
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gradient-to-bl from-[#1e3a8a] via-[#2e4067] to-[#1e3a8a] py-16">
      <div className="max-w-7xl mx-auto text-center text-white">
        <motion.h2
          className="text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          My Projects
        </motion.h2>

        {/* Project Layout */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row bg-gray-900 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-xl hover:shadow-teal-500/50 cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}>
              {/* Clickable Image section - 50% width */}
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="md:w-1/2 mb-4 md:mb-0">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </a>

              {/* Clickable Text section - 50% width */}
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="md:w-1/2 md:pl-6">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
