import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { getProjectBySlug } from '../data/projects';
import { setSEOMetadata } from '../utils/seo';
import { Button } from '../components';

const ProjectDetailsPage = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    if (project) {
      setSEOMetadata(
        `${project.title} Project`,
        project.description,
        `${project.tags.join(', ')}, Full Stack Developer, Anush Adhikari`
      );
    }
  }, [project]);

  if (!project) {
    return (
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Project not found</h1>
          <p className="text-slate-600 mb-8">The requested project does not exist.</p>
          <Link to="/projects">
            <Button variant="primary" size="lg">
              Back to Projects
            </Button>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto space-y-8">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-slate-700 hover:text-orange-600 font-semibold"
        >
          <FaArrowLeft size={14} />
          Back to Projects
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-4 shadow-md"
          >
            <img
              src={project.coverImage}
              alt={`${project.title} cover`}
              className="w-full h-[340px] object-cover rounded-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-md"
          >
            <p className="text-orange-600 font-semibold mb-2">{project.category}</p>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">{project.title}</h1>
            <p className="text-slate-700 leading-relaxed mb-6">{project.longDescription}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-50 rounded-lg p-4">
                <p className="text-sm text-slate-500">Role</p>
                <p className="font-semibold text-slate-900">{project.role}</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <p className="text-sm text-slate-500">Duration</p>
                <p className="font-semibold text-slate-900">{project.duration}</p>
              </div>
            </div>

            <p className="text-slate-700 mb-6">{project.impact}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" size="md" className="flex items-center gap-2">
                    <FaExternalLinkAlt size={15} />
                    Live Demo
                  </Button>
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="md" className="flex items-center gap-2">
                    <FaGithub size={15} />
                    View Repo
                  </Button>
                </a>
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-2xl p-8 shadow-md"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Project Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.screenshots.map((shot, index) => (
              <figure key={`${project.slug}-${index}`} className="space-y-3">
                <img
                  src={shot.src}
                  alt={shot.alt}
                  className="w-full h-64 object-cover rounded-xl border border-slate-200"
                  loading="lazy"
                />
                <figcaption className="text-sm text-slate-600">{shot.alt}</figcaption>
              </figure>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectDetailsPage;
