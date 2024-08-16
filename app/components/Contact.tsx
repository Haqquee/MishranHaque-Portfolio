import { FC } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';      

export default function Contact() {
  return(
        <main className="min-h-screen flex justify-center w-screen flex-col mx-auto lg:flex-row lg:w-full pt-48">
            <div className="text-center w-full lg:w-1/3 lg:text-right px-4">
                <h1 className="pb-2">
                Contact
                </h1>
                <h2 className="pb-2">
                Reach me via the following
                </h2>
                <h3 className="pb-2 lg:pb-0">
                    
                </h3>
            </div>

            <div className="py-10 text-left px-4 lg:w-2/3 lg:py-0 space-y-4 flex flex-col justify-start items-center xl:items-start">  
              <a 
                href="https://www.linkedin.com/in/mishran-haque           " 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-secondary hover:text-light transition duration-200">
                <FaLinkedin className="mr-2 text-2xl" /> LinkedIn 
              </a>

            <a 
              href="https://github.com/Haqquee" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-secondary hover:text-light transition duration-200">
              <FaGithub className="mr-2 text-2xl" />
              GitHub
            </a>
            <a 
              href="mailto:misrhran.haque@gmail.com" 
              className="flex items-center text-secondary hover:text-light transition duration-200">
              <FaEnvelope className="mr-2 text-2xl" /> Email
            </a>
            </div>      
            </main>
    )
}
