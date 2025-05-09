import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Teacher from "./pages/Teacher";
import Event from "./pages/Event";
import Student from "./pages/Student";
import Footer from './Components/Footer'

import Class1 from "./pages/Class1";
import Class2 from "./pages/Class2";
import News from "./pages/News";
import Class3 from './pages/Class3';
import Class4 from "./pages/Class4";
import Class5 from "./pages/Class5";
import Class6 from "./pages/Class6";
import Class7 from "./pages/Class7";
import Class8 from "./pages/Class8";

import Target from "./pages/Target";




function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4 w-full bg-[#3A59D1]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/student" element={<Student />} />
         <Route path="/event" element={<Event />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News/>} />
          <Route path="class1" element={<Class1 />} />
          <Route path="class2" element={<Class2 />} />
          <Route path="class3" element={<Class3 />} />
          <Route path="class4" element={<Class4 />} />
          <Route path="class5" element={<Class5 />} />
          <Route path="class6" element={<Class6 />} />
          <Route path="class7" element={<Class7 />} />
          <Route path="class8" element={<Class8 />} />
          <Route path="/target-page" element={<Target />} />

        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
