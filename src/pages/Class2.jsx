import React from 'react'
import school1 from '../assets/Images/school1.jpg'

const Class2 = () => {
  return (
    <div className='min-h-screen'>
      <h1 className='text-center font-bold text-2xl mt-5 underline text-white'>Class-2</h1>
      <h1 className='text-center font-bold text-xl mt-5 text-white'>Class-teacher</h1>
           <div className='sm:h-[390px] sm:w-[300px] bg-amber-200 rounded-tl-[6px] rounded-tr-[6px] text-black rounded-xl mx-auto text-center mt-8'>
             <img className='rounded-l h-[280px] w-full object-cover rounded-tl-[6px] rounded-tr-[6px] ' src={school1} alt='' />
             <p className='mt-2'>Mr.Aditya Kumar Yadav</p>
             <p>Qualification:B.E.D</p>
             <p>Experience:5years+</p>
             <p>T-Subject:Computer Science</p>
           </div>

           <div className='w-full h-auto bg-amber-50 shadow-2xl mt-5 text-2xl font-medium pl-15'>
           <h1 className='text-center font-bold text-xl mt-5 underline py-6'>Student Name list</h1><br/>
            <p>1. Anish Kumar shah</p>
            <p>2. Rambabu Prasad Yadav</p>
            <p>3. Roshan kumar patel</p>
            <p>4. Anisha kafle</p>
            <p>5. Rahul kushwaha</p>
            <p>6. Sunil kumar yadav</p>
            <p>7. Abinash Prasad Yadav</p>
            <p>8. Ramlal Prasad Yadav</p>
            <p>10. Anish</p>
            <p>11. Anish</p>
            <p>12. Anish</p>
            <p>13. vAnish</p>
            <p>14. Anish</p>
            <p>15. Anish</p>
          
            

           </div>

    </div>
  )
}

export default Class2