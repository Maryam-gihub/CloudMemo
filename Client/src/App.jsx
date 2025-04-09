import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from '../pages/LandingPage'
import Navbar from '../components/Navbar'
import Profile from '../pages/Profile'
import Folder from '../pages/Folder'
import Remainder from '../pages/Reminder'
import Settings from '../pages/Settings'
import Trash from '../pages/Trash'
import Archived from '../pages/Archived'



function App() {

  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/first_nav' element={<Navbar />} />
      <Route path='/about' element={<Profile />} />
      <Route path='/folder' element={<Folder />} />
      <Route path='/remain' element={<Remainder />} />
      <Route path='/trash' element={<Trash />} />
      <Route path='/set' element={<Settings />} />
      <Route path='/archive' element={<Archived />} />
    </Routes>
  )
}

export default App
