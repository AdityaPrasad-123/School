import React from 'react';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Contact = () => {
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
    <div className='py-10 px-4 h-auto'>
      <h1 className='text-center font-medium text-3xl text-white hover:text-amber-700 mb-10 mt-5'>Contact me</h1>

      <div className='flex flex-col md:flex-row bg-amber-200 rounded-lg shadow-md w-full h-full '>

        
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
   
  );
};

export default Contact;
