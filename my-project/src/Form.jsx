import React from 'react'

const Form = () => {
  return (
    <>
    <div className='sm:top-[300px] md:relative  md:top-[220px] sm:ml-7 ml-20 flex flex-col gap-7 h-[490px] sm:w-[280px] w-[490px] bg-gray-900 p-8 text-normal font-semibold rounded-3xl relative top-20'>
        <h2 className='text-blue-200 font-semibold' >GET IN TOUCH</h2>
        <form action="">
        <div className='flex flex-col items-start gap-4'>
        <label>Your Name</label>
        <input className='h-11 w-[400px] sm:w-[230px] text-base pl-7 bg-slate-950 rounded-lg shadow-2xl ' type="text" placeholder="What's your good name?" />
        <label>Your email</label>
        <input className='h-11 w-[400px] sm:w-[230px] text-base pl-7 bg-slate-950 rounded-lg shadow-2xl ' type="text" placeholder="What's your web address?"/>
        <label>Your Message</label>
        <input className='h-11 w-[400px] sm:w-[230px] text-base pl-7 bg-slate-950 rounded-lg shadow-2xl ' type="text"  placeholder="What you want to say?"/>
        <button className='rounded-lg bg-slate-950 w-24 h-10 mt-4 shadow-4xl'>Send</button>
        </div>
        </form>
    </div>
    </>
  )
}

export default Form