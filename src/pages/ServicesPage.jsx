import React, { useEffect } from 'react';
import { setSEOMetadata, pageMetadata } from '../utils/seo';
import Services from '../components/Services';

const ServicesPage = () => {
  useEffect(() => {
    setSEOMetadata(pageMetadata.services.title, pageMetadata.services.description, pageMetadata.services.keywords);
  }, []);

  return <Services />;
};

export default ServicesPage;
