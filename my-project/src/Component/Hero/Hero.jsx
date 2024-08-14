import React from "react";
import image from "/portfolio2.jpg";
import SocialIcons from "../Icons/SocialIcons";
import Buttons from "./Buttons";
import TypeWriterEffect from "react-typewriter-effect";

const Hero = () => {
  return (
    <>
    <section id='hero' className="h-[800px]">
        <div  className="sm:h-[100vh] md:h-[100vh] bg-slate-950 flex justify-center items-center relative h-[100%]  max-w-[1200px]  min-w-full mx-auto cursor-auto"> 
          <div className="lg:flex lg:justify-around lg:items-center lg:relative lg:top-16 lg:h-[50%] lg:w-full sm:h-[100vh] sm:w-[300px] sm:relative sm:top-[40px]">
            <div className="lg:w-[600px] lg:relative lg:left-20 sm:left-0 pl-5 sm:relative sm:top-24 md:relative md:top-32 sm:w-[300px]" >
              <span className="sm:text-[18px] text-5xl md:text-4xl font-medium text-white">
                Hi, I'm
              </span>
              <h1 className=" sm:text-[39px] sm:w-full  text-7xl font-bold bg-gradient-to-r from-red-500  to-blue-200  text-transparent bg-clip-text md:text-6xl">
                SHANI KANNAUJIYA
                </h1>
                <br />
                <span className="sm:sm:text-[27px] text-5xl leading-[2px] font-medium text-blue-200">
                <TypeWriterEffect
                startDelay ={500}
                cursorColor="#000"
                multiText={['Frontend Developer']}
                multiTextDelay={1000}
                typeSpeed={120}
                multiTextLoop
                />
                </span>
                <br />
              <Buttons  />
          <SocialIcons />
            </div>
            <div className="h-[300px] w-[600px] sm:w-full flex justify-center items-center md:relative md:top-[170px]">
            <div className="flex h-[350px] w-[350px] shadow-ring-white rounded-full sm:h-[200px] sm:w-[200px] sm:relative sm:top-28">
              <img className="rounded-full opacity-90" src={image} alt="" />
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
