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
  return (
    <div className="App bg-gradient-to-br from-[#1e3a8a] via-[#111827] to-[#1e3a8a] min-h-screen">
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

      <Header />
      <Hero />
      <About />
      <Skill />
      <Project />
      <Experence />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
