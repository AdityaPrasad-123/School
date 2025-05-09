import React from 'react';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
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
    <div className="w-full min-h-screen  py-10 px-4 text-white">
      <h1 className="text-center font-bold text-4xl mb-10 hover:text-amber-700">Contact Us</h1>

      <div className="flex flex-col md:flex-row bg-amber-200 text-black rounded-lg shadow-md max-w-7xl mx-auto overflow-hidden">
        
        {/* Contact Info */}
        <div className="md:w-1/2 p-6 text-center md:text-left">
          <h2 className="text-2xl font-bold text-fuchsia-700 mb-4">Let's talk</h2>
          <p className="mb-4 text-lg">
            Our support is available 24/7.<br />
            <strong>Sunday–Thursday:</strong> 6 AM – 5 PM<br />
            <strong>Friday:</strong> 6 AM – 1 PM<br />
            <strong>Saturday:</strong> Closed
          </p>
          <p className="text-lg">📧 adi8075363@gmail.com</p>
          <p className="text-lg">📞 +977-9829251120</p>
          <p className="text-lg">📍 Tinkune, Kathmandu</p>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2 p-6">
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 font-semibold">Your Name:</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Enter your name"
                className="w-full h-12 px-3 rounded bg-slate-900 text-white border border-slate-600 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-semibold">Your Email:</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className="w-full h-12 px-3 rounded bg-slate-900 text-white border border-slate-600 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 font-semibold">Your Message:</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Enter your message"
                className="w-full px-3 py-2 rounded bg-slate-900 text-white border border-slate-600 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-amber-700 hover:bg-blue-800 transition-colors text-white font-semibold py-2 px-6 rounded-full"
            >
              Send
            </button>
            {result && <p className="text-sm mt-2">{result}</p>}
          </form>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Contact;
