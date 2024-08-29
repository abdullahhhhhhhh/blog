import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

//ICONS
import { FaSquareFacebook, FaSquareTwitter, FaSquareInstagram, FaBars, FaXmark } from "react-icons/fa6";
import Modal from './Modal';

function Navbar() {
  const[isOpen,setisOpen]=useState(false)
const[isModalOpen,setisModaloOpen]=useState(false)
  const togglemenu=()=>{
    setisOpen(!isOpen)
  }

  const NavItems = [
    { path: "/", link: "home" },
    { path: "/blogs", link: "blogs" },
    { path: "/about", link: "about" },
    { path: "/services", link: "services" },
    { path: "/contact", link: "contact" },
  ]

  const OpenModal=()=>{
setisModaloOpen(true)
  }
  const closemodal=()=>{
    setisModaloOpen(false)
  }
  return (
    
      <header className='bg-black text-white fixed left-0 top-0 right-0'>

        <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>

          <a href='/' className='text-xl font-bold text-white ' >GEO<span className='text-amber-500'>bg</span></a>
          {/*  nav items in lg */}
          <ul className='text-white md:flex gap-12 text-lg  hidden' >

            {NavItems.map(({ path, link }) => <li key={path}>
              <NavLink to={path}>{link}</NavLink>

            </li>)}
          </ul>
          <div className='text-white lg:flex gap-4 items-center hidden'>

            <a href='/'> <FaSquareFacebook /></a>
            <a href='/'> <FaSquareTwitter /></a>
            <a href='/'> <FaSquareInstagram /></a>
            <button onClick={OpenModal} className='bg-orange-400 px-4 py-3 font-medium rounded hover:bg-white hover:text-orange-400'>Login</button>

          </div>

          <Modal onOpen={isModalOpen} onClose={closemodal}/>
{/* mobile devices */}

<div className='md:hidden'>
  <button onClick={togglemenu} className='cursor-pointer'>
    {

    isOpen ? < FaXmark className='h-5 w-5'/> : <FaBars className='h-5 w-5'/>

    }
   </button>
</div>

        </nav>

        <div>
<ul className={`md:hidden bg-yellow-50 hover:text-orange-400 gap-12  block space-y-4  px-4 py-6 mt-14 ${isOpen?"fixed top-0 left-0 w-full transition-all ease-out":"hidden" }`} >

{NavItems.map(({ path, link }) => <li className='text-black  ' key={path}>
  <NavLink onClick={togglemenu} to={path}>{link}</NavLink>

</li>)}
</ul>
</div>
      </header>

    
  )
}

export default Navbar

