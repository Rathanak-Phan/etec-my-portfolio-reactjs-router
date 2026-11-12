import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-7xl h-18 mt-2 bg-gray-900 rounded-full text-gray-100 flex justify-between items-center ps-10 pe-2'>
        <Link to="/">Your name</Link>

        <nav>
            <ul className='flex items-center gap-10'>
                <Link to="/">Home</Link>
                <Link to="/skills">Skills</Link>
                <Link to='/education'>Education</Link>
                <Link>Expirence</Link>
                <Link>Contact me</Link>
            </ul>
        </nav>

        <Link to="/login" className='px-10 py-4 rounded-full bg-amber-300 text-gray-50'>Get start</Link>
    </div>
  )
}

export default Navbar