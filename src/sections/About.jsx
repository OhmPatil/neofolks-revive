import React from 'react'
import TelephoneImg from '../assets/Telephone.webp'

function About() {
  return (
    <div className="relative h-fit lg:min-h-[750px] w-full text-white flex flex-col items-center gap-10 px-2 section" id="about">

        {/* Telephone img */}
        <img src={TelephoneImg} className='hidden lg:block absolute bottom-0 left-0 z-10' alt="" />
        <div className='absolute w-[550px] h-[550px] rounded-full bottom-0 left-0 bg-[#A6A739] right-0 blur-[100px] opacity-[.15] hidden lg:block'></div>

    
        {/* Title */}
        <div className="w-full flex flex-col justify-center items-center gap-2">
            <h1 className="text-5xl md:text-7xl font-['MonumentExtended'] text-center heading-gradient">About Us</h1>
        </div>

        {/* About us text */}
        <div className='w-full md:w-1/2 lg:w-1/3 flex justify-center items-center'>
            <p className='text-center text-xl'>Neofolks is a student based community which aims to enhance youth participation in tech events to broaden their spectrum and to provide a platform to help them upheave their tech journey by connecting with like-minded individuals.</p>
        </div>

        {/* Contact button */}
        <a href="mailto: neofolks@nuv.ac.in">
          <button className="bg-[#232323] p-2 px-6 rounded-3xl text-white hover:bg-[#afafaf] hover:text-black font-semibold cursor-pointer">Contact Us</button>
        </a>
  </div>
  )
}

export default About