import buyerPortalLightMode from '../assets/project-screenshots/buyer-portal/light mode.PNG';
import buyerPortalLogin from '../assets/project-screenshots/buyer-portal/login.PNG';
import buyerPortalProfile from '../assets/project-screenshots/buyer-portal/profile.PNG';
import buyerPortalSellerProfile from '../assets/project-screenshots/buyer-portal/seller profile.PNG';
import buyerPortalUploadProperty from '../assets/project-screenshots/buyer-portal/upload property.PNG';
import buyerPortalHomepage from '../assets/project-screenshots/buyer-portal/Homepage.PNG';
import buyerPortalAIAssistant from '../assets/project-screenshots/buyer-portal/AI Assistant.PNG';
import buyerPortalAboutPage from '../assets/project-screenshots/buyer-portal/About page.PNG';
import buyerPortalAdminDashboard from '../assets/project-screenshots/buyer-portal/Admin dashboard.PNG';
import buyerPortalEMICalculator from '../assets/project-screenshots/buyer-portal/EMI calculator.PNG';
import buyerPortalPropertyInquiries from '../assets/project-screenshots/buyer-portal/property Inquiries.PNG';
import buyerPortalPropertyMap from '../assets/project-screenshots/buyer-portal/property description and map.PNG';
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

// Syncra Screenshots
import syncraAudioVideoRoom from '../assets/project-screenshots/syncra/audio and video room.PNG';
import syncraGeneralChat from '../assets/project-screenshots/syncra/general chat.PNG';
import syncraOrgAnalytics from '../assets/project-screenshots/syncra/org analytics.PNG';
import syncraOrgCreate from '../assets/project-screenshots/syncra/org create.PNG';
import syncraOrgSettings from '../assets/project-screenshots/syncra/org settings.PNG';
import syncraProfileAndStatus from '../assets/project-screenshots/syncra/profile and status.PNG';

// SpendWise Screenshots
import spendwiseAddExpense from '../assets/project-screenshots/spendwise/spendwise add expense.jpeg';
import spendwiseHomeScreen from '../assets/project-screenshots/spendwise/spendwise home screen.jpeg';
import spendwiseLoginPage from '../assets/project-screenshots/spendwise/spendwise login page.jpeg';
import spendwiseSummaryScreen from '../assets/project-screenshots/spendwise/spendwise summary screen.jpeg';

// Chess 3D Screenshots
import chess3dHomeScreen from '../assets/project-screenshots/chess-3d/Home Screen.PNG';
import chess3dPiecesMoving from '../assets/project-screenshots/chess-3d/Pieces Moving.PNG';
import chess3dCheckmate from '../assets/project-screenshots/chess-3d/checkmate.PNG';
import chess3dAttacking from '../assets/project-screenshots/chess-3d/pawn attacking with moves sidebar visible.PNG';

