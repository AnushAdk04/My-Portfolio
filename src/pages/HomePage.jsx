import React, { useEffect } from 'react';
import { setSEOMetadata, pageMetadata } from '../utils/seo';
import Banner from '../components/Banner';
import ProofPoints from '../components/ProofPoints';
import FeaturedProjects from '../components/FeaturedProjects';
import Services from '../components/Services';
import CTASection from '../components/CTASection';

const HomePage = () => {
  useEffect(() => {
    setSEOMetadata(pageMetadata.home.title, pageMetadata.home.description, pageMetadata.home.keywords);
  }, []);

  return (
    <>
      <Banner />
      <ProofPoints />
      <FeaturedProjects />
      <Services />
      <CTASection />
    </>
  );
};

export default HomePage;
