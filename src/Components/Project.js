import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaLaptopCode,
  FaStar,
} from "react-icons/fa";

// Import project images
import ecommerceImage from "../Assets/Shoping App.png";
import chatAppImage from "../Assets/Chat App.png";
import blogAppImage from "../Assets/Blogging.png";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const projects = [
    {
      title: "E-commerce Website",
      img: ecommerceImage,
      description:
        "A full-featured e-commerce platform with secure authentication, product management, and payment integration.",
      longDescription:
        "Developed an e-commerce platform using EJS for dynamic rendering. Integrated secure authentication with Passport.js and created REST APIs for smooth frontend-backend communication. Designed a responsive UI with Bootstrap.",
      technologies: ["EJS", "Node.js", "Express", "MongoDB", "Bootstrap"],
      category: "fullstack",
      liveLink: "https://shopping-app-34yb.onrender.com/",
      githubLink: "https://github.com/yourusername/ecommerce",
      features: [
        "User authentication and authorization",
        "Product catalog with search and filters",
        "Shopping cart functionality",
        "Secure payment integration",
        "Admin dashboard for product management",
      ],
      icon: <FaCode className="text-3xl" />,
      highlight: true,
    },
    {
      title: "Chat Application",
      img: chatAppImage,
      description:
        "Real-time chat application with group messaging, user authentication, and message persistence.",
      longDescription:
        "Built a real-time group chat application with Socket.IO for seamless communication. Implemented authentication with Passport.js and designed a user-friendly UI using Bootstrap. The backend was built with Express.js for scalability.",
      technologies: ["Socket.IO", "Express.js", "Passport.js", "Bootstrap"],
      category: "fullstack",
      liveLink: "https://chating-app-gfr3.onrender.com/",
      githubLink: "https://github.com/yourusername/chat-app",
      features: [
        "Real-time messaging",
        "Group chat functionality",
        "User authentication",
        "Message history",
        "Online status indicators",
      ],
      icon: <FaServer className="text-3xl" />,
      highlight: true,
    },
    {
      title: "Blog App",
      img: blogAppImage,
      description:
        "Modern blog platform with content management, user interactions, and responsive design.",
      longDescription:
        "Created a blog application where users can post, edit, and delete blogs. Used React.js for frontend, Node.js and Express.js for backend, and MongoDB for database management. The interface was made responsive with Tailwind CSS.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      category: "fullstack",
      liveLink: "https://your-blog-app-link.com/",
      githubLink: "https://github.com/yourusername/blog-app",
      features: [
        "Blog post creation and editing",
        "User authentication",
        "Comment system",
        "Rich text editor",
        "Responsive design",
      ],
      icon: <FaLaptopCode className="text-3xl" />,
      highlight: false,
    },
  ];

  const filters = [
    { id: "all", label: "All Projects", icon: <FaTools /> },
    { id: "fullstack", label: "Full Stack", icon: <FaCode /> },
    { id: "frontend", label: "Frontend", icon: <FaLaptopCode /> },
    { id: "backend", label: "Backend", icon: <FaServer /> },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen py-16 bg-gradient-to-br from-[#1e3a8a] via-[#111827] to-[#1e3a8a] text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
            Featured Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and technical expertise
          </p>
        </motion.div>

        {/* Project Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center gap-4 mb-8 flex-wrap">
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
                activeFilter === filter.id
                  ? "bg-yellow-500 text-black font-semibold shadow-lg shadow-yellow-500/50"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}>
              {filter.icon}
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
                className={`group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 ${
                  project.highlight ? 'ring-2 ring-yellow-500/50' : ''
                }`}>
                <div className="flex flex-col lg:flex-row">
                  {/* Image Section */}
                  <div className="lg:w-2/5 relative">
                    <div className="relative h-48 lg:h-full overflow-hidden">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="absolute top-3 left-3 w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500 to-yellow-600 p-2 flex items-center justify-center text-black transform -rotate-12 group-hover:rotate-0 transition-transform duration-300">
                      {project.icon}
                    </div>
                    {project.highlight && (
                      <div className="absolute top-3 right-3">
                        <FaStar className="text-yellow-500 text-xl animate-pulse" />
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="lg:w-3/5 p-6">
                    <h3 className="text-xl font-bold mb-2 text-yellow-400 group-hover:text-yellow-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {project.longDescription}
                    </p>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-base font-semibold text-yellow-400 mb-2">
                        Key Features
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
                        {project.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.2 * idx }}
                            className="flex items-start gap-2 text-gray-300 text-sm">
                            <span className="text-yellow-500 mt-1">•</span>
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-white/10 rounded-full text-xs hover:bg-white/20 transition-colors duration-300">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-3">
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 flex items-center gap-2 text-sm">
                        <FaExternalLinkAlt />
                        Live Demo
                      </motion.a>
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors duration-300 flex items-center gap-2 text-sm">
                        <FaGithub />
                        Source Code
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center">
          <p className="text-gray-300 text-lg mb-6">
            Want to see more of my work? Check out my GitHub profile for
            additional projects.
          </p>
          <motion.a
            href="https://github.com/rahul9369"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold rounded-lg shadow-lg hover:shadow-yellow-500/50 transition-all duration-300">
            View More Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
