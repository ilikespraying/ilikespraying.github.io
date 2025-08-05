import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import projectsData from '../content/projects.json';

const projects = projectsData.projects;

function ProjectCard({ project }) {
  return (
    <motion.a 
      whileHover={{ scale: 1.05 }}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-gray-800 text-white rounded-3xl shadow-xl overflow-hidden p-6 cursor-pointer max-w-md mx-auto min-h-[350px]"
    >
      {project.image && (
        <img src={project.image} alt={project.title} className="rounded-2xl mb-6 w-full h-48 object-cover" />
      )}
      <h3 className="text-2xl font-extrabold mb-3">{project.title}</h3>
      <p className="text-gray-300 mb-4 text-lg">{project.description}</p>
      <div className="flex flex-wrap gap-3 mb-4">
        {project.tech.map((t, i) => (
          <span key={i} className="bg-gray-700 text-base px-4 py-2 rounded-full">
            {t}
          </span>
        ))}
      </div>
    </motion.a>
  );
}

function Navbar({ currentPage, setCurrentPage, darkMode, toggleDarkMode }) {
  const pages = ["About Me", "Projects", "Contact"];
  return (
    <nav className={`flex items-center justify-center gap-8 py-8 shadow-lg mb-8 relative ${darkMode ? 'bg-gray-900' : 'bg-gray-200'}`}>
      <div className="flex gap-8">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-8 py-4 rounded-2xl text-xl font-semibold transition-colors duration-300 ${
              currentPage === page
                ? (darkMode ? 'bg-blue-500 text-white' : 'bg-blue-600 text-white')
                : (darkMode ? 'bg-gray-700 text-gray-300 hover:bg-blue-400 hover:text-white' : 'bg-gray-300 text-gray-800 hover:bg-blue-500 hover:text-white')
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={toggleDarkMode}
        className={`absolute right-8 px-6 py-4 rounded-2xl text-xl font-semibold ${darkMode ? 'bg-yellow-400 text-black' : 'bg-gray-800 text-white'} transition-colors duration-300`}
      >
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </nav>
  );
}

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState("Projects");
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className={`${darkMode ? 'bg-gray-950 text-white' : 'bg-gray-100 text-black'} min-h-screen`}>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {currentPage === "About Me" && (
        <div className="p-12 text-center max-w-4xl mx-auto">
          <h1 className="text-6xl font-extrabold mb-6">About Me</h1>
          <p className={`${darkMode ? 'text-gray-300 text-xl' : 'text-gray-700 text-xl'}`}>
            Hello, I'm <span className="font-bold">Alex</span>, an 18-year-old developer currently studying in SCI, in the 3rd grade of high school.
            <br /><br />
            I know HTML, CSS, JavaScript, C++, Python. I've worked with React, TailwindCSS, and Vite — like this portfolio!
          </p>
        </div>
      )}

      {currentPage === "Projects" && (
        <div className="p-8">
          <header className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-2">My Projects</h1>
            <p className={`${darkMode ? 'text-gray-400 text-lg' : 'text-gray-600 text-lg'}`}>Showcasing my work</p>
          </header>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </div>
      )}

      {currentPage === "Contact" && (
        <div className="p-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact</h1>
          <p className={`${darkMode ? 'text-gray-300 text-2xl' : 'text-gray-700 text-2xl'}`}>
            Email: 2alex06072gazeta.pl
          </p>
          <p className={`${darkMode ? 'text-gray-300 text-2xl' : 'text-gray-700 text-2xl'}`}>
            Phone: +48 603 720 939
          </p>
        </div>
      )}
    </div>
  );
}
