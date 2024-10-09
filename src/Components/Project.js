// Projects.js
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
      title: "Chating Application",
      img: ChatAppImage, // Imported image
    },
    {
      title: "Blog App",
      img: blogAppImage, // Imported image
    },
  ];

  // Framer Motion settings
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2,
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-gray-800 to-black py-12">
      <div className="max-w-7xl mx-auto text-center text-white">
        <motion.h2
          className="text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          Projects
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg mb-2"
              />
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
