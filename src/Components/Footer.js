import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa"; // Import additional icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Navigation Links */}
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

        {/* Social Media Icons */}
        <div className="flex justify-center mb-4">
          <a
            href="https://www.linkedin.com/in/rahul-prajapati-164641228"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 hover:text-yellow-500 transition-colors">
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/rahul9369"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 hover:text-yellow-500 transition-colors">
            <FaGithub size={24} />
          </a>

          <a
            href="https://x.com/RahulPraja40352"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 hover:text-yellow-500 transition-colors">
            <FaTwitter size={24} />
          </a>
          <a
            href="https://m.facebook.com/profile.php?id=100042183406787"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 hover:text-yellow-500 transition-colors">
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.instagram.com/_rahul_prajapati_1409/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 hover:text-yellow-500 transition-colors">
            <FaInstagram size={24} />
          </a>
          <a
            href="https://youtube.com/@rahulprajapati9083?si=Nn9e6aGT39WPHD3u"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 hover:text-yellow-500 transition-colors">
            <FaYoutube size={24} />
          </a>
        </div>

        {/* Copyright Notice */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Rahul Prajapati. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
