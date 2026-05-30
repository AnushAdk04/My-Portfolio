import websiteDevelopmentImage from '../assets/full stack web devlopment service.jpg';
import uiUxDesigningImage from '../assets/UI UX Designing service.png';
import mobileAppDevelopmentImage from '../assets/mobile app development.png';

export const servicesData = [
  {
    slug: 'website-development',
    title: 'Website Development',
    category: 'Web Development',
    shortDescription:
      'Modern, responsive websites that feel polished, load fast, and help your business convert better.',
    longDescription:
      'I build SEO-friendly, accessible, and high-performance websites tailored to your brand and business goals. Each project is planned carefully, designed thoughtfully, and implemented with performance, usability, and maintainability in mind.',
    heroImage: websiteDevelopmentImage,
    thumbnail: websiteDevelopmentImage,
    overview:
      'A complete website delivery service covering discovery, design, development, testing, and launch support.',
    details: [
      {
        heading: 'Discovery & planning',
        body:
          'We define your goals, audience, content structure, and the right feature set before any design or development begins.',
      },
      {
        heading: 'Design & build',
        body:
          'I translate the plan into a clean interface, responsive layouts, and production-ready code using modern frontend practices.',
      },
      {
        heading: 'Performance & launch',
        body:
          'The final site is tested for responsiveness, accessibility, and speed before deployment and ongoing support options are reviewed.',
      },
    ],
    capabilities: [
      'Corporate and business websites',
      'E-commerce stores',
      'Portfolio and personal sites',
      'Custom CMS integrations',
      'Landing pages and funnels',
      'Website speed optimization',
    ],
    contact: {
      title: 'Any Queries?',
      phone: '+977 9800000000',
      email: 'contactanushadhikari@gmail.com',
    },
    cta: {
      title: 'Ready to plan your website?',
      description: 'Tell me about your goals and I will help shape the right structure, content, and implementation plan.',
      label: 'Request a Plan',
      to: '/contact',
    },
    relatedSlugs: ['ui-ux-designing', 'mobile-app-development'],
  },
  {
    slug: 'ui-ux-designing',
    title: 'UI/UX Designing',
    category: 'Design Services',
    shortDescription:
      'Clear, modern interface design that improves usability, supports brand identity, and guides users smoothly.',
    longDescription:
      'I design clean and user-centered interfaces in Figma with strong attention to usability, visual hierarchy, and conversion-focused flows for modern products and websites.',
    heroImage: uiUxDesigningImage,
    thumbnail: uiUxDesigningImage,
    overview:
      'Design support for product teams, startups, and personal brands that need a thoughtful interface system.',
    details: [
      {
        heading: 'User flows & wireframes',
        body:
          'I map the journey first so the interface is structured around real tasks, not just visual decoration.',
      },
      {
        heading: 'Visual design systems',
        body:
          'I create reusable UI patterns, spacing rules, and component styles that keep the product consistent and scalable.',
      },
      {
        heading: 'Interactive prototypes',
        body:
          'Clickable prototypes help validate the flow early and make developer handoff much smoother.',
      },
    ],
    capabilities: [
      'Brand-aligned interface design',
      'Wireframes and user flows',
      'Figma prototypes',
      'Design systems and style guides',
      'Conversion-focused landing pages',
      'Responsive layout planning',
    ],
    contact: {
      title: 'Any Queries?',
      phone: '+977 9800000000',
      email: 'contactanushadhikari@gmail.com',
    },
    cta: {
      title: 'Need a design direction?',
      description: 'I can help turn rough ideas into a clear, usable interface with a clean design process.',
      label: 'Discuss Design',
      to: '/contact',
    },
    relatedSlugs: ['website-development', 'mobile-app-development'],
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    category: 'App Development',
    shortDescription:
      'Cross-platform mobile apps designed for smooth performance, native-like feel, and a polished user experience.',
    longDescription:
      'I develop modern, high-performance, and responsive cross-platform mobile applications that work well on Android and iOS with careful attention to UX, stability, and maintainability.',
    heroImage: mobileAppDevelopmentImage,
    thumbnail: mobileAppDevelopmentImage,
    overview:
      'A mobile build service for products that need a reliable app experience across platforms.',
    details: [
      {
        heading: 'Product scope & architecture',
        body:
          'We define the core flows, data needs, and app structure so development stays focused and efficient.',
      },
      {
        heading: 'Responsive app UI',
        body:
          'I design and implement interfaces that feel native on mobile while keeping the codebase clean and scalable.',
      },
      {
        heading: 'Testing & release',
        body:
          'The app is checked for usability, performance, and device responsiveness before release support is handled.',
      },
    ],
    capabilities: [
      'Cross-platform app development',
      'Mobile UI implementation',
      'API integration',
      'Performance optimization',
      'App testing and release support',
      'Clean handoff documentation',
    ],
    contact: {
      title: 'Any Queries?',
      phone: '+977 9800000000',
      email: 'contactanushadhikari@gmail.com',
    },
    cta: {
      title: 'Planning a mobile app?',
      description: 'Share your app idea and I’ll help you shape the features, screens, and delivery plan.',
      label: 'Start the Conversation',
      to: '/contact',
    },
    relatedSlugs: ['website-development', 'ui-ux-designing'],
  },
];

export const getServiceBySlug = (slug) => servicesData.find((service) => service.slug === slug);

export const getRelatedServices = (service) =>
  (service?.relatedSlugs || [])
    .map((slug) => getServiceBySlug(slug))
    .filter(Boolean);
