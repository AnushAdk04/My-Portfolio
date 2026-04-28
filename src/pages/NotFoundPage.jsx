import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center space-y-4">
        <p className="text-orange-600 font-semibold">404</p>
        <h1 className="text-4xl font-bold">Page not found</h1>
        <p className="text-slate-600">The page you are looking for does not exist.</p>
        <Link
          to="/"
          className="inline-block px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-md"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
