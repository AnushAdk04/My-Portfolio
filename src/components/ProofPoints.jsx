import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaUsers, FaLightbulb, FaRocket } from 'react-icons/fa';

const ProofPoints = () => {
  const stats = [
    {
      icon: FaCode,
      number: '20+',
      label: 'Projects Completed',
      color: 'text-blue-600',
    },
    {
      icon: FaUsers,
      number: '15+',
      label: 'Happy Clients',
      color: 'text-purple-600',
    },
    {
      icon: FaLightbulb,
      number: '4+',
      label: 'Years of Experience',
      color: 'text-orange-600',
    },
    {
      icon: FaRocket,
      number: '10+',
      label: 'Successful Launches',
      color: 'text-emerald-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const counterVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-slate-900 mb-4">Proven Track Record</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Results speak louder than words. Here's what I've accomplished through dedication and expertise.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div key={index} variants={itemVariants} className="text-center">
                <motion.div
                  variants={counterVariants}
                  className="mb-6 flex justify-center"
                >
                  <div className="p-4 bg-slate-100 rounded-full">
                    <Icon className={`${stat.color} text-4xl`} />
                  </div>
                </motion.div>
                <motion.h3
                  className="text-4xl font-bold text-slate-900 mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-lg text-slate-600 font-medium">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProofPoints;
