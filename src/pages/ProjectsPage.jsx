import React, { useEffect } from 'react';
import { setSEOMetadata, pageMetadata } from '../utils/seo';
import Portfolio from '../components/Portfolio';

const ProjectsPage = () => {
  useEffect(() => {
    setSEOMetadata(pageMetadata.projects.title, pageMetadata.projects.description, pageMetadata.projects.keywords);
  }, []);

  return <Portfolio />;
};

export default ProjectsPage;
