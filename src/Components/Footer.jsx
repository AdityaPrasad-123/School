import React from 'react'

const Footer = () => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-4 text-white h-auto justify-between w-full sm:h-20 bg-slate-900 py-5 px-2'>
        <h1 className='px-5'>@copyright</h1>
        <h1>facebook:<a className='hover:text-amber-500' href='https://www.facebook.com/aditya.kumar.yadav.198878'>click to go</a></h1>
        <h1>Linkedin:<a className='hover:text-amber-500' href='https://www.linkedin.com/in/aditya-prasad-yadav-58ba60246/'>click to go</a></h1>
        <h1>github:<a className='hover:text-amber-500' href='https://github.com/AdityaPrasad-123'>click to go</a></h1>
    </div>
  )
}

export default Footer