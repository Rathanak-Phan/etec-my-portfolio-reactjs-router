import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import PageLayout from './components/PageLayout'
import Home from './page/Home'
import Skills from './page/Skills'
import Education from './page/Education'
import Login from './page/Login'
import skills from './data/skills'
import DashboardLayout from './components/DashboardLayout'
import Overviews from './page/admin/Overviews'
import ManageSkills from './page/admin/ManageSkills'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public webpage */}
          <Route path='/' element={<PageLayout />}>
            <Route path='/' element={<Home skills={skills}/>} />
            <Route path='/skills' element={<Skills skills={skills}/>} />
            <Route path='/education' element={<Education />} />
          </Route>

          {/* Auth */}
          <Route path='/login' element={<Login />} />


          {/* Dashboard */}
          <Route path='/dashboard' element={<DashboardLayout />} >
            <Route path='/dashboard' element={<Overviews />} />
            <Route path='/dashboard/skills' element={<ManageSkills />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
