import { Link } from "react-router-dom";
import { useState } from "react";
import logo from '../assets/Images/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4 shadow-md w-full">
      <div className="max-w-screen-xl  flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img className="rounded-full w-10 h-10 object-cover" src={logo} alt="logo" />
          </Link>
        </div>

        {/* Right: Nav links and mobile menu button */}
        <div className="flex items-center justify-end flex-1">
          {/* Desktop Menu */}
          <div className="space-x-6 hidden sm:flex ">
            <Link to="/" className="hover:underline font-medium hover:text-blue-600 text-lg">Home</Link>
            <Link to="/about" className="hover:underline font-medium hover:text-blue-600 text-lg">About</Link>
            <Link to="/teacher" className="hover:underline font-medium hover:text-blue-600 text-lg">Teacher</Link>
            <Link to="/student" className="hover:underline font-medium hover:text-blue-600 text-lg">Student</Link>
            <Link to="/event" className="hover:underline font-medium hover:text-blue-600 text-lg">Event</Link>
            <Link to="/news" className="hover:underline font-medium hover:text-blue-600 text-lg">News</Link>
            <Link to="/contact" className="hover:underline font-medium hover:text-blue-600 text-lg">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="ml-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - shown when isOpen is true */}
      {isOpen && (
        <div className="sm:hidden flex flex-col space-y-4 mt-4 px-4 text-right bg-white text-black">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/teacher" onClick={() => setIsOpen(false)}>Teacher</Link>
          <Link to="/student" onClick={() => setIsOpen(false)}>Student</Link>
          <Link to="/event" onClick={() => setIsOpen(false)}>Event</Link>
          <Link to="/news" onClick={() => setIsOpen(false)}>News</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
