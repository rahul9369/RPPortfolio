// import React from "react";
// //import aboutImage from './path-to-your-image.jpg'; // Update this path with your image path

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="min-h-screen flex items-center bg-gradient-to-b from-gray-900 to-black text-white">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row items-center">
//           {/* Image Section */}
//           <div className="md:w-1/2">
//             <img
//               src="data:image/jpeg;base64,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"
//               alt="About Me"
//               className="w-full h-auto rounded-lg shadow-lg mb-6 md:mb-0"
//             />
//           </div>

//           {/* Text Section */}
//           <div className="md:w-1/2 md:pl-8">
//             <h2 className="text-3xl font-extrabold mb-4">About Me</h2>
//             <p className="text-lg mb-4">
//               Hello! I'm Rahul Prajapati, a Full Stack Developer with a passion
//               for building seamless web applications. I love working with
//               JavaScript, React, and Node.js to create dynamic user experiences.
//             </p>
//             <p className="text-lg mb-4">
//               In my free time, I enjoy learning new technologies, contributing
//               to open-source projects, and enhancing my skills. My goal is to
//               create impactful software that solves real-world problems.
//             </p>
//             <p className="text-lg mb-4">
//               Feel free to explore my projects and reach out if you'd like to
//               collaborate or just chat about tech!
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React from "react";
import aboutImage from "../Assets/Photo 1.png"; // Update this path with your image path

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
            <img
              src={aboutImage}
              alt="About Me"
              className="w-48 h-48 rounded-lg shadow-lg object-cover" // Adjust the size here
            />
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-extrabold mb-4">About Me</h2>
            <p className="text-lg mb-4">
              Hello! I'm Rahul Prajapati, a Full Stack Developer with a passion
              for building seamless web applications. I love working with
              JavaScript, React, and Node.js to create dynamic user experiences.
            </p>
            <p className="text-lg mb-4">
              In my free time, I enjoy learning new technologies, contributing
              to open-source projects, and enhancing my skills. My goal is to
              create impactful software that solves real-world problems.
            </p>
            <p className="text-lg mb-4">
              Feel free to explore my projects and reach out if you'd like to
              collaborate or just chat about tech!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
