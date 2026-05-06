import buyerPortalDashboard from '../assets/project-screenshots/buyer-portal/dashboard.PNG';
import buyerPortalLightMode from '../assets/project-screenshots/buyer-portal/light mode.PNG';
import buyerPortalLogin from '../assets/project-screenshots/buyer-portal/login.PNG';
import buyerPortalProfile from '../assets/project-screenshots/buyer-portal/profile.PNG';
import buyerPortalSellerProfile from '../assets/project-screenshots/buyer-portal/seller profile.PNG';
import buyerPortalUploadProperty from '../assets/project-screenshots/buyer-portal/upload property.PNG';
import chitwanTourHomepage from '../assets/project-screenshots/chitwan-tour/homepage.PNG';
import chitwanTourGallery from '../assets/project-screenshots/chitwan-tour/gallery.PNG';
import chitwanTourServices from '../assets/project-screenshots/chitwan-tour/services.PNG';
import chitwanTourPlans from '../assets/project-screenshots/chitwan-tour/plans.PNG';
import chitwanTourWhyUs from '../assets/project-screenshots/chitwan-tour/why us.PNG';
import projectRedDashboard from '../assets/project-screenshots/project-red/Dashboard.jpg';
import projectRedLogin from '../assets/project-screenshots/project-red/Login.jpg';
import projectRedPasswordChange from '../assets/project-screenshots/project-red/Password Change.jpg';
import projectRedChatRoom from '../assets/project-screenshots/project-red/Chat Room.jpg';
import projectRedRequestHistory from '../assets/project-screenshots/project-red/Request history.jpg';
import snakeGameScreenshot from '../assets/project-screenshots/snake-game-using-js/game.PNG';
import collabEditorHomepage from '../assets/Collab Editor Homepage.PNG';
import collabEditorCollaborators from '../assets/project-screenshots/collab-editor/Collaborators.PNG';
import collabEditorAnotherUser from '../assets/project-screenshots/collab-editor/another user pov.PNG';
import collabEditorVersionHistory from '../assets/project-screenshots/collab-editor/version history.PNG';

