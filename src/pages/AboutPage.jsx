import React, { useEffect } from 'react';
import { setSEOMetadata, pageMetadata } from '../utils/seo';
import About from '../components/About';

const AboutPage = () => {
  useEffect(() => {
    setSEOMetadata(pageMetadata.about.title, pageMetadata.about.description, pageMetadata.about.keywords);
  }, []);

  return <About />;
};

export default AboutPage;
