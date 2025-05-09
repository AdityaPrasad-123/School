import React from 'react'
import main1 from '../assets/Images/main1.jpg'

const About = () => {
  return (
    <div>
            <h1 className='text-2xl font-medium text-center mt-10 text-white'>About <span className='text-amber-600'>Us</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 px-4 py-6 text-white'>
              <img src={main1} alt='' className='w-full h-auto object-cover rounded-lg' />
              <div className='text-lg overflow-y-auto max-h-[600px]'>
                <p className='text-2xl font-medium text-center py-4'>HIGH QUALITY EDUCATION</p>
                <p className='mb-4'>Dear Guardians and Students, A state school, public school, or government school is a primary or secondary school that educates all students without charge.<br/>
                 They are funded in whole or in part by taxation and operated by the government of the state.<br/>
                  State-funded schools are global with each country showcasing distinct structures and curricula. Government-funded education spans from primary to secondary levels, covering ages 4 to 18.<br/>
                   Alternatives to this system include homeschooling, private schools, charter schools, and other educational options.A state school, public school, or government school is a primary or secondary school that educates all students without charge.<br/>
                 They are funded in whole or in part by taxation and operated by the government of the state.<br/>
                  State-funded schools are global with each country showcasing distinct structures and curricula. Government-funded education spans from primary to secondary levels, covering ages 4 to 18.<br/>
                   Alternatives to this system include homeschooling, private schools, charter schools, and other educational options.A state school, public school, or government school is a primary or secondary school that educates all students without charge.<br/>
                 They are funded in whole or in part by taxation and operated by the government of the state.<br/>
                  State-funded schools are global with each country showcasing distinct structures and curricula. Government-funded education spans from primary to secondary levels, covering ages 4 to 18.<br/>
                   Alternatives to this system include homeschooling, private schools, charter schools, and other educational options.</p>
                <p className='font-medium text-black mt-4'>Shankar Kumar Acharya (Headmaster)</p>
              </div>
            </div>

   </div>
  );
}

export default About