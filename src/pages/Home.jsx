import React from 'react'
import { motion } from 'framer-motion'
import main1 from '../assets/Images/main1.jpg'

import { elected } from './data'
import { school } from './data';
import { teachers } from './data';
import {student} from './data';
import {event} from './data';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from 'react-router-dom'


const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "34d0b811-ff82-40e9-9650-8c6edca5c6ae");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        toast.success("Form Submitted Successfully ✅");
        setResult('');
        event.target.reset();
      } else {
        toast.error("Submission Failed ❌");
        setResult(data.message);
      }
    };
  

  return (
   
    <div className="overflow-hidden py-10 bg-[#3A59D1]">
        <h1 className='text-2xl font-bold mb-5 text-center text-white'>श्री नेपाल राष्ट्रिय नि.मा.वि खमवा–१५ बारा</h1>
        <h1 className='text-xl text-center text-white'>शिक्षामार्फत भविष्यलाई सशक्त बनाऔँ</h1>
      <div className="w-full overflow-hidden">
  <motion.div
    className="flex w-max"
    animate={{ x: ['0%', '-50%'] }}
    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
  >
    {[...school, ...school].map((school, index) => (
      <div key={index} className="w-[650px] h-[500px] flex-shrink-0 mx-2 shadow-4xl rounded-2xl ">
        <img
          src={school}
          alt={`carousel-img-${index}`}
          className="w-[650px] h-full object-cover py-5 rounded-2xl "
        />
      </div>
    ))}
  </motion.div>
</div>

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

    </div><br/><br/>

    <h1 className='text-2xl font-medium text-white text-center mt-5'>Our teachers team</h1><br/>
    <div className='mt-5'>
    <Slider {...settings}>
      {teachers.map((value, index) => (
    <div key={index} className="px-1"> 
      <div className="bg-amber-200 h-[400px] rounded-xl text-black hover:border-black hover:border-4 shadow-xl">
        <div className="h-56 rounded-xl bg-[#BFBBA9] bg-opacity-20 flex items-center justify-center">
          <img src={value.img} alt="" className="w-44 h-44 rounded-full" />
        </div>
        <div className="flex flex-col justify-center items-center gap-4 p-4">
          <p className="text-xl font-semibold">{value.name}</p>
          <p>{value.qualifaction}</p>
        </div>
      </div>
    </div>
  ))}
</Slider>
    </div>
    <br/> <br/>
    <h1 className='text-2xl font-medium text-center mt-5 text-white'>Elected members</h1><br/><br/>

<div className="w-full overflow-hidden">
  <motion.div
    className="flex w-max"
    animate={{ x: ['0%', '-50%'] }}
    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
  >
    {[...elected, ...elected].map((data, index) => (
      <div key={index} className="w-[400px] h-[450px] flex-shrink-0 mx-2 text-center bg-amber-200 text-black rounded-2xl hover:border-blue-700 hover:border-4">
        <img
          src={data.img}
          alt={`carousel-img-${index}`}
          className="w-[400px] h-[300px] object-fill rounded-xl p-1"
        />
        <p className='text-xl font-semibold py-4'>{data.name}</p>
             <p className='text-xl font-semibold text-amber-700'>Elected School {data.desc}</p>
      </div>
    ))}
  </motion.div>
</div> 


    <h1 className='text-2xl font-medium text-center mt-5 text-white'>Our students</h1><br/>
    <div className='mt-5'>
    <Slider {...settings}>
      {student.map((d,index) => (
    <div key={d.class} className="px-1"> 
      <div className="bg-amber-200 h-[450px] rounded-xl text-black hover:border-black hover:border-4 shadow-xl">
        <div className="h-56 rounded-xl bg-[#BFBBA9]  bg-opacity-20 flex items-center justify-center ">
          <img src={d.img} alt="" className="w-44 h-44 rounded-full" />
        </div>
        <div className="flex flex-col justify-center items-center gap-4 p-4">
          <p className="text-2xl font-medium">class:{d.class}</p>
          <p>Total-Students:{d.totalstudent}</p>
          <p>Class-Teacher:{d.classteacher}</p>

          <Link to={`class${d.class}`}> <button className='bg-white text-black font-semibold text-xl rounded-xl w-32 hover:bg-blue-800'>see students</button></Link>
        </div>
        
      </div>
    </div>
  ))}
</Slider>
    </div>
<br/>
<br/>
 
<h1 className='text-2xl font-medium text-center mt-5 text-white'>Events</h1><br/><br/>

<div className="w-full overflow-hidden ">
  <motion.div
    className="flex w-max"
    animate={{ x: ['0%', '-50%'] }}
    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
  >
    {[...event, ...event].map((value, index) => (
      <div key={index} className="w-[440px] h-[500px] flex-shrink-0 mx-2">
        <img
          src={value.img}
          alt={`carousel-img-${index}`}
          className="w-[450px] h-[500px] object-cover rounded-xl p-1 border-1 hover:border-blue-700 hover:border-4"
        />
      </div>
    ))}
  </motion.div>
</div> 



<div className='py-10 px-4 h-auto'>
      <h1 className='text-center font-medium text-2xl text-white hover:text-amber-800 mb-10 mt-5'>Contact Us</h1>

      <div className='flex flex-col md:flex-row bg-amber-200 rounded-lg shadow-md w-full h-auto'>

        
        <div className='md:w-1/2 text-center py-5 px-4'>
          <h2 className='text-2xl font-medium text-fuchsia-700 mb-4'>Let's talk</h2>
          <p className='text-lg mb-4'>
          Our support available to help you 24 hours a day, seven days a week.<br />
          <span className='space-x-2.5'>Sunday-Thrusday: 6 AM to 5 PM</span><br/>
          Friday:6 AM to 1 PM<br/>
          Saturday:Closed
          </p>
          <p className='text-xl mb-2'>📧 adi8075363@gmail.com</p>
          <p className='text-xl mb-2'>📞 +977-9829251120</p>
          <p className='text-xl mb-2'>📍 Tinkune-Kathmandu</p>
        </div>

        
        <div className='md:w-1/2 py-5 px-4 '>
          <form onSubmit={onSubmit} className='space-y-4 sm:w-[800px] w-auto'>
            <div>
              <label htmlFor='name' className='block mb-1'>Your Name:</label>
              <input className='w-full h-12 border px-3 bg-slate-900 rounded' id='name' type='text' placeholder='Enter your name' name='name' required />
            </div>
            <div>
              <label htmlFor='email' className='block mb-1'>Your Email:</label>
              <input className='w-full h-12 border px-3 bg-slate-900 rounded' id='email' type='email' placeholder='Enter your email' name='email' required />
            </div>
            <div>
              <label htmlFor='message' className='block mb-1'>Write your message:</label>
              <textarea className='w-full px-3 py-2 border bg-slate-900 rounded' rows={5} placeholder='Enter your message here' name='message' required />
            </div>
            <button className='bg-amber-700 hover:bg-blue-800 text-white font-medium py-2 px-6 rounded-full' id='message' type='submit'>Send</button>
          </form>
        </div>

      </div>
      <ToastContainer />
    </div>

    {/* using googlemap */}
    <div className="p-4 flex">
  <h1 className='sm:text-2xl font-medium py-40 mx-auto text-white'> search us on google map ➤</h1>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6544.605289683685!2d85.055260211163!3d27.060800789097552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eca9002c6e1ff9%3A0xcdaf37d659c172c0!2sAditya%20Prasad%20Yadav%20House!5e0!3m2!1sen!2snp!4v1746462050882!5m2!1sen!2snp"
    className="w-[800px] h-[450px] rounded-xl shadow-lg"
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

    </div>
     

  );
};

export default Home


