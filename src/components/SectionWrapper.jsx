import React from 'react';

/**
 * SectionWrapper Component
 * Provides consistent section styling and spacing
 * Variants: default, alternate (gray background)
 */
export const SectionWrapper = ({
  children,
  title,
  subtitle,
  className = '',
  variant = 'default',
  ...props
}) => {
  const baseStyles = 'py-20 px-4 md:px-8 lg:px-16';

  const variants = {
    default: 'bg-white',
    alternate: 'bg-slate-50',
  };

  return (
    <section
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <div className="max-w-7xl mx-auto">
        {title && (
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{title}</h2>
            {subtitle && (
              <p className="text-lg text-slate-600 max-w-2xl">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
