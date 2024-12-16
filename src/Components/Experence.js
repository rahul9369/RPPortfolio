import React from "react";

// Default logo (replace with actual image if needed)
import defaultLogo from "../Assets/Blogging.png"; // Add path to your default logo

// Experience data with logos
const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "Claw Legaltech Private Limited",
    duration: "Dec 2024 - Present",
    description:
      "Developed responsive web interfaces using React.js and Tailwind CSS. Enhanced state management with Redux.js and implemented interactive features using JavaScript.",
    logo: "../Assets/claw.png", // Specific logo or use default
  },
  {
    role: "Frontend Developer Intern",
    company: "Khanadotcom",
    duration: "June 2024 - Oct 2024",
    description:
      "Built dynamic web interfaces using React.js and JavaScript. Collaborated in an Agile environment to deliver user-friendly web solutions on time.",
    logo: "../Assets/khana.png", // Specific logo or use default
  },
  {
    role: "Machine Learning Enthusiast",
    company: "NPTEL (IIT Kanpur)",
    duration: "Completed in 2023",
    description:
      "Completed an advanced course on Machine Learning under the guidance of IIT Kanpur. Learned essential concepts including supervised learning, neural networks, and real-world applications.",
    logo: null, // No logo, will use default
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 bg-gradient-to-br from-[#1e3a8a] via-[#2e4067] to-[#1e3a8a]">
      <div className="max-w-7xl mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-12">Experience</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-900 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/50 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              {/* Logo Section */}
              <img
                src={exp.logo || defaultLogo} // Use default logo if no logo is provided
                alt={`${exp.company} Logo`}
                className="w-16 h-16 object-contain rounded-lg bg-white p-2 shadow-md mb-4"
              />
              {/* Details Section */}
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-teal-400 mb-2">
                  {exp.role}
                </h3>
                <p className="text-sm text-gray-400 mb-4">
                  {exp.company} • {exp.duration}
                </p>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
