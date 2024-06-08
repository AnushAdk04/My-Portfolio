import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
    const [brandName, setBrandName] = useState("Anush Adhikari");
    const [menuLinks, setMenuLinks] = useState([
        {
            title: 'Home',
            id: 'home' // Use the ID of the section you want to scroll to
        },
        {
            title: 'About',
            id: 'about'
        },
        {
            title: 'Services',
            id: 'services'
        },
        {
            title: 'Portfolio',
            id: 'portfolio'
        },
        {
            title: 'Contact',
            id: 'contact'
        }
    ]);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className='nav flex justify-between h-20 items-center px-12 bg-gray-100 sticky top-0 z-50'>

                <div>
                    <h1 className="text-3xl font-bold">{brandName}</h1>
                </div>

                <div className="hidden lg:flex space-x-6 text-lg font-semibold">

                    {menuLinks.map(link => (
                        <Link key={link.id} to={link.id} smooth duration={500} className="hover:text-orange-600 cursor-pointer">{link.title}</Link>
                    ))}

                </div>

                <div className="hidden lg:flex space-x-4 font-semibold">

                    <a href='CV.pdf' target='_blank' alt="My CV" rel='noopener noreferrer' className="px-3 py-1.5 bg-orange-600 text-white text-lg rounded-full hover:bg-orange-700 shadow">Download CV</a>

                    <a href="https://www.linkedin.com/in/anush-adhikari-5590862aa/" target='_blank' alt="My Linkedin Profile" rel='noopener noreferrer' className="px-3 py-1.5 bg-orange-600 text-white text-lg rounded-full hover:bg-orange-700 shadow">Hire Me</a>

                </div>

                <div className="lg:hidden">

                    <button onClick={toggleMenu} className="text-2xl focus:outline-none">

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">

                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />

                        </svg>
                    </button>
                </div>

            </div>

            {isMenuOpen && (

                <div className="lg:hidden bg-gray-100">

                    {menuLinks.map(link => (
                        <Link key={link.id} to={link.id} smooth duration={500} className="block py-2 px-4 text-lg border-b border-gray-200">{link.title}</Link>
                    ))}

                    <div className="flex flex-col items-center py-4 space-y-4">

                        <a href='CV.pdf' target='_blank' alt="My CV" rel='noopener noreferrer' className="px-3 py-1.5 bg-orange-600 text-white text-xl rounded hover:bg-orange-700 shadow">Download CV</a>

                        <a href="https://www.linkedin.com/in/anush-adhikari-5590862aa/" target='_blank' alt="My Linkedin Profile" rel='noopener noreferrer' className="px-3 py-1.5 bg-orange-600 text-white text-xl rounded hover:bg-orange-700 shadow">Hire Me</a>

                    </div>
                    
                </div>
            )}
        </>
    );
};

export default Header;
