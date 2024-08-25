"use client";

import { useState, useEffect } from "react";

interface Experience {      
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  links: { name: string; url: string }[];
}

export default function Projects() {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    fetch("/experiences.json")
      .then((response) => response.json())
      .then((data => setExperiences(data)));
  }, []);

  return (
    <main className="min-h-screen flex justify-center w-screen flex-col mx-auto xl:flex-row xl:w-full pt-48">
          <div className="text-center w-full xl:w-1/3 xl:text-right px-4">
            <h1 className="pb-2">
              Experiences
            </h1>
            <h2 className="pb-2">
              Overview of my work, academic, and extra-cirricular experiences.
            </h2>
          </div>
          <div className="py-10 text-left px-4 xl:w-2/3 xl:py-0 space-y-4 pt-20">  
          {experiences.map((experience) => (
            <div key={experience.id}>
              <h2>{experience.title}</h2>
              <h3 className="opacity-50">{experience.date}</h3>
              <p>{experience.description}</p>
              <div className="flex flex-row py-5 h-72">
                <div className="flex flex-col text-right w-1/3 px-4">
                {experience.links.map((link) => (
                  <a href={link.url} className="underline hover:text-light" target="_blank">{link.name}</a>
                ))}
                </div>
                <div className="w-2/3 border-2 border-secondary">
                  <img src={experience.image} alt="" className="w-full h-full object-cover"/>
                </div>
              </div>
            </div>
            ))}
          </div>   
        </main>
  )
}
