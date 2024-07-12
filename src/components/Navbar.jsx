import React, { useEffect, useRef, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";

function Navbar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const sections = document.querySelectorAll('.section')
    const navLinks = document.querySelectorAll('.nav-link')
    
    window.addEventListener('scroll', () =>{
      if(window.scrollY >= 100) setVisible(true)
      let current = ''
      sections.forEach(section => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (scrollY <= 200) current = 'home'
        if(scrollY >= (sectionTop) - sectionHeight / 3) current = section.getAttribute('id')
      })
      navLinks.forEach(link => {
        link.classList.remove('active-nav-link')
        if(link.classList.contains(current)) link.classList.add('active-nav-link')
      })
    })
  },[visible])
  
  return (
    <>
    {visible && (
      <motion.nav className="fixed bottom-0 w-[95%] min-w-[300px] md:max-w-[500px] h-[8vh] min-h-[70px] max-h-[80px] bg-[#1d1d1d] bg-opacity-70 rounded-xl m-2 px-3 gap-2 flex justify-center items-center z-20"
        initial={{y: "100%", opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: .25, ease: "easeInOut"}}
        >
        {/* First link */}
        <div className="w-1/4 bg-[#42486B] h-[70%] rounded-md flex justify-center items-center">
          <div className="w-[90%] h-[80%] border-2 border-[#6d76a6] rounded-md flex justify-center items-center cursor-pointer text-[#cccfe0] hover:bg-[#6d76a6] text-sm home nav-link">
            <HashLink to='#home' className="w-full h-full flex justify-center items-center" smooth>Home</HashLink>
          </div>
        </div>

        {/* Second link */}
        <div className="w-1/4 bg-[#42486B] h-[70%] rounded-md flex justify-center items-center">
          <div className="w-[90%] h-[80%] border-2 border-[#6d76a6] rounded-md flex justify-center items-center cursor-pointer text-[#cccfe0] hover:bg-[#6d76a6] text-sm events nav-link">
              <HashLink to='#events' className="w-full h-full flex justify-center items-center" smooth>Events</HashLink>
          </div>
        </div>

        {/* Third link */}
        <div className="w-1/4 bg-[#42486B] h-[70%] rounded-md flex justify-center items-center">
          <div className="w-[90%] h-[80%] border-2 border-[#6d76a6] rounded-md flex justify-center items-center cursor-pointer text-[#cccfe0] hover:bg-[#6d76a6] text-sm schedule nav-link">
            <HashLink to='#schedule' className="w-full h-full flex justify-center items-center" smooth>Schedule</HashLink>
          </div>
        </div>

        {/* Fourth link */}
        <div className="w-1/4 bg-[#42486B] h-[70%] rounded-md flex justify-center items-center">
          <div className="w-[90%] h-[80%] border-2 border-[#6d76a6] rounded-md flex justify-center items-center cursor-pointer text-[#cccfe0] hover:bg-[#6d76a6] text-sm about nav-link">
            <HashLink to='#about' className="w-full h-full flex justify-center items-center" smooth>About</HashLink>   
          </div>
        </div>
      </motion.nav>
    )}
    </>
  );
}

export default Navbar;
