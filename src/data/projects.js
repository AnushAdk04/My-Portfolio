import projectRedImage from '../assets/Project RED Image.jpg';
import buyerPortalImage from '../assets/Buyers portal.PNG';
import chitwanTourImage from '../assets/Chitwan Tour.PNG';
import projectRedDashboard from '../assets/project-screenshots/project-red/Dashboard.jpg';
import projectRedLogin from '../assets/project-screenshots/project-red/Login.jpg';
import projectRedPasswordChange from '../assets/project-screenshots/project-red/Password Change.jpg';
import projectRedChatRoom from '../assets/project-screenshots/project-red/Chat Room.jpg';
import projectRedRequestHistory from '../assets/project-screenshots/project-red/Request history.jpg';

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
    coverImage: projectRedImage,
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
    slug: 'buyer-portal',
    title: 'Buyer Portal',
    category: 'Full Stack Web App',
    tags: ['React', 'Node.js', 'Express', 'MySQL', 'PostgreSQL', 'TypeScript'],
    description: 'A modern property discovery and listing portal with clean dashboard and property detail experience.',
    longDescription:
      'Buyer Portal is a property-focused web application with polished card layouts, listing details, and streamlined user actions. It is designed around clarity and speed with dark UI patterns and practical workflow actions.',
    coverImage: buyerPortalImage,
    role: 'Full Stack Developer',
    duration: 'Ongoing',
    impact: 'Delivered a production-ready UI and listing flow for property exploration',
    tools: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Render'],
    link: 'https://buyer-portal-alpha.vercel.app/',
    github: 'https://github.com/AnushAdk04/Buyer-Portal',
    screenshots: [
      {
        src: buyerPortalImage,
        alt: 'Buyer Portal property detail screenshot',
      },
      {
        src: 'https://opengraph.githubassets.com/1/AnushAdk04/Buyer-Portal',
        alt: 'Buyer Portal repository preview',
      },
    ],
  },
  {
    id: 3,
    slug: 'snake-game-using-js',
    title: 'Snake Game Using JS',
    category: 'JavaScript Project',
    tags: ['JavaScript', 'HTML', 'CSS', 'Game Logic'],
    description: 'Classic snake game built with JavaScript, featuring keyboard controls and score progression.',
    longDescription:
      'This project demonstrates practical JavaScript fundamentals by implementing real-time movement, collision detection, scoring logic, and responsive keyboard controls in a clean browser game.',
    coverImage: 'https://opengraph.githubassets.com/1/AnushAdk04/Snake-Game-using-JS',
    role: 'Frontend Developer',
    duration: 'Completed',
    impact: 'Showcases game-loop and logic skills with vanilla JavaScript',
    tools: ['JavaScript', 'HTML5', 'CSS3'],
    link: null,
    github: 'https://github.com/AnushAdk04/Snake-Game-using-JS',
    screenshots: [
      {
        src: 'https://opengraph.githubassets.com/2/AnushAdk04/Snake-Game-using-JS',
        alt: 'Snake Game repository preview',
      },
    ],
  },
  {
    id: 4,
    slug: 'chitwan-tour',
    title: 'Chitwan Tour',
    category: 'Web Development',
    tags: ['Next.js', 'Website', 'UI/UX', 'Travel', 'Responsive Design'],
    description: 'A travel-focused website presenting tour details and booking-focused content for Chitwan.',
    longDescription:
      'Chitwan Tour is a live Next.js website focused on destination storytelling, travel package visibility, and conversion-friendly content structure. It is designed for clarity across desktop and mobile screens.',
    coverImage: chitwanTourImage,
    role: 'Web Developer',
    duration: 'Completed',
    impact: 'Delivered a live tourism website with clear user journey and content presentation',
    tools: ['Next.js', 'JavaScript', 'CSS', 'Figma'],
    link: 'https://www.chitwantour.com/',
    github: null,
    screenshots: [
      {
        src: chitwanTourImage,
        alt: 'Chitwan Tour homepage screenshot',
      },
    ],
  },
];

export const projectCategories = ['All', 'Full Stack Web App', 'Web Development', 'JavaScript Project'];

export const getProjectBySlug = (slug) => projectsData.find((project) => project.slug === slug);
