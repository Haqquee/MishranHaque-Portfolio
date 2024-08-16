"use client";

import { useState, useEffect } from "react";

interface Project {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  links: { name: string; url: string }[];
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data => setProjects(data)));
  }, []);

  return (
    <main className="min-h-screen flex justify-center w-screen flex-col mx-auto lg:flex-row lg:w-full pt-48">
          <div className="text-center w-full lg:w-1/3 lg:text-right px-4">
            <h1 className="pb-2">
              Projects
            </h1>
            <h2 className="pb-2">
              Overview of various projects I am working on, or have done in the past.
            </h2>
          </div>      
          <div className="py-10 text-left px-4 lg:w-2/3 lg:py-0 space-y-4 ">  
          {projects.map((project) => (
            <div key={project.id}>
              <h2>{project.title}</h2>
              <h3 className="opacity-50">{project.date}</h3>
              <p>{project.description}</p>
              <div className="flex flex-row py-5 h-72">
                <div className="flex flex-col text-right w-1/3 px-4">
                {project.links.map((link) => (
                  <a href={link.url} className="underline hover:text-light" target="_blank"> {link.name} </a>
                ))}
                </div>
                <div className="w-2/3 border-2 border-secondary">    
                  <img src={project.image} alt="" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            ))}
          </div>   
        </main>
  )
}