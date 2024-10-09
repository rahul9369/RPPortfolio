// Footer.js
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-4">
          <a href="#hero" className="hover:text-yellow-500 mx-3">
            Home
          </a>
          <a href="#skills" className="hover:text-yellow-500 mx-3">
            Skills
          </a>
          <a href="#projects" className="hover:text-yellow-500 mx-3">
            Projects
          </a>
          <a href="#about" className="hover:text-yellow-500 mx-3">
            About
          </a>
        </div>
        <div className="flex justify-center mb-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 hover:text-yellow-500">
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 hover:text-yellow-500">
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 hover:text-yellow-500">
            <FaTwitter size={24} />
          </a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Rahul Prajapati. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
