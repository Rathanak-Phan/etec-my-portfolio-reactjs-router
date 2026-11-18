import React from 'react'
import { Link } from 'react-router-dom'

function ManageSkills({skills}) {
  return (
    <div className='px-30'>
        <h2 className='text-center text-5xl my-5'>ManageSkills</h2>

        <table className='w-full border-collapse'>
          <thead>
            <tr>
              <th className='border py-2'>N</th>
              <th className='border py-2'>Title</th>
              <th className='border py-2'>Description</th>
              <th className='border py-2'>Logo</th>
              <th className='border py-2'>Action</th>
            </tr>
          </thead>
          <tbody>
            {skills.map((skill) => (
              <tr key={skill.id}>
                <td className='border-b border-gray-400 ps-3 py-2'>{skill.id}</td>  
                <td className='border-b border-gray-400 ps-3 py-2'>{skill.title}</td>  
                <td className='border-b border-gray-400 ps-3 py-2'>{skill.description}</td>  
                <td className='border-b border-gray-400 ps-3 py-2'>
                  <img className='h-10' src={skill.logo} alt="" />
                </td>  
                <td className='border-b border-gray-400 ps-3 py-2'>
                  <Link to={`/dashboard/skills/${skill.id}`}>Views</Link>  
                </td>  
              </tr>
            ))}
          </tbody>
        </table>

        
    </div>
  )
}

export default ManageSkills