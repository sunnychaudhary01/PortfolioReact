import React from 'react'
import Hero from './Component/Hero/Hero';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import Education from './Education';
import Footer from './Footer';


 const Home = () => {
  return (
    <>
<div>
   <Hero  />
   <About />
   <Project />
   <Education />
   <Contact />
   <Footer />
</div>
    </>
  )
}
export default Home;