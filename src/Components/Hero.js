import React from "react";
import { IoMdDownload } from "react-icons/io";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

// Import the video directly
import videoSrc from "../Assets/vecteezy_circuit-data-neural-network-ai-technology-cloud-computing_8800860.mp4";

// Hero component
const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/90 via-[#111827]/90 to-[#1e3a8a]/90"></div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center">
          {/* Animated Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
              Hi, I'm Rahul Prajapati
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Full Stack Developer | React Enthusiast
            </p>
          </motion.div>

          {/* Call-to-Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-yellow-500 rounded-lg text-black font-semibold hover:bg-yellow-600 transition-colors duration-300 shadow-lg hover:shadow-yellow-500/50">
              View My Work
            </motion.a>

            <motion.a
              href="./Resume_1.pdf"
              download="Rahul_Prajapati_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-blue-500 rounded-lg text-white font-semibold hover:bg-blue-600 transition-colors duration-300 shadow-lg hover:shadow-blue-500/50 flex items-center gap-2">
              <IoMdDownload className="text-xl" />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social Media Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex gap-6">
            {[
              { icon: FaLinkedin, url: "https://www.linkedin.com/in/rahul-prajapati-164641228" },
              { icon: FaGithub, url: "https://github.com/rahul9369" },
              { icon: FaTwitter, url: "https://x.com/RahulPraja40352" },
              { icon: FaFacebook, url: "https://m.facebook.com/profile.php?id=100042183406787" },
              { icon: FaInstagram, url: "https://www.instagram.com/_rahul_prajapati_1409/" },
              { icon: FaYoutube, url: "https://youtube.com/@rahulprajapati9083?si=Nn9e6aGT39WPHD3u" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-yellow-500 transition-colors duration-300">
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
