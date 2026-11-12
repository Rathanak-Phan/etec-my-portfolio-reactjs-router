import React from 'react'
import Skills from './Skills'

function Home({skills}) {
  return (
    <div className='w-7xl'>
      <section className='mt-20'>
        {/* profile */}
        <div className='w-36 h-36 rounded-full overflow-hidden'>
          <img className='w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQixvfIA_R9p0MiNh9yxbyTuqNfwBfLvcqLTJYhhZCujweSN0GxnaeHfnaQ&s=10" alt="" />
        </div>

        {/* Title(name) */}
        <h2 className='text-5xl mt-10 mb-5 font-bold'>Hi, I'm Sivmeng ...</h2>
        <p className='text-xl'>A dedicate Web Developer with experience more years</p>
      </section>

      <section className='mt-30'>
        <h2 className='text-4xl'>My skills</h2>

        <Skills skills={skills}/>
      </section>
    </div>
  )
}

export default Home