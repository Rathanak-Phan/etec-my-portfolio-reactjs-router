import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function PageLayout() {
  return (
    <div>
        <header className='w-full bg-gray-100 flex items-center justify-center'>
            <Navbar />
        </header>

        <main className='w-full flex items-center justify-center'>
            <Outlet />
        </main>
    </div>
  )
}

export default PageLayout