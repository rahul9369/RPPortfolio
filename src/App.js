import React, { useEffect } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skill from "./Components/Skill";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Experence from "./Components/Experence";
import { Helmet } from "react-helmet";

function App() {
  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
      document.documentElement.classList.add('light-mode');
    }

    // Add viewport meta tag for proper mobile scaling
    const meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
    document.head.appendChild(meta);

    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <div className="App min-h-screen transition-colors duration-300 
      dark:bg-gradient-to-br dark:from-[#1e3a8a] dark:via-[#111827] dark:to-[#1e3a8a] 
      light:bg-gradient-to-br light:from-gray-100 light:via-white light:to-gray-100
      dark:text-white light:text-gray-900
      overflow-x-hidden">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Rahul Prajapati - Portfolio</title>
        <meta name="title" content="Rahul Prajapati - Portfolio" />
        <meta
          name="description"
          content="Welcome to my portfolio! I'm a passionate web developer specializing in React.js, Tailwind CSS, and more. Check out my projects and resume."
        />
        <meta
          name="keywords"
          content="Rahul Prajapati, web developer, React.js developer, Tailwind CSS, JavaScript, portfolio, frontend developer, full stack developer, projects, resume"
        />
        <meta name="author" content="Rahul Prajapati" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://rahulprajapati25.netlify.app/"
        />
        <meta property="og:title" content="Rahul Prajapati - Portfolio" />
        <meta
          property="og:description"
          content="Welcome to my portfolio! I'm a passionate web developer specializing in React.js, Tailwind CSS, and more. Check out my projects and resume."
        />
        <meta
          property="og:image"
          content="https://rahulprajapati25.netlify.app/Logo.jpg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://rahulprajapati25.netlify.app/"
        />
        <meta property="twitter:title" content="Rahul Prajapati - Portfolio" />
        <meta
          property="twitter:description"
          content="Welcome to my portfolio! I'm a passionate web developer specializing in React.js, Tailwind CSS, and more. Check out my projects and resume."
        />
        <meta
          property="twitter:image"
          content="https://rahulprajapati25.netlify.app/Logo.jpg"
        />
      </Helmet>

      <div className="max-w-[2000px] mx-auto">
        <Header />
        <main className="relative">
          <Hero />
          <About />
          <Skill />
          <Project />
          <Experence />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
