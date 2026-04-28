import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPalette } from 'react-icons/fa';
import { SectionWrapper, Button } from './index';
import fullStackImage from '../assets/Project RED Image.jpg';
import uiUxImage from '../assets/Buyers portal.PNG';

const Services = () => {
  const services = [
    {
      icon: FaCode,
      title: 'Full Stack Web Development',
      description:
        'I build complete web applications from frontend to backend using React.js, Next.js, Node.js, Express.js, TypeScript, and modern databases like MySQL, PostgreSQL, MongoDB, and Supabase.',
      link: 'https://github.com/AnushAdk04',
      color: 'from-blue-500 to-cyan-500',
      image: fullStackImage,
    },
    {
      icon: FaPalette,
      title: 'UI/UX Designing',
      description:
        'I design clean and user-centered interfaces in Figma with strong attention to usability, visual hierarchy, and conversion-focused flows for modern products.',
      link: 'https://www.figma.com/proto/LLNlSLIgSEz2ijiS30GAw4/Movie-Ticket?node-id=1-5&t=G6X4zN3PWIjjJXfg-1&scaling=scale-down&page-id=0%3A1',
      color: 'from-orange-500 to-rose-500',
      image: uiUxImage,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <SectionWrapper
      title="My Services"
      subtitle="Full stack product development and UI/UX design services"
      variant="alternate"
    >
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex h-full flex-col"
            >
              <div className="h-48 overflow-hidden bg-slate-100 relative">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-35`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon className="text-5xl text-white drop-shadow-lg" />
                </div>
              </div>
              <div className="p-8 flex flex-1 flex-col">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">{service.description}</p>
                <div className="mt-auto pt-4">
                  {service.link ? (
                    <a href={service.link} target="_blank" rel="noopener noreferrer" className="block">
                      <Button variant="primary" size="md" className="w-full text-center">
                        Learn More
                      </Button>
                    </a>
                  ) : (
                    <Button variant="secondary" size="md" className="w-full text-center">
                      Coming Soon
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
};

export default Services;
