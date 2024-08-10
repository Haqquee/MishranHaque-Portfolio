import Image from "next/image";
import Intro from "./components/Intro"

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center w-screen flex-col mx-auto lg:flex-row lg:w-full mt-48">
      <div className="text-center w-full lg:w-1/3 lg:text-right px-4">
        <h1 className="pb-2">
           Mishran Haque
        </h1>
        <h2 className="pb-2">
           Aerospace Engineering Graduate with a passion for Software Development
        </h2>
        <h3 className="pb-2 lg:pb-0">
            Take a look through my various works.
        </h3>
      </div>

      <div className="py-10 text-left px-4 lg:w-2/3 lg:py-0 space-y-4">
        <p>
          Hello! I am Mishran, an Aerospace Engineering Graduate from Toronto Metropolitan University (Formerly Ryerson University).
        </p>
        <p>
          Space and everything extraterrestrial was fascinating to me from early childhood and throughout my High School years. This interest soon evolved into the unavoidable career choice towards Science & Engineering. My passion for space travel and state-of-the-art vehicles eventually led me to join the Aerospace Engineering Program at Ryerson University. Over my four years of University, I got to take various courses that strengthened my knowledge of aerospace applications. I got the opportunity to work with Design teams such as Ryerson Rocketry Club and Ryerson Propulsion Group and experience the process behind designing and building a supersonic rocket. In 2022, I spent 3 Co-op terms with the Canadian Space Agency where I held Project Management and Mechanical Engineering Positions within three different project teams.
        </p>
        <p>
          During my years at University, I developed a passion for Software Engineering and Artificial Intelligence. Writing code and developing meaningful software became a hobby for me. This led me to obtain a Minor in Computer Science where I took courses and completed projects mainly related to Low-level Programming and Machine Learning. These experiences and coursework allowed me to develop skills in programming using Python, C, and C++, as well as Machine Learning Frameworks and Libraries.
        </p>
        <p>
          I am always open to new professional connections and meaningful conversations!
        </p>

      </div>      
    </main>
  );
}
