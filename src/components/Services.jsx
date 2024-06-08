import React from 'react'

const Services = () => {
    return (
        <>

            <div id='services' className='main-container py-16'>

                <h1 className='text-5xl font-bold underline text-center'>My Services</h1>

                <div className="services-container flex flex-col md:flex-row mt-12 space-y-6 md:space-y-0 md:space-x-4 px-6 justify-center">

                    <div className='service-1 space-y-4 shadow-lg rounded-xl bg-slate-100 text-center p-5 cursor-pointer hover:bg-slate-200 w-full md:w-1/3'>

                        <i className="fa-solid fa-code text-5xl"></i>

                        <h1 className='text-4xl'>Web Development</h1>

                        <p>Proficient in HTML, CSS, JavaScript, and frameworks like React.js and Next.js, I excel in crafting visually appealing and dynamic web experiences. From frontend design to backend functionality, I'm equipped to tackle every aspect of web development with precision.</p><br />

                        <a href='https://anushadk04.github.io/CCT-website/' className='px-3 py-2 bg-orange-600 hover:bg-orange-700 rounded text-white text-xl shadow-lg' target='_blank'>Click Me!</a>

                    </div>

                    <div className='service-2 space-y-4 shadow-lg rounded-xl bg-slate-100 text-center p-5 cursor-pointer hover:bg-slate-200 w-full md:w-1/3'>

                        <i className="fa-solid fa-paintbrush text-5xl"></i>

                        <h1 className='text-4xl'>Graphics Designing</h1>

                        <p>With a keen eye for aesthetics and skill of design tools like Adobe Photoshop. I specialize in creating visuals that elevate brands and engage audiences. I blend creativity with strategic thinking to deliver impactful graphic solutions tailored to each client's unique needs.</p>

                        <button className='px-3 py-2 bg-orange-600 hover:bg-orange-700 rounded text-white text-xl shadow-lg'>Click Me!</button>

                    </div>

                    <div className='service-3 space-y-4 shadow-lg rounded-xl bg-slate-100 text-center p-5 cursor-pointer hover:bg-slate-200 w-full md:w-1/3'>

                        <i className="fa-brands fa-uikit text-5xl"></i>

                        <h1 className='text-4xl'>UI/UX Designing</h1>

                        <p>Proficient in UI/UX design principles and tools such as Figma. I specialize in creating seamless digital experiences that prioritize user satisfaction. I blend creativity with user-centered design to craft interfaces that not only look great but also function flawlessly.</p><br />

                        <a href='https://www.figma.com/proto/LLNlSLIgSEz2ijiS30GAw4/Movie-Ticket?node-id=1-5&t=G6X4zN3PWIjjJXfg-1&scaling=scale-down&page-id=0%3A1' className='px-3 py-2 bg-orange-600 hover:bg-orange-700 rounded text-white text-xl shadow-lg' target='_blank'>Click Me!</a>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Services
