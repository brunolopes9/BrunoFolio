"use client"
import React, {useState} from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const toggleMobileMenu = () => {
setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const menuItems = 
  [
  {href:"/" , label: "Home"},
  {href:"/about", label: "About"},
  {href:"/projects", label:"Services"},
  {href:"/blogs", label:"Blogs"},
  {href:"/contact", label:"Contact"}

  ]

return (
  <nav className='fixed w-full dark:bg-dark/80 backdrop-blur-sm z-50'>
<div className='container max-w-7xl mx-auto px-4'>
  {/* Desktop Menu*/}
  <div className='flex items-center justify-between h-16'>
    <Link href="/" className='text-xl font-bold text-primary'>BrunoFolio</Link>
     </div>

</div>
  </nav>
);

}

export default Navbar