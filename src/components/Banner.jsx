import React, { useEffect, useRef } from 'react';
import bannerImage from '../assets/myphoto1.png';
import bannerWallpaper from '../assets/banner_wallpaper-c69a5953.svg';
import Typed from 'typed.js';
import { Link } from 'react-scroll';

const Banner = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Frontend Developer", "Graphics Designer", "UI/UX Designer"],
            startDelay: 100,
            typeSpeed: 50,
            backSpeed: 10,
            backDelay: 100,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div
            style={{
                backgroundImage: `url(${bannerWallpaper})`,
                backgroundSize: "cover",
                minHeight: "calc(100vh - 80px)",
            }}
            className="flex flex-col lg:flex-row items-center justify-center p-4"
            id="home"
        >
            <div className="flex justify-center w-full lg:w-1/2 mb-4 lg:mb-0">

                <img className="w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full shadow-lg" src={bannerImage} alt="Banner Image" />

            </div>

            <div className="w-full lg:w-1/2 text-center lg:text-left">

                <h3 className="text-3xl font-semibold">Hi, I am</h3>
                <h1 className="text-5xl font-bold mt-4">Anush Adhikari</h1>
                <h2 className="text-2xl mt-4">I am <span className="font-bold underline" ref={el}></span></h2>

                <p className="mt-4 mb-4">Hi, I'm Anush Adhikari, a passionate Frontend Developer and Graphics Designer. With a keen eye for detail and a love for clean, intuitive design, I craft engaging digital experiences that seamlessly blend form and function. Let's collaborate to bring your ideas to life!</p>

                <div className="icons-container text-white mb-4 text-4xl flex justify-center lg:justify-start space-x-5">

                    <div className="bg-gray-800 px-3 py-3 rounded-full w-12 h-12 flex justify-center items-center cursor-pointer hover:bg-orange-500">

                        <a href="https://www.facebook.com/Anush.Adhikari11" target="_blank" rel="noopener noreferrer">

                            <i className="fa-brands fa-facebook"></i>

                        </a>

                    </div>

                    <div className="bg-gray-800 px-3 py-3 rounded-full w-12 h-12 flex justify-center items-center cursor-pointer hover:bg-orange-500">

                        <a href="https://www.instagram.com/anushadhikari11/" target="_blank" rel="noopener noreferrer">

                            <i className="fa-brands fa-instagram"></i>
                        </a>

                    </div>

                    <div className="bg-gray-800 px-3 py-3 rounded-full w-12 h-12 flex justify-center items-center cursor-pointer hover:bg-orange-500">

                        <a href="https://www.linkedin.com/in/anush-adhikari-5590862aa/" target="_blank" rel="noopener noreferrer">

                            <i className="fa-brands fa-linkedin"></i>

                        </a>

                    </div>

                    <div className="bg-gray-800 px-3 py-3 rounded-full w-12 h-12 flex justify-center items-center cursor-pointer hover:bg-orange-500">

                        <a href="https://github.com/AnushAdk04" target="_blank" rel="noopener noreferrer">

                            <i className="fa-brands fa-github"></i>
                        </a>

                    </div>

                </div>

                <Link to="contact" smooth duration={500} className="px-3 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded text-xl shadow-lg cursor-pointer">Contact Me</Link>

            </div>
            
        </div>
    );
};

export default Banner;