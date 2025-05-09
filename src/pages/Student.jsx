import React from 'react';
import { student } from './data';
import { Link } from 'react-router-dom';

const Student = () => {
  return (
    <div className="w-full px-4 py-8  min-h-screen">
      <h1 className="text-4xl font-bold text-center text-white mb-10">Our Students</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {student.map((d, index) => (
          <div
            key={d.class}
            className="bg-amber-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
          >
            <div className="h-56 bg-slate-300 bg-opacity-20 flex items-center justify-center">
              <img
                src={d.img}
                alt={`Class ${d.class}`}
                className="w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover"
              />
            </div>

            <div className="p-4 text-center text-black">
              <p className="text-2xl font-semibold">Class: {d.class}</p>
              <p className="text-lg">Total Students: {d.totalstudent}</p>
              <p className="text-lg">Class Teacher: {d.classteacher}</p>

              <Link to={`/class${d.class}`}>
                <button className="mt-4 bg-white text-black font-semibold py-2 px-4 rounded-xl hover:bg-blue-800 hover:text-white transition">
                  See Students
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Student;
