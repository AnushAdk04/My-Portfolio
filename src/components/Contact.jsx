import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { SectionWrapper, FormInput, Button } from './index';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'contactanushadhikari@gmail.com',
      link: 'mailto:contactanushadhikari@gmail.com',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+977 9800000000',
      link: 'tel:+977-9800000000',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Kathmandu, Nepal',
      link: null,
    },
  ];

  const socialLinks = [
    { icon: FaFacebook, url: 'https://www.facebook.com/Anush.Adhikari11', label: 'Facebook' },
    { icon: FaInstagram, url: 'https://www.instagram.com/anushadhikari11/', label: 'Instagram' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/anushadhikari/', label: 'LinkedIn' },
    { icon: FaGithub, url: 'https://github.com/AnushAdk04', label: 'GitHub' },
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fix the errors above');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://getform.io/f/pboxwqoa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Message sent successfully! I will get back to you soon.');
        setFormData({ fullName: '', email: '', subject: '', message: '' });
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <SectionWrapper title="Get In Touch" subtitle="Let's discuss your next project">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Info */}
        <motion.div
          className="lg:col-span-1"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h3>
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  {info.link ? (
                    <a href={info.link} className="flex gap-4 items-start hover:translate-x-2 transition-transform">
                      <div className="p-3 bg-orange-100 rounded-lg">
                        <Icon className="text-orange-600 text-2xl" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-600 font-medium">{info.label}</p>
                        <p className="text-lg text-slate-900 font-semibold hover:text-orange-600">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex gap-4 items-start">
                      <div className="p-3 bg-orange-100 rounded-lg">
                        <Icon className="text-orange-600 text-2xl" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-600 font-medium">{info.label}</p>
                        <p className="text-lg text-slate-900 font-semibold">{info.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="mt-12">
            <h4 className="text-lg font-bold text-slate-900 mb-4">Follow Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-orange-600 hover:text-white transition-all"
                  aria-label={social.label}
                >
                  <Icon className="text-lg" />
                </motion.a>
              );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="lg:col-span-2 bg-white p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
            <motion.div variants={itemVariants}>
              <FormInput
                label="Full Name"
                name="fullName"
                placeholder="Your name"
                value={formData.fullName}
                onChange={handleChange}
                error={errors.fullName}
                required
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <FormInput
                label="Email"
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                required
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <FormInput
                label="Subject"
                name="subject"
                placeholder="What is this about?"
                value={formData.subject}
                onChange={handleChange}
                error={errors.subject}
                required
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <FormInput
                label="Message"
                type="textarea"
                name="message"
                placeholder="Tell me more about your project..."
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
                required
              />
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4">
              <Button type="submit" disabled={isSubmitting} className="flex-1">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
              <Button
                type="reset"
                variant="secondary"
                onClick={() => {
                  setFormData({ fullName: '', email: '', subject: '', message: '' });
                  setErrors({});
                }}
                className="flex-1"
              >
                Clear
              </Button>
            </motion.div>
          </motion.div>
        </motion.form>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
