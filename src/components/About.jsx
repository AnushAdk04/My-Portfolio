import React, { useState } from 'react';
import bannerImage from '../assets/myphoto2.png';

const About = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const truncatedDescription = `Greetings! I'm thrilled to introduce myself as Anush Adhikari, a versatile frontend developer and UI/UX designer fueled by a passion for creating stunning digital experiences.
   Let me walk you through the skills that I bring to the table. HTML serves as the backbone of my web development. Next up, CSS lends its magic to breathe life into these structures. JavaScript emerges as my trusty companion, adding interactivity and dynamism to the user experience. With its versatility and power, I harness the language to create seamless interactions, dynamic content updates, and immersive.....`;

  const fullDescription = `
  interfaces. React.js, with its component-based architecture, stands as my go-to choice for building robust and scalable user interfaces.
  In the realm of server-side rendering, Next.js emerges as a game-changer. Its built-in features allow me to create fast web applications with ease. It equips me with the tools to optimize performance and enhance SEO.

  But my journey doesn't end there. I'm constantly seeking out new challenges and opportunities to learn and grow. I approach each day with enthusiasm and a hunger for knowledge.

 Together, let's build experiences that leave a lasting impression😉.`;

  const descriptionToShow = showFullDescription ? fullDescription : truncatedDescription;
  const buttonText = showFullDescription ? "Read Less" : "Read More...";

  return (
    <>
      <div id='about' className='main-container py-16 bg-gray-100 h-auto md:h-screen'>

        <h1 className='text-5xl font-bold underline text-center pb-10'>About Me</h1>

        <div className='flex flex-col md:flex-row items-center'>

          <div className='w-full flex justify-center mb-8 md:mb-0'>

            <img className='w-48 h-48 md:w-96 md:h-96 rounded-full' src={bannerImage} alt='About Me Image' />

          </div>

          <div className='w-full flex justify-center md:justify-start'>

            <div className='space-y-5 w-4/5 md:w-2/3'>

              <h1 className='text-4xl font-semibold text-center md:text-left'>Frontend Developer & Graphics Designer</h1>

              <p className='text-md text-center md:text-left'>{descriptionToShow}</p>

              <div className='text-center md:text-left'>

                <button onClick={toggleDescription} className='text-orange-600 hover:text-orange-700 text-xl'>
                  {buttonText}
                </button>

              </div>

            </div>

          </div>

        </div>
        
      </div>
    </>
  );
};

export default About;
