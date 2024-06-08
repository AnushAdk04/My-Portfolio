import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
    return (

        <footer className='py-5 bg-gray-100'>

            <div className='container mx-auto px-4'>

                <div className='flex flex-col md:flex-row justify-between items-center'>

                    <div className='text-center md:text-left mb-4 md:mb-0'>

                        <p className='font-bold'>© 2024 Anush Adhikari. All Rights Reserved.</p>

                    </div>

                    <div className='flex items-center'>

                        <ul className='flex space-x-4'>

                            <li>
                                <Link to='home' smooth duration={500} className='font-semibold hover:text-orange-600 transition duration-300 ease-in-out cursor-pointer'>Home</Link>
                            </li>

                            <li>
                                <Link to='about' smooth duration={500} className='font-semibold hover:text-orange-600 transition duration-300 ease-in-out cursor-pointer'>About</Link>
                            </li>

                            <li>
                                <Link to='services' smooth duration={500} className='font-semibold hover:text-orange-600 transition duration-300 ease-in-out cursor-pointer'>Services</Link>
                            </li>

                            <li>
                                <Link to='portfolio' smooth duration={500} className='font-semibold hover:text-orange-600 transition duration-300 ease-in-out cursor-pointer'>Portfolio</Link>
                            </li>

                        </ul>

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;
