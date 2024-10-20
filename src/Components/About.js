import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import aboutImage from "../Assets/Photo 1.png"; // Update this path with your image path

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById("about");

    // Intersection Observer callback
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger the animation
        } else {
          setIsVisible(false); // Reset when out of view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section); // Clean up observer
    };
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-gradient-to-b from-green-900 to-black text-white py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Image Section */}
          <motion.div
            className="md:w-1/2 flex justify-center mb-8 md:mb-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}>
            <img
              src={aboutImage}
              alt="About Me"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-yellow-500 shadow-xl object-cover transition-transform duration-300 hover:scale-110"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="md:w-1/2 md:pl-12"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.4 }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400">
              About Me
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
              Hello! I'm{" "}
              <span className="font-semibold text-yellow-500">
                Rahul Prajapati
              </span>
              , a Full Stack Developer passionate about crafting seamless web
              applications. I specialize in using technologies like JavaScript,
              React, and Node.js to deliver interactive, responsive experiences.
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
              I love exploring new technologies, contributing to open-source
              projects, and continuously enhancing my skills. I aspire to build
              impactful solutions that solve real-world challenges, whether in
              technology or in supporting communities like farmers.
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Like a farmer cultivating crops, I nurture ideas and transform
              them into powerful applications. Explore my work and let's create
              innovative solutions together.
            </p>
            {/* Call to Action Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-full shadow-lg hover:bg-yellow-400 transition-all duration-300">
              Let's Collaborate
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
