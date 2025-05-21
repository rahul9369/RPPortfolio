import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCode, FaLaptopCode, FaBrain } from "react-icons/fa";

// Default logo (replace with actual image if needed)
import defaultLogo from "../Assets/Blogging.png";

// Experience data with logos and icons
const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "Claw Legaltech Private Limited",
    duration: "Dec 2024 - Present",
    location: "Remote",
    description: [
      "Developed responsive web interfaces using React.js and Tailwind CSS",
      "Enhanced state management with Redux.js",
      "Implemented interactive features using JavaScript",
      "Collaborated with the team to deliver high-quality solutions"
    ],
    logo: "https://www.clawlaw.in/static/media/clawlogo.a04ba20f4a21dccddff1.png",
    icon: <FaCode className="text-4xl text-yellow-500" />,
    color: "from-blue-500 to-cyan-500"
  },
  {
    role: "Frontend Developer Intern",
    company: "Khanadotcom",
    duration: "June 2024 - Oct 2024",
    location: "Remote",
    description: [
      "Built dynamic web interfaces using React.js and JavaScript",
      "Collaborated in an Agile environment",
      "Delivered user-friendly web solutions on time",
      "Implemented responsive designs for various screen sizes"
    ],
    logo: "https://media.licdn.com/dms/image/v2/D560BAQE7cmCvDwL-FQ/img-crop_100/img-crop_100/0/1716120440984?e=1745452800&v=beta&t=0qYAMjnc6npR5v4EmI0jlhTLUD1AoJe3kka9-RSKOos",
    icon: <FaLaptopCode className="text-4xl text-yellow-500" />,
    color: "from-purple-500 to-pink-500"
  },
  {
    role: "Machine Learning Enthusiast",
    company: "NPTEL (IIT Madras)",
    duration: "Completed in 2024",
    location: "Online",
    description: [
      "Completed an advanced course on Machine Learning",
      "Learned essential concepts including supervised learning",
      "Studied neural networks and real-world applications",
      "Implemented various ML algorithms and models"
    ],
    logo: null,
    icon: <FaBrain className="text-4xl text-yellow-500" />,
    color: "from-green-500 to-emerald-500"
  },
];

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  return (
    <section
      id="experience"
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
            Professional Journey
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A timeline of my professional experience and achievements in the tech industry
          </p>
        </motion.div>

        {/* Experience Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group">
              {/* Experience Card */}
              <div className="h-full bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-500/20">
                {/* Card Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${exp.color} p-2 flex items-center justify-center`}>
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-gray-300">{exp.company}</p>
                  </div>
                </div>

                {/* Timeline Info */}
                <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-6">
                  <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full">
                    <FaCalendarAlt className="text-yellow-500" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full">
                    <FaMapMarkerAlt className="text-yellow-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-3">
                  {exp.description.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.2 * idx }}
                      className="flex items-start gap-3 text-gray-300 bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors">
                      <span className="text-yellow-500 mt-1">•</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>

                {/* Company Logo */}
                {exp.logo && (
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <img
                      src={exp.logo}
                      alt={`${exp.company} Logo`}
                      className="h-8 object-contain opacity-50 hover:opacity-100 transition-opacity"
                    />
                  </div>
                )}
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
            Always open to new opportunities and challenges
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold rounded-lg shadow-lg hover:shadow-yellow-500/50 transition-all duration-300">
            Let's Connect
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
