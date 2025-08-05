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

function TimelineItem({ year, title, description }) {
  return (
    <div className="relative pl-8 sm:pl-16 mb-10">
      <div className="absolute left-2 top-1.5 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900"></div>
      <h3 className="text-xl font-bold mb-1">{year} - {title}</h3>
      <p className="text-lg text-gray-400">{description}</p>
    </div>
  );
}

function Timeline() {
  const timelineItems = [
    { year: '2020', title: 'Started Programming', description: 'Began programming in C++ and Python.' },
    { year: '2021', title: 'Learning more programming', description: 'Started learning JS, Html, css and PHP.' },
    { year: '2022', title: 'I got in to SCI high school', description: 'Started learning in SCI one of the best Polish IT high schools.' },
    { year: '2023', title: 'Finished first practices', description: 'Go two certificates for it. Graduated first grade with honors.' },
    { year: '2024', title: 'Learning some hardware stuff', description: 'Graduating 2 grade with honors.' },
    { year: '2025', title: 'Exams for future job and Erasmus', description: 'Passed first major exam easily, managed to secure a spot in Erasmus trip to Valencia where we learned React and Express. Graduated 3 grade with honors'}
  ];

  return (
    <div className="mt-12">
      <h2 className="text-4xl font-bold mb-8 text-center">Timeline</h2>
      <div className="border-l-4 border-blue-500 ml-4 text-left">
        {timelineItems.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

function TechStack() {
  const [showTech, setShowTech] = useState(false);
  const techs = [
    { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'TailwindCSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
    { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  ];

  return (
    <div className="mt-12 text-center">
      <button
        onClick={() => setShowTech(!showTech)}
        className="px-6 py-3 bg-blue-600 text-white text-lg rounded-2xl shadow-md hover:bg-blue-700 transition"
      >
        {showTech ? 'Hide Technologies' : 'Show Technologies I Know'}
      </button>
      {showTech && (
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {techs.map((tech, index) => (
            <div key={index} className="flex flex-col items-center w-24">
              <img src={tech.logo} alt={tech.name} className="h-16 mb-2" />
              <p className="text-sm font-medium">{tech.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
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
          <Timeline />
          <TechStack />
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
