import { useEffect, useState } from "react";

export default function Intro() {
    const [introContent, setIntroContent] = useState({ name: '', title: '',  description: '', introduction: '' });

    useEffect(() => {
        fetch("/intro.json")
          .then((response) => response.json())
          .then((data => setIntroContent(data)))
          .catch((error) => console.error('Error loading intro content:', error));
      }, []);

  return(
        <main className="min-h-screen flex justify-center w-screen flex-col mx-auto xl:flex-row xl:w-full pt-48">
            
            <div className="text-center w-full xl:w-1/3 xl:text-right">
                <h1 className="pb-2">
                {introContent.name}
                </h1>
                <h2 className="pb-2">
                {introContent.title}
                </h2>
                <h3 className="pb-2 xl:pb-0">
                {introContent.description}     
                </h3>
            </div>

            <div className="py-10 text-left px-8 xl:w-2/3 xl:py-0 space-y-4">  
                <p>
                {introContent.introduction}
                </p>

            </div>      
            </main>
    )
}

