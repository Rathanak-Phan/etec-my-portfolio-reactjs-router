import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import PageLayout from './components/PageLayout'
import Home from './page/Home'
import Skills from './page/Skills'
import Education from './page/Education'
import Login from './page/Login'
import skills from './data/skills'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public webpage */}
          <Route path='/' element={<PageLayout />}>
            <Route path='/' element={<Home skills={skills}/>} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/education' element={<Education />} />
          </Route>

          {/* Auth */}
          <Route path='/login' element={<Login />} />


          {/* Dashboard */}

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
