import React from 'react'
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { DiGithub } from "react-icons/di";
import { Link } from 'react-router-dom';


const SocialIcons = () => {
  return (
    <>
        <div className='relative right-6 bottom-8'>
            <div className='flex justify-center relative bottom-16 left-44 top-2  h-full w-[200px] sm:left-28 gap-4'>
          <Link to="https://github.com/Sunnychaudhary01" ><DiGithub size={43} className='hover:scale-125 transition 0.3s ease-in-out hover:text-blue-300' /></Link>
          <Link to="https://www.linkedin.com/in/shani-kannaujiya-592a59287"><TiSocialLinkedinCircular size={43} className='hover:scale-125 transition 0.3s ease-in-out hover:text-blue-300' /></Link>
            </div>
        </div>
    </>
  )
}

export default SocialIcons