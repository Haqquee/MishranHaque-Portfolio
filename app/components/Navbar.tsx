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
      <Link href="/">
        Home
      </Link>
      <Link href="/">
        Projects
      </Link>
      <Link href="/">
        Experiences
      </Link>
      <Link href="/">
        Contact
      </Link>
    </nav>
    )
}