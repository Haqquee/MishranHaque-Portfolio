"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro"
import Projects from "./components/Projects"
import Experiences from './components/Experiences'
import Contact from './components/Contact'

export default function Home() {
  const [currentSection, setCurrentSection] = useState('home');

  const handleNavClick = (section: string) => {
    setCurrentSection(section);
  };

  const renderContent = () => {
    switch (currentSection) {
      case 'home':
        return <Intro />;
      case 'projects':
        return <Projects />;
      case 'experiences':
        return <Experiences />
      case 'contact':
        return <Contact />
      default:
        return <Intro />;
    }
  };


  return (
    
  
    <main>
      <div className="absolute top-0 left-0 w-full h-full bg-texture bg-contain z-50 opacity-40 pointer-events-none"></div>     
      <div className="flex justify-center">
        <Navbar onNavClick={handleNavClick}/>
      </div>
      <div className="container lg:mx-auto lg:px-24">
        {renderContent()}
        
      </div>
      <div className=""></div>
    </main>
  );
}
