import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaEnvelope, FaPhoneAlt, FaArrowRight } from 'react-icons/fa';
import { getRelatedServices, getServiceBySlug } from '../data/services';
import { setSEOMetadata } from '../utils/seo';

const ServiceDetailsPage = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  useEffect(() => {
    if (service) {
      setSEOMetadata(
        `${service.title} | Services`,
        service.longDescription,
        `${service.title}, ${service.category}, Anush Adhikari, website development, UI UX design, mobile app development`,
        service.heroImage
      );
    }
  }, [service]);

  if (!service) {
    return (
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-orange-600 font-semibold">404</p>
          <h1 className="text-4xl font-bold text-slate-900">Service not found</h1>
          <p className="text-slate-600">The requested service page does not exist.</p>
          <Link
            to="/services"
            className="inline-flex items-center justify-center rounded-lg bg-orange-600 px-6 py-3 font-medium text-white transition-colors hover:bg-orange-700"
          >
            Back to Services
          </Link>
        </div>
      </section>
    );
  }

  const relatedServices = getRelatedServices(service);

  return (
    <section className="bg-slate-50 py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        <Link to="/services" className="inline-flex items-center gap-2 font-semibold text-slate-700 hover:text-orange-600">
          <FaArrowLeft size={14} />
          Back to Services
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.8fr)_minmax(320px,0.9fr)] gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-4 md:p-6 shadow-md"
          >
            <div className="overflow-hidden rounded-2xl bg-slate-100">
              <img
                src={service.heroImage}
                alt={`${service.title} detail`}
                className="h-[320px] w-full object-cover md:h-[420px]"
              />
            </div>

            <div className="mt-8 space-y-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600 mb-2">
                  {service.category}
                </p>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900">{service.title}</h1>
                <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">{service.longDescription}</p>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-slate-900">Itinerary & Details</h2>
                  <p className="text-slate-600">{service.overview}</p>
                  <div className="space-y-5">
                    {service.details.map((item) => (
                      <div key={item.heading}>
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.heading}</h3>
                        <p className="text-slate-600 leading-relaxed">{item.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-gradient-to-r from-teal-700 to-slate-900 p-8 text-center text-white shadow-lg">
                <h2 className="text-2xl font-bold mb-2">{service.cta.title}</h2>
                <p className="mb-6">{service.cta.description}</p>
                <Link
                  to={service.cta.to}
                  className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-6 py-3 font-semibold text-white shadow-md transition-transform hover:scale-105 hover:bg-orange-700"
                >
                  Contact Me
                  <FaArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md">
              <h2 className="text-lg font-bold text-slate-900 mb-4">Our capabilities include:</h2>
              <ul className="space-y-3 text-slate-600">
                {service.capabilities.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md">
              <h2 className="text-lg font-bold text-slate-900 mb-4">{service.contact.title}</h2>
              <div className="space-y-3 text-slate-600">
                <a href={`tel:${service.contact.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 hover:text-orange-600 transition-colors">
                  <FaPhoneAlt className="text-orange-500" size={14} />
                  <span>{service.contact.phone}</span>
                </a>
                <a href={`mailto:${service.contact.email}`} className="flex items-center gap-2 hover:text-orange-600 transition-colors">
                  <FaEnvelope className="text-orange-500" size={14} />
                  <span>{service.contact.email}</span>
                </a>
              </div>
            </div>
          </motion.aside>
        </div>

        <div className="space-y-5">
          <h2 className="text-3xl font-bold text-slate-900">Related services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((related) => (
              <Link key={related.slug} to={`/services/${related.slug}`} className="group overflow-hidden rounded-2xl bg-white shadow-md transition-transform hover:-translate-y-1">
                <div className="h-40 overflow-hidden bg-slate-100">
                  <img
                    src={related.thumbnail}
                    alt={related.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600 mb-2">{related.category}</p>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{related.title}</h3>
                  <p className="text-sm text-slate-600 mb-4">{related.shortDescription}</p>
                  <span className="inline-flex items-center gap-2 font-semibold text-orange-600">
                    View details
                    <FaArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsPage;