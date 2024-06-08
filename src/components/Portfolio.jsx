import React from 'react'


const Portfolio = () => {
    return (

        <div id='portfolio' className='main-container py-16'>

            <h1 className='text-center text-5xl underline font-bold'>My Portfolio</h1>

            <div className='box-container bg-gradient-to-r from-pink-600 to bg-purple-600 flex flex-col items-center my-10 space-y-10 lg:space-y-0 lg:space-x-10 lg:flex-row'>

                <div className="text-container text-white text-center p-4 rounded-lg">

                    <h1 className='text-4xl font-bold mb-4'>I Love These Technologies</h1>

                    <p className='mb-4'>
                        I find immense joy in crafting visually captivating websites and seamless user
                        experiences, where every line of code and pixel placement speaks about my dedication.
                        They are not just tools they are brushes with which I paint digital masterpieces,
                        blending creativity with functionality to leave a lasting impression on users.
                    </p>

                    <a
                        href="https://www.linkedin.com/in/anush-adhikari-5590862aa/"
                        target='_blank'
                        alt="My Linkedin Profile"
                        rel='noopener noreferrer'
                        className='px-3 py-2 bg-orange-600 hover:bg-orange-700 rounded text-white text-xl shadow-lg'>
                        Hire Me
                    </a>

                </div>

                <div className="skills-container p-3 flex flex-wrap justify-center gap-3">

                    {['HTML', 'CSS', 'JAVASCRIPT', 'REACT JS', 'NEXT JS', 'FIGMA', 'MY SQL', 'C', 'C++', 'PHP', 'PHOTOSHOP', 'TAILWIND CSS', 'MULTIMEDIA'].map(skill => (

                        <p
                            key={skill}
                            className='bg-gray-300 hover:bg-orange-500 cursor-pointer w-fit px-3 py-2 rounded-full'>
                            {skill}
                        </p>

                    ))}

                </div>

            </div>

        </div>
    )
}

export default Portfolio
