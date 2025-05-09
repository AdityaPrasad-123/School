import React from 'react';
import image from '../assets/Images/image.png';
import adityaKumar from  '../assets/Images/adityaKumar.jpg'


const Teacher = () => {
  const teacherList = [
    {
      name: "Mr. Mukesh Kumar Yadav",
      qualifaction: "B.E",
      experience: "5years +",
      subject: "Math",
      description: "Outstanding knowledge of mathematics",
      image: image,
    },
    {
        name: "Mr. Mukesh Kumar Yadav",
        qualifaction: "B.E",
        experience: "5years +",
        subject: "Math",
        description: "Outstanding knowledge of mathematics",
        image: image,
      },
      {
        name: "Mr. Mukesh Kumar Yadav",
        qualifaction: "B.E",
        experience: "5years +",
        subject: "Math",
        description: "Outstanding knowledge of mathematics",
        image: image,
      },
      {
        name: "Mr. Mukesh Kumar Yadav",
        qualifaction: "B.E",
        experience: "5years +",
        subject: "Math",
        description: "Outstanding knowledge of mathematics",
        image: image,
      },
      {
        name: "Mr. Mukesh Kumar Yadav",
        qualifaction: "B.E",
        experience: "5years +",
        subject: "Math",
        description: "Outstanding knowledge of mathematics",
        image: image,
      },
      {
        name: "Mr. Mukesh Kumar Yadav",
        qualifaction: "B.E",
        experience: "5years +",
        subject: "Math",
        description: "Outstanding knowledge of mathematics",
        image: image,
      },
      {
        name: "Mr. Mukesh Kumar Yadav",
        qualifaction: "B.E",
        experience: "5years +",
        subject: "Math",
        description: "Outstanding knowledge of mathematics",
        image: image,
      },
      {
        name: "Mr. Mukesh Kumar Yadav",
        qualifaction: "B.E",
        experience: "5years +",
        subject: "Math",
        description: "Outstanding knowledge of mathematics",
        image: image,
      },
   
  ];

  return (
    <div className='min-h-screen'>
      <h1 className='text-center font-bold text-4xl mt-5 text-white'>Our teachers team</h1>
      <div className='sm:h-[400px] sm:w-[300px] bg-amber-200 rounded-tl-[6px] rounded-tr-[6px] text-black rounded-xl mx-auto text-center mt-8'>
        <img className='rounded-l h-[250px] w-full object-cover rounded-tl-[6px] rounded-tr-[6px] ' src={adityaKumar} alt='' />
        <p className='mt-2'>Mr.Aditya Kumar Yadav</p>
        <p>Mr.Aditya Kumar Yadav</p>
        <p>Mr.Aditya Kumar Yadav</p>
        <p>Mr.Aditya Kumar Yadav</p>
        <p>Mr.Aditya Kumar Yadav</p>
      </div>

    <div className="grid grid-cols-1 sm:grid-cols-6 gap-6 p-4  text-white mt-5">
      {teacherList.map((teacher,index) => (

<div key={index} className="bg-amber-200 text-black rounded-xl sm:h-[390px] sm:w-[300px] mt-5 overflow-hidden shadow-lg hover:shadow-xl transition">
<div  className="sm:w-[300px] h-50  rounded-xl bg-white  items-center justify-center">
  <img
    src={teacher.image}
    alt={teacher.name}
    className="sm:w-[400px] h-full  object-cover"
  />
</div>
<div className="p-4 flex flex-col items-center ">
  <h2 className="text-xl font-bold mb-2 text-black">{teacher.name}</h2>
  <p className="text-black">Qualification: {teacher.qualifaction}</p>
  <p className="text-black">T-Subject: {teacher.subject}</p>
  <p className="text-black">Experience: {teacher.experience}</p>
  <p className="text-sm text-black mt-1">{teacher.description}</p>
</div>
</div>

      ))}
    </div>
    </div>
  );
};

export default Teacher;
