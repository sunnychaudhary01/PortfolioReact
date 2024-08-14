import React from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Navbar from "./Component/Header/Navbar";
import Home from "./Home";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Education from "./Education";


function App() {
  return (
    <>
      <div className="bg-slate-950 text-white">
        <Router>
          <Navbar />
          
          <Routes>
            <Route  path="/" element={<Home />} />
            <Route  path="/About" element={<About />} />
            <Route  path="/Project" element={<Project />} />
            <Route  path="/Education" element={<Education />} />
            <Route  path="/Contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