// Project data for portfolio and project detail pages
export const projectsData = [
  {
    id: 8,
    slug: 'chess-3d',
    title: 'Chess 3D',
    category: 'Fun and Games',
    tags: ['Next.js 14', 'React Three Fiber', 'Three.js', 'TypeScript', 'Zustand', 'Chess.js'],
    description: 'A fully interactive 3D Chess game built with Next.js, Three.js, React Three Fiber, and Chess.js.',
    longDescription:
      'Chess 3D is a highly interactive, responsive 3D chess application powered by Next.js 14 (App Router) and React Three Fiber (R3F) for Three.js rendering. It features a complete 3D chessboard with custom wooden PBR materials and six procedurally modeled chess pieces (Pawn, Rook, Knight, Bishop, Queen, King) styled in gold metallic for White and slate grey for Black. The game fully enforces standard chess rules (including check, checkmate, stalemate, and draws) using Chess.js, dynamically rotating the board to face the active player side with smooth orbit animations. It includes click-to-move interactions with move-indicator dots and capture ring highlights, side-border captured piece docks, a pawn promotion selection modal, an active move history sidebar panel, and a game over overlay. The application is built with TypeScript and Zustand state management, and is deployed to Vercel.',
    coverImage: chess3dHomeScreen,
    role: 'Frontend/3D Developer',
    duration: 'Completed',
    impact: 'Created an immersive 3D board game experience combining advanced WebGL shaders, procedurally generated geometry, and full game state logic.',
    tools: ['Next.js 14', 'TypeScript', 'React Three Fiber', 'Three.js', '@react-three/drei', 'Chess.js', 'Zustand', 'Tailwind CSS'],
    link: 'https://chess-3-d-iota.vercel.app/',
    github: 'https://github.com/AnushAdk04/Chess-3D',
    screenshots: [
      {
        src: chess3dHomeScreen,
        alt: 'Chess 3D landing and initial game configuration home screen layout',
      },
      {
        src: chess3dPiecesMoving,
        alt: 'Fully interactive 3D board layout with pieces moving and legal movement dot indicators',
      },
      {
        src: chess3dCheckmate,
        alt: 'Checkmate game over state overlay featuring play again options and active moves list',
      },
      {
        src: chess3dAttacking,
        alt: 'Detailed board preview showing pawn attacking with active move history sidebar panel visible',
      },
    ],
  },
  {
    id: 7,
    slug: 'spendwise',
    title: 'SpendWise',
    category: 'Mobile App Development',
    tags: ['Flutter', 'Dart', 'Firebase', 'FCM', 'Provider', 'Offline Cache'],
    description: 'A feature-rich personal finance tracking mobile app with real-time sync, offline-first support, and push notifications.',
    longDescription:
      'SpendWise is a premium, offline-first personal finance tracking mobile application built with Flutter and Dart. It features secure email/password authentication using Firebase Auth and a complete CRUD interface for managing expenses across 8 pre-defined categories. The app guarantees a seamless user experience even without an active internet connection using Cloud Firestore offline persistence, displaying "Pending Sync" indicators for local edits and auto-synchronizing modifications upon reconnection. Additionally, it features dynamic monthly summaries with per-category progress bars, top expense highlights, configured local daily reminders, push notifications via Firebase Cloud Messaging, and elegant Material 3 purple styling with interactive swipe-to-delete gestures.',
    coverImage: spendwiseHomeScreen,
    role: 'Mobile App Developer',
    duration: 'Completed',
    impact: 'Designed and implemented an offline-first architecture with automatic Firestore synchronization, localized time-zone-aware notifications, and high-performance list swiping.',
    tools: [
      'Flutter 3.x',
      'Dart',
      'Firebase Auth',
      'Cloud Firestore',
      'Firestore Persistence',
      'Firebase Cloud Messaging (FCM)',
      'flutter_local_notifications',
      'Provider',
      'connectivity_plus',
      'timezone',
      'uuid',
      'intl',
    ],
    link: 'https://github.com/AnushAdk04/spendwise/releases/tag/v1.0.0',
    github: 'https://github.com/AnushAdk04/spendwise',
    screenshots: [
      {
        src: spendwiseLoginPage,
        alt: 'SpendWise secure email and password login page powered by Firebase Auth',
      },
      {
        src: spendwiseHomeScreen,
        alt: 'SpendWise main dashboard showcasing recent transactions list with search and categories filter',
      },
      {
        src: spendwiseAddExpense,
        alt: 'SpendWise form interface to add, edit, or delete expenses with category picker and date selector',
      },
      {
        src: spendwiseSummaryScreen,
        alt: 'SpendWise monthly summary screen showcasing category expenditure breakdown with progress bars and top transactions',
      },
    ],
  },
  {
    id: 6,
    slug: 'syncra',
    title: 'Syncra',
    category: 'Full Stack Web App',
    tags: ['Next.js', 'Supabase', 'TypeScript', 'Tailwind CSS', 'Socket.io', 'WebRTC', 'Gemini AI'],
    description: 'A flagship real-time team collaboration platform with chat, WebRTC audio/video rooms, multi-tenancy, and AI channel summaries.',
    longDescription:
      'Syncra is a flagship, production-grade real-time team collaboration platform (similar to Slack) built as a multi-tenant SaaS. It features full-featured real-time chat with optimistic UI updates, emoji reactions, nested threads, and drag-and-drop file storage. It also supports screen sharing and recording in WebRTC audio/video rooms, role-based access control (RBAC), automatic email invites, online presence, live analytics dashboards, system-aware dark/light modes, rate limiting, and an AI \'Catch me up\' channel summary powered by Gemini 1.5 Flash.',
    coverImage: syncraGeneralChat,
    role: 'Full Stack Developer',
    duration: 'Completed',
    impact: 'Designed and built a highly secure, multi-tenant SaaS architecture supporting real-time messaging, WebRTC conferencing, and automated AI insights.',
    tools: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Socket.io', 'WebRTC', 'Google Gemini AI', 'Upstash Redis', 'Resend'],
    link: 'https://syncra-liard.vercel.app',
    github: 'https://github.com/AnushAdk04/syncra',
    screenshots: [
      {
        src: syncraGeneralChat,
        alt: 'Syncra general chat interface with channel messages, emoji reactions, and sidebar',
      },
      {
        src: syncraAudioVideoRoom,
        alt: 'Real-time mesh-topology WebRTC video and audio meeting room with controls',
      },
      {
        src: syncraOrgAnalytics,
        alt: 'Organization analytics dashboard showing daily activity, top members, and channel stats',
      },
      {
        src: syncraOrgSettings,
        alt: 'Organization settings panel for member management, roles, and inviting teammates',
      },
      {
        src: syncraProfileAndStatus,
        alt: 'User profile customization modal with custom status and emoji selection',
      },
      {
        src: syncraOrgCreate,
        alt: 'Create workspace screen for initializing a new multi-tenant organization',
      },
    ],
  },
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
    tags: ['React 19', 'Node.js', 'Express', 'PostgreSQL', 'Leaflet.js', 'Tailwind CSS'],
    description: 'A full-stack, production-ready real estate portal where users can discover, compare, and manage properties with ease.',
    longDescription:
      'Buyer Portal is a comprehensive, full-stack real estate marketplace designed for buyers, sellers, and administrators. It features a robust high-performance search engine, interactive maps via Leaflet.js with pin clustering, dynamic EMI visualization and analytics via Recharts, and a data-driven admin dashboard, all wrapped in a sleek glassmorphic React 19 UI. Users can promote and feature properties via eSewa and Khalti sandbox checkouts. The system supports full role-based access control, JWT authentication, auto-optimized image transforms via Cloudinary, and transactional email alerts via Resend.',
    coverImage: buyerPortalHomepage,
    role: 'Full Stack Developer',
    duration: 'Completed',
    impact: 'Delivered a high-performance property exploration ecosystem with integrated sandbox payments and seamless geographic mapping.',
    tools: ['React 19', 'Vite 8', 'PostgreSQL', 'Node.js', 'Express.js', 'Tailwind CSS', 'Leaflet.js', 'Recharts', 'Cloudinary', 'Resend', 'eSewa & Khalti APIs'],
    link: 'https://buyer-portal-alpha.vercel.app/',
    github: 'https://github.com/AnushAdk04/Buyer-Portal',
    screenshots: [
      {
        src: buyerPortalHomepage,
        alt: 'Buyer Portal homepage showing premium property marketplace search interface',
      },
      {
        src: buyerPortalPropertyMap,
        alt: 'Property details with interactive Leaflet.js map and description',
      },
      {
        src: buyerPortalAdminDashboard,
        alt: 'Admin analytics dashboard with user, properties, and payment statistics',
      },
      {
        src: buyerPortalEMICalculator,
        alt: 'EMI Mortgage loan calculator with interactive visualization',
      },
      {
        src: buyerPortalAIAssistant,
        alt: 'AI assistant chat interface for property recommendations and assistance',
      },
      {
        src: buyerPortalUploadProperty,
        alt: 'Upload property listing form with image upload inputs',
      },
      {
        src: buyerPortalPropertyInquiries,
        alt: 'Property inquiries and messages management panel',
      },
      {
        src: buyerPortalAboutPage,
        alt: 'About page explaining platform features and services',
      },
      {
        src: buyerPortalLightMode,
        alt: 'Light mode display of the marketplace search results',
      },
      {
        src: buyerPortalProfile,
        alt: 'User profile and saved favorites panel',
      },
      {
        src: buyerPortalSellerProfile,
        alt: 'Seller dashboard and details page',
      },
      {
        src: buyerPortalLogin,
        alt: 'Sleek login screen showing security check integration',
      },
    ],
  },
  {
    id: 5,
    slug: 'snake-game-using-js',
    title: 'Snake Game Using JS',
    category: 'Fun and Games',
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

export const projectCategories = ['All', 'Full Stack Web App', 'Web Development', 'Mobile App Development', 'Fun and Games'];

export const getProjectBySlug = (slug) => projectsData.find((project) => project.slug === slug);
