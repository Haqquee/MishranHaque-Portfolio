"use client";

import Link from "next/link"
import { useState } from 'react';

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }

  return(
    <nav className="invisible lg:visible fixed left-10 space-y-6 flex flex-col justify-center h-full">
      <button className="lg:hidden text-white" onClick={toggleNavbar}> hamburger </button>
      <Link href="/" className="transform transition duration-100 hover:text-light hover:scale-110">    
        Home
      </Link>
      <Link href="/" className="transform transition duration-100 hover:text-light hover:scale-110">  
        Projects
      </Link>
      <Link href="/" className="transform transition duration-100 hover:text-light hover:scale-110">  
        Experiences
      </Link>
      <Link href="/" className="transform transition duration-100 hover:text-light hover:scale-110">  
        Contact
      </Link>
    </nav>
    )
}