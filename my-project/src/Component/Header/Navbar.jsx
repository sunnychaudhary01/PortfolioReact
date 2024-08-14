import React, { useState } from "react";
import { HashLink } from 'react-router-hash-link';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
 
  const handleNav = () => {
  
    setNav(!nav)
  
  }


  return (
    <>
  <nav className="bg-slate-950 h-[100px] max-w-[1200px] mx-auto min-w-full fixed z-10 flex justify-between items-center">
        <h1 className="text-red-400 m-8 text-4xl font-bold">PORTFOLIO</h1>
        <ul className="flex  gap-10 mr-28 text-xl lg:flex md:hidden sm:hidden">
          <li className="text-gray-400 font-semibold hover:text-white transition 0.3s ease">
          <HashLink   smooth to='/#hero'>Home</HashLink>
          </li>
          <li className="text-gray-400 font-semibold hover:text-white transition 0.3s ease">
          <HashLink  smooth to='/#about'>About</HashLink>
          </li>
          <li className="text-gray-400 font-semibold hover:text-white transition 0.3s ease">
          <HashLink smooth to='/#project'>Project</HashLink>
          </li>
          <li className="text-gray-400 font-semibold hover:text-white transition 0.3s ease">
          <HashLink smooth to='/#education'>Education</HashLink>
          </li>
          <li className="text-gray-400 font-semibold hover:text-white transition 0.3s ease">
          <HashLink smooth to='/#contact'>Contact</HashLink>
          </li>
        </ul>
        <div onClick={handleNav} className="block lg:hidden sm:block mr-10  text-white">
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25}  />}
        </div>
  </nav>
      <div
          className={ nav ? "fixed h-full left-0 top-0 w-[60%] ease-in-out duration-500 bg-slate-950 z-10 ": "fixed left-[-100%]"}>
          <h1 className="text-red-400 m-4 text-3xl font-bold">PORTFOLIO</h1>
          <ul className="p-8 text-2xl md:text-3xl ">
            <li className="text-gray-400 p-2">
            <HashLink smooth to='/#home'>Home</HashLink>
            </li>

            <li className="text-gray-400 p-2">
            <HashLink smooth to='/#about'>About</HashLink>
            </li>

            <li className="text-gray-400 p-2">
            <HashLink smooth to='/#project'>Project</HashLink>
            </li>
            <li className="text-gray-400 p-2">
            <HashLink smooth to='/#contact'>Contact</HashLink>
            </li>
          </ul>
        </div>
    </>
  );
};

export default Navbar;
