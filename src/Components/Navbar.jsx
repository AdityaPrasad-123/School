import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4 shadow-md w-full">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">MySchool</h1>

        {/* Hamburger icon - shown on small screens */}
        <div className="sm:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="space-x-8 sm:flex hidden">
          <Link to="/" className="hover:underline font-medium hover:text-blue-600 text-xl">Home</Link>
          <Link to="/about" className="hover:underline font-medium hover:text-blue-600 text-xl">About</Link>
          <Link to="/teacher" className="hover:underline font-medium hover:text-blue-600 text-xl">Teacher</Link>
          <Link to="/student" className="hover:underline font-medium hover:text-blue-600 text-xl">Student</Link>
          <Link to="/event" className="hover:underline font-medium hover:text-blue-600 text-xl">Event</Link>
          <Link to="/news" className="hover:underline font-medium hover:text-blue-600 text-xl">News</Link>
          <Link to="/contact" className="hover:underline font-medium hover:text-blue-600 text-xl">Contact</Link>
        </div>
      </div>

      {/* Mobile Menu - shown when isOpen is true */}
      {isOpen && (
        <div className="sm:hidden flex flex-col space-y-4 mt-4 px-4">
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
