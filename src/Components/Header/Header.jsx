//Change link tags <LinK>

import React from 'react'
import Navbar from '../Navbar/Navbar'
import MobileNav from '../Navbar/MobileNav'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-white'>
        <div className='container mx-auto flex justify-between'>
            <Link to="/"> 
                <h1 className='text-4xl font-semibold'>Portfolio<span className='text-accent'>.</span></h1>
            </Link>
            <div className='hidden xl:flex items-center gap-8'>
                <Navbar/>
            </div>
            <div className='xl:hidden'>
                <MobileNav/>
            </div>
            <Button className='hidden xl:flex font-semibold items-center bg-accent hover:bg-secondary'>Connect With Me</Button>

            </div>
    </header>
  )
}

export default Header
