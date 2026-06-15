import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projectsData, projectCategories } from '../data/projects';
import { Card, Button } from './index';
import { FaExternalLinkAlt, FaGithub, FaInfoCircle, FaDownload } from 'react-icons/fa';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

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
    exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-slate-900 mb-4">My Portfolio</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A showcase of my recent projects and the impact they've had. Each project represents my commitment to
            excellence and attention to detail.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-3 justify-center mb-16"
        >
          {projectCategories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                activeCategory === category
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {filteredProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <Card hoverable className="h-full flex flex-col overflow-hidden">
                  {/* Project Image Area */}
                  <div className="h-52 overflow-hidden bg-slate-100">
                    <img
                      src={project.coverImage}
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Project Content */}
                  <div className="flex-grow px-6 pt-5">
                    <p className="text-xs tracking-wider uppercase text-orange-600 font-semibold mb-3">{project.category}</p>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-tight">{project.title}</h3>
                    <p className="text-slate-600 mb-5 leading-relaxed">{project.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Links */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 px-6 pb-6 pt-4 border-t border-slate-200 bg-slate-50/60 mt-auto">
                    <Link to={`/projects/${project.slug}`} className="sm:col-span-2">
                      <Button variant="secondary" size="md" className="w-full flex items-center justify-center gap-2">
                        <FaInfoCircle size={16} />
                        Details
                      </Button>
                    </Link>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button variant="primary" size="md" className="w-full flex items-center justify-center gap-2">
                          {project.category === 'Mobile App Development' ? (
                            <>
                              <FaDownload size={16} />
                              Download APK
                            </>
                          ) : (
                            <>
                              <FaExternalLinkAlt size={16} />
                              View
                            </>
                          )}
                        </Button>
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button variant="outline" size="md" className="w-full flex items-center justify-center gap-2">
                          <FaGithub size={16} />
                          Repo
                        </Button>
                      </a>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-xl text-slate-600">No projects found in this category.</p>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-20"
        >
          <p className="text-xl text-slate-600 mb-6">
            Want to see more or discuss a new project?
          </p>
          <a href="mailto:contactanushadhikari@gmail.com">
            <Button variant="primary" size="lg">
              Let's Collaborate
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
