import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode); // Use functional update to ensure the previous state is used
  };

  // Apply dark mode styles based on state
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="bg-white text-gray-900 p-4 fixed top-0 w-full z-50 shadow-md">
      <nav className="flex flex-end justify-between items-center max-w-7xl mx-auto">
        {/* Colorful Text Logo */}
        <div className="text-2xl font-bold flex items-center rounded-full bg-white p-2">
          {/* <span className="text-red-500">R</span>
          <span className="text-yellow-400">P</span> */}
        </div>

        {/* Hamburger icon for mobile view */}
        <button
          className="md:hidden ml-4 text-2xl"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
          {isMobileMenuOpen ? "✖" : "☰"} {/* Toggle icon */}
        </button>

        {/* Navigation links */}
        <ul
          className={`md:flex md:flex-row md:space-x-6 ${
            isMobileMenuOpen ? "flex" : "hidden"
          } absolute md:static bg-gray-800 md:bg-transparent top-16 left-0 w-full md:w-auto p-4 md:p-0 space-y-4 md:space-y-0`}>
          <li>
            <button onClick={toggleDarkMode} className="ml-4 p-2">
              {darkMode ? (
                <FaSun className="text-yellow-500" />
              ) : (
                <FaMoon className="text-gray-400" />
              )}
            </button>
          </li>
          <li>
            <a href="#hero" className="hover:text-yellow-500 p-2 block">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-yellow-500 p-2 block">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-yellow-500 p-2 block">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-yellow-500 p-2 block">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-500 p-2 block">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
