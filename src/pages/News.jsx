import React from 'react'
import { Link } from "react-router-dom";

import { news } from './data'

const News = () => {
  return (
    <div className='h-auto w-full'>
  <h1 className='text-2xl font-medium text-center mt-5 text-white'>News</h1>

  <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 p-4'>
    {news.map((value, index) => (
      <div key={index} className='bg-amber-200 rounded-lg overflow-hidden shadow-md text-center' >
        <Link to ='/target-page' state={{ img: value.img, description: value.description }}>
        <img src={value.img} alt='' className='w-full h-80 object-cover' />
        </Link>
        <div className='p-4 text-black'>
          <p className=' text-2xl'>{value.description}</p>
          <p className='text-sm'>latest</p>
          <p className='text-sm'>News</p>
        </div>
        
      </div>
    ))}
  </div>
</div>

  )
}

export default News