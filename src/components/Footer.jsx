import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaArrowUp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../assets/Anush Adhikari Logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const menuLinks = [
    { title: 'Home', to: '/' },
    { title: 'About', to: '/about' },
    { title: 'Services', to: '/services' },
    { title: 'Projects', to: '/projects' },
    { title: 'Contact', to: '/contact' },
  ];

  const socialLinks = [
    { icon: FaFacebook, url: 'https://www.facebook.com/Anush.Adhikari11', label: 'Facebook' },
    { icon: FaInstagram, url: 'https://www.instagram.com/anushadhikari11/', label: 'Instagram' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/anushadhikari/', label: 'LinkedIn' },
    { icon: FaGithub, url: 'https://github.com/AnushAdk04', label: 'GitHub' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <footer className="border-t border-orange-100 bg-gradient-to-br from-orange-50 via-slate-50 to-white">
      <div className="h-1 w-full bg-gradient-to-r from-orange-500 via-orange-400 to-orange-100" />
      <motion.div
        className="max-w-7xl mx-auto px-4 py-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          <motion.div variants={itemVariants} className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-3 hover:text-orange-600 transition-colors">
              <img
                src={logo}
                alt="Anush Adhikari logo"
                className="h-14 w-14 rounded-full object-cover border border-orange-100 shadow-sm"
              />
            </Link>
            <p className="text-sm text-slate-600 mt-1 mb-0">
              Full stack developer building clean and useful digital products.
            </p>
          </motion.div>

          <motion.nav variants={itemVariants} className="lg:col-span-4">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {menuLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          <motion.div variants={itemVariants} className="lg:col-span-4 flex lg:justify-end items-center gap-2 flex-wrap">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-slate-300 bg-white text-slate-700 hover:border-orange-500 hover:text-orange-600 transition-colors"
                  aria-label={social.label}
                >
                  <Icon size={14} />
                </motion.a>
              );
            })}

            <Link
              to="/contact"
              className="inline-flex items-center px-3 py-1.5 rounded-md bg-orange-600 text-white hover:bg-orange-700 hover:text-white text-sm font-semibold transition-colors"
            >
              Contact
            </Link>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mt-4 pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
            <p className="mb-0">© {currentYear} Anush Adhikari</p>
            <a href="mailto:contactanushadhikari@gmail.com" className="inline-flex items-center gap-1 hover:text-orange-600 transition-colors">
              <FaEnvelope size={11} className="text-orange-500" />
              contactanushadhikari@gmail.com
            </a>
            <p className="inline-flex items-center gap-1 mb-0">
              <FaMapMarkerAlt size={11} className="text-orange-500" />
              Kathmandu
            </p>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.95 }}
            className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-slate-300 bg-white text-slate-700 hover:text-orange-600 hover:border-orange-500 transition-colors"
            aria-label="Scroll to top"
          >
            <FaArrowUp size={13} />
          </motion.button>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
