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
        className="xl:hidden text-primary fixed top-4 left-4 p-2 m-2 scale-150 bg-light bg-opacity-75 rounded focus:outline-none z-50"
        onClick={toggleNavbar}
      >
        ☰
      </button>

      <nav className={`fixed top-0 left-10 space-y-6 flex flex-col justify-center h-full transition-transform transform z-50 ${isOpen ? 'translate-x-0 bg-primary bg-opacity-90 px-10' : '-translate-x-[150%]'} xl:translate-x-0 xl:px-0 xl:space-y-4 xl:flex xl:flex-col xl:justify-center xl:bg-transparent xl:top-1/3 xl:left-24 xl:scale-110`}>

      <Link href="/" className="transform transition duration-100 hover:text-light" onClick={() => handleLinkClick('home')}>    
        | Home
      </Link>
      <Link href="/" className="transform transition duration-100 hover:text-light" onClick={() => handleLinkClick('projects')}>  
        | Projects
      </Link>
      <Link href="/" className="transform transition duration-100 hover:text-light" onClick={() => handleLinkClick('experiences')}>  
        | Experiences
      </Link>
      <Link href="/" className="transform transition duration-100 hover:text-light" onClick={() => handleLinkClick('contact')}>  
        | Contact
      </Link>
    </nav>
    </div>
    )
}