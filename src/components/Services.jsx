import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaMobileAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SectionWrapper } from './index';
import { servicesData } from '../data/services';

const Services = () => {
  const MotionLink = motion(Link);

  const services = servicesData.map((service) => ({
    ...service,
    icon:
      service.slug === 'website-development'
        ? FaCode
        : service.slug === 'ui-ux-designing'
          ? FaPalette
          : FaMobileAlt,
    color:
      service.slug === 'website-development'
        ? 'from-blue-500 to-cyan-500'
        : service.slug === 'ui-ux-designing'
          ? 'from-orange-500 to-rose-500'
          : 'from-emerald-500 to-teal-500',
  }));

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
      subtitle="Full stack product development, mobile applications, and UI/UX design services"
      variant="alternate"
    >
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                <img src={service.thumbnail} alt={service.title} className="w-full h-full object-cover" />
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-35`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon className="text-5xl text-white drop-shadow-lg" />
                </div>
              </div>
              <div className="p-8 flex flex-1 flex-col">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">{service.shortDescription}</p>
                <div className="mt-auto pt-4">
                  <MotionLink
                    to={`/services/${service.slug}`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="block"
                  >
                    <div className="w-full rounded-lg bg-orange-600 px-4 py-2 text-center font-medium text-white shadow-md transition-colors hover:bg-orange-700">
                      Learn More
                    </div>
                  </MotionLink>
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
