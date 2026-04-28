// SEO and Metadata utilities
export const setSEOMetadata = (title, description, keywords, ogImage = '') => {
  // Update page title
  document.title = title ? `${title} | Anush Adhikari` : 'Anush Adhikari - Full Stack Developer & UI/UX Designer';

  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', description);
  }

  // Update meta keywords
  const metaKeywords = document.querySelector('meta[name="keywords"]');
  if (metaKeywords) {
    metaKeywords.setAttribute('content', keywords);
  }

  // Update Open Graph meta tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', title);
  }

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) {
    ogDesc.setAttribute('content', description);
  }

  const ogImage_ = document.querySelector('meta[property="og:image"]');
  if (ogImage_ && ogImage) {
    ogImage_.setAttribute('content', ogImage);
  }

  // Update canonical link
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = window.location.href;
};

export const pageMetadata = {
  home: {
    title: 'Home',
    description: 'Full Stack Developer & UI/UX Designer - Anush Adhikari. Building modern web applications with React, Node.js, Express, and scalable databases.',
    keywords: 'Full Stack Developer, UI/UX Designer, React, Node.js, Express.js, TypeScript, Web Development, Kathmandu',
  },
  about: {
    title: 'About Me',
    description: 'Learn about Anush Adhikari - Full stack developer experienced in React, Node.js, Express, TypeScript, SQL/NoSQL databases, and UI/UX design.',
    keywords: 'About, Portfolio, Full Stack Developer, React, Node.js, Skills, Experience',
  },
  services: {
    title: 'Services',
    description: 'Professional full stack web development and UI/UX design services for businesses and startups.',
    keywords: 'Full Stack Development, Web Development, UI/UX Design, React, Node.js, Services',
  },
  projects: {
    title: 'Projects',
    description: 'Explore my recent projects showcasing expertise in web development, design, and digital innovation.',
    keywords: 'Portfolio, Projects, Web Development, Design Projects, Case Studies',
  },
  contact: {
    title: 'Contact',
    description: 'Get in touch with Anush Adhikari. Let\'s discuss your next project and how I can help bring your ideas to life.',
    keywords: 'Contact, Get in Touch, Hire, Collaboration',
  },
};
