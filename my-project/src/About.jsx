import React from 'react'


const About = () => {
  return (
    <>
    <section id='about' className='h-[100vh] '>
    <div className='h-[100vh] flex flex-col items-start justify-start sm:h-[700px] bg-slate-950'  >
  <div className=' h-1/2 ml-20 sm:ml-10 sm:h-full'>
    <h1 className=' font-extrabold text-6xl w-2/3 mt-28 sm:mt-14 text-justify sm:text-4xl'>About Me</h1>
    <h2 className='text-3xl mt-5 w-3/4 text-left'>
       <br /> 
       <div className='w-2/3 text-blue-100 text-xl font-thin sm:w-full' > A passionate frontend developer with expertise in Html Css Tailwind css JavaScript, React.js, and front-end technologies. I love creating beautiful and responsive and seamless web applications. Committed to creating engaging user experiences through visually appealing designs and seamless web application development.
      </div>
    </h2>
  </div>
<div className=' flex  gap-8 items-center justify-center h-[450px] w-[100%] cursor-pointer md:flex flex-wrap relative top-28 sm:top-16 bg-slate-950'>
<div className='hover:text-blue-400 hover:scale-110 transition 0.3s ease flex flex-col items-center justify-center'>
    <img className='h-[90px] sm:h-[60px]' src="./Images/React.png" alt="" />    
    <p className=' text-2xl pt-1 font-extrabold uppercase cursor-pointer'>React</p>
</div>
<div className='hover:text-blue-400 hover:scale-110 transition 0.3s ease flex flex-col items-center justify-center'>
    <img className='h-[95px] sm:h-[60px] ' src="./Images/Html.png" alt="" />
    <p className=' text-2xl pt-1 font-extrabold uppercase cursor-pointer'>Html 5</p>
</div>
<div className='hover:text-blue-400 hover:scale-110 transition 0.3s ease flex flex-col items-center justify-center'>
<img className='h-[90px] sm:h-[60px]' src="./Images/Css.png" alt="" />
    <p className=' text-2xl  font-extrabold uppercase cursor-pointer'>Css 3</p>
</div>
<div className='hover:text-blue-400 hover:scale-110 transition 0.3s ease flex flex-col items-center justify-center'>
    <img className='h-[90px] sm:h-[60px]' src="./Images/Tailwind CSS.png" alt="" />
    <p className=' text-2xl pt-1 font-extrabold uppercase cursor-pointer'>Tailwind css</p> 
</div>
<div className='hover:text-blue-400 hover:scale-110 transition 0.3s ease flex flex-col items-center justify-center'>
    <img className='h-[90px] sm:h-[60px]' src="./Images/Javascript.png" alt="" />
    <p className=' text-2xl pt-1 font-extrabold uppercase cursor-pointer'>Javascript</p> 
</div>
</div>
    </div>
    </section>
    </>
  )
}

export default About