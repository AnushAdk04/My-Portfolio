import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import bannerImage from '../assets/myphoto1.png';
import bannerWallpaper from '../assets/banner_wallpaper-c69a5953.svg';
import logo from '../assets/Anush Adhikari Logo.png';

const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Full Stack Developer', 'React & Node.js Developer', 'UI/UX Designer'],
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const socialLinks = [
    {
      icon: FaFacebook,
      url: 'https://www.facebook.com/Anush.Adhikari11',
      label: 'Facebook',
    },
    {
      icon: FaInstagram,
      url: 'https://www.instagram.com/anushadhikari11/',
      label: 'Instagram',
    },
    {
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/anushadhikari/',
      label: 'LinkedIn',
    },
    {
      icon: FaGithub,
      url: 'https://github.com/AnushAdk04',
      label: 'GitHub',
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${bannerWallpaper})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: 'calc(100vh - 80px)',
      }}
      className="relative flex items-center justify-center py-20 px-4 overflow-hidden"
    >
      <motion.div
        className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Image Section */}
        <motion.div
          className="flex justify-center order-2 lg:order-1"
          variants={imageVariants}
          whileHover="hover"
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full blur-3xl opacity-20"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <img
              className="relative w-56 h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full shadow-2xl object-cover"
              src={bannerImage}
              alt="Anush Adhikari"
            />
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div className="order-1 lg:order-2 text-center lg:text-left" variants={itemVariants}>
          <motion.div variants={itemVariants} className="inline-flex items-center justify-center bg-white/80 backdrop-blur-sm border border-orange-100 rounded-full px-3 py-2 shadow-sm mb-5">
            <img
              src={logo}
              alt="Anush Adhikari logo"
              className="h-11 w-11 rounded-full object-cover border border-orange-100"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-orange-600 font-semibold text-lg mb-2">Welcome to my portfolio</p>
            <h3 className="text-4xl font-light text-slate-700">Hi, I am</h3>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-6xl lg:text-7xl font-bold text-slate-900 mt-2 mb-4">
            Anush Adhikari
          </motion.h1>

          <motion.h2 variants={itemVariants} className="text-2xl lg:text-3xl text-slate-600 mb-6 h-12 flex items-center justify-center lg:justify-start">
            I am <span className="font-bold text-orange-600 ml-2" ref={el} />
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl"
          >
            I am a full stack developer passionate about building clean, useful, and scalable web products.
            I enjoy turning ideas into real experiences with thoughtful UI and reliable backend architecture.
          </motion.p>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex gap-4 justify-center lg:justify-start mb-8">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-slate-800 hover:bg-orange-600 text-white p-3 rounded-full transition-colors duration-300 shadow-lg"
                  aria-label={social.label}
                >
                  <Icon size={24} />
                </motion.a>
              );
            })}
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(234, 88, 12, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white text-lg font-semibold rounded-lg shadow-xl transition-all duration-300"
              >
                Let's Work Together
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Banner;