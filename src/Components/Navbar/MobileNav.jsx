import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { CiMenuBurger } from 'react-icons/ci'
import { IoMdClose } from 'react-icons/io'

const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Me",
      path: "/AboutMe",
    },
    {
      name: "Services",
      path: "/Services",
    },
    {
      name: "Portfolio",
      path: "/Portfolio",
    },
    {
      name: "Contact",
      path: "/Contact",
    },
  ]

const MobileNav = () => {
  return (
    <Sheet>
        <SheetTrigger className='flex justify-center items-center'>
            <CiMenuBurger className='text-[32px] font-bold text-accent'></CiMenuBurger>
        </SheetTrigger>
        <SheetContent className='flex flex-col gap-10'>
            {/* Logo */}
            <Link href="/"> 
                <h1 className='relative text-4xl font-semibold left-10 top-10'>Portfolio<span className='text-accent'>.</span></h1>
            </Link>
            <nav className='relative flex flex-col gap-6 left-10 top-20'>
                {links.map((link, index)=>{
                    return(
                        <NavLink
                            to={link.path}
                            key={index}
                            className={({ isActive }) =>
                                `${isActive ? "text-accent border-accent" : ""} capitalize text-xl font-medium hover:text-accent transition-all`
                            }
                        >
                            {link.name}
                        </NavLink>
                    )
                })}
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav
