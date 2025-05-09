import React from 'react'
import main1 from '../assets/Images/main1.jpg'

const About = () => {
  return (
    <div>

   <h1 className='text-2xl font-medium text-center mt-5 text-white'>About<span className='text-amber-600'>Us</span></h1><br/>
   <div className='grid sm:grid-cols-2 space-x-2 text-white shadow-4xl h-auto '>
         <img src={main1} alt='' className='sm:h-[500px] h-[300px] pl-5 mt-15 ' />
   
         <div className='h-[400px] sm:h-[650px] text-2xl mx-5 overflow-y-scroll sm:overflow-hidden break-words'>
   
     <p className='text-2xl text-center font-medium py-4 text-white'>HIGH QUALITY EDUCATION</p>
   
     <p className='text-xl font-medium justify-content w-full'>
       Dear Guardians and Students,<br/><br/>
       I would like to express my heartfelt thanks for your cooperation, confidence, and consideration for this institution, Shree Nepal Rastriya Secondary School, established in the year 2014 B.S. The Institute has been giving consistent importance to quality professional education to meet the needs and expectations of individuals and the nation, conducting PG to 10 and +2 (Science, Commerce, Education, Arts).<br/><br/>
       Shree Nepal Rastriya Secondary School would not have been so successful to establish its milestone, had there not been a wholehearted contribution from the teachers, students, parents, and well-wishers. The credit goes to everyone. I request potential students to think of the challenges they are most likely to face in the future before choosing their program of study.<br/><br/>
       I also sincerely invite conscious parents and guardians to learn about the opportunities offered by the college for a rewarding future of your children’s careers. I warmly welcome you all at S.N.R.S.S.
     </p>
   
     <p className='font-medium text-black mt-4'>Shankar Kumar Acharya (Headmaster)</p>
   </div>
   
       </div>
  </div> 
  );
}

export default About