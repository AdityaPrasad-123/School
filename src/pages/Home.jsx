import React from 'react';
import { motion } from 'framer-motion';
import main1 from '../assets/Images/main1.jpg';

import { elected, school, teachers, student, event } from './data';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from 'react-router-dom';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
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
      <h1 className='text-2xl font-bold mb-2 text-center text-white'>श्री नेपाल राष्ट्रिय नि.मा.वि खमवा–१५ बारा</h1>
      <h1 className='text-xl text-center text-white mb-6'>शिक्षामार्फत भविष्यलाई सशक्त बनाऔँ</h1>

      {/* School Images Carousel */}
      <div className="w-full overflow-hidden">
        <motion.div className="flex w-max" animate={{ x: ['0%', '-50%'] }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}>
          {[...school, ...school].map((src, index) => (
            <div key={index} className="w-full max-w-md sm:max-w-lg md:max-w-xl h-[300px] sm:h-[400px] lg:h-[500px] flex-shrink-0 mx-2 shadow-4xl rounded-2xl">
              <img src={src} alt={`school-${index}`} className="w-full h-full object-cover rounded-2xl" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* About Us */}
      <h1 className='text-2xl font-medium text-center mt-10 text-white'>About <span className='text-amber-600'>Us</span></h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 px-4 py-6 text-white'>
        <img src={main1} alt='' className='w-full h-auto object-cover rounded-lg' />
        <div className='text-lg overflow-y-auto sm:h-[600px] h-[300px]'>
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

      {/* Teachers Carousel */}
      <h1 className='text-2xl font-medium text-white text-center mt-10'>Our Teachers Team</h1>
      <div className='mt-5 px-4'>
        <Slider {...settings}>
          {teachers.map((value, index) => (
            <div key={index} className="px-2">
              <div className="bg-amber-200 rounded-xl text-black shadow-xl h-[420px] hover:border-6">
                <div className="h-56 flex bg-slate-300 items-center justify-center">
                  <img src={value.img} alt='' className="w-32 h-32 rounded-full" />
                </div>
                <div className="text-center p-4">
                  <p className="text-xl font-semibold">{value.name}</p>
                  <p>{value.qualifaction}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div><br/>

      {/* Elected Members */}
      <h1 className='text-2xl font-medium text-center mt-10 text-white'>Elected Members</h1><br/>
      <div className="w-full overflow-hidden px-4">
        <motion.div className="flex w-max" animate={{ x: ['0%', '-50%'] }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}>
          {[...elected, ...elected].map((data, index) => (
            <div key={index} className="w-80 flex-shrink-0 mx-2 bg-amber-200 text-black rounded-2xl text-center shadow-md">
              <img src={data.img} alt='' className="w-full h-75 object-cover rounded-t-2xl" />
              <div className='p-4'>
                <p className='text-lg font-semibold'>{data.name}</p>
                <p className='text-amber-700'>Elected School {data.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Students */}
      <h1 className='text-2xl font-medium text-center mt-10 text-white'>Our Students</h1>
      <div className='mt-5 px-4'>
        <Slider {...settings}>
          {student.map((d, index) => (
            <div key={index} className="px-2">
              <div className="bg-amber-200 rounded-xl text-black shadow-xl h-[460px] hover:border-6">
                <div className="h-56 flex items-center justify-center bg-slate-300">
                  <img src={d.img} alt='' className="w-32 h-32 rounded-full" />
                </div>
                <div className="text-center p-4">
                  <p className="text-lg">Class: {d.class}</p>
                  <p>Total Students: {d.totalstudent}</p>
                  <p>Class Teacher: {d.classteacher}</p>
                  <Link to={`class${d.class}`}> <button className='mt-2 bg-white text-black font-semibold rounded-xl px-4 py-1 hover:bg-blue-800'>See Students</button></Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Events */}
      <h1 className='text-2xl font-medium text-center mt-10 text-white'>Events</h1>
      <div className="w-full overflow-hidden px-4">
        <motion.div className="flex w-max" animate={{ x: ['0%', '-50%'] }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}>
          {[...event, ...event].map((value, index) => (
            <div key={index} className="w-80 flex-shrink-0 mx-2">
              <img src={value.img} alt='' className="w-full h-80 object-cover rounded-xl border hover:border-blue-700" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Contact Form */}
      <div className='py-10 px-4'>
        <h1 className='text-center font-medium text-2xl text-white mb-6'>Contact Us</h1>
        <div className='flex flex-col md:flex-row bg-amber-200 rounded-lg shadow-md'>
          <div className='md:w-1/2 p-6'>
            <h2 className='text-2xl font-medium text-fuchsia-700 mb-4'>Let's Talk</h2>
            <p className='text-lg mb-4'>Support available 24/7.<br/>Sun-Thu: 6 AM to 5 PM<br/>Fri: 6 AM to 1 PM<br/>Sat: Closed</p>
            <p className='text-xl mb-2'>📧 adi8075363@gmail.com</p>
            <p className='text-xl mb-2'>📞 +977-9829251120</p>
            <p className='text-xl mb-2'>📍 Tinkune-Kathmandu</p>
          </div>
          <div className='md:w-1/2 p-6'>
            <form onSubmit={onSubmit} className='space-y-4'>
              <input className='w-full h-12 border px-3 bg-slate-900 rounded text-white' type='text' name='name' placeholder='Your Name' required />
              <input className='w-full h-12 border px-3 bg-slate-900 rounded text-white' type='email' name='email' placeholder='Your Email' required />
              <textarea className='w-full px-3 py-2 border bg-slate-900 rounded text-white' rows={5} name='message' placeholder='Your Message' required></textarea>
              <button className='bg-amber-700 hover:bg-blue-800 text-white font-medium py-2 px-6 rounded-full' type='submit'>Send</button>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>

      {/* Google Map */}
      <div className="px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-4 items-center">
          <h1 className='text-xl sm:text-2xl text-white'>Search us on Google Maps ➤</h1>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d499.67614716407843!2d85.06037018134184!3d27.05419032799821!2m3!1f0!2f39.123644305250224!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x39eca9b41a9e1de3%3A0xd8864dc283ed14f0!2sRam%20Janaki%20Mandir!5e1!3m2!1sen!2snp!4v1746790622762!5m2!1sen!2snp"
            className="w-full sm:w-[600px] h-[300px] sm:h-[450px] rounded-xl shadow-lg"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Home;
