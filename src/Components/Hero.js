import React from "react";
import { IoMdDownload } from "react-icons/io";
import Img from "../Assets/pexels-francesco-ungaro-2325447.jpg";

// Hero component
const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-white bg-gradient-to-b from-gray-900 to-black"
      style={{
        backgroundImage: <Img />,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }} // Set background image
    >
      {/* Content */}
      <div className="relative text-center w-full">
        <h1 className="text-5xl font-extrabold mb-4 z-10">
          Hi, I'm Rahul Prajapati
        </h1>
        <p className="text-xl  z-10">Full Stack Developer | React Enthusiast</p>
        <div className="flex justify-center">
          <a
            href="#projects"
            className="w-fit m-2 items-center flex justify-center mt-4 bg-yellow-500 px-6 py-3 rounded-lg text-white hover:bg-yellow-600 z-10">
            View My Work
          </a>
          <br />
          {/* Resume download button */}
          <a
            href="./Resume_1.pdf"
            download="Rahul_Prajapati_Resume.pdf"
            className="w-fit items-center m-2 flex justify-center mt-4 bg-blue-500 px-6 py-3 rounded-lg text-white hover:bg-blue-600 z-10">
            <IoMdDownload />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
