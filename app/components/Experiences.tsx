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
    <main className="min-h-screen flex justify-center w-screen flex-col mx-auto lg:flex-row lg:w-full mt-48">
          <div className="text-center w-full lg:w-1/3 lg:text-right px-4">
            <h1 className="pb-2">
              Experiences
            </h1>
            <h2 className="pb-2">
              Overview of my work, academic, and extra-cirricular experiences.
            </h2>
          </div>
          <div className="py-10 text-left px-4 lg:w-2/3 lg:py-0 space-y-4 ">  
          {experiences.map((experience) => (
            <div key={experience.id}>
              <h2>{experience.title}</h2>
              <h3 className="opacity-50">{experience.date}</h3>
              <p>{experience.description}</p>
              <div className="flex flex-row py-5 h-72">
                <div className="flex flex-col text-right w-1/3 px-4">
                {experience.links.map((link) => (
                  <a href={link.url} className="underline hover:text-light">{link.name}</a>
                ))}
                </div>
                <div className="w-2/3">
                  <img src="" alt="" className="w-full h-full object-cover"/>
                </div>
              </div>
            </div>
            ))}
          </div>   
        </main>
  )
}
