import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import Tilt from 'react-parallax-tilt';
import {Link} from 'react-router-dom'

const Project = () => {
  return (
    <>
    <section className='h-[700px] sm:h-[1850px] bg-slate-950' id='project'  >
    <div className='h-[100vh] relative top-32  sm:top-[450px] bg-slate-950'>
    <h1 className='text-6xl ml-20 sm:ml-10 sm:text-4xl font-extrabold'>Projects</h1>
    <br />
    <div className='h-[180px] w-2/3 text-blue-200 text-xl font-thin mt-5 sm:mt-5 ml-20 sm:ml-10'> A passionate frontend developer with expertise in Html Following projects showcases my skills and experience through real-world examples of my work. Each project is   briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
  </div>

<div className='h-full md:relative md:top-[50px] md:flex md:flex-col flex items-center justify-center gap-10 md:gap-10 relative top-0 sm:relative sm:top-[300px] bg-slate-950 sm:flex sm:flex-col sm:items-center sm:justify-center sm:h-[1460px] md:h-[1460px]'>
<Tilt  options={{ max: 25, scale: 1.1, speed: 300, transition: true }} >
    <div className='sm:w-[320px] h-[440px] w-[350px] p-5 sm:relative sm:top-0 rounded-2xl bg-slate-800'>
      <span className=' flex justify-end mb-2 gap-3 text-xl  items-center'>
          <TiSocialLinkedinCircular size={38} className='relative  hover:scale-125 transition 0.3s ease-in-out hover:text-blue-300' />
        <FaExternalLinkAlt className='hover:text-blue-300 hover:scale-125 transition 0.3s ease-in ' />
          </span>
          <img className='sm:w-full h-[160px] w-full rounded-2xl shadow-2xl object-fill' src="./Images/portfolio.png" alt="soon" />
          <h3 className='pt-3 font-bold text-3xl'>Portfolio</h3>
          <p className='text-blue-300 mt-5 text-justify'>All my skills are showcase in this portfolio 
          that i learned and use to built projects.
          Built using react tailwind
          </p>
          <div className='flex gap-5 relative top-7 items-center text-xl font-thin'>
          <span className='text-blue-300'>#react</span>
          <span className='text-blue-400'>#tailwind</span>
          <span className='text-green-400'>#tilt</span>
          </div>
        </div>
</Tilt>

<Tilt options={{ max: 25, scale: 1.1, speed: 300, transition: true }}>
        <div className='sm:w-[320px] h-[440px] w-[350px] p-5 sm:relative sm:top-0 rounded-2xl bg-slate-800'>
        <span className=' flex justify-end mb-2 gap-3 text-xl  items-center'>
         <Link to="https://www.linkedin.com/posts/shani-kannaujiya-592a59287_fashionwear-activity-7140285557225562112-psfE?utm_source=share&utm_medium=member_desktop"><TiSocialLinkedinCircular size={38} className='relative  hover:scale-125 transition 0.3s ease-in-out hover:text-blue-300' /></Link>
         <Link to="https://fashion-wear2-github-cjhvs0daf-shani-kannaujiyas-projects.vercel.app/"><FaExternalLinkAlt className='hover:text-blue-300 hover:scale-125 transition 0.3s ease-in '/></Link>
          </span>
          <img className='sm:w-full h-[160px] w-full rounded-2xl shadow-2xl' src="./Images/Fashion.png" alt="" />
          <h3 className='pt-3 font-bold text-3xl'>FashionWear</h3>
          <p className='text-blue-300 mt-5 text-justify'>FashionWear is E-commerce website and online shopping web app built using Html Css Javascript. </p>
          <div className='flex gap-5 relative top-7 items-center text-xl font-thin'>
          <span className='text-yellow-300'>#Html</span>
          <span className='text-blue-400'>#Css</span>
          <span className='text-red-400'>#Javascript</span>
          </div>
        </div>
</Tilt>
<Tilt options={{ max: 25, scale: 1.1, speed: 300, transition: true }}>
        <div className='sm:w-[320px] h-[440px] w-[380px] p-5 sm:relative sm:top-0 rounded-2xl bg-slate-800'>
        <span className=' flex justify-end mb-2 gap-3 text-xl  items-center'>
          <TiSocialLinkedinCircular size={38} className='relative  hover:scale-125 transition 0.3s ease-in-out hover:text-blue-300' />
          <FaExternalLinkAlt className='hover:text-blue-300 hover:scale-125 transition 0.3s ease-in ' />
          </span>
          <img className='sm:w-full h-[160px] w-full rounded-2xl shadow-2xl' src="" alt="soon" />
          <h3 className='pt-3 font-bold text-3xl'>soon</h3>
          <p className='text-blue-300 mt-5 text-justify'> </p>
        </div>
</Tilt>
       </div>
     </div>
    </section>
    </>
  )
}

export default Project