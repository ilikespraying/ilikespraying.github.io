import { useState, useEffect } from 'react'
import './App.css'

function SpeciesPage({ onBack }) {
  return (
    <div>
        <button onClick={() => onBack()} className="list" style={{ marginRight: '1em' }}>
          BACK TO MAIN PAGE
        </button>
      <h1>Species page</h1>
      <a href="#" className="list">Fish</a>
      <a href="#" className="list">Birds</a>
      <a href="#" className="list">Mammals</a>
      <div className="main">
        <p>Here you can find information about various species found in Spain.</p>
        <p>Explore the different sections to learn more about the flora and fauna of this beautiful country.</p>
      </div>
    </div>
  )
}

function App() {
  // Detect system preference on first load
  const getInitialMode = () => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  }

  const [darkMode, setDarkMode] = useState(getInitialMode)
  const [showSpecies, setShowSpecies] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [darkMode])

  const handleToggle = () => setDarkMode((prev) => !prev)

  if (showSpecies) {
    return (
      <div className={darkMode ? 'dark-mode' : ''}>
        <div className="dark-mode-toggle" style={{ textAlign: 'right', margin: '1em' }}>
          <label>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={handleToggle}
            />
            Toggle Dark Mode
          </label>
        </div>
        <SpeciesPage onBack={() => setShowSpecies(false)} />
      </div>
    )
  }

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <div className="dark-mode-toggle" style={{ textAlign: 'right', margin: '1em' }}>
        <label>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={handleToggle}
          />
          Toggle Dark Mode
        </label>
      </div>
      <div>
        <button onClick={() => setShowSpecies(true)} className="list" style={{ marginRight: '1em' }}>
          SPECIES PAGE
        </button>
        <h1>Naturalpark website</h1>
        <a href="#" className="list">Map</a>
        <a href="#" className="list">Contacts</a>
        <a href="#" className="list">Opening hours</a>
      </div>
      <div className="main">
        <p>Welcome to the Naturalpark website. Here you can find information about various species found in Spain.</p>
        <p>Explore the different sections to learn more about the flora and fauna of this beautiful country.</p>
      </div>
      <div className="image-container">
        <img src="species/images/giraffes.avif" className="image" alt="Giraffes" />
        <img src="species/images/elephants.jpg" className="image" alt="Elephants" />
      </div>
    </div>
  )
}

export default App
