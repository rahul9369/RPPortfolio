import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import aboutImage from "../Assets/Photo 1.png";

const About = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const paragraphs = [
    {
      text: "Hello! I'm Rahul Prajapati, a Full Stack Developer passionate about crafting seamless web applications. I specialize in using technologies like JavaScript, React, and Node.js to deliver interactive, responsive experiences.",
      icon: "💻",
    },
    {
      text: "I love exploring new technologies, contributing to open-source projects, and continuously enhancing my skills. I aspire to build impactful solutions that solve real-world challenges, whether in technology or in supporting communities like farmers.",
      icon: "🚀",
    },
    {
      text: "Like a farmer cultivating crops, I nurture ideas and transform them into powerful applications. Explore my work and let's create innovative solutions together.",
      icon: "🌱",
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center bg-gradient-to-br from-[#1e3a8a] via-[#111827] to-[#1e3a8a] text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <motion.div
            variants={itemVariants}
            className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-10">
                <img
                  src={aboutImage}
                  alt="Rahul Prajapati"
                  className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-2xl shadow-2xl"
                />
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-yellow-500 to-blue-500 rounded-2xl -z-10 blur-xl opacity-30"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.4, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            variants={itemVariants}
            className="lg:w-1/2 space-y-8">
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
              About Me
            </motion.h2>

            <motion.div variants={containerVariants} className="space-y-6">
              {paragraphs.map((paragraph, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                  <span className="text-2xl">{paragraph.icon}</span>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {paragraph.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Skills Preview */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mt-8">
              {["React", "Node.js", "JavaScript", "MongoDB", "Tailwind CSS"].map(
                (skill, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium hover:bg-white/20 transition-colors duration-300">
                    {skill}
                  </motion.span>
                )
              )}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="mt-8">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold rounded-lg shadow-lg hover:shadow-yellow-500/50 transition-all duration-300">
                Let's Connect
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
