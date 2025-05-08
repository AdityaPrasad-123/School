import React from 'react'
import {student} from './data';
import { Link } from 'react-router-dom'



const Student = () => {
  return (
    <div className='w-full min-h-auto py-2'>
       <h1 className='text-4xl font-medium text-center mt-5 text-white'>Our students</h1><br/>
    <div className='mt-5 grid sm:grid-cols-4 grid-cols-1 gap-2'>
      {student.map((d,index) => (
    <div key={d.class} className="px-1"> 
      <div className="bg-amber-200 h-[450px] rounded-xl text-black hover:border-black hover:border-4 shadow-xl">
        <div className="h-56 rounded-xl bg-slate-400 bg-opacity-20 flex items-center justify-center ">
          <img src={d.img} alt="" className="w-44 h-44 rounded-full" />
        </div>
        <div className="flex flex-col justify-center items-center gap-4 p-4">
          <p className="text-3xl font-medium">class:{d.class}</p>
          <p className='text-xl font-medium'>Total-Students:{d.totalstudent}</p>
          <p className='text-xl font-medium'>Class-Teacher:{d.classteacher}</p>

         <Link to={`/class${d.class}`}> <button className='bg-white text-black font-semibold text-xl rounded-xl w-32 hover:bg-blue-800'>see students</button></Link>
        </div>
        
      </div>
    </div>
  ))}
    </div>
    </div>
  )
}

export default Student