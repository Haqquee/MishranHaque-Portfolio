"use client";

import Link from "next/link"
import { useState } from 'react';
import { FC } from 'react';

interface NavbarProps {
  onNavClick: (section: string) => void;
}


export default function Navbar({ onNavClick }: { onNavClick: (section: string) => void }) {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }

  const handleLinkClick = (section: string) => {
    onNavClick(section); 
    setIsOpen(false); 
  };

  return(

    <div>
      <button 
        className="lg:hidden text-primary fixed top-4 left-4 p-2 m-2 scale-150 bg-light bg-opacity-75 rounded focus:outline-none z-50"
        onClick={toggleNavbar}
      >
        ☰
      </button>

      <nav className={`fixed top-0 left-10 space-y-6 flex flex-col justify-center h-full transition-transform transform z-50 ${isOpen ? 'translate-x-0 bg-primary bg-opacity-90 px-10' : '-translate-x-[150%]'} lg:translate-x-0 lg:px-0 lg:space-y-4 lg:flex lg:flex-col lg:justify-center lg:bg-transparent`}>

      <Link href="/" className="transform transition duration-100 hover:text-light hover:scale-110" onClick={() => handleLinkClick('home')}>    
        Home
      </Link>
      <Link href="/" className="transform transition duration-100 hover:text-light hover:scale-110" onClick={() => handleLinkClick('projects')}>  
        Projects
      </Link>
      <Link href="/" className="transform transition duration-100 hover:text-light hover:scale-110" onClick={() => handleLinkClick('experiences')}>  
        Experiences
      </Link>
      <Link href="/" className="transform transition duration-100 hover:text-light hover:scale-110" onClick={() => handleLinkClick('contact')}>  
        Contact
      </Link>
    </nav>
    </div>
    )
}