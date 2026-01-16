import { useState } from 'react'
import './App.css'

import Portfolio from './Portfolio' // Import the new component
import ProjectSamples from './ProjectSamples'

function App() {
  const [page, setPage] = useState('home');

  return (
    <>
      {page === 'home' ? <Portfolio onViewWork={() => setPage('projects')} /> : <ProjectSamples onBack={() => setPage('home')} />}
    </>
  )
}

export default App
