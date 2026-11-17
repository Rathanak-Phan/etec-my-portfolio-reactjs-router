import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function DashboardLayout() {
  return (
    <div className='flex'>
        {/* Navigation */}
        <div className='w-84 flex flex-col justify-between bg-gray-950 text-gray-50 h-screen'>
            <div>
                <div className='px-5 py-5 text-5xl text-center'>Admin</div>

                <div className='flex flex-col'>
                    <Link to="/dashboard" className='py-4 bg-gray-600 px-5 hover:bg-gray-700'>Overviews</Link>
                    <Link to="/dashboard/skills" className='py-4 bg-gray-600 px-5 hover:bg-gray-700'>Manage Skills</Link>
                </div>
            </div>

            <Link to="/" className='py-4 bg-gray-600 px-5 hover:bg-gray-700'>
                Views Site
            </Link>
        </div>

        {/* Main content */}
        <div className='w-full'>
            <header>
                <h2>{}</h2>
            </header>
            <div className='p-5'>
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default DashboardLayout