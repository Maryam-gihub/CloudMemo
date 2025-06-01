import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import Settings from './pages/Settings'
import Trash from './pages/Trash'
import Archived from './pages/Archived'
import Note from './pages/Note'
import Reminder from './pages/Reminder'
import Layout from './components/Layout'




function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(reg => {
          console.log(`SW registered: ${reg}`);
          console.log(reg);
        })
        .catch(regError => {
          console.log(`SW registration failed: ${regError}`);
          console.log(regError);
        })
    }
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<LandingPage />}/>
        <Route path='/remind' element={<Reminder/>}/>
        <Route path="/trash" element={<Trash />} />
        <Route path="/set" element={<Settings />} />
        <Route path="/archive" element={<Archived />} />
        <Route path="/note" element={<Note />} />
      </Route>
    </Routes>
  )
}

export default App
