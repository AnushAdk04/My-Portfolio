import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNode, FaFigma, FaPalette, FaPaintBrush, FaHtml5, FaCss3Alt, FaDatabase, FaCloud, FaPaperPlane, FaPhotoVideo } from 'react-icons/fa';
import { SiJavascript, SiNextdotjs, SiTailwindcss, SiTypescript, SiExpress, SiMysql, SiPostgresql, SiMongodb, SiSupabase, SiPostman, SiCloudinary, SiVercel, SiFirebase, SiRedis, SiGithubcopilot, SiAnthropic } from 'react-icons/si';
import bannerImage from '../assets/myphoto2.png';
import { SectionWrapper } from './index';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const skills = [
    {
      category: 'Frontend',
      items: [
        { name: 'React.js', icon: FaReact, color: 'text-blue-400' },
        { name: 'Next.js', icon: SiNextdotjs, color: 'text-slate-900' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
        { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
        { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
        { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500' },
      ],
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', icon: FaNode, color: 'text-green-600' },
        { name: 'Express.js', icon: SiExpress, color: 'text-slate-700' },
        { name: 'Supabase', icon: SiSupabase, color: 'text-emerald-500' },
        { name: 'Firebase', icon: SiFirebase, color: 'text-amber-500' },
        { name: 'Resend', icon: FaPaperPlane, color: 'text-slate-600' },
        { name: 'Postman', icon: SiPostman, color: 'text-orange-500' },
      ],
    },
    {
      category: 'Databases & Cloud',
      items: [
        { name: 'MySQL', icon: SiMysql, color: 'text-blue-500' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-700' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-700' },
        { name: 'Upstash Redis', icon: SiRedis, color: 'text-red-500' },
        { name: 'Vercel', icon: SiVercel, color: 'text-slate-900' },
        { name: 'Cloudinary', icon: SiCloudinary, color: 'text-sky-500' },
        { name: 'Render', icon: FaCloud, color: 'text-indigo-500' },
        { name: 'Database Design', icon: FaDatabase, color: 'text-slate-600' },
      ],
    },
    {
      category: 'Design',
      items: [
        { name: 'Figma', icon: FaFigma, color: 'text-purple-500' },
        { name: 'Adobe Photoshop', icon: FaPhotoVideo, color: 'text-blue-800' },
        { name: 'UI Wireframing', icon: FaPaintBrush, color: 'text-blue-600' },
        { name: 'UI/UX Design', icon: FaPalette, color: 'text-pink-500' },
      ],
    },
    {
      category: 'Preferred AI Agents',
      items: [
        { name: 'GitHub Copilot', icon: SiGithubcopilot, color: 'text-indigo-500' },
        { name: 'Claude AI', icon: SiAnthropic, color: 'text-orange-600' },
      ],
    },
  ];

  const experience = [
    {
      year: '2025 Nov - Present',
      title: 'Full Stack Developer',
      company: 'Gravity Inc Pvt. Ltd',
      description: 'Working as a full stack developer at Gravity Inc Pvt. Ltd, building and maintaining web applications with modern technologies.',
    },
    {
      year: '2025 Sept - 2026 Jan',
      title: 'React.js Developer/Instructor',
      company: 'Chitwan College of Technology',
      description: 'Working with students on various React.js projects and making them efficient in React.js and web development.',
    },
    {
      year: '2025 Jan - 2025 Jun',
      title: 'UI/UX Designer/Instructor',
      company: 'Chitwan College of Technology',
      description: 'Teaching UI/UX design to students and working on various UI/UX design projects.',
    },
    {
      year: '2024 Apr - 2025 Feb',
      title: 'Next.js Developer',
      company: 'Nexus Code n Tech Pvt. Ltd',
      description: 'Developed and maintained a range of web applications using Next.js and related technologies. Contributed to front-end development, feature implementation, and performance optimization. Collaborated with cross-functional teams to deliver high-quality software solutions.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <SectionWrapper title="About Me" subtitle="My journey, skills, and experience">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 items-start mb-16">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center lg:items-start gap-6"
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl blur-2xl opacity-30"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <img
              className="relative w-72 md:w-80 h-72 md:h-80 rounded-2xl shadow-2xl object-cover"
              src={bannerImage}
              alt="Anush Adhikari"
            />
          </div>

          <div className="w-full max-w-md grid grid-cols-2 gap-3">
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
              <p className="text-xs uppercase tracking-wide text-slate-500 mb-1">Primary Role</p>
              <p className="font-semibold text-slate-900">Full Stack Developer</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
              <p className="text-xs uppercase tracking-wide text-slate-500 mb-1">Focus</p>
              <p className="font-semibold text-slate-900">Web Apps + UI/UX</p>
            </div>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            Full Stack Developer & UI/UX Designer
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            I'm Anush Adhikari, a full stack developer focused on building scalable web applications and intuitive
            user experiences. I enjoy solving real-world problems through practical and maintainable products.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            I work closely on both product experience and technical execution, with attention to clean architecture,
            performance, and usability from first concept to final deployment.
          </p>

          {/* Tabs */}
          <div className="flex gap-4 mb-8 border-b border-slate-200">
            {['skills', 'experience'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 px-6 font-semibold transition-all ${
                  activeTab === tab
                    ? 'text-orange-600 border-b-2 border-orange-600'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'skills' && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-6"
              >
                {skills.map((skillGroup) => (
                  <div key={skillGroup.category}>
                    <h4 className="text-lg font-semibold text-slate-900 mb-4">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-3">
                      {skillGroup.items.map((skill) => {
                        const Icon = skill.icon;
                        return (
                          <motion.div
                            key={skill.name}
                            variants={itemVariants}
                            className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg hover:bg-orange-100 transition-colors"
                          >
                            {Icon && <Icon className={`${skill.color} text-xl`} />}
                            <span className="font-medium text-slate-700">{skill.name}</span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'experience' && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-6"
              >
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="pl-8 border-l-4 border-orange-600 relative"
                  >
                    <div className="absolute -left-3 w-6 h-6 bg-orange-600 rounded-full" />
                    <p className="text-sm font-semibold text-orange-600 mb-1">{exp.year}</p>
                    <h4 className="text-xl font-bold text-slate-900">{exp.title}</h4>
                    <p className="text-slate-600 mb-2">{exp.company}</p>
                    <p className="text-slate-600">{exp.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;
