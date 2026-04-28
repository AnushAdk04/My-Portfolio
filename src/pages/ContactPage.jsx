import React, { useEffect } from 'react';
import { setSEOMetadata, pageMetadata } from '../utils/seo';
import Contact from '../components/Contact';

const ContactPage = () => {
  useEffect(() => {
    setSEOMetadata(pageMetadata.contact.title, pageMetadata.contact.description, pageMetadata.contact.keywords);
  }, []);

  return <Contact />;
};

export default ContactPage;
