import React from 'react'
import main1 from '../assets/Images/main1.jpg'

const About = () => {
  return (
    <div>

   <h1 className='text-4xl font-medium text-center mt-5 text-white'>About<span className='text-amber-600'>Us</span></h1><br/><br/>
   <div className='flex space-x-2 text-white'>
         <img src={main1} alt='' className='w-[600px] h-[500px] pl-5' />
   
         <h1 className='w-full h-[300px]  text-2xl  mx-5 text-justify '>
           <p className='text-4xl text-center font-medium'>HIGH QUALITY EDUCATION</p><br/>
           Dear Guardians, Parents, and Students,<br/>
   
             I would like to express my heartfelt thanks for your cooperation, confidence and consideration for this institution, Shree Nepal Rastriya Secondary School, established in the year 2014 B.S. The Institute has been giving consistent importance to the quality professional education to meet the needs and expectation of the individuals and the nation, conducting PG to 10 and +2 (Science, Commerce, Education, Arts).
   
             Shree Nepal Rastriya Secondary School would not have been so successful to establish its milestone, had there not been a wholehearted contribution from the side of the teachers, students, a parent concerned and well-wishers. The credit goes to everyone. I request potential students to think of the challenges that are most likely to face in the future before making a choice regarding the programs of study. I also sincerely invite conscious parents and guardians to learn about the opportunities offered by the college for a rewarding future of your children’s career. I warmly welcome you all at S.N.R.S.S.
   
             <br/><span className='font-medium'>Shankar Kumar Acharya (Headmaster)</span> 
        </h1>
       </div>

  </div> 
  );
}

export default About