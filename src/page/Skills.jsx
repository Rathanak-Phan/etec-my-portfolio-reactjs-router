import React from 'react'

function Skills({skills}) {
  return (
    <div className='w-full pt-10'>
      <div className='flex flex-nowrap overflow-x-auto gap-3 [&::-webkit-scrollbar]:hidden'>
        {skills.map((skill) => (
          <div key={skill.id} className='w-64 p-5 shrink-0 rounded-md bg-gray-400'>
            <div className='flex items-center gap-5'>
              <img className='w-18' src={skill.logo} alt="" />
              <p className='text-3xl font-bold'>{skill.title}</p>
            </div>
            <div className='p-3'>{skill.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills