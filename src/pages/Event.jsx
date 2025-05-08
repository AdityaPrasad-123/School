import React from 'react'
import { motion } from 'framer-motion'
import school2 from '../assets/Images/school2.jpg'
import school3 from '../assets/Images/school3.jpg'
import school4 from '../assets/Images/school4.jpg'
import school6 from '../assets/Images/school6.jpg'
import image from '../assets/Images/image.png'

const Event = () => {

   const teachers = [
    {
    img:school2,
    description:"sarswatipuja1"
   },
   {
    img:school3,
    description:"sarswatipuja2"
   },
   {
    img:school4,
    description:"sarswatipuja3"
   },
   {
    img:school6,
    description:"sarswatipuja4"
   },
   {
    img:image,
    description:"sarswatipuj5"
   },
    ];

  return (
    <div>
      
      <h1 className='text-4xl font-medium text-center mt-5 text-white'>Events</h1><br/><br/>

    <div className="w-full overflow-hidden">
      <motion.div
        className="flex w-max"
        animate={{ x: ['0%', '-60%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        {[...teachers, ...teachers].map((data, index) => (
          <div key={index} className="w-[450px] h-[550px] flex-shrink-0 mx-2 ">
            <img
              src={data.img}
              alt={`carousel-img-${index}`}
              className="w-[450px] h-[500px] object-fill rounded-xl p-1 border-1 hover:border-black hover:border-4 bg-amber-200"
            />
            <p className='text-center text-white text-2xl'>{data.description}</p>
          </div>
        ))}
      </motion.div>
    </div><br/>
    
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex w-max"
        animate={{ x: ['0%', '-60%'] }}
        transition={{ duration: 20, repeat: 6, ease: 'linear' }}
      >
        {[...teachers, ...teachers].map((data, index) => (
          <div key={index} className="w-[450px] h-[550px] flex-shrink-0 mx-2">
            <img
              src={data.img}
              alt={`carousel-img-${index}`}
              className="w-[450px] h-[500px] object-fill rounded-xl p-1 border-1 hover:border-black hover:border-4 bg-amber-200"
            />
            <p className='text-center text-white text-2xl'>{data.description}</p>
          </div>
        ))}
      </motion.div>
    </div>

    </div>
  )
}

export default Event