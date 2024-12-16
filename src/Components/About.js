import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import aboutImage from "../Assets/Photo 1.png"; // Ensure this path is correct

const About = () => {
  const [visibleText, setVisibleText] = useState([0, 0, 0]); // Visible text tracking
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const paragraphs = [
    "Hello! I'm Rahul Prajapati, a Full Stack Developer passionate about crafting seamless web applications. I specialize in using technologies like JavaScript, React, and Node.js to deliver interactive, responsive experiences.",
    "I love exploring new technologies, contributing to open-source projects, and continuously enhancing my skills. I aspire to build impactful solutions that solve real-world challenges, whether in technology or in supporting communities like farmers.",
    "Like a farmer cultivating crops, I nurture ideas and transform them into powerful applications. Explore my work and let's create innovative solutions together.",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about");
      if (section) {
        const { top } = section.getBoundingClientRect();
        const scrollPosition = window.innerHeight - top;

        setVisibleText(
          paragraphs.map((para, index) => {
            const revealThreshold = 200 * (index + 1);
            return Math.min(
              Math.floor((scrollPosition / revealThreshold) * para.length),
              para.length
            );
          })
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center bg-gradient-to-br from-[#38b2ac] via-[#1e3a8a] to-[#2e4067] text-white py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Image Section */}
          <motion.div
            className="flex justify-center mb-8 md:mb-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeInOut" }}>
            <img
              src={aboutImage}
              alt="About Me"
              className="w-64 h-64 md:w-80 md:h-80 object-cover shadow-xl rounded-lg border-4 animate-move-border" // Tailwind border and animation
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="md:w-1/2 md:pl-12"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#38b2ac]">
              About Me
            </h2>

            {/* Paragraphs with scroll-triggered typing effect */}
            {paragraphs.map((text, index) => (
              <p
                key={index}
                className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
                {text.slice(0, visibleText[index])}
                <span className="opacity-50 animate-pulse">|</span>
              </p>
            ))}

            {/* Call to Action Button */}
            <motion.button
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-[#10b981] to-[#38b2ac] text-black font-bold rounded-full shadow-lg hover:from-[#34d399] hover:to-[#4fd1c5] transition-all duration-300">
              Let's Collaborate
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
