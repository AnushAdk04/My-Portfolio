import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const CVPage = () => {
  return (
    <section className="bg-slate-50 min-h-[calc(100vh-80px)] px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600 mb-2">
              Resume
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Curriculum Vitae</h1>
            <p className="text-slate-600 mt-2 max-w-2xl">
              View the CV below or download a copy without opening a new tab.
            </p>
          </div>

          <a
            href="/CV.pdf"
            download
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-orange-700"
          >
            <FaDownload size={14} />
            Download PDF
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg"
        >
          <iframe
            title="Anush Adhikari CV"
            src="/CV.pdf"
            className="h-[78vh] w-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CVPage;
