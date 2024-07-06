import React from 'react'
import './Navbar.css'
import { NavLink, Link, useLocation } from 'react-router-dom'

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

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className='flex gap-8'>
      {links.map((link, index)=>{
        return (
        <NavLink 
        to={link.path} 
        key={index}
        className={({ isActive }) =>
          `${isActive ? "text-accent border-b-2 border-accent" : ""} capitalize font-medium hover:text-accent transition-all`
        }
      >
          {link.name}
          </NavLink>)
      })}
    </nav>
  )
}

export default Navbar
