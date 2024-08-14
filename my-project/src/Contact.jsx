import React from 'react'
import Form from './Form'

const Contact = () => {
  return (
    <>
<section className='h-[950px] relative top-[200px] md:h-[1050px] sm:h-[1110px] sm:relative sm:top-[980px] md:top-[1199px] bg-slate-950' id='contact'>
  <div className='h-[100vh]'>
    <div className='h-1/2 ml-20 sm:ml-12'>
      <h1 className='font-extrabold text-6xl sm:text-4xl w-2/3 relative top-28 text-justify'>Contact</h1>
      <h2 className='text-3xl mt-5 w-3/4 text-justify'>
        <br />
        <div className='w-2/3 sm:w-full text-blue-100 text-xl relative top-24 '>
          <p>
            I'm open to discussing any opportunities, whether it's a potential project, job opportunity, or just a general inquiry. To start an initial chat, just drop me an email at{' '}
            <span className='text-blue-400'>tushark00012@gmail.com</span> or use the form below to get in touch. I would love to hear from you!
          </p>
        </div>
      </h2>
    </div>
    <Form />
  </div>
</section>

    </>
  )
}

export default Contact