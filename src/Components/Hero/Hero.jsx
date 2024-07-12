import React from 'react';
import './Hero.css';
import profile from '../../assets/profile-img.jpg';
import resume from '../../assets/resume-white.png';
import send from '../../assets/send-white.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Contact } from 'lucide-react';

const Hero = () => {
  return (
    <motion.div  
      initial={{ opacity: 0 }}  
      animate={{ opacity: 1, transition: { delay: 0, duration: 0.4, ease: "easeIn" }}} 
      className='flex flex-col items-center gap-[35px]'>
      <img src={profile} alt='Profile' className='rounded-full w-[200px] mt-10 xl:mt-70px]' />
      <h1 className='hidden md:flex text-5xl md:text-6xl font-bold text-center sm:h-10'>
        I'm <span>Sadman Saquib</span>
      </h1>
      <h1 className='text-5xl font-bold text-center sm:h-10 md:hidden'>
        I'm <span>Sadman</span>
      </h1>
      <p className='px-10 md:text-xl text-center h-12 text-white/60'>
        A Programmer, Graphic Designer & Video Editor
      </p>
      <div className="hero-action flex flex-col gap-3 items-center text-[16px] font-semibold xl:gap-[25px] xl:flex-row mb-[50px]">
         <Link to={"/Contact"}>
          <div className="hero-connect">
            <img src={send} alt="Send Icon" />Say Hello
          </div>
          </Link>
        <a href="https://drive.google.com/file/d/1rTQjphP2ivjv4VL0BtacfdxPEJ62Yj0L/view?usp=sharing" target='_blank'>
          <div className="hero-resume">
            <img src={resume} alt="Resume Icon" />My Resume
          </div>
        </a>
      </div>
    </motion.div>
  );
}

export default Hero;
