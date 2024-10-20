import React from "react";
import { IoMdDownload } from "react-icons/io";
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
      className="relative min-h-screen flex items-center justify-center text-white bg-black">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to darken the video */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Content */}
      <div className="relative text-center z-10 w-full px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Hi, I'm Rahul Prajapati
        </h1>
        <p className="text-xl md:text-2xl mb-6">
          Full Stack Developer | React Enthusiast
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-wrap justify-center mb-4">
          <a
            href="#projects"
            className="w-fit m-2 flex items-center justify-center mt-4 bg-yellow-500 px-6 py-3 rounded-lg text-white hover:bg-yellow-600 transition-transform transform hover:scale-105 z-10">
            View My Work
          </a>

          {/* Resume download button */}
          <a
            href="./Resume_1.pdf"
            download="Rahul_Prajapati_Resume.pdf"
            className="w-fit m-2 flex items-center justify-center mt-4 bg-blue-500 px-6 py-3 rounded-lg text-white hover:bg-blue-600 transition-transform transform hover:scale-105 z-10">
            <IoMdDownload className="mr-2" />
            Download Resume
          </a>
        </div>
      </div>

      {/* Social Media Icons on the Right */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-10">
        <a
          href="https://www.linkedin.com/in/your-linkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-500 transition-colors">
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/your-github"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-500 transition-colors">
          <FaGithub size={30} />
        </a>
        <a
          href="https://twitter.com/your-twitter"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-500 transition-colors">
          <FaTwitter size={30} />
        </a>
        <a
          href="https://www.facebook.com/your-facebook"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-500 transition-colors">
          <FaFacebook size={30} />
        </a>
        <a
          href="https://www.instagram.com/your-instagram"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-500 transition-colors">
          <FaInstagram size={30} />
        </a>
        <a
          href="https://www.youtube.com/channel/your-youtube"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-500 transition-colors">
          <FaYoutube size={30} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
