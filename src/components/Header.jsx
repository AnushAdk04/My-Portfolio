import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa';
import logo from '../assets/Anush Adhikari Logo.png';

const Header = () => {
  const MotionLink = motion(Link);

  const menuLinks = [
    { title: 'Home', to: '/' },
    { title: 'About', to: '/about' },
    { title: 'Services', to: '/services' },
    { title: 'Projects', to: '/projects' },
    { title: 'Contact', to: '/contact' },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3 },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      <motion.header
        className="sticky top-0 z-50 bg-white shadow-md"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 h-20 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <motion.img
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              src={logo}
              alt="Anush Adhikari logo"
              className="h-16 w-auto max-w-[7.5rem] object-contain"
              aria-label="Anush Adhikari home"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-8 items-center">
            {menuLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `relative font-semibold transition-colors ${
                    isActive ? 'text-orange-600' : 'text-slate-700 hover:text-orange-600'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.title}
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-1 bg-orange-600 rounded-full"
                        layoutId="underline"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex gap-4">
            <MotionLink
              to="/cv"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 font-semibold rounded-lg hover:bg-slate-200 hover:text-slate-700 transition-colors"
            >
              <FaDownload size={16} />
              CV
            </MotionLink>
            <motion.a
              href="https://www.linkedin.com/in/anushadhikari/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 hover:text-white transition-colors shadow-lg"
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMenu}
            className="lg:hidden p-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FaTimes size={24} className="text-slate-700" />
            ) : (
              <FaBars size={24} className="text-slate-700" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="lg:hidden bg-slate-50 border-t border-slate-200 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-3 max-w-7xl mx-auto">
                {menuLinks.map((link) => (
                  <motion.div key={link.to} variants={menuItemVariants}>
                    <NavLink
                      to={link.to}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `block px-4 py-2 font-semibold rounded-lg transition-colors ${
                          isActive
                            ? 'bg-orange-600 text-white'
                            : 'text-slate-700 hover:bg-slate-100'
                        }`
                      }
                    >
                      {link.title}
                    </NavLink>
                  </motion.div>
                ))}

                <div className="pt-4 border-t border-slate-200 space-y-3">
                  <MotionLink
                    to="/cv"
                    onClick={() => setIsMenuOpen(false)}
                    variants={menuItemVariants}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 font-semibold rounded-lg hover:bg-slate-200 hover:text-slate-700 transition-colors"
                  >
                    <FaDownload size={16} />
                    Download CV
                  </MotionLink>
                  <motion.a
                    href="https://www.linkedin.com/in/anushadhikari/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                    variants={menuItemVariants}
                    className="flex items-center justify-center px-4 py-2 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 hover:text-white transition-colors"
                  >
                    Hire Me
                  </motion.a>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;