// Project data for portfolio and project detail pages
export const projectsData = [
  {
    id: 1,
    slug: 'project-red',
    title: 'Project RED',
    category: 'Full Stack Web App',
    tags: ['React.js', 'Django REST Framework', 'PostgreSQL', 'Full Stack', 'UI/UX'],
    description: 'A blood donation and request platform built to connect donors and recipients quickly.',
    longDescription:
      'Project RED is a full stack blood donation platform built with React.js, Django REST Framework, and PostgreSQL. It focuses on donor awareness, request handling, and a structured interface for better usability.',
    coverImage: projectRedDashboard,
    role: 'Full Stack Developer',
    duration: 'Ongoing',
    impact: 'Built a focused social-impact workflow for blood donation and requests',
    tools: ['React.js', 'Django REST Framework', 'PostgreSQL', 'Figma'],
    link: null,
    github: 'https://github.com/AnushAdk04/Project-RED',
    screenshots: [
      {
        src: projectRedDashboard,
        alt: 'Project RED dashboard screenshot',
      },
      {
        src: projectRedLogin,
        alt: 'Project RED login screen screenshot',
      },
      {
        src: projectRedRequestHistory,
        alt: 'Project RED request history screenshot',
      },
      {
        src: projectRedPasswordChange,
        alt: 'Project RED password change screenshot',
      },
      {
        src: projectRedChatRoom,
        alt: 'Project RED chat room screenshot',
      },
    ],
  },
  {
    id: 2,
    slug: 'chitwan-tour',
    title: 'Chitwan Tour',
    category: 'Web Development',
    tags: ['Next.js', 'Website', 'UI/UX', 'Travel', 'Responsive Design'],
    description: 'A travel-focused website presenting tour details and booking-focused content for Chitwan.',
    longDescription:
      'Chitwan Tour is a live Next.js website focused on destination storytelling, travel package visibility, and conversion-friendly content structure. It is designed for clarity across desktop and mobile screens.',
    coverImage: chitwanTourHomepage,
    role: 'Web Developer',
    duration: 'Completed',
    impact: 'Delivered a live tourism website with clear user journey and content presentation',
    tools: ['Next.js', 'JavaScript', 'CSS', 'Figma'],
    link: 'https://www.chitwantour.com/',
    github: null,
    screenshots: [
      {
        src: chitwanTourHomepage,
        alt: 'Chitwan Tour homepage screenshot',
      },
      {
        src: chitwanTourGallery,
        alt: 'Chitwan Tour gallery screenshot',
      },
      {
        src: chitwanTourServices,
        alt: 'Chitwan Tour services screenshot',
      },
      {
        src: chitwanTourPlans,
        alt: 'Chitwan Tour plans screenshot',
      },
      {
        src: chitwanTourWhyUs,
        alt: 'Chitwan Tour why us screenshot',
      },
    ],
  },
  {
    id: 3,
    slug: 'collab-editor',
    title: 'Collab Editor',
    category: 'Full Stack Web App',
    tags: ['React', 'Node.js', 'Socket.IO', 'Yjs', 'MongoDB'],
    description: 'A real-time collaborative document editor with live cursor tracking, rich text formatting, and version history.',
    longDescription:
      'A real-time collaborative document editor built with React, Node.js, Socket.IO, and Yjs — similar to Google Docs. Multiple users can edit the same document simultaneously with live cursor tracking, rich text formatting, conflict resolution using Yjs CRDTs, and version history.',
    coverImage: collabEditorHomepage,
    role: 'Full Stack Developer',
    duration: 'Completed',
    impact: 'Built a real-time collaborative platform ensuring conflict-free data sync',
    tools: ['React', 'Node.js', 'Socket.IO', 'Yjs', 'MongoDB', 'IndexedDB'],
    link: 'https://collab-editor-cyan.vercel.app/',
    github: 'https://github.com/AnushAdk04/Collab-Editor',
    screenshots: [
      {
        src: collabEditorHomepage,
        alt: 'Collab Editor homepage screenshot',
      },
      {
        src: collabEditorCollaborators,
        alt: 'Collab Editor collaborators screenshot',
      },
      {
        src: collabEditorAnotherUser,
        alt: 'Collab Editor another user POV screenshot',
      },
      {
        src: collabEditorVersionHistory,
        alt: 'Collab Editor version history screenshot',
      },
    ],
  },
  {
    id: 4,
    slug: 'buyer-portal',
    title: 'Buyer Portal',
    category: 'Full Stack Web App',
    tags: ['React', 'Node.js', 'Express', 'MySQL', 'PostgreSQL', 'TypeScript'],
    description: 'A modern property discovery and listing portal with clean dashboard and property detail experience.',
    longDescription:
      'Buyer Portal is a property-focused web application with polished card layouts, listing details, and streamlined user actions. It is designed around clarity and speed with dark UI patterns and practical workflow actions.',
    coverImage: buyerPortalDashboard,
    role: 'Full Stack Developer',
    duration: 'Ongoing',
    impact: 'Delivered a production-ready UI and listing flow for property exploration',
    tools: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Render'],
    link: 'https://buyer-portal-alpha.vercel.app/',
    github: 'https://github.com/AnushAdk04/Buyer-Portal',
    screenshots: [
      {
        src: buyerPortalDashboard,
        alt: 'Buyer Portal property detail screenshot',
      },
      {
        src: buyerPortalDashboard,
        alt: 'Buyer Portal dashboard screenshot',
      },
      {
        src: buyerPortalLogin,
        alt: 'Buyer Portal login screen screenshot',
      },
      {
        src: buyerPortalUploadProperty,
        alt: 'Buyer Portal upload property screenshot',
      },
      {
        src: buyerPortalProfile,
        alt: 'Buyer Portal profile screenshot',
      },
      {
        src: buyerPortalSellerProfile,
        alt: 'Buyer Portal seller profile screenshot',
      },
      {
        src: buyerPortalLightMode,
        alt: 'Buyer Portal light mode screenshot',
      },
    ],
  },
  {
    id: 5,
    slug: 'snake-game-using-js',
    title: 'Snake Game Using JS',
    category: 'JavaScript Project',
    tags: ['JavaScript', 'HTML', 'CSS', 'Game Logic'],
    description: 'Classic snake game built with JavaScript, featuring keyboard controls and score progression.',
    longDescription:
      'This project demonstrates practical JavaScript fundamentals by implementing real-time movement, collision detection, scoring logic, and responsive keyboard controls in a clean browser game.',
    coverImage: snakeGameScreenshot,
    role: 'Frontend Developer',
    duration: 'Completed',
    impact: 'Showcases game-loop and logic skills with vanilla JavaScript',
    tools: ['JavaScript', 'HTML5', 'CSS3'],
    link: 'https://anushadk04.github.io/Snake-Game-using-JS/',
    github: 'https://github.com/AnushAdk04/Snake-Game-using-JS',
    screenshots: [
      {
        src: snakeGameScreenshot,
        alt: 'Snake Game play screen screenshot',
      },
    ],
  },
  
  
];

export const projectCategories = ['All', 'Full Stack Web App', 'Web Development', 'JavaScript Project'];

export const getProjectBySlug = (slug) => projectsData.find((project) => project.slug === slug);
